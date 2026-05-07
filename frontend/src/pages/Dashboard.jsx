import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Plane, Calendar, CreditCard, MapPin, Wallet, TrendingUp, Zap, PieChart, Coins, XCircle, AlertCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token, user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get('https://trip-pro.onrender.com/api/bookings', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBookings(res.data);
      } catch (err) {
        console.error("Failed to fetch bookings", err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchBookings();
    }
  }, [token]);

  const handleCancel = async (bookingId) => {
    if (!window.confirm("Are you sure you want to cancel this booking? This action cannot be undone.")) return;
    try {
      await axios.put(`https://trip-pro.onrender.com/api/bookings/${bookingId}/cancel`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(bookings.map(b => b.id === bookingId ? { ...b, status: 'CANCELLED' } : b));
      alert("Booking cancelled successfully.");
    } catch (err) {
      console.error("Cancellation failed", err);
      alert("Failed to cancel booking.");
    }
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3 fw-bold">Fetching your adventures...</p>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-5">
      <div className="container p-0">
        <div className="row g-4">
          {/* Main Content: Trips */}
          <div className="col-12 col-lg-8 order-2 order-lg-1">
            <h2 className="fw-black mb-4 d-flex align-items-center gap-2 px-1">
              <Plane color="var(--primary)" /> My Adventures
            </h2>
        
            {bookings.length === 0 ? (
              <div className="glass p-5 text-center rounded-4 shadow-sm border-0">
                <Plane size={64} className="text-muted mb-4 opacity-25" />
                <h3 className="fw-bold mb-2">No trips found</h3>
                <p className="text-muted mb-4">Start your journey today by planning a new trip!</p>
                <Link to="/" className="btn btn-primary rounded-pill px-5 py-3 fw-black shadow">Start Planning</Link>
              </div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {bookings.map(booking => (
                  <div key={booking.id} className="glass p-3 p-md-4 border-start border-5 rounded-4 shadow-sm" style={{ borderColor: booking.status === 'CANCELLED' ? '#ef4444' : 'var(--primary)' }}>
                    <div className="row align-items-center g-3">
                      <div className="col-12 col-md-8">
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <h4 className="fw-black mb-0 fs-5">{booking.route || booking.destinationName}</h4>
                          <span className={`badge rounded-pill ${booking.status === 'CANCELLED' ? 'bg-danger-subtle text-danger' : 'bg-success-subtle text-success'}`} style={{ fontSize: '0.65rem' }}>
                            {booking.status}
                          </span>
                        </div>
                        <div className="d-flex flex-wrap gap-3 small text-muted mb-3 opacity-75">
                          <span className="d-flex align-items-center gap-1"><Calendar size={14}/> {booking.days} Days</span>
                          <span className="d-flex align-items-center gap-1"><MapPin size={14}/> {booking.route?.split(' ➔ ')[0] || 'Origin'}</span>
                        </div>
                        <div className="p-3 bg-light rounded-3 small border border-white">
                          <span className="fw-bold text-primary">Stay:</span> {booking.itineraryDetails?.hotel?.name || 'Standard Resort'}
                        </div>
                      </div>
                      <div className="col-12 col-md-4 text-md-end">
                        <div className="fs-3 fw-black text-primary mb-3 lh-1">
                          {booking.itineraryDetails?.currencySymbol || '₹'}{booking.totalCost.toLocaleString()}
                        </div>
                        <div className="d-grid gap-2">
                          {booking.status !== 'CANCELLED' ? (
                            <>
                              <Link to={`/dashboard/schedule/${booking.id}`} className="btn-primary-custom w-100 py-2 fs-6 rounded-pill text-center shadow-sm d-flex align-items-center justify-content-center gap-2">
                                View Schedule <ChevronRight size={16}/>
                              </Link>
                              <button onClick={() => handleCancel(booking.id)} className="btn btn-link btn-sm text-danger text-decoration-none fw-bold opacity-75">
                                Cancel Booking
                              </button>
                            </>
                          ) : (
                            <div className="text-danger small fw-bold d-flex align-items-center justify-content-md-end gap-1 px-2 py-1 bg-danger bg-opacity-10 rounded-pill">
                              <AlertCircle size={14} /> Revoked
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar - Perfectly Framed */}
          <div className="col-12 col-lg-4 order-1 order-lg-2">
            <div className="sticky-top" style={{ top: '1.5rem' }}>
              <div className="glass p-4 mb-4 rounded-4 shadow-sm border-0 overflow-hidden position-relative">
                <div className="position-absolute top-0 end-0 p-3 opacity-10"><Coins size={80} /></div>
                <h5 className="fw-black mb-3 d-flex align-items-center gap-2 text-uppercase small tracking-wider"><Coins size={18} color="#f59e0b"/> Wallet</h5>
                <div className="display-4 fw-black text-warning mb-1">{user?.coins || 0}</div>
                <p className="small text-muted mb-0 fw-bold">Available Coins 🪙</p>
              </div>

              <div className="glass p-4 mb-4 rounded-4 shadow-sm border-0 border-top border-4 border-primary">
                <h5 className="fw-black mb-3 d-flex align-items-center gap-2 text-uppercase small tracking-wider"><Zap size={18} color="var(--primary)"/> Optimization</h5>
                <div className="d-flex align-items-center justify-content-between mb-2">
                   <span className="small fw-bold text-muted">Budget Score</span>
                   <span className="fw-black text-primary">84/100</span>
                </div>
                <div className="progress" style={{ height: '8px', borderRadius: '10px' }}>
                   <div className="progress-bar bg-primary" style={{ width: '84%' }}></div>
                </div>
              </div>

              <Link to="/dashboard/expenses" className="btn btn-dark w-100 py-3 rounded-4 fw-black shadow-lg d-flex align-items-center justify-content-center gap-2 border-0">
                <Wallet size={20}/> LIVE EXPENSES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
