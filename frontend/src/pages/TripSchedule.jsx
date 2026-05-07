import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Clock, Sun, Sunset, Moon, ArrowLeft, ShieldCheck, CheckCircle, Share2 } from 'lucide-react';

const API = 'https://trip-pro.onrender.com';

export const TripSchedule = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (!token || !id) { setLoading(false); return; }
    axios.get(`${API}/api/bookings/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setBooking(res.data))
      .catch(err => console.error('Error fetching schedule', err))
      .finally(() => setLoading(false));
  }, [token, id]);

  const handleWhatsAppShare = () => {
    if (!booking) return;
    const text = `My trip to ${booking.destinationName}! Total: ${booking.itineraryDetails?.currencySymbol || '₹'}${booking.totalCost?.toLocaleString()}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', flexDirection: 'column', gap: '1rem' }}>
      <div className="spinner"></div>
      <p style={{ color: 'var(--slate-500)', fontWeight: 600 }}>Loading itinerary...</p>
    </div>
  );

  if (!booking) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', flexDirection: 'column', gap: '1.5rem', textAlign: 'center', padding: '2rem' }}>
      <h2 style={{ fontWeight: 900 }}>Itinerary Not Found</h2>
      <p style={{ color: 'var(--slate-500)' }}>This booking may have been removed or you may need to log in.</p>
      <Link to="/dashboard" className="btn-startup">← Back to Dashboard</Link>
    </div>
  );

  const boardingPoint = booking.route?.split(' ➔ ')[0] || 'Origin';
  const currency = booking.itineraryDetails?.currencySymbol || '₹';

  return (
    <div style={{ background: 'var(--slate-50)', minHeight: '100vh', padding: '2rem 0' }}>
      <div className="container">
        <Link to="/dashboard" className="btn" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>

        {/* HEADER CARD */}
        <div className="card" style={{ padding: '2rem', marginBottom: '2rem', borderLeft: '6px solid var(--primary)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-success" style={{ marginBottom: '0.75rem' }}>✓ VERIFIED ITINERARY</span>
              <h1 style={{ fontWeight: 900, fontSize: '2.5rem', marginBottom: '1.5rem' }}>{booking.destinationName}</h1>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'var(--slate-50)', borderRadius: 'var(--radius-lg)', padding: '1rem', border: '1px solid var(--slate-200)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>Boarding From</div>
                  <div style={{ fontWeight: 900, fontSize: '1.15rem' }}>{boardingPoint}</div>
                </div>
                <div style={{ background: 'var(--slate-50)', borderRadius: 'var(--radius-lg)', padding: '1rem', border: '1px solid var(--slate-200)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>Duration</div>
                  <div style={{ fontWeight: 900, fontSize: '1.15rem' }}>{booking.days} Days</div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--slate-400)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>Total</div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1, marginBottom: '1.5rem' }}>
                {currency}{booking.totalCost?.toLocaleString()}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button onClick={() => window.print()} className="btn" style={{ fontWeight: 700 }}>Save PDF</button>
                <button onClick={handleWhatsAppShare} style={{ background: '#25d366', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', padding: '0.6rem 1.25rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'inherit' }}>
                  <Share2 size={16} /> Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', alignItems: 'start' }}>

          {/* SCHEDULE */}
          <div>
            <h3 style={{ fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={24} style={{ color: 'var(--primary)' }} /> Daily Itinerary
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {(booking.schedule || []).map((day, idx) => (
                <div key={idx} className="card" style={{ padding: '1.5rem', position: 'relative', borderLeft: '4px solid var(--primary)', borderRadius: 'var(--radius-lg)' }}>
                  <div style={{ position: 'absolute', top: '-14px', left: '1rem', background: 'var(--primary)', color: '#fff', padding: '0.25rem 0.875rem', borderRadius: 'var(--radius-full)', fontWeight: 800, fontSize: '0.8rem' }}>
                    DAY {day.day}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '0.5rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: 'var(--warning)', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                        <Sun size={16} /> Morning
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.6, margin: 0 }}>{day.morning}</p>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: 'var(--danger)', marginBottom: '0.5rem', fontSize: '0.85rem', opacity: 0.8 }}>
                        <Sunset size={16} /> Afternoon
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.6, margin: 0 }}>{day.afternoon}</p>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                        <Moon size={16} /> Evening
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.6, margin: 0 }}>{day.evening}</p>
                    </div>
                  </div>
                </div>
              ))}
              {(!booking.schedule || booking.schedule.length === 0) && (
                <div className="card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--slate-400)' }}>
                  No daily schedule available for this booking.
                </div>
              )}
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ position: 'sticky', top: '6rem' }}>
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
              <h5 style={{ fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={18} style={{ color: 'var(--primary)' }} /> Support Info
              </h5>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Emergency</div>
                <div style={{ fontWeight: 700, color: 'var(--danger)' }}>{booking.itineraryDetails?.emergencyContacts || '112 / 911'}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Cultural Tips</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>{booking.itineraryDetails?.culturalEtiquette || 'Respect local customs and traditions.'}</div>
              </div>
            </div>
            <div style={{ background: 'var(--primary-soft)', border: '1px solid #bfdbfe', borderRadius: 'var(--radius-lg)', padding: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <CheckCircle size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.1rem' }} />
              <p style={{ fontSize: '0.85rem', color: 'var(--primary-dark)', fontWeight: 600, margin: 0 }}>
                Verified booking. Fetched live from Neon PostgreSQL database.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSchedule;
