import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Database, Users, CreditCard, MapPin, Calendar, Trash2, ShieldCheck, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://trip-pro.onrender.com/api/bookings/admin/all', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(res.data);
    } catch (err) {
      console.error("Admin fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchAllData();
  }, [token]);

  if (loading) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}><RefreshCw className="animate-spin" /> Loading Master Database...</div>;

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Database color="var(--primary)" /> Master Admin Dashboard
        </h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="glass" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={18} color="var(--primary)"/> <strong>{new Set(bookings.map(b => b.userId)).size}</strong> Users
            </div>
            <div className="glass" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CreditCard size={18} color="#10b981"/> <strong>{bookings.length}</strong> Total Bookings
            </div>
        </div>
      </div>

      <div className="glass" style={{ padding: '0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)' }}>
            <tr>
              <th style={{ padding: '1rem' }}>User</th>
              <th style={{ padding: '1rem' }}>Route / Destination</th>
              <th style={{ padding: '1rem' }}>Amount</th>
              <th style={{ padding: '1rem' }}>Status</th>
              <th style={{ padding: '1rem' }}>Payment ID</th>
              <th style={{ padding: '1rem' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem' }}>
                  <div style={{ fontWeight: 'bold' }}>{booking.User?.name || 'Guest'}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{booking.User?.email}</div>
                </td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                    <MapPin size={14} color="var(--primary)" /> {booking.route || booking.destinationName}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{booking.days} Days</div>
                </td>
                <td style={{ padding: '1rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                  {booking.itineraryDetails?.currencySymbol || '$'}{booking.totalCost.toLocaleString()}
                </td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    padding: '0.2rem 0.5rem', 
                    borderRadius: '4px', 
                    fontSize: '0.7rem', 
                    fontWeight: 'bold',
                    background: booking.status === 'PAID' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: booking.status === 'PAID' ? '#10b981' : '#ef4444'
                  }}>
                    {booking.status}
                  </span>
                </td>
                <td style={{ padding: '1rem', fontSize: '0.8rem', fontFamily: 'monospace' }}>
                  {booking.paymentId || 'N/A'}
                </td>
                <td style={{ padding: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={12} /> {new Date(booking.createdAt).toLocaleDateString()}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <ShieldCheck size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> 
        Secure Admin Access Verified via PostgreSQL Core
      </div>
    </div>
  );
};
