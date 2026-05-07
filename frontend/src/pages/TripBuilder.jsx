import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { MapPin, Wallet, Calendar, Plane, Building, Clock, CheckCircle, ArrowRight, ArrowLeft, Zap, Star, ShieldCheck } from 'lucide-react';

export const TripBuilder = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  
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

  const calculateTotal = () => {
    let total = 0;
    const totalTravelers = adults + children;
    if (selectedTransport) total += (selectedTransport.cost * totalTravelers);
    const start = new Date(startDate);
    const end = new Date(returnDate);
    let calculatedDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    if (calculatedDays <= 0) calculatedDays = 1;
    if (selectedRoom) total += (selectedRoom.cost * calculatedDays * Math.ceil(totalTravelers / 2));
    total += (total * 0.15); // Buffer
    return Math.round(total);
  };

  const proceedToCheckout = () => {
    const start = new Date(startDate);
    const end = new Date(returnDate);
    let calculatedDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    if (calculatedDays <= 0) calculatedDays = 1;
    navigate('/checkout', { state: { 
      itinerary: { totalCost: calculateTotal(), currencySymbol: destDetails.name.includes('India') ? '₹' : '$', boardingPoint, travelers: { adults, children, total: adults + children }, dates: { start: startDate, end: returnDate, days: calculatedDays }, transport: selectedTransport, hotel: selectedHotel, room: selectedRoom }, 
      destination: destDetails, days: calculatedDays 
    }});
  };

  if (loading && step === 1) return (
    <div className="container py-5 text-center">
      <div className="spinner-border text-primary" style={{width: '3.5rem', height: '3.5rem'}}></div>
      <p className="mt-4 fw-black fs-4 text-primary">Initializing Concierge...</p>
    </div>
  );

  return (
    <div className="container py-4 py-md-5">
      <div className="row g-4">
        {/* Progress Tracker */}
        <div className="col-12 mb-4">
          <div className="glass p-3 d-flex justify-content-between align-items-center no-scrollbar overflow-auto px-4 shadow-lg">
            {[1,2,3,4].map(num => (
              <div key={num} className={`d-flex flex-column align-items-center gap-2 mx-3 ${step >= num ? 'text-primary' : 'text-muted opacity-25'}`}>
                <div className={`rounded-circle d-flex align-items-center justify-content-center fw-black shadow-lg`} 
                     style={{ width: '36px', height: '36px', background: step >= num ? 'var(--primary)' : 'rgba(255,255,255,0.05)', color: 'white', fontSize: '0.9rem' }}>
                  {step > num ? <CheckCircle size={20}/> : num}
                </div>
                <span className="fw-black" style={{ fontSize: '0.65rem' }}>STEP {num}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Builder Content */}
        <div className="col-12 col-lg-8">
          {step === 1 && (
            <div className="glass shadow-lg p-4 p-md-5 fade-in border-top border-primary border-5 rounded-4">
              <h2 className="fw-black mb-5 display-6 text-primary"><MapPin size={36} className="me-3"/> Route Details</h2>
              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label">Select Destination</label>
                  <select className="form-select form-select-lg py-4 px-4 fs-5" value={selectedDestinationId} onChange={(e) => setSelectedDestinationId(e.target.value)}>
                    <option value="">Where to travel?</option>
                    {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Boarding From</label>
                  <input type="text" className="form-control py-4 fs-6" placeholder="City Name" value={boardingPoint} onChange={(e) => setBoardingPoint(e.target.value)} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Travel Luxury</label>
                  <select className="form-select py-4 fs-6" value={travelStyle} onChange={(e) => setTravelStyle(e.target.value)}>
                    <option value="budget">Economic</option>
                    <option value="mid">Premium</option>
                    <option value="luxury">Ultra Luxury</option>
                  </select>
                </div>
                <div className="col-12 mt-5">
                  <button className="btn-primary-custom w-100 py-4 shadow-lg rounded-4 justify-content-center fs-4" onClick={fetchDestinationDetails} disabled={!selectedDestinationId || !boardingPoint}>
                    CONTINUE TO TRANSPORT <ArrowRight size={28}/>
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && destDetails && (
            <div className="fade-in">
              <h2 className="fw-black mb-4 display-6 px-1">Select <span className="text-warning">Transport</span></h2>
              <div className="d-flex flex-column gap-3">
                {destDetails.detailedTransport.map(tr => (
                  <div key={tr.id} className={`glass p-4 p-md-5 cursor-pointer shadow-lg rounded-4 border-start border-5 ${selectedTransport?.id === tr.id ? 'border-primary bg-primary bg-opacity-5' : 'border-white border-opacity-5'}`} onClick={() => setSelectedTransport(tr)}>
                    <div className="row align-items-center">
                      <div className="col-12 col-md-8">
                         <h4 className="fw-black mb-2 fs-3">{tr.agency}</h4>
                         <div className="small text-muted fw-bold">ROUTE: {boardingPoint} ➔ {destDetails.name}</div>
                      </div>
                      <div className="col-12 col-md-4 text-md-end mt-3 mt-md-0">
                        <div className="display-6 fw-black text-primary">{destDetails.name.includes('India') ? '₹' : '$'}{tr.cost.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 d-flex gap-3 flex-column flex-sm-row">
                <button className="btn btn-lg btn-outline-light border-white border-opacity-10 py-4 px-5 rounded-4 fw-black order-2 order-sm-1" onClick={() => setStep(1)}>BACK</button>
                <button className="btn-next-step flex-grow-1 shadow-lg py-4 rounded-4 order-1 order-sm-2 fs-4" onClick={() => setStep(3)} disabled={!selectedTransport}>
                  NEXT: SELECT STAY <ArrowRight size={28}/>
                </button>
              </div>
            </div>
          )}

          {step === 3 && destDetails && (
             <div className="fade-in">
                <h2 className="fw-black mb-4 display-6 px-1">Choose <span className="text-warning">Resort</span></h2>
                <div className="row g-4">
                  {destDetails.hotels.map(h => (
                    <div key={h.id} className="col-12 col-md-6">
                       <div className={`glass h-100 p-4 p-md-5 rounded-4 cursor-pointer border-0 shadow-lg ${selectedHotel?.id === h.id ? 'bg-primary bg-opacity-5' : ''}`} onClick={() => { setSelectedHotel(h); setSelectedRoom(h.roomOptions[0]); }}>
                          <h4 className="fw-black mb-2 fs-3 pe-4">{h.name}</h4>
                          <div className="d-flex align-items-center gap-1 text-warning mb-4">
                             {[1,2,3,4,5].map(s => <Star key={s} size={14} fill={s <= Math.floor(h.rating) ? '#fbbf24' : 'none'} stroke="#fbbf24" />)}
                             <span className="small ms-2 text-muted fw-bold">({h.rating})</span>
                          </div>
                          <div className="d-flex flex-column gap-3 mt-4">
                             {h.roomOptions.map(r => (
                                <div key={r.type} className={`p-4 rounded-4 border-2 ${selectedRoom?.type === r.type && selectedHotel?.id === h.id ? 'border-primary bg-primary bg-opacity-10 shadow-glow' : 'border-white border-opacity-5'}`} onClick={(e) => { e.stopPropagation(); setSelectedHotel(h); setSelectedRoom(r); }}>
                                   <div className="d-flex justify-content-between">
                                      <span className="fw-black small tracking-widest">{r.type}</span>
                                      <span className="fw-black text-primary">{destDetails.name.includes('India') ? '₹' : '$'}{r.cost.toLocaleString()}</span>
                                   </div>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 d-flex gap-3 flex-column flex-sm-row">
                   <button className="btn btn-lg btn-outline-light border-white border-opacity-10 py-4 px-5 rounded-4 fw-black order-2 order-sm-1" onClick={() => setStep(2)}>BACK</button>
                   <button className="btn-next-step flex-grow-1 shadow-lg py-4 rounded-4 order-1 order-sm-2 fs-4" onClick={() => setStep(4)} disabled={!selectedRoom}>
                      REVIEW TRIP <ArrowRight size={28}/>
                   </button>
                </div>
             </div>
          )}

          {step === 4 && (
             <div className="fade-in text-center py-5 glass rounded-4 shadow-lg border-top border-primary border-5 mx-2">
                <div className="p-4 bg-primary bg-opacity-10 rounded-circle d-inline-block mb-4 shadow-glow"><ShieldCheck size={64} className="text-primary" /></div>
                <h2 className="fw-black mb-2 display-5 text-warning">Verified Package</h2>
                <p className="text-muted mb-5 px-4 fw-bold opacity-75">Your itinerary from {boardingPoint} is ready for confirmation.</p>
                
                <div className="mx-4 p-5 bg-dark bg-opacity-30 rounded-4 mb-5 border border-white border-opacity-5 shadow-inner">
                   <div className="small text-muted fw-black text-uppercase tracking-widest mb-2">Exclusive Total</div>
                   <div className="display-2 fw-black text-primary lh-1">
                      {destDetails.name.includes('India') ? '₹' : '$'}{calculateTotal().toLocaleString()}
                   </div>
                </div>

                <div className="d-flex flex-column gap-3 px-4 px-md-5">
                   <button className="btn-primary-custom w-100 py-4 rounded-4 fw-black fs-4 justify-content-center shadow-lg" onClick={proceedToCheckout}>
                      CONFIRM & BOOK TRIP <ArrowRight size={24}/>
                   </button>
                </div>
             </div>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="col-12 col-lg-4">
           <div className="sticky-top" style={{ top: '1.5rem' }}>
              <div className="glass p-4 p-md-5 rounded-4 shadow-lg border-bottom border-warning border-4">
                 <h5 className="fw-black mb-4 d-flex align-items-center gap-2 text-uppercase small tracking-widest text-warning"><Wallet size={18} /> Budget Intel</h5>
                 <div className="display-4 fw-black text-white text-center mb-1 lh-1">
                   {destDetails?.name?.includes('India') ? '₹' : '$'}{calculateTotal().toLocaleString()}
                 </div>
                 <p className="small text-muted text-center fw-bold opacity-50 mb-4">REAL-TIME QUOTE</p>
                 <div className="d-flex flex-column gap-3 small fw-black opacity-75">
                    <div className="d-flex justify-content-between"><span>GUESTS:</span><span className="text-primary">{adults + children}</span></div>
                    <div className="d-flex justify-content-between"><span>STYLE:</span><span className="text-primary">{travelStyle.toUpperCase()}</span></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
