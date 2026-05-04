const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
let destinations = require(dataPath);

const months = ["October to March", "September to November", "November to February", "December to April", "Year-round"];
const ageGroups = ["Families & Couples", "Backpackers & Solo Travelers", "All Age Groups", "18-35 Adventure Seekers"];
const times = ["Morning (09:00 AM)", "Late Morning (11:00 AM)", "Afternoon (02:00 PM)", "Late Afternoon (04:00 PM)", "Evening (06:00 PM)"];
const proximities = ["Walking distance from center", "2 km from hotel", "5 km from city center", "10 km away", "Heart of the city"];

const intlDestinations = ["Paris", "Bali", "Tokyo", "New York"];

destinations = destinations.map(dest => {
  // Fix the ', India' bug for international activities
  const isIntl = intlDestinations.some(intl => dest.name.includes(intl));

  // Add Best Months and Age Groups
  dest.bestMonths = months[Math.floor(Math.random() * months.length)];
  dest.suggestedAgeGroups = ageGroups[Math.floor(Math.random() * ageGroups.length)];

  // Generate Transport Options based on flight cost
  const baseFlightCost = dest.flights[0].cost;
  
  dest.trains = [
    { id: "t1", type: "Express Train", cost: Math.floor(baseFlightCost * 0.4), duration: "12 hours" },
    { id: "t2", type: "Premium Sleeper Train", cost: Math.floor(baseFlightCost * 0.7), duration: "10 hours" }
  ];

  dest.cars = [
    { id: "c1", type: "Standard Sedan", cost: Math.floor(baseFlightCost * 0.5), duration: "8 hours driving" },
    { id: "c2", type: "Luxury SUV", cost: Math.floor(baseFlightCost * 1.2), duration: "8 hours driving" }
  ];

  // Fix and enrich activities
  dest.activities = dest.activities.map((act, index) => {
    let actName = act.name;
    if (isIntl) {
      actName = actName.replace(/, India$/, '');
    }
    return {
      ...act,
      name: actName,
      suggestedTime: times[index % times.length],
      proximity: proximities[index % proximities.length]
    };
  });

  return dest;
});

const fileContent = `const destinations = ${JSON.stringify(destinations, null, 2)};\n\nmodule.exports = destinations;\n`;
fs.writeFileSync(dataPath, fileContent);
console.log("data.js successfully enriched with rich features and bug fixed.");
