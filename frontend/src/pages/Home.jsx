import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, Wallet, Calendar, Plane, Building, Activity, Search, ArrowRight, ShieldCheck, Zap, Star, Globe, TrendingUp, Users, Heart, Share2, Compass, CheckCircle } from 'lucide-react';
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
      setError("Please select all options to optimize your route.");
      return;
    }
    setLoading(true);
    setError('');
    setSearched(true);
    try {
      const response = await axios.get(`https://trip-pro.onrender.com/api/itineraries`, { params: formData });
      setItineraries(response.data);
    } catch (err) {
      setError("AI Engine temporarily recalibrating. Please try again.");
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

  return (
    <div className="container-fluid p-0">
      {/* Hero Section - Production Startup Standard */}
      <section className="bg-white border-bottom py-5 overflow-hidden">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-primary-soft text-primary rounded-full fw-bold small mb-4">
                <Zap size={14} fill="currentColor"/> <span>AI-Powered Itineraries 2.0</span>
              </div>
              <h1 className="display-2 mb-4">
                Plan Smarter Trips <br className="d-none d-lg-block"/> 
                <span className="text-gradient">with AI Intelligence.</span>
              </h1>
              <p className="lead text-slate-500 mb-5 pe-lg-5 fs-5">
                The modern standard for travel planning. Generate personalized itineraries, optimize budgets, and explore the world with production-grade AI.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Link to="/build-trip" className="btn-startup px-5 py-3">
                  <Compass size={20} /> START AI PLANNER
                </Link>
                <div className="d-flex align-items-center gap-3 ms-sm-2">
                  <div className="d-flex -space-x-2">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="rounded-full border-2 border-white shadow-sm" style={{ width: '40px', height: '40px', marginLeft: i > 1 ? '-12px' : '0' }} />
                    ))}
                  </div>
                  <div className="small fw-bold text-slate-600">Joined by 15k+ Travelers</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
               <div className="glass-card p-4 p-md-5 border-0 bg-white">
                  <h3 className="mb-4 d-flex align-items-center gap-3 fs-4">
                    <Search className="text-primary" size={24}/> Quick Smart Search
                  </h3>
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-slate-500">Boarding Point</label>
                      <div className="position-relative">
                         <MapPin className="position-absolute top-50 translate-middle-y ms-3 text-slate-400" size={18}/>
                         <input type="text" className="form-startup ps-5" name="boardingPoint" placeholder="e.g. Bangalore" value={formData.boardingPoint} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-slate-500">Destination</label>
                      <select className="form-startup" name="destinationId" value={formData.destinationId} onChange={handleChange} required>
                        <option value="">Where to travel?</option>
                        {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                      </select>
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-bold text-slate-500">Budget (INR/USD)</label>
                      <input type="number" className="form-startup" name="budget" placeholder="e.g. 50000" value={formData.budget} onChange={handleChange} required />
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-bold text-slate-500">Days</label>
                      <input type="number" className="form-startup" name="days" value={formData.days} onChange={handleChange} required />
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn-startup w-100 justify-content-center py-3">
                        GENERATE ELITE ROUTES <ArrowRight size={20} />
                      </button>
                    </div>
                  </form>
                  {error && <div className="alert alert-danger mt-3 py-2 small fw-bold border-0 bg-danger bg-opacity-10 text-danger text-center">{error}</div>}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Results */}
      {searched && (
        <section className="container py-5">
           <div className="text-center mb-5">
              {loading ? (
                <div className="py-5">
                  <div className="spinner-border text-primary mb-3"></div>
                  <h3 className="fw-black text-slate-800">Analyzing 1,000+ Data Points...</h3>
                </div>
              ) : (
                <>
                  <div className="badge bg-primary-soft text-primary px-4 py-2 rounded-full fw-bold mb-2">AI RECOMMENDATIONS</div>
                  <h2 className="display-4 mb-2">Elite Itineraries</h2>
                </>
              )}
           </div>

           {!loading && itineraries.length > 0 && (
             <div className="grid-stack">
                {itineraries.map((itinerary, index) => (
                  <div key={index} className="glass-card p-4 p-md-5 bg-white d-flex flex-column h-100 border-0 shadow-lg">
                    <div className="d-flex justify-content-between align-items-start mb-4">
                       <span className="badge bg-slate-100 text-slate-600 px-3 py-2 rounded-full fw-bold small">PACKAGE {index + 1}</span>
                       <div className="display-6 fw-bold text-primary">{itinerary.currencySymbol}{itinerary.totalCost.toLocaleString()}</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl mb-4 flex-grow-1 border">
                       <div className="d-flex align-items-center gap-3 mb-3">
                          <Plane size={18} className="text-primary"/>
                          <div className="small fw-bold text-slate-700">{formData.boardingPoint} ➔ {itinerary.destinationName}</div>
                       </div>
                       <div className="d-flex align-items-center gap-3">
                          <Building size={18} className="text-primary"/>
                          <div className="small text-slate-500">Premium Stay at <strong>{itinerary.hotel.name}</strong></div>
                       </div>
                    </div>
                    <button className="btn-startup w-100 justify-content-center" onClick={() => handleBook(itinerary)}>
                       SELECT & PERSONALIZE
                    </button>
                  </div>
                ))}
             </div>
           )}
        </section>
      )}

      {/* How it Works Section */}
      <section className="container py-5 mt-5">
         <div className="text-center mb-5">
            <h2 className="display-3 mb-3">How it <span className="text-primary">Works</span></h2>
            <p className="text-slate-500">Revolutionizing travel planning in four simple steps.</p>
         </div>
         <div className="grid-stack text-center g-5">
            {[
              { icon: <Globe className="text-primary"/>, title: 'Choose Destination', desc: 'Pick from 100+ global hotspots optimized for your currency.' },
              { icon: <Wallet className="text-secondary"/>, title: 'Set Your Budget', desc: 'Our AI calculates live transport, stay, and food costs instantly.' },
              { icon: <Zap className="text-warning"/>, title: 'AI Generation', desc: 'Get a day-by-day itinerary with food and activity suggestions.' },
              { icon: <CheckCircle className="text-success"/>, title: 'Finalize & Go', desc: 'Secure booking with verified partners and 24/7 support.' }
            ].map((step, i) => (
              <div key={i} className="p-4">
                 <div className="p-4 bg-white shadow-md rounded-full d-inline-flex mb-4">{step.icon}</div>
                 <h4 className="mb-2 fs-4">{step.title}</h4>
                 <p className="text-slate-500 small pe-lg-4">{step.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Trending Section */}
      <section className="container py-5 mt-5 bg-slate-900 rounded-xl p-5 text-white overflow-hidden position-relative">
         <div className="position-absolute top-0 end-0 p-5 opacity-10"><TrendingUp size={200}/></div>
         <div className="row align-items-center">
            <div className="col-lg-8">
               <h2 className="display-4 mb-3">Trending <span className="text-primary">Worldwide</span></h2>
               <p className="lead opacity-75 mb-5">Explore the most booked destinations by our elite community.</p>
               <div className="d-flex flex-wrap gap-4">
                  {['Andaman', 'Paris', 'Tokyo', 'Bali', 'Swiss Alps'].map(t => (
                    <div key={t} className="px-4 py-2 bg-white bg-opacity-10 rounded-full fw-bold border border-white border-opacity-10 cursor-pointer hover:bg-primary transition-all">
                       {t}
                    </div>
                  ))}
               </div>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0 text-center">
               <div className="display-1 fw-bold text-primary">15k+</div>
               <div className="small fw-bold opacity-50">HAPPY TRAVELERS</div>
            </div>
         </div>
      </section>

      {/* Footer Minimal */}
      <footer className="container py-5 mt-5 text-center border-top">
         <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
            <Plane size={24} className="text-primary"/>
            <span className="fw-black fs-4 text-slate-900">Trip Pro</span>
         </div>
         <p className="text-slate-500 small">© 2026 Trip Pro AI. All Rights Reserved. Built for production-level exploration.</p>
      </footer>
    </div>
  );
};
