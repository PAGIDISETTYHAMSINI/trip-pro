import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Plane, Calendar, CreditCard, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Wallet, TrendingUp, Zap, PieChart, Coins, XCircle, AlertCircle } from 'lucide-react';

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
      // Refresh bookings
      setBookings(bookings.map(b => b.id === bookingId ? { ...b, status: 'CANCELLED' } : b));
      alert("Booking cancelled successfully.");
    } catch (err) {
      console.error("Cancellation failed", err);
      alert("Failed to cancel booking.");
    }
  };

  if (loading) {
    return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading your trips...</div>;
  }

  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Main Content: Trips */}
        <div className="col-lg-8 col-md-12">
          <h2 className="fw-black mb-4 d-flex align-items-center gap-2">
            <Plane color="var(--primary)" /> My Trip History
          </h2>
      
          {bookings.length === 0 ? (
            <div className="glass p-5 text-center">
              <Plane size={64} className="text-muted mb-4" />
              <h3 className="fw-bold mb-2">No adventures yet</h3>
              <p className="text-muted mb-4">Your next dream destination is just a few clicks away.</p>
              <Link to="/" className="btn-primary-custom px-5">Start Planning</Link>
            </div>
          ) : (
            <div className="d-flex flex-column gap-4">
              {bookings.map(booking => (
                <div key={booking.id} className="glass glass-hover p-4 border-start border-4" style={{ borderColor: booking.status === 'CANCELLED' ? '#ef4444' : 'var(--primary)' }}>
                  <div className="row align-items-center">
                    <div className="col-md-7 mb-3 mb-md-0">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <h4 className="fw-black mb-0 fs-4">{booking.route || booking.destinationName}</h4>
                        <span className={`badge rounded-pill ${booking.status === 'CANCELLED' ? 'bg-danger-subtle text-danger' : 'bg-success-subtle text-success'}`}>
                          {booking.status}
                        </span>
                      </div>
                      <div className="d-flex flex-wrap gap-3 small text-muted mb-3">
                        <span className="d-flex align-items-center gap-1"><Calendar size={14}/> {booking.days} Days Trip</span>
                        <span className="d-flex align-items-center gap-1"><Zap size={14}/> {booking.totalTravelers || 1} Travelers</span>
                      </div>
                      <div className="p-3 bg-light rounded-3 small">
                        <span className="fw-bold text-primary">Live Plan:</span> {booking.itineraryDetails?.hotel?.name || 'Hotel Selection'} &bull; {booking.itineraryDetails?.transport?.agency || 'Travel Agency'}
                      </div>
                    </div>
                    <div className="col-md-5 text-md-end">
                      <div className="fs-2 fw-black text-primary mb-3">
                        {booking.itineraryDetails?.currencySymbol || '₹'}{booking.totalCost.toLocaleString()}
                      </div>
                      <div className="d-grid gap-2">
                        {booking.status !== 'CANCELLED' ? (
                          <>
                            <Link to={`/dashboard/schedule/${booking.id}`} className="btn-primary-custom w-100 py-2 fs-6">
                              View Schedule
                            </Link>
                            <button onClick={() => handleCancel(booking.id)} className="btn btn-outline-danger btn-sm border-0 d-flex align-items-center justify-content-center gap-1">
                              <XCircle size={14} /> Cancel Trip
                            </button>
                          </>
                        ) : (
                          <div className="text-danger small fw-bold italic d-flex align-items-center justify-content-end gap-1">
                            <AlertCircle size={16} /> Booking Revoked
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

        {/* Sidebar: Stats */}
        <div className="col-lg-4 col-md-12">
          <div className="sticky-top" style={{ top: '2rem' }}>
            {/* Reward Coins */}
            <div className="glass p-4 mb-4 border-bottom border-4" style={{ borderColor: '#f59e0b', background: 'rgba(245, 158, 11, 0.05)' }}>
              <h5 className="fw-black mb-3 d-flex align-items-center gap-2"><Coins size={20} color="#f59e0b"/> Travel Wallet</h5>
              <div className="display-4 fw-black text-warning text-center">{user?.coins || 0}</div>
              <p className="small text-muted text-center mt-2">Available coins for next trip! 💰</p>
            </div>

            {/* Efficiency Score */}
            <div className="glass p-4 mb-4 border-bottom border-4 border-primary">
              <h5 className="fw-black mb-3 d-flex align-items-center gap-2"><Zap size={20} color="var(--primary)"/> Smart Savings</h5>
              <div className="display-5 fw-black text-primary text-center">84<span className="fs-5 text-muted">/100</span></div>
              <p className="small text-muted text-center mt-2">Elite score based on itinerary cost!</p>
            </div>

            {/* Visual Budgeting */}
            <div className="glass p-4 mb-4">
              <h5 className="fw-black mb-4 d-flex align-items-center gap-2"><PieChart size={20} /> Spending Analytics</h5>
              <div className="d-flex flex-column gap-3">
                {[
                  { label: 'Accommodation', val: 45, color: 'bg-primary' },
                  { label: 'Transport', val: 30, color: 'bg-info' },
                  { label: 'Experience', val: 25, color: 'bg-success' }
                ].map(item => (
                  <div key={item.label}>
                    <div className="d-flex justify-content-between small fw-bold mb-1">
                      <span>{item.label}</span>
                      <span>{item.val}%</span>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div className={`progress-bar ${item.color}`} style={{ width: `${item.val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/dashboard/expenses" className="btn btn-dark w-100 py-3 rounded-4 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2">
              <Wallet size={18}/> Live Expense Tracker
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
