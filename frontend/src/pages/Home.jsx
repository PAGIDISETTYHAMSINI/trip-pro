import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, Wallet, Calendar, Plane, Building, Utensils, Activity, Search, Train, Car, Info, Users, Clock, ArrowRight } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

export const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({
    destinationId: '',
    boardingPoint: '',
    budget: '',
    days: '3'
  });
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);
  const [vibe, setVibe] = useState(50);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
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
    if (!formData.destinationId || !formData.budget || !formData.days || !formData.boardingPoint) {
      setError("Please fill all fields including Boarding Point");
      return;
    }
    
    setLoading(true);
    setError('');
    setSearched(true);
    
    try {
      const response = await axios.get(`https://trip-pro.onrender.com/api/itineraries`, { params: formData });
      setItineraries(response.data);
    } catch (err) {
      setError("Failed to fetch itineraries. Please ensure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleBook = (itinerary) => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    const dest = destinations.find(d => d.id === formData.destinationId);
    const fullItinerary = {
      ...itinerary,
      boardingPoint: formData.boardingPoint,
      travelers: { adults: 2, children: 0, total: 2 } // Mocking for home search
    };

    navigate('/checkout', { 
      state: { 
        itinerary: fullItinerary, 
        destination: dest,
        days: formData.days
      } 
    });
  };

  const selectedDestinationInfo = destinations.find(d => d.id === formData.destinationId);

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="container py-5 text-center px-4">
        <div className="row justify-content-center py-lg-4">
          <div className="col-12 col-lg-10">
            <h1 className="display-2 fw-black mb-3 lh-1" style={{ background: 'linear-gradient(to right, var(--primary), #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Travel Smarter.<br/>Anywhere.
            </h1>
            <p className="lead text-muted mb-5 mx-auto px-md-5" style={{ maxWidth: '800px' }}>
              From your front door to the world. Perfect budgets, curated routes, and premium mobile-first planning.
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
              <Link to="/build-trip" className="btn-primary-custom px-5 py-3 fs-5 shadow-lg d-flex align-items-center justify-content-center gap-2">
                <Activity size={20} /> Build Custom Trip
              </Link>
              <a href="#featured" className="btn btn-outline-dark px-5 py-3 rounded-4 fw-bold fs-5 shadow-sm">
                Explore Packages
              </a>
            </div>
          </div>
        </div>

        {/* Planner Form - Mobile Frame Perfect */}
        <div className="mt-4 pt-4 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="glass p-4 p-md-5 shadow-lg border-top border-5 border-primary text-start">
            <h3 className="fw-black mb-4 d-flex align-items-center gap-2"><Search size={24} color="var(--primary)"/> Search Live Routes</h3>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-bold text-muted mb-2"><MapPin size={16} className="me-1"/> Boarding From</label>
                <input 
                  type="text" 
                  className="form-control py-3 rounded-4 shadow-sm" 
                  name="boardingPoint" 
                  placeholder="e.g. New Delhi, Mumbai" 
                  value={formData.boardingPoint} 
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label small fw-bold text-muted mb-2"><MapPin size={16} className="me-1"/> Destination</label>
                <select 
                  className="form-select py-3 rounded-4 shadow-sm" 
                  name="destinationId" 
                  value={formData.destinationId} 
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a place...</option>
                  {destinations.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label small fw-bold text-muted mb-2"><Wallet size={16} className="me-1"/> Budget ({selectedDestinationInfo?.currencySymbol || '₹'})</label>
                <input 
                  type="number" 
                  className="form-control py-3 rounded-4 shadow-sm" 
                  name="budget" 
                  placeholder="e.g. 25000" 
                  value={formData.budget} 
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label small fw-bold text-muted mb-2"><Calendar size={16} className="me-1"/> Days</label>
                <input 
                  type="number" 
                  className="form-control py-3 rounded-4 shadow-sm" 
                  name="days" 
                  value={formData.days} 
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 mt-4">
                <button type="submit" className="btn btn-primary w-100 py-3 rounded-4 fw-black fs-5 shadow-lg d-flex align-items-center justify-content-center gap-2">
                  <Search size={24} /> FIND BEST ROUTES
                </button>
              </div>
            </form>
            {error && <div className="alert alert-danger mt-4 rounded-4 py-3 text-center fw-bold">{error}</div>}
          </div>
        </div>
      </section>

      {searched && (
        <section className="container py-5 px-4">
          <div className="text-center mb-5">
            {loading ? (
              <div className="py-5">
                <div className="spinner-border text-primary mb-3" style={{ width: '3rem', height: '3rem' }}></div>
                <h3 className="fw-black">Calculating Optimal Path...</h3>
                <p className="text-muted">Route: {formData.boardingPoint} ➔ {selectedDestinationInfo?.name}</p>
              </div>
            ) : itineraries.length > 0 ? (
              <>
                <h2 className="fw-black mb-2">Available Routes Found!</h2>
                <div className="badge bg-primary rounded-pill px-4 py-2 fs-6 mb-4 shadow-sm">
                   {formData.boardingPoint} ➔ {selectedDestinationInfo?.name}
                </div>
                <p className="text-muted">We found {itineraries.length} ways to travel under your {selectedDestinationInfo?.currencySymbol}{formData.budget} budget.</p>
              </>
            ) : (
              <div className="py-5">
                <h2 className="fw-black text-danger">No direct routes found</h2>
                <p className="text-muted">Try increasing your budget or changing the boarding point.</p>
              </div>
            )}
          </div>

          {!loading && itineraries.length > 0 && (
            <div className="row g-4">
              {itineraries.map((itinerary, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="glass glass-hover h-100 p-4 border-top border-4 border-primary d-flex flex-column shadow-sm">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h3 className="fw-black fs-5 mb-0">Route Option {index + 1}</h3>
                        <p className="small text-muted mb-0">{itinerary.transport.method} + {itinerary.hotel.type}</p>
                      </div>
                      <div className="fs-4 fw-black text-primary">{itinerary.currencySymbol}{itinerary.totalCost.toLocaleString()}</div>
                    </div>

                    <div className="p-3 bg-light rounded-3 mb-4 flex-grow-1">
                       <div className="d-flex align-items-center gap-2 mb-2 small fw-bold">
                          <Plane size={14} className="text-primary"/> {formData.boardingPoint} ➔ {itinerary.destinationName}
                       </div>
                       <div className="d-flex align-items-center gap-2 mb-2 small">
                          <Building size={14} className="text-primary"/> Stay at {itinerary.hotel.name}
                       </div>
                       <div className="d-flex align-items-center gap-2 small">
                          <Activity size={14} className="text-primary"/> Includes {itinerary.activities.length} Local Activities
                       </div>
                    </div>

                    <button 
                      className="btn-primary-custom w-100 py-2 rounded-3 mt-auto fw-bold"
                      onClick={() => handleBook(itinerary)}
                    >
                      Book This Route <ArrowRight size={16}/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
};
