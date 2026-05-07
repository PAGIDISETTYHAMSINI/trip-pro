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
      setError("Unable to connect to the pricing engine. Please try again.");
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
    <div className="container-fluid p-0 pb-5">
      <div className="bg-shapes"></div>
      
      {/* Hero Section */}
      <section className="container py-4 py-md-5 mt-md-3">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 text-start fade-in">
            <div className="badge bg-primary bg-opacity-20 text-primary px-3 py-2 rounded-pill mb-3 fw-bold border border-primary border-opacity-30">
               ELITE TRAVEL PLANNER 2.0
            </div>
            <h1 className="display-2 fw-black mb-3 lh-tight tracking-tightest">
              Escape the <span className="text-warning">Ordinary.</span>
            </h1>
            <p className="lead text-muted mb-5 pe-lg-5" style={{ fontSize: '1.1rem', opacity: 0.9 }}>
              Experience the world's most exclusive destinations with a perfectly calculated budget and a unique mobile-first itinerary.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Link to="/build-trip" className="btn-primary-custom px-5 py-3 shadow-lg">
                <Zap size={20} /> Build Custom Trip
              </Link>
              <div className="d-flex align-items-center gap-2 ms-sm-3 mt-2 mt-sm-0">
                <div className="small fw-bold text-muted">Join 15,000+ Explorers</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="glass p-4 p-md-5 shadow-glow border-0 rounded-4 fade-in">
              <h3 className="fw-black mb-4 d-flex align-items-center gap-2 text-primary">
                <Search size={24} /> Book Your Route
              </h3>
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12 col-md-6">
                  <label className="form-label">Boarding From</label>
                  <input type="text" className="form-control" name="boardingPoint" placeholder="e.g. Hyderabad" value={formData.boardingPoint} onChange={handleChange} required />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Going To</label>
                  <select className="form-select" name="destinationId" value={formData.destinationId} onChange={handleChange} required>
                    <option value="">Select Destination</option>
                    {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label">Max Budget ({selectedDestinationInfo?.currencySymbol || '₹'})</label>
                  <input type="number" className="form-control" name="budget" placeholder="Amount" value={formData.budget} onChange={handleChange} required />
                </div>
                <div className="col-6">
                  <label className="form-label">Days</label>
                  <input type="number" className="form-control" name="days" value={formData.days} onChange={handleChange} required />
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn-primary-custom w-100 py-3 justify-content-center shadow-lg">
                    DISCOVER BEST DEALS <ArrowRight size={20} />
                  </button>
                </div>
              </form>
              {error && <div className="alert alert-danger mt-3 bg-danger bg-opacity-10 text-danger border-0 small fw-bold text-center">{error}</div>}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      {searched && (
        <section className="container py-5">
          <div className="text-center mb-5 fade-in">
            {loading ? (
              <div className="py-5">
                <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }}></div>
                <h3 className="fw-black mt-3">Fetching Live Fares...</h3>
              </div>
            ) : itineraries.length > 0 ? (
              <div className="badge bg-warning bg-opacity-10 text-warning px-4 py-2 rounded-pill fw-black border border-warning border-opacity-20 shadow-sm">
                EXCLUSIVE ROUTES: {formData.boardingPoint} ➔ {selectedDestinationInfo?.name}
              </div>
            ) : null}
          </div>

          {!loading && itineraries.length > 0 && (
            <div className="row g-4">
              {itineraries.map((itinerary, index) => (
                <div key={index} className={`col-12 ${index % 3 === 0 ? 'col-lg-8' : 'col-lg-4'}`}>
                  <div className="glass glass-hover h-100 p-4 p-md-5 d-flex flex-column ticket border-0">
                    <div className="row g-4 align-items-center flex-grow-1">
                      <div className="col-md-7 border-md-end border-white border-opacity-5 pr-md-4">
                        <div className="d-flex align-items-center gap-2 mb-2">
                           <ShieldCheck size={18} className="text-primary"/>
                           <span className="small fw-black text-muted text-uppercase tracking-widest">Verified Route</span>
                        </div>
                        <h3 className="fw-black fs-2 mb-4 lh-tight">Premium Option {index + 1}</h3>
                        <div className="d-flex flex-column gap-3">
                           <div className="d-flex align-items-center gap-3">
                              <div className="p-2 bg-primary bg-opacity-10 text-primary rounded-3"><Plane size={20}/></div>
                              <div><div className="small text-muted fw-bold lh-1">METHOD</div><div className="fw-black">{itinerary.transport.agency}</div></div>
                           </div>
                           <div className="d-flex align-items-center gap-3">
                              <div className="p-2 bg-warning bg-opacity-10 text-warning rounded-3"><Building size={20}/></div>
                              <div><div className="small text-muted fw-bold lh-1">STAY</div><div className="fw-black">{itinerary.hotel.name}</div></div>
                           </div>
                        </div>
                      </div>
                      <div className="col-md-5 text-md-end">
                         <div className="small text-muted fw-black mb-1">ALL-INCLUSIVE</div>
                         <div className="display-4 fw-black text-primary mb-4 lh-1">
                           {itinerary.currencySymbol}{itinerary.totalCost.toLocaleString()}
                         </div>
                         <button className="btn-primary-custom w-100 justify-content-center py-2" onClick={() => handleBook(itinerary)}>
                           BOOK NOW <ArrowRight size={18}/>
                         </button>
                      </div>
                    </div>
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
