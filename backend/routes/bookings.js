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
  
  // Try to use selected restaurants, fallback to hotel or generic
  const restaurants = itinerary.restaurants?.length > 0 
    ? itinerary.restaurants 
    : (itinerary.hotel?.nearbyRestaurants || ["Local Cafe", "Downtown Restaurant"]);
  
  const getResName = (r) => typeof r === 'string' ? r : (r.name || 'Local Restaurant');
  
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


    // Distribute activities based on suggested time (safely)
    let morningActs = activities.filter(a => a.suggestedTime && a.suggestedTime.includes('Morning'));
    let afternoonActs = activities.filter(a => a.suggestedTime && a.suggestedTime.includes('Afternoon'));
    let eveningActs = activities.filter(a => a.suggestedTime && a.suggestedTime.includes('Evening'));
    
    // Fallback for activities without specific times (distribute them)
    let unspecifiedActs = activities.filter(a => !a.suggestedTime);

    if (morningActs.length > 0 && !dayPlan.morning) {
      const act = morningActs.shift();
      activities.splice(activities.indexOf(act), 1);
      dayPlan.morning = `Activity: ${act.name}. ${act.description || 'Visit this landmark.'} (${act.proximity || 'Nearby'})`;
    } else if (unspecifiedActs.length > 0 && !dayPlan.morning) {
      const act = unspecifiedActs.shift();
      activities.splice(activities.indexOf(act), 1);
      dayPlan.morning = `Activity: ${act.name}. Explore this local gem.`;
    } else if (!dayPlan.morning) {
      dayPlan.morning = "Relax at the hotel or explore the local neighborhood.";
    }

    if (afternoonActs.length > 0) {
      const act = afternoonActs.shift();
      activities.splice(activities.indexOf(act), 1);
      dayPlan.afternoon = `Activity: ${act.name}. ${act.description || 'Enjoy the scenery.'} (${act.proximity || 'Central'})`;
    } else {
      dayPlan.afternoon = `Enjoy lunch at ${getResName(restaurants[0])} and shop for local souvenirs.`;
    }

    if (eveningActs.length > 0) {
      const act = eveningActs.shift();
      activities.splice(activities.indexOf(act), 1);
      dayPlan.evening = `Activity: ${act.name}. ${act.description || 'Relaxing experience.'} (${act.proximity || 'Local Area'})`;
    } else {
      dayPlan.evening = `Relax and have a wonderful dinner at ${getResName(restaurants[1] || restaurants[0])}.`;
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

    let scheduleHtml = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 40px 20px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -1px;">Trip<span style="color: #60a5fa;">Pro</span></h1>
          <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">Your India adventure is confirmed!</p>
        </div>
        <div style="padding: 30px;">
          <h2 style="color: #0f172a; font-size: 22px; font-weight: 800; margin-bottom: 20px;">Destination: ${destinationName}</h2>
          <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
            <p style="margin: 0; color: #64748b; font-size: 14px; text-transform: uppercase; font-weight: 700;">Total Package Value</p>
            <p style="margin: 5px 0 0; color: #2563eb; font-size: 32px; font-weight: 900;">${currencySymbol}${totalCost.toLocaleString()}</p>
          </div>
          
          <h3 style="color: #0f172a; font-size: 18px; font-weight: 800; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-bottom: 20px;">Your Day-by-Day Journey</h3>
          ${schedule.map(d => `
            <div style="margin-bottom: 25px;">
              <p style="color: #2563eb; font-weight: 800; margin: 0 0 10px;">Day ${d.day}</p>
              <ul style="margin: 0; padding-left: 20px; color: #475569; line-height: 1.6; font-size: 15px;">
                <li><strong>Morning:</strong> ${d.morning}</li>
                <li><strong>Afternoon:</strong> ${d.afternoon}</li>
                <li><strong>Evening:</strong> ${d.evening}</li>
              </ul>
            </div>
          `).join('')}
          
          <div style="margin-top: 40px; text-align: center;">
            <a href="https://trip-pro-frontend.onrender.com/dashboard" style="display: inline-block; background: #2563eb; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px;">View Full Itinerary</a>
          </div>
        </div>
        <div style="background: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8;">
          <p>© 2026 Trip Pro AI. All rights reserved.</p>
          <p>Securely powered by Neon PostgreSQL Engine</p>
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: '"Trip Pro AI" <no-reply@trippro.com>',
      to: userEmail,
      subject: `🎒 Your Epic Trip to ${destinationName} is Ready!`,
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
    const { destinationId, destinationName, totalCost, days, itineraryDetails, coinsUsed, paymentId } = req.body;
    
    const user = await User.findByPk(req.user);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Ensure coins is at least 0 to avoid NaN
    if (user.coins === null || user.coins === undefined) user.coins = 0;

    // Handle coins deduction if used
    const coinsToDeduct = parseFloat(coinsUsed) || 0;
    if (coinsToDeduct > 0) {
      if (user.coins >= coinsToDeduct) {
        user.coins -= coinsToDeduct;
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
      status: 'PAID',
      paymentId: paymentId || 'MOCK_PAYMENT',
      coinsUsed: coinsToDeduct,
      totalTravelers: itineraryDetails.travelers?.total || 1,
      route: itineraryDetails.boardingPoint ? `${itineraryDetails.boardingPoint} ➔ ${destinationName}` : destinationName
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

// Get single booking by ID
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const booking = await Booking.findOne({ where: { id: req.params.id, userId: req.user } });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error fetching booking' });
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

// Admin Route: Get ALL bookings for visibility
router.get('/admin/all', async (req, res) => {
  try {
    const bookings = await Booking.findAll({ 
      include: [{ model: User, attributes: ['name', 'email'] }],
      order: [['createdAt', 'DESC']]
    });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error fetching all bookings' });
  }
});

module.exports = router;
