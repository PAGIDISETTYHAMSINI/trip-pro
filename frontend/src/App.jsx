import { Suspense, lazy, useState, useContext } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Plane, LogOut, User, LayoutDashboard, Menu, X, Globe, Sparkles, ShieldCheck } from 'lucide-react';
import { AuthContext } from './context/AuthContext';
import './index.css';
import { AIAssistant } from './components/AIAssistant';

/* Lazy load pages */
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Login = lazy(() => import('./pages/Auth').then(m => ({ default: m.Login })));
const Signup = lazy(() => import('./pages/Auth').then(m => ({ default: m.Signup })));
const Checkout = lazy(() => import('./pages/Checkout').then(m => ({ default: m.Checkout })));
const Success = lazy(() => import('./pages/Checkout').then(m => ({ default: m.Success })));
const Dashboard = lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })));
const TripSchedule = lazy(() => import('./pages/TripSchedule').then(m => ({ default: m.TripSchedule })));
const TripBuilder = lazy(() => import('./pages/TripBuilder').then(m => ({ default: m.TripBuilder })));
const ExpenseTracker = lazy(() => import('./pages/ExpenseTracker').then(m => ({ default: m.ExpenseTracker })));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const ExploreIndia = lazy(() => import('./pages/ExploreIndia').then(m => ({ default: m.ExploreIndia })));

import { Component } from 'react';
class ErrorBoundary extends Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(e) { return { hasError: true, error: e }; }
  render() {
    if (this.state.hasError) return (
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <h2 style={{ color: '#ef4444', marginBottom: '1rem' }}>Something went wrong</h2>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>{this.state.error?.message}</p>
        <button onClick={() => { this.setState({ hasError: false }); window.location.href = '/'; }}
          className="btn-startup">Go Home</button>
      </div>
    );
    return this.props.children;
  }
}

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', flexDirection: 'column', gap: '1rem' }}>
    <div className="spinner"></div>
    <p style={{ color: '#64748b', fontWeight: 600 }}>Loading...</p>
  </div>
);

function App() {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/'); setIsMenuOpen(false); };

  return (
    <div className="page-wrapper">
      {/* HEADER */}
      <header className="site-header">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
            <Plane size={26} />
            <span>Trip<span className="text-primary">Pro</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-only" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/explore-india" className="nav-link">Explore India</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <LayoutDashboard size={16} /> My Trips
                </Link>
                <button onClick={handleLogout} className="btn" style={{ fontSize: '0.85rem' }}>
                  <LogOut size={14} /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="btn-startup" style={{ fontSize: '0.85rem' }}>Sign Up</Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="btn d-md-none" 
            style={{ border: 'none', background: 'transparent', padding: '0.5rem', display: 'flex' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fade-in" style={{ position: 'fixed', inset: 0, top: '65px', background: '#fff', zIndex: 99, padding: '2rem' }}>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Link to="/explore-india" className="nav-link" style={{ fontSize: '1.5rem', fontWeight: 800 }} onClick={() => setIsMenuOpen(false)}>
                 <Globe size={20} className="me-2" /> Explore India
              </Link>
              {user ? (
                <>
                  <Link to="/dashboard" className="nav-link" style={{ fontSize: '1.5rem', fontWeight: 800 }} onClick={() => setIsMenuOpen(false)}>
                     <LayoutDashboard size={20} className="me-2" /> My Dashboard
                  </Link>
                  <Link to="/build-trip" className="nav-link" style={{ fontSize: '1.5rem', fontWeight: 800 }} onClick={() => setIsMenuOpen(false)}>
                     <Sparkles size={20} className="me-2" /> AI Planner
                  </Link>
                  <hr style={{ border: 'none', borderTop: '1px solid var(--slate-100)' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                     <div style={{ width: '40px', height: '40px', background: 'var(--primary-soft)', color: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{user.name.charAt(0)}</div>
                     <div>
                        <div style={{ fontWeight: 800 }}>{user.name}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>Elite Member</div>
                     </div>
                  </div>
                  <button onClick={handleLogout} className="btn-startup" style={{ width: '100%', justifyContent: 'center' }}>
                     <LogOut size={18} /> Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }} onClick={() => setIsMenuOpen(false)}>Login</Link>
                  <Link to="/signup" className="btn-startup" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }} onClick={() => setIsMenuOpen(false)}>Create Account</Link>
                </>
              )}
           </div>
        </div>
      )}

      {/* MAIN */}
      <main style={{ flex: 1 }}>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/build-trip" element={<TripBuilder />} />
              <Route path="/dashboard/schedule/:id" element={<TripSchedule />} />
              <Route path="/dashboard/expenses" element={<ExpenseTracker />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/explore-india" element={<ExploreIndia />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      
      <AIAssistant />
    </div>
  );
}

export default App;
