import { Suspense, lazy } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Plane, LogOut, User, LayoutDashboard, Menu } from 'lucide-react';
import { AuthContext } from './context/AuthContext';
import './index.css';

/* Lazy load pages to prevent one broken page crashing the whole app */
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

/* Page-level error boundary */
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
          style={{ background: '#2563eb', color: '#fff', padding: '0.75rem 2rem', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 700 }}>
          Go Home
        </button>
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
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <div className="page-wrapper">
      {/* HEADER */}
      <header className="site-header">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="logo">
            <Plane size={26} style={{ color: 'var(--primary)' }} />
            <span style={{ color: 'var(--slate-900)' }}>Trip<span style={{ color: 'var(--primary)' }}>Pro</span></span>
          </Link>

          <nav style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {user ? (
              <>
                <Link to="/dashboard" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <LayoutDashboard size={16} /> My Trips
                </Link>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--slate-600)', fontWeight: 600, fontSize: '0.9rem' }}>
                  <User size={16} /> {user.name}
                </span>
                <button onClick={handleLogout} className="btn" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
                  <LogOut size={14} /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="btn-startup" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>Sign Up</Link>
              </>
            )}
          </nav>
        </div>
      </header>

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
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
