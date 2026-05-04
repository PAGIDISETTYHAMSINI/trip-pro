import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, Wallet, Calendar, Plane, Building, Utensils, Activity, Search, Train, Car, Info, Users, Clock } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

export const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({
    destinationId: '',
    budget: '',
    days: '3'
  });
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);
  const [vibe, setVibe] = useState(50);
  const [isSurprise, setIsSurprise] = useState(false);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch available destinations
    axios.get('http://localhost:5000/api/destinations')
      .then(res => setDestinations(res.data))
      .catch(err => console.error("Error fetching destinations", err));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.destinationId || !formData.budget || !formData.days) {
      setError("Please fill all fields");
      return;
    }
    
    setLoading(true);
    setError('');
    setSearched(true);
    setIsSurprise(formData.destinationId === 'surprise');
    setVibe(50); // Reset vibe
    
    try {
      const endpoint = formData.destinationId === 'surprise' ? '/api/surprise-me' : '/api/itineraries';
      const params = formData.destinationId === 'surprise' ? { budget: formData.budget, days: formData.days } : formData;
      const response = await axios.get(`http://localhost:5000${endpoint}`, { params });
      setItineraries(response.data);
    } catch (err) {
      setError("Failed to fetch itineraries. Please ensure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const getSortedItineraries = () => {
    if (!itineraries) return [];
    let sorted = [...itineraries];
    if (vibe < 40) {
      // Experience: Sort by most activities
      sorted.sort((a, b) => b.activities.length - a.activities.length);
    } else if (vibe > 60) {
      // Luxury: Sort by highest hotel cost
      sorted.sort((a, b) => b.breakdown.hotel - a.breakdown.hotel);
    } else {
      // Balanced: Default sort by totalCost descending
      sorted.sort((a, b) => b.totalCost - a.totalCost);
    }
    return sorted;
  };

  const displayItineraries = getSortedItineraries();

  const handleBook = (itinerary) => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    // For Surprise Me, destination is dynamic. Otherwise, find it from dropdown.
    const dest = isSurprise 
      ? { id: itinerary.destinationId, name: itinerary.destinationName, currencySymbol: itinerary.currencySymbol }
      : destinations.find(d => d.id === formData.destinationId);

    navigate('/checkout', { 
      state: { 
        itinerary, 
        destination: dest,
        days: formData.days
      } 
    });
  };

  const selectedDestinationInfo = formData.destinationId === 'surprise' ? { name: "Surprise Destination", currencySymbol: formData.budget > 5000 ? '₹' : '$' } : destinations.find(d => d.id === formData.destinationId);

  return (
    <>
      <section className="hero container" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <h1 style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 900, background: 'linear-gradient(to right, var(--primary), #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Travel Smarter.<br/>Not Harder.
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-muted)' }}>
          The world's first manually-curated, pin-to-pin travel engine. No generic packages—just your budget, your dates, and your style.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
          <Link to="/build-trip" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: 'var(--primary)', boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)' }}>
            <Activity size={20} /> Build Custom Trip
          </Link>
          <a href="#featured" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: 'white', color: 'var(--text-main)', border: '1px solid var(--border)' }}>
            Explore Packages
          </a>
        </div>

        {/* Quick Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', marginBottom: '5rem', opacity: 0.7 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>50+</div>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', tracking: '0.1em' }}>Destinations</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>12k+</div>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', tracking: '0.1em' }}>Trips Planned</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>4.9/5</div>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', tracking: '0.1em' }}>User Rating</div>
          </div>
        </div>

        <div id="featured" style={{ marginTop: '6rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Signature Featured Packages</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { id: 'andaman', name: 'Amazing Andaman', price: '₹18,000', img: 'https://images.unsplash.com/photo-1589136142558-74611990c0a7?auto=format&fit=crop&q=80&w=600', tag: 'Bestseller' },
              { id: 'paris', name: 'Romance in Paris', price: '$1,200', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600', tag: 'Luxury' },
              { id: 'tokyo', name: 'Tokyo Explorer', price: '$1,500', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=600', tag: 'Modern' }
            ].map(pkg => (
              <div key={pkg.id} className="glass" style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }} onClick={() => navigate('/build-trip')}>
                <div style={{ height: '200px', background: `url(${pkg.img}) center/cover` }}>
                  <span style={{ margin: '1rem', display: 'inline-block', background: 'var(--primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 800 }}>{pkg.tag}</span>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>{pkg.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>Starting from {pkg.price} per person</p>
                  <button className="btn" style={{ width: '100%', background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)' }}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '8rem', maxWidth: '900px', margin: '8rem auto 0' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Intelligent Trip Planner</h2>
          <div className="planner-form-container glass" style={{ padding: '3rem' }}>
            <form className="planner-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label><MapPin size={16} style={{display:'inline', marginRight:'4px'}}/> Destination</label>
                <select 
                  className="input-field" 
                  name="destinationId" 
                  value={formData.destinationId} 
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a place...</option>
                  <option value="surprise">🎁 Surprise Me!</option>
                  {destinations.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label><Wallet size={16} style={{display:'inline', marginRight:'4px'}}/> Budget ({selectedDestinationInfo?.currencySymbol || '$'})</label>
                <input 
                  type="number" 
                  className="input-field" 
                  name="budget" 
                  placeholder={selectedDestinationInfo?.currencySymbol === '₹' ? "e.g. 50000" : "e.g. 1500"} 
                  value={formData.budget} 
                  onChange={handleChange}
                  min="10"
                  required
                />
              </div>

              <div className="form-group">
                <label><Calendar size={16} style={{display:'inline', marginRight:'4px'}}/> Duration (Days)</label>
                <input 
                  type="number" 
                  className="input-field" 
                  name="days" 
                  value={formData.days} 
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>

              <button type="submit" className="btn" style={{ height: '54px' }}>
                <Search size={20} /> Create Itinerary
              </button>
            </form>
            {error && <div className="error-message" style={{ marginTop: '1.5rem' }}>{error}</div>}
          </div>
        </div>
      </section>

      {searched && (
        <section className="results-section container">
          <div className="results-header">
            {loading ? (
              <div className="loading">
                <div className="spinner"></div>
                <h3>Finding the best options for you...</h3>
              </div>
            ) : itineraries.length > 0 ? (
              <>
                <h2>{isSurprise ? "Here is what your budget can do!" : `Curated Options for ${selectedDestinationInfo?.name}`}</h2>
                <p className="text-muted">We found {itineraries.length} ways to make your trip happen under {selectedDestinationInfo?.currencySymbol}{formData.budget}.</p>
                
                {!isSurprise && itineraries.length > 0 && (
                  <div className="vibe-slider-container glass" style={{ marginTop: '1.5rem', padding: '1.5rem', display: 'inline-block', width: '100%', maxWidth: '500px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      <span style={{ color: vibe < 40 ? 'var(--primary)' : 'var(--text-muted)' }}>More Experiences</span>
                      <span style={{ color: vibe >= 40 && vibe <= 60 ? 'var(--primary)' : 'var(--text-muted)' }}>Balanced</span>
                      <span style={{ color: vibe > 60 ? 'var(--primary)' : 'var(--text-muted)' }}>Luxury Comfort</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" max="100" 
                      value={vibe} 
                      onChange={(e) => setVibe(parseInt(e.target.value))}
                      style={{ width: '100%', cursor: 'pointer' }}
                    />
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                      Drag the slider to adjust your itinerary dynamically!
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                <h2>No options found</h2>
                <p className="text-muted">Try increasing your budget or reducing the number of days.</p>
              </>
            )}
          </div>

          {!loading && itineraries.length > 0 && (
            <div className="results-grid">
              {displayItineraries.map((itinerary, index) => (
                <div key={index} className="itinerary-card glass">
                  <div className="card-header">
                    <h3>{isSurprise ? itinerary.destinationName : `Option ${index + 1}`}</h3>
                    <div className="total-cost">{itinerary.currencySymbol}{itinerary.totalCost.toLocaleString()}</div>
                  </div>

                  <div className="cost-breakdown">
                    {/* Visual Progress Bar Breakdown */}
                    <div style={{ height: '8px', background: '#eee', borderRadius: '4px', display: 'flex', overflow: 'hidden', marginBottom: '1.5rem' }}>
                      <div style={{ width: `${(itinerary.breakdown.transport / itinerary.totalCost) * 100}%`, background: 'var(--primary)' }}></div>
                      <div style={{ width: `${(itinerary.breakdown.hotel / itinerary.totalCost) * 100}%`, background: '#8b5cf6' }}></div>
                      <div style={{ width: `${(itinerary.breakdown.food / itinerary.totalCost) * 100}%`, background: '#10b981' }}></div>
                      <div style={{ width: `${(itinerary.breakdown.activities / itinerary.totalCost) * 100}%`, background: '#f59e0b' }}></div>
                    </div>

                    <div className="breakdown-item">
                      <div className="item-info">
                        <div className="item-icon" style={{ background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)' }}>
                          {itinerary.transport.method === 'Train' ? <Train size={18} /> : itinerary.transport.method === 'Car' ? <Car size={18} /> : <Plane size={18} />}
                        </div>
                        <div>
                          <strong>{itinerary.transport.method}</strong>
                          <div style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>{itinerary.transport.type}</div>
                        </div>
                      </div>
                      <div style={{fontWeight: 600}}>{itinerary.currencySymbol}{itinerary.breakdown.transport.toLocaleString()}</div>
                    </div>

                    <div className="breakdown-item">
                      <div className="item-info">
                        <div className="item-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}><Building size={18} /></div>
                        <div>
                          <strong>Stay ({formData.days} nights)</strong>
                          <div style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>{itinerary.hotel.type}</div>
                        </div>
                      </div>
                      <div style={{fontWeight: 600}}>{itinerary.currencySymbol}{itinerary.breakdown.hotel.toLocaleString()}</div>
                    </div>

                    <div className="breakdown-item">
                      <div className="item-info">
                        <div className="item-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}><Utensils size={18} /></div>
                        <div>
                          <strong>Dining</strong>
                          <div style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>{itinerary.food.type}</div>
                        </div>
                      </div>
                      <div style={{fontWeight: 600}}>{itinerary.currencySymbol}{itinerary.breakdown.food.toLocaleString()}</div>
                    </div>

                    {itinerary.activities.length > 0 && (
                      <div className="breakdown-item" style={{borderBottom: 'none'}}>
                        <div className="item-info">
                          <div className="item-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}><Activity size={18} /></div>
                          <div>
                            <strong>Activities ({itinerary.activities.length})</strong>
                            <div style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>Smart Scheduled</div>
                          </div>
                        </div>
                        <div style={{fontWeight: 600}}>{itinerary.currencySymbol}{itinerary.breakdown.activities.toLocaleString()}</div>
                      </div>
                    )}
                  </div>

                  {itinerary.activities.length > 0 && (
                    <div className="activities-list" style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Clock size={16} color="var(--primary)" /> Smart Activity Schedule
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {itinerary.activities.map((act, i) => (
                          <div key={i} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px', borderLeft: '3px solid var(--primary)' }}>
                            <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>{act.name}</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                              <span>{act.suggestedTime || 'Flexible Time'}</span>
                              <span>{act.proximity || 'Near City Center'}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <button 
                    className="btn" 
                    style={{ width: '100%', marginTop: 'auto' }}
                    onClick={() => handleBook(itinerary)}
                  >
                    Book This Trip
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
};
