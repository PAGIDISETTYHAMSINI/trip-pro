const express = require('express');
const Booking = require('../models/Booking');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Create a new booking
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { destinationId, destinationName, totalCost, days, itineraryDetails } = req.body;

    const booking = await Booking.create({
      userId: req.user,
      destinationId,
      destinationName,
      totalCost,
      days,
      itineraryDetails
    });

    res.status(201).json({ message: 'Booking successful', booking });
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

module.exports = router;
