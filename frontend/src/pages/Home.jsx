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
    <div>
      {/* HERO */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid var(--slate-200)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

            {/* LEFT */}
            <div>
              <div className="badge badge-primary mb-3">
                <Zap size={12} fill="currentColor" /> AI-Powered Travel 2.0
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.25rem' }}>
                Plan Smarter Trips<br/>
                <span className="text-gradient">with AI Intelligence.</span>
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--slate-500)', marginBottom: '2rem', lineHeight: 1.7 }}>
                Personalized itineraries in seconds. Budget tracking, hotel picks, dining — all in one platform.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link to="/build-trip" className="btn-startup">
                  <Compass size={18} /> Start AI Planner
                </Link>
                <span style={{ color: 'var(--slate-400)', fontSize: '0.9rem' }}>✦ 15,000+ happy travelers</span>
              </div>
            </div>

            {/* RIGHT — Search Card */}
            <div className="glass" style={{ padding: '2rem' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Search size={22} style={{ color: 'var(--primary)' }} /> Quick Search
              </h3>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label className="form-label">Boarding Point</label>
                    <div style={{ position: 'relative' }}>
                      <MapPin size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate-400)' }} />
                      <input type="text" name="boardingPoint" className="form-control" placeholder="e.g. Hyderabad"
                        value={form.boardingPoint} onChange={handleChange} style={{ paddingLeft: '2.25rem' }} required />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Destination</label>
                    <select name="destinationId" className="form-select" value={form.destinationId} onChange={handleChange} required>
                      <option value="">{destLoading ? 'Loading...' : 'Select Destination'}</option>
                      {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Budget (₹ / $)</label>
                    <input type="number" name="budget" className="form-control" placeholder="50000"
                      value={form.budget} onChange={handleChange} min="1" required />
                  </div>
                  <div>
                    <label className="form-label">Days</label>
                    <input type="number" name="days" className="form-control"
                      value={form.days} onChange={handleChange} min="1" max="30" required />
                  </div>
                </div>
                <button type="submit" className="btn-startup w-100" style={{ justifyContent: 'center', padding: '0.9rem' }} disabled={loading}>
                  {loading ? 'Generating...' : <><span>Generate Routes</span> <ArrowRight size={18} /></>}
                </button>
              </form>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      {searched && (
        <section className="container section">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div className="spinner" style={{ margin: '0 auto 1rem' }}></div>
              <p style={{ color: 'var(--slate-500)', fontWeight: 600 }}>Analyzing routes...</p>
            </div>
          ) : itineraries.length > 0 ? (
            <>
              <h2 style={{ fontWeight: 900, marginBottom: '2rem', textAlign: 'center' }}>Recommended Packages</h2>
              <div className="grid-stack">
                {itineraries.map((itin, i) => (
                  <div key={i} className="trip-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span className="badge badge-primary">Package {i + 1}</span>
                      <span style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--primary)' }}>
                        {itin.currencySymbol}{itin.totalCost?.toLocaleString()}
                      </span>
                    </div>
                    <div style={{ background: 'var(--slate-50)', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid var(--slate-200)' }}>
                      <p style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--slate-700)' }}>
                        ✈ {form.boardingPoint} → {itin.destinationName}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--slate-500)', margin: 0 }}>
                        🏨 {itin.hotel?.name || 'Hotel Included'}
                      </p>
                    </div>
                    <button className="btn-startup w-100" style={{ justifyContent: 'center' }} onClick={() => handleBook(itin)}>
                      Select Package
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <p style={{ color: 'var(--slate-500)' }}>No packages found. Try a higher budget or fewer days.</p>
            </div>
          )}
        </section>
      )}

      {/* HOW IT WORKS */}
      {!searched && (
        <section className="container section">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontWeight: 900, fontSize: '2.25rem' }}>How It <span className="text-gradient">Works</span></h2>
            <p style={{ color: 'var(--slate-500)', marginTop: '0.75rem' }}>Four simple steps to your perfect trip.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { icon: <Globe size={28} style={{ color: 'var(--primary)' }} />, title: 'Pick Destination', desc: 'Choose from 100+ curated destinations.' },
              { icon: <Wallet size={28} style={{ color: 'var(--secondary)' }} />, title: 'Set Budget', desc: 'AI calculates real costs instantly.' },
              { icon: <Zap size={28} style={{ color: 'var(--warning)' }} />, title: 'AI Plans', desc: 'Get a day-by-day itinerary automatically.' },
              { icon: <CheckCircle size={28} style={{ color: 'var(--success)' }} />, title: 'Book & Go', desc: 'Secure your trip with one click.' }
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ background: 'var(--white)', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', boxShadow: 'var(--shadow-md)' }}>
                  {step.icon}
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate-500)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer style={{ background: 'var(--slate-900)', color: 'var(--slate-400)', textAlign: 'center', padding: '2rem', marginTop: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <Plane size={20} style={{ color: 'var(--primary)' }} />
          <span style={{ fontWeight: 900, color: '#fff' }}>TripPro</span>
        </div>
        <p style={{ fontSize: '0.85rem' }}>© 2026 Trip Pro. Production-grade AI travel platform.</p>
      </footer>
    </div>
  );
};

export default Home;
