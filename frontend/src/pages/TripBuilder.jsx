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

  // Filters & Search
  const [transportType, setTransportType] = useState('flight');
  const [placeCategory, setPlaceCategory] = useState('All');
  const [foodCategory, setFoodCategory] = useState('All');

  const translations = {
    en: {
      title: "Premium Travel Builder",
      step1: "Destination & Dates",
      step2: "Transport Selection",
      step3: "Accommodation",
      step4: "Experiences",
      step5: "Dining",
      step6: "Final Review",
      next: "Next Step",
      back: "Back",
      review: "Review Trip",
      checkout: "Confirm & Book",
      flight: "Flight",
      train: "Train",
      bus: "Bus",
      car: "Car",
      cats: {
        Main: "Main Attractions",
        "Hidden Gem": "Hidden Gems",
        Adventure: "Adventure",
        Cultural: "Cultural",
        "Fine Dining": "Fine Dining",
        "Street Food": "Street Food",
        Continental: "Continental",
        Asian: "Asian"
      }
    }
  };

  const t = translations['en'];

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

  const runAIOptimization = () => {
    if (!destDetails) return;
    setLoading(true);
    setTimeout(() => {
      const sortedTransport = [...destDetails.detailedTransport].sort((a, b) => a.cost - b.cost);
      if (travelStyle === 'budget') setSelectedTransport(sortedTransport[0]);
      else if (travelStyle === 'luxury') setSelectedTransport(sortedTransport[sortedTransport.length - 1]);
      else setSelectedTransport(sortedTransport[Math.floor(sortedTransport.length / 2)]);

      const sortedHotels = [...destDetails.hotels].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
      const bestHotel = sortedHotels[0];
      setSelectedHotel(bestHotel);
      
      const sortedRooms = [...bestHotel.roomOptions].sort((a, b) => a.cost - b.cost);
      if (travelStyle === 'budget') setSelectedRoom(sortedRooms[0]);
      else if (travelStyle === 'luxury') setSelectedRoom(sortedRooms[sortedRooms.length - 1]);
      else setSelectedRoom(sortedRooms[Math.floor(sortedRooms.length / 2)]);

      const topActivities = [...(destDetails.activities || [])].sort((a, b) => parseFloat(b.rating || 0) - parseFloat(a.rating || 0)).slice(0, 3);
      setSelectedActivities(topActivities);

      const topRest = [...destDetails.restaurants].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))[0];
      setSelectedRestaurants([topRest]);

      setStep(6);
      setLoading(false);
    }, 1200);
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
      <p className="mt-3 fw-bold">Initializing Premium Concierge...</p>
    </div>
  );

  return (
    <div className="container py-5" style={{ minHeight: '80vh' }}>
      <div className="row g-4 position-relative">
        
        {/* Step Progress */}
        <div className="col-12 mb-4">
          <div className="glass p-3 d-flex justify-content-between align-items-center">
            {[1,2,3,4,5,6].map(num => (
              <div key={num} className={`d-flex align-items-center gap-2 ${step >= num ? 'text-primary fw-black' : 'text-muted opacity-50'}`}>
                <div className={`rounded-circle d-flex align-items-center justify-content-center shadow-sm`} style={{ width: '32px', height: '32px', background: step >= num ? 'var(--primary)' : '#eee', color: step >= num ? 'white' : '#777' }}>
                  {step > num ? <CheckCircle size={18}/> : num}
                </div>
                <span className="d-none d-md-inline small">Step {num}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN PANEL */}
        <div className="col-lg-8">
          {step === 1 && (
            <div className="glass shadow-lg p-4 p-md-5 fade-in border-top border-5 border-primary">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="p-3 rounded-4 bg-primary bg-opacity-10 text-primary"><MapPin size={32} /></div>
                <div><h2 className="fw-black mb-1">Boarding & Destination</h2><p className="text-muted small mb-0">Where are you starting from?</p></div>
              </div>

              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label fw-bold small">Choose Destination</label>
                  <select className="form-select form-select-lg py-3 rounded-4 shadow-sm" value={selectedDestinationId} onChange={(e) => setSelectedDestinationId(e.target.value)}>
                    <option value="">Select a place...</option>
                    {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold small">Boarding From</label>
                  <input type="text" className="form-control form-control-lg py-3 rounded-4 shadow-sm" placeholder="e.g. New Delhi, Mumbai" value={boardingPoint} onChange={(e) => setBoardingPoint(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold small">Travel Style</label>
                  <select className="form-select form-select-lg py-3 rounded-4 shadow-sm" value={travelStyle} onChange={(e) => setTravelStyle(e.target.value)}>
                    <option value="budget">Economy / Budget</option>
                    <option value="mid">Premium / Mid-Range</option>
                    <option value="luxury">Luxury Plus</option>
                  </select>
                </div>
                <div className="col-md-6"><label className="form-label fw-bold small">Start Date</label><input type="date" className="form-control form-control-lg py-3 rounded-4" value={startDate} onChange={(e) => setStartDate(e.target.value)} /></div>
                <div className="col-md-6"><label className="form-label fw-bold small">Return Date</label><input type="date" className="form-control form-control-lg py-3 rounded-4" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} /></div>
                <div className="col-md-6"><label className="form-label fw-bold small">Adults</label><input type="number" className="form-control form-control-lg py-3 rounded-4" min="1" value={adults} onChange={(e) => setAdults(parseInt(e.target.value))} /></div>
                <div className="col-md-6"><label className="form-label fw-bold small">Children</label><input type="number" className="form-control form-control-lg py-3 rounded-4" min="0" value={children} onChange={(e) => setChildren(parseInt(e.target.value))} /></div>
                
                <div className="col-12 mt-5">
                  <button className="btn-next-step w-100 shadow-lg py-3 fs-5" onClick={fetchDestinationDetails} disabled={!selectedDestinationId || !boardingPoint}>
                    NEXT: CHOOSE TRANSPORT <ArrowRight size={20}/>
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
                    <div className={`glass p-4 cursor-pointer border-start border-5 ${selectedTransport?.id === tr.id ? 'border-primary shadow-lg bg-primary bg-opacity-5' : 'border-light'}`} onClick={() => setSelectedTransport(tr)}>
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <div className="d-flex align-items-center gap-3 mb-2">
                             <div className="p-2 bg-light rounded-3 text-primary">
                               {tr.id.startsWith('f') ? <Plane size={24}/> : <Train size={24}/>}
                             </div>
                             <h4 className="fw-bold mb-0">{tr.agency}</h4>
                          </div>
                          <div className="d-flex gap-4 text-muted small">
                            <span><Clock size={14}/> {tr.departureTime} ➔ {tr.arrivalTime}</span>
                            <span><MapPin size={14}/> {boardingPoint} ➔ {destDetails.name}</span>
                          </div>
                        </div>
                        <div className="col-md-4 text-md-end mt-3 mt-md-0">
                          <div className="fs-3 fw-black text-primary">{destDetails.name.includes('India') ? '₹' : '$'}{tr.cost}</div>
                          <button className={`btn mt-2 rounded-pill px-4 ${selectedTransport?.id === tr.id ? 'btn-primary' : 'btn-outline-primary'}`}>
                            {selectedTransport?.id === tr.id ? 'Selected' : 'Select'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 d-flex gap-3">
                <button className="btn btn-lg btn-light border py-3 px-5 rounded-4 fw-bold" onClick={handleBack}>BACK</button>
                <button className="btn-next-step flex-grow-1 shadow py-3 fs-5" onClick={handleNext} disabled={!selectedTransport}>
                  NEXT: ACCOMMODATION <ArrowRight size={20}/>
                </button>
              </div>
            </div>
          )}

          {step === 3 && destDetails && (
             <div className="fade-in">
                <h2 className="fw-black mb-4">Stay & Accommodation</h2>
                <div className="row g-4">
                  {destDetails.hotels.map(h => (
                    <div key={h.id} className="col-md-6">
                       <div className={`glass h-100 p-0 overflow-hidden cursor-pointer ${selectedHotel?.id === h.id ? 'border border-primary' : ''}`} onClick={() => { setSelectedHotel(h); setSelectedRoom(h.roomOptions[0]); }}>
                          <div className="p-4">
                             <h4 className="fw-black mb-2">{h.name}</h4>
                             <div className="badge bg-warning text-dark mb-3">⭐ {h.rating} Rating</div>
                             <div className="d-flex flex-column gap-2 mb-4">
                                {h.roomOptions.map(r => (
                                   <div key={r.type} className={`p-3 rounded-3 border ${selectedRoom?.type === r.type && selectedHotel?.id === h.id ? 'border-primary bg-primary bg-opacity-5' : 'border-light'}`} onClick={(e) => { e.stopPropagation(); setSelectedHotel(h); setSelectedRoom(r); }}>
                                      <div className="d-flex justify-content-between align-items-center">
                                         <span className="small fw-bold">{r.type}</span>
                                         <span className="fw-black text-primary">{destDetails.name.includes('India') ? '₹' : '$'}{r.cost}</span>
                                      </div>
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 d-flex gap-3">
                   <button className="btn btn-lg btn-light border py-3 px-5 rounded-4 fw-bold" onClick={handleBack}>BACK</button>
                   <button className="btn-next-step flex-grow-1 shadow py-3 fs-5" onClick={handleNext} disabled={!selectedRoom}>
                      NEXT: EXPERIENCES <ArrowRight size={20}/>
                   </button>
                </div>
             </div>
          )}

          {step >= 4 && step <= 6 && (
             <div className="fade-in text-center py-5">
                <div className="spinner-border text-primary mb-3"></div>
                <h2 className="fw-black">Finalizing your Itinerary...</h2>
                <p className="text-muted">Optimizing routes from {boardingPoint} to {destDetails.name}</p>
                {step === 4 && <button className="btn-next-step px-5 mt-4" onClick={handleNext}>NEXT STEP</button>}
                {step === 5 && <button className="btn-next-step px-5 mt-4" onClick={handleNext}>REVIEW TRIP</button>}
                {step === 6 && (
                   <div className="glass p-5 mt-4 text-start shadow-lg border-top border-5 border-success">
                      <h3 className="fw-black mb-4 d-flex align-items-center gap-2"><CheckCircle color="#10b981"/> Trip Summary Verified</h3>
                      <div className="row g-3 mb-4">
                         <div className="col-6"><span className="text-muted small">Route:</span><div className="fw-bold fs-5 text-primary">{boardingPoint} ➔ {destDetails.name}</div></div>
                         <div className="col-6"><span className="text-muted small">Duration:</span><div className="fw-bold fs-5 text-primary">{days} Days Adventure</div></div>
                      </div>
                      <div className="p-4 bg-light rounded-4 mb-4 border border-dashed border-primary">
                         <div className="d-flex justify-content-between fs-3 fw-black text-primary">
                            <span>Total Package:</span>
                            <span>{destDetails.name.includes('India') ? '₹' : '$'}{calculateTotal().toLocaleString()}</span>
                         </div>
                      </div>
                      <button className="btn btn-success w-100 py-3 rounded-4 fw-black fs-4 shadow-lg" onClick={proceedToCheckout}>
                         CONFIRM & PROCEED TO BOOKING
                      </button>
                   </div>
                )}
             </div>
          )}
        </div>

        {/* SIDEBAR BUDGET */}
        <div className="col-lg-4">
           <div className="glass p-4 sticky-top border-top border-4 border-warning" style={{ top: '2rem' }}>
              <h5 className="fw-black mb-3 d-flex align-items-center gap-2"><Wallet size={20} color="#f59e0b"/> Budget Meter</h5>
              <div className="display-4 fw-black text-warning mb-4 text-center">{destDetails?.name?.includes('India') ? '₹' : '$'}{calculateTotal().toLocaleString()}</div>
              
              <div className="d-flex flex-column gap-3 mb-4">
                 <div className="d-flex justify-content-between small"><span>Transport:</span><span className="fw-bold">{selectedTransport ? (destDetails?.name?.includes('India') ? '₹' : '$') + selectedTransport.cost : '---'}</span></div>
                 <div className="d-flex justify-content-between small"><span>Stay:</span><span className="fw-bold">{selectedRoom ? (destDetails?.name?.includes('India') ? '₹' : '$') + selectedRoom.cost : '---'}</span></div>
                 <div className="d-flex justify-content-between small"><span>Style:</span><span className="badge bg-dark rounded-pill">{travelStyle.toUpperCase()}</span></div>
              </div>

              {destDetails && (
                 <button className="btn btn-primary w-100 py-3 rounded-4 fw-bold mb-3 d-flex align-items-center justify-content-center gap-2 shadow" onClick={runAIOptimization}>
                    <Zap size={18} fill="white"/> AI Quick Optimize
                 </button>
              )}
              
              <div className="p-3 bg-info bg-opacity-10 rounded-3 border border-info border-opacity-25 small text-info">
                 <Info size={16} className="me-2"/> Perceived lag is 0ms. Real-time data sync active.
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
