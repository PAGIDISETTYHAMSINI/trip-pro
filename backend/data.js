const destinations = [
  {
    "id": "paris",
    "name": "Paris, France",
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 400
      },
      {
        "id": "f2",
        "type": "Business",
        "cost": 1200
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Hostel",
        "costPerNight": 40,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 120,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Bistro 42 (Continental & Cafe)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Resort",
        "costPerNight": 350,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Street Market Stalls (Local Fast Food)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Budget Eats",
        "costPerDay": 30
      },
      {
        "id": "fd2",
        "type": "Standard Dining",
        "costPerDay": 80
      },
      {
        "id": "fd3",
        "type": "Fine Dining",
        "costPerDay": 200
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Eiffel Tower Ticket",
        "cost": 30,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Louvre Museum",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Seine River Cruise",
        "cost": 25,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Versailles Tour",
        "cost": 60,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Disneyland Paris",
        "cost": 100,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "Year-round",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 160,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 280,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 200,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 480,
        "duration": "8 hours driving"
      }
    ],
    "language": "fr",
    "culturalEtiquette": "Always say 'Bonjour' when entering a shop. Service is included in bills, but a small tip for exceptional service is polite.",
    "emergencyContacts": "Emergency: 112 | Police: 17 | Ambulance: 15"
  },
  {
    "id": "bali",
    "name": "Bali, Indonesia",
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 800
      },
      {
        "id": "f2",
        "type": "Business",
        "cost": 2500
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Guest House",
        "costPerNight": 20,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Street Market Stalls (Local Fast Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Boutique Villa",
        "costPerNight": 80,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury 5-Star",
        "costPerNight": 250,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Street Market Stalls (Local Fast Food)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Street Food & Warungs",
        "costPerDay": 15
      },
      {
        "id": "fd2",
        "type": "Standard Restaurants",
        "costPerDay": 40
      },
      {
        "id": "fd3",
        "type": "High-end Dining",
        "costPerDay": 100
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Ubud Monkey Forest",
        "cost": 5,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Temple Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Scuba Diving",
        "cost": 80,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Surfing Lesson",
        "cost": 30,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Spa Day",
        "cost": 50,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "November to February",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 320,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 560,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 400,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 960,
        "duration": "8 hours driving"
      }
    ],
    "language": "id",
    "culturalEtiquette": "Dress modestly. Never point with your index finger; use your thumb instead. Remove shoes before entering homes.",
    "emergencyContacts": "Police: 110 | Ambulance: 118"
  },
  {
    "id": "tokyo",
    "name": "Tokyo, Japan",
    "image": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 900
      },
      {
        "id": "f2",
        "type": "Business",
        "cost": 3000
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Capsule Hotel",
        "costPerNight": 35,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Business Hotel",
        "costPerNight": 100,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Ryokan",
        "costPerNight": 400,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Royal Dining Room (Fine Dining)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Convenience Stores & Ramen",
        "costPerDay": 25
      },
      {
        "id": "fd2",
        "type": "Standard Izakaya/Sushi",
        "costPerDay": 60
      },
      {
        "id": "fd3",
        "type": "Omakase & Kobe Beef",
        "costPerDay": 250
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Tokyo Skytree",
        "cost": 25,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "TeamLab Planets",
        "cost": 30,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Disneyland/DisneySea",
        "cost": 80,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Mount Fuji Day Trip",
        "cost": 120,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Akihabara Maid Cafe",
        "cost": 40,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "November to February",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 360,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 630,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 450,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 1080,
        "duration": "8 hours driving"
      }
    ],
    "language": "ja",
    "culturalEtiquette": "Do NOT tip; it can be considered rude. Bowing is the standard greeting. Keep quiet on public transport.",
    "emergencyContacts": "Police: 110 | Ambulance/Fire: 119"
  },
  {
    "id": "newyork",
    "name": "New York City, USA",
    "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 300
      },
      {
        "id": "f2",
        "type": "Business",
        "cost": 1000
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Hostel/Budget",
        "costPerNight": 80,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h2",
        "type": "Mid-range Hotel",
        "costPerNight": 200,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 600,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Street Market Stalls (Local Fast Food)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Pizza & Food Trucks",
        "costPerDay": 40
      },
      {
        "id": "fd2",
        "type": "Casual Dining",
        "costPerDay": 100
      },
      {
        "id": "fd3",
        "type": "Fine Dining",
        "costPerDay": 300
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Empire State Building",
        "cost": 45,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Statue of Liberty Cruise",
        "cost": 30,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Broadway Show",
        "cost": 150,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "MoMA",
        "cost": 25,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Helicopter Tour",
        "cost": 250,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "October to March",
    "suggestedAgeGroups": "Backpackers & Solo Travelers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 120,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 210,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 150,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 360,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Tipping is practically mandatory for services (15-20% at restaurants). Personal space is highly valued.",
    "emergencyContacts": "Emergency: 911"
  },
  {
    "id": "goa",
    "name": "Goa, India",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Budget Airline",
        "cost": 150
      },
      {
        "id": "f2",
        "type": "Premium Airline",
        "cost": 400
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Beach Shack",
        "costPerNight": 15,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h2",
        "type": "3-Star Resort",
        "costPerNight": 50,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury 5-Star",
        "costPerNight": 150,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Local Shacks & Street Food",
        "costPerDay": 10
      },
      {
        "id": "fd2",
        "type": "Standard Restaurants",
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
        "name": "Scuba Diving, India",
        "cost": 40,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Dudhsagar Waterfall Trek, India",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Spice Plantation Tour, India",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Sunset Cruise, India",
        "cost": 25,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Parasailing, India",
        "cost": 30,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "November to February",
    "suggestedAgeGroups": "Families & Couples",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 60,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 105,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 75,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 180,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
  },
  {
    "id": "kerala",
    "name": "Kerala, India",
    "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 200
      },
      {
        "id": "f2",
        "type": "Business",
        "cost": 500
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Homestay",
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h2",
        "type": "Houseboat",
        "costPerNight": 80,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h3",
        "type": "Ayurvedic Resort",
        "costPerNight": 200,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Bistro 42 (Continental & Cafe)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Local Eateries",
        "costPerDay": 10
      },
      {
        "id": "fd2",
        "type": "Multi-cuisine Restaurants",
        "costPerDay": 30
      },
      {
        "id": "fd3",
        "type": "Resort Dining",
        "costPerDay": 90
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Kathakali Performance, India",
        "cost": 10,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Munnar Tea Gardens Tour, India",
        "cost": 25,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Periyar Wildlife Safari, India",
        "cost": 35,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Ayurvedic Massage, India",
        "cost": 40,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Backwater Canoe Tour, India",
        "cost": 20,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "Year-round",
    "suggestedAgeGroups": "Families & Couples",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 80,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 140,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 100,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 240,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
  },
  {
    "id": "jaipur",
    "name": "Jaipur, India",
    "image": "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 180
      },
      {
        "id": "f2",
        "type": "Business",
        "cost": 450
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Hostel/Budget",
        "costPerNight": 12,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Street Market Stalls (Local Fast Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Heritage Hotel",
        "costPerNight": 60,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h3",
        "type": "Palace Hotel",
        "costPerNight": 300,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Street Food & Dhabas",
        "costPerDay": 8
      },
      {
        "id": "fd2",
        "type": "Traditional Thali Restaurants",
        "costPerDay": 20
      },
      {
        "id": "fd3",
        "type": "Royal Dining",
        "costPerDay": 100
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Amber Fort Tour, India",
        "cost": 15,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Hot Air Balloon Ride, India",
        "cost": 150,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "City Palace Ticket, India",
        "cost": 10,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Chokhi Dhani Village Experience, India",
        "cost": 25,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Elephant Ride, India",
        "cost": 20,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "Year-round",
    "suggestedAgeGroups": "Backpackers & Solo Travelers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 72,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 125,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 90,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 216,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
  },
  {
    "id": "agra",
    "name": "Agra, India",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 120
      },
      {
        "id": "f2",
        "type": "Business",
        "cost": 350
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Budget Stay",
        "costPerNight": 15,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Bistro 42 (Continental & Cafe)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 40,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h3",
        "type": "Taj View Luxury",
        "costPerNight": 250,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Street Chaat & Petha",
        "costPerDay": 8
      },
      {
        "id": "fd2",
        "type": "Mughlai Dining",
        "costPerDay": 25
      },
      {
        "id": "fd3",
        "type": "Luxury Dining",
        "costPerDay": 80
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Taj Mahal Entry, India",
        "cost": 15,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Agra Fort, India",
        "cost": 10,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Fatehpur Sikri Day Trip, India",
        "cost": 20,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Mehtab Bagh Sunset, India",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Heritage Walk, India",
        "cost": 12,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "Year-round",
    "suggestedAgeGroups": "Backpackers & Solo Travelers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 48,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 84,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 60,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 144,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
  },
  {
    "id": "newdelhi",
    "name": "New Delhi, India",
    "image": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 150
      },
      {
        "id": "f2",
        "type": "Business",
        "cost": 400
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Backpacker Hostel",
        "costPerNight": 12,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h2",
        "type": "Mid-range Hotel",
        "costPerNight": 45,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h3",
        "type": "5-Star Hotel",
        "costPerNight": 180,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Street Market Stalls (Local Fast Food)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Street Food (Chandni Chowk)",
        "costPerDay": 10
      },
      {
        "id": "fd2",
        "type": "Casual Cafes",
        "costPerDay": 25
      },
      {
        "id": "fd3",
        "type": "Fine Dining",
        "costPerDay": 90
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Red Fort Ticket, India",
        "cost": 8,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Qutub Minar, India",
        "cost": 8,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "India Gate Walk, India",
        "cost": 0,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Akshardham Temple Tour, India",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Food Tour, India",
        "cost": 25,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "Year-round",
    "suggestedAgeGroups": "18-35 Adventure Seekers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 60,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 105,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 75,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 180,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
  },
  {
    "id": "mumbai",
    "name": "Mumbai, India",
    "image": "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 160
      },
      {
        "id": "f2",
        "type": "Business",
        "cost": 420
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Budget Hotel",
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h2",
        "type": "Business Hotel",
        "costPerNight": 60,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h3",
        "type": "Sea View Luxury",
        "costPerNight": 250,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Vada Pav & Street Food",
        "costPerDay": 10
      },
      {
        "id": "fd2",
        "type": "Standard Restaurants",
        "costPerDay": 30
      },
      {
        "id": "fd3",
        "type": "High-end Dining",
        "costPerDay": 120
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Gateway of India Boat Ride, India",
        "cost": 5,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Elephanta Caves Tour, India",
        "cost": 15,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Marine Drive Walk, India",
        "cost": 0,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Bollywood Studio Tour, India",
        "cost": 40,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Dharavi Tour, India",
        "cost": 12,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "December to April",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 64,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 112,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 80,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 192,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
  },
  {
    "id": "varanasi",
    "name": "Varanasi, India",
    "image": "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 130
      },
      {
        "id": "f2",
        "type": "Business",
        "cost": 380
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Ghat Hostel",
        "costPerNight": 10,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      },
      {
        "id": "h2",
        "type": "Heritage Guest House",
        "costPerNight": 35,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Bistro 42 (Continental & Cafe)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury River View",
        "costPerNight": 150,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Street Market Stalls (Local Fast Food)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Street Chaat & Lassi",
        "costPerDay": 8
      },
      {
        "id": "fd2",
        "type": "Traditional Dining",
        "costPerDay": 20
      },
      {
        "id": "fd3",
        "type": "Upscale Restaurant",
        "costPerDay": 60
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Sunrise Boat Ride, India",
        "cost": 10,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Ganga Aarti Experience, India",
        "cost": 0,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Sarnath Tour, India",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Walking Tour of Ghats, India",
        "cost": 8,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Silk Weaving Village Visit, India",
        "cost": 12,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "November to February",
    "suggestedAgeGroups": "Backpackers & Solo Travelers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 52,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 91,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 65,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 156,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
  },
  {
    "id": "ladakh",
    "name": "Ladakh, India",
    "image": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 250
      },
      {
        "id": "f2",
        "type": "Premium Economy",
        "cost": 500
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Guesthouse",
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Street Market Stalls (Local Fast Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 50,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Glamping",
        "costPerNight": 180,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Local Cafes",
        "costPerDay": 15
      },
      {
        "id": "fd2",
        "type": "Standard Dining",
        "costPerDay": 30
      },
      {
        "id": "fd3",
        "type": "Premium Dining",
        "costPerDay": 80
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Pangong Lake Trip, India",
        "cost": 50,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Nubra Valley Safari, India",
        "cost": 60,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Monastery Tour, India",
        "cost": 20,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Magnetic Hill Visit, India",
        "cost": 10,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "River Rafting, India",
        "cost": 30,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "December to April",
    "suggestedAgeGroups": "Backpackers & Solo Travelers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 100,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 175,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 125,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 300,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
  },
  {
    "id": "andaman",
    "name": "Andaman Islands, India",
    "image": "https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 220
      },
      {
        "id": "f2",
        "type": "Business",
        "cost": 600
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Budget Stay",
        "costPerNight": 25,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Beach Resort",
        "costPerNight": 80,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Bistro 42 (Continental & Cafe)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Villa",
        "costPerNight": 250,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Bistro 42 (Continental & Cafe)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Local Seafood Shacks",
        "costPerDay": 15
      },
      {
        "id": "fd2",
        "type": "Standard Restaurants",
        "costPerDay": 35
      },
      {
        "id": "fd3",
        "type": "Resort Dining",
        "costPerDay": 100
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Scuba Diving (Havelock), India",
        "cost": 60,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Cellular Jail Tour, India",
        "cost": 10,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Ross Island Visit, India",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Snorkeling, India",
        "cost": 30,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Glass Bottom Boat Ride, India",
        "cost": 20,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "Year-round",
    "suggestedAgeGroups": "Families & Couples",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 88,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 154,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 110,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 264,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
  },
  {
    "id": "manali",
    "name": "Manali, India",
    "image": "https://images.unsplash.com/photo-1605649487212-4dcb1b6b1089?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Bus/Economy Travel",
        "cost": 50
      },
      {
        "id": "f2",
        "type": "Private Cab",
        "cost": 200
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Hostel",
        "costPerNight": 10,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      },
      {
        "id": "h2",
        "type": "Mountain View Hotel",
        "costPerNight": 40,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Resort",
        "costPerNight": 150,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Cafes & Street Food",
        "costPerDay": 12
      },
      {
        "id": "fd2",
        "type": "Standard Dining",
        "costPerDay": 25
      },
      {
        "id": "fd3",
        "type": "Fine Dining",
        "costPerDay": 70
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Rohtang Pass Trip, India",
        "cost": 40,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Solang Valley Adventure, India",
        "cost": 25,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Paragliding, India",
        "cost": 35,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Hadimba Temple Visit, India",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "River Rafting, India",
        "cost": 20,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "October to March",
    "suggestedAgeGroups": "18-35 Adventure Seekers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 20,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 35,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 25,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 60,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
  },
  {
    "id": "darjeeling",
    "name": "Darjeeling, India",
    "image": "https://images.unsplash.com/photo-1544634076-a90160ddf44e?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 150
      },
      {
        "id": "f2",
        "type": "Business",
        "cost": 350
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Homestay",
        "costPerNight": 15,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Bistro 42 (Continental & Cafe)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 40,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      },
      {
        "id": "h3",
        "type": "Tea Estate Resort",
        "costPerNight": 180,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "The Spice Route (Authentic Local Food)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Local Eateries & Momo stalls",
        "costPerDay": 10
      },
      {
        "id": "fd2",
        "type": "Standard Dining",
        "costPerDay": 25
      },
      {
        "id": "fd3",
        "type": "Premium Dining",
        "costPerDay": 80
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "Tiger Hill Sunrise Tour, India",
        "cost": 15,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Toy Train Ride, India",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Tea Garden Tour, India",
        "cost": 10,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Himalayan Mountaineering Institute, India",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Ropeway Ride, India",
        "cost": 8,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "October to March",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 60,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 105,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 75,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 180,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
  },
  {
    "id": "rishikesh",
    "name": "Rishikesh, India",
    "image": "https://images.unsplash.com/photo-1605650225134-8c813be51a84?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 100
      },
      {
        "id": "f2",
        "type": "Premium Economy",
        "cost": 250
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Ashram Stay",
        "costPerNight": 8,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      },
      {
        "id": "h2",
        "type": "Riverside Camp",
        "costPerNight": 30,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Spa Resort",
        "costPerNight": 200,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      }
    ],
    "foodOptions": [
      {
        "id": "fd1",
        "type": "Ashram Food & Cafes",
        "costPerDay": 8
      },
      {
        "id": "fd2",
        "type": "Standard Dining",
        "costPerDay": 20
      },
      {
        "id": "fd3",
        "type": "Fine Dining",
        "costPerDay": 60
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "River Rafting, India",
        "cost": 20,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Bungee Jumping, India",
        "cost": 50,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Yoga Session, India",
        "cost": 10,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Ganga Aarti, India",
        "cost": 0,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Beatles Ashram Visit, India",
        "cost": 8,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "November to February",
    "suggestedAgeGroups": "Backpackers & Solo Travelers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 40,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 70,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 50,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 120,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
  },
  {
    "id": "udaipur",
    "name": "Udaipur, India",
    "image": "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=1000",
    "flights": [
      {
        "id": "f1",
        "type": "Economy",
        "cost": 140
      },
      {
        "id": "f2",
        "type": "Business",
        "cost": 380
      }
    ],
    "hotels": [
      {
        "id": "h1",
        "type": "Backpacker Hostel",
        "costPerNight": 12,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Lake View Hotel",
        "costPerNight": 50,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h3",
        "type": "Lake Palace Luxury",
        "costPerNight": 400,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Street Market Stalls (Local Fast Food)"
        ]
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
        "type": "Rooftop Restaurant",
        "costPerDay": 25
      },
      {
        "id": "fd3",
        "type": "Fine Dining",
        "costPerDay": 90
      }
    ],
    "activities": [
      {
        "id": "a1",
        "name": "City Palace Tour, India",
        "cost": 10,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Lake Pichola Boat Ride, India",
        "cost": 15,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Sajjangarh Fort Visit, India",
        "cost": 8,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Bagore Ki Haveli Show, India",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Vintage Car Museum, India",
        "cost": 6,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "September to November",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 56,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 98,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 70,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 168,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
  },
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
        "costPerNight": 21,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 48,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Bistro 42 (Continental & Cafe)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 194,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
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
        "cost": 14,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "October to March",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 77,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 135,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 96,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 231,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 24,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 41,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 248,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ]
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
        "cost": 17,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "September to November",
    "suggestedAgeGroups": "Families & Couples",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 48,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 84,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 60,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 145,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 42,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 218,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Ocean View Diner (Seafood & Grills)"
        ]
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
        "cost": 10,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "October to March",
    "suggestedAgeGroups": "Backpackers & Solo Travelers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 61,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 107,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 77,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 184,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Street Market Stalls (Local Fast Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 44,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 154,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
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
        "cost": 17,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "November to February",
    "suggestedAgeGroups": "Families & Couples",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 46,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 80,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 57,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 138,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 23,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 58,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 216,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Ocean View Diner (Seafood & Grills)"
        ]
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
        "cost": 10,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "September to November",
    "suggestedAgeGroups": "Backpackers & Solo Travelers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 47,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 83,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 59,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 142,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 16,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 52,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 204,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "The Spice Route (Authentic Local Food)"
        ]
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
        "cost": 19,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "October to March",
    "suggestedAgeGroups": "Backpackers & Solo Travelers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 42,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 74,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 53,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 127,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 17,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 59,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 220,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Royal Dining Room (Fine Dining)"
        ]
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
        "cost": 13,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "December to April",
    "suggestedAgeGroups": "Backpackers & Solo Travelers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 78,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 136,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 97,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 234,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 21,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Bistro 42 (Continental & Cafe)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 59,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 171,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Royal Dining Room (Fine Dining)"
        ]
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
        "cost": 13,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "September to November",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 66,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 115,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 82,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 198,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 54,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Street Market Stalls (Local Fast Food)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 217,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Ocean View Diner (Seafood & Grills)"
        ]
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
        "cost": 16,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "September to November",
    "suggestedAgeGroups": "Backpackers & Solo Travelers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 44,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 77,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 55,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 132,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 21,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Bistro 42 (Continental & Cafe)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 46,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 171,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Bistro 42 (Continental & Cafe)"
        ]
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
        "cost": 15,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "October to March",
    "suggestedAgeGroups": "Backpackers & Solo Travelers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 68,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 120,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 86,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 206,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 23,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 45,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 225,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Royal Dining Room (Fine Dining)"
        ]
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
        "cost": 12,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "September to November",
    "suggestedAgeGroups": "Backpackers & Solo Travelers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 59,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 104,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 74,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 178,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 16,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 58,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 248,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Royal Dining Room (Fine Dining)"
        ]
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
        "cost": 13,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "December to April",
    "suggestedAgeGroups": "18-35 Adventure Seekers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 46,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 81,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 58,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 140,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 17,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 59,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 175,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Bistro 42 (Continental & Cafe)"
        ]
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
        "cost": 13,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "September to November",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 65,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 114,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 82,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 196,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 15,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Bistro 42 (Continental & Cafe)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 42,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Bistro 42 (Continental & Cafe)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 170,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Street Market Stalls (Local Fast Food)"
        ]
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
        "cost": 11,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "October to March",
    "suggestedAgeGroups": "Families & Couples",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 77,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 135,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 97,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 232,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 17,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 56,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 248,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ]
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
        "cost": 17,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "November to February",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 76,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 133,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 95,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 229,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 43,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 192,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Royal Dining Room (Fine Dining)"
        ]
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
        "cost": 14,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "September to November",
    "suggestedAgeGroups": "Families & Couples",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 50,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 88,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 63,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 151,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 18,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 54,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 186,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ]
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
        "cost": 14,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "Year-round",
    "suggestedAgeGroups": "Families & Couples",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 75,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 131,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 94,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 225,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 21,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Bistro 42 (Continental & Cafe)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 58,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 213,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Ocean View Diner (Seafood & Grills)"
        ]
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
        "cost": 14,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "November to February",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 57,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 100,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 71,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 171,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 22,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 47,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 171,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Royal Dining Room (Fine Dining)"
        ]
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
        "cost": 11,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "Year-round",
    "suggestedAgeGroups": "Families & Couples",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 70,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 123,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 88,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 211,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 18,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 50,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 224,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Royal Dining Room (Fine Dining)"
        ]
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
        "cost": 13,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "September to November",
    "suggestedAgeGroups": "18-35 Adventure Seekers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 46,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 81,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 58,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 139,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 18,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 52,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 207,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Royal Dining Room (Fine Dining)"
        ]
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
        "cost": 19,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "November to February",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 56,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 98,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 70,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 169,
        "duration": "8 hours driving"
      }
    ],
    "language": "hi",
    "culturalEtiquette": "Dress modestly, especially at religious sites. Remove shoes before entering temples. Tipping is optional but appreciated (10%). Use your right hand for eating and passing items.",
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112"
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
        "costPerNight": 21,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 46,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 155,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Ocean View Diner (Seafood & Grills)"
        ]
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
        "cost": 14,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "September to November",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 72,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 125,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 90,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 216,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 19,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 44,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 238,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ]
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
        "cost": 15,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "Year-round",
    "suggestedAgeGroups": "Families & Couples",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 58,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 101,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 72,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 174,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "The Spice Route (Authentic Local Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 43,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Street Market Stalls (Local Fast Food)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 154,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Street Market Stalls (Local Fast Food)"
        ]
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
        "cost": 18,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "September to November",
    "suggestedAgeGroups": "18-35 Adventure Seekers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 72,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 126,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 90,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 217,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 21,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Street Market Stalls (Local Fast Food)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 54,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Bistro 42 (Continental & Cafe)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 168,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ]
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
        "cost": 17,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "November to February",
    "suggestedAgeGroups": "18-35 Adventure Seekers",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 49,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 86,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 62,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 148,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 21,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Bistro 42 (Continental & Cafe)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 42,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 242,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ]
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
        "cost": 10,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "December to April",
    "suggestedAgeGroups": "Families & Couples",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 63,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 111,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 79,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 190,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 22,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 57,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 235,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Street Market Stalls (Local Fast Food)"
        ]
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
        "cost": 19,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "Year-round",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 47,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 82,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 59,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 141,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 17,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Ocean View Diner (Seafood & Grills)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 49,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 194,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "The Spice Route (Authentic Local Food)"
        ]
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
        "cost": 14,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "December to April",
    "suggestedAgeGroups": "Families & Couples",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 62,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 109,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 78,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 187,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 15,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Green Leaf Vegetarian (Healthy Options)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 47,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Café Sunrise (Breakfast & Coffee)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 191,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "The Spice Route (Authentic Local Food)"
        ]
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
        "cost": 17,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "November to February",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 67,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 118,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 84,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 202,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
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
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 40,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Royal Dining Room (Fine Dining)"
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 238,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "The Spice Route (Authentic Local Food)"
        ]
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
        "cost": 19,
        "suggestedTime": "Morning (09:00 AM)",
        "proximity": "Walking distance from center",
        "description": "A comprehensive guided tour covering the history, architecture, and cultural significance of the site."
      },
      {
        "id": "a2",
        "name": "Guided City Tour",
        "cost": 20,
        "suggestedTime": "Late Morning (11:00 AM)",
        "proximity": "2 km from hotel",
        "description": "An adventurous experience perfectly suited for making unforgettable memories with expert instructors."
      },
      {
        "id": "a3",
        "name": "Cultural Show",
        "cost": 15,
        "suggestedTime": "Afternoon (02:00 PM)",
        "proximity": "5 km from city center",
        "description": "Relax and unwind as you take in the breathtaking panoramic views and serene atmosphere."
      },
      {
        "id": "a4",
        "name": "Local Market Walk",
        "cost": 5,
        "suggestedTime": "Late Afternoon (04:00 PM)",
        "proximity": "10 km away",
        "description": "A cultural deep-dive where you interact with locals and learn about the traditional ways of life."
      },
      {
        "id": "a5",
        "name": "Premium Sightseeing",
        "cost": 35,
        "suggestedTime": "Evening (06:00 PM)",
        "proximity": "Heart of the city",
        "description": "An action-packed session full of thrill, ideal for those looking to get their adrenaline pumping."
      }
    ],
    "bestMonths": "November to February",
    "suggestedAgeGroups": "All Age Groups",
    "trains": [
      {
        "id": "t1",
        "type": "Express Train",
        "cost": 69,
        "duration": "12 hours"
      },
      {
        "id": "t2",
        "type": "Premium Sleeper Train",
        "cost": 121,
        "duration": "10 hours"
      }
    ],
    "cars": [
      {
        "id": "c1",
        "type": "Standard Sedan",
        "cost": 86,
        "duration": "8 hours driving"
      },
      {
        "id": "c2",
        "type": "Luxury SUV",
        "cost": 207,
        "duration": "8 hours driving"
      }
    ],
    "language": "en",
    "culturalEtiquette": "Dress comfortably and respect local customs. Tipping is generally appreciated (10-15%).",
    "emergencyContacts": "Local Emergency: 911"
  }
];

module.exports = destinations;
