import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Plane, Calendar, CreditCard, MapPin, Wallet, TrendingUp, Zap, PieChart, Coins, XCircle, AlertCircle, ChevronRight, LayoutDashboard, Globe, Bookmark, Bell, Settings, ArrowUpRight } from 'lucide-react';
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
    if (token) fetchBookings();
  }, [token]);

  if (loading) return (
    <div className="container py-5 text-center">
      <div className="spinner-border text-primary"></div>
      <p className="mt-3 fw-bold">Connecting to Cloud Dashboard...</p>
    </div>
  );

  return (
    <div className="container-fluid py-4 py-md-5 bg-slate-50 min-vh-100">
      <div className="container p-0">
        
        {/* Dashboard Header */}
        <div className="row g-4 align-items-center mb-5 px-3">
           <div className="col-md-6">
              <h2 className="display-4 fw-black text-slate-900 mb-1">Welcome, <span className="text-primary">{user?.name || 'Explorer'}</span>.</h2>
              <p className="text-slate-500 fw-bold">Manage your premium itineraries and rewards.</p>
           </div>
           <div className="col-md-6 text-md-end d-flex gap-2 justify-content-md-end">
              <button className="btn-secondary-startup p-3 rounded-full"><Bell size={20}/></button>
              <button className="btn-secondary-startup p-3 rounded-full"><Settings size={20}/></button>
              <Link to="/build-trip" className="btn-startup">NEW AI TRIP <Plus size={18}/></Link>
           </div>
        </div>

        <div className="row g-4 px-3 px-md-0">
          {/* Main Feed */}
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-between mb-4">
               <h4 className="fw-black text-slate-900 mb-0 d-flex align-items-center gap-3">
                 <LayoutDashboard size={24} className="text-primary"/> Active Passports
               </h4>
               <div className="text-primary fw-bold small cursor-pointer hover-underline">View History ➔</div>
            </div>

            {bookings.length === 0 ? (
              <div className="glass-card p-5 text-center bg-white border-0">
                <div className="p-4 bg-primary-soft rounded-full d-inline-block mb-4"><Globe size={48} className="text-primary opacity-50" /></div>
                <h3 className="fw-black mb-2">The world is waiting.</h3>
                <p className="text-slate-500 mb-4">You haven't generated any AI itineraries yet. Start your journey today.</p>
                <Link to="/" className="btn-startup px-5 py-3">Explore Destinations</Link>
              </div>
            ) : (
              <div className="d-flex flex-column gap-4">
                {bookings.map(booking => (
                  <div key={booking.id} className="glass-card p-0 overflow-hidden border-0 bg-white">
                    <div className="row g-0">
                      <div className="col-md-8 p-4 p-md-5">
                        <div className="d-flex align-items-center gap-3 mb-4">
                          <h4 className="fw-black mb-0 fs-2">{booking.destinationName}</h4>
                          <span className={`badge px-3 py-1 rounded-full fw-bold ${booking.status === 'CANCELLED' ? 'bg-danger bg-opacity-10 text-danger' : 'bg-success bg-opacity-10 text-success'}`} style={{ fontSize: '0.65rem' }}>
                            {booking.status}
                          </span>
                        </div>
                        <div className="row g-4 mb-4">
                           <div className="col-6 col-md-4">
                              <div className="small text-slate-400 fw-bold text-uppercase mb-1">Departure</div>
                              <div className="fw-bold">{booking.route?.split(' ➔ ')[0] || 'TBD'}</div>
                           </div>
                           <div className="col-6 col-md-4">
                              <div className="small text-slate-400 fw-bold text-uppercase mb-1">Duration</div>
                              <div className="fw-bold">{booking.days} Days</div>
                           </div>
                           <div className="col-12 col-md-4">
                              <div className="small text-slate-400 fw-bold text-uppercase mb-1">Stay Confirmed</div>
                              <div className="fw-bold text-primary text-truncate">{booking.itineraryDetails?.hotel?.name || 'Grand Resort'}</div>
                           </div>
                        </div>
                      </div>
                      <div className="col-md-4 p-4 p-md-5 bg-slate-50 border-start d-flex flex-column justify-content-center text-md-center">
                         <div className="small text-slate-400 fw-black mb-1">ITINERARY VALUE</div>
                         <div className="display-5 fw-black text-slate-900 mb-4">
                           {booking.itineraryDetails?.currencySymbol || '₹'}{booking.totalCost.toLocaleString()}
                         </div>
                         <Link to={`/dashboard/schedule/${booking.id}`} className="btn-startup w-100 justify-content-center">
                            OPEN PASS <ArrowUpRight size={18}/>
                         </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Widgets Sidebar */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '2rem' }}>
               {/* Wallet Widget */}
               <div className="glass-card p-4 p-md-5 border-0 bg-primary text-white mb-4 overflow-hidden position-relative shadow-primary">
                  <div className="position-absolute top-0 end-0 p-3 opacity-10 rotate-12"><Coins size={120}/></div>
                  <h5 className="fw-bold mb-4 small tracking-widest text-uppercase opacity-75">Travel Rewards</h5>
                  <div className="display-3 fw-black text-white mb-1">{user?.coins || 0}</div>
                  <p className="small fw-bold opacity-75 mb-4">Elite Coins Earned 💎</p>
                  <button className="btn btn-white w-100 py-2 rounded-lg fw-bold bg-white text-primary border-0">REDEEM POINTS</button>
               </div>

               {/* Analytics Widget */}
               <div className="glass-card p-4 p-md-5 border-0 bg-white mb-4">
                  <h5 className="fw-black mb-4 small text-slate-400 tracking-widest text-uppercase">Budget Insights</h5>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                     <span className="small fw-bold text-slate-700">EFFICIENCY SCORE</span>
                     <span className="fw-black text-primary fs-4">88%</span>
                  </div>
                  <div className="progress mb-4" style={{ height: '8px', borderRadius: '10px' }}>
                     <div className="progress-bar bg-primary" style={{ width: '88%' }}></div>
                  </div>
                  <p className="small text-slate-500 mb-0">Your optimized routes have saved you over <strong>₹12,400</strong> this year. Excellent!</p>
               </div>

               {/* Tips Widget */}
               <div className="p-4 bg-secondary bg-opacity-10 rounded-xl border border-secondary border-opacity-10 d-flex gap-3 align-items-start">
                  <Zap size={24} className="text-secondary mt-1 flex-shrink-0"/>
                  <p className="small text-secondary mb-0 fw-bold">
                    <strong>AI Hack:</strong> Completing your profile earns you 500 extra Elite Coins instantly.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Plus = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
