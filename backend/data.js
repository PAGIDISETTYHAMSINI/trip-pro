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
  }
];

module.exports = destinations;
