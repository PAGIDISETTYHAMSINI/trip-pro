import React, { useState } from 'react';
import { CreditCard, Smartphone, Building, X, CheckCircle, Lock } from 'lucide-react';

const RazorpayMock = ({ amount, currency, email, onSuccess, onClose }) => {
  const [method, setMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePay = () => {
    setLoading(true);
    // Simulate network delay and payment processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Call success callback after showing the checkmark for a moment
      setTimeout(() => {
        onSuccess({
          razorpay_payment_id: 'pay_' + Math.random().toString(36).substr(2, 9),
          razorpay_order_id: 'order_' + Math.random().toString(36).substr(2, 9),
          razorpay_signature: 'sig_' + Math.random().toString(36).substr(2, 9)
        });
      }, 1500);
    }, 2000);
  };

  if (success) {
    return (
      <div style={overlayStyle}>
        <div style={successModalStyle}>
          <CheckCircle size={64} color="#10b981" style={{ marginBottom: '1rem' }} />
          <h2 style={{ color: '#10b981', marginBottom: '0.5rem' }}>Payment Successful</h2>
          <p style={{ color: '#6b7280' }}>Redirecting you to the confirmation page...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={overlayStyle}>
      <div className="fade-in" style={modalStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '32px', height: '32px', background: '#3399cc', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>₹</div>
              <span style={{ fontWeight: '600', color: 'white', letterSpacing: '0.5px' }}>Razorpay Secure</span>
            </div>
            <button onClick={onClose} style={closeBtnStyle}><X size={20} color="white" /></button>
          </div>
          <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>{email || 'guest@example.com'}</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.5rem' }}>
            {currency}{amount.toLocaleString()}
          </div>
        </div>

        {/* Body */}
        <div style={{ display: 'flex', height: '350px' }}>
          {/* Sidebar */}
          <div style={sidebarStyle}>
            <div style={getSidebarItemStyle(method === 'card')} onClick={() => setMethod('card')}>
              <CreditCard size={18} /> Card
            </div>
            <div style={getSidebarItemStyle(method === 'upi')} onClick={() => setMethod('upi')}>
              <Smartphone size={18} /> UPI / QR
            </div>
            <div style={getSidebarItemStyle(method === 'netbanking')} onClick={() => setMethod('netbanking')}>
              <Building size={18} /> Netbanking
            </div>
          </div>

          {/* Content */}
          <div style={contentStyle}>
            {method === 'card' && (
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Enter Card Details</h3>
                <input type="text" placeholder="Card Number" style={inputStyle} defaultValue="4111 1111 1111 1111" />
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <input type="text" placeholder="Expiry (MM/YY)" style={inputStyle} defaultValue="12/26" />
                  <input type="password" placeholder="CVV" style={inputStyle} defaultValue="123" />
                </div>
                <input type="text" placeholder="Cardholder Name" style={{...inputStyle, marginTop: '1rem'}} defaultValue="John Doe" />
              </div>
            )}
            
            {method === 'upi' && (
              <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
                <div style={{ width: '120px', height: '120px', background: '#f3f4f6', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                  <Smartphone size={48} color="#9ca3af" />
                </div>
                <p style={{ fontSize: '0.9rem', color: '#4b5563', marginBottom: '1rem' }}>Scan QR with any UPI app</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                  <div style={{ height: '1px', background: '#e5e7eb', flex: 1 }}></div>
                  <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>OR</span>
                  <div style={{ height: '1px', background: '#e5e7eb', flex: 1 }}></div>
                </div>
                <input type="text" placeholder="Enter UPI ID (e.g. name@bank)" style={{...inputStyle, marginTop: '1rem'}} defaultValue="johndoe@okicici" />
              </div>
            )}

            {method === 'netbanking' && (
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Select Bank</h3>
                <select style={inputStyle}>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>State Bank of India</option>
                  <option>Axis Bank</option>
                  <option>Kotak Mahindra Bank</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={footerStyle}>
          <button 
            style={{...payBtnStyle, opacity: loading ? 0.7 : 1}} 
            onClick={handlePay}
            disabled={loading}
          >
            {loading ? 'Processing...' : `Pay ${currency}${amount.toLocaleString()}`}
          </button>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.25rem', marginTop: '1rem', fontSize: '0.75rem', color: '#9ca3af' }}>
            <Lock size={12} /> Secured by Razorpay Mock
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
  backdropFilter: 'blur(4px)'
};

const modalStyle = {
  width: '100%',
  maxWidth: '650px',
  backgroundColor: 'white',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
};

const successModalStyle = {
  ...modalStyle,
  maxWidth: '400px',
  padding: '3rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const headerStyle = {
  background: 'linear-gradient(to right, #111827, #1f2937)',
  color: 'white',
  padding: '1.5rem 2rem',
};

const closeBtnStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const sidebarStyle = {
  width: '35%',
  background: '#f9fafb',
  borderRight: '1px solid #e5e7eb',
  padding: '1rem 0'
};

const getSidebarItemStyle = (isActive) => ({
  padding: '1rem 1.5rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  fontSize: '0.9rem',
  color: isActive ? '#3399cc' : '#4b5563',
  background: isActive ? 'white' : 'transparent',
  borderLeft: `4px solid ${isActive ? '#3399cc' : 'transparent'}`,
  fontWeight: isActive ? '600' : '400',
});

const contentStyle = {
  width: '65%',
  padding: '2rem',
  background: 'white',
  overflowY: 'auto'
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid #d1d5db',
  borderRadius: '4px',
  fontSize: '0.9rem',
  color: '#111827',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit'
};

const footerStyle = {
  padding: '1.5rem 2rem',
  background: '#f9fafb',
  borderTop: '1px solid #e5e7eb'
};

const payBtnStyle = {
  width: '100%',
  padding: '1rem',
  background: '#3399cc',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.2s'
};

export default RazorpayMock;
