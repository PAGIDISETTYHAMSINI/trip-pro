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

      const bookingData = {
        destinationId: destination.id,
        destinationName: destination.name,
        totalCost: itinerary.totalCost,
        days: days,
        itineraryDetails: itinerary
      };

      await axios.post('http://localhost:5000/api/bookings', bookingData, {
        headers: { Authorization: `Bearer ${token}` }
      });

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
          <p><strong>Total Amount:</strong> <span style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 'bold' }}>${itinerary.totalCost.toLocaleString()}</span></p>
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
            {loading ? 'Processing Payment...' : `Pay $${itinerary.totalCost.toLocaleString()}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export const Success = () => {
  const location = useLocation();
  const destinationName = location.state?.destinationName;

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
      <CheckCircle size={80} color="var(--primary)" style={{ marginBottom: '1rem' }} />
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Payment Successful!</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Your trip to <strong>{destinationName}</strong> has been successfully booked. 
      </p>
      <Link to="/" className="btn">Plan Another Trip</Link>
    </div>
  );
};
