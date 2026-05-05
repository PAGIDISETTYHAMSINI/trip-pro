import { useState, useContext } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { CreditCard, CheckCircle, ShieldCheck } from 'lucide-react';
import RazorpayMock from '../components/RazorpayMock';

export const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  
  const itinerary = location.state?.itinerary;
  const destination = location.state?.destination;
  const days = location.state?.days;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showRazorpay, setShowRazorpay] = useState(false);

  if (!itinerary || !destination) {
    return <div className="container" style={{padding: '4rem 0', textAlign: 'center'}}>No trip selected. <Link to="/">Go back</Link></div>;
  }

  const initPayment = (e) => {
    e.preventDefault();
    setShowRazorpay(true);
  };

  const handlePaymentSuccess = async (paymentDetails) => {
    setShowRazorpay(false);
    setLoading(true);
    
    try {
      if (token) {
        const bookingData = {
          destinationId: destination.id,
          destinationName: destination.name,
          totalCost: itinerary.totalCost,
          days: days,
          itineraryDetails: itinerary,
          paymentId: paymentDetails.razorpay_payment_id
        };

        await axios.post('https://trip-pro.onrender.com/api/bookings', bookingData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }

      navigate('/success', { state: { destinationName: destination.name, totalCost: itinerary.totalCost } });
    } catch (err) {
      setError('Payment processing failed on our servers. Please contact support.');
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '600px' }}>
      <div className="glass" style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Secure Checkout</h2>
        
        <div style={{ background: 'rgba(79, 70, 229, 0.05)', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <h3>Trip Summary</h3>
          <p><strong>Route:</strong> {itinerary.boardingPoint && itinerary.boardingPoint !== 'Not specified' ? `${itinerary.boardingPoint} ➔ ${destination.name}` : destination.name}</p>
          <p><strong>Duration:</strong> {days} Days</p>
          <p><strong>Total Amount:</strong> <span style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 'bold' }}>{itinerary.currencySymbol || '$'}{itinerary.totalCost.toLocaleString()}</span></p>
        </div>

        {error && <div className="error-message" style={{ marginBottom: '1rem' }}>{error}</div>}

        <form onSubmit={initPayment} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center', background: '#f9fafb' }}>
            <ShieldCheck size={48} color="#3399cc" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>Secured Payment Gateway</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>You will be redirected to our secure payment partner to complete your transaction via Card, UPI, or NetBanking.</p>
            
            <button type="submit" className="btn" style={{ width: '100%', height: '54px', fontSize: '1.1rem', background: '#3399cc' }} disabled={loading}>
              {loading ? 'Processing...' : `Proceed to Pay ${itinerary.currencySymbol || '$'}${itinerary.totalCost.toLocaleString()}`}
            </button>
          </div>
        </form>
      </div>

      {showRazorpay && (
        <RazorpayMock 
          amount={itinerary.totalCost} 
          currency={itinerary.currencySymbol || '$'} 
          email={null} 
          onSuccess={handlePaymentSuccess}
          onClose={() => setShowRazorpay(false)}
        />
      )}
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
