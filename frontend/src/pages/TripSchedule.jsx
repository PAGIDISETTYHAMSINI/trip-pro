import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { MapPin, Calendar, Clock, Sun, Sunset, Moon, ArrowLeft, Download, Share2, ShieldAlert, BookOpen, CheckCircle, Info } from 'lucide-react';
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
        setError("Could not load your trip. Please try again later.");
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
    const text = `Check out my trip to ${booking.destinationName}!\nBoarding from: ${booking.route?.split(' ➔ ')[0] || 'Origin'}\nTotal: ${booking.itineraryDetails?.currencySymbol || '₹'}${booking.totalCost.toLocaleString()}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  if (loading) return (
    <div className="container py-5 text-center">
      <div className="spinner-border text-primary" role="status"></div>
      <p className="mt-3 fw-bold">Opening your itinerary...</p>
    </div>
  );
  
  if (error || !booking) return (
    <div className="container py-5 text-center">
      <div className="glass p-5">
        <ShieldAlert size={64} className="text-danger mb-4" />
        <h2 className="fw-black">Trip Not Found</h2>
        <p className="text-muted mb-4">{error || "We couldn't locate this trip in your history."}</p>
        <Link to="/dashboard" className="btn btn-primary rounded-pill px-5 py-3">Back to Dashboard</Link>
      </div>
    </div>
  );

  const boardingPoint = booking.route?.split(' ➔ ')[0] || 'Your Origin';

  return (
    <div className="container-fluid py-4 px-3 px-md-5">
      <div className="container p-0">
        <Link to="/dashboard" className="btn btn-sm btn-outline-primary rounded-pill px-3 mb-4 text-decoration-none fw-bold d-inline-flex align-items-center gap-2 shadow-sm">
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>
        
        {/* Premium Header - Mobile Optimized */}
        <div className="glass p-4 p-md-5 mb-4 border-top border-5 border-primary shadow-lg position-relative overflow-hidden">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-8">
              <h1 className="fw-black display-5 mb-3 lh-1">{booking.destinationName}</h1>
              <div className="row g-3 mb-4">
                 <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3 p-3 bg-white bg-opacity-50 rounded-4 shadow-sm border border-white">
                      <div className="p-2 bg-primary bg-opacity-10 text-primary rounded-circle"><MapPin size={24}/></div>
                      <div>
                        <div className="small text-muted fw-bold text-uppercase" style={{ fontSize: '0.65rem' }}>Boarding Point</div>
                        <div className="fw-black text-truncate" style={{ maxWidth: '150px' }}>{boardingPoint}</div>
                      </div>
                    </div>
                 </div>
                 <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3 p-3 bg-white bg-opacity-50 rounded-4 shadow-sm border border-white">
                      <div className="p-2 bg-warning bg-opacity-10 text-warning rounded-circle"><Calendar size={24}/></div>
                      <div>
                        <div className="small text-muted fw-bold text-uppercase" style={{ fontSize: '0.65rem' }}>Duration</div>
                        <div className="fw-black">{booking.days} Days Trip</div>
                      </div>
                    </div>
                 </div>
              </div>
              <div className="badge bg-success bg-opacity-10 text-success p-2 rounded-3 d-flex align-items-center gap-2 border border-success border-opacity-25 w-fit-content">
                <CheckCircle size={16}/> Ticket & Schedule Confirmed
              </div>
            </div>
            <div className="col-12 col-lg-4 text-lg-end">
               <div className="small text-muted fw-bold mb-1">TOTAL PACKAGE COST</div>
               <div className="display-4 fw-black text-primary mb-4 lh-1">
                 {booking.itineraryDetails?.currencySymbol || '₹'}{booking.totalCost.toLocaleString()}
               </div>
               <div className="d-flex gap-2 justify-content-lg-end">
                  <button onClick={handleDownloadPDF} className="btn btn-dark rounded-pill px-4 py-2 small fw-bold flex-grow-1 flex-lg-grow-0">Save PDF</button>
                  <button onClick={handleWhatsAppShare} className="btn btn-success rounded-pill px-4 py-2 small fw-bold flex-grow-1 flex-lg-grow-0">Share</button>
               </div>
            </div>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="row g-4">
           <div className="col-12 col-lg-8">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="fw-black mb-0 d-flex align-items-center gap-2"><Clock color="var(--primary)"/> Trip Timeline</h2>
                <div className="badge bg-primary rounded-pill px-3 py-2 fw-bold small shadow-sm">Updated Today</div>
              </div>

              <div className="schedule-list d-flex flex-column gap-4">
                {booking.schedule && booking.schedule.map((day, idx) => (
                  <div key={idx} className="glass p-4 border-start border-4 border-primary position-relative fade-in shadow-sm">
                    <div className="position-absolute bg-primary text-white px-3 py-1 rounded-pill fw-bold small shadow-sm" style={{ top: '-15px', left: '15px', fontSize: '0.75rem' }}>
                      DAY {day.day}
                    </div>
                    
                    <div className="row g-4 mt-1">
                      <div className="col-12 col-md-4 border-md-end border-dashed">
                         <div className="d-flex align-items-center gap-2 mb-2 text-warning fw-black">
                            <Sun size={18}/> Morning
                         </div>
                         <p className="small text-muted mb-0">{day.morning}</p>
                      </div>
                      <div className="col-12 col-md-4 border-md-end border-dashed">
                         <div className="d-flex align-items-center gap-2 mb-2 text-danger fw-black opacity-75">
                            <Sunset size={18}/> Afternoon
                         </div>
                         <p className="small text-muted mb-0">{day.afternoon}</p>
                      </div>
                      <div className="col-12 col-md-4">
                         <div className="d-flex align-items-center gap-2 mb-2 text-primary fw-black">
                            <Moon size={18}/> Evening
                         </div>
                         <p className="small text-muted mb-0">{day.evening}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>

           {/* Sidebar - Proactive Info */}
           <div className="col-12 col-lg-4">
              <div className="sticky-top" style={{ top: '1.5rem' }}>
                 <div className="glass p-4 mb-4 bg-dark text-white border-0 shadow-lg rounded-4">
                    <h5 className="fw-black mb-3 text-uppercase tracking-wider small d-flex align-items-center gap-2">
                       <BookOpen size={18} className="text-primary"/> Quick Support Kit
                    </h5>
                    <div className="d-flex flex-column gap-3">
                       <div className="p-3 bg-white bg-opacity-10 rounded-3">
                          <label className="small text-muted text-uppercase fw-bold mb-1" style={{ fontSize: '0.6rem' }}>Emergency Contact</label>
                          <p className="small mb-0 text-danger fw-black">{booking.itineraryDetails?.emergencyContacts || "Call 112 / 911"}</p>
                       </div>
                       <div className="p-3 bg-white bg-opacity-10 rounded-3">
                          <label className="small text-muted text-uppercase fw-bold mb-1" style={{ fontSize: '0.6rem' }}>Best For</label>
                          <p className="small mb-0 opacity-75 fw-bold">{booking.itineraryDetails?.culturalEtiquette || "Relaxation & Local Culture"}</p>
                       </div>
                    </div>
                 </div>

                 <div className="glass p-4 shadow-sm border border-white">
                    <h5 className="fw-black mb-3 text-primary small text-uppercase tracking-wider">Before you go...</h5>
                    <div className="d-flex flex-column gap-3">
                       {["ID Card Required", "Carry Power Bank", "Comfortable Clothes", "Small Amount Cash"].map(item => (
                          <div key={item} className="d-flex align-items-center gap-2 small text-muted fw-bold">
                             <CheckCircle size={14} className="text-success"/> {item}
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="p-3 mt-4 rounded-4 bg-info bg-opacity-10 border border-info border-opacity-25 d-flex gap-3 align-items-start shadow-sm">
                    <Info size={20} className="text-info mt-1 flex-shrink-0"/>
                    <p className="small text-info mb-0 lh-sm">
                      <strong>Pro Tip:</strong> Take a screenshot of this page. It works offline once loaded!
                    </p>
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-5 p-5 glass text-center border-top border-5 border-primary shadow-lg rounded-4">
           <h3 className="fw-black mb-2">Have a Safe Flight from {boardingPoint}! ✈️</h3>
           <p className="text-muted mb-4">We are excited to be part of your adventure to {booking.destinationName}.</p>
           <Link to="/" className="btn btn-primary rounded-pill px-5 py-3 fw-black fs-5 shadow-lg">Plan Another Trip</Link>
        </div>
      </div>
    </div>
  );
};
