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
      { id: "a1", name: "Eiffel Tower Ticket, India", cost: 30 },
      { id: "a2", name: "Louvre Museum, India", cost: 20 },
      { id: "a3", name: "Seine River Cruise, India", cost: 25 },
      { id: "a4", name: "Versailles Tour, India", cost: 60 },
      { id: "a5", name: "Disneyland Paris, India", cost: 100 },
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
      { id: "a1", name: "Ubud Monkey Forest, India", cost: 5 },
      { id: "a2", name: "Temple Tour, India", cost: 20 },
      { id: "a3", name: "Scuba Diving, India", cost: 80 },
      { id: "a4", name: "Surfing Lesson, India", cost: 30 },
      { id: "a5", name: "Spa Day, India", cost: 50 },
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
      { id: "a1", name: "Tokyo Skytree, India", cost: 25 },
      { id: "a2", name: "TeamLab Planets, India", cost: 30 },
      { id: "a3", name: "Disneyland/DisneySea, India", cost: 80 },
      { id: "a4", name: "Mount Fuji Day Trip, India", cost: 120 },
      { id: "a5", name: "Akihabara Maid Cafe, India", cost: 40 },
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
      { id: "a1", name: "Empire State Building, India", cost: 45 },
      { id: "a2", name: "Statue of Liberty Cruise, India", cost: 30 },
      { id: "a3", name: "Broadway Show, India", cost: 150 },
      { id: "a4", name: "MoMA, India", cost: 25 },
      { id: "a5", name: "Helicopter Tour, India", cost: 250 },
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
      { id: "a1", name: "Scuba Diving, India", cost: 40 },
      { id: "a2", name: "Dudhsagar Waterfall Trek, India", cost: 20 },
      { id: "a3", name: "Spice Plantation Tour, India", cost: 15 },
      { id: "a4", name: "Sunset Cruise, India", cost: 25 },
      { id: "a5", name: "Parasailing, India", cost: 30 },
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
      { id: "a1", name: "Kathakali Performance, India", cost: 10 },
      { id: "a2", name: "Munnar Tea Gardens Tour, India", cost: 25 },
      { id: "a3", name: "Periyar Wildlife Safari, India", cost: 35 },
      { id: "a4", name: "Ayurvedic Massage, India", cost: 40 },
      { id: "a5", name: "Backwater Canoe Tour, India", cost: 20 },
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
      { id: "a1", name: "Amber Fort Tour, India", cost: 15 },
      { id: "a2", name: "Hot Air Balloon Ride, India", cost: 150 },
      { id: "a3", name: "City Palace Ticket, India", cost: 10 },
      { id: "a4", name: "Chokhi Dhani Village Experience, India", cost: 25 },
      { id: "a5", name: "Elephant Ride, India", cost: 20 },
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
      { id: "a1", name: "Taj Mahal Entry, India", cost: 15 },
      { id: "a2", name: "Agra Fort, India", cost: 10 },
      { id: "a3", name: "Fatehpur Sikri Day Trip, India", cost: 20 },
      { id: "a4", name: "Mehtab Bagh Sunset, India", cost: 5 },
      { id: "a5", name: "Heritage Walk, India", cost: 12 },
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
      { id: "a1", name: "Red Fort Ticket, India", cost: 8 },
      { id: "a2", name: "Qutub Minar, India", cost: 8 },
      { id: "a3", name: "India Gate Walk, India", cost: 0 },
      { id: "a4", name: "Akshardham Temple Tour, India", cost: 5 },
      { id: "a5", name: "Food Tour, India", cost: 25 },
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
      { id: "a1", name: "Gateway of India Boat Ride, India", cost: 5 },
      { id: "a2", name: "Elephanta Caves Tour, India", cost: 15 },
      { id: "a3", name: "Marine Drive Walk, India", cost: 0 },
      { id: "a4", name: "Bollywood Studio Tour, India", cost: 40 },
      { id: "a5", name: "Dharavi Tour, India", cost: 12 },
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
      { id: "a1", name: "Sunrise Boat Ride, India", cost: 10 },
      { id: "a2", name: "Ganga Aarti Experience, India", cost: 0 },
      { id: "a3", name: "Sarnath Tour, India", cost: 15 },
      { id: "a4", name: "Walking Tour of Ghats, India", cost: 8 },
      { id: "a5", name: "Silk Weaving Village Visit, India", cost: 12 },
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
      { id: "a1", name: "Pangong Lake Trip, India", cost: 50 },
      { id: "a2", name: "Nubra Valley Safari, India", cost: 60 },
      { id: "a3", name: "Monastery Tour, India", cost: 20 },
      { id: "a4", name: "Magnetic Hill Visit, India", cost: 10 },
      { id: "a5", name: "River Rafting, India", cost: 30 },
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
      { id: "a1", name: "Scuba Diving (Havelock), India", cost: 60 },
      { id: "a2", name: "Cellular Jail Tour, India", cost: 10 },
      { id: "a3", name: "Ross Island Visit, India", cost: 15 },
      { id: "a4", name: "Snorkeling, India", cost: 30 },
      { id: "a5", name: "Glass Bottom Boat Ride, India", cost: 20 },
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
      { id: "a1", name: "Rohtang Pass Trip, India", cost: 40 },
      { id: "a2", name: "Solang Valley Adventure, India", cost: 25 },
      { id: "a3", name: "Paragliding, India", cost: 35 },
      { id: "a4", name: "Hadimba Temple Visit, India", cost: 5 },
      { id: "a5", name: "River Rafting, India", cost: 20 },
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
      { id: "a1", name: "Tiger Hill Sunrise Tour, India", cost: 15 },
      { id: "a2", name: "Toy Train Ride, India", cost: 20 },
      { id: "a3", name: "Tea Garden Tour, India", cost: 10 },
      { id: "a4", name: "Himalayan Mountaineering Institute, India", cost: 5 },
      { id: "a5", name: "Ropeway Ride, India", cost: 8 },
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
      { id: "a1", name: "River Rafting, India", cost: 20 },
      { id: "a2", name: "Bungee Jumping, India", cost: 50 },
      { id: "a3", name: "Yoga Session, India", cost: 10 },
      { id: "a4", name: "Ganga Aarti, India", cost: 0 },
      { id: "a5", name: "Beatles Ashram Visit, India", cost: 8 },
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
      { id: "a1", name: "City Palace Tour, India", cost: 10 },
      { id: "a2", name: "Lake Pichola Boat Ride, India", cost: 15 },
      { id: "a3", name: "Sajjangarh Fort Visit, India", cost: 8 },
      { id: "a4", name: "Bagore Ki Haveli Show, India", cost: 5 },
      { id: "a5", name: "Vintage Car Museum, India", cost: 6 },
    ]
  }
