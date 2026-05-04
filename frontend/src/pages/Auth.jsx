import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Mail, Lock, User as UserIcon } from 'lucide-react';

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://trip-pro.onrender.com/api/auth/login', formData);
      login(res.data.user, res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="glass" style={{ padding: '2rem', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Welcome Back</h2>
        {error && <div className="error-message" style={{ marginBottom: '1rem' }}>{error}</div>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="form-group">
            <label><Mail size={16} style={{ display: 'inline', marginRight: '4px' }}/> Email</label>
            <input type="email" className="input-field" onChange={e => setFormData({...formData, email: e.target.value})} required />
          </div>
          <div className="form-group">
            <label><Lock size={16} style={{ display: 'inline', marginRight: '4px' }}/> Password</label>
            <input type="password" className="input-field" onChange={e => setFormData({...formData, password: e.target.value})} required />
          </div>
          <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }}>Login</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          Don't have an account? <Link to="/signup" style={{ color: 'var(--primary)' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://trip-pro.onrender.com/api/auth/register', formData);
      login(res.data.user, res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="glass" style={{ padding: '2rem', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Create Account</h2>
        {error && <div className="error-message" style={{ marginBottom: '1rem' }}>{error}</div>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="form-group">
            <label><UserIcon size={16} style={{ display: 'inline', marginRight: '4px' }}/> Full Name</label>
            <input type="text" className="input-field" onChange={e => setFormData({...formData, name: e.target.value})} required />
          </div>
          <div className="form-group">
            <label><Mail size={16} style={{ display: 'inline', marginRight: '4px' }}/> Email</label>
            <input type="email" className="input-field" onChange={e => setFormData({...formData, email: e.target.value})} required />
          </div>
          <div className="form-group">
            <label><Lock size={16} style={{ display: 'inline', marginRight: '4px' }}/> Password</label>
            <input type="password" className="input-field" onChange={e => setFormData({...formData, password: e.target.value})} required />
          </div>
          <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }}>Sign Up</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--primary)' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};
