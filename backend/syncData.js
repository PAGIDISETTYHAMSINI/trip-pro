const fs = require('fs');
const path = require('path');

// Read the original file
const destinations = require('./data.js');

// Helper to generate a random number
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

destinations.forEach(dest => {
  let detailedTransport = [];
  const isIndian = dest.name.includes('India');
  const baseCost = isIndian ? 83 : 1;

  // Flights
  if (dest.flights && dest.flights.length > 0) {
    dest.flights.forEach((f, index) => {
      detailedTransport.push({
        id: `f${index + 1}-${dest.id}`,
        type: f.type,
        agency: isIndian ? (index % 2 === 0 ? 'IndiGo' : 'Air India') : (index % 2 === 0 ? 'Emirates' : 'Qatar Airways'),
        name: `Flight-${random(100, 999)}`,
        cost: f.cost,
        departureTime: `${random(6, 11)}:00 AM`
      });
    });
  } else {
     detailedTransport.push({ id: `f1-${dest.id}`, type: "Economy", agency: "Global Air", name: "GL-101", cost: 300 * baseCost, departureTime: "08:00 AM" });
     detailedTransport.push({ id: `f2-${dest.id}`, type: "Business", agency: "Premium Air", name: "PR-202", cost: 1200 * baseCost, departureTime: "11:00 AM" });
  }

  // Trains
  if (dest.trains && dest.trains.length > 0) {
    dest.trains.forEach((t, index) => {
      detailedTransport.push({
        id: `t${index + 1}-${dest.id}`,
        type: t.type,
        agency: isIndian ? 'Indian Railways' : 'EuroRail',
        name: `Express-${random(1000, 9999)}`,
        cost: t.cost,
        departureTime: `${random(1, 6)}:30 PM`
      });
    });
  } else {
    detailedTransport.push({ id: `t1-${dest.id}`, type: "Standard Train", agency: isIndian ? "Indian Railways" : "National Rail", name: `Exp-${random(100, 999)}`, cost: 80 * baseCost, departureTime: "02:00 PM" });
  }

  // Buses
  detailedTransport.push({
    id: `b1-${dest.id}`,
    type: "Luxury AC Sleeper",
    agency: "City Connect Travels",
    name: "Night Glide",
    cost: 50 * baseCost,
    departureTime: "10:00 PM"
  });
  detailedTransport.push({
    id: `b2-${dest.id}`,
    type: "Standard AC Bus",
    agency: "Regional Transit",
    name: "Day Cruiser",
    cost: 25 * baseCost,
    departureTime: "09:00 AM"
  });

  // Cars
  if (dest.cars && dest.cars.length > 0) {
    dest.cars.forEach((c, index) => {
      detailedTransport.push({
        id: `c${index + 1}-${dest.id}`,
        type: c.type,
        agency: "Zoomcar / Rental",
        name: "Private Chauffeur",
        cost: c.cost,
        departureTime: "Flexible"
      });
    });
  } else {
     detailedTransport.push({ id: `c1-${dest.id}`, type: "Sedan", agency: "Local Taxi", name: "City Cab", cost: 100 * baseCost, departureTime: "Flexible" });
     detailedTransport.push({ id: `c2-${dest.id}`, type: "SUV", agency: "Premium Rentals", name: "Family Tourer", cost: 180 * baseCost, departureTime: "Flexible" });
  }

  dest.detailedTransport = detailedTransport;

  // Restaurants
  if (!dest.restaurants || dest.restaurants.length === 0 || dest.restaurants.length < 3) {
    dest.restaurants = [
      {
        id: "r1",
        name: `The ${dest.name.split(',')[0]} Spices`,
        rating: "4.7",
        menuHighlights: ["Local Delicacy", "Signature Plate"],
        averageCost: isIndian ? 800 : 35,
        category: "Traditional",
        openingTime: "12:00 PM - 11:00 PM"
      },
      {
        id: "r2",
        name: "Skyline Bistro",
        rating: "4.5",
        menuHighlights: ["Continental Plate", "Mocktails"],
        averageCost: isIndian ? 1200 : 50,
        category: "Continental",
        openingTime: "10:00 AM - 12:00 AM"
      },
      {
        id: "r3",
        name: "Street Bite Hub",
        rating: "4.8",
        menuHighlights: ["Street Food Assortment", "Quick Bites"],
        averageCost: isIndian ? 300 : 15,
        category: "Street Food",
        openingTime: "04:00 PM - 02:00 AM"
      }
    ];
  }
});

// Write back to data.js
const fileContent = `const destinations = ${JSON.stringify(destinations, null, 2)};\n\nmodule.exports = destinations;\n`;
fs.writeFileSync(path.join(__dirname, 'data.js'), fileContent, 'utf-8');
console.log('Successfully synced data.js with detailedTransport and restaurants for all destinations.');
