import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { MapPin, Calendar, Clock, Sun, Sunset, Moon, ArrowLeft, Download, Share2, ShieldAlert, BookOpen } from 'lucide-react';
import { Translator } from '../components/Translator';

export const TripSchedule = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get('https://trip-pro.onrender.com/api/bookings', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const found = res.data.find(b => b.id === id);
        setBooking(found);
      } catch (err) {
        console.error("Failed to fetch booking schedule", err);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchBooking();
  }, [token, id]);

  const handleWhatsAppShare = () => {
    if (!booking) return;
    const text = `Hey! Check out my upcoming trip to ${booking.destinationName} via WanderBudget!\nIt's a ${booking.days}-day trip staying at a ${booking.itineraryDetails?.hotel?.name || 'Hotel'}.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  if (loading) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading schedule...</div>;
  if (!booking) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Schedule not found.</div>;

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <Link to="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1.5rem', textDecoration: 'none', fontWeight: 600 }}>
        <ArrowLeft size={16} /> Back to Dashboard
      </Link>
      
      {/* Hero Image */}
      <div className="hero-image print-hide" style={{ 
        width: '100%', 
        height: '350px', 
        borderRadius: '16px', 
        overflow: 'hidden',
        marginBottom: '2rem',
        boxShadow: 'var(--glass-shadow)'
      }}>
        <img 
          src={`https://picsum.photos/seed/${booking.destinationName.replace(/[^a-zA-Z]/g, '')}/1200/400`} 
          alt={booking.destinationName} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>

      <div className="glass print-hide" style={{ padding: '2rem', marginBottom: '2rem', borderLeft: '5px solid var(--primary)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={24} color="var(--primary)" /> Detailed Itinerary for {booking.destinationName}
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              {booking.days} Days • {booking.itineraryDetails?.currencySymbol || '$'}{booking.totalCost.toLocaleString()}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={handleDownloadPDF} className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#333' }}>
              <Download size={16} /> Save Offline (PDF)
            </button>
            <button onClick={handleWhatsAppShare} className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#25D366', color: '#fff' }}>
              <Share2 size={16} /> Share via WhatsApp
            </button>
          </div>
        </div>
        <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '8px', fontSize: '0.9rem', display: 'inline-block' }}>
          ✓ We've emailed a copy of this exact schedule to your registered email address!
        </div>
      </div>

      <div className="survival-kit-grid print-hide" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="glass" style={{ padding: '1.5rem', borderTop: '4px solid #f59e0b' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', marginBottom: '1rem' }}>
            <BookOpen size={20} /> Cultural Etiquette
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            {booking.itineraryDetails?.culturalEtiquette || "Be respectful of local customs. Always greet locals with a smile and ask before taking photos."}
          </p>
        </div>
        <div className="glass" style={{ padding: '1.5rem', borderTop: '4px solid #ef4444' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', marginBottom: '1rem' }}>
            <ShieldAlert size={20} /> Emergency Contacts
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            {booking.itineraryDetails?.emergencyContacts || "Local Emergency: 911 / 112"}
          </p>
        </div>
      </div>

      <Translator targetLanguage={booking.itineraryDetails?.language || 'en'} />

      <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Your Day-by-Day Path</h2>

      <div className="schedule-timeline" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {booking.schedule && booking.schedule.map((day, idx) => (
          <div key={idx} className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>
              <Calendar size={20} /> Day {day.day}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Morning */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 152, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Sun size={20} color="#ff9800" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Morning</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{day.morning}</p>
                </div>
              </div>

              {/* Afternoon */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(233, 30, 99, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Sunset size={20} color="#e91e63" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Afternoon</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{day.afternoon}</p>
                </div>
              </div>

              {/* Evening */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(103, 58, 183, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Moon size={20} color="#673ab7" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Evening</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{day.evening}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Agency Tour Package Details (Accordions) */}
      <h2 style={{ marginTop: '4rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Tour Package Essentials</h2>
      
      <div className="accordion-group glass" style={{ padding: '1rem' }}>
        
        {booking.itineraryDetails.inclusions && (
          <details className="agency-accordion">
            <summary>✅ Inclusions</summary>
            <ul>
              {booking.itineraryDetails.inclusions.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </details>
        )}

        {booking.itineraryDetails.exclusions && (
          <details className="agency-accordion">
            <summary>❌ Exclusions</summary>
            <ul>
              {booking.itineraryDetails.exclusions.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </details>
        )}

        {booking.itineraryDetails.packingList && (
          <details className="agency-accordion">
            <summary>🎒 Packing List</summary>
            <ul>
              {booking.itineraryDetails.packingList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </details>
        )}

        {booking.itineraryDetails.shoppingGuide && (
          <details className="agency-accordion">
            <summary>🛍️ Shopping Guide</summary>
            <div style={{ padding: '0.5rem 0' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>What to Shop</h4>
              <ul>{booking.itineraryDetails.shoppingGuide.whatToShop.map((item, i) => <li key={i}>{item}</li>)}</ul>
              <h4 style={{ color: 'var(--primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>Where to Shop</h4>
              <ul>{booking.itineraryDetails.shoppingGuide.whereToShop.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
          </details>
        )}

        {booking.itineraryDetails.knowBeforeYouGo && (
          <details className="agency-accordion">
            <summary>ℹ️ Know Before You Go</summary>
            <ul>
              {booking.itineraryDetails.knowBeforeYouGo.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </details>
        )}

        {booking.itineraryDetails.policies && (
          <details className="agency-accordion">
            <summary>📜 Policies & Care Guidelines</summary>
            <ul>
              {booking.itineraryDetails.policies.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </details>
        )}

        {booking.itineraryDetails.cancellationPolicy && (
          <details className="agency-accordion">
            <summary>💳 Cancellation Policy</summary>
            <ul>
              {booking.itineraryDetails.cancellationPolicy.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </details>
        )}

      </div>

    </div>
  );
};
