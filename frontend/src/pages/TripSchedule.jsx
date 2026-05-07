import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Clock, Sun, Sunset, Moon, ArrowLeft, ShieldCheck, CheckCircle, Share2 } from 'lucide-react';

const API = 'https://trip-pro.onrender.com';

export const TripSchedule = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (!token || !id) { setLoading(false); return; }
    axios.get(`${API}/api/bookings/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setBooking(res.data))
      .catch(err => console.error('Error fetching schedule', err))
      .finally(() => setLoading(false));
  }, [token, id]);

  const handleWhatsAppShare = () => {
    if (!booking) return;
    const text = `My trip to ${booking.destinationName}! Total: ${booking.itineraryDetails?.currencySymbol || '₹'}${booking.totalCost?.toLocaleString()}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column gap-3">
      <div className="spinner"></div>
      <p className="text-muted fw-bold">Loading itinerary...</p>
    </div>
  );

  if (!booking) return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column gap-4 text-center p-4">
      <h2 className="fw-black">Itinerary Not Found</h2>
      <p className="text-muted">This booking may have been removed or you may need to log in.</p>
      <Link to="/dashboard" className="btn-startup">← Back to Dashboard</Link>
    </div>
  );

  const boardingPoint = booking.route?.split(' ➔ ')[0] || 'Origin';
  const currency = booking.itineraryDetails?.currencySymbol || '₹';

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <Link to="/dashboard" className="btn border bg-white px-4 mb-4 d-inline-flex align-items-center gap-2 small fw-bold">
          <ArrowLeft size={16} /> Dashboard
        </Link>

        {/* HEADER CARD */}
        <div className="card border-0 shadow-sm p-4 p-md-5 mb-4 border-start border-5 border-primary">
          <div className="row g-4 align-items-center">
            <div className="col-lg-8">
              <span className="badge bg-success text-white mb-3">✓ VERIFIED ITINERARY</span>
              <h1 className="fw-black display-5 mb-4">{booking.destinationName}</h1>
              <div className="row g-3">
                <div className="col-6 col-md-4">
                  <div className="bg-light rounded-xl p-3 border">
                    <div className="small text-muted fw-bold text-uppercase opacity-50 mb-1" style={{ fontSize: '0.65rem' }}>Boarding From</div>
                    <div className="fw-black">{boardingPoint}</div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="bg-light rounded-xl p-3 border">
                    <div className="small text-muted fw-bold text-uppercase opacity-50 mb-1" style={{ fontSize: '0.65rem' }}>Duration</div>
                    <div className="fw-black">{booking.days} Days</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="small text-muted fw-bold text-uppercase opacity-50 mb-1">Total Package</div>
              <div className="display-4 fw-black text-primary lh-1 mb-4">
                {currency}{booking.totalCost?.toLocaleString()}
              </div>
              <div className="d-flex gap-2 justify-content-lg-end">
                <button onClick={() => window.print()} className="btn border bg-white fw-bold px-4">PDF</button>
                <button onClick={handleWhatsAppShare} className="btn bg-success text-white border-0 fw-bold px-4 d-flex align-items-center gap-2">
                  <Share2 size={16} /> Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="row g-4">
          {/* SCHEDULE */}
          <div className="col-lg-8">
            <h3 className="fw-black mb-4 d-flex align-items-center gap-2">
              <Clock size={24} className="text-primary" /> Daily Itinerary
            </h3>
            <div className="d-flex flex-column gap-4">
              {(booking.schedule || []).map((day, idx) => (
                <div key={idx} className="card border-0 shadow-sm p-4 border-start border-4 border-primary position-relative">
                  <div className="position-absolute translate-middle-y top-0 start-0 ms-4 bg-primary text-white px-3 py-1 rounded-pill small fw-black">
                    DAY {day.day}
                  </div>
                  <div className="row g-4 mt-2">
                    <div className="col-md-4">
                      <div className="d-flex align-items-center gap-2 fw-bold text-warning small mb-2">
                        <Sun size={16} /> Morning
                      </div>
                      <p className="small text-muted m-0 lh-base">{day.morning}</p>
                    </div>
                    <div className="col-md-4 border-md-start border-md-end">
                      <div className="d-flex align-items-center gap-2 fw-bold text-danger small opacity-75 mb-2">
                        <Sunset size={16} /> Afternoon
                      </div>
                      <p className="small text-muted m-0 lh-base">{day.afternoon}</p>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-center gap-2 fw-bold text-primary small mb-2">
                        <Moon size={16} /> Evening
                      </div>
                      <p className="small text-muted m-0 lh-base">{day.evening}</p>
                    </div>
                  </div>
                </div>
              ))}
              {(!booking.schedule || booking.schedule.length === 0) && (
                <div className="card border-0 shadow-sm p-5 text-center text-muted">
                  No daily schedule available for this booking.
                </div>
              )}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm p-4 mb-4">
              <h5 className="fw-black mb-4 d-flex align-items-center gap-2">
                <ShieldCheck size={18} className="text-primary" /> Support Info
              </h5>
              <div className="mb-4">
                <div className="small text-muted fw-bold text-uppercase opacity-50 mb-1" style={{ fontSize: '0.65rem' }}>Emergency Contact</div>
                <div className="fw-black text-danger">{booking.itineraryDetails?.emergencyContacts || '112 / 911'}</div>
              </div>
              <div>
                <div className="small text-muted fw-bold text-uppercase opacity-50 mb-1" style={{ fontSize: '0.65rem' }}>Cultural Etiquette</div>
                <div className="small text-muted lh-base">{booking.itineraryDetails?.culturalEtiquette || 'Respect local customs and traditions.'}</div>
              </div>
            </div>
            <div className="bg-primary-soft border border-primary-subtle rounded-xl p-3 d-flex gap-3 align-items-start">
              <CheckCircle size={18} className="text-primary mt-1 flex-shrink-0" />
              <p className="small text-main fw-bold m-0">
                Verified booking. Secure data synced with production-grade backend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSchedule;
