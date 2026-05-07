import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, Wallet, Calendar, Plane, Building, Activity, Search, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
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

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios.get('https://trip-pro.onrender.com/api/destinations')
      .then(res => setDestinations(res.data))
      .catch(err => console.error("Error fetching destinations", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.destinationId || !formData.budget || !formData.days || !formData.boardingPoint) {
      setError("Please fill all fields to generate your route.");
      return;
    }
    setLoading(true);
    setError('');
    setSearched(true);
    try {
      const response = await axios.get(`https://trip-pro.onrender.com/api/itineraries`, { params: formData });
      setItineraries(response.data);
    } catch (err) {
      setError("System temporary offline. Try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  const handleBook = (itinerary) => {
    if (!user) { navigate('/login'); return; }
    const dest = destinations.find(d => d.id === formData.destinationId);
    navigate('/checkout', { 
      state: { 
        itinerary: { ...itinerary, boardingPoint: formData.boardingPoint, travelers: { adults: 2, children: 0, total: 2 } }, 
        destination: dest,
        days: formData.days
      } 
    });
  };

  const selectedDestinationInfo = destinations.find(d => d.id === formData.destinationId);

  return (
    <div className="container-fluid p-0">
      {/* Hero Section - Clean Professional */}
      <section className="container py-5 mt-md-4 text-center text-lg-start">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-bold border border-primary border-opacity-20">
               TRUSTED BY 15,000+ EXPLORERS
            </div>
            <h1 className="display-2 fw-black mb-3 text-main lh-tight">
              Adventure <span className="text-primary">Simplified.</span>
            </h1>
            <p className="lead text-muted mb-5 pe-lg-5">
              The world's first intelligent travel engine designed for budget accuracy and premium mobile experiences. From your doorstep to your dream.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Link to="/build-trip" className="btn-primary-custom px-5 py-3">
                <Activity size={20} /> START PLANNING
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="glass p-4 p-md-5 border-0 shadow-lg">
              <h3 className="fw-black mb-4 d-flex align-items-center gap-2 text-main">
                <Search size={24} className="text-primary"/> Plan Your Route
              </h3>
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12 col-md-6">
                  <label className="form-label">Boarding Point</label>
                  <input type="text" className="form-control" name="boardingPoint" placeholder="e.g. Hyderabad" value={formData.boardingPoint} onChange={handleChange} required />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Destination</label>
                  <select className="form-select" name="destinationId" value={formData.destinationId} onChange={handleChange} required>
                    <option value="">Select Destination</option>
                    {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label">Budget ({selectedDestinationInfo?.currencySymbol || '₹'})</label>
                  <input type="number" className="form-control" name="budget" placeholder="Amount" value={formData.budget} onChange={handleChange} required />
                </div>
                <div className="col-6">
                  <label className="form-label">Days</label>
                  <input type="number" className="form-control" name="days" value={formData.days} onChange={handleChange} required />
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn-primary-custom w-100 py-3 justify-content-center">
                    SEARCH LIVE DEALS <ArrowRight size={20} />
                  </button>
                </div>
              </form>
              {error && <div className="alert alert-danger mt-3 small fw-bold">{error}</div>}
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid - High Contrast */}
      {searched && (
        <section className="container py-5 bg-white bg-opacity-50 mt-5 rounded-5 shadow-inner">
          <div className="text-center mb-5">
            {loading ? (
              <div className="py-5">
                <div className="spinner-border text-primary mb-3"></div>
                <h3 className="fw-black">Optimizing Routes...</h3>
              </div>
            ) : itineraries.length > 0 ? (
              <h2 className="fw-black mb-2">Recommended Packages</h2>
            ) : null}
          </div>

          {!loading && itineraries.length > 0 && (
            <div className="row g-4">
              {itineraries.map((itinerary, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="glass glass-hover p-4 border-0 d-flex flex-column h-100">
                    <div className="d-flex justify-content-between align-items-start mb-4">
                       <h3 className="fw-black fs-5 mb-0">Option {index + 1}</h3>
                       <div className="fs-3 fw-black text-primary">{itinerary.currencySymbol}{itinerary.totalCost.toLocaleString()}</div>
                    </div>
                    
                    <div className="p-3 bg-light rounded-3 mb-4 flex-grow-1 border">
                       <div className="d-flex align-items-center gap-2 mb-2 small fw-bold text-main">
                          <Plane size={14} className="text-primary"/> {formData.boardingPoint} ➔ {itinerary.destinationName}
                       </div>
                       <div className="d-flex align-items-center gap-2 mb-2 small text-muted">
                          <Building size={14} className="text-primary"/> Stay at {itinerary.hotel.name}
                       </div>
                    </div>

                    <button className="btn-primary-custom w-100 py-2 justify-content-center" onClick={() => handleBook(itinerary)}>
                      SELECT PACKAGE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Featured Grid */}
      {!searched && (
        <section className="container py-5 mt-5">
           <h2 className="fw-black text-center mb-5">Popular Destinations</h2>
           <div className="row g-4">
              {[
                { id: 'andaman', name: 'Andaman Islands', price: '₹18k' },
                { id: 'paris', name: 'Paris, France', price: '$1.2k' },
                { id: 'tokyo', name: 'Tokyo, Japan', price: '$1.5k' }
              ].map(dest => (
                <div key={dest.id} className="col-12 col-md-4">
                   <div className="glass glass-hover p-5 text-center">
                      <h3 className="fw-black mb-1">{dest.name}</h3>
                      <p className="text-muted fw-bold">From {dest.price}</p>
                      <button className="btn btn-link text-primary text-decoration-none fw-bold" onClick={() => navigate('/build-trip')}>PLAN NOW ➔</button>
                   </div>
                </div>
              ))}
           </div>
        </section>
      )}
    </div>
  );
};
