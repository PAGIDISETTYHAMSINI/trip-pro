import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { MapPin, Wallet, Calendar, Plane, Train, Bus, Car, Building, Coffee, Map, Clock, Search, CheckCircle, ArrowRight, ArrowLeft, Activity, Zap, Briefcase, ChevronRight, Users, Wifi, Waves, RefreshCw, ShieldCheck } from 'lucide-react';

export const TripBuilder = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [selectedDestinationId, setSelectedDestinationId] = useState('');
  const [boardingPoint, setBoardingPoint] = useState('');
  const [days, setDays] = useState(3);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [returnDate, setReturnDate] = useState(() => {
    let d = new Date(); d.setDate(d.getDate() + 3); return d.toISOString().split('T')[0];
  });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [travelStyle, setTravelStyle] = useState('mid'); 
  const [useBuffer, setUseBuffer] = useState(true); 
  const [destDetails, setDestDetails] = useState(null);
  
  // Selections
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  useEffect(() => {
    axios.get('https://trip-pro.onrender.com/api/destinations')
      .then(res => {
        setDestinations(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  const fetchDestinationDetails = async () => {
    if (!selectedDestinationId) return;
    setLoading(true);
    try {
      const res = await axios.get(`https://trip-pro.onrender.com/api/destinations/${selectedDestinationId}`);
      setDestDetails(res.data);
      setStep(2);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const calculateTotal = () => {
    let total = 0;
    const totalTravelers = adults + children;
    if (selectedTransport) total += (selectedTransport.cost * totalTravelers);
    
    const start = new Date(startDate);
    const end = new Date(returnDate);
    let calculatedDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    if (calculatedDays <= 0) calculatedDays = 1;

    if (selectedRoom) total += (selectedRoom.cost * calculatedDays * Math.ceil(totalTravelers / 2));
    
    const activitiesCost = selectedActivities.reduce((sum, a) => sum + a.cost, 0);
    total += (activitiesCost * totalTravelers);
    
    const foodCost = selectedRestaurants.reduce((sum, r) => sum + (r.averageCost * calculatedDays), 0);
    total += (foodCost * totalTravelers);

    if (useBuffer) total += (total * 0.15);
    return Math.round(total);
  };

  const proceedToCheckout = () => {
    const start = new Date(startDate);
    const end = new Date(returnDate);
    let calculatedDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    if (calculatedDays <= 0) calculatedDays = 1;

    const itinerary = {
      totalCost: calculateTotal(),
      currencySymbol: destDetails.name.includes('India') || destDetails.name.includes('Andaman') ? '₹' : '$',
      boardingPoint: boardingPoint || 'Not specified',
      travelers: { adults, children, total: adults + children },
      dates: { start: startDate, end: returnDate, days: calculatedDays },
      transport: selectedTransport,
      hotel: selectedHotel,
      room: selectedRoom,
      activities: selectedActivities,
      restaurants: selectedRestaurants,
      cancellationPolicy: destDetails.cancellationPolicy
    };
    navigate('/checkout', { state: { itinerary, destination: destDetails, days: calculatedDays } });
  };

  if (loading && step === 1) return (
    <div className="container py-5 text-center">
      <div className="spinner-border text-primary" style={{width: '3.5rem', height: '3.5rem'}}></div>
      <p className="mt-4 fw-black fs-4">Syncing Premium Routes...</p>
    </div>
  );

  return (
    <div className="container py-4 py-md-5">
      <div className="row g-4">
        
        {/* Step Progress - Unique Circle Design */}
        <div className="col-12 mb-4">
          <div className="glass p-3 d-flex justify-content-between align-items-center no-scrollbar overflow-auto px-4 shadow-xl border-0">
            {[1,2,3,4,5,6].map(num => (
              <div key={num} className={`d-flex flex-column align-items-center gap-2 mx-3 ${step >= num ? 'text-primary' : 'text-muted opacity-25'}`}>
                <div className={`rounded-circle d-flex align-items-center justify-content-center fw-black shadow-lg transition-all`} 
                     style={{ 
                       width: '36px', height: '36px', 
                       background: step >= num ? 'var(--primary)' : 'rgba(255,255,255,0.05)', 
                       color: step >= num ? 'white' : '#94a3b8', 
                       fontSize: '0.9rem',
                       border: step === num ? '2px solid white' : 'none',
                       transform: step === num ? 'scale(1.2)' : 'scale(1)'
                     }}>
                  {step > num ? <CheckCircle size={20}/> : num}
                </div>
                <span className="fw-black" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>STEP {num}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          {step === 1 && (
            <div className="glass shadow-2xl p-4 p-md-5 fade-in border-top border-primary border-5 rounded-4">
              <div className="d-flex align-items-center gap-4 mb-5">
                <div className="p-3 rounded-4 bg-primary bg-opacity-10 text-primary shadow-glow"><MapPin size={36} /></div>
                <div>
                  <h2 className="fw-black mb-1 display-6">Route Config</h2>
                  <p className="text-muted small fw-bold opacity-75">Tell us where your journey begins.</p>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label">Destination Selection</label>
                  <select className="form-select form-select-lg py-4 px-4 fs-5" value={selectedDestinationId} onChange={(e) => setSelectedDestinationId(e.target.value)}>
                    <option value="">Where to?</option>
                    {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Boarding Point</label>
                  <input type="text" className="form-control form-control-lg py-4 px-4 fs-6" placeholder="e.g. Bangalore" value={boardingPoint} onChange={(e) => setBoardingPoint(e.target.value)} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Travel Style</label>
                  <select className="form-select form-select-lg py-4 px-4 fs-6" value={travelStyle} onChange={(e) => setTravelStyle(e.target.value)}>
                    <option value="budget">Economic Efficiency</option>
                    <option value="mid">Premium Experience</option>
                    <option value="luxury">Luxury Elite</option>
                  </select>
                </div>
                <div className="col-6"><label className="form-label">Start Date</label><input type="date" className="form-control py-4 px-4" value={startDate} onChange={(e) => setStartDate(e.target.value)} /></div>
                <div className="col-6"><label className="form-label">Return Date</label><input type="date" className="form-control py-4 px-4" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} /></div>
                
                <div className="col-12 mt-5">
                  <button className="btn-next-step w-100 py-4 shadow-2xl rounded-4 text-center d-flex align-items-center justify-content-center gap-3 fs-4" onClick={fetchDestinationDetails} disabled={!selectedDestinationId || !boardingPoint}>
                    CONTINUE TO TRANSPORT <ArrowRight size={28}/>
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && destDetails && (
            <div className="fade-in">
              <h2 className="fw-black mb-4 display-6 px-1">Transportation <span className="text-primary">Options</span></h2>
              <div className="d-flex flex-column gap-3">
                {destDetails.detailedTransport.map(tr => (
                  <div key={tr.id} className={`glass p-4 p-md-5 cursor-pointer shadow-sm rounded-4 border-start border-5 transition-all ${selectedTransport?.id === tr.id ? 'border-primary bg-primary bg-opacity-5' : 'border-white border-opacity-10'}`} onClick={() => setSelectedTransport(tr)}>
                    <div className="row g-3 align-items-center">
                      <div className="col-12 col-md-8">
                         <div className="d-flex align-items-center gap-3 mb-2">
                            <h4 className="fw-black mb-0 fs-3">{tr.agency}</h4>
                            {selectedTransport?.id === tr.id && <CheckCircle size={24} className="text-primary"/>}
                         </div>
                         <div className="d-flex align-items-center gap-3 small text-muted fw-bold">
                            <span className="d-flex align-items-center gap-1"><Plane size={14}/> {tr.type}</span>
                            <span className="d-flex align-items-center gap-1"><Clock size={14}/> {tr.departureTime}</span>
                         </div>
                      </div>
                      <div className="col-12 col-md-4 text-md-end mt-3 mt-md-0">
                        <div className="display-6 fw-black text-primary">{destDetails.name.includes('India') ? '₹' : '$'}{tr.cost.toLocaleString()}</div>
                        <div className="small text-muted fw-bold">PER PERSON</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 d-flex gap-3 flex-column flex-sm-row">
                <button className="btn btn-lg btn-outline-light border-white border-opacity-20 py-4 px-5 rounded-4 fw-black order-2 order-sm-1" onClick={handleBack}>BACK</button>
                <button className="btn-next-step flex-grow-1 shadow-2xl py-4 rounded-4 order-1 order-sm-2 fs-4" onClick={handleNext} disabled={!selectedTransport}>
                  CHOOSE STAY <ArrowRight size={28}/>
                </button>
              </div>
            </div>
          )}

          {step === 3 && destDetails && (
             <div className="fade-in">
                <h2 className="fw-black mb-4 display-6 px-1">Elite <span className="text-primary">Stays</span></h2>
                <div className="row g-4">
                  {destDetails.hotels.map(h => (
                    <div key={h.id} className="col-12 col-md-6">
                       <div className={`glass h-100 p-4 p-md-5 rounded-4 cursor-pointer border-0 shadow-lg position-relative overflow-hidden ${selectedHotel?.id === h.id ? 'bg-primary bg-opacity-5' : ''}`} onClick={() => { setSelectedHotel(h); setSelectedRoom(h.roomOptions[0]); }}>
                          {selectedHotel?.id === h.id && <div className="position-absolute top-0 end-0 p-3"><CheckCircle className="text-primary" size={28}/></div>}
                          <h4 className="fw-black mb-2 fs-3 pe-4">{h.name}</h4>
                          <div className="d-flex align-items-center gap-1 text-warning mb-4">
                             {[1,2,3,4,5].map(s => <Star key={s} size={14} fill={s <= Math.floor(h.rating) ? '#f59e0b' : 'none'} stroke={s <= Math.floor(h.rating) ? '#f59e0b' : '#64748b'} />)}
                             <span className="small ms-2 text-muted fw-bold">({h.rating})</span>
                          </div>
                          <div className="d-flex flex-column gap-3 mt-4">
                             {h.roomOptions.map(r => (
                                <div key={r.type} className={`p-4 rounded-4 border-2 transition-all ${selectedRoom?.type === r.type && selectedHotel?.id === h.id ? 'border-primary bg-primary bg-opacity-10 shadow-glow' : 'border-white border-opacity-10 opacity-60'}`} onClick={(e) => { e.stopPropagation(); setSelectedHotel(h); setSelectedRoom(r); }}>
                                   <div className="d-flex justify-content-between align-items-center">
                                      <span className="fw-black text-uppercase small tracking-widest">{r.type}</span>
                                      <span className="fw-black text-primary fs-5">{destDetails.name.includes('India') ? '₹' : '$'}{r.cost.toLocaleString()}</span>
                                   </div>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 d-flex gap-3 flex-column flex-sm-row">
                   <button className="btn btn-lg btn-outline-light border-white border-opacity-20 py-4 px-5 rounded-4 fw-black order-2 order-sm-1" onClick={handleBack}>BACK</button>
                   <button className="btn-next-step flex-grow-1 shadow-2xl py-4 rounded-4 order-1 order-sm-2 fs-4" onClick={handleNext} disabled={!selectedRoom}>
                      REVIEW TRIP <ArrowRight size={28}/>
                   </button>
                </div>
             </div>
          )}

          {step >= 4 && (
             <div className="fade-in text-center py-5 glass rounded-4 shadow-2xl border-top border-primary border-5 mx-2 mx-md-0">
                <div className="p-4 bg-primary bg-opacity-10 rounded-circle d-inline-block mb-4 shadow-glow">
                   <ShieldCheck size={64} className="text-primary" />
                </div>
                <h2 className="fw-black mb-2 display-5">Itinerary Secured</h2>
                <p className="text-muted mb-5 px-4 fw-bold opacity-75">Professional route from {boardingPoint} to {destDetails.name} is ready for booking.</p>
                
                <div className="mx-4 p-5 bg-white bg-opacity-5 rounded-4 mb-5 border border-white border-opacity-10 shadow-inner">
                   <div className="small text-muted fw-black text-uppercase tracking-widest mb-2">Exclusive Package Total</div>
                   <div className="display-2 fw-black text-primary lh-1 mb-2">
                      {destDetails.name.includes('India') ? '₹' : '$'}{calculateTotal().toLocaleString()}
                   </div>
                   <p className="small text-muted fw-bold">ALL TAXES & CONCIERGE FEES INCLUDED</p>
                </div>

                <div className="d-flex flex-column gap-3 px-4 px-md-5">
                   <button className="btn-primary-custom w-100 py-4 rounded-4 fw-black fs-4 justify-content-center shadow-2xl" onClick={proceedToCheckout}>
                      CONFIRM & BOOK TRIP <ArrowRight size={24}/>
                   </button>
                   <button className="btn btn-link text-muted text-decoration-none fw-black small" onClick={() => setStep(1)}>RESTART PLANNER</button>
                </div>
             </div>
          )}
        </div>

        {/* Dynamic Budget Sidebar */}
        <div className="col-12 col-lg-4 order-1 order-lg-2">
           <div className="sticky-top" style={{ top: '1.5rem' }}>
              <div className="glass p-4 p-md-5 rounded-4 shadow-2xl border-bottom border-warning border-4">
                 <h5 className="fw-black mb-4 d-flex align-items-center gap-2 text-uppercase small tracking-widest text-warning"><Wallet size={18} /> Budget Intel</h5>
                 <div className="display-4 fw-black text-white text-center mb-1 lh-1">
                   {destDetails?.name?.includes('India') ? '₹' : '$'}{calculateTotal().toLocaleString()}
                 </div>
                 <p className="small text-muted text-center fw-bold opacity-50 mb-4">LIVE ESTIMATE</p>
                 
                 <div className="d-flex flex-column gap-3">
                    <div className="d-flex justify-content-between small px-1">
                       <span className="fw-bold opacity-50">STAY TYPE:</span>
                       <span className="fw-black text-primary">{selectedHotel ? 'SELECTED' : 'TBD'}</span>
                    </div>
                    <div className="d-flex justify-content-between small px-1">
                       <span className="fw-bold opacity-50">GUESTS:</span>
                       <span className="fw-black text-primary">{adults + children} PERSONS</span>
                    </div>
                 </div>
              </div>
              
              <div className="mt-4 p-4 glass bg-primary bg-opacity-5 rounded-4 border-0 text-center shadow-lg">
                 <Zap className="text-primary mb-2 shadow-glow" size={24}/>
                 <p className="small fw-bold text-muted mb-0 lh-sm">Our AI Concierge is currently tracking prices for this route. <strong>Lock in now to save 12%.</strong></p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
