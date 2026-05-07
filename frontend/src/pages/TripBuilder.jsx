import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { MapPin, ArrowRight, Check, ShieldCheck, Waves, Mountain, Camera, Utensils, Music, Activity, Users, Zap, Wallet, TrendingUp, Plane, Building, Star, Info, Compass } from 'lucide-react';

const API = 'https://trip-pro.onrender.com';

export const TripBuilder = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState([]);
  const [destLoading, setDestLoading] = useState(true);
  const [apiLoading, setApiLoading] = useState(false);

  const [selectedDestinationId, setSelectedDestinationId] = useState('');
  const [boardingPoint, setBoardingPoint] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [returnDate, setReturnDate] = useState(() => {
    let d = new Date(); d.setDate(d.getDate() + 3); return d.toISOString().split('T')[0];
  });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [travelStyle, setTravelStyle] = useState('mid');
  const [interests, setInterests] = useState([]);
  const [destDetails, setDestDetails] = useState(null);

  const [selectedTransport, setSelectedTransport] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  const location = useLocation();

  useEffect(() => {
    axios.get(`${API}/api/destinations`)
      .then(res => {
        const data = res.data || [];
        setDestinations(data);
        if (location.state?.destination) {
          const pre = data.find(d => d.name.toLowerCase() === location.state.destination.toLowerCase());
          if (pre) setSelectedDestinationId(pre.id);
        }
      })
      .catch(() => {})
      .finally(() => setDestLoading(false));
  }, [location.state]);

  const toggleInterest = id =>
    setInterests(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);

  const toggleActivity = act =>
    setSelectedActivities(prev => prev.find(a => a.name === act.name)
      ? prev.filter(a => a.name !== act.name) : [...prev, act]);

  const toggleRestaurant = res =>
    setSelectedRestaurants(prev => prev.find(r => r.name === res.name)
      ? prev.filter(r => r.name !== res.name) : [...prev, res]);

  const fetchDestDetails = async () => {
    if (!selectedDestinationId) return;
    setApiLoading(true);
    try {
      const res = await axios.get(`${API}/api/destinations/${selectedDestinationId}`);
      setDestDetails(res.data);
      setStep(4);
    } catch (e) { console.error(e); }
    finally { setApiLoading(false); }
  };

  const getDays = () => {
    const d = Math.ceil((new Date(returnDate) - new Date(startDate)) / 86400000);
    return d > 0 ? d : 1;
  };

  const calculateTotal = () => {
    let total = 0;
    const t = adults + children;
    if (selectedTransport) total += selectedTransport.cost * t;
    const days = getDays();
    if (selectedRoom) total += selectedRoom.cost * days * Math.ceil(t / 2);
    total += selectedActivities.reduce((s, a) => s + (a.cost || 0), 0) * t;
    total += selectedRestaurants.reduce((s, r) => s + ((r.averageCost || 500) * days), 0) * t;
    return Math.round(total);
  };

  const currency = destDetails?.name?.includes('India') ? '₹' : '$';

  const proceedToCheckout = () => {
    const days = getDays();
    navigate('/checkout', {
      state: {
        itinerary: {
          totalCost: calculateTotal(), currencySymbol: currency, boardingPoint,
          travelers: { adults, children, total: adults + children },
          dates: { start: startDate, end: returnDate, days },
          transport: selectedTransport, hotel: selectedHotel, room: selectedRoom,
          activities: selectedActivities, restaurants: selectedRestaurants
        },
        destination: destDetails, days
      }
    });
  };

  const stepLabels = ['Route', 'Dates', 'Vibe', 'Travel', 'Stay', 'Final'];

  const S = ({ children }) => <div className="fade-in">{children}</div>;

  const NextBtn = ({ onClick, disabled, label = 'Continue', icon }) => (
    <button className="btn-startup w-100 py-3 mt-4 justify-content-center" onClick={onClick} disabled={disabled}>
      {label} {icon || <ArrowRight size={18} />}
    </button>
  );

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link to="/" className="logo">
            <Plane size={24} />
            <span>Trip<span className="text-primary">Pro</span></span>
          </Link>
          <span className="small fw-black text-muted text-uppercase opacity-50">
            Step {step} / {stepLabels.length}
          </span>
        </div>

        {/* PROGRESS BAR */}
        <div className="d-flex gap-2 mb-5 overflow-auto no-scrollbar py-2">
          {stepLabels.map((label, i) => {
            const num = i + 1;
            const cls = step > num ? 'done' : step === num ? 'active' : 'inactive';
            return (
              <div key={num} className="d-flex align-items-center gap-2 flex-shrink-0">
                <div className={`step-pill ${cls}`}>{step > num ? <Check size={14} /> : num}</div>
                <span className={`small fw-bold ${step >= num ? 'text-primary' : 'text-muted'}`}>{label}</span>
                {i < stepLabels.length - 1 && <div className="bg-light-subtle" style={{ width: '20px', height: '2px', background: step > num ? 'var(--primary)' : 'var(--slate-200)' }}></div>}
              </div>
            );
          })}
        </div>

        <div className="row g-4">
          {/* MAIN CONTENT */}
          <div className="col-lg-8">
            {step === 1 && (
              <S>
                <div className="card border-0 shadow-sm p-4 p-md-5">
                  <h2 className="fw-black mb-4">
                    <MapPin size={28} className="text-primary me-2" />
                    Where to?
                  </h2>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label">Destination</label>
                      <select className="form-select" value={selectedDestinationId} onChange={e => setSelectedDestinationId(e.target.value)}>
                        <option value="">{destLoading ? 'Loading...' : 'Select a destination'}</option>
                        {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Boarding From</label>
                      <input type="text" className="form-control" placeholder="e.g. Bangalore"
                        value={boardingPoint} onChange={e => setBoardingPoint(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Travel Style</label>
                      <select className="form-select" value={travelStyle} onChange={e => setTravelStyle(e.target.value)}>
                        <option value="budget">Budget Saver</option>
                        <option value="mid">Premium</option>
                        <option value="luxury">Ultra Luxury</option>
                      </select>
                    </div>
                  </div>
                  <NextBtn onClick={() => setStep(2)} disabled={!selectedDestinationId || !boardingPoint} label="Set Dates" />
                </div>
              </S>
            )}

            {step === 2 && (
              <S>
                <div className="card border-0 shadow-sm p-4 p-md-5">
                  <h2 className="fw-black mb-4">Dates & Group</h2>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label className="form-label">Start Date</label>
                      <input type="date" className="form-control" value={startDate} onChange={e => setStartDate(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Return Date</label>
                      <input type="date" className="form-control" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
                    </div>
                  </div>
                  <div className="row g-3">
                    {[{ label: 'Adults', val: adults, set: setAdults, min: 1 }, { label: 'Children', val: children, set: setChildren, min: 0 }].map(g => (
                      <div key={g.label} className="col-md-6">
                        <div className="border rounded-xl p-3 d-flex justify-content-between align-items-center bg-white shadow-sm">
                          <div className="fw-bold d-flex align-items-center gap-2">
                            <Users size={18} className="text-muted" /> {g.label}
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <button onClick={() => g.set(Math.max(g.min, g.val - 1))} className="btn border rounded-circle p-0" style={{ width: '32px', height: '32px' }}>−</button>
                            <span className="fw-black fs-5">{g.val}</span>
                            <button onClick={() => g.set(g.val + 1)} className="btn border rounded-circle p-0" style={{ width: '32px', height: '32px' }}>+</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex gap-3 mt-5">
                    <button className="btn border px-4" onClick={() => setStep(1)}>Back</button>
                    <button className="btn-startup flex-grow-1 justify-content-center" onClick={() => setStep(3)}>Pick Interests</button>
                  </div>
                </div>
              </S>
            )}

            {step === 3 && (
              <S>
                <div className="card border-0 shadow-sm p-4 p-md-5">
                  <h2 className="fw-black mb-2">What's your vibe?</h2>
                  <p className="text-muted mb-4 small">AI uses this to personalize your route.</p>
                  <div className="row g-3">
                    {[
                      { id: 'beach', label: 'Beach', Icon: Waves },
                      { id: 'mountain', label: 'Mountain', Icon: Mountain },
                      { id: 'culture', label: 'Culture', Icon: Camera },
                      { id: 'food', label: 'Foodie', Icon: Utensils },
                      { id: 'nightlife', label: 'Nightlife', Icon: Music },
                      { id: 'adventure', label: 'Adventure', Icon: Activity },
                    ].map(({ id, label, Icon }) => (
                      <div key={id} className="col-4 col-md-4">
                        <div className={`vibe-card ${interests.includes(id) ? 'active' : ''}`} onClick={() => toggleInterest(id)}>
                          <Icon size={24} className="mb-2" />
                          <div className="small fw-bold">{label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex gap-3 mt-5">
                    <button className="btn border px-4" onClick={() => setStep(2)}>Back</button>
                    <button className="btn-startup flex-grow-1 justify-content-center" onClick={fetchDestDetails} disabled={apiLoading}>
                      {apiLoading ? 'Generating...' : 'Generate AI Route'} <Zap size={18} />
                    </button>
                  </div>
                </div>
              </S>
            )}

            {step === 4 && destDetails && (
              <S>
                <div className="card border-0 shadow-sm p-4 p-md-5">
                  <h2 className="fw-black mb-4">
                    <Plane size={26} className="text-primary me-2" />
                    Select Transport
                  </h2>
                  <div className="d-flex flex-column gap-3">
                    {(destDetails.detailedTransport || []).map(tr => (
                      <div key={tr.id} className={`select-card ${selectedTransport?.id === tr.id ? 'selected' : ''}`} onClick={() => setSelectedTransport(tr)}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <div className="fw-black fs-5">{tr.agency}</div>
                            <div className="small text-muted mt-1">{tr.type} · {boardingPoint} → {destDetails.name}</div>
                          </div>
                          <div className="fs-3 fw-black text-primary">{currency}{tr.cost?.toLocaleString()}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex gap-3 mt-5">
                    <button className="btn border px-4" onClick={() => setStep(3)}>Back</button>
                    <button className="btn-startup flex-grow-1 justify-content-center" onClick={() => setStep(5)} disabled={!selectedTransport}>Choose Hotel</button>
                  </div>
                </div>
              </S>
            )}

            {step === 5 && destDetails && (
              <S>
                <div className="card border-0 shadow-sm p-4 p-md-5">
                  <h2 className="fw-black mb-4">
                    <Building size={26} className="text-primary me-2" />
                    Hotels & Experience
                  </h2>
                  <div className="row g-3 mb-5">
                    {(destDetails.hotels || []).map(h => (
                      <div key={h.id} className="col-md-6">
                        <div className={`select-card h-100 ${selectedHotel?.id === h.id ? 'selected' : ''}`} onClick={() => { setSelectedHotel(h); setSelectedRoom(h.roomOptions?.[0]); }}>
                          <div className="fw-black mb-1">{h.name}</div>
                          <div className="d-flex gap-1 mb-3 text-warning">
                            {[1,2,3,4,5].map(s => <Star key={s} size={12} fill={s <= Math.floor(h.rating) ? 'currentColor' : 'none'} />)}
                          </div>
                          <div className="d-flex flex-column gap-2">
                            {(h.roomOptions || []).map(r => (
                              <div key={r.type}
                                className={`p-2 rounded-lg border small fw-bold transition ${selectedRoom?.type === r.type && selectedHotel?.id === h.id ? 'bg-primary text-white border-primary' : 'bg-light'}`}
                                onClick={e => { e.stopPropagation(); setSelectedHotel(h); setSelectedRoom(r); }}>
                                <div className="d-flex justify-content-between">
                                  <span>{r.type}</span>
                                  <span>{currency}{r.cost}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h4 className="fw-black mb-3">Add-ons</h4>
                  <div className="row g-2 mb-5">
                    {destDetails.activities.map(act => (
                      <div key={act.name} className="col-md-6">
                        <div className={`select-card small ${selectedActivities.find(a => a.name === act.name) ? 'selected' : ''}`} onClick={() => toggleActivity(act)}>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fw-black">{act.name}</span>
                            <span className="text-primary">{currency}{act.cost}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex gap-3">
                    <button className="btn border px-4" onClick={() => setStep(4)}>Back</button>
                    <button className="btn-startup flex-grow-1 justify-content-center" onClick={() => setStep(6)} disabled={!selectedRoom}>Review Trip</button>
                  </div>
                </div>
              </S>
            )}

            {step === 6 && destDetails && (
              <S>
                <div className="card border-0 shadow-sm p-4 p-md-5 text-center">
                  <ShieldCheck size={56} className="text-success mx-auto mb-3" />
                  <h2 className="fw-black display-6 mb-2">Trip Confirmed!</h2>
                  <p className="text-muted mb-5">
                    Your {getDays()}-day trip from <strong>{boardingPoint}</strong> to <strong>{destDetails.name}</strong> is ready.
                  </p>
                  <div className="bg-light rounded-xl p-4 mb-5 border">
                    <div className="small fw-black text-muted text-uppercase mb-2 opacity-50">Total Package Value</div>
                    <div className="display-4 fw-black text-primary lh-1">
                      {currency}{calculateTotal().toLocaleString()}
                    </div>
                  </div>
                  <button className="btn-startup w-100 py-3 fs-5 justify-content-center" onClick={proceedToCheckout}>
                    Confirm & Book Now
                  </button>
                </div>
              </S>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="col-lg-4">
             {/* Total Card */}
             <div className="card border-0 shadow-lg p-4 bg-slate-900 text-white mb-4">
                <div className="small fw-black opacity-50 text-uppercase mb-2">Current Total</div>
                <div className="display-5 fw-black text-primary mb-1">
                   {currency}{calculateTotal().toLocaleString()}
                </div>
                <div className="small opacity-50">{getDays()} days trip</div>
             </div>

             {/* Currency Converter */}
             <div className="card border-0 shadow-sm p-4 mb-4">
                <h6 className="fw-black text-muted text-uppercase mb-4 opacity-50">Currency Converter</h6>
                <div className="d-flex flex-column gap-3">
                   {[
                     { label: 'USD', rate: 1, sym: '$' },
                     { label: 'INR', rate: 83, sym: '₹' },
                     { label: 'EUR', rate: 0.92, sym: '€' },
                     { label: 'GBP', rate: 0.79, sym: '£' },
                   ].map(c => {
                     const base = calculateTotal();
                     const converted = currency === '₹' ? (base / 83) * c.rate : base * c.rate;
                     return (
                       <div key={c.label} className="d-flex justify-content-between align-items-center">
                          <span className="small fw-black text-muted">{c.label}</span>
                          <span className="fw-black">{c.sym}{Math.round(converted).toLocaleString()}</span>
                       </div>
                     );
                   })}
                </div>
             </div>

             {/* Sustainability */}
             <div className="card border-0 shadow-sm p-4 bg-success-soft border border-success">
                <h6 className="fw-black text-success text-uppercase mb-3 opacity-75 d-flex align-items-center gap-2">
                  <Compass size={14} /> Sustainability
                </h6>
                <div className="d-flex justify-content-between align-items-center mb-2">
                   <span className="small fw-bold text-muted">Carbon Offset</span>
                   <span className="fw-black text-success">{selectedTransport?.type === 'EV' || selectedTransport?.type === 'Train' ? 'Low' : 'Medium'}</span>
                </div>
                <div className="progress mb-3" style={{ height: '6px' }}>
                   <div className="progress-bar bg-success" style={{ width: selectedTransport?.type === 'EV' ? '20%' : '65%' }}></div>
                </div>
                <p className="small text-muted m-0 lh-base" style={{ fontSize: '0.75rem' }}>
                  Choosing {selectedTransport?.type || 'public'} transport reduces your footprint by <strong>35%</strong>.
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripBuilder;
