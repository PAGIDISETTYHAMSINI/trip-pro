const fs = require('fs');
const path = require('path');
const destinations = require('./data.js');

const getRandomRating = (min, max) => (Math.random() * (max - min) + min).toFixed(1);

const enriched = destinations.map(dest => {
  // 5 FLIGHTS
  const flights = [
    { id: `f1-${dest.id}`, type: 'Economy', agency: 'Air India', name: 'AI-402 Direct', cost: dest.name.includes('India') ? 4500 : 400, departureTime: '08:30 AM' },
    { id: `f2-${dest.id}`, type: 'Economy', agency: 'IndiGo', name: '6E-2104', cost: dest.name.includes('India') ? 3800 : 350, departureTime: '10:15 AM' },
    { id: `f3-${dest.id}`, type: 'Business', agency: 'Vistara', name: 'UK-812', cost: dest.name.includes('India') ? 12000 : 1100, departureTime: '02:00 PM' },
    { id: `f4-${dest.id}`, type: 'Premium', agency: 'Qatar Airways', name: 'QR-501', cost: dest.name.includes('India') ? 25000 : 2500, departureTime: '09:00 PM' },
    { id: `f5-${dest.id}`, type: 'Economy', agency: 'SpiceJet', name: 'SG-123', cost: dest.name.includes('India') ? 3200 : 300, departureTime: '06:00 AM' }
  ];

  // 5 TRAINS
  const trains = [
    { id: `t1-${dest.id}`, type: 'Rajdhani Express', agency: 'Indian Railways', name: '22435 Platinum', cost: dest.name.includes('India') ? 2800 : 80, departureTime: '04:30 PM' },
    { id: `t2-${dest.id}`, type: 'Shatabdi Express', agency: 'Indian Railways', name: '12002 Morning', cost: dest.name.includes('India') ? 1800 : 60, departureTime: '06:00 AM' },
    { id: `t3-${dest.id}`, type: 'Duronto Express', agency: 'Indian Railways', name: '12260 Sleeper', cost: dest.name.includes('India') ? 1200 : 40, departureTime: '11:00 PM' },
    { id: `t4-${dest.id}`, type: 'Garib Rath', agency: 'Indian Railways', name: '12910 Budget', cost: dest.name.includes('India') ? 800 : 30, departureTime: '10:00 AM' },
    { id: `t5-${dest.id}`, type: 'Tejas Express', agency: 'Indian Railways', name: '22672 Luxury', cost: dest.name.includes('India') ? 3500 : 100, departureTime: '01:30 PM' }
  ];

  // 5 BUSES
  const buses = [
    { id: `b1-${dest.id}`, type: 'Volvo Multi-Axle AC', agency: 'Zingbus', name: 'Premium Sleeper', cost: dest.name.includes('India') ? 1500 : 50, departureTime: '10:00 PM' },
    { id: `b2-${dest.id}`, type: 'Scania AC', agency: 'Orange Travels', name: 'Executive Seater', cost: dest.name.includes('India') ? 1200 : 40, departureTime: '08:00 AM' },
    { id: `b3-${dest.id}`, type: 'Mercedes AC', agency: 'SRS Travels', name: 'Night Glide', cost: dest.name.includes('India') ? 1800 : 65, departureTime: '11:30 PM' },
    { id: `b4-${dest.id}`, type: 'Semi-Sleeper Non-AC', agency: 'KSRTC', name: 'Janrath', cost: dest.name.includes('India') ? 600 : 25, departureTime: '07:00 AM' },
    { id: `b5-${dest.id}`, type: 'Mini Bus Luxury', agency: 'Local Tour Bus', name: 'Day Explorer', cost: dest.name.includes('India') ? 900 : 35, departureTime: '09:00 AM' }
  ];

  // 5 CARS
  const cars = [
    { id: `c1-${dest.id}`, type: 'Hatchback (Swift/WagonR)', agency: 'Ola Rentals', name: 'Self-Drive/Chauffeur', cost: dest.name.includes('India') ? 2500 : 80, departureTime: 'Flexible' },
    { id: `c2-${dest.id}`, type: 'Sedan (Dzire/City)', agency: 'Uber Intercity', name: 'Business Class', cost: dest.name.includes('India') ? 3500 : 120, departureTime: 'Flexible' },
    { id: `c3-${dest.id}`, type: 'SUV (Innova/Crysta)', agency: 'Zoomcar', name: 'Family Group', cost: dest.name.includes('India') ? 5500 : 180, departureTime: 'Flexible' },
    { id: `c4-${dest.id}`, type: 'Luxury Sedan (BMW/Audi)', agency: 'BlackBucks', name: 'Elite Travel', cost: dest.name.includes('India') ? 15000 : 500, departureTime: 'Flexible' },
    { id: `c5-${dest.id}`, type: 'Force Traveller (12 Seater)', agency: 'Tempo Travellers', name: 'Group Tourer', cost: dest.name.includes('India') ? 8000 : 250, departureTime: 'Flexible' }
  ];

  const detailedTransport = [...flights, ...trains, ...buses, ...cars];

  // 10+ RESTAURANTS
  const restaurants = [
    { id: 'r1', name: 'The Local Spice Route', rating: getRandomRating(4.0, 4.9), menuHighlights: ['Authentic Thali', 'Spicy Curries'], averageCost: dest.name.includes('India') ? 500 : 25, category: 'Traditional', openingTime: '12:00 PM - 11:00 PM' },
    { id: 'r2', name: 'Skyline Bistro', rating: getRandomRating(4.2, 5.0), menuHighlights: ['Pasta', 'Mocktails'], averageCost: dest.name.includes('India') ? 1200 : 60, category: 'Continental', openingTime: '10:00 AM - 12:00 AM' },
    { id: 'r3', name: 'Street Bite Hub', rating: getRandomRating(3.8, 4.5), menuHighlights: ['Burgers', 'Local Snacks'], averageCost: dest.name.includes('India') ? 200 : 15, category: 'Street Food', openingTime: '04:00 PM - 02:00 AM' },
    { id: 'r4', name: 'Royal Dining Palace', rating: getRandomRating(4.5, 5.0), menuHighlights: ['Gourmet Platter', 'Fine Wine'], averageCost: dest.name.includes('India') ? 2500 : 120, category: 'Fine Dining', openingTime: '07:00 PM - 11:30 PM' },
    { id: 'r5', name: 'Oceanic Seafood', rating: getRandomRating(4.1, 4.8), menuHighlights: ['Grilled Fish', 'Lobster'], averageCost: dest.name.includes('India') ? 1500 : 70, category: 'Seafood', openingTime: '11:00 AM - 10:30 PM' },
    { id: 'r6', name: 'Green Garden Cafe', rating: getRandomRating(4.3, 4.9), menuHighlights: ['Vegan Bowl', 'Smoothies'], averageCost: dest.name.includes('India') ? 600 : 30, category: 'Vegan', openingTime: '08:00 AM - 08:00 PM' },
    { id: 'r7', name: 'Tandoori Tales', rating: getRandomRating(4.0, 4.7), menuHighlights: ['Kebabs', 'Biryani'], averageCost: dest.name.includes('India') ? 800 : 40, category: 'Traditional', openingTime: '01:00 PM - 11:00 PM' },
    { id: 'r8', name: 'Wok & Roll', rating: getRandomRating(4.2, 4.6), menuHighlights: ['Dim Sums', 'Noodles'], averageCost: dest.name.includes('India') ? 700 : 35, category: 'Asian', openingTime: '12:30 PM - 11:00 PM' },
    { id: 'r9', name: 'Brew & Bake', rating: getRandomRating(4.4, 4.9), menuHighlights: ['Artisan Bread', 'Latte'], averageCost: dest.name.includes('India') ? 400 : 20, category: 'Cafe', openingTime: '07:00 AM - 09:00 PM' },
    { id: 'r10', name: 'Steak House 101', rating: getRandomRating(4.1, 4.8), menuHighlights: ['Ribeye', 'Mashed Potatoes'], averageCost: dest.name.includes('India') ? 2000 : 90, category: 'Steakhouse', openingTime: '06:00 PM - 11:00 PM' }
  ];

  // 10+ ACTIVITIES (Main + Hidden Gems)
  const activities = [
    { name: 'City Landmark Tour', cost: dest.name.includes('India') ? 500 : 25, rating: getRandomRating(4.5, 5.0), openingTime: '09:00 AM', closingTime: '06:00 PM', category: 'Main' },
    { name: 'National Museum Visit', cost: dest.name.includes('India') ? 200 : 15, rating: getRandomRating(4.2, 4.8), openingTime: '10:00 AM', closingTime: '05:00 PM', category: 'Main' },
    { name: 'Old Town Walking Trail', cost: 0, rating: getRandomRating(4.6, 5.0), openingTime: 'Anytime', closingTime: 'Anytime', category: 'Hidden Gem' },
    { name: 'Secret Garden Photography', cost: dest.name.includes('India') ? 100 : 10, rating: getRandomRating(4.7, 5.0), openingTime: '06:00 AM', closingTime: '06:00 PM', category: 'Hidden Gem' },
    { name: 'Local Artisan Workshop', cost: dest.name.includes('India') ? 1200 : 50, rating: getRandomRating(4.8, 5.0), openingTime: '11:00 AM', closingTime: '04:00 PM', category: 'Cultural' },
    { name: 'Sunset View Point Trek', cost: 0, rating: getRandomRating(4.9, 5.0), openingTime: '04:00 PM', closingTime: '07:00 PM', category: 'Adventure' },
    { name: 'River Rafting / Boating', cost: dest.name.includes('India') ? 1500 : 70, rating: getRandomRating(4.5, 4.9), openingTime: '08:00 AM', closingTime: '04:00 PM', category: 'Adventure' },
    { name: 'Hidden Night Market', cost: 0, rating: getRandomRating(4.3, 4.7), openingTime: '07:00 PM', closingTime: '02:00 AM', category: 'Hidden Gem' },
    { name: 'Cooking Class (Local Food)', cost: dest.name.includes('India') ? 2000 : 100, rating: getRandomRating(4.6, 5.0), openingTime: '10:00 AM', closingTime: '01:00 PM', category: 'Cultural' },
    { name: 'Nature Sanctuary Visit', cost: dest.name.includes('India') ? 400 : 30, rating: getRandomRating(4.4, 4.8), openingTime: '07:00 AM', closingTime: '05:30 PM', category: 'Main' }
  ];

  return {
    ...dest,
    detailedTransport: detailedTransport,
    restaurants: restaurants,
    activities: activities,
    cancellationPolicy: "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard."
  };
});

const content = `const destinations = ${JSON.stringify(enriched, null, 2)};\n\nmodule.exports = destinations;`;
fs.writeFileSync(path.join(__dirname, 'data.js'), content);
console.log("Successfully enriched data.js v6 with massive variety!");
