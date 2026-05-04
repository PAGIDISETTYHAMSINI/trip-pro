const fs = require('fs');
const path = require('path');

const andamanData = {
  "id": "andaman",
  "name": "Amazing Andaman (Port Blair, Havelock & Neil)",
  "image": "https://images.unsplash.com/photo-1589136142558-74611990c0a7?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    { "id": "af1", "type": "Economy (To Port Blair)", "cost": 8000 },
    { "id": "af2", "type": "Business (To Port Blair)", "cost": 18000 }
  ],
  "hotels": [
    {
      "id": "ah1",
      "type": "Option 1: 3-Star Budget",
      "costPerNight": 4500,
      "rating": "3.8",
      "roomOptions": [
        { "type": "Standard Room (Sea Deck/Green Imperial)", "cost": 4500 }
      ],
      "name": "Sea Deck / Green Imperial / Blue Lagoon"
    },
    {
      "id": "ah2",
      "type": "Option 2: 3-Star Premium",
      "costPerNight": 5000,
      "rating": "4.2",
      "roomOptions": [
        { "type": "Deluxe Room / Chalet (Bay Leaf/ILE Bay)", "cost": 5000 }
      ],
      "name": "Bay Leaf Inn / ILE Bay / TSG Aura"
    },
    {
      "id": "ah3",
      "type": "Option 3: 4-Star Luxury",
      "costPerNight": 6000,
      "rating": "4.6",
      "roomOptions": [
        { "type": "Deluxe Ocean View / Bamboo Saa", "cost": 6000 }
      ],
      "name": "Mansha Residency / Sea Hill / Pearl Park"
    }
  ],
  "detailedTransport": [
    { "id": "at1", "type": "Ferry: Port Blair to Havelock", "agency": "Makruzz/Nautika", "name": "Premium Class", "cost": 1500, "departureTime": "09:30 AM - 02:00 PM" },
    { "id": "at2", "type": "Ferry: Havelock to Neil", "agency": "Nautika", "name": "Luxury Class", "cost": 1200, "departureTime": "09:30 AM - 12:00 PM" },
    { "id": "at3", "type": "Ferry: Neil to Port Blair", "agency": "Nautika", "name": "Luxury Class", "cost": 1200, "departureTime": "09:30 AM - 12:00 PM" },
    { "id": "at4", "type": "Private Car", "agency": "YouWe Travel", "name": "AC Sedan/SUV Sightseeing", "cost": 3500, "departureTime": "Full Day" }
  ],
  "activities": [
    { "name": "Radhanagar Beach Visit", "cost": 0, "rating": "4.9", "openingTime": "06:00 AM", "closingTime": "06:00 PM", "category": "Main" },
    { "name": "Elephant Beach Speed Boat", "cost": 1000, "rating": "4.8", "openingTime": "08:00 AM", "closingTime": "03:00 PM", "category": "Adventure" },
    { "name": "Shore Scuba Diving", "cost": 3500, "rating": "4.7", "openingTime": "06:00 AM", "closingTime": "02:00 PM", "category": "Adventure" },
    { "name": "Kalapathar Beach Sunrise", "cost": 0, "rating": "4.9", "openingTime": "04:30 AM", "closingTime": "07:00 AM", "category": "Traditional" },
    { "name": "Cellular Jail Light & Sound Show", "cost": 300, "rating": "4.8", "openingTime": "06:00 PM", "closingTime": "08:00 PM", "category": "Cultural" },
    { "name": "Glass Boat Ride (Bharatpur)", "cost": 500, "rating": "4.5", "openingTime": "10:00 AM", "closingTime": "02:00 PM", "category": "Main" },
    { "name": "Sitapur Beach Coral Viewing", "cost": 0, "rating": "4.6", "openingTime": "08:00 AM", "closingTime": "04:00 PM", "category": "Main" },
    { "name": "Corbyn Cove Beach Sightseeing", "cost": 0, "rating": "4.7", "openingTime": "Anytime", "closingTime": "Anytime", "category": "Main" }
  ],
  "restaurants": [
    { "id": "ar1", "name": "Local Seafood Special", "category": "Seafood", "rating": "4.8", "menuHighlights": ["Lobster", "Crab", "Fish Curry"], "openingTime": "12:00 PM - 10:00 PM", "averageCost": 800 },
    { "id": "ar2", "name": "Havelock Beach Cafe", "category": "Cafe", "rating": "4.6", "menuHighlights": ["Grilled Fish", "Pasta", "Coconut Water"], "openingTime": "08:00 AM - 11:00 PM", "averageCost": 600 }
  ],
  "cancellationPolicy": "30+ days: 25% charge | 15-30 days: 50% charge | 0-15 days: 100% charge",
  "packingList": [
    "Light breathable clothing", "Sunscreen & Sunglasses", "Insect repellent", "Swimwear", "Flip-flops/Sandals", "Waterproof bags", "Medication/First-aid kit", "Reusable water bottle", "Portable charger"
  ],
  "knowBeforeYouGo": [
    "Preferred network: BSNL/Airtel", "Internet rarely works, carry printouts", "ATMs available at Havelock/Port Blair, carry cash for Neil", "Vehicles are point-to-point only", "Cellular jail closed on Mondays", "Sunrise is best experienced early morning"
  ],
  "shoppingGuide": "Aberdeen Bazaar (Pearls), Sagarika Govt Emporium (Handicrafts), Shell Jewelry, Coconut Shell decor.",
  "culturalEtiquette": "Observe decency in dress, especially at places of worship. Do not enter restricted tribal areas.",
  "inclusions": [
    "Accommodation with breakfast", "Airport Transfer", "Private Car Ferry transfers", "Premium Ferry charges (Makruzz/Nautika)", "Toll/Parking", "Cellular Jail tickets", "Elephant boat ride"
  ],
  "exclusions": [
    "Other watersports", "Lunch & Dinner", "Personal expenses", "Scuba Diving by boat (5500 INR)"
  ],
  "bankDetails": {
    "name": "You We Travel OPC Private Limited",
    "bank": "HDFC Bank",
    "account": "50200093843846",
    "ifsc": "HDFC0001934",
    "type": "Current"
  }
};

const dataPath = path.join(__dirname, 'backend', 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Find the last index of '}' before '];'
const lastClosingBrace = dataContent.lastIndexOf('}');
const newEntry = ',\n  ' + JSON.stringify(andamanData, null, 2);

dataContent = dataContent.slice(0, lastClosingBrace + 1) + newEntry + dataContent.slice(lastClosingBrace + 1);

fs.writeFileSync(dataPath, dataContent);
console.log('Andaman Islands added successfully!');
