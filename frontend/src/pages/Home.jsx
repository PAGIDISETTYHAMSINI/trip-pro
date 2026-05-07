import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, Wallet, Calendar, Plane, Search, ArrowRight, Zap, Globe, TrendingUp, CheckCircle, Compass, Users } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const API = 'https://trip-pro.onrender.com';

export const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [destLoading, setDestLoading] = useState(true);
  const [form, setForm] = useState({ destinationId: '', boardingPoint: '', budget: '', days: '3' });
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`${API}/api/destinations`)
      .then(res => setDestinations(res.data || []))
      .catch(() => {})
      .finally(() => setDestLoading(false));
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.destinationId || !form.budget || !form.days || !form.boardingPoint) {
      setError('Please fill all fields.');
      return;
    }
    setLoading(true); setError(''); setSearched(true); setItineraries([]);
    try {
      const res = await axios.get(`${API}/api/itineraries`, { params: form });
      setItineraries(res.data || []);
    } catch {
      setError('Could not fetch itineraries. Backend may be starting up — try again in 30 seconds.');
    } finally {
      setLoading(false);
    }
  };

  const handleBook = itinerary => {
    if (!user) { navigate('/login'); return; }
    const dest = destinations.find(d => d.id === form.destinationId);
    navigate('/checkout', { state: { itinerary: { ...itinerary, boardingPoint: form.boardingPoint, travelers: { adults: 2, children: 0, total: 2 } }, destination: dest, days: form.days } });
  };

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="bg-white border-bottom py-5">
        <div className="container">
          <div className="row g-5 align-items-center">

            {/* LEFT */}
            <div className="col-lg-6">
              <div className="badge badge-primary mb-3">
                <Zap size={12} fill="currentColor" /> AI-Powered Travel 2.0
              </div>
              <h1 className="display-4 fw-black mb-3">
                Plan Smarter Trips<br/>
                <span className="text-gradient">with AI Intelligence.</span>
              </h1>
              <p className="lead text-muted mb-4">
                Personalized itineraries in seconds. Budget tracking, hotel picks, dining — all in one platform.
              </p>
              <div className="d-flex gap-3 flex-wrap align-items-center">
                <Link to="/build-trip" className="btn-startup">
                  <Compass size={18} /> Start AI Planner
                </Link>
                <span className="text-muted small">✦ 15,000+ happy travelers</span>
              </div>
            </div>

            {/* RIGHT — Search Card */}
            <div className="col-lg-6">
              <div className="glass p-4 p-md-5">
                <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <Search size={22} className="text-primary" /> Quick Search
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label className="form-label">Boarding Point</label>
                      <div className="position-relative">
                        <MapPin size={16} className="position-absolute text-muted" style={{ left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                        <input type="text" name="boardingPoint" className="form-control" placeholder="e.g. Hyderabad"
                          value={form.boardingPoint} onChange={handleChange} style={{ paddingLeft: '2.25rem' }} required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Destination</label>
                      <select name="destinationId" className="form-select" value={form.destinationId} onChange={handleChange} required>
                        <option value="">{destLoading ? 'Loading...' : 'Select Destination'}</option>
                        {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Budget (₹ / $)</label>
                      <input type="number" name="budget" className="form-control" placeholder="50000"
                        value={form.budget} onChange={handleChange} min="1" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Days</label>
                      <input type="number" name="days" className="form-control"
                        value={form.days} onChange={handleChange} min="1" max="30" required />
                    </div>
                  </div>
                  <button type="submit" className="btn-startup w-100 py-3 justify-content-center" disabled={loading}>
                    {loading ? 'Generating...' : <><span>Generate Routes</span> <ArrowRight size={18} /></>}
                  </button>
                </form>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      {searched && (
        <section className="container py-5">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner mx-auto mb-3"></div>
              <p className="text-muted fw-600">Analyzing routes...</p>
            </div>
          ) : itineraries.length > 0 ? (
            <>
              <h2 className="fw-black text-center mb-5">Recommended Packages</h2>
              <div className="row g-4">
                {itineraries.map((itin, i) => (
                  <div key={i} className="col-md-6 col-lg-4">
                    <div className="trip-card p-4 h-100 d-flex flex-column gap-4">
                      <div className="d-flex justify-content-between align-items-start">
                        <span className="badge badge-primary">Package {i + 1}</span>
                        <span className="fs-3 fw-black text-primary">
                          {itin.currencySymbol}{itin.totalCost?.toLocaleString()}
                        </span>
                      </div>
                      <div className="bg-light rounded-3 p-3 border">
                        <p className="small fw-bold mb-1 text-main">
                          ✈ {form.boardingPoint} → {itin.destinationName}
                        </p>
                        <p className="small text-muted m-0">
                          🏨 {itin.hotel?.name || 'Hotel Included'}
                        </p>
                      </div>
                      <button className="btn-startup w-100 mt-auto justify-content-center" onClick={() => handleBook(itin)}>
                        Select Package
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-5">
              <p className="text-muted">No packages found. Try a higher budget or fewer days.</p>
            </div>
          )}
        </section>
      )}

      {/* HOW IT WORKS */}
      {!searched && (
        <section className="container py-5 mt-4">
          <div className="text-center mb-5">
            <h2 className="fw-black display-6">How It <span className="text-gradient">Works</span></h2>
            <p className="text-muted mt-2">Four simple steps to your perfect trip.</p>
          </div>
          <div className="row g-4">
            {[
              { icon: <Globe size={28} className="text-primary" />, title: 'Pick Destination', desc: 'Choose from 100+ curated destinations.' },
              { icon: <Wallet size={28} className="text-secondary" />, title: 'Set Budget', desc: 'AI calculates real costs instantly.' },
              { icon: <Zap size={28} className="text-warning" />, title: 'AI Plans', desc: 'Get a day-by-day itinerary automatically.' },
              { icon: <CheckCircle size={28} className="text-success" />, title: 'Book & Go', desc: 'Secure your trip with one click.' }
            ].map((step, i) => (
              <div key={i} className="col-md-6 col-lg-3 text-center">
                <div className="bg-white rounded-circle shadow-md d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                  {step.icon}
                </div>
                <h4 className="fw-bold mb-2">{step.title}</h4>
                <p className="small text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EXPLORE INDIA CTA */}
      <section className="bg-primary-soft py-5">
        <div className="container py-4">
          <div className="glass-card p-5 border-0 text-center position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: '#fff' }}>
            <div className="position-absolute opacity-10" style={{ top: '-10%', right: '-5%' }}>
              <Globe size={300} />
            </div>
            <h2 className="fw-black display-5 mb-3 position-relative">Discover India's Treasures</h2>
            <p className="lead opacity-75 mb-4 mx-auto position-relative" style={{ maxWidth: '700px' }}>
              From the snow-capped Himalayas to the sun-kissed beaches of Goa, explore the diverse beauty of India with our dedicated discovery system.
            </p>
            <Link to="/explore-india" className="btn-startup bg-white text-primary border-0 px-5 py-3 fs-5 position-relative">
              Explore Incredible India <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="bg-white py-4 border-top">
        <div className="container text-center">
          <p className="small fw-black text-muted text-uppercase mb-4 opacity-50" style={{ letterSpacing: '1px' }}>Trusted by travelers from</p>
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap opacity-50 grayscale-1">
             <div className="fw-black fs-4">HYATT</div>
             <div className="fw-black fs-4">MARRIOTT</div>
             <div className="fw-black fs-4">RADISSON</div>
             <div className="fw-black fs-4">HILTON</div>
             <div className="fw-black fs-4">TAJ</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-black display-6">Stories from the <span className="text-gradient">Road</span></h2>
          <p className="text-muted">Join 15,000+ travelers who planned their dream trips with AI.</p>
        </div>
        <div className="row g-4">
           {[
             { name: 'Ananya Sharma', role: 'Solo Traveler', quote: 'Trip Pro AI planned my entire Kerala trip in under 30 seconds. The hotel picks were spot on!' },
             { name: 'Rahul Varma', role: 'Business Exec', quote: 'The efficiency of the AI planner is unmatched. Saved me hours of research for my Shimla getaway.' },
             { name: 'Priya Das', role: 'Food Blogger', quote: 'I love the food discovery feature. Found the best hidden cafes in Kolkata thanks to the AI Assistant.' },
           ].map((t, i) => (
             <div key={i} className="col-md-6 col-lg-4">
               <div className="card h-100 p-4 border-0 shadow-md">
                  <div className="text-warning mb-3 d-flex gap-1">
                     {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                  </div>
                  <p className="fst-italic text-muted mb-4 small" style={{ lineHeight: 1.7 }}>"{t.quote}"</p>
                  <div className="d-flex align-items-center gap-3">
                     <div className="bg-primary-soft text-primary d-flex align-items-center justify-content-center rounded-circle fw-black" style={{ width: '40px', height: '40px' }}>
                        {t.name.charAt(0)}
                     </div>
                     <div>
                        <div className="small fw-black">{t.name}</div>
                        <div className="text-muted small" style={{ fontSize: '0.7rem' }}>{t.role}</div>
                     </div>
                  </div>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-5">
        <div className="container">
          <div className="row g-5 mb-5">
             <div className="col-lg-5">
                <Link to="/" className="d-flex align-items-center gap-2 mb-4">
                  <Plane size={24} className="text-primary" />
                  <span className="fw-black fs-4 text-white">TripPro</span>
                </Link>
                <p className="text-muted small" style={{ lineHeight: 1.8, maxWidth: '350px' }}>
                   Revolutionizing travel planning with production-grade AI. Discover, plan, and book your perfect India trip in seconds.
                </p>
             </div>
             <div className="col-6 col-lg-2">
                <h6 className="fw-bold text-white mb-4">Platform</h6>
                <ul className="list-unstyled d-flex flex-column gap-2 small text-muted">
                   <li><Link to="/explore-india">Explore India</Link></li>
                   <li><Link to="/build-trip">AI Planner</Link></li>
                   <li><Link to="/dashboard">Dashboard</Link></li>
                   <li><Link to="/admin">Admin Panel</Link></li>
                </ul>
             </div>
             <div className="col-6 col-lg-2">
                <h6 className="fw-bold text-white mb-4">Support</h6>
                <ul className="list-unstyled d-flex flex-column gap-2 small text-muted">
                   <li>Help Center</li>
                   <li>Safety Tips</li>
                   <li>Terms of Service</li>
                   <li>Privacy Policy</li>
                </ul>
             </div>
             <div className="col-lg-3">
                <h6 className="fw-bold text-white mb-4">Connect</h6>
                <ul className="list-unstyled d-flex flex-column gap-2 small text-muted">
                   <li>Instagram</li>
                   <li>Twitter</li>
                   <li>Facebook</li>
                   <li>LinkedIn</li>
                </ul>
             </div>
          </div>
          <div className="border-top border-secondary pt-4 text-center small text-muted opacity-50">
             <p>© 2026 Trip Pro AI. All rights reserved. Built with ❤️ for India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
