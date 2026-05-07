import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Plane, LayoutDashboard, Globe, Wallet, Zap, Bell, Plus, ArrowUpRight, TrendingUp, Share2 } from 'lucide-react';
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
    <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column gap-3">
      <div className="spinner"></div>
      <p className="text-muted fw-bold">Loading dashboard...</p>
    </div>
  );

  if (!token) return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column gap-4 text-center p-4">
      <Globe size={56} className="text-primary opacity-25" />
      <h2 className="fw-black">Please log in</h2>
      <p className="text-muted">Sign in to view your personalized dashboard.</p>
      <Link to="/login" className="btn-startup">Log In</Link>
    </div>
  );

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">

        {/* HEADER */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4 mb-5">
          <div>
            <h1 className="fw-black display-6 m-0">
              Welcome back, <span className="text-primary">{user?.name || 'Explorer'}</span> 👋
            </h1>
            <p className="text-muted fw-bold small m-0 mt-1">Your AI travel command center.</p>
          </div>
          <Link to="/build-trip" className="btn-startup">
            <Plus size={16} /> New AI Trip
          </Link>
        </div>

        {/* STATS ROW */}
        <div className="row g-3 mb-5">
          {[
            { label: 'Total Trips', value: bookings.length, icon: <Plane size={22} className="text-primary" />, bg: 'var(--primary-soft)' },
            { label: 'AI Coins', value: user?.coins || 0, icon: <Zap size={22} className="text-warning" />, bg: '#fffbeb' },
            { label: 'Saved (Est.)', value: '₹12,400', icon: <TrendingUp size={22} className="text-success" />, bg: '#f0fdf4' },
          ].map((s, i) => (
            <div key={i} className="col-md-4">
              <div className="card border-0 shadow-sm p-4 h-100 d-flex flex-row align-items-center gap-4">
                <div className="rounded-xl p-3" style={{ background: s.bg }}>{s.icon}</div>
                <div>
                  <div className="fs-2 fw-black lh-1">{s.value}</div>
                  <div className="small text-muted fw-bold mt-1">{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">

          {/* BOOKINGS */}
          <div className="col-lg-8">
            <h3 className="fw-black mb-4 d-flex align-items-center gap-2">
              <LayoutDashboard size={20} className="text-primary" /> My Trips
            </h3>

            {error && <div className="alert alert-danger mb-4">{error}</div>}

            {bookings.length === 0 ? (
              <div className="card border-0 shadow-sm p-5 text-center">
                <Globe size={52} className="text-primary opacity-25 mx-auto mb-4" />
                <h3 className="fw-black mb-2">No trips yet</h3>
                <p className="text-muted mb-4">Start your first AI-powered trip today.</p>
                <Link to="/build-trip" className="btn-startup d-inline-flex mx-auto">Plan a Trip</Link>
              </div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {bookings.map(booking => (
                  <div key={booking.id} className="trip-card border-0 shadow-sm overflow-hidden bg-white">
                    <div className="row g-0">
                      <div className="col-md-8 p-4">
                        <div className="d-flex align-items-center gap-3 mb-4">
                          <h3 className="fw-black fs-4 m-0">{booking.destinationName}</h3>
                          <span className={`badge ${booking.status === 'CANCELLED' ? 'bg-danger text-white' : 'badge-success'}`}>
                            {booking.status || 'CONFIRMED'}
                          </span>
                        </div>
                        <div className="row g-3">
                          <div className="col-4">
                            <div className="small text-muted fw-bold text-uppercase opacity-50 mb-1">From</div>
                            <div className="fw-black text-truncate small">{booking.route?.split(' ➔ ')[0] || 'Origin'}</div>
                          </div>
                          <div className="col-4">
                            <div className="small text-muted fw-bold text-uppercase opacity-50 mb-1">Days</div>
                            <div className="fw-black small">{booking.days || '—'}</div>
                          </div>
                          <div className="col-4">
                            <div className="small text-muted fw-bold text-uppercase opacity-50 mb-1">Hotel</div>
                            <div className="fw-black text-truncate small">
                              {booking.itineraryDetails?.hotel?.name || 'Included'}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 bg-light border-start p-4 d-flex flex-column justify-content-center align-items-center text-center gap-3">
                        <div>
                          <div className="small text-muted fw-bold text-uppercase opacity-50 mb-1">Total Value</div>
                          <div className="fs-3 fw-black text-main">
                            {booking.itineraryDetails?.currencySymbol || '₹'}{booking.totalCost?.toLocaleString() || '0'}
                          </div>
                        </div>
                        <div className="d-flex gap-2 w-100">
                          <Link to={`/dashboard/schedule/${booking.id}`} className="btn-startup py-2 small flex-grow-1 justify-content-center">
                            View Pass <ArrowUpRight size={14} />
                          </Link>
                          <button 
                            className="btn border py-2 px-3 bg-white" 
                            onClick={() => {
                              navigator.clipboard.writeText(`Check out my trip to ${booking.destinationName} on Trip Pro!`);
                              alert('Link copied to clipboard!');
                            }}
                          >
                            <Share2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="col-lg-4">
            {/* Rewards Card */}
            <div className="p-4 rounded-xl shadow-lg mb-4 text-white" style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}>
              <div className="small fw-bold opacity-75 text-uppercase mb-2">Travel Rewards</div>
              <div className="display-4 fw-black lh-1 mb-1">{user?.coins || 0}</div>
              <div className="small opacity-75 mb-4">Elite Coins 💎</div>
              <button className="btn w-100 bg-white bg-opacity-20 border-0 text-white fw-black py-2 rounded-lg">
                Redeem Points
              </button>
            </div>

            {/* Budget Insights */}
            <div className="card border-0 shadow-sm p-4 mb-4">
              <h5 className="small fw-black text-muted text-uppercase mb-3 opacity-50">Budget Efficiency</h5>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-bold small">Score</span>
                <span className="fw-black text-primary fs-4">88%</span>
              </div>
              <div className="progress mb-3" style={{ height: '8px' }}>
                <div className="progress-bar" style={{ width: '88%' }}></div>
              </div>
              <p className="small text-muted m-0 lh-base">
                AI-optimized routes saved you <strong>₹12,400</strong> this year.
              </p>
            </div>

            {/* Premium Upgrade */}
            {!user?.isPremium && (
              <div className="card border-primary p-4 shadow-sm" style={{ background: 'var(--primary-soft)' }}>
                <div className="badge bg-secondary text-white mb-3">LIMITED OFFER</div>
                <h4 className="fw-black mb-2">Upgrade to <span className="text-secondary">PRO</span></h4>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                  <li className="small d-flex align-items-center gap-2">💎 0% Booking Fees</li>
                  <li className="small d-flex align-items-center gap-2">💎 Priority AI Planner</li>
                  <li className="small d-flex align-items-center gap-2">💎 Exclusive Gems</li>
                </ul>
                <button className="btn bg-secondary text-white border-0 w-100 fw-black py-2 rounded-lg">
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
