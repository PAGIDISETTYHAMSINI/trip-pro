const destinations = [
  {
    id: "paris",
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 400 },
      { id: "f2", type: "Business", cost: 1200 },
    ],
    hotels: [
      { id: "h1", type: "Hostel", costPerNight: 40 },
      { id: "h2", type: "Standard Hotel", costPerNight: 120 },
      { id: "h3", type: "Luxury Resort", costPerNight: 350 },
    ],
    foodOptions: [
      { id: "fd1", type: "Budget Eats", costPerDay: 30 },
      { id: "fd2", type: "Standard Dining", costPerDay: 80 },
      { id: "fd3", type: "Fine Dining", costPerDay: 200 },
    ],
    activities: [
      { id: "a1", name: "Eiffel Tower Ticket", cost: 30 },
      { id: "a2", name: "Louvre Museum", cost: 20 },
      { id: "a3", name: "Seine River Cruise", cost: 25 },
      { id: "a4", name: "Versailles Tour", cost: 60 },
      { id: "a5", name: "Disneyland Paris", cost: 100 },
    ]
  },
  {
    id: "bali",
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 800 },
      { id: "f2", type: "Business", cost: 2500 },
    ],
    hotels: [
      { id: "h1", type: "Guest House", costPerNight: 20 },
      { id: "h2", type: "Boutique Villa", costPerNight: 80 },
      { id: "h3", type: "Luxury 5-Star", costPerNight: 250 },
    ],
    foodOptions: [
      { id: "fd1", type: "Street Food & Warungs", costPerDay: 15 },
      { id: "fd2", type: "Standard Restaurants", costPerDay: 40 },
      { id: "fd3", type: "High-end Dining", costPerDay: 100 },
    ],
    activities: [
      { id: "a1", name: "Ubud Monkey Forest", cost: 5 },
      { id: "a2", name: "Temple Tour", cost: 20 },
      { id: "a3", name: "Scuba Diving", cost: 80 },
      { id: "a4", name: "Surfing Lesson", cost: 30 },
      { id: "a5", name: "Spa Day", cost: 50 },
    ]
  },
  {
    id: "tokyo",
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 900 },
      { id: "f2", type: "Business", cost: 3000 },
    ],
    hotels: [
      { id: "h1", type: "Capsule Hotel", costPerNight: 35 },
      { id: "h2", type: "Business Hotel", costPerNight: 100 },
      { id: "h3", type: "Luxury Ryokan", costPerNight: 400 },
    ],
    foodOptions: [
      { id: "fd1", type: "Convenience Stores & Ramen", costPerDay: 25 },
      { id: "fd2", type: "Standard Izakaya/Sushi", costPerDay: 60 },
      { id: "fd3", type: "Omakase & Kobe Beef", costPerDay: 250 },
    ],
    activities: [
      { id: "a1", name: "Tokyo Skytree", cost: 25 },
      { id: "a2", name: "TeamLab Planets", cost: 30 },
      { id: "a3", name: "Disneyland/DisneySea", cost: 80 },
      { id: "a4", name: "Mount Fuji Day Trip", cost: 120 },
      { id: "a5", name: "Akihabara Maid Cafe", cost: 40 },
    ]
  },
  {
    id: "newyork",
    name: "New York City, USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 300 },
      { id: "f2", type: "Business", cost: 1000 },
    ],
    hotels: [
      { id: "h1", type: "Hostel/Budget", costPerNight: 80 },
      { id: "h2", type: "Mid-range Hotel", costPerNight: 200 },
      { id: "h3", type: "Luxury Hotel", costPerNight: 600 },
    ],
    foodOptions: [
      { id: "fd1", type: "Pizza & Food Trucks", costPerDay: 40 },
      { id: "fd2", type: "Casual Dining", costPerDay: 100 },
      { id: "fd3", type: "Fine Dining", costPerDay: 300 },
    ],
    activities: [
      { id: "a1", name: "Empire State Building", cost: 45 },
      { id: "a2", name: "Statue of Liberty Cruise", cost: 30 },
      { id: "a3", name: "Broadway Show", cost: 150 },
      { id: "a4", name: "MoMA", cost: 25 },
      { id: "a5", name: "Helicopter Tour", cost: 250 },
    ]
  },
  {
    id: "goa",
    name: "Goa, India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Budget Airline", cost: 150 },
      { id: "f2", type: "Premium Airline", cost: 400 },
    ],
    hotels: [
      { id: "h1", type: "Beach Shack", costPerNight: 15 },
      { id: "h2", type: "3-Star Resort", costPerNight: 50 },
      { id: "h3", type: "Luxury 5-Star", costPerNight: 150 },
    ],
    foodOptions: [
      { id: "fd1", type: "Local Shacks & Street Food", costPerDay: 10 },
      { id: "fd2", type: "Standard Restaurants", costPerDay: 25 },
      { id: "fd3", type: "Fine Dining", costPerDay: 80 },
    ],
    activities: [
      { id: "a1", name: "Scuba Diving", cost: 40 },
      { id: "a2", name: "Dudhsagar Waterfall Trek", cost: 20 },
      { id: "a3", name: "Spice Plantation Tour", cost: 15 },
      { id: "a4", name: "Sunset Cruise", cost: 25 },
      { id: "a5", name: "Parasailing", cost: 30 },
    ]
  },
  {
    id: "kerala",
    name: "Kerala, India",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 200 },
      { id: "f2", type: "Business", cost: 500 },
    ],
    hotels: [
      { id: "h1", type: "Homestay", costPerNight: 20 },
      { id: "h2", type: "Houseboat", costPerNight: 80 },
      { id: "h3", type: "Ayurvedic Resort", costPerNight: 200 },
    ],
    foodOptions: [
      { id: "fd1", type: "Local Eateries", costPerDay: 10 },
      { id: "fd2", type: "Multi-cuisine Restaurants", costPerDay: 30 },
      { id: "fd3", type: "Resort Dining", costPerDay: 90 },
    ],
    activities: [
      { id: "a1", name: "Kathakali Performance", cost: 10 },
      { id: "a2", name: "Munnar Tea Gardens Tour", cost: 25 },
      { id: "a3", name: "Periyar Wildlife Safari", cost: 35 },
      { id: "a4", name: "Ayurvedic Massage", cost: 40 },
      { id: "a5", name: "Backwater Canoe Tour", cost: 20 },
    ]
  },
  {
    id: "jaipur",
    name: "Jaipur, India",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 180 },
      { id: "f2", type: "Business", cost: 450 },
    ],
    hotels: [
      { id: "h1", type: "Hostel/Budget", costPerNight: 12 },
      { id: "h2", type: "Heritage Hotel", costPerNight: 60 },
      { id: "h3", type: "Palace Hotel", costPerNight: 300 },
    ],
    foodOptions: [
      { id: "fd1", type: "Street Food & Dhabas", costPerDay: 8 },
      { id: "fd2", type: "Traditional Thali Restaurants", costPerDay: 20 },
      { id: "fd3", type: "Royal Dining", costPerDay: 100 },
    ],
    activities: [
      { id: "a1", name: "Amber Fort Tour", cost: 15 },
      { id: "a2", name: "Hot Air Balloon Ride", cost: 150 },
      { id: "a3", name: "City Palace Ticket", cost: 10 },
      { id: "a4", name: "Chokhi Dhani Village Experience", cost: 25 },
      { id: "a5", name: "Elephant Ride", cost: 20 },
    ]
  }
];

module.exports = destinations;
