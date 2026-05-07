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

  if (loading) return (
    <div className="container py-5 text-center">
      <div className="spinner-border text-primary" role="status"></div>
      <p className="mt-3">Loading Master Database...</p>
    </div>
  );

  return (
    <div className="container py-5">
      <div className="row align-items-center mb-4">
        <div className="col-lg-6">
          <h2 className="fw-black mb-1 d-flex align-items-center gap-2">
            <Database color="var(--primary)" /> Master Admin Panel
          </h2>
          <p className="text-muted">Total Data Visibility & History</p>
        </div>
        <div className="col-lg-6 text-lg-end d-flex gap-2 justify-content-lg-end">
            <a href="https://console.neon.tech/app/projects/ep-purple-art-aqai8m26/tables" target="_blank" rel="noreferrer" className="btn btn-dark btn-sm d-flex align-items-center gap-2">
                <ShieldCheck size={16}/> Neon Console
            </a>
            <div className="glass px-3 py-2 d-flex align-items-center gap-2">
                <Users size={18} color="var(--primary)"/> <span className="fw-bold">{new Set(bookings.map(b => b.userId)).size}</span> <span className="text-muted d-none d-md-inline">Users</span>
            </div>
            <div className="glass px-3 py-2 d-flex align-items-center gap-2">
                <CreditCard size={18} color="#10b981"/> <span className="fw-bold">{bookings.length}</span> <span className="text-muted d-none d-md-inline">Bookings</span>
            </div>
        </div>
      </div>

      <div className="glass shadow-sm overflow-hidden mb-4">
        <div className="table-responsive">
          <table className="table table-hover mb-0 align-middle">
            <thead className="table-light text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
              <tr>
                <th className="px-4 py-3 border-0">User Account</th>
                <th className="px-4 py-3 border-0">Route & Trip Details</th>
                <th className="px-4 py-3 border-0">Payment Info</th>
                <th className="px-4 py-3 border-0">Status</th>
                <th className="px-4 py-3 border-0 text-end">Booked Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-4 py-3">
                    <div className="fw-bold">{booking.User?.name || 'Guest User'}</div>
                    <div className="small text-muted">{booking.User?.email || 'No email'}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="d-flex align-items-center gap-2 fw-semibold">
                      <MapPin size={14} color="var(--primary)" /> {booking.route || booking.destinationName}
                    </div>
                    <div className="small text-muted">{booking.days} Days • {booking.totalTravelers || 1} Travelers</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="fw-black text-primary">
                      {booking.itineraryDetails?.currencySymbol || '₹'}{booking.totalCost.toLocaleString()}
                    </div>
                    <div className="small text-muted" style={{ fontFamily: 'monospace' }}>{booking.paymentId?.substring(0, 15)}...</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`badge rounded-pill ${booking.status === 'PAID' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'} px-3 py-2`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-end small text-muted">
                    {new Date(booking.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="text-center py-4 text-muted small">
        <ShieldCheck size={16} className="me-1" /> Secure PostgreSQL Engine: {bookings.length > 0 ? 'NEON DB ACTIVE' : 'CONNECTING...'}
      </div>
    </div>
  );
};
