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
    <div className="bg-light min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-lg p-4 p-md-5">
              <h2 className="fw-black text-center mb-4">Welcome Back</h2>
              {error && <div className="alert alert-danger py-2 small mb-4">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label small fw-bold d-flex align-items-center gap-2">
                    <Mail size={14} className="text-muted"/> Email Address
                  </label>
                  <input 
                    type="email" 
                    className="form-control py-2" 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label small fw-bold d-flex align-items-center gap-2">
                    <Lock size={14} className="text-muted"/> Password
                  </label>
                  <input 
                    type="password" 
                    className="form-control py-2" 
                    onChange={e => setFormData({...formData, password: e.target.value})} 
                    required 
                  />
                </div>
                <button type="submit" className="btn-startup w-100 py-3 justify-content-center fs-6">Login</button>
              </form>
              <p className="text-center mt-4 small text-muted">
                Don't have an account? <Link to="/signup" className="text-primary fw-bold">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
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
    <div className="bg-light min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-lg p-4 p-md-5">
              <h2 className="fw-black text-center mb-4">Create Account</h2>
              {error && <div className="alert alert-danger py-2 small mb-4">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label small fw-bold d-flex align-items-center gap-2">
                    <UserIcon size={14} className="text-muted"/> Full Name
                  </label>
                  <input 
                    type="text" 
                    className="form-control py-2" 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-bold d-flex align-items-center gap-2">
                    <Mail size={14} className="text-muted"/> Email Address
                  </label>
                  <input 
                    type="email" 
                    className="form-control py-2" 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label small fw-bold d-flex align-items-center gap-2">
                    <Lock size={14} className="text-muted"/> Create Password
                  </label>
                  <input 
                    type="password" 
                    className="form-control py-2" 
                    onChange={e => setFormData({...formData, password: e.target.value})} 
                    required 
                  />
                </div>
                <button type="submit" className="btn-startup w-100 py-3 justify-content-center fs-6">Sign Up</button>
              </form>
              <p className="text-center mt-4 small text-muted">
                Already have an account? <Link to="/login" className="text-primary fw-bold">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
