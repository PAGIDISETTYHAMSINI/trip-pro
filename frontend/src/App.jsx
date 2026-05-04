import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Plane, LogOut, User } from 'lucide-react';
import { AuthContext } from './context/AuthContext';
import { Home } from './pages/Home';
import { Login, Signup } from './pages/Auth';
import { Checkout, Success } from './pages/Checkout';
import { Dashboard } from './pages/Dashboard';
import { TripSchedule } from './pages/TripSchedule';
import './index.css';

function App() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <header className="container" style={{ padding: '1.5rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <Plane size={28} />
          WanderBudget
        </Link>
        
        <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {user ? (
            <>
              <Link to="/dashboard" style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 600 }}>My Trips</Link>
              <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem' }}>
                <User size={18} /> {user.name}
              </span>
              <button onClick={handleLogout} className="btn" style={{ padding: '0.5rem 1rem', background: 'transparent', color: 'var(--text-main)', border: '1px solid var(--border)' }}>
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>Login</Link>
              <Link to="/signup" className="btn" style={{ padding: '0.5rem 1.5rem' }}>Sign Up</Link>
            </>
          )}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/schedule/:id" element={<TripSchedule />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
