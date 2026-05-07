import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { MapPin, Calendar, Clock, Sun, Sunset, Moon, ArrowLeft, Download, Share2, ShieldAlert, BookOpen, CheckCircle, Info, ShieldCheck, Zap } from 'lucide-react';
import { Translator } from '../components/Translator';

export const TripSchedule = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(`https://trip-pro.onrender.com/api/bookings/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBooking(res.data);
      } catch (err) {
        console.error("Failed to fetch booking schedule", err);
        setError("Passport validation failed. Trip not found.");
      } finally {
        setLoading(false);
      }
    };

    if (token && id) {
        fetchBooking();
    } else {
        setLoading(false);
    }
  }, [token, id]);

  const handleWhatsAppShare = () => {
    if (!booking) return;
    const text = `Verified Itinerary for ${booking.destinationName}!\nBoarding: ${booking.route?.split(' ➔ ')[0] || 'Origin'}\nTotal: ${booking.itineraryDetails?.currencySymbol || '₹'}${booking.totalCost.toLocaleString()}\nSafe Travels with WanderBudget!`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (loading) return (
    <div className="container py-5 text-center">
      <div className="spinner-border text-primary" role="status" style={{ width: '4rem', height: '4rem' }}></div>
      <p className="mt-4 fw-black fs-4 opacity-50">Decoding Trip Timeline...</p>
    </div>
  );
  
  if (error || !booking) return (
    <div className="container py-5 text-center px-4">
      <div className="glass p-5 rounded-4 shadow-2xl border-0">
        <ShieldAlert size={80} className="text-danger mb-4 opacity-25" />
        <h2 className="fw-black display-6">Invalid Passport</h2>
        <p className="text-muted mb-5 fw-bold">{error || "This itinerary session has expired or is invalid."}</p>
        <Link to="/dashboard" className="btn-primary-custom px-5 py-3 shadow-lg">Back to Control Center</Link>
      </div>
    </div>
  );

  const boardingPoint = booking.route?.split(' ➔ ')[0] || 'Origin Station';

  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-5">
      <div className="container p-0">
        <Link to="/dashboard" className="btn btn-outline-light border-white border-opacity-10 rounded-pill px-4 py-2 mb-5 text-decoration-none fw-black small shadow-sm d-inline-flex align-items-center gap-2">
          <ArrowLeft size={16} /> BACK TO DASHBOARD
        </Link>
        
        {/* Premium Digital Ticket Header */}
        <div className="glass ticket p-4 p-md-5 mb-5 border-0 shadow-2xl position-relative overflow-hidden" style={{ borderLeft: '10px solid var(--primary)' }}>
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-3">
                 <div className="badge bg-primary text-white px-3 py-2 rounded-pill fw-black small tracking-widest">VERIFIED ITINERARY</div>
                 <div className="badge bg-white bg-opacity-5 text-muted px-3 py-2 rounded-pill fw-black small border border-white border-opacity-10">#{booking.id.slice(0,8).toUpperCase()}</div>
              </div>
              <h1 className="fw-black display-3 mb-4 tracking-tightest lh-1">{booking.destinationName}</h1>
              
              <div className="row g-3 mb-4">
                 <div className="col-12 col-sm-6">
                    <div className="d-flex align-items-center gap-4 p-4 bg-white bg-opacity-5 rounded-4 border border-white border-opacity-5 shadow-inner">
                      <div className="p-3 bg-primary bg-opacity-10 text-primary rounded-circle shadow-glow"><MapPin size={32}/></div>
                      <div>
                        <div className="small text-muted fw-black text-uppercase tracking-wider mb-1" style={{ fontSize: '0.6rem' }}>Boarding Station</div>
                        <div className="fw-black fs-4">{boardingPoint}</div>
                      </div>
                    </div>
                 </div>
                 <div className="col-12 col-sm-6">
                    <div className="d-flex align-items-center gap-4 p-4 bg-white bg-opacity-5 rounded-4 border border-white border-opacity-5 shadow-inner">
                      <div className="p-3 bg-warning bg-opacity-10 text-warning rounded-circle shadow-glow"><Calendar size={32}/></div>
                      <div>
                        <div className="small text-muted fw-black text-uppercase tracking-wider mb-1" style={{ fontSize: '0.6rem' }}>Total Duration</div>
                        <div className="fw-black fs-4">{booking.days} DAYS TRIP</div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="col-12 col-lg-4 text-lg-end border-lg-start border-white border-opacity-10 ps-lg-5">
               <div className="small text-muted fw-black text-uppercase tracking-widest mb-2">Package Value</div>
               <div className="display-3 fw-black text-primary mb-5 lh-1">
                 {booking.itineraryDetails?.currencySymbol || '₹'}{booking.totalCost.toLocaleString()}
               </div>
               <div className="d-flex gap-2 flex-column flex-sm-row justify-content-lg-end">
                  <button onClick={() => window.print()} className="btn btn-dark py-3 px-4 rounded-4 fw-black flex-grow-1 border-white border-opacity-10">PDF VERSION</button>
                  <button onClick={handleWhatsAppShare} className="btn btn-success py-3 px-4 rounded-4 fw-black flex-grow-1 shadow-lg">SHARE PASS</button>
               </div>
            </div>
          </div>
        </div>

        {/* Timeline & Support */}
        <div className="row g-5">
           <div className="col-12 col-lg-8">
              <h2 className="fw-black mb-5 display-6 d-flex align-items-center gap-3">
                 <Clock color="var(--primary)" size={36}/> Trip <span className="text-primary">Timeline</span>
              </h2>

              <div className="d-flex flex-column gap-5">
                {booking.schedule && booking.schedule.map((day, idx) => (
                  <div key={idx} className="glass p-4 p-md-5 border-0 shadow-xl position-relative fade-in rounded-4" style={{ borderLeft: '6px solid var(--primary)' }}>
                    <div className="position-absolute bg-primary text-white px-4 py-2 rounded-pill fw-black shadow-2xl" style={{ top: '-20px', left: '20px', fontSize: '0.85rem', letterSpacing: '2px' }}>
                      DAY {day.day}
                    </div>
                    
                    <div className="row g-4 pt-3">
                      <div className="col-12 col-md-4">
                         <div className="d-flex align-items-center gap-3 mb-3 text-warning fw-black text-uppercase small tracking-widest">
                            <Sun size={20}/> Morning
                         </div>
                         <p className="text-muted fw-bold opacity-75 lh-base">{day.morning}</p>
                      </div>
                      <div className="col-12 col-md-4 border-md-start border-white border-opacity-5">
                         <div className="d-flex align-items-center gap-3 mb-3 text-danger fw-black text-uppercase small tracking-widest opacity-80">
                            <Sunset size={20}/> Afternoon
                         </div>
                         <p className="text-muted fw-bold opacity-75 lh-base">{day.afternoon}</p>
                      </div>
                      <div className="col-12 col-md-4 border-md-start border-white border-opacity-5">
                         <div className="d-flex align-items-center gap-3 mb-3 text-primary fw-black text-uppercase small tracking-widest">
                            <Moon size={20}/> Evening
                         </div>
                         <p className="text-muted fw-bold opacity-75 lh-base">{day.evening}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>

           {/* Sidebar Info */}
           <div className="col-12 col-lg-4">
              <div className="sticky-top" style={{ top: '2rem' }}>
                 <div className="glass p-5 mb-4 bg-primary bg-opacity-5 border-0 shadow-2xl rounded-4">
                    <h5 className="fw-black mb-4 text-uppercase tracking-widest small d-flex align-items-center gap-3">
                       <ShieldCheck size={24} className="text-primary"/> Concierge Kit
                    </h5>
                    <div className="d-flex flex-column gap-4">
                       <div className="p-4 bg-white bg-opacity-5 rounded-4 border border-white border-opacity-5 shadow-inner">
                          <label className="small text-muted text-uppercase fw-black tracking-widest mb-2" style={{ fontSize: '0.6rem' }}>Emergency Line</label>
                          <p className="fs-5 mb-0 text-danger fw-black">{booking.itineraryDetails?.emergencyContacts || "DIAL 112 / 911"}</p>
                       </div>
                       <div className="p-4 bg-white bg-opacity-5 rounded-4 border border-white border-opacity-5 shadow-inner">
                          <label className="small text-muted text-uppercase fw-black tracking-widest mb-2" style={{ fontSize: '0.6rem' }}>Cultural Guard</label>
                          <p className="small mb-0 opacity-75 fw-bold lh-sm">{booking.itineraryDetails?.culturalEtiquette || "Maintain local decorum and respect traditions."}</p>
                       </div>
                    </div>
                 </div>

                 <div className="glass p-5 shadow-xl border-0 rounded-4">
                    <h5 className="fw-black mb-4 text-primary small text-uppercase tracking-widest">Arrival Checklist</h5>
                    <div className="d-flex flex-column gap-3">
                       {["Passport / ID", "Physical Currency", "Weather Check", "Power Adapter"].map(item => (
                          <div key={item} className="d-flex align-items-center gap-3 small fw-black text-muted">
                             <div className="p-1 bg-success bg-opacity-20 text-success rounded-circle"><CheckCircle size={14}/></div>
                             {item}
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="p-4 mt-5 rounded-4 bg-info bg-opacity-10 border border-info border-opacity-20 d-flex gap-4 align-items-start shadow-xl">
                    <Zap size={24} className="text-info mt-1 flex-shrink-0 shadow-glow"/>
                    <p className="small text-info mb-0 fw-bold lh-base">
                      <strong>AI Tip:</strong> This itinerary is synced to your device. Access it anywhere, even without cellular data.
                    </p>
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-5 p-5 glass text-center border-0 shadow-2xl rounded-4 position-relative overflow-hidden">
           <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5 bg-primary"></div>
           <h3 className="fw-black mb-3 display-5">Safe Skies from {boardingPoint}! ✈️</h3>
           <p className="text-muted mb-5 fw-bold opacity-75">Thank you for choosing WanderBudget Elite for your journey to {booking.destinationName}.</p>
           <Link to="/" className="btn-primary-custom px-5 py-4 fw-black fs-4 shadow-2xl rounded-pill">PLAN NEXT ADVENTURE</Link>
        </div>
      </div>
    </div>
  );
};
