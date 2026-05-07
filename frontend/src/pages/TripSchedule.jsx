import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { MapPin, Calendar, Clock, Sun, Sunset, Moon, ArrowLeft, Download, Share2, ShieldCheck, CheckCircle } from 'lucide-react';

export const TripSchedule = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(`https://trip-pro.onrender.com/api/bookings/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBooking(res.data);
      } catch (err) {
        console.error("Error fetching schedule", err);
      } finally {
        setLoading(false);
      }
    };
    if (token && id) fetchBooking(); else setLoading(false);
  }, [token, id]);

  const handleWhatsAppShare = () => {
    if (!booking) return;
    const text = `Check out my trip to ${booking.destinationName}!\nBoarding: ${booking.route?.split(' ➔ ')[0] || 'Origin'}\nTotal: ${booking.itineraryDetails?.currencySymbol || '₹'}${booking.totalCost.toLocaleString()}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (loading) return (
    <div className="container py-5 text-center">
      <div className="spinner-border text-primary"></div>
      <p className="mt-3 fw-bold">Loading Itinerary...</p>
    </div>
  );
  
  if (!booking) return (
    <div className="container py-5 text-center">
      <div className="glass p-5">
        <h2 className="fw-black mb-3 text-main">Itinerary Not Found</h2>
        <Link to="/dashboard" className="btn-primary-custom px-5">Back to Dashboard</Link>
      </div>
    </div>
  );

  const boardingPoint = booking.route?.split(' ➔ ')[0] || 'Origin';

  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-5">
      <div className="container p-0">
        <Link to="/dashboard" className="btn btn-outline-primary rounded-pill px-4 py-2 mb-5 text-decoration-none fw-bold small">
          <ArrowLeft size={16} /> BACK TO TRIPS
        </Link>
        
        {/* Header - Clean Professional */}
        <div className="glass p-4 p-md-5 mb-5 border-0 shadow-lg position-relative" style={{ borderLeft: '10px solid var(--primary)' }}>
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-8">
              <div className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill fw-bold small mb-3">VERIFIED ITINERARY</div>
              <h1 className="fw-black display-4 mb-4 text-main">{booking.destinationName}</h1>
              
              <div className="row g-3">
                 <div className="col-12 col-sm-6">
                    <div className="p-4 bg-light rounded-4 border">
                      <div className="small text-muted fw-bold text-uppercase mb-1">Boarding From</div>
                      <div className="fw-black fs-4 text-main">{boardingPoint}</div>
                    </div>
                 </div>
                 <div className="col-12 col-sm-6">
                    <div className="p-4 bg-light rounded-4 border">
                      <div className="small text-muted fw-bold text-uppercase mb-1">Trip Duration</div>
                      <div className="fw-black fs-4 text-main">{booking.days} Days</div>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="col-12 col-lg-4 text-lg-end">
               <div className="small text-muted fw-bold mb-1">TOTAL AMOUNT</div>
               <div className="display-4 fw-black text-primary mb-5 lh-1">
                 {booking.itineraryDetails?.currencySymbol || '₹'}{booking.totalCost.toLocaleString()}
               </div>
               <div className="d-flex gap-2 justify-content-lg-end">
                  <button onClick={() => window.print()} className="btn btn-dark py-3 px-4 rounded-3 fw-bold flex-grow-1">SAVE PDF</button>
                  <button onClick={handleWhatsAppShare} className="btn btn-success py-3 px-4 rounded-3 fw-bold flex-grow-1 shadow-lg">SHARE</button>
               </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
           <div className="col-12 col-lg-8">
              <h2 className="fw-black mb-4 d-flex align-items-center gap-2 text-main">
                 <Clock color="var(--primary)" size={32}/> Detailed Timeline
              </h2>

              <div className="d-flex flex-column gap-4">
                {booking.schedule && booking.schedule.map((day, idx) => (
                  <div key={idx} className="glass p-4 p-md-5 border-0 shadow-sm position-relative rounded-4" style={{ borderLeft: '6px solid var(--primary)' }}>
                    <div className="position-absolute bg-primary text-white px-3 py-1 rounded-pill fw-bold small shadow" style={{ top: '-15px', left: '20px' }}>
                      DAY {day.day}
                    </div>
                    
                    <div className="row g-4 mt-1">
                      <div className="col-12 col-md-4 border-md-end">
                         <div className="d-flex align-items-center gap-2 mb-2 text-warning fw-bold">
                            <Sun size={18}/> Morning
                         </div>
                         <p className="small text-muted mb-0 lh-base">{day.morning}</p>
                      </div>
                      <div className="col-12 col-md-4 border-md-end">
                         <div className="d-flex align-items-center gap-2 mb-2 text-danger fw-bold opacity-75">
                            <Sunset size={18}/> Afternoon
                         </div>
                         <p className="small text-muted mb-0 lh-base">{day.afternoon}</p>
                      </div>
                      <div className="col-12 col-md-4">
                         <div className="d-flex align-items-center gap-2 mb-2 text-primary fw-bold">
                            <Moon size={18}/> Evening
                         </div>
                         <p className="small text-muted mb-0 lh-base">{day.evening}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>

           <div className="col-12 col-lg-4">
              <div className="sticky-top" style={{ top: '6rem' }}>
                 <div className="glass p-4 bg-light shadow-sm mb-4 border-0 rounded-4">
                    <h5 className="fw-black mb-3 text-main d-flex align-items-center gap-2">
                       <ShieldCheck size={20} className="text-primary"/> Support Kit
                    </h5>
                    <div className="mb-3">
                       <label className="small text-muted fw-bold text-uppercase mb-1">Emergency</label>
                       <p className="small mb-0 text-danger fw-bold">{booking.itineraryDetails?.emergencyContacts || "112 / 911"}</p>
                    </div>
                    <div>
                       <label className="small text-muted fw-bold text-uppercase mb-1">Customs</label>
                       <p className="small mb-0 text-muted opacity-75">{booking.itineraryDetails?.culturalEtiquette || "Respect local norms."}</p>
                    </div>
                 </div>

                 <div className="p-3 bg-primary bg-opacity-5 rounded-4 border border-primary border-opacity-10 d-flex gap-3 align-items-start">
                    <div className="p-2 bg-primary bg-opacity-10 text-primary rounded-circle"><CheckCircle size={18}/></div>
                    <p className="small text-muted mb-0 fw-bold">
                      Verified itinerary. Data fetched directly from Neon DB.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
