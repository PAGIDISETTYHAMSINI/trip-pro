import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Database, Users, CreditCard, MapPin, Calendar, Trash2, ShieldCheck, RefreshCw, ArrowUpRight, Search, Filter, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const API = 'https://trip-pro.onrender.com';

export const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { token } = useContext(AuthContext);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API}/api/bookings/admin/all`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(res.data || []);
    } catch (err) {
      console.error("Admin fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchAllData();
  }, [token]);

  const filteredBookings = bookings.filter(b => 
    b.destinationName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.User?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.User?.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: 'Total Revenue', value: `₹${bookings.reduce((acc, b) => acc + (b.totalCost || 0), 0).toLocaleString()}`, icon: <CreditCard size={20} />, color: 'var(--success)' },
    { label: 'Total Bookings', value: bookings.length, icon: <RefreshCw size={20} />, color: 'var(--primary)' },
    { label: 'Active Users', value: new Set(bookings.map(b => b.userId)).size, icon: <Users size={20} />, color: 'var(--secondary)' },
    { label: 'Destinations', value: new Set(bookings.map(b => b.destinationName)).size, icon: <MapPin size={20} />, color: 'var(--warning)' },
  ];

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', flexDirection: 'column', gap: '1rem' }}>
      <div className="spinner"></div>
      <p style={{ color: 'var(--slate-500)', fontWeight: 600 }}>Loading master database...</p>
    </div>
  );

  return (
    <div style={{ background: 'var(--slate-50)', minHeight: '100vh', padding: '2rem 0' }}>
      <div className="container">
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
          <div>
            <div className="badge badge-primary mb-2">MASTER CONTROL</div>
            <h1 style={{ fontWeight: 900, fontSize: '2.5rem', marginBottom: '0.5rem' }}>Admin <span className="text-gradient">Dashboard</span></h1>
            <p style={{ color: 'var(--slate-500)', fontSize: '1.1rem' }}>System-wide visibility and transaction history.</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
             <button onClick={fetchAllData} className="btn" style={{ padding: '0.75rem' }}><RefreshCw size={18} /></button>
             <a href="https://console.neon.tech" target="_blank" rel="noreferrer" className="btn-startup" style={{ background: 'var(--slate-900)', border: 'none' }}>
                <ShieldCheck size={18} /> Neon Console
             </a>
          </div>
        </div>

        {/* STATS ROW */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {stats.map((s, i) => (
            <div key={i} className="card" style={{ padding: '1.5rem', border: 'none', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ background: s.color + '20', color: s.color, padding: '0.75rem', borderRadius: 'var(--radius-lg)' }}>
                  {s.icon}
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  +12% <ArrowUpRight size={12} />
                </span>
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-400)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{s.label}</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--slate-900)' }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* TOOLS BAR */}
        <div className="glass-card" style={{ padding: '1rem', marginBottom: '1.5rem', border: 'none', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0 0.5rem' }}>
            <Search size={18} style={{ color: 'var(--slate-400)' }} />
            <input 
              type="text" 
              placeholder="Search by user name, email, or destination..." 
              style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', fontSize: '0.95rem', color: 'var(--slate-900)' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div style={{ width: '1px', height: '24px', background: 'var(--slate-200)' }}></div>
          <button className="btn" style={{ border: 'none', background: 'transparent' }}><Filter size={18} /> Filter</button>
          <button className="btn" style={{ border: 'none', background: 'transparent' }}><Download size={18} /> Export</button>
        </div>

        {/* DATA TABLE */}
        <div className="card" style={{ border: 'none', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--slate-50)', borderBottom: '1px solid var(--slate-200)' }}>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>User / Account</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Trip Destination</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Transaction Info</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Status</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--slate-400)', textTransform: 'uppercase' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((b, i) => (
                  <tr key={b.id} style={{ borderBottom: i === filteredBookings.length - 1 ? 'none' : '1px solid var(--slate-100)', transition: 'var(--transition)' }}>
                    <td style={{ padding: '1.25rem 1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                         <div style={{ width: '36px', height: '36px', background: 'var(--primary-soft)', color: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>
                            {b.User?.name?.charAt(0) || 'G'}
                         </div>
                         <div>
                            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{b.User?.name || 'Guest User'}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--slate-400)' }}>{b.User?.email || 'guest@example.com'}</div>
                         </div>
                      </div>
                    </td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--slate-700)' }}>
                          <MapPin size={14} className="text-primary" /> {b.destinationName}
                       </div>
                       <div style={{ fontSize: '0.8rem', color: 'var(--slate-400)', marginTop: '0.2rem' }}>{b.days} Days · {b.itineraryDetails?.travelers?.total || 1} Travelers</div>
                    </td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>
                       <div style={{ fontWeight: 900, color: 'var(--primary)', fontSize: '1.1rem' }}>
                          {b.itineraryDetails?.currencySymbol || '₹'}{b.totalCost?.toLocaleString()}
                       </div>
                       <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', fontFamily: 'monospace', marginTop: '0.2rem' }}>ID: {b.paymentId?.substring(0, 12)}...</div>
                    </td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>
                       <span style={{ 
                         padding: '0.4rem 0.75rem', 
                         borderRadius: 'var(--radius-full)', 
                         fontSize: '0.7rem', 
                         fontWeight: 800, 
                         background: b.status === 'PAID' ? 'var(--success)15' : 'var(--danger)15',
                         color: b.status === 'PAID' ? 'var(--success)' : 'var(--danger)',
                         textTransform: 'uppercase'
                       }}>
                         {b.status}
                       </span>
                    </td>
                    <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.85rem', color: 'var(--slate-500)', fontWeight: 600 }}>
                       {new Date(b.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                  </tr>
                ))}
                {filteredBookings.length === 0 && (
                  <tr>
                    <td colSpan="5" style={{ padding: '4rem', textAlign: 'center', color: 'var(--slate-400)' }}>
                       No bookings found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', color: 'var(--slate-400)', fontSize: '0.85rem' }}>
           <ShieldCheck size={16} /> Secure PostgreSQL Engine: <span style={{ fontWeight: 800, color: 'var(--success)' }}>NEON DB ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
