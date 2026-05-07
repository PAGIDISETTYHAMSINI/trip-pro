import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, Wallet, Calendar, Plane, Building, Utensils, Activity, Search, Train, Car, Info, Users, Clock, ArrowRight, Star, ShieldCheck } from 'lucide-react';
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.destinationId || !formData.budget || !formData.days || !formData.boardingPoint) {
      setError("Complete your route details first!");
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
    if (!user) {
      navigate('/login');
      return;
    }
    
    const dest = destinations.find(d => d.id === formData.destinationId);
    const fullItinerary = {
      ...itinerary,
      boardingPoint: formData.boardingPoint,
      travelers: { adults: 2, children: 0, total: 2 }
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
    <div className="container-fluid p-0 pb-5">
      {/* Dynamic Hero Section */}
      <section className="container py-4 py-md-5 mt-md-4">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 text-start fade-in">
            <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-bold border border-primary border-opacity-20 shadow-sm">
              ✨ 2026 PREMIUM TRAVEL ENGINE
            </div>
            <h1 className="display-2 fw-black mb-3 tracking-tightest lh-1">
              Journey to the <span className="text-primary">Extraordinary.</span>
            </h1>
            <p className="lead text-muted mb-5 opacity-75 pe-lg-5">
              Personalized itineraries from your doorstep to the world's most hidden gems. Professional, intelligent, and uniquely yours.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Link to="/build-trip" className="btn-primary-custom px-5 py-3 shadow-lg">
                <Activity size={20} /> Build Custom Trip
              </Link>
              <div className="d-flex align-items-center gap-2 ms-sm-3 mt-3 mt-sm-0">
                <div className="d-flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="rounded-circle border border-dark" style={{ width: '40px', height: '40px', marginLeft: i > 1 ? '-15px' : '0' }} />
                  ))}
                </div>
                <div className="small fw-bold opacity-50">12k+ Active Travelers</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="glass p-4 p-md-5 shadow-2xl border-top border-primary border-4 rounded-4 fade-in">
              <h3 className="fw-black mb-4 d-flex align-items-center gap-2">
                <Search size={24} color="var(--primary)"/> Plan Your Escape
              </h3>
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12 col-md-6">
                  <label className="form-label">Boarding Point</label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent border-end-0 border-white border-opacity-10 rounded-start-4"><MapPin size={18} /></span>
                    <input type="text" className="form-control py-3 border-start-0 rounded-end-4" name="boardingPoint" placeholder="e.g. Mumbai" value={formData.boardingPoint} onChange={handleChange} required />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Destination</label>
                  <select className="form-select py-3 rounded-4 shadow-sm" name="destinationId" value={formData.destinationId} onChange={handleChange} required>
                    <option value="">Select Place...</option>
                    {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label">Budget ({selectedDestinationInfo?.currencySymbol || '₹'})</label>
                  <input type="number" className="form-control py-3 rounded-4" name="budget" placeholder="Budget" value={formData.budget} onChange={handleChange} required />
                </div>
                <div className="col-6">
                  <label className="form-label">Days</label>
                  <input type="number" className="form-control py-3 rounded-4" name="days" value={formData.days} onChange={handleChange} required />
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn-primary-custom w-100 py-3 rounded-4 justify-content-center shadow-2xl">
                    SEARCH LIVE ROUTES <ArrowRight size={24} />
                  </button>
                </div>
              </form>
              {error && <div className="alert alert-danger mt-4 rounded-4 py-2 text-center small fw-bold bg-danger bg-opacity-10 border-danger border-opacity-20">{error}</div>}
            </div>
          </div>
        </div>
      </section>

      {/* Unique Results Grid */}
      {searched && (
        <section className="container py-5 px-4 px-md-0">
          <div className="text-center mb-5 fade-in">
            {loading ? (
              <div className="py-5">
                <div className="spinner-border text-primary mb-3" style={{ width: '3rem', height: '3rem' }}></div>
                <h3 className="fw-black">Optimizing Routes...</h3>
              </div>
            ) : itineraries.length > 0 ? (
              <>
                <h2 className="fw-black mb-2 fs-1">Elite Selections</h2>
                <div className="d-flex justify-content-center gap-2 mb-4">
                   <span className="badge bg-primary px-3 py-2 rounded-pill fw-bold shadow-sm">{formData.boardingPoint} ➔ {selectedDestinationInfo?.name}</span>
                </div>
              </>
            ) : null}
          </div>

          {!loading && itineraries.length > 0 && (
            <div className="row g-4">
              {itineraries.map((itinerary, index) => (
                <div key={index} className={`col-12 ${index % 3 === 0 ? 'col-lg-8' : 'col-lg-4'}`}>
                  <div className="glass glass-hover h-100 p-4 p-md-5 border-start border-4 border-primary d-flex flex-column ticket">
                    <div className="row g-4 flex-grow-1">
                      <div className="col-md-7">
                        <h3 className="fw-black fs-3 mb-1">Route No. {index + 1}</h3>
                        <div className="d-flex align-items-center gap-2 mb-4 opacity-50 small fw-bold">
                           <ShieldCheck size={16} className="text-primary"/> PROFESSIONAL CURATED ITINERARY
                        </div>
                        <div className="d-flex flex-column gap-3">
                           <div className="d-flex align-items-center gap-3">
                              <div className="p-2 bg-primary bg-opacity-10 text-primary rounded-3"><Plane size={20}/></div>
                              <div><div className="small text-muted fw-bold lh-1">TRANSPORT</div><div className="fw-bold">{itinerary.transport.agency} ({itinerary.transport.type})</div></div>
                           </div>
                           <div className="d-flex align-items-center gap-3">
                              <div className="p-2 bg-success bg-opacity-10 text-success rounded-3"><Building size={20}/></div>
                              <div><div className="small text-muted fw-bold lh-1">STAY</div><div className="fw-bold">{itinerary.hotel.name}</div></div>
                           </div>
                        </div>
                      </div>
                      <div className="col-md-5 text-md-end d-flex flex-column justify-content-center border-md-start border-white border-opacity-10 ps-md-4">
                         <div className="small text-muted fw-bold mb-1">TOTAL PACKAGE</div>
                         <div className="display-4 fw-black text-primary mb-4 lh-1">
                           {itinerary.currencySymbol}{itinerary.totalCost.toLocaleString()}
                         </div>
                         <button className="btn-primary-custom w-100 justify-content-center rounded-3 py-2" onClick={() => handleBook(itinerary)}>
                           SELECT <ArrowRight size={18}/>
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

      {/* Unique Featured Section */}
      {!searched && (
        <section id="featured" className="container py-5 mt-5">
           <h2 className="fw-black text-center mb-5 display-4">Trending <span className="text-primary">Destinations</span></h2>
           <div className="asymmetric-grid">
              {[
                { id: 'andaman', name: 'Andaman', price: '₹18,000', color: 'rgba(14, 165, 233, 0.2)' },
                { id: 'paris', name: 'Paris', price: '$1,200', color: 'rgba(236, 72, 153, 0.2)' },
                { id: 'tokyo', name: 'Tokyo', price: '$1,500', color: 'rgba(168, 85, 247, 0.2)' }
              ].map(dest => (
                <div key={dest.id} className="glass glass-hover p-4 text-center overflow-hidden position-relative" style={{ minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                   <div className="position-absolute top-0 start-0 w-100 h-100 opacity-20" style={{ background: dest.color, zIndex: -1 }}></div>
                   <h3 className="fw-black mb-1 fs-2">{dest.name}</h3>
                   <p className="text-muted small fw-bold">Starts from <span className="text-primary">{dest.price}</span></p>
                   <button className="btn btn-link text-primary fw-black text-decoration-none mt-3" onClick={() => navigate('/build-trip')}>EXPLORE NOW ➔</button>
                </div>
              ))}
           </div>
        </section>
      )}
    </div>
  );
};
