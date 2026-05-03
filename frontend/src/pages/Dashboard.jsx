import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Plane, Calendar, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token, user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/bookings', {
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
                  <Plane size={20} color="var(--primary)" /> {booking.destinationName}
                </h3>
                <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <Calendar size={16} /> {booking.days} Days Trip
                </p>
                <div style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>
                  <strong>Includes:</strong> {booking.itineraryDetails.hotel.type}, {booking.itineraryDetails.flight.type} Flight, {booking.itineraryDetails.activities.length} Activities
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                  ${booking.totalCost.toLocaleString()}
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', padding: '0.25rem 0.75rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                  <CreditCard size={14} /> Status: {booking.status}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  Booked on {new Date(booking.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
