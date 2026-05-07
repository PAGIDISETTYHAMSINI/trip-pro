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
    <div className="container" style={{ padding: '4rem 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
        <div>
          <h2 style={{ marginBottom: '2rem' }}>My Trips</h2>
      
      {bookings.length === 0 ? (
        <div className="glass" style={{ padding: '3rem', textAlign: 'center' }}>
          <Plane size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ marginBottom: '1rem' }}>No trips planned yet</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>You haven't booked any trips. Let's find your next adventure!</p>
          <Link to="/" className="btn">Plan a Trip</Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {bookings.map(booking => (
            <div key={booking.id} className="glass" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: `6px solid ${booking.status === 'CANCELLED' ? '#ef4444' : 'var(--primary)'}`, opacity: booking.status === 'CANCELLED' ? 0.7 : 1 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {booking.route || booking.destinationName}
                  </h3>
                  <span style={{ background: booking.status === 'CANCELLED' ? '#fee2e2' : 'rgba(16, 185, 129, 0.1)', color: booking.status === 'CANCELLED' ? '#ef4444' : '#10b981', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '900' }}>
                    {booking.status}
                  </span>
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={16} /> {booking.days} Days &bull; {new Date(booking.createdAt).toLocaleDateString()}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Zap size={16} /> {booking.totalTravelers || 1} Travelers
                  </div>
                </div>

                <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(0,0,0,0.02)', borderRadius: '6px', fontSize: '0.85rem' }}>
                  <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>Plan Summary:</span> {booking.itineraryDetails.hotel?.name || 'Hotel'} + {booking.itineraryDetails.transport?.agency || 'Transport'} ({booking.itineraryDetails.transport?.type})
                </div>
              </div>

              <div style={{ textAlign: 'right', minWidth: '220px', marginLeft: '2rem' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: '900', color: booking.status === 'CANCELLED' ? 'var(--text-muted)' : 'var(--primary)', marginBottom: '1rem' }}>
                  {booking.itineraryDetails.currencySymbol || '$'}{booking.totalCost.toLocaleString()}
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {booking.status !== 'CANCELLED' ? (
                    <>
                      <Link to={`/dashboard/schedule/${booking.id}`} className="btn" style={{ padding: '0.6rem', fontSize: '0.9rem', width: '100%', textAlign: 'center', fontWeight: 'bold' }}>
                        View Full Schedule
                      </Link>
                      <button onClick={() => handleCancel(booking.id)} style={{ background: 'transparent', border: '1px solid #ef4444', color: '#ef4444', padding: '0.5rem', borderRadius: '6px', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', fontWeight: '600' }}>
                        <XCircle size={15} /> Cancel Booking
                      </button>
                    </>
                  ) : (
                    <div style={{ color: '#ef4444', fontSize: '0.9rem', fontWeight: 'bold', fontStyle: 'italic', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem' }}>
                      <AlertCircle size={18} /> Booking Cancelled
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
        {/* Elite Sidebar Stats */}
        <div>
          <div className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem', borderBottom: '4px solid #f59e0b', background: 'rgba(245, 158, 11, 0.05)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Coins size={18} color="#f59e0b"/> My Travel Coins</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#f59e0b', textAlign: 'center' }}>{user?.coins || 0}</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>Use these for your next adventure! 💰</p>
          </div>

          <div className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem', borderBottom: '4px solid var(--primary)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Zap size={18} color="var(--primary)"/> Efficiency Score</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', textAlign: 'center' }}>84<span style={{ fontSize: '1rem' }}>/100</span></div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>You saved 12% on your last trip! 🎉</p>
          </div>

          <div className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}><PieChart size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }}/> Budget Heatmap</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                  <span>Stay (Hotels)</span>
                  <span>45%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'var(--border)', borderRadius: '3px' }}>
                  <div style={{ width: '45%', height: '100%', background: '#4f46e5', borderRadius: '3px' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                  <span>Transport</span>
                  <span>30%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'var(--border)', borderRadius: '3px' }}>
                  <div style={{ width: '30%', height: '100%', background: '#0ea5e9', borderRadius: '3px' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                  <span>Dining & Fun</span>
                  <span>25%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'var(--border)', borderRadius: '3px' }}>
                  <div style={{ width: '25%', height: '100%', background: '#10b981', borderRadius: '3px' }}></div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/dashboard/expenses" className="btn" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Wallet size={18}/> Open Live Expense Tracker
          </Link>
        </div>
      </div>
    </div>
  );
};
