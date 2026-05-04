const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
let destinations = require(dataPath);

// Helper function to generate random ratings
const getRandomRating = (min, max) => (Math.random() * (max - min) + min).toFixed(1);

destinations = destinations.map(dest => {
  // Enrich Transport
  const detailedTransport = [];
  
  if (dest.transportOptions) {
    dest.transportOptions.forEach(t => {
      if (t.type === 'Flight' || t.id.startsWith('f')) {
        detailedTransport.push({
          id: `${t.id}_f1`,
          type: 'Flight',
          agency: 'Air India',
          name: 'AI-402 Direct',
          departureTime: '08:30 AM',
          cost: t.cost || 5000
        });
        detailedTransport.push({
          id: `${t.id}_f2`,
          type: 'Flight',
          agency: 'IndiGo',
          name: '6E-711 Connect',
          departureTime: '14:15 PM',
          cost: Math.round((t.cost || 5000) * 0.8)
        });
      }
      if (t.type === 'Train' || t.id.startsWith('t')) {
        detailedTransport.push({
          id: `${t.id}_t1`,
          type: 'Train',
          agency: 'Indian Railways',
          name: 'Rajdhani Express',
          departureTime: '06:00 AM',
          cost: t.cost || 1500
        });
      }
      if (t.type === 'Bus' || t.id.startsWith('b')) {
        detailedTransport.push({
          id: `${t.id}_b1`,
          type: 'Bus',
          agency: 'IntrCity SmartBus',
          name: 'Volvo AC Sleeper',
          departureTime: '22:00 PM',
          cost: t.cost || 800
        });
      }
      if (t.type === 'Car' || t.id.startsWith('c')) {
        detailedTransport.push({
          id: `${t.id}_c1`,
          type: 'Car',
          agency: 'YouWe Travel Rentals',
          name: 'Private SUV (Innova)',
          departureTime: 'Flexible (Pickup)',
          cost: t.cost || 3000
        });
      }
    });
  }

  // Fallback if no transport mapped correctly
  if (detailedTransport.length === 0) {
    detailedTransport.push(
      { id: 'dt1', type: 'Flight', agency: 'Air India', name: 'AI-402 Direct', departureTime: '08:30 AM', cost: 5000 },
      { id: 'dt2', type: 'Train', agency: 'Indian Railways', name: 'Rajdhani Express', departureTime: '06:00 AM', cost: 1500 },
      { id: 'dt3', type: 'Bus', agency: 'SmartBus', name: 'Volvo AC Sleeper', departureTime: '22:00 PM', cost: 800 },
      { id: 'dt4', type: 'Car', agency: 'YouWe Travel', name: 'Private Sedan', departureTime: 'Flexible', cost: 2000 }
    );
  }

  // Enrich Hotels
  const detailedHotels = dest.hotels.map(h => {
    return {
      ...h,
      rating: getRandomRating(3.5, 5.0),
      roomOptions: [
        { type: `Standard ${h.type} Room`, cost: h.costPerNight },
        { type: `Deluxe AC ${h.type} Room`, cost: Math.round(h.costPerNight * 1.5) },
        { type: `Premium Suite (Balcony)`, cost: Math.round(h.costPerNight * 2.5) }
      ]
    };
  });

  // Enrich Activities
  const detailedActivities = dest.activities.map(a => {
    return {
      ...a,
      rating: getRandomRating(4.0, 5.0),
      openingTime: '09:00 AM',
      closingTime: '06:00 PM',
      durationHours: a.cost > 500 ? 4 : 2
    };
  });

  // Enrich Food / Restaurants
  // Previously we used foodOptions (Budget Eats etc) and nearbyRestaurants (strings).
  // Now we create a true restaurants array.
  const detailedRestaurants = [
    {
      id: 'r1',
      name: 'The Local Spice Route',
      rating: getRandomRating(4.0, 5.0),
      openingTime: '11:00 AM - 11:00 PM',
      menuHighlights: ['Authentic Thali', 'Spicy Curries', 'Local Street Food Sampler'],
      averageCost: 400
    },
    {
      id: 'r2',
      name: 'Ocean View Cafe',
      rating: getRandomRating(4.0, 5.0),
      openingTime: '08:00 AM - 09:00 PM',
      menuHighlights: ['Continental Breakfast', 'Fresh Seafood', 'Artisan Coffee'],
      averageCost: 800
    },
    {
      id: 'r3',
      name: 'Royal Heritage Dining',
      rating: getRandomRating(4.2, 5.0),
      openingTime: '06:00 PM - 11:30 PM',
      menuHighlights: ['Premium Steaks', 'Fine Wine', 'Chef Tasting Menu'],
      averageCost: 2500
    }
  ];

  return {
    ...dest,
    detailedTransport: detailedTransport,
    hotels: detailedHotels,
    activities: detailedActivities,
    restaurants: detailedRestaurants
  };
});

const fileContent = `const destinations = ${JSON.stringify(destinations, null, 2)};\n\nmodule.exports = destinations;\n`;
fs.writeFileSync(dataPath, fileContent);
console.log("data.js successfully enriched with granular Trip Builder data.");
