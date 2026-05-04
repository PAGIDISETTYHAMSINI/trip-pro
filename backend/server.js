const express = require('express');
const cors = require('cors');
const destinations = require('./data');
const sequelize = require('./db');
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/api/destinations', (req, res) => {
  const minimalDestinations = destinations.map(d => ({
    id: d.id,
    name: d.name,
    image: d.image,
    currencySymbol: d.name.includes('India') ? '₹' : '$',
    bestMonths: d.bestMonths,
    suggestedAgeGroups: d.suggestedAgeGroups
  }));
  res.json(minimalDestinations);
});

// Helper function to get combinations of array elements
function getCombinations(array, size, start, initialStuff, output) {
  if (initialStuff.length >= size) {
    output.push([...initialStuff]);
  } else {
    for (let i = start; i < array.length; i++) {
      initialStuff.push(array[i]);
      getCombinations(array, size, i + 1, initialStuff, output);
      initialStuff.pop();
    }
  }
}

app.get('/api/itineraries', (req, res) => {
  console.log("Received request for itineraries:", req.query);
  const { destinationId, budget, days } = req.query;
  
  if (!destinationId || !budget || !days) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const budgetNum = parseFloat(budget);
  const daysNum = parseInt(days, 10);
  
  const destination = destinations.find(d => d.id === destinationId);
  if (!destination) {
    return res.status(404).json({ error: "Destination not found" });
  }

  const isIndian = destination.name.includes('India');
  const rate = isIndian ? 83 : 1;
  const currencySymbol = isIndian ? '₹' : '$';

  const validItineraries = [];

  // Combine transport options into one array
  const transports = [
    ...(destination.flights || []).map(t => ({ ...t, method: 'Flight' })),
    ...(destination.trains || []).map(t => ({ ...t, method: 'Train' })),
    ...(destination.cars || []).map(t => ({ ...t, method: 'Car' }))
  ];
  
  // Pre-calculate activities with applied rate
  const scaledActivities = destination.activities.map(a => ({ ...a, cost: a.cost * rate }));
  
  // Pre-calculate all combinations of activities ONCE (since it's static per destination)
  const allActivityCombos = [[]]; // Start with 0 activities
  for (let i = 1; i <= scaledActivities.length; i++) {
    getCombinations(scaledActivities, i, 0, [], allActivityCombos);
  }

  // Pre-calculate the total cost of each combination for faster filtering
  const precalculatedCombos = allActivityCombos.map(combo => ({
    combo,
    comboCost: combo.reduce((sum, act) => sum + act.cost, 0)
  }));

  // Generate itineraries by iterating over transport, hotels, and food options
  for (const transportBase of transports) {
    for (const hotelBase of destination.hotels) {
      for (const foodBase of destination.foodOptions) {
        
        const transport = { ...transportBase, cost: transportBase.cost * rate };
        const hotel = { ...hotelBase, costPerNight: hotelBase.costPerNight * rate };
        const food = { ...foodBase, costPerDay: foodBase.costPerDay * rate };

        const baseCost = transport.cost + (hotel.costPerNight * daysNum) + (food.costPerDay * daysNum);
        
        if (baseCost <= budgetNum) {
          const remainingBudget = budgetNum - baseCost;
          
          // Filter activity combos that fit in remaining budget and sort by most expensive (closest to budget)
          let validActivityCombos = precalculatedCombos
            .filter(c => c.comboCost <= remainingBudget)
            .sort((a, b) => b.comboCost - a.comboCost);
          
          // Just take the top 3 best activity combinations for this base setup
          const topActivityCombos = validActivityCombos.slice(0, 3);
          
          for (const { combo, comboCost } of topActivityCombos) {
            const totalCost = baseCost + comboCost;
            
            validItineraries.push({
              transport,
              hotel: { ...hotel, totalCost: hotel.costPerNight * daysNum },
              food: { ...food, totalCost: food.costPerDay * daysNum },
              activities: combo,
              totalCost,
              currencySymbol,
              breakdown: {
                transport: transport.cost,
                hotel: hotel.costPerNight * daysNum,
                food: food.costPerDay * daysNum,
                activities: comboCost
              }
            });
          }
        }
      }
    }
  }

  console.log(`Generated ${validItineraries.length} valid itineraries before sorting`);

  // Sort by total cost descending (to use up most of the budget)
  validItineraries.sort((a, b) => b.totalCost - a.totalCost);

  // Return top 15 diverse options
  res.json(validItineraries.slice(0, 15));
});

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synced successfully');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
