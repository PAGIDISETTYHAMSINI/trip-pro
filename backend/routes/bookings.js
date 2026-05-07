const express = require('express');
const nodemailer = require('nodemailer');
const Booking = require('../models/Booking');
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

// Helper to generate a day-by-day schedule
const generateSchedule = (itinerary, days) => {
  const schedule = [];
  const activities = itinerary.activities ? [...itinerary.activities] : [];
  const restaurants = itinerary.hotel?.nearbyRestaurants || ["Local Cafe", "Downtown Restaurant"];
  
  for (let i = 1; i <= days; i++) {
    const dayPlan = { day: i, morning: '', afternoon: '', evening: '' };
    
    // Day 1: Arrival
    if (i === 1) {
      const transportMethod = itinerary.transport?.method || 'Transport';
      const transportType = itinerary.transport?.type || 'Standard';
      const hotelType = itinerary.hotel?.type || 'Hotel';
      dayPlan.morning = `Arrive via ${transportMethod} (${transportType}) and check-in to your ${hotelType}.`;
    } else if (i === days) {
      const transportMethod = itinerary.transport?.method || 'Transport';
      dayPlan.morning = `Check-out from hotel and prepare for departure via ${transportMethod}.`;
    }


    // Distribute activities based on suggested time
    let morningActs = activities.filter(a => a.suggestedTime.includes('Morning'));
    let afternoonActs = activities.filter(a => a.suggestedTime.includes('Afternoon'));
    let eveningActs = activities.filter(a => a.suggestedTime.includes('Evening'));

    if (morningActs.length > 0 && !dayPlan.morning) {
      const act = morningActs.shift();
      activities.splice(activities.indexOf(act), 1);
      dayPlan.morning = `Activity: ${act.name}. ${act.description} (${act.proximity})`;
    } else if (!dayPlan.morning) {
      dayPlan.morning = "Relax at the hotel or explore the local neighborhood.";
    }

    if (afternoonActs.length > 0) {
      const act = afternoonActs.shift();
      activities.splice(activities.indexOf(act), 1);
      dayPlan.afternoon = `Activity: ${act.name}. ${act.description} (${act.proximity})`;
    } else {
      dayPlan.afternoon = `Enjoy lunch at ${restaurants[0]} and shop for local souvenirs.`;
    }

    if (eveningActs.length > 0) {
      const act = eveningActs.shift();
      activities.splice(activities.indexOf(act), 1);
      dayPlan.evening = `Activity: ${act.name}. ${act.description} (${act.proximity})`;
    } else {
      dayPlan.evening = `Relax and have a wonderful dinner at ${restaurants[1]}.`;
    }

    schedule.push(dayPlan);
  }

  // If any activities left over (unlikely but safe fallback), push to random empty slots
  while(activities.length > 0) {
    const act = activities.shift();
    const randomDay = schedule[Math.floor(Math.random() * (days - 1)) + 1]; // avoid day 1 if possible
    if(randomDay) {
       randomDay.afternoon += ` | Extra: ${act.name}`;
    }
  }

  return schedule;
};

// Create a mail transporter (using Ethereal for testing)
const sendScheduleEmail = async (userEmail, destinationName, schedule, totalCost, currencySymbol) => {
  try {
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    let scheduleHtml = `<h2>Your Detailed Trip Schedule to ${destinationName}</h2>
    <p>Total Cost: ${currencySymbol}${totalCost.toLocaleString()}</p>
    <hr/>`;

    schedule.forEach(d => {
      scheduleHtml += `
        <h3>Day ${d.day}</h3>
        <ul>
          <li><strong>Morning:</strong> ${d.morning}</li>
          <li><strong>Afternoon:</strong> ${d.afternoon}</li>
          <li><strong>Evening:</strong> ${d.evening}</li>
        </ul>
      `;
    });

    const info = await transporter.sendMail({
      from: '"Budget Trip Planner" <no-reply@budgetplanner.com>',
      to: userEmail,
      subject: `Your Complete Itinerary for ${destinationName}`,
      html: scheduleHtml,
    });

    console.log("Email sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Failed to send email:", err);
  }
};

// Create a new booking
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { destinationId, destinationName, totalCost, days, itineraryDetails, coinsUsed } = req.body;
    
    const user = await User.findByPk(req.user);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Handle coins deduction if used
    if (coinsUsed > 0) {
      if (user.coins >= coinsUsed) {
        user.coins -= coinsUsed;
      } else {
        return res.status(400).json({ error: 'Insufficient coins' });
      }
    }

    // Award new coins (5% of payment)
    const coinsEarned = Math.round(totalCost * 0.05);
    user.coins += coinsEarned;
    await user.save();

    const schedule = generateSchedule(itineraryDetails, days);

    const booking = await Booking.create({
      userId: req.user,
      destinationId,
      destinationName,
      totalCost,
      days,
      itineraryDetails,
      schedule,
      status: 'PAID'
    });

    // Send email asynchronously
    sendScheduleEmail(user.email, destinationName, schedule, totalCost, itineraryDetails.currencySymbol || '$');

    res.status(201).json({ message: 'Booking successful', booking, coinsEarned, currentBalance: user.coins });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while booking' });
  }
});

// Get user's bookings
router.get('/', authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.findAll({ 
      where: { userId: req.user },
      order: [['createdAt', 'DESC']]
    });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error fetching bookings' });
  }
});

// Cancel a booking
router.put('/:id/cancel', authMiddleware, async (req, res) => {
  try {
    const booking = await Booking.findOne({ where: { id: req.params.id, userId: req.user } });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    if (booking.status === 'CANCELLED') {
      return res.status(400).json({ error: 'Booking is already cancelled' });
    }

    booking.status = 'CANCELLED';
    await booking.save();

    res.json({ message: 'Booking cancelled successfully', booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error cancelling booking' });
  }
});

module.exports = router;
