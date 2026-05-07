import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { MapPin, ArrowRight, Check, ShieldCheck, Waves, Mountain, Camera, Utensils, Music, Activity, Users, Zap, Wallet, TrendingUp, Plane, Building, Star } from 'lucide-react';

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

  useEffect(() => {
    axios.get(`${API}/api/destinations`)
      .then(res => setDestinations(res.data || []))
      .catch(() => {})
      .finally(() => setDestLoading(false));
  }, []);

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

  /* STEPS META */
  const stepLabels = ['Route', 'Dates', 'Interests', 'Transport', 'Stay', 'Review'];

  const S = ({ children }) => <div className="fade-in">{children}</div>;

  const NextBtn = ({ onClick, disabled, label = 'Continue', icon }) => (
    <button className="btn-next-step" onClick={onClick} disabled={disabled} style={{ marginTop: '2rem' }}>
      {label} {icon || <ArrowRight size={18} />}
    </button>
  );

  return (
    <div style={{ background: 'var(--slate-50)', minHeight: '100vh', padding: '2rem 0' }}>
      <div className="container">
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ fontWeight: 900, fontSize: '1.3rem', color: 'var(--slate-900)' }}>
            ✈ Trip<span style={{ color: 'var(--primary)' }}>Pro</span>
          </Link>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-500)' }}>
            Step {step} of {stepLabels.length}
          </span>
        </div>

        {/* PROGRESS */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', overflowX: 'auto' }}>
          {stepLabels.map((label, i) => {
            const num = i + 1;
            const cls = step > num ? 'done' : step === num ? 'active' : 'inactive';
            return (
              <div key={num} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                <div className={`step-pill ${cls}`}>{step > num ? <Check size={14} /> : num}</div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: step >= num ? 'var(--primary)' : 'var(--slate-400)' }}>{label}</span>
                {i < stepLabels.length - 1 && <div style={{ width: '24px', height: '2px', background: step > num ? 'var(--primary)' : 'var(--slate-200)' }}></div>}
              </div>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '2rem', alignItems: 'start' }}>
          {/* MAIN CONTENT */}
          <div>
            {/* STEP 1 — Route */}
            {step === 1 && (
              <S>
                <div className="card" style={{ padding: '2rem' }}>
                  <h2 style={{ fontWeight: 900, marginBottom: '1.75rem' }}>
                    <MapPin size={28} style={{ color: 'var(--primary)', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                    Where to?
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label className="form-label">Destination</label>
                      <select className="form-select" value={selectedDestinationId} onChange={e => setSelectedDestinationId(e.target.value)}>
                        <option value="">{destLoading ? 'Loading...' : 'Select a destination'}</option>
                        {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Boarding From</label>
                      <input type="text" className="form-control" placeholder="e.g. Bangalore"
                        value={boardingPoint} onChange={e => setBoardingPoint(e.target.value)} />
                    </div>
                    <div>
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

            {/* STEP 2 — Dates & Group */}
            {step === 2 && (
              <S>
                <div className="card" style={{ padding: '2rem' }}>
                  <h2 style={{ fontWeight: 900, marginBottom: '1.75rem' }}>Dates & Group Size</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label className="form-label">Start Date</label>
                      <input type="date" className="form-control" value={startDate} onChange={e => setStartDate(e.target.value)} />
                    </div>
                    <div>
                      <label className="form-label">Return Date</label>
                      <input type="date" className="form-control" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    {[{ label: 'Adults', val: adults, set: setAdults, min: 1 }, { label: 'Children', val: children, set: setChildren, min: 0 }].map(g => (
                      <div key={g.label} style={{ border: '1.5px solid var(--slate-200)', borderRadius: 'var(--radius-lg)', padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                          <Users size={18} style={{ color: 'var(--slate-400)' }} /> {g.label}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <button onClick={() => g.set(Math.max(g.min, g.val - 1))} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid var(--slate-200)', background: 'var(--white)', cursor: 'pointer', fontWeight: 700, fontSize: '1.1rem' }}>−</button>
                          <span style={{ fontWeight: 900, fontSize: '1.25rem', minWidth: '24px', textAlign: 'center' }}>{g.val}</span>
                          <button onClick={() => g.set(g.val + 1)} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid var(--slate-200)', background: 'var(--white)', cursor: 'pointer', fontWeight: 700, fontSize: '1.1rem' }}>+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <button className="btn" onClick={() => setStep(1)}>← Back</button>
                    <button className="btn-next-step" onClick={() => setStep(3)} style={{ flex: 1 }}>Pick Interests <ArrowRight size={18} /></button>
                  </div>
                </div>
              </S>
            )}

            {/* STEP 3 — Interests */}
            {step === 3 && (
              <S>
                <div className="card" style={{ padding: '2rem' }}>
                  <h2 style={{ fontWeight: 900, marginBottom: '0.5rem' }}>What's your vibe?</h2>
                  <p style={{ color: 'var(--slate-500)', marginBottom: '1.75rem' }}>Select all that apply. AI uses this to personalize your route.</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    {[
                      { id: 'beach', label: 'Beach', Icon: Waves },
                      { id: 'mountain', label: 'Mountain', Icon: Mountain },
                      { id: 'culture', label: 'Culture', Icon: Camera },
                      { id: 'food', label: 'Foodie', Icon: Utensils },
                      { id: 'nightlife', label: 'Nightlife', Icon: Music },
                      { id: 'adventure', label: 'Adventure', Icon: Activity },
                    ].map(({ id, label, Icon }) => (
                      <div key={id} className={`vibe-card ${interests.includes(id) ? 'active' : ''}`} onClick={() => toggleInterest(id)}>
                        <Icon size={28} style={{ marginBottom: '0.5rem' }} />
                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <button className="btn" onClick={() => setStep(2)}>← Back</button>
                    <button className="btn-next-step" onClick={fetchDestDetails} disabled={apiLoading} style={{ flex: 1 }}>
                      {apiLoading ? 'Generating...' : 'Generate AI Route'} <Zap size={18} />
                    </button>
                  </div>
                </div>
              </S>
            )}

            {/* STEP 4 — Transport */}
            {step === 4 && destDetails && (
              <S>
                <div className="card" style={{ padding: '2rem' }}>
                  <h2 style={{ fontWeight: 900, marginBottom: '1.75rem' }}>
                    <Plane size={26} style={{ color: 'var(--primary)', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                    Select Transport
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {(destDetails.detailedTransport || []).map(tr => (
                      <div key={tr.id} className={`select-card ${selectedTransport?.id === tr.id ? 'selected' : ''}`} onClick={() => setSelectedTransport(tr)}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>{tr.agency}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--slate-500)', marginTop: '0.2rem' }}>{tr.type} · {boardingPoint} → {destDetails.name}</div>
                          </div>
                          <div style={{ fontWeight: 900, fontSize: '1.5rem', color: 'var(--primary)' }}>{currency}{tr.cost?.toLocaleString()}</div>
                        </div>
                      </div>
                    ))}
                    {(!destDetails.detailedTransport || destDetails.detailedTransport.length === 0) && (
                      <p style={{ color: 'var(--slate-500)', textAlign: 'center', padding: '2rem' }}>No transport data available.</p>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <button className="btn" onClick={() => setStep(3)}>← Back</button>
                    <button className="btn-next-step" onClick={() => setStep(5)} disabled={!selectedTransport} style={{ flex: 1 }}>Choose Hotel <ArrowRight size={18} /></button>
                  </div>
                </div>
              </S>
            )}

            {/* STEP 5 — Hotel */}
            {step === 5 && destDetails && (
              <S>
                <div className="card" style={{ padding: '2rem' }}>
                  <h2 style={{ fontWeight: 900, marginBottom: '1.75rem' }}>
                    <Building size={26} style={{ color: 'var(--primary)', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                    Hotels & Rooms
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                    {(destDetails.hotels || []).map(h => (
                      <div key={h.id} className={`select-card ${selectedHotel?.id === h.id ? 'selected' : ''}`} onClick={() => { setSelectedHotel(h); setSelectedRoom(h.roomOptions?.[0]); }}>
                        <div style={{ fontWeight: 800, marginBottom: '0.35rem' }}>{h.name}</div>
                        <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
                          {[1,2,3,4,5].map(s => <Star key={s} size={12} fill={s <= Math.floor(h.rating) ? 'var(--warning)' : 'none'} stroke="var(--warning)" />)}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {(h.roomOptions || []).map(r => (
                            <div key={r.type}
                              className={`select-card ${selectedRoom?.type === r.type && selectedHotel?.id === h.id ? 'selected' : ''}`}
                              style={{ padding: '0.6rem 0.875rem', borderRadius: 'var(--radius-md)', margin: 0 }}
                              onClick={e => { e.stopPropagation(); setSelectedHotel(h); setSelectedRoom(r); }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{r.type}</span>
                                <span style={{ fontWeight: 900, color: 'var(--primary)', fontSize: '0.9rem' }}>{currency}{r.cost?.toLocaleString()}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Activities */}
                  {(destDetails.activities || []).length > 0 && (
                    <>
                      <h4 style={{ fontWeight: 800, marginBottom: '0.75rem', marginTop: '1.5rem' }}>Activities</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        {destDetails.activities.map(act => (
                          <div key={act.name} className={`select-card ${selectedActivities.find(a => a.name === act.name) ? 'selected' : ''}`} onClick={() => toggleActivity(act)} style={{ padding: '0.875rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                              <div>
                                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{act.name}</div>
                                <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>{act.proximity}</div>
                              </div>
                              <div style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '0.9rem' }}>{currency}{act.cost}</div>
                            </div>
                            {selectedActivities.find(a => a.name === act.name) && <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 700, marginTop: '0.4rem' }}>✓ Added</div>}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Restaurants */}
                  {(destDetails.restaurants || []).length > 0 && (
                    <>
                      <h4 style={{ fontWeight: 800, marginBottom: '0.75rem' }}>Dining</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        {destDetails.restaurants.map(res => (
                          <div key={res.name} className={`select-card ${selectedRestaurants.find(r => r.name === res.name) ? 'selected' : ''}`} onClick={() => toggleRestaurant(res)} style={{ padding: '0.875rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                              <div>
                                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{res.name}</div>
                                <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>{res.cuisine} · ⭐{res.rating}</div>
                              </div>
                              <div style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '0.9rem' }}>{currency}{res.averageCost}</div>
                            </div>
                            {selectedRestaurants.find(r => r.name === res.name) && <div style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 700, marginTop: '0.4rem' }}>✓ Added</div>}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn" onClick={() => setStep(4)}>← Back</button>
                    <button className="btn-next-step" onClick={() => setStep(6)} disabled={!selectedRoom} style={{ flex: 1 }}>Review Trip <ArrowRight size={18} /></button>
                  </div>
                </div>
              </S>
            )}

            {/* STEP 6 — Review */}
            {step === 6 && destDetails && (
              <S>
                <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                  <ShieldCheck size={56} style={{ color: 'var(--success)', margin: '0 auto 1.25rem' }} />
                  <h2 style={{ fontWeight: 900, fontSize: '2rem', marginBottom: '0.5rem' }}>Trip Confirmed!</h2>
                  <p style={{ color: 'var(--slate-500)', marginBottom: '2rem' }}>
                    Your {getDays()}-day trip from <strong>{boardingPoint}</strong> to <strong>{destDetails.name}</strong> is ready.
                  </p>
                  <div style={{ background: 'var(--slate-50)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', marginBottom: '2rem', border: '1px solid var(--slate-200)' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Total Package Value</div>
                    <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>
                      {currency}{calculateTotal().toLocaleString()}
                    </div>
                  </div>
                  <button className="btn-startup w-100" style={{ justifyContent: 'center', padding: '1rem', fontSize: '1rem' }} onClick={proceedToCheckout}>
                    Confirm & Book Now
                  </button>
                </div>
              </S>
            )}
          </div>

          {/* SIDEBAR BUDGET */}
          <div>
            <div className="budget-sidebar" style={{ position: 'sticky', top: '6rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Live Budget</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: '0.25rem' }}>
                {currency}{calculateTotal().toLocaleString()}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>REAL-TIME ESTIMATE</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', fontWeight: 700 }}>
                {[
                  { label: 'Destination', val: destDetails?.name || 'Not set' },
                  { label: 'Guests', val: adults + children },
                  { label: 'Duration', val: `${getDays()} days` },
                  { label: 'Transport', val: selectedTransport ? '✓ Selected' : 'Pending' },
                  { label: 'Hotel', val: selectedHotel ? '✓ Selected' : 'Pending' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.75 }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
                    <span style={{ color: '#fff' }}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripBuilder;
