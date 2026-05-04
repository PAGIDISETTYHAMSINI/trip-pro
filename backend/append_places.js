const fs = require('fs');
const path = require('path');

const newPlaces = [
  { name: "Ajanta, Aurangabad", image: "https://images.unsplash.com/photo-1625227702890-df4f07bb184c?auto=format&fit=crop&q=80&w=1000" },
  { name: "Amarnath Cave, Kashmir", image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=1000" },
  { name: "Akbar's Tomb, Agra", image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000" },
  { name: "Amber Palace, Jaipur", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1000" },
  { name: "Anand Bhawan, Allahabad", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1000" },
  { name: "Bhakra Dam, Punjab", image: "https://images.unsplash.com/photo-1605649487212-4dcb1b6b1089?auto=format&fit=crop&q=80&w=1000" },
  { name: "Bibi Da Maqbra, Aurangabad", image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1000" },
  { name: "Birla Planetarium, Calcutta", image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=1000" },
  { name: "Black Pagoda, Konark", image: "https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?auto=format&fit=crop&q=80&w=1000" },
  { name: "Bodhisatva, Ajanta Caves", image: "https://images.unsplash.com/photo-1625227702890-df4f07bb184c?auto=format&fit=crop&q=80&w=1000" },
  { name: "Brihadeeswara Temple, Tanjavur", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000" },
  { name: "Brindaban Gardens, Mysore", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000" },
  { name: "Buland Darwaza, Fatehpur Sikri", image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000" },
  { name: "Charminar, Hyderabad", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=1000" },
  { name: "Cheena Kesava Temple, Belur", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000" },
  { name: "Chilka Lake, Bhubaneshwar", image: "https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?auto=format&fit=crop&q=80&w=1000" },
  { name: "Dal Lake, Srinagar", image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=1000" },
  { name: "Dilwara Temple, Mt.Abu", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1000" },
  { name: "Elephanta Caves, Bombay", image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1000" },
  { name: "Ellora Caves, Aurangabad", image: "https://images.unsplash.com/photo-1625227702890-df4f07bb184c?auto=format&fit=crop&q=80&w=1000" },
  { name: "Gateway of India, Bombay", image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1000" },
  { name: "Golden Temple, Amritsar", image: "https://images.unsplash.com/photo-1605649487212-4dcb1b6b1089?auto=format&fit=crop&q=80&w=1000" },
  { name: "Gol Gumbaz, Bijapur", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000" },
  { name: "Hanging Gardens, Bombay", image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1000" },
  { name: "Hawa Mahal, Jaipur", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1000" },
  { name: "Howrah Bridge, Calcutta", image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=1000" },
  { name: "Island Palace, Udaipur", image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=1000" },
  { name: "Itmaad-ud-Daulah's Tomb, Agra", image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000" },
  { name: "Jagannath Temple, Puri", image: "https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?auto=format&fit=crop&q=80&w=1000" },
  { name: "Jahaz Mahal, Mandu", image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1000" }
];

const generatedDestinations = newPlaces.map((place, index) => {
  const placeId = place.name.split(',')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
  return {
    id: `img_${placeId}_${index}`,
    name: place.name,
    image: place.image,
    flights: [
      { id: "f1", type: "Economy", cost: 100 + Math.floor(Math.random() * 100) },
      { id: "f2", type: "Business", cost: 300 + Math.floor(Math.random() * 200) },
    ],
    hotels: [
      { id: "h1", type: "Budget Stay", costPerNight: 15 + Math.floor(Math.random() * 10) },
      { id: "h2", type: "Standard Hotel", costPerNight: 40 + Math.floor(Math.random() * 20) },
      { id: "h3", type: "Luxury Hotel", costPerNight: 150 + Math.floor(Math.random() * 100) },
    ],
    foodOptions: [
      { id: "fd1", type: "Street Food", costPerDay: 10 },
      { id: "fd2", type: "Standard Dining", costPerDay: 25 },
      { id: "fd3", type: "Fine Dining", costPerDay: 80 },
    ],
    activities: [
      { id: "a1", name: `Visit ${place.name.split(',')[0]}`, cost: 10 + Math.floor(Math.random() * 10) },
      { id: "a2", name: "Guided City Tour", cost: 20 },
      { id: "a3", name: "Cultural Show", cost: 15 },
      { id: "a4", name: "Local Market Walk", cost: 5 },
      { id: "a5", name: "Premium Sightseeing", cost: 35 },
    ]
  };
});

const dataPath = path.join(__dirname, 'data.js');
let fileContent = fs.readFileSync(dataPath, 'utf-8');

// The file ends with:
//   }
// ];
// module.exports = destinations;

// Let's replace the ending to inject the new array elements
const insertionString = generatedDestinations.map(d => JSON.stringify(d, null, 2)).join(',\n  ');

fileContent = fileContent.replace(
  /\];\s*module\.exports = destinations;/,
  `,\n  ${insertionString}\n];\n\nmodule.exports = destinations;`
);

fs.writeFileSync(dataPath, fileContent);
console.log("Successfully appended 30 new places to data.js!");
