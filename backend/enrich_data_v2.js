const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
let destinations = require(dataPath);

const nearbyRestaurants = [
  "The Spice Route (Authentic Local Food)",
  "Bistro 42 (Continental & Cafe)",
  "Ocean View Diner (Seafood & Grills)",
  "Green Leaf Vegetarian (Healthy Options)",
  "Street Market Stalls (Local Fast Food)",
  "Royal Dining Room (Fine Dining)",
  "Café Sunrise (Breakfast & Coffee)"
];

const activityDescriptions = [
  "A comprehensive guided tour covering the history, architecture, and cultural significance of the site.",
  "An adventurous experience perfectly suited for making unforgettable memories with expert instructors.",
  "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere.",
  "A cultural deep-dive where you interact with locals and learn about the traditional ways of life.",
  "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
];

destinations = destinations.map(dest => {
  // Enrich hotels
  dest.hotels = dest.hotels.map(hotel => {
    // Pick 2 random restaurants
    const r1 = nearbyRestaurants[Math.floor(Math.random() * nearbyRestaurants.length)];
    let r2 = nearbyRestaurants[Math.floor(Math.random() * nearbyRestaurants.length)];
    while(r1 === r2) r2 = nearbyRestaurants[Math.floor(Math.random() * nearbyRestaurants.length)];
    
    return {
      ...hotel,
      nearbyRestaurants: [r1, r2]
    };
  });

  // Enrich activities
  dest.activities = dest.activities.map((act, index) => {
    return {
      ...act,
      description: act.description || activityDescriptions[index % activityDescriptions.length]
    };
  });

  return dest;
});

const fileContent = `const destinations = ${JSON.stringify(destinations, null, 2)};\n\nmodule.exports = destinations;\n`;
fs.writeFileSync(dataPath, fileContent);
console.log("data.js successfully enriched with detailed hotel restaurants and activity descriptions.");
