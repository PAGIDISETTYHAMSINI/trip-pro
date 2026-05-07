import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, ArrowRight, Zap, Globe, Star, Heart, Compass, Waves, Mountain, Camera, Utensils, Music, Activity, Users, Calendar, TrendingUp, ShieldCheck, Sun, Info, Navigation, Fuel, Coffee, Camera as PhotoIcon } from 'lucide-react';

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
    <div style={{ background: 'var(--slate-50)', minHeight: '100vh', paddingBottom: '5rem' }}>
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
        padding: '0 1.25rem'
      }}>
        <div className="fade-in">
          <div className="badge badge-primary mb-3" style={{ background: 'rgba(37,99,235,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
            <Zap size={12} fill="currentColor" /> TRAVEL DISCOVERY
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1rem', textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>Incredible <span className="text-primary">India</span></h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '800px' }}>Discover hidden gems, spiritual wonders, and breathtaking landscapes across the subcontinent.</p>
          
          <div className="glass" style={{ padding: '0.5rem', maxWidth: '700px', margin: '0 auto', display: 'flex', gap: '0.5rem', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, paddingLeft: '1rem' }}>
              <Globe size={20} style={{ color: 'var(--slate-400)' }} />
              <input 
                type="text" 
                placeholder="Search destinations (e.g. Goa, Munnar...)" 
                style={{ border: 'none', background: 'transparent', width: '100%', padding: '0.75rem 0', fontSize: '1.1rem', outline: 'none', color: '#fff' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="btn-startup" style={{ padding: '0.75rem 2rem' }}>Explore AI Picks</button>
          </div>
          
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
             {[
               { label: 'Trending', val: 'Ladakh' },
               { label: 'Hot Pick', val: 'Varkala' },
               { label: 'Hidden Gem', val: 'Spiti' },
             ].map((t, i) => (
               <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255,255,255,0.2)' }}>
                 <TrendingUp size={14} className="text-primary" />
                 <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{t.label}: <span style={{ color: 'var(--primary)' }}>{t.val}</span></span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <div className="container" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 10 }}>
        <div className="glass-card" style={{ padding: '0.75rem', overflowX: 'auto', display: 'flex', gap: '0.75rem', justifyContent: 'center', whiteSpace: 'nowrap', border: 'none' }}>
          {categories.map(cat => (
            <button 
              key={cat.id} 
              className={`category-chip ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* DESTINATION GRID */}
      <section className="container section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontWeight: 900, fontSize: '2.5rem' }}>Popular Destinations</h2>
            <p style={{ color: 'var(--slate-500)', fontSize: '1.1rem' }}>Top picks based on user ratings and AI trends.</p>
          </div>
          <Link to="/build-trip" className="btn nav-link" style={{ fontWeight: 700, fontSize: '1rem' }}>View All Spots <ArrowRight size={18} /></Link>
        </div>

        <div className="grid-stack">
          {filteredDestinations.map(dest => (
            <div key={dest.id} className="trip-card glass-hover" style={{ border: 'none' }}>
              <div className="cinematic-card">
                <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="cinematic-overlay">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <div className="badge badge-primary" style={{ background: 'rgba(255,255,255,0.9)', color: 'var(--primary)' }}>{dest.state}</div>
                        {dest.isEco && (
                          <div className="badge badge-success" style={{ background: 'rgba(34,197,94,0.9)', color: '#fff', fontSize: '0.65rem' }}>
                            <Compass size={10} /> ECO-FRIENDLY
                          </div>
                        )}
                     </div>
                     <button className="glass" style={{ padding: '0.5rem', borderRadius: '50%', border: 'none', color: '#fff' }}><Heart size={18} /></button>
                  </div>
                  <div style={{ marginTop: 'auto' }}>
                    <h3 style={{ fontWeight: 900, fontSize: '1.6rem', color: '#fff', marginBottom: '0.25rem' }}>{dest.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '0.9rem', opacity: 0.9 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--warning)' }}>
                        <Star size={14} fill="currentColor" /> {dest.rating}
                      </div>
                      <span>·</span>
                      <span>Starts from {dest.price}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '1.5rem', background: '#fff' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {dest.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--slate-500)', background: 'var(--slate-100)', padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-md)', textTransform: 'uppercase' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="btn-startup w-100" style={{ justifyContent: 'center', padding: '0.9rem' }} onClick={() => navigate('/build-trip', { state: { destination: dest.name } })}>
                  Plan with AI Assistant
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEASONAL RECOMMENDATIONS */}
      <section style={{ background: 'var(--white)', borderTop: '1px solid var(--slate-200)', borderBottom: '1px solid var(--slate-200)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="badge badge-primary mb-3">AI Season Planner</div>
              <h2 style={{ fontWeight: 900, fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Where to travel in <span className="text-gradient">India</span>?</h2>
              <p style={{ color: 'var(--slate-500)', marginBottom: '3rem', fontSize: '1.15rem', lineHeight: 1.7 }}>Our AI analyzes weather patterns, festivals, and crowd density to suggest the best places for every season.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {seasons.map(season => (
                  <button 
                    key={season.id}
                    className={`card ${selectedSeason === season.id ? 'border-primary shadow-md' : ''}`}
                    onClick={() => setSelectedSeason(season.id)}
                    style={{ 
                      padding: '1.5rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1.25rem', 
                      textAlign: 'left',
                      background: selectedSeason === season.id ? 'var(--primary-soft)' : 'var(--white)',
                      cursor: 'pointer',
                      transition: 'var(--transition)'
                    }}
                  >
                    <div style={{ 
                      background: selectedSeason === season.id ? 'var(--primary)' : 'var(--slate-100)', 
                      color: selectedSeason === season.id ? '#fff' : 'var(--slate-500)',
                      padding: '0.875rem',
                      borderRadius: 'var(--radius-xl)'
                    }}>
                      {season.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{season.label}</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--slate-500)', marginTop: '0.2rem' }}>Recommended: {seasonRecs[season.id].join(', ')}</div>
                    </div>
                    {selectedSeason === season.id && <ArrowRight size={20} className="text-primary" />}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="glass-card" style={{ padding: '4rem 3rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--primary-soft), #fff)', border: 'none' }}>
              <div style={{ width: '120px', height: '120px', background: 'var(--primary)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', boxShadow: '0 10px 30px rgba(37,99,235,0.3)' }}>
                <Zap size={56} fill="currentColor" />
              </div>
              <h3 style={{ fontWeight: 900, fontSize: '2rem', marginBottom: '1.25rem' }}>AI Smart Planner</h3>
              <p style={{ color: 'var(--slate-500)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Get a fully customized itinerary for {selectedSeason} in seconds. We handle flights, hotels, and local transit with optimized pricing.</p>
              <Link to="/build-trip" className="btn-startup w-100" style={{ justifyContent: 'center', padding: '1.25rem', fontSize: '1.1rem' }}>
                Start AI Planning Now <ArrowRight size={18} />
              </Link>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', opacity: 0.6 }}>
                 <div style={{ fontSize: '0.8rem', fontWeight: 800 }}><Navigation size={14} className="me-1"/> Optimized Routes</div>
                 <div style={{ fontSize: '0.8rem', fontWeight: 800 }}><ShieldCheck size={14} className="me-1"/> Best Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREBUILT ITINERARIES */}
      <section className="container section">
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <h2 style={{ fontWeight: 900, fontSize: '2.75rem' }}>Popular Indian Circuits</h2>
          <p style={{ color: 'var(--slate-500)', marginTop: '1rem', fontSize: '1.1rem' }}>Hand-crafted, battle-tested itineraries for the perfect Indian experience.</p>
        </div>

        <div className="grid-stack">
          {itineraries.map(itin => (
            <div key={itin.id} className="card glass-hover" style={{ overflow: 'hidden', border: 'none' }}>
              <div style={{ position: 'relative', height: '220px' }}>
                <img src={itin.image} alt={itin.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="badge badge-success" style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#fff', color: 'var(--success)', fontWeight: 800 }}>
                  {itin.duration}
                </div>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <h4 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.75rem' }}>{itin.title}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--slate-400)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  <TrendingUp size={16} /> {itin.route}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>{itin.price}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', fontWeight: 700, marginTop: '0.25rem' }}>PER PERSON</div>
                  </div>
                  <button className="btn-startup" style={{ padding: '0.75rem 1.5rem' }}>View Detail Plan</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROAD TRIP SECTION */}
      <section style={{ background: 'var(--slate-900)', color: '#fff', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', opacity: 0.05 }}>
           <Navigation size={400} />
        </div>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div className="glass-card" style={{ padding: '3rem', border: 'none', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}>
               <h3 style={{ fontWeight: 900, fontSize: '2rem', marginBottom: '2rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <Navigation className="text-primary" /> Epic Road Trips
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { route: 'Hyderabad → Goa', dist: '650 km', time: '14 hrs', fuel: '₹6,500' },
                    { route: 'Bangalore → Munnar', dist: '470 km', time: '10 hrs', fuel: '₹4,800' },
                    { route: 'Delhi → Manali', dist: '530 km', time: '12 hrs', fuel: '₹5,500' },
                    { route: 'Chennai → Pondy', dist: '150 km', time: '3 hrs', fuel: '₹1,500' },
                  ].map((route, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.07)', transition: 'var(--transition)', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: 'var(--radius-md)', opacity: 0.8 }}>
                          <Fuel size={16} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>{route.route}</div>
                          <div style={{ fontSize: '0.85rem', opacity: 0.5, marginTop: '0.2rem' }}>{route.dist} · {route.time} drive</div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div className="text-primary fw-black fs-5">{route.fuel}</div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.4 }}>EST. FUEL</div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
            <div>
              <div className="badge badge-primary mb-3" style={{ background: 'var(--primary)', color: '#fff' }}>NEW FEATURE</div>
              <h2 style={{ fontWeight: 900, fontSize: '3.25rem', marginBottom: '1.75rem', color: '#fff', lineHeight: 1.1 }}>The Ultimate <span className="text-primary">Road Trip</span> Planner</h2>
              <p style={{ opacity: 0.7, marginBottom: '3rem', fontSize: '1.2rem', lineHeight: 1.7 }}>
                Plan your drive with precision. Fuel costs, pit stops, scenic viewpoints, and EV charging stations — all calculated by AI for the smoothest journey.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}><Zap size={14} /></div>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', opacity: 0.9 }}>Route Optimization</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}><Coffee size={14} /></div>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', opacity: 0.9 }}>Best Food Stops</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}><Fuel size={14} /></div>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', opacity: 0.9 }}>Live Fuel Tracking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}><Info size={14} /></div>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', opacity: 0.9 }}>Safety Alerts</span>
                </div>
              </div>
              <button className="btn-startup" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem' }}>Launch Road Planner</button>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURAL DISCOVERY */}
      <section className="container section">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontWeight: 900, fontSize: '3rem' }}>Cultural & <span className="text-gradient">Street Food</span></h2>
          <p style={{ color: 'var(--slate-500)', marginTop: '1rem', fontSize: '1.15rem' }}>Taste the soul of India with our expert-curated local food and festival guide.</p>
        </div>

        <div className="grid-stack">
          {[
            { city: 'Varanasi', dish: 'Blue Lassi & Tamatar Chaat', festival: 'Dev Deepawali', image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=800', vibe: 'Ancient & Sacred' },
            { city: 'Hyderabad', dish: 'Dum Biryani & Irani Chai', festival: 'Ganesh Chaturthi', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800', vibe: 'Royal & Spiced' },
            { city: 'Amritsar', dish: 'Kulcha & Kesar da Dhaba', festival: 'Baisakhi', image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80&w=800', vibe: 'Soulful & Devout' },
            { city: 'Kolkata', dish: 'Kathi Rolls & Rosogolla', festival: 'Durga Puja', image: 'https://images.unsplash.com/photo-1558431382-27e39cbef4bc?auto=format&fit=crop&q=80&w=800', vibe: 'Artistic & Sweet' },
          ].map((item, i) => (
            <div key={i} className="trip-card glass-hover" style={{ padding: '1.25rem', border: 'none' }}>
              <div style={{ position: 'relative', height: '200px', marginBottom: '1.25rem', overflow: 'hidden', borderRadius: 'var(--radius-xl)' }}>
                 <img src={item.image} alt={item.city} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 <div className="badge badge-primary" style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.9)', color: 'var(--primary)', fontWeight: 800 }}>{item.vibe}</div>
              </div>
              <h4 style={{ fontWeight: 900, fontSize: '1.3rem', marginBottom: '0.75rem' }}>{item.city}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--slate-600)' }}>
                  <Utensils size={14} className="text-primary" /> <strong>Eat:</strong> {item.dish}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--slate-600)' }}>
                  <PhotoIcon size={14} className="text-secondary" /> <strong>Event:</strong> {item.festival}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INDIA TRAVEL REELS */}
      <section style={{ background: 'var(--slate-50)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontWeight: 900, fontSize: '2.5rem' }}>Travel <span className="text-gradient">Reels</span></h2>
              <p style={{ color: 'var(--slate-500)' }}>Short, immersive glimpses into India's most stunning locales.</p>
            </div>
            <button className="btn" style={{ fontWeight: 700 }}>Post your reel</button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
             {[
               { title: 'Morning in Munnar', views: '12k', img: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=600' },
               { title: 'Goa Sunsets', views: '45k', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=600' },
               { title: 'Varanasi Ghats', views: '28k', img: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=600' },
               { title: 'Ladakh Peaks', views: '67k', img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&q=80&w=600' },
             ].map((reel, i) => (
               <div key={i} className="cinematic-card" style={{ height: '400px', cursor: 'pointer' }}>
                  <img src={reel.img} alt={reel.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="cinematic-overlay" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.9))' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <Zap size={12} fill="#fff" />
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>LIVE STORY</span>
                     </div>
                     <h4 style={{ color: '#fff', fontWeight: 900, fontSize: '1.1rem' }}>{reel.title}</h4>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', opacity: 0.8 }}>
                        <Users size={12} /> {reel.views} watching
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="container section" style={{ paddingBottom: '2rem' }}>
         <div className="glass-card" style={{ padding: '4rem', textAlign: 'center', border: 'none', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: '#fff' }}>
            <h2 style={{ fontWeight: 900, fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready for your Indian Adventure?</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Let our AI build you a personalized itinerary that hits all the right spots, from hidden gems to iconic landmarks.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
               <Link to="/build-trip" className="btn-startup" style={{ background: '#fff', color: 'var(--primary)', padding: '1rem 3rem', fontSize: '1.1rem' }}>
                  Start AI Planner <Zap size={18} fill="currentColor" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

const Search = ({ size, style }) => <Globe size={size} style={style} />; // Small proxy for search if needed

export default ExploreIndia;
