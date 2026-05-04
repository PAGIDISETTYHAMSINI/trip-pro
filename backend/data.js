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
  },
  {
    id: "agra",
    name: "Agra, India",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 120 },
      { id: "f2", type: "Business", cost: 350 },
    ],
    hotels: [
      { id: "h1", type: "Budget Stay", costPerNight: 15 },
      { id: "h2", type: "Standard Hotel", costPerNight: 40 },
      { id: "h3", type: "Taj View Luxury", costPerNight: 250 },
    ],
    foodOptions: [
      { id: "fd1", type: "Street Chaat & Petha", costPerDay: 8 },
      { id: "fd2", type: "Mughlai Dining", costPerDay: 25 },
      { id: "fd3", type: "Luxury Dining", costPerDay: 80 },
    ],
    activities: [
      { id: "a1", name: "Taj Mahal Entry", cost: 15 },
      { id: "a2", name: "Agra Fort", cost: 10 },
      { id: "a3", name: "Fatehpur Sikri Day Trip", cost: 20 },
      { id: "a4", name: "Mehtab Bagh Sunset", cost: 5 },
      { id: "a5", name: "Heritage Walk", cost: 12 },
    ]
  },
  {
    id: "newdelhi",
    name: "New Delhi, India",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 150 },
      { id: "f2", type: "Business", cost: 400 },
    ],
    hotels: [
      { id: "h1", type: "Backpacker Hostel", costPerNight: 12 },
      { id: "h2", type: "Mid-range Hotel", costPerNight: 45 },
      { id: "h3", type: "5-Star Hotel", costPerNight: 180 },
    ],
    foodOptions: [
      { id: "fd1", type: "Street Food (Chandni Chowk)", costPerDay: 10 },
      { id: "fd2", type: "Casual Cafes", costPerDay: 25 },
      { id: "fd3", type: "Fine Dining", costPerDay: 90 },
    ],
    activities: [
      { id: "a1", name: "Red Fort Ticket", cost: 8 },
      { id: "a2", name: "Qutub Minar", cost: 8 },
      { id: "a3", name: "India Gate Walk", cost: 0 },
      { id: "a4", name: "Akshardham Temple Tour", cost: 5 },
      { id: "a5", name: "Food Tour", cost: 25 },
    ]
  },
  {
    id: "mumbai",
    name: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 160 },
      { id: "f2", type: "Business", cost: 420 },
    ],
    hotels: [
      { id: "h1", type: "Budget Hotel", costPerNight: 20 },
      { id: "h2", type: "Business Hotel", costPerNight: 60 },
      { id: "h3", type: "Sea View Luxury", costPerNight: 250 },
    ],
    foodOptions: [
      { id: "fd1", type: "Vada Pav & Street Food", costPerDay: 10 },
      { id: "fd2", type: "Standard Restaurants", costPerDay: 30 },
      { id: "fd3", type: "High-end Dining", costPerDay: 120 },
    ],
    activities: [
      { id: "a1", name: "Gateway of India Boat Ride", cost: 5 },
      { id: "a2", name: "Elephanta Caves Tour", cost: 15 },
      { id: "a3", name: "Marine Drive Walk", cost: 0 },
      { id: "a4", name: "Bollywood Studio Tour", cost: 40 },
      { id: "a5", name: "Dharavi Tour", cost: 12 },
    ]
  },
  {
    id: "varanasi",
    name: "Varanasi, India",
    image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 130 },
      { id: "f2", type: "Business", cost: 380 },
    ],
    hotels: [
      { id: "h1", type: "Ghat Hostel", costPerNight: 10 },
      { id: "h2", type: "Heritage Guest House", costPerNight: 35 },
      { id: "h3", type: "Luxury River View", costPerNight: 150 },
    ],
    foodOptions: [
      { id: "fd1", type: "Street Chaat & Lassi", costPerDay: 8 },
      { id: "fd2", type: "Traditional Dining", costPerDay: 20 },
      { id: "fd3", type: "Upscale Restaurant", costPerDay: 60 },
    ],
    activities: [
      { id: "a1", name: "Sunrise Boat Ride", cost: 10 },
      { id: "a2", name: "Ganga Aarti Experience", cost: 0 },
      { id: "a3", name: "Sarnath Tour", cost: 15 },
      { id: "a4", name: "Walking Tour of Ghats", cost: 8 },
      { id: "a5", name: "Silk Weaving Village Visit", cost: 12 },
    ]
  },
  {
    id: "ladakh",
    name: "Ladakh, India",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 250 },
      { id: "f2", type: "Premium Economy", cost: 500 },
    ],
    hotels: [
      { id: "h1", type: "Guesthouse", costPerNight: 20 },
      { id: "h2", type: "Standard Hotel", costPerNight: 50 },
      { id: "h3", type: "Luxury Glamping", costPerNight: 180 },
    ],
    foodOptions: [
      { id: "fd1", type: "Local Cafes", costPerDay: 15 },
      { id: "fd2", type: "Standard Dining", costPerDay: 30 },
      { id: "fd3", type: "Premium Dining", costPerDay: 80 },
    ],
    activities: [
      { id: "a1", name: "Pangong Lake Trip", cost: 50 },
      { id: "a2", name: "Nubra Valley Safari", cost: 60 },
      { id: "a3", name: "Monastery Tour", cost: 20 },
      { id: "a4", name: "Magnetic Hill Visit", cost: 10 },
      { id: "a5", name: "River Rafting", cost: 30 },
    ]
  },
  {
    id: "andaman",
    name: "Andaman Islands, India",
    image: "https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 220 },
      { id: "f2", type: "Business", cost: 600 },
    ],
    hotels: [
      { id: "h1", type: "Budget Stay", costPerNight: 25 },
      { id: "h2", type: "Beach Resort", costPerNight: 80 },
      { id: "h3", type: "Luxury Villa", costPerNight: 250 },
    ],
    foodOptions: [
      { id: "fd1", type: "Local Seafood Shacks", costPerDay: 15 },
      { id: "fd2", type: "Standard Restaurants", costPerDay: 35 },
      { id: "fd3", type: "Resort Dining", costPerDay: 100 },
    ],
    activities: [
      { id: "a1", name: "Scuba Diving (Havelock)", cost: 60 },
      { id: "a2", name: "Cellular Jail Tour", cost: 10 },
      { id: "a3", name: "Ross Island Visit", cost: 15 },
      { id: "a4", name: "Snorkeling", cost: 30 },
      { id: "a5", name: "Glass Bottom Boat Ride", cost: 20 },
    ]
  },
  {
    id: "manali",
    name: "Manali, India",
    image: "https://images.unsplash.com/photo-1605649487212-4dcb1b6b1089?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Bus/Economy Travel", cost: 50 },
      { id: "f2", type: "Private Cab", cost: 200 },
    ],
    hotels: [
      { id: "h1", type: "Hostel", costPerNight: 10 },
      { id: "h2", type: "Mountain View Hotel", costPerNight: 40 },
      { id: "h3", type: "Luxury Resort", costPerNight: 150 },
    ],
    foodOptions: [
      { id: "fd1", type: "Cafes & Street Food", costPerDay: 12 },
      { id: "fd2", type: "Standard Dining", costPerDay: 25 },
      { id: "fd3", type: "Fine Dining", costPerDay: 70 },
    ],
    activities: [
      { id: "a1", name: "Rohtang Pass Trip", cost: 40 },
      { id: "a2", name: "Solang Valley Adventure", cost: 25 },
      { id: "a3", name: "Paragliding", cost: 35 },
      { id: "a4", name: "Hadimba Temple Visit", cost: 5 },
      { id: "a5", name: "River Rafting", cost: 20 },
    ]
  },
  {
    id: "darjeeling",
    name: "Darjeeling, India",
    image: "https://images.unsplash.com/photo-1544634076-a90160ddf44e?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 150 },
      { id: "f2", type: "Business", cost: 350 },
    ],
    hotels: [
      { id: "h1", type: "Homestay", costPerNight: 15 },
      { id: "h2", type: "Standard Hotel", costPerNight: 40 },
      { id: "h3", type: "Tea Estate Resort", costPerNight: 180 },
    ],
    foodOptions: [
      { id: "fd1", type: "Local Eateries & Momo stalls", costPerDay: 10 },
      { id: "fd2", type: "Standard Dining", costPerDay: 25 },
      { id: "fd3", type: "Premium Dining", costPerDay: 80 },
    ],
    activities: [
      { id: "a1", name: "Tiger Hill Sunrise Tour", cost: 15 },
      { id: "a2", name: "Toy Train Ride", cost: 20 },
      { id: "a3", name: "Tea Garden Tour", cost: 10 },
      { id: "a4", name: "Himalayan Mountaineering Institute", cost: 5 },
      { id: "a5", name: "Ropeway Ride", cost: 8 },
    ]
  },
  {
    id: "rishikesh",
    name: "Rishikesh, India",
    image: "https://images.unsplash.com/photo-1605650225134-8c813be51a84?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 100 },
      { id: "f2", type: "Premium Economy", cost: 250 },
    ],
    hotels: [
      { id: "h1", type: "Ashram Stay", costPerNight: 8 },
      { id: "h2", type: "Riverside Camp", costPerNight: 30 },
      { id: "h3", type: "Luxury Spa Resort", costPerNight: 200 },
    ],
    foodOptions: [
      { id: "fd1", type: "Ashram Food & Cafes", costPerDay: 8 },
      { id: "fd2", type: "Standard Dining", costPerDay: 20 },
      { id: "fd3", type: "Fine Dining", costPerDay: 60 },
    ],
    activities: [
      { id: "a1", name: "River Rafting", cost: 20 },
      { id: "a2", name: "Bungee Jumping", cost: 50 },
      { id: "a3", name: "Yoga Session", cost: 10 },
      { id: "a4", name: "Ganga Aarti", cost: 0 },
      { id: "a5", name: "Beatles Ashram Visit", cost: 8 },
    ]
  },
  {
    id: "udaipur",
    name: "Udaipur, India",
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=1000",
    flights: [
      { id: "f1", type: "Economy", cost: 140 },
      { id: "f2", type: "Business", cost: 380 },
    ],
    hotels: [
      { id: "h1", type: "Backpacker Hostel", costPerNight: 12 },
      { id: "h2", type: "Lake View Hotel", costPerNight: 50 },
      { id: "h3", type: "Lake Palace Luxury", costPerNight: 400 },
    ],
    foodOptions: [
      { id: "fd1", type: "Street Food", costPerDay: 10 },
      { id: "fd2", type: "Rooftop Restaurant", costPerDay: 25 },
      { id: "fd3", type: "Fine Dining", costPerDay: 90 },
    ],
    activities: [
      { id: "a1", name: "City Palace Tour", cost: 10 },
      { id: "a2", name: "Lake Pichola Boat Ride", cost: 15 },
      { id: "a3", name: "Sajjangarh Fort Visit", cost: 8 },
      { id: "a4", name: "Bagore Ki Haveli Show", cost: 5 },
      { id: "a5", name: "Vintage Car Museum", cost: 6 },
    ]
  }
];

module.exports = destinations;