,
  {
  "id": "img_ajanta_0",
  "name": "Ajanta, Aurangabad",
  "image": "https://images.unsplash.com/photo-1625227702890-df4f07bb184c?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 193
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 329
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 21
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 48
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 194
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Ajanta",
      "cost": 14
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_amarnathcave_1",
  "name": "Amarnath Cave, Kashmir",
  "image": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 121
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 412
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 24
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 41
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 248
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Amarnath Cave",
      "cost": 17
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_akbarstomb_2",
  "name": "Akbar's Tomb, Agra",
  "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 154
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 477
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 20
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 42
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 218
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Akbar's Tomb",
      "cost": 10
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_amberpalace_3",
  "name": "Amber Palace, Jaipur",
  "image": "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 115
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 391
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 20
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 44
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 154
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Amber Palace",
      "cost": 17
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_anandbhawan_4",
  "name": "Anand Bhawan, Allahabad",
  "image": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 119
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 393
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 23
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 58
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 216
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Anand Bhawan",
      "cost": 10
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_bhakradam_5",
  "name": "Bhakra Dam, Punjab",
  "image": "https://images.unsplash.com/photo-1605649487212-4dcb1b6b1089?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 106
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 499
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 16
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 52
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 204
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Bhakra Dam",
      "cost": 19
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_bibidamaqbra_6",
  "name": "Bibi Da Maqbra, Aurangabad",
  "image": "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 195
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 494
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 17
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 59
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 220
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Bibi Da Maqbra",
      "cost": 13
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_birlaplanetarium_7",
  "name": "Birla Planetarium, Calcutta",
  "image": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 165
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 302
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 21
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 59
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 171
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Birla Planetarium",
      "cost": 13
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_blackpagoda_8",
  "name": "Black Pagoda, Konark",
  "image": "https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 110
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 391
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 20
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 54
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 217
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Black Pagoda",
      "cost": 16
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_bodhisatva_9",
  "name": "Bodhisatva, Ajanta Caves",
  "image": "https://images.unsplash.com/photo-1625227702890-df4f07bb184c?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 172
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 461
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 21
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 46
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 171
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Bodhisatva",
      "cost": 15
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_brihadeeswaratemple_10",
  "name": "Brihadeeswara Temple, Tanjavur",
  "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 149
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 494
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 23
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 45
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 225
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Brihadeeswara Temple",
      "cost": 12
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_brindabangardens_11",
  "name": "Brindaban Gardens, Mysore",
  "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 117
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 481
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 16
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 58
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 248
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Brindaban Gardens",
      "cost": 13
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_bulanddarwaza_12",
  "name": "Buland Darwaza, Fatehpur Sikri",
  "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 164
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 469
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 17
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 59
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 175
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Buland Darwaza",
      "cost": 13
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_charminar_13",
  "name": "Charminar, Hyderabad",
  "image": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 194
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 426
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 15
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 42
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 170
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Charminar",
      "cost": 11
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_cheenakesavatemple_14",
  "name": "Cheena Kesava Temple, Belur",
  "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 191
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 348
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 17
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 56
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 248
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Cheena Kesava Temple",
      "cost": 17
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_chilkalake_15",
  "name": "Chilka Lake, Bhubaneshwar",
  "image": "https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 126
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 461
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 20
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 43
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 192
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Chilka Lake",
      "cost": 14
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_dallake_16",
  "name": "Dal Lake, Srinagar",
  "image": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 188
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 353
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 18
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 54
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 186
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Dal Lake",
      "cost": 14
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_dilwaratemple_17",
  "name": "Dilwara Temple, Mt.Abu",
  "image": "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 143
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 472
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 21
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 58
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 213
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Dilwara Temple",
      "cost": 14
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_elephantacaves_18",
  "name": "Elephanta Caves, Bombay",
  "image": "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 176
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 382
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 22
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 47
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 171
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Elephanta Caves",
      "cost": 11
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_elloracaves_19",
  "name": "Ellora Caves, Aurangabad",
  "image": "https://images.unsplash.com/photo-1625227702890-df4f07bb184c?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 116
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 428
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 18
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 50
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 224
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Ellora Caves",
      "cost": 13
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_gatewayofindia_20",
  "name": "Gateway of India, Bombay",
  "image": "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 141
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 352
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 18
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 52
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 207
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Gateway of India",
      "cost": 19
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_goldentemple_21",
  "name": "Golden Temple, Amritsar",
  "image": "https://images.unsplash.com/photo-1605649487212-4dcb1b6b1089?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 180
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 321
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 21
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 46
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 155
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Golden Temple",
      "cost": 14
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_golgumbaz_22",
  "name": "Gol Gumbaz, Bijapur",
  "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 145
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 481
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 19
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 44
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 238
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Gol Gumbaz",
      "cost": 15
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_hanginggardens_23",
  "name": "Hanging Gardens, Bombay",
  "image": "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 181
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 367
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 20
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 43
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 154
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Hanging Gardens",
      "cost": 18
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_hawamahal_24",
  "name": "Hawa Mahal, Jaipur",
  "image": "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 124
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 489
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 21
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 54
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 168
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Hawa Mahal",
      "cost": 17
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_howrahbridge_25",
  "name": "Howrah Bridge, Calcutta",
  "image": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 159
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 300
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 21
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 42
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 242
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Howrah Bridge",
      "cost": 10
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_islandpalace_26",
  "name": "Island Palace, Udaipur",
  "image": "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 118
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 401
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 22
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 57
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 235
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Island Palace",
      "cost": 19
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_itmaaduddaulahstomb_27",
  "name": "Itmaad-ud-Daulah's Tomb, Agra",
  "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 156
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 335
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 17
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 49
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 194
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Itmaad-ud-Daulah's Tomb",
      "cost": 14
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_jagannathtemple_28",
  "name": "Jagannath Temple, Puri",
  "image": "https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 169
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 444
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 15
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 47
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 191
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Jagannath Temple",
      "cost": 17
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
},
  {
  "id": "img_jahazmahal_29",
  "name": "Jahaz Mahal, Mandu",
  "image": "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "f1",
      "type": "Economy",
      "cost": 173
    },
    {
      "id": "f2",
      "type": "Business",
      "cost": 342
    }
  ],
  "hotels": [
    {
      "id": "h1",
      "type": "Budget Stay",
      "costPerNight": 20
    },
    {
      "id": "h2",
      "type": "Standard Hotel",
      "costPerNight": 40
    },
    {
      "id": "h3",
      "type": "Luxury Hotel",
      "costPerNight": 238
    }
  ],
  "foodOptions": [
    {
      "id": "fd1",
      "type": "Street Food",
      "costPerDay": 10
    },
    {
      "id": "fd2",
      "type": "Standard Dining",
      "costPerDay": 25
    },
    {
      "id": "fd3",
      "type": "Fine Dining",
      "costPerDay": 80
    }
  ],
  "activities": [
    {
      "id": "a1",
      "name": "Visit Jahaz Mahal",
      "cost": 19
    },
    {
      "id": "a2",
      "name": "Guided City Tour",
      "cost": 20
    },
    {
      "id": "a3",
      "name": "Cultural Show",
      "cost": 15
    },
    {
      "id": "a4",
      "name": "Local Market Walk",
      "cost": 5
    },
    {
      "id": "a5",
      "name": "Premium Sightseeing",
      "cost": 35
    }
  ]
}
];

module.exports = destinations;
