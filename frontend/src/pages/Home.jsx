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
    axios.get('https://trip-pro.onrender.com/api/destinations')
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
      const response = await axios.get(`https://trip-pro.onrender.com${endpoint}`, { params });
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
      {/* Hero Section */}
      <section className="container py-5 text-center">
        <div className="row justify-content-center py-lg-5">
          <div className="col-lg-10">
            <h1 className="display-2 fw-black mb-3 lh-1" style={{ background: 'linear-gradient(to right, var(--primary), #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Travel Smarter.<br/>Not Harder.
            </h1>
            <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '750px' }}>
              The world's first manually-curated, pin-to-pin travel engine. No generic packages—just your budget, your dates, and your style.
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
              <Link to="/build-trip" className="btn-primary-custom px-5 py-3">
                <Activity size={20} /> Build Custom Trip
              </Link>
              <a href="#featured" className="btn btn-outline-dark px-5 py-3 rounded-4 fw-bold">
                Explore Packages
              </a>
            </div>

            {/* Quick Stats */}
            <div className="row g-4 justify-content-center opacity-75 mt-5">
              <div className="col-4 col-md-2">
                <div className="fw-black h3 mb-0">50+</div>
                <div className="small text-uppercase tracking-wider">Destinations</div>
              </div>
              <div className="col-4 col-md-2 border-start border-end">
                <div className="fw-black h3 mb-0">12k+</div>
                <div className="small text-uppercase tracking-wider">Trips</div>
              </div>
              <div className="col-4 col-md-2">
                <div className="fw-black h3 mb-0">4.9/5</div>
                <div className="small text-uppercase tracking-wider">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Packages */}
        <div id="featured" className="mt-5 pt-5">
          <h2 className="fw-black text-center mb-5">Signature Featured Packages</h2>
          <div className="row g-4">
            {[
              { id: 'andaman', name: 'Amazing Andaman', price: '₹18,000', img: 'https://images.unsplash.com/photo-1589136142558-74611990c0a7?auto=format&fit=crop&q=80&w=600', tag: 'Bestseller' },
              { id: 'paris', name: 'Romance in Paris', price: '$1,200', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600', tag: 'Luxury' },
              { id: 'tokyo', name: 'Tokyo Explorer', price: '$1,500', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=600', tag: 'Modern' }
            ].map(pkg => (
              <div key={pkg.id} className="col-lg-4 col-md-6 text-start">
                <div className="glass glass-hover h-100 p-0 overflow-hidden cursor-pointer" onClick={() => navigate('/build-trip')}>
                  <div style={{ height: '220px', background: `url(${pkg.img}) center/cover` }}>
                    <span className="m-3 badge bg-primary rounded-pill fw-black px-3 py-2 fs-7">{pkg.tag}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="fw-bold mb-2">{pkg.name}</h3>
                    <p className="text-muted small mb-4">Starting from <span className="fw-bold text-primary">{pkg.price}</span> per person</p>
                    <button className="btn btn-outline-primary w-100 rounded-3 fw-bold py-2">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Planner Form */}
        <div className="mt-5 pt-5 mx-auto" style={{ maxWidth: '1000px' }}>
          <h2 className="fw-black text-center mb-4">Intelligent Trip Planner</h2>
          <div className="glass p-4 p-md-5 shadow-lg">
            <form className="row g-3 align-items-end" onSubmit={handleSubmit}>
              <div className="col-lg-4 col-md-6 text-start">
                <label className="form-label small fw-bold text-muted mb-2"><MapPin size={16} className="me-1"/> Destination</label>
                <select 
                  className="form-select py-3 rounded-3" 
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

              <div className="col-lg-3 col-md-6 text-start">
                <label className="form-label small fw-bold text-muted mb-2"><Wallet size={16} className="me-1"/> Budget ({selectedDestinationInfo?.currencySymbol || '$'})</label>
                <input 
                  type="number" 
                  className="form-control py-3 rounded-3" 
                  name="budget" 
                  placeholder={selectedDestinationInfo?.currencySymbol === '₹' ? "e.g. 50000" : "e.g. 1500"} 
                  value={formData.budget} 
                  onChange={handleChange}
                  min="10"
                  required
                />
              </div>

              <div className="col-lg-2 col-md-6 text-start">
                <label className="form-label small fw-bold text-muted mb-2"><Calendar size={16} className="me-1"/> Days</label>
                <input 
                  type="number" 
                  className="form-control py-3 rounded-3" 
                  name="days" 
                  value={formData.days} 
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>

              <div className="col-lg-3 col-md-6">
                <button type="submit" className="btn-primary-custom w-100 py-3 rounded-3">
                  <Search size={20} /> Create Plan
                </button>
              </div>
            </form>
            {error && <div className="alert alert-danger mt-4 rounded-3 py-2 text-center">{error}</div>}
          </div>
        </div>
      </section>

      {searched && (
        <section className="container py-5">
          <div className="text-center mb-5">
            {loading ? (
              <div className="py-5">
                <div className="spinner-border text-primary mb-3" style={{ width: '3rem', height: '3rem' }}></div>
                <h3 className="fw-black">Finding the best options...</h3>
              </div>
            ) : itineraries.length > 0 ? (
              <>
                <h2 className="fw-black mb-2">{isSurprise ? "Here is what your budget can do!" : `Curated Options for ${selectedDestinationInfo?.name}`}</h2>
                <p className="text-muted">We found {itineraries.length} ways to make your trip happen under {selectedDestinationInfo?.currencySymbol}{formData.budget}.</p>
                
                {!isSurprise && (
                  <div className="glass d-inline-block p-4 mt-3 shadow-sm mx-auto w-100" style={{ maxWidth: '500px' }}>
                    <div className="d-flex justify-content-between small fw-bold mb-2">
                      <span className={vibe < 40 ? 'text-primary' : 'text-muted'}>Experience</span>
                      <span className={vibe >= 40 && vibe <= 60 ? 'text-primary' : 'text-muted'}>Balanced</span>
                      <span className={vibe > 60 ? 'text-primary' : 'text-muted'}>Luxury</span>
                    </div>
                    <input 
                      type="range" 
                      className="form-range"
                      min="0" max="100" 
                      value={vibe} 
                      onChange={(e) => setVibe(parseInt(e.target.value))}
                    />
                    <p className="small text-muted mt-2 mb-0">Drag to adjust your travel style dynamically!</p>
                  </div>
                )}
              </>
            ) : (
              <div className="py-5">
                <h2 className="fw-black">No options found</h2>
                <p className="text-muted">Try increasing your budget or reducing the number of days.</p>
              </div>
            )}
          </div>

          {!loading && itineraries.length > 0 && (
            <div className="row g-4">
              {displayItineraries.map((itinerary, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="glass glass-hover h-100 p-4 d-flex flex-column border-top border-4 border-primary">
                    <div className="d-flex justify-content-between align-items-start mb-4">
                      <h3 className="fw-bold fs-4 mb-0">{isSurprise ? itinerary.destinationName : `Option ${index + 1}`}</h3>
                      <div className="fs-3 fw-black text-primary">{itinerary.currencySymbol}{itinerary.totalCost.toLocaleString()}</div>
                    </div>

                    <div className="d-flex flex-column gap-3 mb-4 flex-grow-1">
                      {/* Cost Bar */}
                      <div className="progress" style={{ height: '10px' }}>
                        <div className="progress-bar bg-primary" style={{ width: `${(itinerary.breakdown.transport / itinerary.totalCost) * 100}%` }}></div>
                        <div className="progress-bar" style={{ width: `${(itinerary.breakdown.hotel / itinerary.totalCost) * 100}%`, background: '#8b5cf6' }}></div>
                        <div className="progress-bar bg-success" style={{ width: `${(itinerary.breakdown.food / itinerary.totalCost) * 100}%` }}></div>
                        <div className="progress-bar bg-warning" style={{ width: `${(itinerary.breakdown.activities / itinerary.totalCost) * 100}%` }}></div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center py-2 border-bottom border-dashed">
                        <div className="d-flex align-items-center gap-2 small fw-bold">
                          <div className="p-2 bg-primary bg-opacity-10 rounded-2 text-primary">
                            {itinerary.transport.method === 'Train' ? <Train size={16} /> : itinerary.transport.method === 'Car' ? <Car size={16} /> : <Plane size={16} />}
                          </div>
                          <span>{itinerary.transport.method} ({itinerary.transport.type})</span>
                        </div>
                        <span className="small fw-bold">{itinerary.currencySymbol}{itinerary.breakdown.transport.toLocaleString()}</span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center py-2 border-bottom border-dashed">
                        <div className="d-flex align-items-center gap-2 small fw-bold">
                          <div className="p-2 bg-info bg-opacity-10 rounded-2 text-info"><Building size={16} /></div>
                          <span>Stay ({itinerary.hotel.type})</span>
                        </div>
                        <span className="small fw-bold">{itinerary.currencySymbol}{itinerary.breakdown.hotel.toLocaleString()}</span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center py-2 border-bottom border-dashed">
                        <div className="d-flex align-items-center gap-2 small fw-bold">
                          <div className="p-2 bg-success bg-opacity-10 rounded-2 text-success"><Utensils size={16} /></div>
                          <span>Dining & Food</span>
                        </div>
                        <span className="small fw-bold">{itinerary.currencySymbol}{itinerary.breakdown.food.toLocaleString()}</span>
                      </div>

                      {itinerary.activities.length > 0 && (
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <div className="d-flex align-items-center gap-2 small fw-bold">
                            <div className="p-2 bg-warning bg-opacity-10 rounded-2 text-warning"><Activity size={16} /></div>
                            <span>Activities ({itinerary.activities.length})</span>
                          </div>
                          <span className="small fw-bold">{itinerary.currencySymbol}{itinerary.breakdown.activities.toLocaleString()}</span>
                        </div>
                      )}
                    </div>

                    <button 
                      className="btn-primary-custom w-100 py-3 mt-auto"
                      onClick={() => handleBook(itinerary)}
                    >
                      Book This Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
};
