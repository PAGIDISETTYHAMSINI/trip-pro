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

  // Helper to pad hours
  const pad = (n) => n < 10 ? '0' + n : n;
  
  // Helper to calculate arrival time
  const getArrivalTime = (depStr, durationHrs) => {
    let [time, ampm] = depStr.split(' ');
    let [hrs, mins] = time.split(':').map(Number);
    if (ampm === 'PM' && hrs !== 12) hrs += 12;
    if (ampm === 'AM' && hrs === 12) hrs = 0;
    
    hrs += durationHrs;
    const isNextDay = hrs >= 24;
    hrs = hrs % 24;
    
    let nextAmpm = hrs >= 12 ? 'PM' : 'AM';
    let nextHrs = hrs % 12;
    if (nextHrs === 0) nextHrs = 12;
    
    return `${pad(nextHrs)}:${pad(mins)} ${nextAmpm}${isNextDay ? ' (+1)' : ''}`;
  };

  // Flights
  if (dest.flights && dest.flights.length > 0) {
    dest.flights.forEach((f, index) => {
      const depHour = random(6, 11);
      const depTime = `${pad(depHour)}:00 AM`;
      const durationHrs = random(2, 6);
      
      detailedTransport.push({
        id: `f${index + 1}-${dest.id}`,
        type: f.type,
        agency: isIndian ? (index % 2 === 0 ? 'IndiGo' : 'Air India') : (index % 2 === 0 ? 'Emirates' : 'Qatar Airways'),
        name: `Flight-${random(100, 999)}`,
        cost: f.cost,
        departureTime: depTime,
        arrivalTime: getArrivalTime(depTime, durationHrs),
        duration: `${durationHrs}h ${random(10, 50)}m`,
        stops: index === 0 ? 'Non-stop' : '1 Stop',
        baggage: f.type.includes('Business') ? '30kg Check-in, 7kg Cabin' : '15kg Check-in, 7kg Cabin'
      });
    });
  } else {
     const d1 = `${pad(random(6, 9))}:00 AM`;
     detailedTransport.push({ id: `f1-${dest.id}`, type: "Economy", agency: "Global Air", name: "GL-101", cost: 300 * baseCost, departureTime: d1, arrivalTime: getArrivalTime(d1, 3), duration: "3h 15m", stops: "Non-stop", baggage: "15kg Check-in, 7kg Cabin" });
     const d2 = `${pad(random(10, 11))}:00 AM`;
     detailedTransport.push({ id: `f2-${dest.id}`, type: "Business", agency: "Premium Air", name: "PR-202", cost: 1200 * baseCost, departureTime: d2, arrivalTime: getArrivalTime(d2, 3), duration: "3h 15m", stops: "Non-stop", baggage: "30kg Check-in, 7kg Cabin" });
  }

  // Trains
  if (dest.trains && dest.trains.length > 0) {
    dest.trains.forEach((t, index) => {
      const depHour = random(1, 6);
      const depTime = `${pad(depHour)}:30 PM`;
      const durationHrs = random(5, 12);
      detailedTransport.push({
        id: `t${index + 1}-${dest.id}`,
        type: t.type,
        agency: isIndian ? 'Indian Railways' : 'EuroRail',
        name: `Express-${random(1000, 9999)}`,
        cost: t.cost,
        departureTime: depTime,
        arrivalTime: getArrivalTime(depTime, durationHrs),
        duration: `${durationHrs}h ${random(10, 50)}m`,
        stops: 'Direct',
        baggage: 'Unlimited / Standard'
      });
    });
  } else {
    const d1 = `02:00 PM`;
    detailedTransport.push({ id: `t1-${dest.id}`, type: "Standard Train", agency: isIndian ? "Indian Railways" : "National Rail", name: `Exp-${random(100, 999)}`, cost: 80 * baseCost, departureTime: d1, arrivalTime: getArrivalTime(d1, 8), duration: "8h 00m", stops: "Direct", baggage: "Unlimited / Standard" });
  }

  // Buses
  const b1Dep = "10:00 PM";
  detailedTransport.push({
    id: `b1-${dest.id}`,
    type: "Luxury AC Sleeper",
    agency: "City Connect Travels",
    name: "Night Glide",
    cost: 50 * baseCost,
    departureTime: b1Dep,
    arrivalTime: getArrivalTime(b1Dep, 9),
    duration: "9h 30m",
    stops: "1 Stop",
    baggage: "15kg Hand luggage"
  });
  const b2Dep = "09:00 AM";
  detailedTransport.push({
    id: `b2-${dest.id}`,
    type: "Standard AC Bus",
    agency: "Regional Transit",
    name: "Day Cruiser",
    cost: 25 * baseCost,
    departureTime: b2Dep,
    arrivalTime: getArrivalTime(b2Dep, 6),
    duration: "6h 00m",
    stops: "Multi-stop",
    baggage: "15kg Hand luggage"
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
        departureTime: "Flexible",
        arrivalTime: "Flexible",
        duration: "Point-to-Point",
        stops: "Direct",
        baggage: "Trunk Capacity"
      });
    });
  } else {
     detailedTransport.push({ id: `c1-${dest.id}`, type: "Sedan", agency: "Local Taxi", name: "City Cab", cost: 100 * baseCost, departureTime: "Flexible", arrivalTime: "Flexible", duration: "Point-to-Point", stops: "Direct", baggage: "2 Medium Bags" });
     detailedTransport.push({ id: `c2-${dest.id}`, type: "SUV", agency: "Premium Rentals", name: "Family Tourer", cost: 180 * baseCost, departureTime: "Flexible", arrivalTime: "Flexible", duration: "Point-to-Point", stops: "Direct", baggage: "4 Medium Bags" });
  }

  dest.detailedTransport = detailedTransport;

  // Enhance Hotels with amenities and distance
  if (dest.hotels) {
    dest.hotels.forEach(h => {
      if (!h.amenities) {
        if (h.type.includes('Luxury') || h.type.includes('4-Star') || h.type.includes('Resort')) {
          h.amenities = ["Free WiFi", "Swimming Pool", "Spa", "Breakfast Included", "Gym"];
          h.distanceToCenter = "1.5 km from City Center";
        } else if (h.type.includes('Standard') || h.type.includes('3-Star')) {
          h.amenities = ["Free WiFi", "Restaurant", "Air Conditioning", "Breakfast Included"];
          h.distanceToCenter = "2.2 km from City Center";
        } else {
          h.amenities = ["Free WiFi", "Shared Lounge", "24/7 Front Desk"];
          h.distanceToCenter = "3.8 km from City Center";
        }
      }
    });
  }

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

  // Activities
  if (!dest.activities || dest.activities.length === 0) {
    dest.activities = [
      {
        name: "City Landmark Tour",
        cost: isIndian ? 500 : 25,
        rating: "4.5",
        openingTime: "09:00 AM",
        closingTime: "06:00 PM",
        category: "Main"
      },
      {
        name: "National Museum Visit",
        cost: isIndian ? 200 : 15,
        rating: "4.6",
        openingTime: "10:00 AM",
        closingTime: "05:00 PM",
        category: "Main"
      },
      {
        name: "Old Town Walking Trail",
        cost: 0,
        rating: "4.9",
        openingTime: "Anytime",
        closingTime: "Anytime",
        category: "Hidden Gem"
      },
      {
        name: "Local Artisan Workshop",
        cost: isIndian ? 1200 : 40,
        rating: "4.9",
        openingTime: "11:00 AM",
        closingTime: "04:00 PM",
        category: "Cultural"
      },
      {
        name: "Sunset View Point Trek",
        cost: 0,
        rating: "4.9",
        openingTime: "04:00 PM",
        closingTime: "07:00 PM",
        category: "Adventure"
      }
    ];
  }
});

// Write back to data.js
const fileContent = `const destinations = ${JSON.stringify(destinations, null, 2)};\n\nmodule.exports = destinations;\n`;
fs.writeFileSync(path.join(__dirname, 'data.js'), fileContent, 'utf-8');
console.log('Successfully synced data.js with detailedTransport and restaurants for all destinations.');
