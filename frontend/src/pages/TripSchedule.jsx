import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { MapPin, Calendar, Clock, Sun, Sunset, Moon, ArrowLeft, Download, Share2, ShieldAlert, BookOpen } from 'lucide-react';
import { Translator } from '../components/Translator';

export const TripSchedule = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get('https://trip-pro.onrender.com/api/bookings', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const found = res.data.find(b => b.id === id);
        setBooking(found);
      } catch (err) {
        console.error("Failed to fetch booking schedule", err);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchBooking();
  }, [token, id]);

  const handleWhatsAppShare = () => {
    if (!booking) return;
    const text = `Hey! Check out my upcoming trip to ${booking.destinationName} via WanderBudget!\nIt's a ${booking.days}-day trip staying at a ${booking.itineraryDetails?.hotel?.name || 'Hotel'}.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  if (loading) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading schedule...</div>;
  if (!booking) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Schedule not found.</div>;

  return (
    <div className="container py-5">
      <Link to="/dashboard" className="btn btn-sm btn-outline-primary rounded-pill px-3 mb-4 text-decoration-none fw-bold">
        <ArrowLeft size={16} /> Dashboard
      </Link>
      
      {/* Premium Header */}
      <div className="glass p-4 p-md-5 mb-4 border-top border-5 border-primary shadow-lg overflow-hidden position-relative">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="fw-black display-5 mb-2">{booking.destinationName}</h1>
            <div className="d-flex flex-wrap gap-4 mb-4">
               <div className="d-flex align-items-center gap-2">
                  <div className="p-2 bg-primary bg-opacity-10 text-primary rounded-circle"><MapPin size={20}/></div>
                  <div>
                    <div className="small text-muted">Boarding From</div>
                    <div className="fw-bold">{booking.route?.split(' ➔ ')[0] || 'Origin'}</div>
                  </div>
               </div>
               <div className="d-flex align-items-center gap-2">
                  <div className="p-2 bg-warning bg-opacity-10 text-warning rounded-circle"><Calendar size={20}/></div>
                  <div>
                    <div className="small text-muted">Trip Duration</div>
                    <div className="fw-bold">{booking.days} Glorious Days</div>
                  </div>
               </div>
            </div>
            <div className="alert alert-success border-0 rounded-4 d-inline-flex align-items-center gap-2 py-2 px-3 small">
              <CheckCircle size={16}/> Ticket Confirmed & Itinerary Synced with Neon DB
            </div>
          </div>
          <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
             <div className="display-4 fw-black text-primary mb-3">
               {booking.itineraryDetails?.currencySymbol || '₹'}{booking.totalCost.toLocaleString()}
             </div>
             <div className="d-flex gap-2 justify-content-lg-end">
                <button onClick={handleDownloadPDF} className="btn btn-dark rounded-pill px-4 py-2 small fw-bold">Save PDF</button>
                <button onClick={handleWhatsAppShare} className="btn btn-success rounded-pill px-4 py-2 small fw-bold">Share</button>
             </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
         <div className="col-lg-8">
            <h2 className="fw-black mb-4 d-flex align-items-center gap-2"><Clock color="var(--primary)"/> Trip Timeline</h2>
            <div className="d-flex flex-column gap-4">
              {booking.schedule && booking.schedule.map((day, idx) => (
                <div key={idx} className="glass p-4 border-start border-4 border-primary position-relative fade-in">
                  <div className="position-absolute bg-primary text-white px-3 py-1 rounded-pill fw-bold small shadow-sm" style={{ top: '-15px', left: '20px' }}>
                    DAY {day.day}
                  </div>
                  
                  <div className="row g-4 mt-1">
                    <div className="col-md-4 border-end border-dashed">
                       <div className="d-flex align-items-center gap-2 mb-2 text-warning fw-bold">
                          <Sun size={18}/> Morning
                       </div>
                       <p className="small text-muted mb-0">{day.morning}</p>
                    </div>
                    <div className="col-md-4 border-end border-dashed">
                       <div className="d-flex align-items-center gap-2 mb-2 text-danger fw-bold opacity-75">
                          <Sunset size={18}/> Afternoon
                       </div>
                       <p className="small text-muted mb-0">{day.afternoon}</p>
                    </div>
                    <div className="col-md-4">
                       <div className="d-flex align-items-center gap-2 mb-2 text-primary fw-bold">
                          <Moon size={18}/> Evening
                       </div>
                       <p className="small text-muted mb-0">{day.evening}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
         </div>

         <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '2rem' }}>
               <div className="glass p-4 mb-4 bg-dark text-white border-0 shadow-lg">
                  <h5 className="fw-black mb-3"><BookOpen size={18} className="me-2 text-primary"/> Survival Kit</h5>
                  <div className="mb-3">
                     <label className="small text-muted text-uppercase fw-bold">Etiquette</label>
                     <p className="small mb-0 opacity-75">{booking.itineraryDetails?.culturalEtiquette || "Respect local norms and traditions."}</p>
                  </div>
                  <div>
                     <label className="small text-muted text-uppercase fw-bold">Emergency</label>
                     <p className="small mb-0 text-danger fw-bold">{booking.itineraryDetails?.emergencyContacts || "Call 112 for assistance"}</p>
                  </div>
               </div>

               <div className="glass p-4">
                  <h5 className="fw-black mb-3 text-primary">Travel Checklist</h5>
                  <div className="d-flex flex-column gap-2">
                     {["Valid ID Proof", "Comfortable Shoes", "Camera & Charger", "Sunscreen / Umbrella"].map(item => (
                        <div key={item} className="d-flex align-items-center gap-2 small text-muted">
                           <CheckCircle size={14} className="text-success"/> {item}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="mt-5 p-5 glass text-center">
         <h4 className="fw-black">Enjoy your trip to {booking.destinationName}!</h4>
         <p className="text-muted">Safe travels from {booking.route?.split(' ➔ ')[0] || 'Origin'} ✈️</p>
         <Link to="/" className="btn btn-primary rounded-pill px-5 py-3 fw-black mt-3">Book Another Trip</Link>
      </div>
    </div>
  );
};
  );
};
