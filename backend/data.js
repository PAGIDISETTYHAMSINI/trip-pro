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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-320",
        "cost": 400,
        "departureTime": "07:00 AM",
        "arrivalTime": "11:00 AM",
        "duration": "4h 38m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-paris",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-590",
        "cost": 1200,
        "departureTime": "08:00 AM",
        "arrivalTime": "02:00 PM",
        "duration": "6h 27m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-paris",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-3203",
        "cost": 160,
        "departureTime": "06:30 PM",
        "arrivalTime": "01:30 AM (+1)",
        "duration": "7h 25m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-paris",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-6080",
        "cost": 280,
        "departureTime": "05:30 PM",
        "arrivalTime": "11:30 PM",
        "duration": "6h 38m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-paris",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-paris",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-paris",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 200,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-paris",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 480,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-472",
        "cost": 800,
        "departureTime": "08:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "5h 36m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-bali",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-509",
        "cost": 2500,
        "departureTime": "08:00 AM",
        "arrivalTime": "10:00 AM",
        "duration": "2h 19m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-bali",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-2679",
        "cost": 320,
        "departureTime": "02:30 PM",
        "arrivalTime": "01:30 AM (+1)",
        "duration": "11h 39m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-bali",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-8385",
        "cost": 560,
        "departureTime": "02:30 PM",
        "arrivalTime": "07:30 PM",
        "duration": "5h 38m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-bali",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-bali",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-bali",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 400,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-bali",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 960,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-497",
        "cost": 900,
        "departureTime": "06:00 AM",
        "arrivalTime": "08:00 AM",
        "duration": "2h 23m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-tokyo",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-687",
        "cost": 3000,
        "departureTime": "07:00 AM",
        "arrivalTime": "09:00 AM",
        "duration": "2h 45m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-tokyo",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-4176",
        "cost": 360,
        "departureTime": "05:30 PM",
        "arrivalTime": "02:30 AM (+1)",
        "duration": "9h 48m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-tokyo",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-1100",
        "cost": 630,
        "departureTime": "01:30 PM",
        "arrivalTime": "10:30 PM",
        "duration": "9h 17m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-tokyo",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-tokyo",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-tokyo",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 450,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-tokyo",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 1080,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-319",
        "cost": 300,
        "departureTime": "06:00 AM",
        "arrivalTime": "09:00 AM",
        "duration": "3h 46m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-newyork",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-354",
        "cost": 1000,
        "departureTime": "06:00 AM",
        "arrivalTime": "08:00 AM",
        "duration": "2h 36m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-newyork",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-9846",
        "cost": 120,
        "departureTime": "03:30 PM",
        "arrivalTime": "08:30 PM",
        "duration": "5h 43m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-newyork",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-4208",
        "cost": 210,
        "departureTime": "04:30 PM",
        "arrivalTime": "04:30 AM (+1)",
        "duration": "12h 19m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-newyork",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-newyork",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-newyork",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 150,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-newyork",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 360,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "type": "Budget Airline",
        "agency": "IndiGo",
        "name": "Flight-647",
        "cost": 150,
        "departureTime": "09:00 AM",
        "arrivalTime": "11:00 AM",
        "duration": "2h 21m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-goa",
        "type": "Premium Airline",
        "agency": "Air India",
        "name": "Flight-332",
        "cost": 400,
        "departureTime": "07:00 AM",
        "arrivalTime": "10:00 AM",
        "duration": "3h 40m",
        "stops": "1 Stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-goa",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-8316",
        "cost": 60,
        "departureTime": "04:30 PM",
        "arrivalTime": "03:30 AM (+1)",
        "duration": "11h 17m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-goa",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-3113",
        "cost": 105,
        "departureTime": "01:30 PM",
        "arrivalTime": "09:30 PM",
        "duration": "8h 49m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-goa",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-goa",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-goa",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 75,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-goa",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 180,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "IndiGo",
        "name": "Flight-530",
        "cost": 200,
        "departureTime": "07:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "6h 26m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-kerala",
        "type": "Business",
        "agency": "Air India",
        "name": "Flight-484",
        "cost": 500,
        "departureTime": "07:00 AM",
        "arrivalTime": "09:00 AM",
        "duration": "2h 42m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-kerala",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-5326",
        "cost": 80,
        "departureTime": "03:30 PM",
        "arrivalTime": "12:30 AM (+1)",
        "duration": "9h 46m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-kerala",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-9131",
        "cost": 140,
        "departureTime": "04:30 PM",
        "arrivalTime": "02:30 AM (+1)",
        "duration": "10h 48m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-kerala",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-kerala",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-kerala",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 100,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-kerala",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 240,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        "agency": "IndiGo",
        "name": "Flight-105",
        "cost": 180,
        "departureTime": "11:00 AM",
        "arrivalTime": "05:00 PM",
        "duration": "6h 49m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-jaipur",
        "type": "Business",
        "agency": "Air India",
        "name": "Flight-817",
        "cost": 450,
        "departureTime": "07:00 AM",
        "arrivalTime": "12:00 PM",
        "duration": "5h 31m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-jaipur",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-6050",
        "cost": 72,
        "departureTime": "01:30 PM",
        "arrivalTime": "06:30 PM",
        "duration": "5h 49m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-jaipur",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-3097",
        "cost": 125,
        "departureTime": "03:30 PM",
        "arrivalTime": "09:30 PM",
        "duration": "6h 42m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-jaipur",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-jaipur",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-jaipur",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 90,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-jaipur",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 216,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "IndiGo",
        "name": "Flight-803",
        "cost": 120,
        "departureTime": "11:00 AM",
        "arrivalTime": "05:00 PM",
        "duration": "6h 25m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-agra",
        "type": "Business",
        "agency": "Air India",
        "name": "Flight-849",
        "cost": 350,
        "departureTime": "09:00 AM",
        "arrivalTime": "12:00 PM",
        "duration": "3h 11m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-agra",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-3471",
        "cost": 48,
        "departureTime": "01:30 PM",
        "arrivalTime": "09:30 PM",
        "duration": "8h 27m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-agra",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-4766",
        "cost": 84,
        "departureTime": "06:30 PM",
        "arrivalTime": "03:30 AM (+1)",
        "duration": "9h 12m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-agra",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-agra",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-agra",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 60,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-agra",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 144,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        "agency": "IndiGo",
        "name": "Flight-188",
        "cost": 150,
        "departureTime": "10:00 AM",
        "arrivalTime": "12:00 PM",
        "duration": "2h 12m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-newdelhi",
        "type": "Business",
        "agency": "Air India",
        "name": "Flight-647",
        "cost": 400,
        "departureTime": "10:00 AM",
        "arrivalTime": "12:00 PM",
        "duration": "2h 38m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-newdelhi",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-9761",
        "cost": 60,
        "departureTime": "01:30 PM",
        "arrivalTime": "07:30 PM",
        "duration": "6h 37m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-newdelhi",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-1113",
        "cost": 105,
        "departureTime": "06:30 PM",
        "arrivalTime": "02:30 AM (+1)",
        "duration": "8h 32m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-newdelhi",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-newdelhi",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-newdelhi",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 75,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-newdelhi",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 180,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "IndiGo",
        "name": "Flight-345",
        "cost": 160,
        "departureTime": "08:00 AM",
        "arrivalTime": "11:00 AM",
        "duration": "3h 41m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-mumbai",
        "type": "Business",
        "agency": "Air India",
        "name": "Flight-419",
        "cost": 420,
        "departureTime": "08:00 AM",
        "arrivalTime": "11:00 AM",
        "duration": "3h 23m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-mumbai",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-9527",
        "cost": 64,
        "departureTime": "02:30 PM",
        "arrivalTime": "10:30 PM",
        "duration": "8h 43m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-mumbai",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-4825",
        "cost": 112,
        "departureTime": "06:30 PM",
        "arrivalTime": "04:30 AM (+1)",
        "duration": "10h 41m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-mumbai",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-mumbai",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-mumbai",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 80,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-mumbai",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 192,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "IndiGo",
        "name": "Flight-381",
        "cost": 130,
        "departureTime": "06:00 AM",
        "arrivalTime": "10:00 AM",
        "duration": "4h 14m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-varanasi",
        "type": "Business",
        "agency": "Air India",
        "name": "Flight-972",
        "cost": 380,
        "departureTime": "06:00 AM",
        "arrivalTime": "09:00 AM",
        "duration": "3h 27m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-varanasi",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-4207",
        "cost": 52,
        "departureTime": "06:30 PM",
        "arrivalTime": "12:30 AM (+1)",
        "duration": "6h 30m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-varanasi",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-4882",
        "cost": 91,
        "departureTime": "06:30 PM",
        "arrivalTime": "05:30 AM (+1)",
        "duration": "11h 22m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-varanasi",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-varanasi",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-varanasi",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 65,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-varanasi",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 156,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "IndiGo",
        "name": "Flight-963",
        "cost": 250,
        "departureTime": "10:00 AM",
        "arrivalTime": "02:00 PM",
        "duration": "4h 26m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-ladakh",
        "type": "Premium Economy",
        "agency": "Air India",
        "name": "Flight-407",
        "cost": 500,
        "departureTime": "10:00 AM",
        "arrivalTime": "04:00 PM",
        "duration": "6h 20m",
        "stops": "1 Stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-ladakh",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-9096",
        "cost": 100,
        "departureTime": "01:30 PM",
        "arrivalTime": "07:30 PM",
        "duration": "6h 25m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-ladakh",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-7316",
        "cost": 175,
        "departureTime": "04:30 PM",
        "arrivalTime": "11:30 PM",
        "duration": "7h 31m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-ladakh",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-ladakh",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-ladakh",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 125,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-ladakh",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 300,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "IndiGo",
        "name": "Flight-826",
        "cost": 220,
        "departureTime": "06:00 AM",
        "arrivalTime": "08:00 AM",
        "duration": "2h 37m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-andaman",
        "type": "Business",
        "agency": "Air India",
        "name": "Flight-295",
        "cost": 600,
        "departureTime": "10:00 AM",
        "arrivalTime": "02:00 PM",
        "duration": "4h 37m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-andaman",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-3713",
        "cost": 88,
        "departureTime": "02:30 PM",
        "arrivalTime": "01:30 AM (+1)",
        "duration": "11h 43m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-andaman",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-1314",
        "cost": 154,
        "departureTime": "02:30 PM",
        "arrivalTime": "10:30 PM",
        "duration": "8h 28m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-andaman",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-andaman",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-andaman",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 110,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-andaman",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 264,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "type": "Bus/Economy Travel",
        "agency": "IndiGo",
        "name": "Flight-869",
        "cost": 50,
        "departureTime": "11:00 AM",
        "arrivalTime": "02:00 PM",
        "duration": "3h 22m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-manali",
        "type": "Private Cab",
        "agency": "Air India",
        "name": "Flight-313",
        "cost": 200,
        "departureTime": "06:00 AM",
        "arrivalTime": "10:00 AM",
        "duration": "4h 44m",
        "stops": "1 Stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-manali",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-3561",
        "cost": 20,
        "departureTime": "05:30 PM",
        "arrivalTime": "03:30 AM (+1)",
        "duration": "10h 11m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-manali",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-3691",
        "cost": 35,
        "departureTime": "03:30 PM",
        "arrivalTime": "08:30 PM",
        "duration": "5h 17m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-manali",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-manali",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-manali",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 25,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-manali",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 60,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "IndiGo",
        "name": "Flight-843",
        "cost": 150,
        "departureTime": "10:00 AM",
        "arrivalTime": "04:00 PM",
        "duration": "6h 35m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-darjeeling",
        "type": "Business",
        "agency": "Air India",
        "name": "Flight-811",
        "cost": 350,
        "departureTime": "08:00 AM",
        "arrivalTime": "10:00 AM",
        "duration": "2h 24m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-darjeeling",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-2013",
        "cost": 60,
        "departureTime": "04:30 PM",
        "arrivalTime": "10:30 PM",
        "duration": "6h 24m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-darjeeling",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-8360",
        "cost": 105,
        "departureTime": "06:30 PM",
        "arrivalTime": "12:30 AM (+1)",
        "duration": "6h 23m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-darjeeling",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-darjeeling",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-darjeeling",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 75,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-darjeeling",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 180,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "IndiGo",
        "name": "Flight-673",
        "cost": 100,
        "departureTime": "09:00 AM",
        "arrivalTime": "02:00 PM",
        "duration": "5h 40m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-rishikesh",
        "type": "Premium Economy",
        "agency": "Air India",
        "name": "Flight-725",
        "cost": 250,
        "departureTime": "09:00 AM",
        "arrivalTime": "02:00 PM",
        "duration": "5h 31m",
        "stops": "1 Stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-rishikesh",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-4466",
        "cost": 40,
        "departureTime": "02:30 PM",
        "arrivalTime": "01:30 AM (+1)",
        "duration": "11h 12m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-rishikesh",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-2716",
        "cost": 70,
        "departureTime": "03:30 PM",
        "arrivalTime": "01:30 AM (+1)",
        "duration": "10h 13m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-rishikesh",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-rishikesh",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-rishikesh",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 50,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-rishikesh",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 120,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "IndiGo",
        "name": "Flight-269",
        "cost": 140,
        "departureTime": "07:00 AM",
        "arrivalTime": "11:00 AM",
        "duration": "4h 25m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-udaipur",
        "type": "Business",
        "agency": "Air India",
        "name": "Flight-321",
        "cost": 380,
        "departureTime": "06:00 AM",
        "arrivalTime": "08:00 AM",
        "duration": "2h 49m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-udaipur",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-2260",
        "cost": 56,
        "departureTime": "04:30 PM",
        "arrivalTime": "03:30 AM (+1)",
        "duration": "11h 27m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-udaipur",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-6520",
        "cost": 98,
        "departureTime": "02:30 PM",
        "arrivalTime": "09:30 PM",
        "duration": "7h 18m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-udaipur",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-udaipur",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-udaipur",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 70,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-udaipur",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 168,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-554",
        "cost": 193,
        "departureTime": "07:00 AM",
        "arrivalTime": "09:00 AM",
        "duration": "2h 26m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_ajanta_0",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-249",
        "cost": 329,
        "departureTime": "10:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "5h 43m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_ajanta_0",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-8785",
        "cost": 77,
        "departureTime": "06:30 PM",
        "arrivalTime": "04:30 AM (+1)",
        "duration": "10h 45m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_ajanta_0",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-9391",
        "cost": 135,
        "departureTime": "05:30 PM",
        "arrivalTime": "11:30 PM",
        "duration": "6h 32m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_ajanta_0",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_ajanta_0",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_ajanta_0",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 96,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_ajanta_0",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 231,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-616",
        "cost": 121,
        "departureTime": "08:00 AM",
        "arrivalTime": "10:00 AM",
        "duration": "2h 31m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_amarnathcave_1",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-828",
        "cost": 412,
        "departureTime": "10:00 AM",
        "arrivalTime": "12:00 PM",
        "duration": "2h 13m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_amarnathcave_1",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-2852",
        "cost": 48,
        "departureTime": "06:30 PM",
        "arrivalTime": "06:30 AM (+1)",
        "duration": "12h 43m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_amarnathcave_1",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-3603",
        "cost": 84,
        "departureTime": "06:30 PM",
        "arrivalTime": "01:30 AM (+1)",
        "duration": "7h 28m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_amarnathcave_1",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_amarnathcave_1",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_amarnathcave_1",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 60,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_amarnathcave_1",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 145,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-488",
        "cost": 154,
        "departureTime": "11:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "2h 16m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_akbarstomb_2",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-803",
        "cost": 477,
        "departureTime": "10:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "5h 11m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_akbarstomb_2",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-1939",
        "cost": 61,
        "departureTime": "06:30 PM",
        "arrivalTime": "03:30 AM (+1)",
        "duration": "9h 48m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_akbarstomb_2",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-3423",
        "cost": 107,
        "departureTime": "03:30 PM",
        "arrivalTime": "11:30 PM",
        "duration": "8h 21m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_akbarstomb_2",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_akbarstomb_2",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_akbarstomb_2",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 77,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_akbarstomb_2",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 184,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-181",
        "cost": 115,
        "departureTime": "10:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "5h 43m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_amberpalace_3",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-202",
        "cost": 391,
        "departureTime": "11:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "4h 12m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_amberpalace_3",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-4045",
        "cost": 46,
        "departureTime": "04:30 PM",
        "arrivalTime": "04:30 AM (+1)",
        "duration": "12h 36m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_amberpalace_3",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-6158",
        "cost": 80,
        "departureTime": "04:30 PM",
        "arrivalTime": "04:30 AM (+1)",
        "duration": "12h 27m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_amberpalace_3",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_amberpalace_3",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_amberpalace_3",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 57,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_amberpalace_3",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 138,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-714",
        "cost": 119,
        "departureTime": "10:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "3h 18m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_anandbhawan_4",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-180",
        "cost": 393,
        "departureTime": "08:00 AM",
        "arrivalTime": "12:00 PM",
        "duration": "4h 43m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_anandbhawan_4",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-8877",
        "cost": 47,
        "departureTime": "03:30 PM",
        "arrivalTime": "11:30 PM",
        "duration": "8h 45m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_anandbhawan_4",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-9235",
        "cost": 83,
        "departureTime": "04:30 PM",
        "arrivalTime": "03:30 AM (+1)",
        "duration": "11h 46m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_anandbhawan_4",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_anandbhawan_4",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_anandbhawan_4",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 59,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_anandbhawan_4",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 142,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-300",
        "cost": 106,
        "departureTime": "07:00 AM",
        "arrivalTime": "09:00 AM",
        "duration": "2h 24m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_bhakradam_5",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-664",
        "cost": 499,
        "departureTime": "09:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "4h 16m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_bhakradam_5",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-4462",
        "cost": 42,
        "departureTime": "01:30 PM",
        "arrivalTime": "07:30 PM",
        "duration": "6h 21m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_bhakradam_5",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-3666",
        "cost": 74,
        "departureTime": "04:30 PM",
        "arrivalTime": "09:30 PM",
        "duration": "5h 19m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_bhakradam_5",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_bhakradam_5",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_bhakradam_5",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 53,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_bhakradam_5",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 127,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-474",
        "cost": 195,
        "departureTime": "11:00 AM",
        "arrivalTime": "05:00 PM",
        "duration": "6h 40m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_bibidamaqbra_6",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-910",
        "cost": 494,
        "departureTime": "11:00 AM",
        "arrivalTime": "02:00 PM",
        "duration": "3h 26m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_bibidamaqbra_6",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-5153",
        "cost": 78,
        "departureTime": "03:30 PM",
        "arrivalTime": "08:30 PM",
        "duration": "5h 13m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_bibidamaqbra_6",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-7307",
        "cost": 136,
        "departureTime": "05:30 PM",
        "arrivalTime": "10:30 PM",
        "duration": "5h 24m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_bibidamaqbra_6",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_bibidamaqbra_6",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_bibidamaqbra_6",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 97,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_bibidamaqbra_6",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 234,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-835",
        "cost": 165,
        "departureTime": "09:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "4h 15m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_birlaplanetarium_7",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-177",
        "cost": 302,
        "departureTime": "10:00 AM",
        "arrivalTime": "12:00 PM",
        "duration": "2h 44m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_birlaplanetarium_7",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-1902",
        "cost": 66,
        "departureTime": "03:30 PM",
        "arrivalTime": "09:30 PM",
        "duration": "6h 13m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_birlaplanetarium_7",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-8741",
        "cost": 115,
        "departureTime": "04:30 PM",
        "arrivalTime": "02:30 AM (+1)",
        "duration": "10h 33m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_birlaplanetarium_7",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_birlaplanetarium_7",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_birlaplanetarium_7",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 82,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_birlaplanetarium_7",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 198,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-490",
        "cost": 110,
        "departureTime": "08:00 AM",
        "arrivalTime": "10:00 AM",
        "duration": "2h 28m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_blackpagoda_8",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-498",
        "cost": 391,
        "departureTime": "06:00 AM",
        "arrivalTime": "10:00 AM",
        "duration": "4h 18m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_blackpagoda_8",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-2462",
        "cost": 44,
        "departureTime": "02:30 PM",
        "arrivalTime": "10:30 PM",
        "duration": "8h 49m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_blackpagoda_8",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-7549",
        "cost": 77,
        "departureTime": "04:30 PM",
        "arrivalTime": "11:30 PM",
        "duration": "7h 19m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_blackpagoda_8",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_blackpagoda_8",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_blackpagoda_8",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 55,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_blackpagoda_8",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 132,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-609",
        "cost": 172,
        "departureTime": "10:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "5h 16m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_bodhisatva_9",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-580",
        "cost": 461,
        "departureTime": "10:00 AM",
        "arrivalTime": "12:00 PM",
        "duration": "2h 48m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_bodhisatva_9",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-2277",
        "cost": 68,
        "departureTime": "04:30 PM",
        "arrivalTime": "04:30 AM (+1)",
        "duration": "12h 34m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_bodhisatva_9",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-3214",
        "cost": 120,
        "departureTime": "03:30 PM",
        "arrivalTime": "01:30 AM (+1)",
        "duration": "10h 42m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_bodhisatva_9",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_bodhisatva_9",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_bodhisatva_9",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 86,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_bodhisatva_9",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 206,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-200",
        "cost": 149,
        "departureTime": "11:00 AM",
        "arrivalTime": "04:00 PM",
        "duration": "5h 22m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_brihadeeswaratemple_10",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-804",
        "cost": 494,
        "departureTime": "11:00 AM",
        "arrivalTime": "05:00 PM",
        "duration": "6h 34m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_brihadeeswaratemple_10",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-7121",
        "cost": 59,
        "departureTime": "01:30 PM",
        "arrivalTime": "01:30 AM (+1)",
        "duration": "12h 23m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_brihadeeswaratemple_10",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-1138",
        "cost": 104,
        "departureTime": "06:30 PM",
        "arrivalTime": "12:30 AM (+1)",
        "duration": "6h 26m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_brihadeeswaratemple_10",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_brihadeeswaratemple_10",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_brihadeeswaratemple_10",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 74,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_brihadeeswaratemple_10",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 178,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-600",
        "cost": 117,
        "departureTime": "08:00 AM",
        "arrivalTime": "11:00 AM",
        "duration": "3h 36m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_brindabangardens_11",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-777",
        "cost": 481,
        "departureTime": "07:00 AM",
        "arrivalTime": "10:00 AM",
        "duration": "3h 46m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_brindabangardens_11",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-1680",
        "cost": 46,
        "departureTime": "04:30 PM",
        "arrivalTime": "02:30 AM (+1)",
        "duration": "10h 24m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_brindabangardens_11",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-9664",
        "cost": 81,
        "departureTime": "04:30 PM",
        "arrivalTime": "04:30 AM (+1)",
        "duration": "12h 32m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_brindabangardens_11",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_brindabangardens_11",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_brindabangardens_11",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 58,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_brindabangardens_11",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 140,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-834",
        "cost": 164,
        "departureTime": "09:00 AM",
        "arrivalTime": "02:00 PM",
        "duration": "5h 34m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_bulanddarwaza_12",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-108",
        "cost": 469,
        "departureTime": "07:00 AM",
        "arrivalTime": "10:00 AM",
        "duration": "3h 20m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_bulanddarwaza_12",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-5438",
        "cost": 65,
        "departureTime": "02:30 PM",
        "arrivalTime": "01:30 AM (+1)",
        "duration": "11h 49m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_bulanddarwaza_12",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-7618",
        "cost": 114,
        "departureTime": "01:30 PM",
        "arrivalTime": "01:30 AM (+1)",
        "duration": "12h 34m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_bulanddarwaza_12",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_bulanddarwaza_12",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_bulanddarwaza_12",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 82,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_bulanddarwaza_12",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 196,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-370",
        "cost": 194,
        "departureTime": "09:00 AM",
        "arrivalTime": "12:00 PM",
        "duration": "3h 49m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_charminar_13",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-311",
        "cost": 426,
        "departureTime": "09:00 AM",
        "arrivalTime": "02:00 PM",
        "duration": "5h 42m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_charminar_13",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-6678",
        "cost": 77,
        "departureTime": "05:30 PM",
        "arrivalTime": "04:30 AM (+1)",
        "duration": "11h 19m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_charminar_13",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-6632",
        "cost": 135,
        "departureTime": "01:30 PM",
        "arrivalTime": "07:30 PM",
        "duration": "6h 21m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_charminar_13",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_charminar_13",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_charminar_13",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 97,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_charminar_13",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 232,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-701",
        "cost": 191,
        "departureTime": "07:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "6h 23m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_cheenakesavatemple_14",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-197",
        "cost": 348,
        "departureTime": "10:00 AM",
        "arrivalTime": "04:00 PM",
        "duration": "6h 45m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_cheenakesavatemple_14",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-3332",
        "cost": 76,
        "departureTime": "04:30 PM",
        "arrivalTime": "02:30 AM (+1)",
        "duration": "10h 13m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_cheenakesavatemple_14",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-4148",
        "cost": 133,
        "departureTime": "04:30 PM",
        "arrivalTime": "09:30 PM",
        "duration": "5h 26m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_cheenakesavatemple_14",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_cheenakesavatemple_14",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_cheenakesavatemple_14",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 95,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_cheenakesavatemple_14",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 229,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-714",
        "cost": 126,
        "departureTime": "06:00 AM",
        "arrivalTime": "10:00 AM",
        "duration": "4h 13m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_chilkalake_15",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-658",
        "cost": 461,
        "departureTime": "07:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "6h 21m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_chilkalake_15",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-4217",
        "cost": 50,
        "departureTime": "03:30 PM",
        "arrivalTime": "01:30 AM (+1)",
        "duration": "10h 39m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_chilkalake_15",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-9971",
        "cost": 88,
        "departureTime": "03:30 PM",
        "arrivalTime": "03:30 AM (+1)",
        "duration": "12h 10m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_chilkalake_15",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_chilkalake_15",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_chilkalake_15",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 63,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_chilkalake_15",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 151,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-531",
        "cost": 188,
        "departureTime": "11:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "4h 33m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_dallake_16",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-452",
        "cost": 353,
        "departureTime": "07:00 AM",
        "arrivalTime": "10:00 AM",
        "duration": "3h 17m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_dallake_16",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-3545",
        "cost": 75,
        "departureTime": "06:30 PM",
        "arrivalTime": "04:30 AM (+1)",
        "duration": "10h 27m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_dallake_16",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-2096",
        "cost": 131,
        "departureTime": "04:30 PM",
        "arrivalTime": "09:30 PM",
        "duration": "5h 49m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_dallake_16",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_dallake_16",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_dallake_16",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 94,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_dallake_16",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 225,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-711",
        "cost": 143,
        "departureTime": "10:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "3h 13m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_dilwaratemple_17",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-796",
        "cost": 472,
        "departureTime": "07:00 AM",
        "arrivalTime": "11:00 AM",
        "duration": "4h 33m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_dilwaratemple_17",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-1167",
        "cost": 57,
        "departureTime": "05:30 PM",
        "arrivalTime": "04:30 AM (+1)",
        "duration": "11h 28m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_dilwaratemple_17",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-1874",
        "cost": 100,
        "departureTime": "06:30 PM",
        "arrivalTime": "06:30 AM (+1)",
        "duration": "12h 20m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_dilwaratemple_17",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_dilwaratemple_17",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_dilwaratemple_17",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 71,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_dilwaratemple_17",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 171,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-292",
        "cost": 176,
        "departureTime": "10:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "5h 11m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_elephantacaves_18",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-225",
        "cost": 382,
        "departureTime": "06:00 AM",
        "arrivalTime": "11:00 AM",
        "duration": "5h 35m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_elephantacaves_18",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-4947",
        "cost": 70,
        "departureTime": "04:30 PM",
        "arrivalTime": "02:30 AM (+1)",
        "duration": "10h 23m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_elephantacaves_18",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-7646",
        "cost": 123,
        "departureTime": "06:30 PM",
        "arrivalTime": "04:30 AM (+1)",
        "duration": "10h 29m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_elephantacaves_18",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_elephantacaves_18",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_elephantacaves_18",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 88,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_elephantacaves_18",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 211,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-828",
        "cost": 116,
        "departureTime": "06:00 AM",
        "arrivalTime": "10:00 AM",
        "duration": "4h 33m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_elloracaves_19",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-881",
        "cost": 428,
        "departureTime": "10:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "5h 36m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_elloracaves_19",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-9518",
        "cost": 46,
        "departureTime": "05:30 PM",
        "arrivalTime": "02:30 AM (+1)",
        "duration": "9h 50m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_elloracaves_19",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-7955",
        "cost": 81,
        "departureTime": "04:30 PM",
        "arrivalTime": "01:30 AM (+1)",
        "duration": "9h 15m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_elloracaves_19",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_elloracaves_19",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_elloracaves_19",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 58,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_elloracaves_19",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 139,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "IndiGo",
        "name": "Flight-798",
        "cost": 141,
        "departureTime": "08:00 AM",
        "arrivalTime": "12:00 PM",
        "duration": "4h 10m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_gatewayofindia_20",
        "type": "Business",
        "agency": "Air India",
        "name": "Flight-217",
        "cost": 352,
        "departureTime": "11:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "2h 34m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_gatewayofindia_20",
        "type": "Express Train",
        "agency": "Indian Railways",
        "name": "Express-9179",
        "cost": 56,
        "departureTime": "01:30 PM",
        "arrivalTime": "11:30 PM",
        "duration": "10h 25m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_gatewayofindia_20",
        "type": "Premium Sleeper Train",
        "agency": "Indian Railways",
        "name": "Express-2489",
        "cost": 98,
        "departureTime": "03:30 PM",
        "arrivalTime": "08:30 PM",
        "duration": "5h 17m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_gatewayofindia_20",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 4150,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_gatewayofindia_20",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 2075,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_gatewayofindia_20",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 70,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_gatewayofindia_20",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 169,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-291",
        "cost": 180,
        "departureTime": "11:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "4h 21m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_goldentemple_21",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-698",
        "cost": 321,
        "departureTime": "08:00 AM",
        "arrivalTime": "11:00 AM",
        "duration": "3h 29m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_goldentemple_21",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-9651",
        "cost": 72,
        "departureTime": "04:30 PM",
        "arrivalTime": "11:30 PM",
        "duration": "7h 37m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_goldentemple_21",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-1508",
        "cost": 125,
        "departureTime": "03:30 PM",
        "arrivalTime": "09:30 PM",
        "duration": "6h 47m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_goldentemple_21",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_goldentemple_21",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_goldentemple_21",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 90,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_goldentemple_21",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 216,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-884",
        "cost": 145,
        "departureTime": "11:00 AM",
        "arrivalTime": "05:00 PM",
        "duration": "6h 22m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_golgumbaz_22",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-556",
        "cost": 481,
        "departureTime": "10:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "3h 11m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_golgumbaz_22",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-3352",
        "cost": 58,
        "departureTime": "04:30 PM",
        "arrivalTime": "11:30 PM",
        "duration": "7h 48m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_golgumbaz_22",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-9167",
        "cost": 101,
        "departureTime": "02:30 PM",
        "arrivalTime": "01:30 AM (+1)",
        "duration": "11h 25m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_golgumbaz_22",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_golgumbaz_22",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_golgumbaz_22",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 72,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_golgumbaz_22",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 174,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-217",
        "cost": 181,
        "departureTime": "10:00 AM",
        "arrivalTime": "12:00 PM",
        "duration": "2h 29m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_hanginggardens_23",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-513",
        "cost": 367,
        "departureTime": "10:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "3h 50m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_hanginggardens_23",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-7689",
        "cost": 72,
        "departureTime": "02:30 PM",
        "arrivalTime": "02:30 AM (+1)",
        "duration": "12h 25m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_hanginggardens_23",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-7453",
        "cost": 126,
        "departureTime": "02:30 PM",
        "arrivalTime": "07:30 PM",
        "duration": "5h 27m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_hanginggardens_23",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_hanginggardens_23",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_hanginggardens_23",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 90,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_hanginggardens_23",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 217,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-783",
        "cost": 124,
        "departureTime": "06:00 AM",
        "arrivalTime": "09:00 AM",
        "duration": "3h 22m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_hawamahal_24",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-157",
        "cost": 489,
        "departureTime": "07:00 AM",
        "arrivalTime": "11:00 AM",
        "duration": "4h 14m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_hawamahal_24",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-4626",
        "cost": 49,
        "departureTime": "06:30 PM",
        "arrivalTime": "02:30 AM (+1)",
        "duration": "8h 45m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_hawamahal_24",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-6943",
        "cost": 86,
        "departureTime": "06:30 PM",
        "arrivalTime": "06:30 AM (+1)",
        "duration": "12h 12m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_hawamahal_24",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_hawamahal_24",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_hawamahal_24",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 62,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_hawamahal_24",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 148,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-133",
        "cost": 159,
        "departureTime": "07:00 AM",
        "arrivalTime": "09:00 AM",
        "duration": "2h 10m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_howrahbridge_25",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-735",
        "cost": 300,
        "departureTime": "10:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "3h 37m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_howrahbridge_25",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-5440",
        "cost": 63,
        "departureTime": "02:30 PM",
        "arrivalTime": "08:30 PM",
        "duration": "6h 48m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_howrahbridge_25",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-1204",
        "cost": 111,
        "departureTime": "04:30 PM",
        "arrivalTime": "10:30 PM",
        "duration": "6h 27m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_howrahbridge_25",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_howrahbridge_25",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_howrahbridge_25",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 79,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_howrahbridge_25",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 190,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-713",
        "cost": 118,
        "departureTime": "10:00 AM",
        "arrivalTime": "12:00 PM",
        "duration": "2h 50m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_islandpalace_26",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-159",
        "cost": 401,
        "departureTime": "09:00 AM",
        "arrivalTime": "11:00 AM",
        "duration": "2h 47m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_islandpalace_26",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-7209",
        "cost": 47,
        "departureTime": "04:30 PM",
        "arrivalTime": "03:30 AM (+1)",
        "duration": "11h 19m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_islandpalace_26",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-6465",
        "cost": 82,
        "departureTime": "06:30 PM",
        "arrivalTime": "02:30 AM (+1)",
        "duration": "8h 37m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_islandpalace_26",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_islandpalace_26",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_islandpalace_26",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 59,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_islandpalace_26",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 141,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-621",
        "cost": 156,
        "departureTime": "08:00 AM",
        "arrivalTime": "02:00 PM",
        "duration": "6h 43m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_itmaaduddaulahstomb_27",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-182",
        "cost": 335,
        "departureTime": "09:00 AM",
        "arrivalTime": "02:00 PM",
        "duration": "5h 35m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_itmaaduddaulahstomb_27",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-3274",
        "cost": 62,
        "departureTime": "04:30 PM",
        "arrivalTime": "10:30 PM",
        "duration": "6h 37m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_itmaaduddaulahstomb_27",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-5092",
        "cost": 109,
        "departureTime": "04:30 PM",
        "arrivalTime": "10:30 PM",
        "duration": "6h 15m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_itmaaduddaulahstomb_27",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_itmaaduddaulahstomb_27",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_itmaaduddaulahstomb_27",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 78,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_itmaaduddaulahstomb_27",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 187,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-242",
        "cost": 169,
        "departureTime": "09:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "4h 47m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_jagannathtemple_28",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-127",
        "cost": 444,
        "departureTime": "07:00 AM",
        "arrivalTime": "11:00 AM",
        "duration": "4h 50m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_jagannathtemple_28",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-3771",
        "cost": 67,
        "departureTime": "02:30 PM",
        "arrivalTime": "07:30 PM",
        "duration": "5h 24m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_jagannathtemple_28",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-4447",
        "cost": 118,
        "departureTime": "03:30 PM",
        "arrivalTime": "10:30 PM",
        "duration": "7h 20m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_jagannathtemple_28",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_jagannathtemple_28",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_jagannathtemple_28",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 84,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_jagannathtemple_28",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 202,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        ],
        "amenities": [
          "Free WiFi",
          "Shared Lounge",
          "24/7 Front Desk"
        ],
        "distanceToCenter": "3.8 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        ],
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
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
        "agency": "Emirates",
        "name": "Flight-339",
        "cost": 173,
        "departureTime": "10:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "5h 21m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-img_jahazmahal_29",
        "type": "Business",
        "agency": "Qatar Airways",
        "name": "Flight-224",
        "cost": 342,
        "departureTime": "09:00 AM",
        "arrivalTime": "12:00 PM",
        "duration": "3h 14m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-img_jahazmahal_29",
        "type": "Express Train",
        "agency": "EuroRail",
        "name": "Express-7964",
        "cost": 69,
        "departureTime": "03:30 PM",
        "arrivalTime": "03:30 AM (+1)",
        "duration": "12h 23m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "t2-img_jahazmahal_29",
        "type": "Premium Sleeper Train",
        "agency": "EuroRail",
        "name": "Express-8480",
        "cost": 121,
        "departureTime": "01:30 PM",
        "arrivalTime": "12:30 AM (+1)",
        "duration": "11h 25m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-img_jahazmahal_29",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-img_jahazmahal_29",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-img_jahazmahal_29",
        "type": "Standard Sedan",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 86,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
      },
      {
        "id": "c2-img_jahazmahal_29",
        "type": "Luxury SUV",
        "agency": "Zoomcar / Rental",
        "name": "Private Chauffeur",
        "cost": 207,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "Trunk Capacity"
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
        "name": "Sea Deck / Green Imperial / Blue Lagoon",
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        "name": "Bay Leaf Inn / ILE Bay / TSG Aura",
        "amenities": [
          "Free WiFi",
          "Restaurant",
          "Air Conditioning",
          "Breakfast Included"
        ],
        "distanceToCenter": "2.2 km from City Center"
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
        "name": "Mansha Residency / Sea Hill / Pearl Park",
        "amenities": [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Breakfast Included",
          "Gym"
        ],
        "distanceToCenter": "1.5 km from City Center"
      }
    ],
    "detailedTransport": [
      {
        "id": "f1-andaman",
        "type": "Economy (To Port Blair)",
        "agency": "Emirates",
        "name": "Flight-665",
        "cost": 8000,
        "departureTime": "08:00 AM",
        "arrivalTime": "02:00 PM",
        "duration": "6h 25m",
        "stops": "Non-stop",
        "baggage": "15kg Check-in, 7kg Cabin"
      },
      {
        "id": "f2-andaman",
        "type": "Business (To Port Blair)",
        "agency": "Qatar Airways",
        "name": "Flight-773",
        "cost": 18000,
        "departureTime": "09:00 AM",
        "arrivalTime": "01:00 PM",
        "duration": "4h 29m",
        "stops": "1 Stop",
        "baggage": "30kg Check-in, 7kg Cabin"
      },
      {
        "id": "t1-andaman",
        "type": "Standard Train",
        "agency": "National Rail",
        "name": "Exp-193",
        "cost": 80,
        "departureTime": "02:00 PM",
        "arrivalTime": "10:00 PM",
        "duration": "8h 00m",
        "stops": "Direct",
        "baggage": "Unlimited / Standard"
      },
      {
        "id": "b1-andaman",
        "type": "Luxury AC Sleeper",
        "agency": "City Connect Travels",
        "name": "Night Glide",
        "cost": 50,
        "departureTime": "10:00 PM",
        "arrivalTime": "07:00 AM (+1)",
        "duration": "9h 30m",
        "stops": "1 Stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "b2-andaman",
        "type": "Standard AC Bus",
        "agency": "Regional Transit",
        "name": "Day Cruiser",
        "cost": 25,
        "departureTime": "09:00 AM",
        "arrivalTime": "03:00 PM",
        "duration": "6h 00m",
        "stops": "Multi-stop",
        "baggage": "15kg Hand luggage"
      },
      {
        "id": "c1-andaman",
        "type": "Sedan",
        "agency": "Local Taxi",
        "name": "City Cab",
        "cost": 100,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "2 Medium Bags"
      },
      {
        "id": "c2-andaman",
        "type": "SUV",
        "agency": "Premium Rentals",
        "name": "Family Tourer",
        "cost": 180,
        "departureTime": "Flexible",
        "arrivalTime": "Flexible",
        "duration": "Point-to-Point",
        "stops": "Direct",
        "baggage": "4 Medium Bags"
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
        "id": "r1",
        "name": "The Amazing Andaman (Port Blair Spices",
        "rating": "4.7",
        "menuHighlights": [
          "Local Delicacy",
          "Signature Plate"
        ],
        "averageCost": 35,
        "category": "Traditional",
        "openingTime": "12:00 PM - 11:00 PM"
      },
      {
        "id": "r2",
        "name": "Skyline Bistro",
        "rating": "4.5",
        "menuHighlights": [
          "Continental Plate",
          "Mocktails"
        ],
        "averageCost": 50,
        "category": "Continental",
        "openingTime": "10:00 AM - 12:00 AM"
      },
      {
        "id": "r3",
        "name": "Street Bite Hub",
        "rating": "4.8",
        "menuHighlights": [
          "Street Food Assortment",
          "Quick Bites"
        ],
        "averageCost": 15,
        "category": "Street Food",
        "openingTime": "04:00 PM - 02:00 AM"
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
