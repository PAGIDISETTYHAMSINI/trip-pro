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
        setError("Could not validate trip reference.");
      } finally {
        setLoading(false);
      }
    };
    if (token && id) fetchBooking(); else setLoading(false);
  }, [token, id]);

  const handleWhatsAppShare = () => {
    if (!booking) return;
    const text = `My Trip to ${booking.destinationName}!\nBoarding: ${booking.route?.split(' ➔ ')[0] || 'Origin'}\nVerified by WanderBudget.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (loading) return (
    <div className="container py-5 text-center">
      <div className="spinner-border text-primary" style={{ width: '3.5rem', height: '3.5rem' }}></div>
      <p className="mt-4 fw-black fs-4 text-muted">Building Itinerary...</p>
    </div>
  );
  
  if (error || !booking) return (
    <div className="container py-5 text-center px-4">
      <div className="glass p-5 rounded-4 shadow-lg">
        <ShieldAlert size={64} className="text-danger mb-4 opacity-50" />
        <h2 className="fw-black mb-3">Trip Not Found</h2>
        <p className="text-muted mb-4 fw-bold">{error || "Reference session invalid."}</p>
        <Link to="/dashboard" className="btn-primary-custom px-5 py-3">Back to Control Center</Link>
      </div>
    </div>
  );

  const boardingPoint = booking.route?.split(' ➔ ')[0] || 'Origin';

  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-5">
      <div className="container p-0">
        <Link to="/dashboard" className="btn btn-outline-light border-white border-opacity-10 rounded-pill px-4 py-2 mb-5 text-decoration-none fw-black small shadow-sm d-inline-flex align-items-center gap-2">
          <ArrowLeft size={16} /> BACK
        </Link>
        
        {/* Premium Digital Ticket - Dark Glass for better text contrast */}
        <div className="glass ticket p-4 p-md-5 mb-5 border-0 shadow-glow position-relative overflow-hidden" style={{ borderLeft: '10px solid var(--primary)' }}>
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-8">
              <div className="badge bg-primary bg-opacity-20 text-primary px-3 py-2 rounded-pill fw-black small tracking-widest mb-3">VERIFIED TRIP PASS</div>
              <h1 className="fw-black display-3 mb-4 tracking-tightest lh-tight">{booking.destinationName}</h1>
              
              <div className="row g-3 mb-4">
                 <div className="col-12 col-sm-6">
                    <div className="d-flex align-items-center gap-4 p-4 bg-dark bg-opacity-40 rounded-4 border border-white border-opacity-5">
                      <div className="p-3 bg-primary bg-opacity-10 text-primary rounded-circle"><MapPin size={32}/></div>
                      <div>
                        <div className="small text-muted fw-black text-uppercase tracking-wider mb-1" style={{ fontSize: '0.65rem' }}>Boarding From</div>
                        <div className="fw-black fs-4">{boardingPoint}</div>
                      </div>
                    </div>
                 </div>
                 <div className="col-12 col-sm-6">
                    <div className="d-flex align-items-center gap-4 p-4 bg-dark bg-opacity-40 rounded-4 border border-white border-opacity-5">
                      <div className="p-3 bg-warning bg-opacity-10 text-warning rounded-circle"><Calendar size={32}/></div>
                      <div>
                        <div className="small text-muted fw-black text-uppercase tracking-wider mb-1" style={{ fontSize: '0.65rem' }}>Trip Length</div>
                        <div className="fw-black fs-4">{booking.days} DAYS</div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="col-12 col-lg-4 text-lg-end">
               <div className="small text-muted fw-black text-uppercase tracking-widest mb-1">Total Value</div>
               <div className="display-3 fw-black text-primary mb-5 lh-1">
                 {booking.itineraryDetails?.currencySymbol || '₹'}{booking.totalCost.toLocaleString()}
               </div>
               <div className="d-flex gap-2 flex-column flex-sm-row justify-content-lg-end">
                  <button onClick={() => window.print()} className="btn btn-dark py-3 px-4 rounded-4 fw-black flex-grow-1 border-white border-opacity-10">SAVE PDF</button>
                  <button onClick={handleWhatsAppShare} className="btn btn-success py-3 px-4 rounded-4 fw-black flex-grow-1 shadow-lg">SHARE</button>
               </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="row g-5">
           <div className="col-12 col-lg-8">
              <h2 className="fw-black mb-5 display-6 d-flex align-items-center gap-3">
                 <Clock color="var(--primary)" size={36}/> Schedule <span className="text-warning">Timeline</span>
              </h2>

              <div className="d-flex flex-column gap-5">
                {booking.schedule && booking.schedule.map((day, idx) => (
                  <div key={idx} className="glass p-4 p-md-5 border-0 shadow-lg position-relative fade-in rounded-4" style={{ borderLeft: '6px solid var(--primary)' }}>
                    <div className="position-absolute bg-primary text-white px-4 py-2 rounded-pill fw-black shadow-lg" style={{ top: '-20px', left: '20px', fontSize: '0.8rem', letterSpacing: '2px' }}>
                      DAY {day.day}
                    </div>
                    
                    <div className="row g-4 pt-3">
                      <div className="col-12 col-md-4">
                         <div className="d-flex align-items-center gap-3 mb-3 text-warning fw-black text-uppercase small tracking-widest">
                            <Sun size={20}/> Morning
                         </div>
                         <p className="text-muted fw-bold opacity-80 small lh-base">{day.morning}</p>
                      </div>
                      <div className="col-12 col-md-4 border-md-start border-white border-opacity-5">
                         <div className="d-flex align-items-center gap-3 mb-3 text-danger fw-black text-uppercase small tracking-widest">
                            <Sunset size={20}/> Afternoon
                         </div>
                         <p className="text-muted fw-bold opacity-80 small lh-base">{day.afternoon}</p>
                      </div>
                      <div className="col-12 col-md-4 border-md-start border-white border-opacity-5">
                         <div className="d-flex align-items-center gap-3 mb-3 text-primary fw-black text-uppercase small tracking-widest">
                            <Moon size={20}/> Evening
                         </div>
                         <p className="text-muted fw-bold opacity-80 small lh-base">{day.evening}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>

           {/* Sidebar */}
           <div className="col-12 col-lg-4">
              <div className="sticky-top" style={{ top: '2rem' }}>
                 <div className="glass p-5 mb-4 bg-primary bg-opacity-5 border-0 shadow-lg rounded-4">
                    <h5 className="fw-black mb-4 text-uppercase tracking-widest small d-flex align-items-center gap-3">
                       <ShieldCheck size={24} className="text-primary"/> Support Kit
                    </h5>
                    <div className="d-flex flex-column gap-4">
                       <div className="p-4 bg-dark bg-opacity-40 rounded-4 border border-white border-opacity-5">
                          <label className="small text-muted fw-black text-uppercase mb-2" style={{ fontSize: '0.6rem' }}>Emergency Contact</label>
                          <p className="fs-5 mb-0 text-danger fw-black">{booking.itineraryDetails?.emergencyContacts || "DIAL 112"}</p>
                       </div>
                       <div className="p-4 bg-dark bg-opacity-40 rounded-4 border border-white border-opacity-5">
                          <label className="small text-muted fw-black text-uppercase mb-2" style={{ fontSize: '0.6rem' }}>Guideline</label>
                          <p className="small mb-0 text-white opacity-80 fw-bold lh-sm">{booking.itineraryDetails?.culturalEtiquette || "Respect local traditions."}</p>
                       </div>
                    </div>
                 </div>

                 <div className="p-4 rounded-4 bg-info bg-opacity-10 border border-info border-opacity-20 d-flex gap-4 align-items-start">
                    <Zap size={24} className="text-info mt-1 flex-shrink-0"/>
                    <p className="small text-info mb-0 fw-bold lh-base">
                      <strong>Travel Tip:</strong> Keep this page open or save as PDF for offline access at your destination.
                    </p>
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-5 p-5 glass text-center border-0 shadow-lg rounded-4 position-relative overflow-hidden">
           <h3 className="fw-black mb-3 display-5 lh-tight">Enjoy Your Journey to {booking.destinationName}! ✈️</h3>
           <p className="text-muted mb-5 fw-bold opacity-75">Thank you for traveling with WanderBudget Elite.</p>
           <Link to="/" className="btn-primary-custom px-5 py-4 fw-black fs-4 shadow-lg rounded-pill">BOOK NEXT ADVENTURE</Link>
        </div>
      </div>
    </div>
  );
};
