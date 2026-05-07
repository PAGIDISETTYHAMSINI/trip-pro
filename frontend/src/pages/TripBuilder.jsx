import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { MapPin, Wallet, Calendar, Plane, Building, Clock, CheckCircle, ArrowRight, ArrowLeft, Zap, Star, ShieldCheck, Utensils, Activity, Plus, Check, Users, Heart, Camera, Waves, Mountain, Music } from 'lucide-react';

export const TripBuilder = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Advanced AI Planner States
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
  
  // Selection States
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  useEffect(() => {
    axios.get('https://trip-pro.onrender.com/api/destinations')
      .then(res => { setDestinations(res.data); setLoading(false); })
      .catch(err => console.error(err));
  }, []);

  const toggleInterest = (id) => {
    if (interests.includes(id)) setInterests(interests.filter(i => i !== id));
    else setInterests([...interests, id]);
  };

  const fetchDestinationDetails = async () => {
    if (!selectedDestinationId) return;
    setLoading(true);
    try {
      const res = await axios.get(`https://trip-pro.onrender.com/api/destinations/${selectedDestinationId}`);
      setDestDetails(res.data);
      setStep(4); // Skip to transport selection after core inputs
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const calculateTotal = () => {
    let total = 0;
    const totalTravelers = adults + children;
    if (selectedTransport) total += (selectedTransport.cost * totalTravelers);
    const start = new Date(startDate);
    const end = new Date(returnDate);
    let days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    if (days <= 0) days = 1;
    if (selectedRoom) total += (selectedRoom.cost * days * Math.ceil(totalTravelers / 2));
    const actCost = selectedActivities.reduce((sum, a) => sum + (a.cost || 0), 0);
    total += (actCost * totalTravelers);
    const foodCost = selectedRestaurants.reduce((sum, r) => sum + ((r.averageCost || 500) * days), 0);
    total += (foodCost * totalTravelers);
    return Math.round(total);
  };

  const proceedToCheckout = () => {
    const start = new Date(startDate);
    const end = new Date(returnDate);
    let days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    if (days <= 0) days = 1;
    navigate('/checkout', { state: { 
      itinerary: { totalCost: calculateTotal(), currencySymbol: destDetails.name.includes('India') ? '₹' : '$', boardingPoint, travelers: { adults, children, total: adults + children }, dates: { start: startDate, end: returnDate, days }, transport: selectedTransport, hotel: selectedHotel, room: selectedRoom, activities: selectedActivities, restaurants: selectedRestaurants }, 
      destination: destDetails, days 
    }});
  };

  if (loading && step === 1) return (
    <div className="container py-5 text-center">
      <div className="spinner-border text-primary"></div>
      <p className="mt-3 fw-bold">Initializing AI Planner...</p>
    </div>
  );

  return (
    <div className="container-fluid py-4 py-md-5 bg-white min-vh-100">
      <div className="container p-0">
        
        {/* Advanced Progress Header */}
        <div className="d-flex align-items-center justify-content-between mb-5 px-3">
           <Link to="/" className="text-decoration-none text-slate-900 fw-black fs-4">Trip <span className="text-primary">Pro</span></Link>
           <div className="d-flex align-items-center gap-2">
              <span className="small fw-bold text-slate-500">OPTIMIZATION SCORE:</span>
              <div className="badge bg-success-soft text-success px-3 py-1 rounded-full">94% COMPLETE</div>
           </div>
        </div>

        <div className="row g-5">
           {/* Step Navigation Rail */}
           <div className="col-lg-3 d-none d-lg-block">
              <div className="sticky-top" style={{ top: '2rem' }}>
                 <div className="d-flex flex-column gap-4">
                    {[
                      { id: 1, label: 'Route & Basics' },
                      { id: 2, label: 'Interests & Style' },
                      { id: 3, label: 'Group Size' },
                      { id: 4, label: 'Transport' },
                      { id: 5, label: 'Accommodations' },
                      { id: 6, label: 'Review' }
                    ].map(s => (
                      <div key={s.id} className={`d-flex align-items-center gap-3 ${step >= s.id ? 'text-primary' : 'text-slate-400'}`}>
                         <div className={`rounded-full d-flex align-items-center justify-content-center fw-bold shadow-sm transition-all`} 
                              style={{ width: '32px', height: '32px', background: step >= s.id ? 'var(--primary)' : 'var(--slate-100)', color: step >= s.id ? 'white' : 'var(--slate-400)' }}>
                            {step > s.id ? <Check size={16}/> : s.id}
                         </div>
                         <span className="fw-bold small">{s.label}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Main Work Area */}
           <div className="col-lg-6">
              {step === 1 && (
                <div className="fade-in">
                  <h2 className="display-4 mb-4 fw-black">Where is your <br/><span className="text-primary">Next Adventure?</span></h2>
                  <div className="grid-stack gap-4 mt-5">
                    <div className="col-12">
                       <label className="form-label small fw-bold text-slate-500">SELECT DESTINATION</label>
                       <select className="form-startup py-4 fs-5" value={selectedDestinationId} onChange={(e) => setSelectedDestinationId(e.target.value)}>
                          <option value="">Destination?</option>
                          {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                       </select>
                    </div>
                    <div className="col-12">
                       <label className="form-label small fw-bold text-slate-500">BOARDING FROM</label>
                       <input type="text" className="form-startup py-4" placeholder="City Name" value={boardingPoint} onChange={(e) => setBoardingPoint(e.target.value)} />
                    </div>
                  </div>
                  <button className="btn-startup w-100 mt-5 py-4 justify-content-center" onClick={() => setStep(2)} disabled={!selectedDestinationId || !boardingPoint}>
                     CONTINUE TO INTERESTS <ArrowRight size={20}/>
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="fade-in">
                   <h2 className="display-4 mb-4 fw-black">Tell us your <br/><span className="text-primary">Vibe.</span></h2>
                   <div className="row g-3 mt-4">
                      {[
                        { id: 'beach', label: 'Beach', icon: <Waves/> },
                        { id: 'mountain', label: 'Mountain', icon: <Mountain/> },
                        { id: 'culture', label: 'Culture', icon: <Camera/> },
                        { id: 'food', label: 'Foodie', icon: <Utensils/> },
                        { id: 'nightlife', label: 'Nightlife', icon: <Music/> },
                        { id: 'adventure', label: 'Adventure', icon: <Activity/> }
                      ].map(v => (
                        <div key={v.id} className="col-6 col-md-4">
                           <div className={`p-4 border-2 rounded-xl text-center cursor-pointer transition-all ${interests.includes(v.id) ? 'border-primary bg-primary-soft' : 'border-slate-100 hover:border-primary'}`} onClick={() => toggleInterest(v.id)}>
                              <div className={`mb-2 ${interests.includes(v.id) ? 'text-primary' : 'text-slate-400'}`}>{v.icon}</div>
                              <div className="fw-bold small">{v.label}</div>
                           </div>
                        </div>
                      ))}
                   </div>
                   <button className="btn-startup w-100 mt-5 py-4 justify-content-center" onClick={() => setStep(3)}>
                      OPTIMIZE TRAVEL STYLE <ArrowRight size={20}/>
                   </button>
                </div>
              )}

              {step === 3 && (
                <div className="fade-in">
                   <h2 className="display-4 mb-4 fw-black">Finalize <br/><span className="text-primary">Group Details.</span></h2>
                   <div className="grid-stack gap-4 mt-5">
                      <div className="p-4 border rounded-xl d-flex align-items-center justify-content-between">
                         <div className="fw-bold"><Users className="me-2"/> Adults</div>
                         <div className="d-flex align-items-center gap-3">
                            <button className="btn btn-outline-primary rounded-full px-3 py-1" onClick={() => setAdults(Math.max(1, adults-1))}>-</button>
                            <span className="fw-black fs-4">{adults}</span>
                            <button className="btn btn-outline-primary rounded-full px-3 py-1" onClick={() => setAdults(adults+1)}>+</button>
                         </div>
                      </div>
                      <div className="p-4 border rounded-xl d-flex align-items-center justify-content-between">
                         <div className="fw-bold"><Users className="me-2"/> Children</div>
                         <div className="d-flex align-items-center gap-3">
                            <button className="btn btn-outline-primary rounded-full px-3 py-1" onClick={() => setChildren(Math.max(0, children-1))}>-</button>
                            <span className="fw-black fs-4">{children}</span>
                            <button className="btn btn-outline-primary rounded-full px-3 py-1" onClick={() => setChildren(children+1)}>+</button>
                         </div>
                      </div>
                   </div>
                   <button className="btn-startup w-100 mt-5 py-4 justify-content-center" onClick={fetchDestinationDetails}>
                      GENERATE AI ROUTES <Zap size={20}/>
                   </button>
                </div>
              )}

              {step === 4 && destDetails && (
                 <div className="fade-in">
                    <h2 className="display-6 mb-4 fw-black text-primary">Elite Transportation</h2>
                    <div className="d-flex flex-column gap-3">
                       {destDetails.detailedTransport.map(tr => (
                          <div key={tr.id} className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedTransport?.id === tr.id ? 'border-primary bg-primary-soft' : 'border-slate-100'}`} onClick={() => setSelectedTransport(tr)}>
                             <div className="d-flex justify-content-between align-items-center">
                                <div>
                                   <div className="fw-black fs-5">{tr.agency}</div>
                                   <div className="small text-slate-500 fw-bold">{tr.type} | FASTEST ROUTE</div>
                                </div>
                                <div className="text-primary fw-black fs-4">{destDetails.name.includes('India') ? '₹' : '$'}{tr.cost}</div>
                             </div>
                          </div>
                       ))}
                    </div>
                    <button className="btn-startup w-100 mt-5 py-3 justify-content-center" onClick={() => setStep(5)} disabled={!selectedTransport}>
                       NEXT: SELECT STAY <ArrowRight size={20}/>
                    </button>
                 </div>
              )}

              {step === 5 && destDetails && (
                 <div className="fade-in">
                    <h2 className="display-6 mb-4 fw-black text-primary">Premium Accommodations</h2>
                    <div className="grid-stack">
                       {destDetails.hotels.map(h => (
                          <div key={h.id} className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedHotel?.id === h.id ? 'border-primary bg-primary-soft shadow-lg' : 'border-slate-100'}`} onClick={() => { setSelectedHotel(h); setSelectedRoom(h.roomOptions[0]); }}>
                             <div className="fw-black fs-5 mb-1">{h.name}</div>
                             <div className="small text-warning fw-bold mb-3">⭐ {h.rating} EXCELLENT</div>
                             <div className="d-flex flex-column gap-2">
                                {h.roomOptions.map(r => (
                                   <div key={r.type} className={`p-2 rounded-lg border small fw-bold ${selectedRoom?.type === r.type && selectedHotel?.id === h.id ? 'bg-primary text-white' : 'bg-white text-slate-600'}`} onClick={(e) => { e.stopPropagation(); setSelectedHotel(h); setSelectedRoom(r); }}>
                                      <div className="d-flex justify-content-between"><span>{r.type}</span><span>{destDetails.name.includes('India') ? '₹' : '$'}{r.cost}</span></div>
                                   </div>
                                ))}
                             </div>
                          </div>
                       ))}
                    </div>
                    <button className="btn-startup w-100 mt-5 py-3 justify-content-center" onClick={() => setStep(6)} disabled={!selectedRoom}>
                       NEXT: FINAL REVIEW <ArrowRight size={20}/>
                    </button>
                 </div>
              )}

              {step === 6 && (
                 <div className="fade-in text-center py-5 glass-card border-0 bg-white">
                    <div className="p-4 bg-primary-soft rounded-full d-inline-flex mb-4"><ShieldCheck size={48} className="text-primary" /></div>
                    <h2 className="fw-black display-5 mb-3">Trip Secured.</h2>
                    <p className="text-slate-500 mb-5 px-4 fs-5">Our AI has optimized your route from {boardingPoint} to {destDetails.name}. Total value is locked.</p>
                    <div className="p-4 bg-slate-50 rounded-xl mb-5 mx-4 border">
                       <div className="small fw-black text-slate-400 text-uppercase tracking-widest mb-2">Package Value</div>
                       <div className="display-3 fw-black text-primary lh-1">
                          {destDetails.name.includes('India') ? '₹' : '$'}{calculateTotal().toLocaleString()}
                       </div>
                    </div>
                    <div className="px-4">
                       <button className="btn-startup w-100 py-4 justify-content-center fs-4" onClick={proceedToCheckout}>
                          CONFIRM & BOOK TRIP
                       </button>
                    </div>
                 </div>
              )}
           </div>

           {/* Live Budget Analytics Sidebar */}
           <div className="col-lg-3">
              <div className="sticky-top" style={{ top: '2rem' }}>
                 <div className="glass-card p-4 p-md-5 border-0 bg-slate-900 text-white overflow-hidden position-relative">
                    <div className="position-absolute top-0 end-0 p-3 opacity-10"><TrendingUp size={100}/></div>
                    <h5 className="fw-black mb-4 small text-primary tracking-widest text-uppercase">Budget Analytics</h5>
                    <div className="display-5 fw-black text-white mb-1">
                       {destDetails?.name?.includes('India') ? '₹' : '$'}{calculateTotal().toLocaleString()}
                    </div>
                    <p className="small fw-bold opacity-50 mb-4">LIVE ESTIMATE</p>
                    <div className="d-flex flex-column gap-3 small fw-bold opacity-75">
                       <div className="d-flex justify-content-between"><span>TRANSPORT:</span><span className="text-primary">{selectedTransport ? 'YES' : 'NO'}</span></div>
                       <div className="d-flex justify-content-between"><span>GUESTS:</span><span className="text-primary">{adults + children}</span></div>
                    </div>
                    <hr className="border-white border-opacity-10 my-4"/>
                    <div className="p-3 bg-white bg-opacity-5 rounded-lg small border border-white border-opacity-10 text-center">
                       <Zap size={14} className="text-primary me-2"/> Lock now for 15% discount.
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
