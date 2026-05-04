import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Plane, Calendar, CreditCard, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Wallet, TrendingUp, Zap, PieChart } from 'lucide-react';

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
            <div key={booking.id} className="glass" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: '4px solid var(--primary)' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={20} color="var(--primary)" /> {booking.destinationName}
                </h3>
                <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <Calendar size={16} /> {booking.days} Days Trip
                </p>
                <div style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>
                  <strong>Includes:</strong> {booking.itineraryDetails.hotel.type}, {(booking.itineraryDetails.transport || booking.itineraryDetails.flight)?.type} Transport, {booking.itineraryDetails.activities.length} Activities
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                  {booking.itineraryDetails.currencySymbol || '$'}{booking.totalCost.toLocaleString()}
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', padding: '0.25rem 0.75rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                  <CreditCard size={14} /> Status: {booking.status}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: '1rem' }}>
                  Booked on {new Date(booking.createdAt).toLocaleDateString()}
                </div>
                <Link to={`/dashboard/schedule/${booking.id}`} className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                  View Detailed Schedule
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
        {/* Elite Sidebar Stats */}
        <div>
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
