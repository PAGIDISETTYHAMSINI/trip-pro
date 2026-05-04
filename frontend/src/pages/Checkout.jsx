import { useState, useContext } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { CreditCard, CheckCircle } from 'lucide-react';

export const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  
  const itinerary = location.state?.itinerary;
  const destination = location.state?.destination;
  const days = location.state?.days;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!itinerary || !destination) {
    return <div className="container" style={{padding: '4rem 0', textAlign: 'center'}}>No trip selected. <Link to="/">Go back</Link></div>;
  }

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate payment delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (token) {
        const bookingData = {
          destinationId: destination.id,
          destinationName: destination.name,
          totalCost: itinerary.totalCost,
          days: days,
          itineraryDetails: itinerary
        };

        await axios.post('https://trip-pro.onrender.com/api/bookings', bookingData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }

      navigate('/success', { state: { destinationName: destination.name, totalCost: itinerary.totalCost } });
    } catch (err) {
      setError('Payment failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '600px' }}>
      <div className="glass" style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Secure Checkout</h2>
        
        <div style={{ background: 'rgba(79, 70, 229, 0.05)', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <h3>Trip Summary</h3>
          <p><strong>Destination:</strong> {destination.name}</p>
          <p><strong>Duration:</strong> {days} Days</p>
          <p><strong>Total Amount:</strong> <span style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 'bold' }}>{itinerary.currencySymbol || '$'}{itinerary.totalCost.toLocaleString()}</span></p>
        </div>

        {error && <div className="error-message" style={{ marginBottom: '1rem' }}>{error}</div>}

        <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="form-group">
            <label>Name on Card</label>
            <input type="text" className="input-field" required placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label><CreditCard size={16} style={{ display: 'inline', marginRight: '4px' }}/> Card Number</label>
            <input type="text" className="input-field" required placeholder="0000 0000 0000 0000" maxLength="19" />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label>Expiry Date</label>
              <input type="text" className="input-field" required placeholder="MM/YY" maxLength="5" />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label>CVV</label>
              <input type="text" className="input-field" required placeholder="123" maxLength="4" />
            </div>
          </div>
          
          <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem', height: '50px' }} disabled={loading}>
            {loading ? 'Processing Payment...' : `Pay ${itinerary.currencySymbol || '$'}${itinerary.totalCost.toLocaleString()}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export const Success = () => {
  const location = useLocation();
  const { token } = useContext(AuthContext);
  const destinationName = location.state?.destinationName;
  const totalCost = location.state?.totalCost;

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
      <div className="fade-in">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <CheckCircle size={100} color="#10b981" style={{ marginBottom: '1.5rem' }} />
          <div className="confetti-sim" style={{ position: 'absolute', top: 0, left: 0 }}></div>
        </div>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 900, color: 'var(--text-main)' }}>You're Going to {destinationName}!</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px' }}>
          Pack your bags! Your dream trip has been confirmed. A detailed itinerary and booking receipt have been sent to your dashboard.
        </p>

        <div className="glass" style={{ padding: '2rem', marginBottom: '3rem', border: '2px solid #10b981', background: 'rgba(16, 185, 129, 0.05)' }}>
          <h3 style={{ marginBottom: '0.5rem', color: '#10b981' }}>Booking Confirmed</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 800 }}>Total Paid: {totalCost?.toLocaleString() ? (destinationName.includes('Andaman') ? '₹' : '$') + totalCost.toLocaleString() : '---'}</p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {token ? (
            <Link to="/dashboard" className="btn" style={{ background: '#10b981', boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.39)' }}>
              View My Schedule
            </Link>
          ) : (
            <Link to="/login" className="btn" style={{ background: 'var(--primary)', boxShadow: '0 4px 14px 0 rgba(79, 70, 229, 0.39)' }}>
              Log in to Save Trip
            </Link>
          )}
          <button className="btn" style={{ background: '#333' }} onClick={() => window.print()}>
            Download PDF
          </button>
          <button className="btn" style={{ background: '#0ea5e9' }} onClick={() => {
            const url = window.location.href;
            if (navigator.share) {
              navigator.share({ title: 'My Andaman Trip', url });
            } else {
              navigator.clipboard.writeText(url);
              alert('Trip link copied to clipboard!');
            }
          }}>
            Share Link
          </button>
          <Link to="/" className="btn" style={{ background: 'white', color: 'var(--text-main)', border: '1px solid var(--border)' }}>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};
