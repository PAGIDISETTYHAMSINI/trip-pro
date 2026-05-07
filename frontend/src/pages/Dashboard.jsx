import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Plane, Calendar, CreditCard, MapPin, Wallet, TrendingUp, Zap, PieChart, Coins, XCircle, AlertCircle, ChevronRight, Download, Share2 } from 'lucide-react';
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
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}></div>
        <h4 className="mt-4 fw-black">Authenticating Passports...</h4>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-5">
      <div className="container p-0">
        <div className="row g-4">
          {/* Main Content */}
          <div className="col-12 col-lg-8 order-2 order-lg-1">
            <div className="d-flex align-items-center justify-content-between mb-4 px-2">
               <h2 className="fw-black mb-0 d-flex align-items-center gap-3 fs-1">
                 My <span className="text-primary">Passports</span>
               </h2>
               <div className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-20 px-3 py-2 rounded-pill fw-bold small">
                 {bookings.length} TOTAL TRIPS
               </div>
            </div>
        
            {bookings.length === 0 ? (
              <div className="glass p-5 text-center rounded-4 border-0 shadow-2xl">
                <div className="p-4 bg-primary bg-opacity-5 rounded-circle d-inline-block mb-4 shadow-sm border border-primary border-opacity-10">
                   <Plane size={64} className="text-primary opacity-50" />
                </div>
                <h3 className="fw-black mb-2">No active itineraries</h3>
                <p className="text-muted mb-4 opacity-75">Your wanderlust is waiting. Start planning your next premium escape today.</p>
                <Link to="/" className="btn-primary-custom px-5 py-3 shadow-lg">Plan New Adventure</Link>
              </div>
            ) : (
              <div className="d-flex flex-column gap-4">
                {bookings.map(booking => (
                  <div key={booking.id} className="glass ticket p-0 border-0 shadow-lg overflow-hidden fade-in" style={{ borderLeft: `8px solid ${booking.status === 'CANCELLED' ? '#ef4444' : 'var(--primary)'}` }}>
                    <div className="row g-0">
                      <div className="col-md-8 p-4 p-md-5">
                        <div className="d-flex align-items-center gap-3 mb-4">
                          <h4 className="fw-black mb-0 display-6 tracking-tightest">{booking.destinationName}</h4>
                          <span className={`badge rounded-pill ${booking.status === 'CANCELLED' ? 'bg-danger text-white' : 'bg-primary text-white'} px-3 py-2 fw-bold`} style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                            {booking.status}
                          </span>
                        </div>
                        
                        <div className="row g-4 mb-4">
                           <div className="col-6 col-sm-4">
                              <div className="small text-muted fw-bold text-uppercase mb-1" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>Boarding</div>
                              <div className="fw-black">{booking.route?.split(' ➔ ')[0] || 'TBD'}</div>
                           </div>
                           <div className="col-6 col-sm-4">
                              <div className="small text-muted fw-bold text-uppercase mb-1" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>Duration</div>
                              <div className="fw-black">{booking.days} DAYS</div>
                           </div>
                           <div className="col-12 col-sm-4">
                              <div className="small text-muted fw-bold text-uppercase mb-1" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>Reference</div>
                              <div className="fw-black text-primary small text-truncate">#{booking.id.slice(0,8).toUpperCase()}</div>
                           </div>
                        </div>

                        <div className="p-3 bg-white bg-opacity-5 rounded-4 border border-white border-opacity-10 d-flex align-items-center gap-3">
                           <div className="p-2 bg-primary bg-opacity-10 text-primary rounded-circle shadow-sm"><Building size={20}/></div>
                           <div className="small fw-bold opacity-75">Stay at {booking.itineraryDetails?.hotel?.name || 'Exclusive Resort'}</div>
                        </div>
                      </div>

                      <div className="col-md-4 p-4 p-md-5 bg-primary bg-opacity-5 border-md-start border-white border-opacity-10 text-md-center d-flex flex-column justify-content-center">
                         <div className="small text-muted fw-bold mb-1 text-uppercase">Final Total</div>
                         <div className="display-5 fw-black text-primary mb-4 lh-1">
                           {booking.itineraryDetails?.currencySymbol || '₹'}{booking.totalCost.toLocaleString()}
                         </div>
                         <div className="d-grid gap-2">
                           {booking.status !== 'CANCELLED' ? (
                             <>
                               <Link to={`/dashboard/schedule/${booking.id}`} className="btn-primary-custom w-100 justify-content-center py-2 fs-6 rounded-pill shadow">
                                 OPEN TICKET <ChevronRight size={18}/>
                               </Link>
                               <button onClick={() => handleCancel(booking.id)} className="btn btn-link text-danger text-decoration-none fw-bold small opacity-50 hover-opacity-100 mt-2">
                                 Cancel Itinerary
                               </button>
                             </>
                           ) : (
                             <div className="p-3 bg-danger bg-opacity-10 text-danger rounded-pill fw-black small text-center border border-danger border-opacity-20">
                               REVOKED
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

          {/* Sidebar */}
          <div className="col-12 col-lg-4 order-1 order-lg-2">
            <div className="sticky-top" style={{ top: '2rem' }}>
              <div className="glass p-4 p-md-5 mb-4 rounded-4 shadow-2xl border-0 position-relative overflow-hidden">
                <div className="position-absolute top-0 end-0 p-3 opacity-10 rotate-12"><Coins size={120} /></div>
                <h5 className="fw-black mb-4 d-flex align-items-center gap-2 text-uppercase small tracking-widest text-primary"><Wallet size={18} /> Travel Wallet</h5>
                <div className="display-2 fw-black text-white mb-2 lh-1">{user?.coins || 0}</div>
                <p className="small text-muted mb-4 fw-bold">Available Coins for Rewards 💎</p>
                <div className="d-flex align-items-center gap-2 p-3 bg-primary bg-opacity-10 rounded-4 border border-primary border-opacity-20 text-primary small">
                   <Zap size={16} /> Earn 500+ coins on next booking!
                </div>
              </div>

              <div className="glass p-4 p-md-5 mb-4 rounded-4 shadow-xl border-0 border-top border-4 border-primary">
                <h5 className="fw-black mb-4 text-uppercase small tracking-widest text-muted">Trip Efficiency</h5>
                <div className="d-flex align-items-center justify-content-between mb-3">
                   <span className="small fw-black">SMART SCORE</span>
                   <span className="fw-black text-primary fs-4">84%</span>
                </div>
                <div className="progress mb-4" style={{ height: '10px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)' }}>
                   <div className="progress-bar bg-primary shadow-glow" style={{ width: '84%', borderRadius: '10px' }}></div>
                </div>
                <p className="small text-muted mb-0 lh-sm">You are saving 15% more than average travelers on this route. Excellent!</p>
              </div>

              <Link to="/dashboard/expenses" className="btn-primary-custom w-100 py-4 rounded-4 shadow-2xl justify-content-center text-center">
                <PieChart size={24}/> EXPENSE ANALYTICS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
