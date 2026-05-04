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
        ],
        "rating": "3.9",
        "roomOptions": [
          {
            "type": "Standard Hostel Room",
            "cost": 40
          },
          {
            "type": "Deluxe AC Hostel Room",
            "cost": 60
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 100
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 120,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "3.8",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 120
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 180
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 300
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Resort",
        "costPerNight": 350,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.3",
        "roomOptions": [
          {
            "type": "Standard Luxury Resort Room",
            "cost": 350
          },
          {
            "type": "Deluxe AC Luxury Resort Room",
            "cost": 525
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 875
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.7",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.7",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.5",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.5",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.8",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Emergency: 112 | Police: 17 | Ambulance: 15",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-paris",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-paris",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-paris",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-paris",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-paris",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-paris",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-paris",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-paris",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-paris",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-paris",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-paris",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-paris",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-paris",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-paris",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-paris",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-paris",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-paris",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-paris",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-paris",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-paris",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.6",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.8",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.2",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.7",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.6",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.4",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.7",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.4",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.6",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.5",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Guest House Room",
            "cost": 20
          },
          {
            "type": "Deluxe AC Guest House Room",
            "cost": 30
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 50
          }
        ]
      },
      {
        "id": "h2",
        "type": "Boutique Villa",
        "costPerNight": 80,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "3.8",
        "roomOptions": [
          {
            "type": "Standard Boutique Villa Room",
            "cost": 80
          },
          {
            "type": "Deluxe AC Boutique Villa Room",
            "cost": 120
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 200
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury 5-Star",
        "costPerNight": 250,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.4",
        "roomOptions": [
          {
            "type": "Standard Luxury 5-Star Room",
            "cost": 250
          },
          {
            "type": "Deluxe AC Luxury 5-Star Room",
            "cost": 375
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 625
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.4",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.8",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.8",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.5",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.4",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.6",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 110 | Ambulance: 118",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Light clothing: breathable clothes suitable for hot and humid weather.",
      "Sunscreen and sunglasses.",
      "Swimwear and beach towels.",
      "Waterproof bags for water activities.",
      "Flip-flops or sandals.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-bali",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-bali",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-bali",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-bali",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-bali",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-bali",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-bali",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-bali",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-bali",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-bali",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-bali",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-bali",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-bali",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-bali",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-bali",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-bali",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-bali",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-bali",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-bali",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-bali",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.7",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.9",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "3.9",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "5.0",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.3",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.6",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.4",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.8",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.5",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Capsule Hotel Room",
            "cost": 35
          },
          {
            "type": "Deluxe AC Capsule Hotel Room",
            "cost": 53
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 88
          }
        ]
      },
      {
        "id": "h2",
        "type": "Business Hotel",
        "costPerNight": 100,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "4.8",
        "roomOptions": [
          {
            "type": "Standard Business Hotel Room",
            "cost": 100
          },
          {
            "type": "Deluxe AC Business Hotel Room",
            "cost": 150
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 250
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Ryokan",
        "costPerNight": 400,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.9",
        "roomOptions": [
          {
            "type": "Standard Luxury Ryokan Room",
            "cost": 400
          },
          {
            "type": "Deluxe AC Luxury Ryokan Room",
            "cost": 600
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 1000
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.7",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.3",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "5.0",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.4",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 110 | Ambulance/Fire: 119",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-tokyo",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-tokyo",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-tokyo",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-tokyo",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-tokyo",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-tokyo",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-tokyo",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-tokyo",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-tokyo",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-tokyo",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-tokyo",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-tokyo",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-tokyo",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-tokyo",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-tokyo",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-tokyo",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-tokyo",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-tokyo",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-tokyo",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-tokyo",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.3",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.6",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.0",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.9",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.6",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.7",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.4",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.2",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.7",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.2",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "4.6",
        "roomOptions": [
          {
            "type": "Standard Hostel/Budget Room",
            "cost": 80
          },
          {
            "type": "Deluxe AC Hostel/Budget Room",
            "cost": 120
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 200
          }
        ]
      },
      {
        "id": "h2",
        "type": "Mid-range Hotel",
        "costPerNight": 200,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.1",
        "roomOptions": [
          {
            "type": "Standard Mid-range Hotel Room",
            "cost": 200
          },
          {
            "type": "Deluxe AC Mid-range Hotel Room",
            "cost": 300
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 500
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 600,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.5",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 600
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 900
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 1500
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.7",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.3",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.7",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "5.0",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.6",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-newyork",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-newyork",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-newyork",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-newyork",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-newyork",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-newyork",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-newyork",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-newyork",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-newyork",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-newyork",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-newyork",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-newyork",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-newyork",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-newyork",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-newyork",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-newyork",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-newyork",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-newyork",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-newyork",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-newyork",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.7",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.7",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.2",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.8",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.4",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.5",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.6",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.5",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.4",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "4.5",
        "roomOptions": [
          {
            "type": "Standard Beach Shack Room",
            "cost": 15
          },
          {
            "type": "Deluxe AC Beach Shack Room",
            "cost": 23
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 38
          }
        ]
      },
      {
        "id": "h2",
        "type": "3-Star Resort",
        "costPerNight": 50,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "4.8",
        "roomOptions": [
          {
            "type": "Standard 3-Star Resort Room",
            "cost": 50
          },
          {
            "type": "Deluxe AC 3-Star Resort Room",
            "cost": 75
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 125
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury 5-Star",
        "costPerNight": 150,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "3.6",
        "roomOptions": [
          {
            "type": "Standard Luxury 5-Star Room",
            "cost": 150
          },
          {
            "type": "Deluxe AC Luxury 5-Star Room",
            "cost": 225
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 375
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "4.9",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.3",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.7",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "5.0",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Light clothing: breathable clothes suitable for hot and humid weather.",
      "Sunscreen and sunglasses.",
      "Swimwear and beach towels.",
      "Waterproof bags for water activities.",
      "Flip-flops or sandals.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-goa",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-goa",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-goa",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-goa",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-goa",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-goa",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-goa",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-goa",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-goa",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-goa",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-goa",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-goa",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-goa",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-goa",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-goa",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-goa",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-goa",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-goa",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-goa",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-goa",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.2",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.5",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "3.9",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.6",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.7",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.5",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.4",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.6",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.8",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.4",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "3.7",
        "roomOptions": [
          {
            "type": "Standard Homestay Room",
            "cost": 20
          },
          {
            "type": "Deluxe AC Homestay Room",
            "cost": 30
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 50
          }
        ]
      },
      {
        "id": "h2",
        "type": "Houseboat",
        "costPerNight": 80,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "3.7",
        "roomOptions": [
          {
            "type": "Standard Houseboat Room",
            "cost": 80
          },
          {
            "type": "Deluxe AC Houseboat Room",
            "cost": 120
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 200
          }
        ]
      },
      {
        "id": "h3",
        "type": "Ayurvedic Resort",
        "costPerNight": 200,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "4.1",
        "roomOptions": [
          {
            "type": "Standard Ayurvedic Resort Room",
            "cost": 200
          },
          {
            "type": "Deluxe AC Ayurvedic Resort Room",
            "cost": 300
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 500
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "4.5",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.4",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "4.6",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.6",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-kerala",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-kerala",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-kerala",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-kerala",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-kerala",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-kerala",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-kerala",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-kerala",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-kerala",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-kerala",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-kerala",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-kerala",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-kerala",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-kerala",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-kerala",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-kerala",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-kerala",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-kerala",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-kerala",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-kerala",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.8",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.6",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.3",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.9",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.2",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.4",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.5",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.6",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.3",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "4.6",
        "roomOptions": [
          {
            "type": "Standard Hostel/Budget Room",
            "cost": 12
          },
          {
            "type": "Deluxe AC Hostel/Budget Room",
            "cost": 18
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 30
          }
        ]
      },
      {
        "id": "h2",
        "type": "Heritage Hotel",
        "costPerNight": 60,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "3.8",
        "roomOptions": [
          {
            "type": "Standard Heritage Hotel Room",
            "cost": 60
          },
          {
            "type": "Deluxe AC Heritage Hotel Room",
            "cost": 90
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 150
          }
        ]
      },
      {
        "id": "h3",
        "type": "Palace Hotel",
        "costPerNight": 300,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Café Sunrise (Breakfast & Coffee)"
        ],
        "rating": "4.5",
        "roomOptions": [
          {
            "type": "Standard Palace Hotel Room",
            "cost": 300
          },
          {
            "type": "Deluxe AC Palace Hotel Room",
            "cost": 450
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 750
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.7",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.4",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.7",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-jaipur",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-jaipur",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-jaipur",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-jaipur",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-jaipur",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-jaipur",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-jaipur",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-jaipur",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-jaipur",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-jaipur",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-jaipur",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-jaipur",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-jaipur",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-jaipur",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-jaipur",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-jaipur",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-jaipur",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-jaipur",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-jaipur",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-jaipur",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.8",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.6",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "3.9",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.6",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.6",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.9",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.4",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.7",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "3.5",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 15
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 23
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 38
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 40,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "3.7",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 40
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 60
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 100
          }
        ]
      },
      {
        "id": "h3",
        "type": "Taj View Luxury",
        "costPerNight": 250,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Café Sunrise (Breakfast & Coffee)"
        ],
        "rating": "4.6",
        "roomOptions": [
          {
            "type": "Standard Taj View Luxury Room",
            "cost": 250
          },
          {
            "type": "Deluxe AC Taj View Luxury Room",
            "cost": 375
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 625
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "4.7",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.9",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "5.0",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-agra",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-agra",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-agra",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-agra",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-agra",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-agra",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-agra",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-agra",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-agra",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-agra",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-agra",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-agra",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-agra",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-agra",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-agra",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-agra",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-agra",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-agra",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-agra",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-agra",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.1",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.5",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.5",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.8",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.7",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.5",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.5",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.5",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.3",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Backpacker Hostel Room",
            "cost": 12
          },
          {
            "type": "Deluxe AC Backpacker Hostel Room",
            "cost": 18
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 30
          }
        ]
      },
      {
        "id": "h2",
        "type": "Mid-range Hotel",
        "costPerNight": 45,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.8",
        "roomOptions": [
          {
            "type": "Standard Mid-range Hotel Room",
            "cost": 45
          },
          {
            "type": "Deluxe AC Mid-range Hotel Room",
            "cost": 68
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 113
          }
        ]
      },
      {
        "id": "h3",
        "type": "5-Star Hotel",
        "costPerNight": 180,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "3.6",
        "roomOptions": [
          {
            "type": "Standard 5-Star Hotel Room",
            "cost": 180
          },
          {
            "type": "Deluxe AC 5-Star Hotel Room",
            "cost": 270
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 450
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "4.7",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.7",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.3",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.4",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-newdelhi",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-newdelhi",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-newdelhi",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-newdelhi",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-newdelhi",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-newdelhi",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-newdelhi",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-newdelhi",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-newdelhi",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-newdelhi",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-newdelhi",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-newdelhi",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-newdelhi",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-newdelhi",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-newdelhi",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-newdelhi",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-newdelhi",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-newdelhi",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-newdelhi",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-newdelhi",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.2",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.7",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "3.9",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.5",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.1",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.3",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.7",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.5",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.7",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.6",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "5.0",
        "roomOptions": [
          {
            "type": "Standard Budget Hotel Room",
            "cost": 20
          },
          {
            "type": "Deluxe AC Budget Hotel Room",
            "cost": 30
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 50
          }
        ]
      },
      {
        "id": "h2",
        "type": "Business Hotel",
        "costPerNight": 60,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "3.5",
        "roomOptions": [
          {
            "type": "Standard Business Hotel Room",
            "cost": 60
          },
          {
            "type": "Deluxe AC Business Hotel Room",
            "cost": 90
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 150
          }
        ]
      },
      {
        "id": "h3",
        "type": "Sea View Luxury",
        "costPerNight": 250,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.0",
        "roomOptions": [
          {
            "type": "Standard Sea View Luxury Room",
            "cost": 250
          },
          {
            "type": "Deluxe AC Sea View Luxury Room",
            "cost": 375
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 625
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "4.7",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.6",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.5",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-mumbai",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-mumbai",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-mumbai",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-mumbai",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-mumbai",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-mumbai",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-mumbai",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-mumbai",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-mumbai",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-mumbai",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-mumbai",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-mumbai",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-mumbai",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-mumbai",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-mumbai",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-mumbai",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-mumbai",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-mumbai",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-mumbai",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-mumbai",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.4",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.9",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.1",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.6",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.2",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.7",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.4",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.7",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.4",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Ghat Hostel Room",
            "cost": 10
          },
          {
            "type": "Deluxe AC Ghat Hostel Room",
            "cost": 15
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 25
          }
        ]
      },
      {
        "id": "h2",
        "type": "Heritage Guest House",
        "costPerNight": 35,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "4.1",
        "roomOptions": [
          {
            "type": "Standard Heritage Guest House Room",
            "cost": 35
          },
          {
            "type": "Deluxe AC Heritage Guest House Room",
            "cost": 53
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 88
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury River View",
        "costPerNight": 150,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "3.8",
        "roomOptions": [
          {
            "type": "Standard Luxury River View Room",
            "cost": 150
          },
          {
            "type": "Deluxe AC Luxury River View Room",
            "cost": 225
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 375
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.3",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.8",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.4",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-varanasi",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-varanasi",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-varanasi",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-varanasi",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-varanasi",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-varanasi",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-varanasi",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-varanasi",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-varanasi",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-varanasi",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-varanasi",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-varanasi",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-varanasi",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-varanasi",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-varanasi",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-varanasi",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-varanasi",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-varanasi",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-varanasi",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-varanasi",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.5",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.3",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "3.8",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.5",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.7",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.6",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.6",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.3",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "4.4",
        "roomOptions": [
          {
            "type": "Standard Guesthouse Room",
            "cost": 20
          },
          {
            "type": "Deluxe AC Guesthouse Room",
            "cost": 30
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 50
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 50,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "3.5",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 50
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 75
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 125
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Glamping",
        "costPerNight": 180,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "4.2",
        "roomOptions": [
          {
            "type": "Standard Luxury Glamping Room",
            "cost": 180
          },
          {
            "type": "Deluxe AC Luxury Glamping Room",
            "cost": 270
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 450
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.3",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.6",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-ladakh",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-ladakh",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-ladakh",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-ladakh",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-ladakh",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-ladakh",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-ladakh",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-ladakh",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-ladakh",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-ladakh",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-ladakh",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-ladakh",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-ladakh",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-ladakh",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-ladakh",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-ladakh",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-ladakh",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-ladakh",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-ladakh",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-ladakh",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.9",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.8",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.4",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.5",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.2",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.8",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.0",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.8",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.2",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "4.3",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 25
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 38
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 63
          }
        ]
      },
      {
        "id": "h2",
        "type": "Beach Resort",
        "costPerNight": 80,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "4.4",
        "roomOptions": [
          {
            "type": "Standard Beach Resort Room",
            "cost": 80
          },
          {
            "type": "Deluxe AC Beach Resort Room",
            "cost": 120
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 200
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Villa",
        "costPerNight": 250,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "4.3",
        "roomOptions": [
          {
            "type": "Standard Luxury Villa Room",
            "cost": 250
          },
          {
            "type": "Deluxe AC Luxury Villa Room",
            "cost": 375
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 625
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "4.5",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.6",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.4",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Light clothing: breathable clothes suitable for hot and humid weather.",
      "Sunscreen and sunglasses.",
      "Swimwear and beach towels.",
      "Waterproof bags for water activities.",
      "Flip-flops or sandals.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-andaman",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-andaman",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-andaman",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-andaman",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-andaman",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-andaman",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-andaman",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-andaman",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-andaman",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-andaman",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-andaman",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-andaman",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-andaman",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-andaman",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-andaman",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-andaman",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-andaman",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-andaman",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-andaman",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-andaman",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.7",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.7",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.4",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "5.0",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.3",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.7",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.3",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.6",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.7",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.5",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "5.0",
        "roomOptions": [
          {
            "type": "Standard Hostel Room",
            "cost": 10
          },
          {
            "type": "Deluxe AC Hostel Room",
            "cost": 15
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 25
          }
        ]
      },
      {
        "id": "h2",
        "type": "Mountain View Hotel",
        "costPerNight": 40,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "3.7",
        "roomOptions": [
          {
            "type": "Standard Mountain View Hotel Room",
            "cost": 40
          },
          {
            "type": "Deluxe AC Mountain View Hotel Room",
            "cost": 60
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 100
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Resort",
        "costPerNight": 150,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.1",
        "roomOptions": [
          {
            "type": "Standard Luxury Resort Room",
            "cost": 150
          },
          {
            "type": "Deluxe AC Luxury Resort Room",
            "cost": 225
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 375
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.4",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.7",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.7",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.5",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.7",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Heavy woolens and thermal innerwear.",
      "Sturdy trekking shoes.",
      "Windproof and waterproof jackets.",
      "Moisturizers and lip balm for cold winds.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-manali",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-manali",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-manali",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-manali",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-manali",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-manali",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-manali",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-manali",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-manali",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-manali",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-manali",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-manali",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-manali",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-manali",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-manali",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-manali",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-manali",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-manali",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-manali",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-manali",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.3",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.5",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "3.9",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.7",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.2",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.5",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.2",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.5",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.1",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "4.8",
        "roomOptions": [
          {
            "type": "Standard Homestay Room",
            "cost": 15
          },
          {
            "type": "Deluxe AC Homestay Room",
            "cost": 23
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 38
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 40,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Café Sunrise (Breakfast & Coffee)"
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 40
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 60
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 100
          }
        ]
      },
      {
        "id": "h3",
        "type": "Tea Estate Resort",
        "costPerNight": 180,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "3.6",
        "roomOptions": [
          {
            "type": "Standard Tea Estate Resort Room",
            "cost": 180
          },
          {
            "type": "Deluxe AC Tea Estate Resort Room",
            "cost": 270
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 450
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "4.6",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.2",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.5",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.8",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-darjeeling",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-darjeeling",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-darjeeling",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-darjeeling",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-darjeeling",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-darjeeling",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-darjeeling",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-darjeeling",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-darjeeling",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-darjeeling",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-darjeeling",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-darjeeling",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-darjeeling",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-darjeeling",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-darjeeling",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-darjeeling",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-darjeeling",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-darjeeling",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-darjeeling",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-darjeeling",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.6",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.3",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.4",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.6",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.3",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.5",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.2",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.5",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.8",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.6",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "3.7",
        "roomOptions": [
          {
            "type": "Standard Ashram Stay Room",
            "cost": 8
          },
          {
            "type": "Deluxe AC Ashram Stay Room",
            "cost": 12
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 20
          }
        ]
      },
      {
        "id": "h2",
        "type": "Riverside Camp",
        "costPerNight": 30,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.5",
        "roomOptions": [
          {
            "type": "Standard Riverside Camp Room",
            "cost": 30
          },
          {
            "type": "Deluxe AC Riverside Camp Room",
            "cost": 45
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 75
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Spa Resort",
        "costPerNight": 200,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Café Sunrise (Breakfast & Coffee)"
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Luxury Spa Resort Room",
            "cost": 200
          },
          {
            "type": "Deluxe AC Luxury Spa Resort Room",
            "cost": 300
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 500
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "5.0",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.5",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.3",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-rishikesh",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-rishikesh",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-rishikesh",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-rishikesh",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-rishikesh",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-rishikesh",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-rishikesh",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-rishikesh",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-rishikesh",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-rishikesh",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-rishikesh",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-rishikesh",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-rishikesh",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-rishikesh",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-rishikesh",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-rishikesh",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-rishikesh",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-rishikesh",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-rishikesh",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-rishikesh",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.9",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.8",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.2",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.9",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.2",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.7",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.5",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.6",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.1",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "4.0",
        "roomOptions": [
          {
            "type": "Standard Backpacker Hostel Room",
            "cost": 12
          },
          {
            "type": "Deluxe AC Backpacker Hostel Room",
            "cost": 18
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 30
          }
        ]
      },
      {
        "id": "h2",
        "type": "Lake View Hotel",
        "costPerNight": 50,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "4.9",
        "roomOptions": [
          {
            "type": "Standard Lake View Hotel Room",
            "cost": 50
          },
          {
            "type": "Deluxe AC Lake View Hotel Room",
            "cost": 75
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 125
          }
        ]
      },
      {
        "id": "h3",
        "type": "Lake Palace Luxury",
        "costPerNight": 400,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Lake Palace Luxury Room",
            "cost": 400
          },
          {
            "type": "Deluxe AC Lake Palace Luxury Room",
            "cost": 600
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 1000
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "5.0",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.7",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.5",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "5.0",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-udaipur",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-udaipur",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-udaipur",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-udaipur",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-udaipur",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-udaipur",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-udaipur",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-udaipur",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-udaipur",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-udaipur",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-udaipur",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-udaipur",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-udaipur",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-udaipur",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-udaipur",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-udaipur",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-udaipur",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-udaipur",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-udaipur",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-udaipur",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.3",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.8",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.3",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.8",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.6",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.6",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.6",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.6",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.5",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
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
        ],
        "rating": "4.8",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 21
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 32
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 53
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 48,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "4.9",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 48
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 72
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 120
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 194,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "4.5",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 194
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 291
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 485
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.6",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.6",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.7",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.6",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_ajanta_0",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_ajanta_0",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_ajanta_0",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_ajanta_0",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_ajanta_0",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_ajanta_0",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_ajanta_0",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_ajanta_0",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_ajanta_0",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_ajanta_0",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_ajanta_0",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_ajanta_0",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_ajanta_0",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_ajanta_0",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_ajanta_0",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_ajanta_0",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_ajanta_0",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_ajanta_0",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_ajanta_0",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_ajanta_0",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.3",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.4",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.4",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "5.0",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.7",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.4",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.7",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.2",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.9",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.6",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 24,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "4.1",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 24
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 36
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 60
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 41,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Café Sunrise (Breakfast & Coffee)"
        ],
        "rating": "4.6",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 41
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 62
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 103
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 248,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "5.0",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 248
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 372
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 620
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.5",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.8",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.6",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Heavy woolens and thermal innerwear.",
      "Sturdy trekking shoes.",
      "Windproof and waterproof jackets.",
      "Moisturizers and lip balm for cold winds.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_amarnathcave_1",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_amarnathcave_1",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_amarnathcave_1",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_amarnathcave_1",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_amarnathcave_1",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_amarnathcave_1",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_amarnathcave_1",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_amarnathcave_1",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_amarnathcave_1",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_amarnathcave_1",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_amarnathcave_1",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_amarnathcave_1",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_amarnathcave_1",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_amarnathcave_1",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_amarnathcave_1",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_amarnathcave_1",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_amarnathcave_1",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_amarnathcave_1",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_amarnathcave_1",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_amarnathcave_1",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.5",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.6",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.0",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.8",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.1",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.8",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.2",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.4",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.4",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.8",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "3.5",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 20
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 30
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 50
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 42,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Café Sunrise (Breakfast & Coffee)"
        ],
        "rating": "4.9",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 42
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 63
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 105
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 218,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 218
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 327
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 545
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.7",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.8",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.8",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.3",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.6",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_akbarstomb_2",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_akbarstomb_2",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_akbarstomb_2",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_akbarstomb_2",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_akbarstomb_2",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_akbarstomb_2",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_akbarstomb_2",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_akbarstomb_2",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_akbarstomb_2",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_akbarstomb_2",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_akbarstomb_2",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_akbarstomb_2",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_akbarstomb_2",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_akbarstomb_2",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_akbarstomb_2",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_akbarstomb_2",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_akbarstomb_2",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_akbarstomb_2",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_akbarstomb_2",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_akbarstomb_2",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.0",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.6",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.2",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.9",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.6",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.6",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.6",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.6",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.6",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.2",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.1",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 20
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 30
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 50
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 44,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "3.5",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 44
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 66
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 110
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 154,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "4.4",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 154
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 231
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 385
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.9",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.2",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.7",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.4",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.7",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_amberpalace_3",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_amberpalace_3",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_amberpalace_3",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_amberpalace_3",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_amberpalace_3",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_amberpalace_3",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_amberpalace_3",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_amberpalace_3",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_amberpalace_3",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_amberpalace_3",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_amberpalace_3",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_amberpalace_3",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_amberpalace_3",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_amberpalace_3",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_amberpalace_3",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_amberpalace_3",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_amberpalace_3",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_amberpalace_3",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_amberpalace_3",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_amberpalace_3",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.8",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.6",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.2",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.6",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.6",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.9",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.4",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.2",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.8",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.6",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 23,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "4.2",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 23
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 35
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 58
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 58,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "4.5",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 58
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 87
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 145
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 216,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "4.3",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 216
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 324
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 540
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.3",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.8",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "5.0",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.6",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_anandbhawan_4",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_anandbhawan_4",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_anandbhawan_4",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_anandbhawan_4",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_anandbhawan_4",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_anandbhawan_4",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_anandbhawan_4",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_anandbhawan_4",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_anandbhawan_4",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_anandbhawan_4",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_anandbhawan_4",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_anandbhawan_4",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_anandbhawan_4",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_anandbhawan_4",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_anandbhawan_4",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_anandbhawan_4",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_anandbhawan_4",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_anandbhawan_4",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_anandbhawan_4",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_anandbhawan_4",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.2",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.4",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "3.8",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.7",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.5",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.3",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.2",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.3",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 16,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Café Sunrise (Breakfast & Coffee)"
        ],
        "rating": "4.1",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 16
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 24
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 40
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 52,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "4.2",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 52
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 78
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 130
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 204,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "3.9",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 204
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 306
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 510
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.5",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.6",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.7",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_bhakradam_5",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_bhakradam_5",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_bhakradam_5",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_bhakradam_5",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_bhakradam_5",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_bhakradam_5",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_bhakradam_5",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_bhakradam_5",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_bhakradam_5",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_bhakradam_5",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_bhakradam_5",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_bhakradam_5",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_bhakradam_5",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_bhakradam_5",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_bhakradam_5",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_bhakradam_5",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_bhakradam_5",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_bhakradam_5",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_bhakradam_5",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_bhakradam_5",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.4",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.8",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.1",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.8",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.7",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.4",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.6",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.4",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.4",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 17,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "4.9",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 17
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 26
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 43
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 59,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.0",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 59
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 89
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 148
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 220,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.8",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 220
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 330
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 550
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.5",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.4",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.7",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.3",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.6",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_bibidamaqbra_6",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_bibidamaqbra_6",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_bibidamaqbra_6",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_bibidamaqbra_6",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_bibidamaqbra_6",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_bibidamaqbra_6",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_bibidamaqbra_6",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_bibidamaqbra_6",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_bibidamaqbra_6",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_bibidamaqbra_6",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_bibidamaqbra_6",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_bibidamaqbra_6",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_bibidamaqbra_6",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_bibidamaqbra_6",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_bibidamaqbra_6",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_bibidamaqbra_6",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_bibidamaqbra_6",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_bibidamaqbra_6",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_bibidamaqbra_6",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_bibidamaqbra_6",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.4",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.4",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.2",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.5",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.7",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.6",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.3",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.2",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.6",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.5",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 21,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "3.6",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 21
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 32
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 53
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 59,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Café Sunrise (Breakfast & Coffee)"
        ],
        "rating": "3.9",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 59
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 89
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 148
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 171,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "3.8",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 171
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 257
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 428
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.5",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_birlaplanetarium_7",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_birlaplanetarium_7",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_birlaplanetarium_7",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_birlaplanetarium_7",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_birlaplanetarium_7",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_birlaplanetarium_7",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_birlaplanetarium_7",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_birlaplanetarium_7",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_birlaplanetarium_7",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_birlaplanetarium_7",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_birlaplanetarium_7",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_birlaplanetarium_7",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_birlaplanetarium_7",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_birlaplanetarium_7",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_birlaplanetarium_7",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_birlaplanetarium_7",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_birlaplanetarium_7",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_birlaplanetarium_7",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_birlaplanetarium_7",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_birlaplanetarium_7",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.5",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.6",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.1",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.8",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.7",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.3",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.0",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.5",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.6",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.1",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 20
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 30
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 50
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 54,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 54
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 81
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 135
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 217,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "4.8",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 217
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 326
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 543
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.9",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.2",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.4",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.7",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_blackpagoda_8",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_blackpagoda_8",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_blackpagoda_8",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_blackpagoda_8",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_blackpagoda_8",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_blackpagoda_8",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_blackpagoda_8",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_blackpagoda_8",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_blackpagoda_8",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_blackpagoda_8",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_blackpagoda_8",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_blackpagoda_8",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_blackpagoda_8",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_blackpagoda_8",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_blackpagoda_8",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_blackpagoda_8",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_blackpagoda_8",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_blackpagoda_8",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_blackpagoda_8",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_blackpagoda_8",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.4",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.9",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.1",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.7",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.5",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.7",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.2",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.6",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 21,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "4.9",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 21
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 32
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 53
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 46,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.9",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 46
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 69
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 115
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 171,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "4.0",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 171
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 257
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 428
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.9",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.6",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.8",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.7",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.8",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.7",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.5",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_bodhisatva_9",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_bodhisatva_9",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_bodhisatva_9",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_bodhisatva_9",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_bodhisatva_9",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_bodhisatva_9",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_bodhisatva_9",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_bodhisatva_9",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_bodhisatva_9",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_bodhisatva_9",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_bodhisatva_9",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_bodhisatva_9",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_bodhisatva_9",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_bodhisatva_9",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_bodhisatva_9",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_bodhisatva_9",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_bodhisatva_9",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_bodhisatva_9",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_bodhisatva_9",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_bodhisatva_9",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.4",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.6",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "3.8",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.8",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.1",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.4",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.1",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.5",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.8",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.6",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 23,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Café Sunrise (Breakfast & Coffee)"
        ],
        "rating": "4.6",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 23
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 35
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 58
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 45,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Café Sunrise (Breakfast & Coffee)"
        ],
        "rating": "4.0",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 45
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 68
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 113
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 225,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.8",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 225
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 338
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 563
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.8",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.3",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.7",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_brihadeeswaratemple_10",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_brihadeeswaratemple_10",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_brihadeeswaratemple_10",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_brihadeeswaratemple_10",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_brihadeeswaratemple_10",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_brihadeeswaratemple_10",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_brihadeeswaratemple_10",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_brihadeeswaratemple_10",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_brihadeeswaratemple_10",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_brihadeeswaratemple_10",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_brihadeeswaratemple_10",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_brihadeeswaratemple_10",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_brihadeeswaratemple_10",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_brihadeeswaratemple_10",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_brihadeeswaratemple_10",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_brihadeeswaratemple_10",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_brihadeeswaratemple_10",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_brihadeeswaratemple_10",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_brihadeeswaratemple_10",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_brihadeeswaratemple_10",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.2",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.7",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.5",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.5",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.4",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.6",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.1",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.4",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.7",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.7",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 16,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "4.2",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 16
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 24
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 40
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 58,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "4.9",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 58
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 87
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 145
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 248,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.2",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 248
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 372
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 620
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.6",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.8",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.7",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.8",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_brindabangardens_11",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_brindabangardens_11",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_brindabangardens_11",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_brindabangardens_11",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_brindabangardens_11",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_brindabangardens_11",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_brindabangardens_11",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_brindabangardens_11",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_brindabangardens_11",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_brindabangardens_11",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_brindabangardens_11",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_brindabangardens_11",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_brindabangardens_11",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_brindabangardens_11",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_brindabangardens_11",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_brindabangardens_11",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_brindabangardens_11",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_brindabangardens_11",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_brindabangardens_11",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_brindabangardens_11",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.7",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.6",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.4",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.5",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.6",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.7",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.6",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.6",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.8",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 17,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "3.9",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 17
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 26
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 43
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 59,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "3.8",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 59
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 89
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 148
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 175,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "4.3",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 175
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 263
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 438
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.9",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.7",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_bulanddarwaza_12",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_bulanddarwaza_12",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_bulanddarwaza_12",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_bulanddarwaza_12",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_bulanddarwaza_12",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_bulanddarwaza_12",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_bulanddarwaza_12",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_bulanddarwaza_12",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_bulanddarwaza_12",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_bulanddarwaza_12",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_bulanddarwaza_12",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_bulanddarwaza_12",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_bulanddarwaza_12",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_bulanddarwaza_12",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_bulanddarwaza_12",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_bulanddarwaza_12",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_bulanddarwaza_12",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_bulanddarwaza_12",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_bulanddarwaza_12",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_bulanddarwaza_12",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.7",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.4",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.5",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "5.0",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.7",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.3",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.2",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.6",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.4",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 15,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 15
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 23
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 38
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 42,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "3.8",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 42
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 63
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 105
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 170,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "3.7",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 170
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 255
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 425
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.9",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.6",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.3",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.7",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_charminar_13",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_charminar_13",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_charminar_13",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_charminar_13",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_charminar_13",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_charminar_13",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_charminar_13",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_charminar_13",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_charminar_13",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_charminar_13",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_charminar_13",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_charminar_13",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_charminar_13",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_charminar_13",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_charminar_13",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_charminar_13",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_charminar_13",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_charminar_13",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_charminar_13",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_charminar_13",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.8",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.5",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.3",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "5.0",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.3",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.3",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.1",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.4",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.2",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 17,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "3.7",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 17
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 26
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 43
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 56,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "4.1",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 56
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 84
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 140
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 248,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.0",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 248
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 372
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 620
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.7",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "5.0",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.8",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_cheenakesavatemple_14",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_cheenakesavatemple_14",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_cheenakesavatemple_14",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_cheenakesavatemple_14",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_cheenakesavatemple_14",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_cheenakesavatemple_14",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_cheenakesavatemple_14",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_cheenakesavatemple_14",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_cheenakesavatemple_14",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_cheenakesavatemple_14",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_cheenakesavatemple_14",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_cheenakesavatemple_14",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_cheenakesavatemple_14",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_cheenakesavatemple_14",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_cheenakesavatemple_14",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_cheenakesavatemple_14",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_cheenakesavatemple_14",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_cheenakesavatemple_14",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_cheenakesavatemple_14",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_cheenakesavatemple_14",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.3",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.8",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.4",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.7",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.3",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.7",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.4",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.2",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.8",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.6",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "4.2",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 20
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 30
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 50
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 43,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Café Sunrise (Breakfast & Coffee)"
        ],
        "rating": "4.6",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 43
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 65
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 108
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 192,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.4",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 192
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 288
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 480
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.6",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_chilkalake_15",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_chilkalake_15",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_chilkalake_15",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_chilkalake_15",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_chilkalake_15",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_chilkalake_15",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_chilkalake_15",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_chilkalake_15",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_chilkalake_15",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_chilkalake_15",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_chilkalake_15",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_chilkalake_15",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_chilkalake_15",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_chilkalake_15",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_chilkalake_15",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_chilkalake_15",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_chilkalake_15",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_chilkalake_15",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_chilkalake_15",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_chilkalake_15",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.5",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.7",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.2",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.6",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.3",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.9",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.2",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.4",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.7",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.6",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 18,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 18
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 27
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 45
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 54,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "4.0",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 54
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 81
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 135
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 186,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.3",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 186
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 279
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 465
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.6",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.6",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.7",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.5",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.4",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_dallake_16",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_dallake_16",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_dallake_16",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_dallake_16",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_dallake_16",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_dallake_16",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_dallake_16",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_dallake_16",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_dallake_16",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_dallake_16",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_dallake_16",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_dallake_16",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_dallake_16",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_dallake_16",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_dallake_16",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_dallake_16",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_dallake_16",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_dallake_16",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_dallake_16",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_dallake_16",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.3",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.9",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.4",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.6",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.7",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.6",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.6",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.4",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 21,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "4.4",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 21
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 32
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 53
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 58,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "4.8",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 58
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 87
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 145
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 213,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "4.5",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 213
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 320
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 533
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.9",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.7",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.4",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.6",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.4",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_dilwaratemple_17",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_dilwaratemple_17",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_dilwaratemple_17",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_dilwaratemple_17",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_dilwaratemple_17",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_dilwaratemple_17",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_dilwaratemple_17",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_dilwaratemple_17",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_dilwaratemple_17",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_dilwaratemple_17",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_dilwaratemple_17",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_dilwaratemple_17",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_dilwaratemple_17",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_dilwaratemple_17",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_dilwaratemple_17",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_dilwaratemple_17",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_dilwaratemple_17",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_dilwaratemple_17",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_dilwaratemple_17",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_dilwaratemple_17",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.3",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.4",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "3.9",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.5",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.4",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.5",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.5",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.4",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.5",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 22,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "3.6",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 22
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 33
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 55
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 47,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Café Sunrise (Breakfast & Coffee)"
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 47
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 71
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 118
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 171,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "3.9",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 171
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 257
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 428
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.3",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.4",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_elephantacaves_18",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_elephantacaves_18",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_elephantacaves_18",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_elephantacaves_18",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_elephantacaves_18",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_elephantacaves_18",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_elephantacaves_18",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_elephantacaves_18",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_elephantacaves_18",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_elephantacaves_18",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_elephantacaves_18",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_elephantacaves_18",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_elephantacaves_18",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_elephantacaves_18",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_elephantacaves_18",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_elephantacaves_18",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_elephantacaves_18",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_elephantacaves_18",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_elephantacaves_18",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_elephantacaves_18",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.8",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "5.0",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "3.9",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.7",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.8",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.4",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.5",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.5",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.4",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 18,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "4.3",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 18
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 27
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 45
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 50,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.5",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 50
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 75
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 125
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 224,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.9",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 224
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 336
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 560
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.9",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.4",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.8",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_elloracaves_19",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_elloracaves_19",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_elloracaves_19",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_elloracaves_19",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_elloracaves_19",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_elloracaves_19",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_elloracaves_19",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_elloracaves_19",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_elloracaves_19",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_elloracaves_19",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_elloracaves_19",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_elloracaves_19",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_elloracaves_19",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_elloracaves_19",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_elloracaves_19",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_elloracaves_19",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_elloracaves_19",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_elloracaves_19",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_elloracaves_19",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_elloracaves_19",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.7",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "5.0",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.3",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "5.0",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.4",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.9",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.5",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.7",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.8",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 18,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "3.9",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 18
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 27
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 45
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 52,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 52
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 78
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 130
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 207,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "3.7",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 207
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 311
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 518
          }
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
        "name": "City Landmark Tour",
        "cost": 500,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 200,
        "rating": "4.4",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 1200,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 1500,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.3",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 2000,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 400,
        "rating": "4.8",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Police: 100 | Ambulance: 102 | Emergency: 112",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_gatewayofindia_20",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 4500,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_gatewayofindia_20",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 3800,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_gatewayofindia_20",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 12000,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_gatewayofindia_20",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 25000,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_gatewayofindia_20",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 3200,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_gatewayofindia_20",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 2800,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_gatewayofindia_20",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 1800,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_gatewayofindia_20",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 1200,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_gatewayofindia_20",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 800,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_gatewayofindia_20",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 3500,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_gatewayofindia_20",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 1500,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_gatewayofindia_20",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 1200,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_gatewayofindia_20",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 1800,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_gatewayofindia_20",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 600,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_gatewayofindia_20",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 900,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_gatewayofindia_20",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 2500,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_gatewayofindia_20",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 3500,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_gatewayofindia_20",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 5500,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_gatewayofindia_20",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 15000,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_gatewayofindia_20",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 8000,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.6",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 500,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.9",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 1200,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.1",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 200,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.5",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 2500,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.4",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 1500,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.7",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 600,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.5",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 800,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.2",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 700,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 400,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.6",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 2000,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 21,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.8",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 21
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 32
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 53
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 46,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "4.0",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 46
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 69
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 115
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 155,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "3.7",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 155
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 233
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 388
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.6",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.2",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.4",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_goldentemple_21",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_goldentemple_21",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_goldentemple_21",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_goldentemple_21",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_goldentemple_21",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_goldentemple_21",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_goldentemple_21",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_goldentemple_21",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_goldentemple_21",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_goldentemple_21",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_goldentemple_21",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_goldentemple_21",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_goldentemple_21",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_goldentemple_21",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_goldentemple_21",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_goldentemple_21",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_goldentemple_21",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_goldentemple_21",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_goldentemple_21",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_goldentemple_21",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.8",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.7",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.0",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.8",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.3",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.5",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.5",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.4",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.2",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 19,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "3.9",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 19
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 29
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 48
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 44,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "3.5",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 44
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 66
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 110
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 238,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.0",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 238
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 357
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 595
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "5.0",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.5",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.4",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.7",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_golgumbaz_22",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_golgumbaz_22",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_golgumbaz_22",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_golgumbaz_22",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_golgumbaz_22",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_golgumbaz_22",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_golgumbaz_22",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_golgumbaz_22",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_golgumbaz_22",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_golgumbaz_22",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_golgumbaz_22",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_golgumbaz_22",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_golgumbaz_22",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_golgumbaz_22",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_golgumbaz_22",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_golgumbaz_22",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_golgumbaz_22",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_golgumbaz_22",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_golgumbaz_22",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_golgumbaz_22",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.0",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.7",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.4",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.8",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.5",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.5",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.6",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.4",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.9",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.1",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "3.9",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 20
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 30
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 50
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 43,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.1",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 43
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 65
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 108
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 154,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.4",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 154
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 231
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 385
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_hanginggardens_23",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_hanginggardens_23",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_hanginggardens_23",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_hanginggardens_23",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_hanginggardens_23",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_hanginggardens_23",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_hanginggardens_23",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_hanginggardens_23",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_hanginggardens_23",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_hanginggardens_23",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_hanginggardens_23",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_hanginggardens_23",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_hanginggardens_23",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_hanginggardens_23",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_hanginggardens_23",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_hanginggardens_23",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_hanginggardens_23",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_hanginggardens_23",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_hanginggardens_23",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_hanginggardens_23",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.4",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.3",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.0",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.5",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.2",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.6",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.6",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.2",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.6",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.2",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 21,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "5.0",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 21
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 32
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 53
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 54,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "4.1",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 54
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 81
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 135
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 168,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.4",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 168
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 252
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 420
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.6",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.2",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.8",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "5.0",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.6",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.6",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_hawamahal_24",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_hawamahal_24",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_hawamahal_24",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_hawamahal_24",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_hawamahal_24",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_hawamahal_24",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_hawamahal_24",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_hawamahal_24",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_hawamahal_24",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_hawamahal_24",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_hawamahal_24",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_hawamahal_24",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_hawamahal_24",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_hawamahal_24",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_hawamahal_24",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_hawamahal_24",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_hawamahal_24",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_hawamahal_24",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_hawamahal_24",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_hawamahal_24",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.4",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.6",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.2",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.8",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.5",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.4",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.1",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.5",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.8",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.8",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 21,
        "nearbyRestaurants": [
          "Ocean View Diner (Seafood & Grills)",
          "Bistro 42 (Continental & Cafe)"
        ],
        "rating": "4.4",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 21
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 32
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 53
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 42,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "3.6",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 42
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 63
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 105
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 242,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.1",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 242
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 363
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 605
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.8",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.2",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.8",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.8",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.7",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.6",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_howrahbridge_25",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_howrahbridge_25",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_howrahbridge_25",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_howrahbridge_25",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_howrahbridge_25",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_howrahbridge_25",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_howrahbridge_25",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_howrahbridge_25",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_howrahbridge_25",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_howrahbridge_25",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_howrahbridge_25",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_howrahbridge_25",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_howrahbridge_25",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_howrahbridge_25",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_howrahbridge_25",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_howrahbridge_25",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_howrahbridge_25",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_howrahbridge_25",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_howrahbridge_25",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_howrahbridge_25",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.8",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.7",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "3.8",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.8",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.6",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.3",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.1",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.4",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.6",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.5",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 22,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "4.5",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 22
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 33
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 55
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 57,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 57
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 86
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 143
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 235,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Street Market Stalls (Local Fast Food)"
        ],
        "rating": "4.7",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 235
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 353
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 588
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.5",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.6",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.8",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.5",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_islandpalace_26",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_islandpalace_26",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_islandpalace_26",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_islandpalace_26",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_islandpalace_26",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_islandpalace_26",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_islandpalace_26",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_islandpalace_26",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_islandpalace_26",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_islandpalace_26",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_islandpalace_26",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_islandpalace_26",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_islandpalace_26",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_islandpalace_26",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_islandpalace_26",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_islandpalace_26",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_islandpalace_26",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_islandpalace_26",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_islandpalace_26",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_islandpalace_26",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.6",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.7",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "3.9",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.5",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.4",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.7",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.3",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.2",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.7",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.5",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 17,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "Ocean View Diner (Seafood & Grills)"
        ],
        "rating": "4.4",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 17
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 26
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 43
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 49,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "3.6",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 49
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 74
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 123
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 194,
        "nearbyRestaurants": [
          "Café Sunrise (Breakfast & Coffee)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "3.8",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 194
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 291
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 485
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.6",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.7",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "4.9",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.5",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.9",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.6",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_itmaaduddaulahstomb_27",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_itmaaduddaulahstomb_27",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_itmaaduddaulahstomb_27",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_itmaaduddaulahstomb_27",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_itmaaduddaulahstomb_27",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_itmaaduddaulahstomb_27",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_itmaaduddaulahstomb_27",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_itmaaduddaulahstomb_27",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_itmaaduddaulahstomb_27",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_itmaaduddaulahstomb_27",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_itmaaduddaulahstomb_27",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_itmaaduddaulahstomb_27",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_itmaaduddaulahstomb_27",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_itmaaduddaulahstomb_27",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_itmaaduddaulahstomb_27",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_itmaaduddaulahstomb_27",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_itmaaduddaulahstomb_27",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_itmaaduddaulahstomb_27",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_itmaaduddaulahstomb_27",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_itmaaduddaulahstomb_27",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.7",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.2",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.2",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.6",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.7",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.5",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.7",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.5",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.6",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.5",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 15,
        "nearbyRestaurants": [
          "The Spice Route (Authentic Local Food)",
          "Green Leaf Vegetarian (Healthy Options)"
        ],
        "rating": "3.6",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 15
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 23
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 38
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 47,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "Café Sunrise (Breakfast & Coffee)"
        ],
        "rating": "3.7",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 47
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 71
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 118
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 191,
        "nearbyRestaurants": [
          "Royal Dining Room (Fine Dining)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "4.3",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 191
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 287
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 478
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "5.0",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.7",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.6",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.8",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.7",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_jagannathtemple_28",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_jagannathtemple_28",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_jagannathtemple_28",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_jagannathtemple_28",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_jagannathtemple_28",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_jagannathtemple_28",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_jagannathtemple_28",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_jagannathtemple_28",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_jagannathtemple_28",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_jagannathtemple_28",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_jagannathtemple_28",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_jagannathtemple_28",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_jagannathtemple_28",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_jagannathtemple_28",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_jagannathtemple_28",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_jagannathtemple_28",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_jagannathtemple_28",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_jagannathtemple_28",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_jagannathtemple_28",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_jagannathtemple_28",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.7",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.2",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.0",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.5",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.5",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.7",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.0",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.5",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.5",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.6",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
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
        "costPerNight": 20,
        "nearbyRestaurants": [
          "Bistro 42 (Continental & Cafe)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.1",
        "roomOptions": [
          {
            "type": "Standard Budget Stay Room",
            "cost": 20
          },
          {
            "type": "Deluxe AC Budget Stay Room",
            "cost": 30
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 50
          }
        ]
      },
      {
        "id": "h2",
        "type": "Standard Hotel",
        "costPerNight": 40,
        "nearbyRestaurants": [
          "Street Market Stalls (Local Fast Food)",
          "Royal Dining Room (Fine Dining)"
        ],
        "rating": "4.5",
        "roomOptions": [
          {
            "type": "Standard Standard Hotel Room",
            "cost": 40
          },
          {
            "type": "Deluxe AC Standard Hotel Room",
            "cost": 60
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 100
          }
        ]
      },
      {
        "id": "h3",
        "type": "Luxury Hotel",
        "costPerNight": 238,
        "nearbyRestaurants": [
          "Green Leaf Vegetarian (Healthy Options)",
          "The Spice Route (Authentic Local Food)"
        ],
        "rating": "3.7",
        "roomOptions": [
          {
            "type": "Standard Luxury Hotel Room",
            "cost": 238
          },
          {
            "type": "Deluxe AC Luxury Hotel Room",
            "cost": 357
          },
          {
            "type": "Premium Suite (Balcony)",
            "cost": 595
          }
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
        "name": "City Landmark Tour",
        "cost": 25,
        "rating": "4.9",
        "openingTime": "09:00 AM",
        "closingTime": "06:00 PM",
        "category": "Main"
      },
      {
        "name": "National Museum Visit",
        "cost": 15,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "05:00 PM",
        "category": "Main"
      },
      {
        "name": "Old Town Walking Trail",
        "cost": 0,
        "rating": "4.9",
        "openingTime": "Anytime",
        "closingTime": "Anytime",
        "category": "Hidden Gem"
      },
      {
        "name": "Secret Garden Photography",
        "cost": 10,
        "rating": "4.9",
        "openingTime": "06:00 AM",
        "closingTime": "06:00 PM",
        "category": "Hidden Gem"
      },
      {
        "name": "Local Artisan Workshop",
        "cost": 50,
        "rating": "5.0",
        "openingTime": "11:00 AM",
        "closingTime": "04:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Sunset View Point Trek",
        "cost": 0,
        "rating": "5.0",
        "openingTime": "04:00 PM",
        "closingTime": "07:00 PM",
        "category": "Adventure"
      },
      {
        "name": "River Rafting / Boating",
        "cost": 70,
        "rating": "4.8",
        "openingTime": "08:00 AM",
        "closingTime": "04:00 PM",
        "category": "Adventure"
      },
      {
        "name": "Hidden Night Market",
        "cost": 0,
        "rating": "4.5",
        "openingTime": "07:00 PM",
        "closingTime": "02:00 AM",
        "category": "Hidden Gem"
      },
      {
        "name": "Cooking Class (Local Food)",
        "cost": 100,
        "rating": "4.7",
        "openingTime": "10:00 AM",
        "closingTime": "01:00 PM",
        "category": "Cultural"
      },
      {
        "name": "Nature Sanctuary Visit",
        "cost": 30,
        "rating": "4.4",
        "openingTime": "07:00 AM",
        "closingTime": "05:30 PM",
        "category": "Main"
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
    "emergencyContacts": "Local Emergency: 911",
    "inclusions": [
      "Accommodation with breakfast",
      "Private transfers for arrival and departure",
      "Toll and parking charges",
      "All activities and sightseeing mentioned in the schedule",
      "24/7 dedicated customer support during the trip"
    ],
    "exclusions": [
      "Lunch and dinner (unless explicitly added)",
      "Personal expenses (laundry, phone calls, room service)",
      "Optional watersports or adventure activities not in itinerary",
      "Flights/Train tickets to the starting point (if not selected in transport)"
    ],
    "packingList": [
      "Comfortable walking shoes for city tours.",
      "Smart casuals for evening dining.",
      "A light jacket or cardigan.",
      "Medication and first-aid kit",
      "Reusable water bottle",
      "Camera or smartphone",
      "Cash and important documents",
      "Portable charger"
    ],
    "shoppingGuide": {
      "whatToShop": [
        "Local authentic handicrafts and souvenirs",
        "Traditional clothing and textiles",
        "Eco-friendly local products"
      ],
      "whereToShop": [
        "Main City Bazaar",
        "Government Emporium for authentic crafts",
        "Local Street Markets"
      ]
    },
    "knowBeforeYouGo": [
      "Internet/data may be spotty in remote areas, keep offline PDFs.",
      "ATMs are generally available but carry sufficient cash for local vendors.",
      "Vehicles are point-to-point, deviations may cost extra.",
      "Confirm schedule timings with your driver every evening.",
      "Keep the environment clean and dispose of garbage properly."
    ],
    "policies": [
      "Drivers are strictly prohibited from using phones while driving. In case of emergencies, a 5-10 minutes allowance is given.",
      "The use of tobacco or cigarettes is strictly prohibited during travel.",
      "We prioritize senior-friendly accommodations with accessible restaurants and rooms.",
      "Please inform us if wheelchair access is required; we'll ensure arrangements are made."
    ],
    "cancellationPolicy": "Full refund if cancelled 7 days before. 50% refund if cancelled 48 hours before. No refund for last-minute cancellations (under 24h). Proceed via 'Manage Booking' in dashboard.",
    "detailedTransport": [
      {
        "id": "f1-img_jahazmahal_29",
        "type": "Economy",
        "agency": "Air India",
        "name": "AI-402 Direct",
        "cost": 400,
        "departureTime": "08:30 AM"
      },
      {
        "id": "f2-img_jahazmahal_29",
        "type": "Economy",
        "agency": "IndiGo",
        "name": "6E-2104",
        "cost": 350,
        "departureTime": "10:15 AM"
      },
      {
        "id": "f3-img_jahazmahal_29",
        "type": "Business",
        "agency": "Vistara",
        "name": "UK-812",
        "cost": 1100,
        "departureTime": "02:00 PM"
      },
      {
        "id": "f4-img_jahazmahal_29",
        "type": "Premium",
        "agency": "Qatar Airways",
        "name": "QR-501",
        "cost": 2500,
        "departureTime": "09:00 PM"
      },
      {
        "id": "f5-img_jahazmahal_29",
        "type": "Economy",
        "agency": "SpiceJet",
        "name": "SG-123",
        "cost": 300,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t1-img_jahazmahal_29",
        "type": "Rajdhani Express",
        "agency": "Indian Railways",
        "name": "22435 Platinum",
        "cost": 80,
        "departureTime": "04:30 PM"
      },
      {
        "id": "t2-img_jahazmahal_29",
        "type": "Shatabdi Express",
        "agency": "Indian Railways",
        "name": "12002 Morning",
        "cost": 60,
        "departureTime": "06:00 AM"
      },
      {
        "id": "t3-img_jahazmahal_29",
        "type": "Duronto Express",
        "agency": "Indian Railways",
        "name": "12260 Sleeper",
        "cost": 40,
        "departureTime": "11:00 PM"
      },
      {
        "id": "t4-img_jahazmahal_29",
        "type": "Garib Rath",
        "agency": "Indian Railways",
        "name": "12910 Budget",
        "cost": 30,
        "departureTime": "10:00 AM"
      },
      {
        "id": "t5-img_jahazmahal_29",
        "type": "Tejas Express",
        "agency": "Indian Railways",
        "name": "22672 Luxury",
        "cost": 100,
        "departureTime": "01:30 PM"
      },
      {
        "id": "b1-img_jahazmahal_29",
        "type": "Volvo Multi-Axle AC",
        "agency": "Zingbus",
        "name": "Premium Sleeper",
        "cost": 50,
        "departureTime": "10:00 PM"
      },
      {
        "id": "b2-img_jahazmahal_29",
        "type": "Scania AC",
        "agency": "Orange Travels",
        "name": "Executive Seater",
        "cost": 40,
        "departureTime": "08:00 AM"
      },
      {
        "id": "b3-img_jahazmahal_29",
        "type": "Mercedes AC",
        "agency": "SRS Travels",
        "name": "Night Glide",
        "cost": 65,
        "departureTime": "11:30 PM"
      },
      {
        "id": "b4-img_jahazmahal_29",
        "type": "Semi-Sleeper Non-AC",
        "agency": "KSRTC",
        "name": "Janrath",
        "cost": 25,
        "departureTime": "07:00 AM"
      },
      {
        "id": "b5-img_jahazmahal_29",
        "type": "Mini Bus Luxury",
        "agency": "Local Tour Bus",
        "name": "Day Explorer",
        "cost": 35,
        "departureTime": "09:00 AM"
      },
      {
        "id": "c1-img_jahazmahal_29",
        "type": "Hatchback (Swift/WagonR)",
        "agency": "Ola Rentals",
        "name": "Self-Drive/Chauffeur",
        "cost": 80,
        "departureTime": "Flexible"
      },
      {
        "id": "c2-img_jahazmahal_29",
        "type": "Sedan (Dzire/City)",
        "agency": "Uber Intercity",
        "name": "Business Class",
        "cost": 120,
        "departureTime": "Flexible"
      },
      {
        "id": "c3-img_jahazmahal_29",
        "type": "SUV (Innova/Crysta)",
        "agency": "Zoomcar",
        "name": "Family Group",
        "cost": 180,
        "departureTime": "Flexible"
      },
      {
        "id": "c4-img_jahazmahal_29",
        "type": "Luxury Sedan (BMW/Audi)",
        "agency": "BlackBucks",
        "name": "Elite Travel",
        "cost": 500,
        "departureTime": "Flexible"
      },
      {
        "id": "c5-img_jahazmahal_29",
        "type": "Force Traveller (12 Seater)",
        "agency": "Tempo Travellers",
        "name": "Group Tourer",
        "cost": 250,
        "departureTime": "Flexible"
      }
    ],
    "restaurants": [
      {
        "id": "r1",
        "name": "The Local Spice Route",
        "rating": "4.8",
        "menuHighlights": [
          "Authentic Thali",
          "Spicy Curries"
        ],
        "averageCost": 25,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.4",
        "menuHighlights": [
          "Pasta",
          "Mocktails"
        ],
        "averageCost": 60,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.5",
        "menuHighlights": [
          "Burgers",
          "Local Snacks"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
      },
      {
        "id": "r4",
        "name": "Royal Dining Palace",
        "rating": "4.6",
        "menuHighlights": [
          "Gourmet Platter",
          "Fine Wine"
        ],
        "averageCost": 120,
        "category": "Fine Dining",
        "openingTime": "07:00 PM - 11:30 PM"
      },
      {
        "id": "r5",
        "name": "Oceanic Seafood",
        "rating": "4.2",
        "menuHighlights": [
          "Grilled Fish",
          "Lobster"
        ],
        "averageCost": 70,
        "category": "Seafood",
        "openingTime": "11:00 AM - 10:30 PM"
      },
      {
        "id": "r6",
        "name": "Green Garden Cafe",
        "rating": "4.7",
        "menuHighlights": [
          "Vegan Bowl",
          "Smoothies"
        ],
        "averageCost": 30,
        "category": "Vegan",
        "openingTime": "08:00 AM - 08:00 PM"
      },
      {
        "id": "r7",
        "name": "Tandoori Tales",
        "rating": "4.1",
        "menuHighlights": [
          "Kebabs",
          "Biryani"
        ],
        "averageCost": 40,
        "category": "Traditional",
        "openingTime": "01:00 PM - 11:00 PM"
      },
      {
        "id": "r8",
        "name": "Wok & Roll",
        "rating": "4.3",
        "menuHighlights": [
          "Dim Sums",
          "Noodles"
        ],
        "averageCost": 35,
        "category": "Asian",
        "openingTime": "12:30 PM - 11:00 PM"
      },
      {
        "id": "r9",
        "name": "Brew & Bake",
        "rating": "4.7",
        "menuHighlights": [
          "Artisan Bread",
          "Latte"
        ],
        "averageCost": 20,
        "category": "Cafe",
        "openingTime": "07:00 AM - 09:00 PM"
      },
      {
        "id": "r10",
        "name": "Steak House 101",
        "rating": "4.7",
        "menuHighlights": [
          "Ribeye",
          "Mashed Potatoes"
        ],
        "averageCost": 90,
        "category": "Steakhouse",
        "openingTime": "06:00 PM - 11:00 PM"
      }
    ]
  },
  {
  "id": "andaman",
  "name": "Amazing Andaman (Port Blair, Havelock & Neil)",
  "image": "https://images.unsplash.com/photo-1589136142558-74611990c0a7?auto=format&fit=crop&q=80&w=1000",
  "flights": [
    {
      "id": "af1",
      "type": "Economy (To Port Blair)",
      "cost": 8000
    },
    {
      "id": "af2",
      "type": "Business (To Port Blair)",
      "cost": 18000
    }
  ],
  "hotels": [
    {
      "id": "ah1",
      "type": "Option 1: 3-Star Budget",
      "costPerNight": 4500,
      "rating": "3.8",
      "roomOptions": [
        {
          "type": "Standard Room (Sea Deck/Green Imperial)",
          "cost": 4500
        }
      ],
      "name": "Sea Deck / Green Imperial / Blue Lagoon"
    },
    {
      "id": "ah2",
      "type": "Option 2: 3-Star Premium",
      "costPerNight": 5000,
      "rating": "4.2",
      "roomOptions": [
        {
          "type": "Deluxe Room / Chalet (Bay Leaf/ILE Bay)",
          "cost": 5000
        }
      ],
      "name": "Bay Leaf Inn / ILE Bay / TSG Aura"
    },
    {
      "id": "ah3",
      "type": "Option 3: 4-Star Luxury",
      "costPerNight": 6000,
      "rating": "4.6",
      "roomOptions": [
        {
          "type": "Deluxe Ocean View / Bamboo Saa",
          "cost": 6000
        }
      ],
      "name": "Mansha Residency / Sea Hill / Pearl Park"
    }
  ],
  "detailedTransport": [
    {
      "id": "at1",
      "type": "Ferry: Port Blair to Havelock",
      "agency": "Makruzz/Nautika",
      "name": "Premium Class",
      "cost": 1500,
      "departureTime": "09:30 AM - 02:00 PM"
    },
    {
      "id": "at2",
      "type": "Ferry: Havelock to Neil",
      "agency": "Nautika",
      "name": "Luxury Class",
      "cost": 1200,
      "departureTime": "09:30 AM - 12:00 PM"
    },
    {
      "id": "at3",
      "type": "Ferry: Neil to Port Blair",
      "agency": "Nautika",
      "name": "Luxury Class",
      "cost": 1200,
      "departureTime": "09:30 AM - 12:00 PM"
    },
    {
      "id": "at4",
      "type": "Private Car",
      "agency": "YouWe Travel",
      "name": "AC Sedan/SUV Sightseeing",
      "cost": 3500,
      "departureTime": "Full Day"
    }
  ],
  "activities": [
    {
      "name": "Radhanagar Beach Visit",
      "cost": 0,
      "rating": "4.9",
      "openingTime": "06:00 AM",
      "closingTime": "06:00 PM",
      "category": "Main"
    },
    {
      "name": "Elephant Beach Speed Boat",
      "cost": 1000,
      "rating": "4.8",
      "openingTime": "08:00 AM",
      "closingTime": "03:00 PM",
      "category": "Adventure"
    },
    {
      "name": "Shore Scuba Diving",
      "cost": 3500,
      "rating": "4.7",
      "openingTime": "06:00 AM",
      "closingTime": "02:00 PM",
      "category": "Adventure"
    },
    {
      "name": "Kalapathar Beach Sunrise",
      "cost": 0,
      "rating": "4.9",
      "openingTime": "04:30 AM",
      "closingTime": "07:00 AM",
      "category": "Traditional"
    },
    {
      "name": "Cellular Jail Light & Sound Show",
      "cost": 300,
      "rating": "4.8",
      "openingTime": "06:00 PM",
      "closingTime": "08:00 PM",
      "category": "Cultural"
    },
    {
      "name": "Glass Boat Ride (Bharatpur)",
      "cost": 500,
      "rating": "4.5",
      "openingTime": "10:00 AM",
      "closingTime": "02:00 PM",
      "category": "Main"
    },
    {
      "name": "Sitapur Beach Coral Viewing",
      "cost": 0,
      "rating": "4.6",
      "openingTime": "08:00 AM",
      "closingTime": "04:00 PM",
      "category": "Main"
    },
    {
      "name": "Corbyn Cove Beach Sightseeing",
      "cost": 0,
      "rating": "4.7",
      "openingTime": "Anytime",
      "closingTime": "Anytime",
      "category": "Main"
    }
  ],
  "restaurants": [
    {
      "id": "ar1",
      "name": "Local Seafood Special",
      "category": "Seafood",
      "rating": "4.8",
      "menuHighlights": [
        "Lobster",
        "Crab",
        "Fish Curry"
      ],
      "openingTime": "12:00 PM - 10:00 PM",
      "averageCost": 800
    },
    {
      "id": "ar2",
      "name": "Havelock Beach Cafe",
      "category": "Cafe",
      "rating": "4.6",
      "menuHighlights": [
        "Grilled Fish",
        "Pasta",
        "Coconut Water"
      ],
      "openingTime": "08:00 AM - 11:00 PM",
      "averageCost": 600
    }
  ],
  "cancellationPolicy": "30+ days: 25% charge | 15-30 days: 50% charge | 0-15 days: 100% charge",
  "packingList": [
    "Light breathable clothing",
    "Sunscreen & Sunglasses",
    "Insect repellent",
    "Swimwear",
    "Flip-flops/Sandals",
    "Waterproof bags",
    "Medication/First-aid kit",
    "Reusable water bottle",
    "Portable charger"
  ],
  "knowBeforeYouGo": [
    "Preferred network: BSNL/Airtel",
    "Internet rarely works, carry printouts",
    "ATMs available at Havelock/Port Blair, carry cash for Neil",
    "Vehicles are point-to-point only",
    "Cellular jail closed on Mondays",
    "Sunrise is best experienced early morning"
  ],
  "shoppingGuide": "Aberdeen Bazaar (Pearls), Sagarika Govt Emporium (Handicrafts), Shell Jewelry, Coconut Shell decor.",
  "culturalEtiquette": "Observe decency in dress, especially at places of worship. Do not enter restricted tribal areas.",
  "inclusions": [
    "Accommodation with breakfast",
    "Airport Transfer",
    "Private Car Ferry transfers",
    "Premium Ferry charges (Makruzz/Nautika)",
    "Toll/Parking",
    "Cellular Jail tickets",
    "Elephant boat ride"
  ],
  "exclusions": [
    "Other watersports",
    "Lunch & Dinner",
    "Personal expenses",
    "Scuba Diving by boat (5500 INR)"
  ],
  "bankDetails": {
    "name": "You We Travel OPC Private Limited",
    "bank": "HDFC Bank",
    "account": "50200093843846",
    "ifsc": "HDFC0001934",
    "type": "Current"
  }
}
];

module.exports = destinations;