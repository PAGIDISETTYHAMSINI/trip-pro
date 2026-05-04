const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
let destinations = require(dataPath);

const cancellationPolicy = [
  "If cancellations are made 30 days before the date of travel then 25% of total tour cost will be charged.",
  "If cancellations are made 15 days to 30 days before the date of travel then 50% of total tour cost will be charged.",
  "If cancellations are made 0 days to 15 days before the date of travel then 100% of total tour cost will be charged."
];

const generalPolicies = [
  "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
  "The use of tobacco or cigarettes is strictly prohibited during travel.",
  "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
  "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
];

destinations = destinations.map(dest => {
  const isBeach = dest.name.toLowerCase().includes('goa') || dest.name.toLowerCase().includes('andaman') || dest.name.toLowerCase().includes('bali') || dest.name.toLowerCase().includes('maldives');
  const isMountain = dest.name.toLowerCase().includes('kashmir') || dest.name.toLowerCase().includes('leh') || dest.name.toLowerCase().includes('manali') || dest.name.toLowerCase().includes('swiss');

  let packingList = [
    "Medication and first-aid kit",
    "Reusable water bottle",
    "Camera or smartphone",
    "Cash and important documents",
    "Portable charger"
  ];

  if (isBeach) {
    packingList = [
      "Light clothing: breathable clothes suitable for hot and humid weather.",
      "Sunscreen and sunglasses.",
      "Swimwear and beach towels.",
      "Waterproof bags for water activities.",
      "Flip-flops or sandals.",
      ...packingList
    ];
  } else if (isMountain) {
    packingList = [
      "Heavy woolens and thermal innerwear.",
      "Sturdy trekking shoes.",
      "Windproof and waterproof jackets.",
      "Moisturizers and lip balm for cold winds.",
      ...packingList
    ];
  } else {
    packingList = [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      ...packingList
    ];
  }

  return {
    ...dest,
    inclusions: [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    exclusions: [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    packingList: packingList,
    shoppingGuide: {
      whatToShop: [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      whereToShop: [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    knowBeforeYouGo: [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    policies: generalPolicies,
    cancellationPolicy: cancellationPolicy
  };
});

const fileContent = `const destinations = ${JSON.stringify(destinations, null, 2)};\n\nmodule.exports = destinations;\n`;
fs.writeFileSync(dataPath, fileContent);
console.log("data.js successfully enriched with Tour Agency level details.");
