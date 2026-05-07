import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, ArrowRight, Zap, Globe, Star, Heart, Compass, Waves, Mountain, Camera, Utensils, Music, Activity, Users, Calendar, TrendingUp, ShieldCheck, Sun, Info, Navigation, Fuel, Coffee, Camera as PhotoIcon, Sparkles } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All', icon: <Globe size={18} /> },
  { id: 'hill', label: 'Hill Stations', icon: <Mountain size={18} /> },
  { id: 'beach', label: 'Beaches', icon: <Waves size={18} /> },
  { id: 'adventure', label: 'Adventure', icon: <Activity size={18} /> },
  { id: 'spiritual', label: 'Spiritual', icon: <Zap size={18} /> },
  { id: 'cultural', label: 'Cultural', icon: <Camera size={18} /> },
  { id: 'food', label: 'Foodie', icon: <Utensils size={18} /> },
];

const destinations = [
  // Hill Stations
  { id: 'manali', name: 'Manali', category: 'hill', state: 'Himachal Pradesh', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800', rating: 4.8, price: '₹12,000', tags: ['Snow', 'Trekking', 'Winter'] },
  { id: 'ooty', name: 'Ooty', category: 'hill', state: 'Tamil Nadu', image: 'https://images.unsplash.com/photo-1590496793929-36417d3485ce?auto=format&fit=crop&q=80&w=800', rating: 4.6, price: '₹9,000', tags: ['Tea Gardens', 'Nature', 'Couples'] },
  { id: 'munnar', name: 'Munnar', category: 'hill', state: 'Kerala', image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800', rating: 4.9, price: '₹15,000', tags: ['Lush Green', 'Honeymoon', 'Calm'], isEco: true },
  { id: 'coorg', name: 'Coorg', category: 'hill', state: 'Karnataka', image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800', rating: 4.7, price: '₹11,000', tags: ['Coffee', 'Mist', 'Waterfalls'], isEco: true },
  
  // Beaches
  { id: 'goa', name: 'Goa', category: 'beach', state: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800', rating: 4.7, price: '₹8,000', tags: ['Party', 'Sunset', 'Seafood'] },
  { id: 'gokarna', name: 'Gokarna', category: 'beach', state: 'Karnataka', image: 'https://images.unsplash.com/photo-1582208041053-ddd614bca61e?auto=format&fit=crop&q=80&w=800', rating: 4.5, price: '₹6,000', tags: ['Peaceful', 'Camping', 'Trekking'] },
  { id: 'varkala', name: 'Varkala', category: 'beach', state: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800', rating: 4.8, price: '₹10,000', tags: ['Cliffs', 'Yoga', 'Surfing'], isEco: true },

  // Adventure
  { id: 'ladakh', name: 'Ladakh', category: 'adventure', state: 'Ladakh', image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&q=80&w=800', rating: 4.9, price: '₹25,000', tags: ['Bike Trip', 'Lakes', 'Rugged'] },
  { id: 'spiti', name: 'Spiti Valley', category: 'adventure', state: 'Himachal Pradesh', image: 'https://images.unsplash.com/photo-1518005020252-218a24fb8227?auto=format&fit=crop&q=80&w=800', rating: 4.8, price: '₹18,000', tags: ['Remote', 'Monasteries', 'Stunning'], isEco: true },
  { id: 'rishikesh', name: 'Rishikesh', category: 'adventure', state: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&q=80&w=800', rating: 4.6, price: '₹7,000', tags: ['Rafting', 'Spiritual', 'Camping'] },
  
  // Spiritual
  { id: 'varanasi', name: 'Varanasi', category: 'spiritual', state: 'Uttar Pradesh', image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=800', rating: 4.8, price: '₹5,000', tags: ['Ganga Aarti', 'Ancient', 'History'] },
  { id: 'tirupati', name: 'Tirupati', category: 'spiritual', state: 'Andhra Pradesh', image: 'https://images.unsplash.com/photo-1590050752117-23a9cadb074d?auto=format&fit=crop&q=80&w=800', rating: 4.9, price: '₹4,000', tags: ['Temples', 'Devotion', 'Clean'] },
];

const itineraries = [
  { id: 'kerala-7d', title: 'Kerala: The Backwater Circuit', duration: '7 Days', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800', price: '₹35,000', route: 'Kochi → Munnar → Alleppey' },
  { id: 'ladakh-bike', title: 'Ladakh: The Ultimate Bike Trip', duration: '10 Days', image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&q=80&w=800', price: '₹45,000', route: 'Leh → Nubra → Pangong' },
  { id: 'rajasthan-heritage', title: 'Rajasthan: Royal Heritage', duration: '6 Days', image: 'https://images.unsplash.com/photo-1599661046289-e31887846eac?auto=format&fit=crop&q=80&w=800', price: '₹28,000', route: 'Jaipur → Jodhpur → Udaipur' },
];

export const ExploreIndia = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('summer');
  const navigate = useNavigate();

  const filteredDestinations = destinations.filter(d => 
    (activeCategory === 'all' || d.category === activeCategory) &&
    (d.name.toLowerCase().includes(searchTerm.toLowerCase()) || d.state.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const seasons = [
    { id: 'summer', label: 'Summer (Mar - Jun)', icon: <Sun size={16} /> },
    { id: 'monsoon', label: 'Monsoon (Jul - Sep)', icon: <Waves size={16} /> },
    { id: 'winter', label: 'Winter (Oct - Feb)', icon: <Mountain size={16} /> },
  ];

  const seasonRecs = {
    summer: ['Manali', 'Leh', 'Munnar', 'Coorg', 'Sikkim'],
    monsoon: ['Malshej Ghat', 'Cherrapunji', 'Coorg', 'Lonavala', 'Kerala'],
    winter: ['Goa', 'Rajasthan', 'Auli', 'Rann of Kutch', 'Andaman'],
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      {/* HERO */}
      <section style={{ 
        height: '65vh', 
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1524492707947-2f8546b5239a?auto=format&fit=crop&q=80&w=1600")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        padding: '0 1rem'
      }}>
        <div className="fade-in container">
          <div className="badge badge-primary mb-3" style={{ background: 'rgba(37,99,235,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
            <Zap size={12} fill="currentColor" /> TRAVEL DISCOVERY
          </div>
          <h1 className="display-3 fw-black mb-2 text-white" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>Incredible <span className="text-primary">India</span></h1>
          <p className="lead opacity-75 mb-5 mx-auto" style={{ maxWidth: '800px' }}>Discover hidden gems, spiritual wonders, and breathtaking landscapes across the subcontinent.</p>
          
          <div className="glass mx-auto mb-5 p-2 d-flex flex-column flex-md-row gap-2" style={{ maxWidth: '700px' }}>
            <div className="d-flex align-items-center gap-3 flex-grow-1 px-3 py-2">
              <Globe size={20} className="text-muted" />
              <input 
                type="text" 
                placeholder="Search destinations..." 
                className="bg-transparent border-0 text-white w-100 outline-none fs-5"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="btn-startup px-4 py-2">Explore AI Picks</button>
          </div>
          
          <div className="d-flex gap-3 justify-content-center flex-wrap">
             {[
               { label: 'Trending', val: 'Ladakh' },
               { label: 'Hot Pick', val: 'Varkala' },
               { label: 'Hidden Gem', val: 'Spiti' },
             ].map((t, i) => (
               <div key={i} className="d-flex align-items-center gap-2 bg-white bg-opacity-10 px-3 py-2 rounded-pill border border-white border-opacity-20">
                 <TrendingUp size={14} className="text-primary" />
                 <span className="small fw-bold">{t.label}: <span className="text-primary">{t.val}</span></span>
               </div>
             ))}
             <button 
               onClick={() => {
                 const randomDest = destinations[Math.floor(Math.random() * destinations.length)];
                 alert(`🔮 Mystery Unveiled: We're taking you to ${randomDest.name}!`);
                 navigate('/build-trip', { state: { destination: randomDest.name } });
               }}
               className="btn bg-secondary text-white border-0 px-4 rounded-pill fw-black pulse"
             >
               <Sparkles size={16} fill="#fff" className="me-2" /> Surprise Me
             </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <div className="container position-relative" style={{ marginTop: '-2rem', zIndex: 10 }}>
        <div className="glass-card p-2 d-flex gap-2 justify-content-start justify-content-md-center overflow-auto no-scrollbar border-0 shadow-lg">
          {categories.map(cat => (
            <button 
              key={cat.id} 
              className={`category-chip flex-shrink-0 ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* DESTINATION GRID */}
      <section className="container py-5 mt-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
          <div>
            <h2 className="fw-black display-6">Popular Destinations</h2>
            <p className="text-muted lead small">Top picks based on user ratings and AI trends.</p>
          </div>
          <Link to="/build-trip" className="nav-link fw-bold text-primary">View All Spots <ArrowRight size={18} /></Link>
        </div>

        <div className="row g-4">
          {filteredDestinations.map(dest => (
            <div key={dest.id} className="col-sm-6 col-lg-4">
              <div className="trip-card h-100 glass-hover border-0 overflow-hidden shadow-sm">
                <div className="cinematic-card position-relative" style={{ aspectRatio: '16/10' }}>
                  <img src={dest.image} alt={dest.name} className="w-100 h-100 object-fit-cover" />
                  <div className="cinematic-overlay p-3">
                    <div className="d-flex justify-content-between align-items-start">
                       <div className="d-flex flex-column gap-2">
                          <div className="badge bg-white text-primary fw-black small">{dest.state}</div>
                          {dest.isEco && (
                            <div className="badge bg-success text-white small">
                              <Compass size={10} className="me-1" /> ECO-FRIENDLY
                            </div>
                          )}
                       </div>
                       <button className="bg-white bg-opacity-25 border-0 rounded-circle p-2 text-white"><Heart size={18} /></button>
                    </div>
                    <div className="mt-auto">
                      <h3 className="fw-black fs-4 text-white m-0">{dest.name}</h3>
                      <div className="d-flex align-items-center gap-2 text-white small opacity-75 mt-1">
                        <div className="text-warning d-flex align-items-center gap-1">
                          <Star size={14} fill="currentColor" /> {dest.rating}
                        </div>
                        <span>·</span>
                        <span>Starts from {dest.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {dest.tags.map(tag => (
                      <span key={tag} className="small fw-black text-muted bg-light px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="btn-startup w-100 justify-content-center py-3" onClick={() => navigate('/build-trip', { state: { destination: dest.name } })}>
                    Plan with AI Assistant
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEASONAL RECOMMENDATIONS */}
      <section className="bg-white border-top border-bottom py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="badge badge-primary mb-3">AI Season Planner</div>
              <h2 className="fw-black display-5 mb-3">Where to travel in <span className="text-gradient">India</span>?</h2>
              <p className="lead text-muted mb-5">Our AI analyzes weather patterns, festivals, and crowd density to suggest the best places for every season.</p>
              
              <div className="d-flex flex-column gap-3">
                {seasons.map(season => (
                  <div 
                    key={season.id}
                    className={`card p-3 border-2 cursor-pointer transition ${selectedSeason === season.id ? 'border-primary bg-primary-soft' : 'border-light'}`}
                    onClick={() => setSelectedSeason(season.id)}
                  >
                    <div className="d-flex align-items-center gap-4">
                      <div className={`p-3 rounded-xl ${selectedSeason === season.id ? 'bg-primary text-white' : 'bg-light text-muted'}`}>
                        {season.icon}
                      </div>
                      <div className="flex-grow-1">
                        <div className="fw-black fs-5">{season.label}</div>
                        <div className="small text-muted mt-1">Recommended: {seasonRecs[season.id].join(', ')}</div>
                      </div>
                      {selectedSeason === season.id && <ArrowRight size={20} className="text-primary" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="glass-card p-5 text-center border-0" style={{ background: 'linear-gradient(135deg, var(--primary-soft), #fff)' }}>
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 shadow-lg" style={{ width: '100px', height: '100px' }}>
                  <Zap size={48} fill="currentColor" />
                </div>
                <h3 className="fw-black fs-2 mb-3">AI Smart Planner</h3>
                <p className="text-muted lead small mb-5">Get a fully customized itinerary for {selectedSeason} in seconds. We handle flights, hotels, and local transit with optimized pricing.</p>
                <Link to="/build-trip" className="btn-startup w-100 py-3 fs-5 justify-content-center">
                  Start AI Planning Now <ArrowRight size={18} />
                </Link>
                <div className="d-flex gap-4 justify-content-center mt-5 opacity-50">
                   <div className="small fw-black d-flex align-items-center gap-1"><Navigation size={14}/> Optimized</div>
                   <div className="small fw-black d-flex align-items-center gap-1"><ShieldCheck size={14}/> Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREBUILT ITINERARIES */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-black display-6">Popular Indian Circuits</h2>
          <p className="text-muted mt-2">Hand-crafted, battle-tested itineraries for the perfect Indian experience.</p>
        </div>

        <div className="row g-4">
          {itineraries.map(itin => (
            <div key={itin.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm overflow-hidden glass-hover">
                <div className="position-relative" style={{ height: '220px' }}>
                  <img src={itin.image} alt={itin.title} className="w-100 h-100 object-fit-cover" />
                  <div className="badge bg-white text-success fw-black position-absolute top-0 start-0 m-3 shadow-sm">
                    {itin.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="fw-black fs-5 mb-2">{itin.title}</h4>
                  <div className="d-flex align-items-center gap-2 text-muted small mb-4">
                    <TrendingUp size={16} /> {itin.route}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="fs-3 fw-black text-primary lh-1">{itin.price}</div>
                      <div className="small text-muted fw-bold mt-1 opacity-50">PER PERSON</div>
                    </div>
                    <button className="btn-startup px-4 py-2 small">View Detail</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="container py-5 mb-5">
         <div className="glass-card p-5 text-center border-0 shadow-xl" style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: '#fff' }}>
            <h2 className="fw-black display-5 mb-3">Ready for your Indian Adventure?</h2>
            <p className="lead opacity-75 mb-5 mx-auto" style={{ maxWidth: '600px' }}>Let our AI build you a personalized itinerary that hits all the right spots, from hidden gems to iconic landmarks.</p>
            <Link to="/build-trip" className="btn-startup bg-white text-primary border-0 px-5 py-3 fs-5">
                Start AI Planner <Zap size={18} fill="currentColor" />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default ExploreIndia;
