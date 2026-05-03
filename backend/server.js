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
    image: d.image
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

  const validItineraries = [];

  // Generate itineraries by iterating over flights, hotels, and food options
  for (const flight of destination.flights) {
    for (const hotel of destination.hotels) {
      for (const food of destination.foodOptions) {
        
        const baseCost = flight.cost + (hotel.costPerNight * daysNum) + (food.costPerDay * daysNum);
        
        if (baseCost <= budgetNum) {
          // See how many activities we can add
          let remainingBudget = budgetNum - baseCost;
          
          // Generate all combinations of activities
          let allActivityCombos = [[]]; // Start with 0 activities
          for (let i = 1; i <= destination.activities.length; i++) {
            getCombinations(destination.activities, i, 0, [], allActivityCombos);
          }
          
          // Filter activity combos that fit in remaining budget and sort by most expensive (closest to budget)
          let validActivityCombos = allActivityCombos.map(combo => {
            const comboCost = combo.reduce((sum, act) => sum + act.cost, 0);
            return { combo, comboCost };
          }).filter(c => c.comboCost <= remainingBudget)
            .sort((a, b) => b.comboCost - a.comboCost);
          
          // Just take the top 3 best activity combinations for this base setup to avoid exploding possibilities
          const topActivityCombos = validActivityCombos.slice(0, 3);
          
          for (const { combo, comboCost } of topActivityCombos) {
            const totalCost = baseCost + comboCost;
            
            validItineraries.push({
              flight,
              hotel: { ...hotel, totalCost: hotel.costPerNight * daysNum },
              food: { ...food, totalCost: food.costPerDay * daysNum },
              activities: combo,
              totalCost,
              breakdown: {
                flight: flight.cost,
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
