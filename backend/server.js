const express = require('express');
const cors = require('cors');
const destinations = require('./data');
const sequelize = require('./db');
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());
 
 // Root Route
 app.get('/', (req, res) => {
   res.send('<h1>🚀 Trip Pro Backend is Live!</h1><p>The API is running and connected to the database.</p>');
 });

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

app.get('/api/destinations/:id', (req, res) => {
  const dest = destinations.find(d => d.id === req.params.id);
  if (!dest) return res.status(404).json({ error: 'Destination not found' });
  res.json(dest);
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

function generateItinerariesForDestination(destination, budgetNum, daysNum) {
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
              destinationId: destination.id,
              destinationName: destination.name,
              transport,
              hotel: { ...hotel, totalCost: hotel.costPerNight * daysNum },
              food: { ...food, totalCost: food.costPerDay * daysNum },
              activities: combo,
              totalCost,
              currencySymbol,
              language: destination.language,
              culturalEtiquette: destination.culturalEtiquette,
              emergencyContacts: destination.emergencyContacts,
              inclusions: destination.inclusions,
              exclusions: destination.exclusions,
              packingList: destination.packingList,
              shoppingGuide: destination.shoppingGuide,
              knowBeforeYouGo: destination.knowBeforeYouGo,
              policies: destination.policies,
              cancellationPolicy: destination.cancellationPolicy,
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

  // Sort by total cost descending (to use up most of the budget)
  validItineraries.sort((a, b) => b.totalCost - a.totalCost);

  return validItineraries;
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

  const validItineraries = generateItinerariesForDestination(destination, budgetNum, daysNum);

  // Return top 15 diverse options
  res.json(validItineraries.slice(0, 15));
});

app.get('/api/surprise-me', (req, res) => {
  console.log("Received request for surprise me:", req.query);
  const { budget, days } = req.query;
  
  if (!budget || !days) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const budgetNum = parseFloat(budget);
  const daysNum = parseInt(days, 10);
  
  // To avoid comparing INR to USD blindly for Surprise Me, we normalize the budget based on the user's implicit intent.
  // Actually, since all Indian locations have a rate of 83, the `budgetNum` from the UI might be in INR if they saw ₹ in the UI, or USD if $.
  // Wait, the UI doesn't know the currency for "Surprise Me" because there's no destination.
  // For "Surprise Me", we will assume the budget is in USD if it's < 5000, and INR if > 5000.
  let isBudgetInr = budgetNum > 5000;
  
  const allValidItineraries = [];

  // Pick 3 random destinations
  const randomDestinations = [...destinations].sort(() => 0.5 - Math.random()).slice(0, 5); // Pick 5 to be safe

  for (const dest of randomDestinations) {
    const isIndian = dest.name.includes('India');
    
    // Convert budget if there's a mismatch between implicit user budget and destination currency
    let effectiveBudget = budgetNum;
    if (isBudgetInr && !isIndian) {
      effectiveBudget = budgetNum / 83; // User entered INR, dest is international (USD)
    } else if (!isBudgetInr && isIndian) {
      effectiveBudget = budgetNum * 83; // User entered USD, dest is Indian (INR)
    }

    const itineraries = generateItinerariesForDestination(dest, effectiveBudget, daysNum);
    if (itineraries.length > 0) {
      let bestItinerary = itineraries[0];

      // Currency Normalization: If user searched in INR, but the trip is international (USD),
      // we must convert the final display prices back to INR so they don't see $600 when searching ₹50000.
      if (isBudgetInr && !isIndian) {
        bestItinerary.totalCost = Math.round(bestItinerary.totalCost * 83);
        bestItinerary.currencySymbol = '₹';
        bestItinerary.breakdown.transport = Math.round(bestItinerary.breakdown.transport * 83);
        bestItinerary.breakdown.hotel = Math.round(bestItinerary.breakdown.hotel * 83);
        bestItinerary.breakdown.food = Math.round(bestItinerary.breakdown.food * 83);
        bestItinerary.breakdown.activities = Math.round(bestItinerary.breakdown.activities * 83);
        bestItinerary.transport.cost = Math.round(bestItinerary.transport.cost * 83);
        bestItinerary.hotel.totalCost = Math.round(bestItinerary.hotel.totalCost * 83);
        bestItinerary.food.totalCost = Math.round(bestItinerary.food.totalCost * 83);
        bestItinerary.activities = bestItinerary.activities.map(a => ({ ...a, cost: Math.round(a.cost * 83) }));
      }

      allValidItineraries.push(bestItinerary); // Just take the absolute best one for this destination
    }
  }

  // Return exactly 3 options
  res.json(allValidItineraries.slice(0, 3));
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
