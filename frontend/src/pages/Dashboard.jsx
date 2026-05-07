import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Plane, LayoutDashboard, Globe, Wallet, Zap, Bell, Plus, ArrowUpRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const API = 'https://trip-pro.onrender.com';

export const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { token, user } = useContext(AuthContext);

  useEffect(() => {
    if (!token) { setLoading(false); return; }
    axios.get(`${API}/api/bookings`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setBookings(res.data || []))
      .catch(() => setError('Could not load bookings. Please try again.'))
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', flexDirection: 'column', gap: '1rem' }}>
      <div className="spinner"></div>
      <p style={{ color: 'var(--slate-500)', fontWeight: 600 }}>Loading dashboard...</p>
    </div>
  );

  if (!token) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', flexDirection: 'column', gap: '1.5rem', textAlign: 'center', padding: '2rem' }}>
      <Globe size={56} style={{ color: 'var(--primary)', opacity: 0.4 }} />
      <h2 style={{ fontWeight: 900 }}>Please log in</h2>
      <p style={{ color: 'var(--slate-500)' }}>Sign in to view your personalized dashboard.</p>
      <Link to="/login" className="btn-startup">Log In</Link>
    </div>
  );

  return (
    <div style={{ background: 'var(--slate-50)', minHeight: '100vh', padding: '2rem 0' }}>
      <div className="container">

        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <h1 style={{ fontWeight: 900, fontSize: '2rem', marginBottom: '0.25rem' }}>
              Welcome back, <span style={{ color: 'var(--primary)' }}>{user?.name || 'Explorer'}</span> 👋
            </h1>
            <p style={{ color: 'var(--slate-500)', fontWeight: 600 }}>Your AI travel command center.</p>
          </div>
          <Link to="/build-trip" className="btn-startup" style={{ alignSelf: 'flex-start' }}>
            <Plus size={16} /> New AI Trip
          </Link>
        </div>

        {/* STATS ROW */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {[
            { label: 'Total Trips', value: bookings.length, icon: <Plane size={22} style={{ color: 'var(--primary)' }} />, bg: 'var(--primary-soft)' },
            { label: 'AI Coins', value: user?.coins || 0, icon: <Zap size={22} style={{ color: 'var(--warning)' }} />, bg: '#fffbeb' },
            { label: 'Saved (Est.)', value: '₹12,400', icon: <TrendingUp size={22} style={{ color: 'var(--success)' }} />, bg: '#f0fdf4' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: s.bg, borderRadius: 'var(--radius-lg)', padding: '0.75rem' }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600, marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', alignItems: 'start' }}>

          {/* BOOKINGS */}
          <div>
            <h3 style={{ fontWeight: 900, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <LayoutDashboard size={20} style={{ color: 'var(--primary)' }} /> My Trips
            </h3>

            {error && <div className="alert alert-danger mb-3">{error}</div>}

            {bookings.length === 0 ? (
              <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
                <Globe size={52} style={{ color: 'var(--primary)', opacity: 0.3, margin: '0 auto 1rem' }} />
                <h3 style={{ fontWeight: 900, marginBottom: '0.5rem' }}>No trips yet</h3>
                <p style={{ color: 'var(--slate-500)', marginBottom: '1.5rem' }}>Start your first AI-powered trip today.</p>
                <Link to="/build-trip" className="btn-startup" style={{ display: 'inline-flex' }}>Plan a Trip</Link>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {bookings.map(booking => (
                  <div key={booking.id} className="trip-card">
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0 }}>
                      <div style={{ padding: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                          <h3 style={{ fontWeight: 900, fontSize: '1.4rem', margin: 0 }}>{booking.destinationName}</h3>
                          <span className={`badge ${booking.status === 'CANCELLED' ? 'badge-danger' : 'badge-success'}`}>
                            {booking.status || 'CONFIRMED'}
                          </span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                          <div>
                            <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>From</div>
                            <div style={{ fontWeight: 700 }}>{booking.route?.split(' ➔ ')[0] || 'Origin'}</div>
                          </div>
                          <div>
                            <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Days</div>
                            <div style={{ fontWeight: 700 }}>{booking.days || '—'}</div>
                          </div>
                          <div>
                            <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Hotel</div>
                            <div style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {booking.itineraryDetails?.hotel?.name || 'Included'}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ background: 'var(--slate-50)', borderLeft: '1px solid var(--slate-200)', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                        <div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--slate-400)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Total Value</div>
                          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--slate-900)' }}>
                            {booking.itineraryDetails?.currencySymbol || '₹'}{booking.totalCost?.toLocaleString() || '0'}
                          </div>
                        </div>
                        <Link to={`/dashboard/schedule/${booking.id}`} className="btn-startup" style={{ fontSize: '0.8rem', padding: '0.6rem 1rem', width: '100%', justifyContent: 'center' }}>
                          View Pass <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <div>
            {/* Rewards Card */}
            <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: 'var(--radius-xl)', padding: '1.75rem', color: '#fff', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, opacity: 0.7, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Travel Rewards</div>
              <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1, marginBottom: '0.25rem' }}>{user?.coins || 0}</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.75, marginBottom: '1.25rem' }}>Elite Coins 💎</div>
              <button style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', borderRadius: 'var(--radius-md)', padding: '0.6rem 1rem', fontWeight: 700, cursor: 'pointer', width: '100%', fontFamily: 'inherit' }}>
                Redeem Points
              </button>
            </div>

            {/* Budget Insights */}
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1.25rem' }}>
              <h5 style={{ fontWeight: 800, marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--slate-500)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Budget Efficiency</h5>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Score</span>
                <span style={{ fontWeight: 900, color: 'var(--primary)', fontSize: '1.25rem' }}>88%</span>
              </div>
              <div className="progress" style={{ height: '8px', marginBottom: '0.75rem' }}>
                <div className="progress-bar" style={{ width: '88%' }}></div>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--slate-500)', margin: 0 }}>
                AI-optimized routes saved you <strong>₹12,400</strong> this year.
              </p>
            </div>

            {/* Premium Upgrade */}
            {!user?.isPremium && (
              <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--secondary)', background: 'var(--slate-50)' }}>
                <div className="badge badge-primary" style={{ background: 'var(--secondary)', color: '#fff', marginBottom: '0.75rem' }}>LIMITED OFFER</div>
                <h4 style={{ fontWeight: 900, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Upgrade to <span style={{ color: 'var(--secondary)' }}>PRO</span></h4>
                <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.85rem', color: 'var(--slate-600)', marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>💎 0% Booking Fees</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>💎 Priority AI Planner</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>💎 Exclusive Hidden Gems</li>
                </ul>
                <button className="btn-startup" style={{ background: 'var(--secondary)', width: '100%', justifyContent: 'center' }}>
                  Upgrade Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
