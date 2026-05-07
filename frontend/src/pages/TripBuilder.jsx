import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { MapPin, Wallet, Calendar, Plane, Building, Clock, CheckCircle, ArrowRight, ArrowLeft, Zap, Star, ShieldCheck, Utensils, Activity, Plus, Check } from 'lucide-react';

export const TripBuilder = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Selection States
  const [selectedDestinationId, setSelectedDestinationId] = useState('');
  const [boardingPoint, setBoardingPoint] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [returnDate, setReturnDate] = useState(() => {
    let d = new Date(); d.setDate(d.getDate() + 3); return d.toISOString().split('T')[0];
  });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [travelStyle, setTravelStyle] = useState('mid'); 
  const [destDetails, setDestDetails] = useState(null);
  
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

  const fetchDestinationDetails = async () => {
    if (!selectedDestinationId) return;
    setLoading(true);
    try {
      const res = await axios.get(`https://trip-pro.onrender.com/api/destinations/${selectedDestinationId}`);
      setDestDetails(res.data);
      setStep(2);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const toggleActivity = (act) => {
    if (selectedActivities.find(a => a.name === act.name)) {
      setSelectedActivities(selectedActivities.filter(a => a.name !== act.name));
    } else {
      setSelectedActivities([...selectedActivities, act]);
    }
  };

  const toggleRestaurant = (res) => {
    if (selectedRestaurants.find(r => r.name === res.name)) {
      setSelectedRestaurants(selectedRestaurants.filter(r => r.name !== res.name));
    } else {
      setSelectedRestaurants([...selectedRestaurants, res]);
    }
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

    const itinerary = {
      totalCost: calculateTotal(),
      currencySymbol: destDetails.name.includes('India') ? '₹' : '$',
      boardingPoint,
      travelers: { adults, children, total: adults + children },
      dates: { start: startDate, end: returnDate, days },
      transport: selectedTransport,
      hotel: selectedHotel,
      room: selectedRoom,
      activities: selectedActivities,
      restaurants: selectedRestaurants
    };
    navigate('/checkout', { state: { itinerary, destination: destDetails, days } });
  };

  if (loading && step === 1) return (
    <div className="container py-5 text-center">
      <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}}></div>
      <p className="mt-3 fw-bold">Syncing Routes...</p>
    </div>
  );

  return (
    <div className="container py-4 py-md-5">
      <div className="row g-4">
        {/* Step Progress */}
        <div className="col-12 mb-4">
          <div className="glass p-3 d-flex justify-content-between align-items-center no-scrollbar overflow-auto px-4 shadow-sm border-0">
            {[1,2,3,4,5,6].map(num => (
              <div key={num} className={`d-flex flex-column align-items-center gap-1 mx-2 ${step >= num ? 'text-primary' : 'text-muted opacity-25'}`}>
                <div className={`rounded-circle d-flex align-items-center justify-content-center fw-black shadow-sm`} 
                     style={{ width: '32px', height: '32px', background: step >= num ? 'var(--primary)' : '#eee', color: step >= num ? 'white' : '#777', fontSize: '0.8rem' }}>
                  {step > num ? <CheckCircle size={16}/> : num}
                </div>
                <span className="fw-bold" style={{ fontSize: '0.6rem' }}>STEP {num}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Panel */}
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          {step === 1 && (
            <div className="glass p-4 p-md-5 shadow-lg border-top border-5 border-primary rounded-4">
              <h2 className="fw-black mb-4"><MapPin size={32} className="text-primary me-2"/> Trip Basics</h2>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Destination</label>
                  <select className="form-select" value={selectedDestinationId} onChange={(e) => setSelectedDestinationId(e.target.value)}>
                    <option value="">Select Where to Go</option>
                    {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Boarding Point</label>
                  <input type="text" className="form-control" placeholder="e.g. Hyderabad" value={boardingPoint} onChange={(e) => setBoardingPoint(e.target.value)} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Style</label>
                  <select className="form-select" value={travelStyle} onChange={(e) => setTravelStyle(e.target.value)}>
                    <option value="budget">Economic</option>
                    <option value="mid">Premium</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>
                <div className="col-12 mt-4 pt-2">
                  <button className="btn-next-step py-3 shadow-lg" onClick={fetchDestinationDetails} disabled={!selectedDestinationId || !boardingPoint}>
                    CONTINUE TO TRANSPORT <ArrowRight size={20}/>
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && destDetails && (
            <div className="fade-in">
              <h2 className="fw-black mb-4">Select Transport</h2>
              <div className="row g-3">
                {destDetails.detailedTransport.map(tr => (
                  <div key={tr.id} className={`glass p-4 cursor-pointer border-start border-5 shadow-sm rounded-4 ${selectedTransport?.id === tr.id ? 'border-primary bg-primary bg-opacity-5' : 'border-light'}`} onClick={() => setSelectedTransport(tr)}>
                    <div className="row align-items-center">
                      <div className="col-12 col-md-8">
                         <h4 className="fw-black mb-1">{tr.agency}</h4>
                         <p className="small text-muted mb-0">{tr.type} | {tr.departureTime} - {tr.arrivalTime}</p>
                      </div>
                      <div className="col-12 col-md-4 text-md-end mt-2 mt-md-0">
                        <div className="fs-3 fw-black text-primary">{destDetails.name.includes('India') ? '₹' : '$'}{tr.cost}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 d-flex gap-2">
                <button className="btn btn-lg btn-light border py-3 px-5 rounded-3 fw-bold" onClick={() => setStep(1)}>BACK</button>
                <button className="btn-next-step flex-grow-1 shadow-lg py-3 rounded-3" onClick={() => setStep(3)} disabled={!selectedTransport}>
                  NEXT: SELECT STAY <ArrowRight size={20}/>
                </button>
              </div>
            </div>
          )}

          {step === 3 && destDetails && (
             <div className="fade-in">
                <h2 className="fw-black mb-4">Hotel & Room</h2>
                <div className="row g-4">
                  {destDetails.hotels.map(h => (
                    <div key={h.id} className="col-12 col-md-6">
                       <div className={`glass h-100 p-4 rounded-4 cursor-pointer border ${selectedHotel?.id === h.id ? 'border-primary shadow' : 'border-light'}`} onClick={() => { setSelectedHotel(h); setSelectedRoom(h.roomOptions[0]); }}>
                          <h4 className="fw-black mb-2">{h.name}</h4>
                          <div className="badge bg-warning text-dark mb-3">⭐ {h.rating} Rating</div>
                          <div className="d-flex flex-column gap-2">
                             {h.roomOptions.map(r => (
                                <div key={r.type} className={`p-3 rounded-3 border small fw-bold ${selectedRoom?.type === r.type && selectedHotel?.id === h.id ? 'border-primary bg-primary bg-opacity-5' : 'border-light bg-light'}`} onClick={(e) => { e.stopPropagation(); setSelectedHotel(h); setSelectedRoom(r); }}>
                                   <div className="d-flex justify-content-between">{r.type} <span className="text-primary">{destDetails.name.includes('India') ? '₹' : '$'}{r.cost}</span></div>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 d-flex gap-2">
                   <button className="btn btn-lg btn-light border py-3 px-5 rounded-3 fw-bold" onClick={() => setStep(2)}>BACK</button>
                   <button className="btn-next-step flex-grow-1 shadow-lg py-3 rounded-3" onClick={() => setStep(4)} disabled={!selectedRoom}>
                      NEXT: EXPERIENCES <ArrowRight size={20}/>
                   </button>
                </div>
             </div>
          )}

          {step === 4 && destDetails && (
             <div className="fade-in">
                <h2 className="fw-black mb-4">Activities & Experiences</h2>
                <div className="row g-3">
                  {destDetails.activities.map(act => (
                    <div key={act.name} className="col-12 col-md-6">
                       <div className={`glass p-4 rounded-4 cursor-pointer border ${selectedActivities.find(a => a.name === act.name) ? 'border-primary bg-primary bg-opacity-5' : 'border-light'}`} onClick={() => toggleActivity(act)}>
                          <div className="d-flex justify-content-between align-items-start">
                             <div>
                                <h5 className="fw-black mb-1">{act.name}</h5>
                                <p className="small text-muted mb-0">{act.proximity}</p>
                             </div>
                             <div className="text-primary fw-black">{destDetails.name.includes('India') ? '₹' : '$'}{act.cost}</div>
                          </div>
                          {selectedActivities.find(a => a.name === act.name) && <div className="mt-2 text-success small fw-bold"><Check size={14}/> Selected</div>}
                       </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 d-flex gap-2">
                   <button className="btn btn-lg btn-light border py-3 px-5 rounded-3 fw-bold" onClick={() => setStep(3)}>BACK</button>
                   <button className="btn-next-step flex-grow-1 shadow-lg py-3 rounded-3" onClick={() => setStep(5)}>
                      NEXT: DINING OPTIONS <ArrowRight size={20}/>
                   </button>
                </div>
             </div>
          )}

          {step === 5 && destDetails && (
             <div className="fade-in">
                <h2 className="fw-black mb-4">Dining & Food</h2>
                <div className="row g-3">
                  {destDetails.restaurants.map(res => (
                    <div key={res.name} className="col-12 col-md-6">
                       <div className={`glass p-4 rounded-4 cursor-pointer border ${selectedRestaurants.find(r => r.name === res.name) ? 'border-primary bg-primary bg-opacity-5' : 'border-light'}`} onClick={() => toggleRestaurant(res)}>
                          <div className="d-flex justify-content-between align-items-start">
                             <div>
                                <h5 className="fw-black mb-1">{res.name}</h5>
                                <p className="small text-muted mb-0">{res.cuisine} • ⭐{res.rating}</p>
                             </div>
                             <div className="text-primary fw-black">{destDetails.name.includes('India') ? '₹' : '$'}{res.averageCost}</div>
                          </div>
                          {selectedRestaurants.find(r => r.name === res.name) && <div className="mt-2 text-success small fw-bold"><Check size={14}/> Added to Trip</div>}
                       </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 d-flex gap-2">
                   <button className="btn btn-lg btn-light border py-3 px-5 rounded-3 fw-bold" onClick={() => setStep(4)}>BACK</button>
                   <button className="btn-next-step flex-grow-1 shadow-lg py-3 rounded-3" onClick={() => setStep(6)}>
                      REVIEW FINAL TRIP <ArrowRight size={20}/>
                   </button>
                </div>
             </div>
          )}

          {step === 6 && (
             <div className="fade-in text-center py-5 glass shadow-lg border-top border-5 border-success rounded-4">
                <ShieldCheck size={64} className="text-success mb-4" />
                <h2 className="fw-black mb-2">Itinerary Verified!</h2>
                <p className="text-muted mb-4 px-4">All selections for {boardingPoint} to {destDetails.name} confirmed.</p>
                
                <div className="mx-4 p-4 bg-light rounded-4 mb-4 border border-dashed border-primary">
                   <div className="d-flex justify-content-between align-items-center fs-3 fw-black text-primary">
                      <span>Total Quote:</span>
                      <span>{destDetails.name.includes('India') ? '₹' : '$'}{calculateTotal().toLocaleString()}</span>
                   </div>
                </div>

                <div className="px-4">
                   <button className="btn btn-success w-100 py-3 rounded-3 fw-black fs-5 shadow-lg mb-3" onClick={proceedToCheckout}>
                      PROCEED TO SECURE BOOKING
                   </button>
                   <button className="btn btn-link text-muted fw-bold text-decoration-none small" onClick={() => setStep(1)}>Restart Planner</button>
                </div>
             </div>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="col-12 col-lg-4 order-1 order-lg-2">
           <div className="sticky-top" style={{ top: '6rem' }}>
              <div className="glass p-4 rounded-4 shadow-sm border-bottom border-warning border-4">
                 <h5 className="fw-black mb-3 d-flex align-items-center gap-2 text-warning"><Wallet size={18} /> Live Budget</h5>
                 <div className="display-5 fw-black text-main text-center mb-0 lh-1">
                   {destDetails?.name?.includes('India') ? '₹' : '$'}{calculateTotal().toLocaleString()}
                 </div>
                 <hr/>
                 <div className="d-flex flex-column gap-2 small fw-bold opacity-75">
                    <div className="d-flex justify-content-between"><span>TRANSPORT:</span><span className="text-primary">{selectedTransport ? 'READY' : '---'}</span></div>
                    <div className="col-12"><div className="progress mt-1" style={{ height: '6px' }}><div className="progress-bar" style={{ width: `${(step/6)*100}%` }}></div></div></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
