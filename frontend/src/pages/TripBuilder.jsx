import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { MapPin, Wallet, Calendar, Plane, Train, Bus, Car, Building, Coffee, Map, Clock, Search, CheckCircle, ArrowRight, ArrowLeft, Activity, Zap, Briefcase, ChevronRight, Users, Wifi, Waves, RefreshCw } from 'lucide-react';

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
  const [lang, setLang] = useState('en');

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
      <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}}></div>
      <p className="mt-3 fw-bold">Initializing Trip Builder...</p>
    </div>
  );

  return (
    <div className="container py-4 py-md-5">
      <div className="row g-4">
        
        {/* Step Indicators - Responsive */}
        <div className="col-12 mb-3">
          <div className="glass p-3 d-flex justify-content-between align-items-center overflow-auto shadow-sm no-scrollbar">
            {[1,2,3,4,5,6].map(num => (
              <div key={num} className={`d-flex flex-column align-items-center gap-1 mx-2 ${step >= num ? 'text-primary' : 'text-muted opacity-50'}`}>
                <div className={`rounded-circle d-flex align-items-center justify-content-center fw-black shadow-sm`} style={{ width: '30px', height: '30px', background: step >= num ? 'var(--primary)' : '#eee', color: step >= num ? 'white' : '#777', fontSize: '0.8rem' }}>
                  {step > num ? <CheckCircle size={16}/> : num}
                </div>
                <span className="small fw-bold" style={{ fontSize: '0.6rem' }}>STEP {num}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Panel */}
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          {step === 1 && (
            <div className="glass shadow-lg p-4 p-md-5 fade-in border-top border-5 border-primary rounded-4">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="p-3 rounded-4 bg-primary bg-opacity-10 text-primary"><MapPin size={32} /></div>
                <div><h2 className="fw-black mb-1">Trip Details</h2><p className="text-muted small mb-0">From Boarding to Destination</p></div>
              </div>

              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label fw-bold small mb-1">Destination</label>
                  <select className="form-select form-select-lg py-3 rounded-4 shadow-sm fs-6" value={selectedDestinationId} onChange={(e) => setSelectedDestinationId(e.target.value)}>
                    <option value="">Select a place...</option>
                    {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-bold small mb-1">Boarding From</label>
                  <input type="text" className="form-control form-control-lg py-3 rounded-4 shadow-sm fs-6" placeholder="e.g. New Delhi" value={boardingPoint} onChange={(e) => setBoardingPoint(e.target.value)} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-bold small mb-1">Style</label>
                  <select className="form-select form-select-lg py-3 rounded-4 shadow-sm fs-6" value={travelStyle} onChange={(e) => setTravelStyle(e.target.value)}>
                    <option value="budget">Economy</option>
                    <option value="mid">Premium</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>
                <div className="col-6"><label className="form-label fw-bold small mb-1">Start</label><input type="date" className="form-control py-3 rounded-4 fs-6" value={startDate} onChange={(e) => setStartDate(e.target.value)} /></div>
                <div className="col-6"><label className="form-label fw-bold small mb-1">End</label><input type="date" className="form-control py-3 rounded-4 fs-6" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} /></div>
                
                <div className="col-12 mt-4 pt-2">
                  <button className="btn-next-step w-100 shadow-lg py-3 rounded-4" onClick={fetchDestinationDetails} disabled={!selectedDestinationId || !boardingPoint}>
                    NEXT: TRANSPORT <ArrowRight size={20}/>
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
                  <div key={tr.id} className="col-12">
                    <div className={`glass p-4 cursor-pointer border-start border-5 shadow-sm rounded-4 ${selectedTransport?.id === tr.id ? 'border-primary bg-primary bg-opacity-5' : 'border-light'}`} onClick={() => setSelectedTransport(tr)}>
                      <div className="row align-items-center">
                        <div className="col-12 col-md-8">
                           <div className="d-flex align-items-center gap-3 mb-2">
                              <h4 className="fw-black mb-0">{tr.agency}</h4>
                              {selectedTransport?.id === tr.id && <CheckCircle size={18} className="text-primary"/>}
                           </div>
                           <p className="small text-muted mb-0">{boardingPoint} ➔ {destDetails.name}</p>
                        </div>
                        <div className="col-12 col-md-4 text-md-end mt-3 mt-md-0">
                          <div className="fs-3 fw-black text-primary">{destDetails.name.includes('India') ? '₹' : '$'}{tr.cost}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 d-flex gap-2 flex-column flex-sm-row">
                <button className="btn btn-lg btn-light border py-3 px-5 rounded-4 fw-bold order-2 order-sm-1" onClick={handleBack}>BACK</button>
                <button className="btn-next-step flex-grow-1 shadow py-3 rounded-4 order-1 order-sm-2" onClick={handleNext} disabled={!selectedTransport}>
                  NEXT: STAY <ArrowRight size={20}/>
                </button>
              </div>
            </div>
          )}

          {step === 3 && destDetails && (
             <div className="fade-in">
                <h2 className="fw-black mb-4 text-center text-md-start">Stay Selection</h2>
                <div className="row g-3">
                  {destDetails.hotels.map(h => (
                    <div key={h.id} className="col-12 col-md-6">
                       <div className={`glass h-100 p-4 rounded-4 cursor-pointer border ${selectedHotel?.id === h.id ? 'border-primary bg-primary bg-opacity-5' : 'border-white'}`} onClick={() => { setSelectedHotel(h); setSelectedRoom(h.roomOptions[0]); }}>
                          <h4 className="fw-black mb-2">{h.name}</h4>
                          <div className="badge bg-warning text-dark mb-3">⭐ {h.rating} Rating</div>
                          <div className="d-flex flex-column gap-2 mt-2">
                             {h.roomOptions.map(r => (
                                <div key={r.type} className={`p-3 rounded-3 border small fw-bold ${selectedRoom?.type === r.type && selectedHotel?.id === h.id ? 'border-primary bg-primary bg-opacity-10' : 'border-light bg-light opacity-75'}`} onClick={(e) => { e.stopPropagation(); setSelectedHotel(h); setSelectedRoom(r); }}>
                                   <div className="d-flex justify-content-between">{r.type} <span className="text-primary">{destDetails.name.includes('India') ? '₹' : '$'}{r.cost}</span></div>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 d-flex gap-2 flex-column flex-sm-row">
                   <button className="btn btn-lg btn-light border py-3 px-5 rounded-4 fw-bold order-2 order-sm-1" onClick={handleBack}>BACK</button>
                   <button className="btn-next-step flex-grow-1 shadow py-3 rounded-4 order-1 order-sm-2" onClick={handleNext} disabled={!selectedRoom}>
                      NEXT: REVIEW <ArrowRight size={20}/>
                   </button>
                </div>
             </div>
          )}

          {step >= 4 && (
             <div className="fade-in text-center py-5 glass rounded-4 shadow-lg border-top border-5 border-success">
                <CheckCircle size={64} className="text-success mb-4" />
                <h2 className="fw-black mb-3">Plan Verified!</h2>
                <p className="text-muted mb-4 px-4">Route from {boardingPoint} to {destDetails.name} is optimized.</p>
                <div className="p-4 bg-light mx-4 rounded-4 mb-4 border border-dashed border-primary">
                   <div className="d-flex justify-content-between align-items-center fs-3 fw-black text-primary flex-wrap justify-content-center gap-2">
                      <span>Total:</span>
                      <span>{destDetails.name.includes('India') ? '₹' : '$'}{calculateTotal().toLocaleString()}</span>
                   </div>
                </div>
                <button className="btn btn-success rounded-pill px-5 py-3 fw-black fs-5 shadow-lg mx-3 mb-2" onClick={proceedToCheckout}>
                   BOOK NOW
                </button>
                <button className="btn btn-light rounded-pill px-4 py-2 small fw-bold text-muted border mx-3" onClick={() => setStep(1)}>RESTART</button>
             </div>
          )}
        </div>

        {/* Sidebar - Mobile Responsive Position */}
        <div className="col-12 col-lg-4 order-1 order-lg-2">
           <div className="glass p-4 rounded-4 shadow-sm border-top border-4 border-warning h-100">
              <h5 className="fw-black mb-3 d-flex align-items-center gap-2"><Wallet size={20} color="#f59e0b"/> Budget Insight</h5>
              <div className="display-4 fw-black text-warning mb-3 text-center lh-1">
                {destDetails?.name?.includes('India') ? '₹' : '$'}{calculateTotal().toLocaleString()}
              </div>
              <div className="d-flex flex-column gap-2 mb-0">
                 <div className="d-flex justify-content-between small opacity-75"><span>Travelers:</span><span className="fw-bold">{adults + children}</span></div>
                 <div className="d-flex justify-content-between small opacity-75"><span>Style:</span><span className="fw-bold">{travelStyle.toUpperCase()}</span></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
