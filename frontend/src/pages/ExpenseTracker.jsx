import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Wallet, Plus, Trash2, AlertCircle, PieChart, TrendingDown, ArrowLeft } from 'lucide-react';

export const ExpenseTracker = () => {
  const { token, user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [expenses, setExpenses] = useState([]);
  const [totalBudget, setTotalBudget] = useState(50000); // Default or from booking
  const [newExpense, setNewExpense] = useState({ description: '', amount: '', category: 'Food' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we'd fetch these from the backend
    const saved = localStorage.getItem(`expenses_${user?.id}`);
    if (saved) setExpenses(JSON.parse(saved));
    setLoading(false);
  }, [user]);

  const addExpense = (e) => {
    e.preventDefault();
    if (!newExpense.description || !newExpense.amount) return;
    
    const updated = [...expenses, { ...newExpense, id: Date.now(), date: new Date().toLocaleDateString() }];
    setExpenses(updated);
    localStorage.setItem(`expenses_${user?.id}`, JSON.stringify(updated));
    setNewExpense({ description: '', amount: '', category: 'Food' });
  };

  const removeExpense = (id) => {
    const updated = expenses.filter(e => e.id !== id);
    setExpenses(updated);
    localStorage.setItem(`expenses_${user?.id}`, JSON.stringify(updated));
  };

  const totalSpent = expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);
  const remaining = totalBudget - totalSpent;
  const progress = (totalSpent / totalBudget) * 100;

  const categories = ['Food', 'Transport', 'Activities', 'Shopping', 'Emergency', 'Other'];

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <button onClick={() => navigate('/dashboard')} className="btn" style={{ background: 'transparent', color: 'var(--primary)', padding: 0, marginBottom: '2rem' }}>
        <ArrowLeft size={16}/> Back to Dashboard
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
        <div>
          <h1 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Wallet color="var(--primary)"/> Live Expense Tracker
          </h1>

          <div className="glass" style={{ padding: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Add New Expense</h3>
            <form onSubmit={addExpense} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <input 
                className="input-field" 
                style={{ flex: 2 }}
                placeholder="Description (e.g. Scuba Diving)" 
                value={newExpense.description}
                onChange={e => setNewExpense({...newExpense, description: e.target.value})}
              />
              <input 
                className="input-field" 
                style={{ flex: 1 }}
                type="number" 
                placeholder="Amount" 
                value={newExpense.amount}
                onChange={e => setNewExpense({...newExpense, amount: e.target.value})}
              />
              <select 
                className="input-field" 
                style={{ flex: 1 }}
                value={newExpense.category}
                onChange={e => setNewExpense({...newExpense, category: e.target.value})}
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <button type="submit" className="btn"><Plus size={16}/> Add</button>
            </form>
          </div>

          <div className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>History</h3>
            {expenses.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>No expenses recorded yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {expenses.map(e => (
                  <div key={e.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontWeight: 'bold' }}>{e.description}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{e.date} • {e.category}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>₹{parseFloat(e.amount).toLocaleString()}</div>
                      <button onClick={() => removeExpense(e.id)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={16}/></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Summary */}
        <div>
          <div className="glass" style={{ padding: '2rem', border: `2px solid ${remaining < 0 ? '#ef4444' : 'var(--primary)'}`, position: 'sticky', top: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Budget Status</h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span>Budget Consumed</span>
                <span style={{ fontWeight: 'bold' }}>{Math.round(progress)}%</span>
              </div>
              <div style={{ width: '100%', height: '10px', background: 'var(--border)', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(progress, 100)}%`, height: '100%', background: remaining < 0 ? '#ef4444' : 'var(--primary)', transition: 'width 0.5s' }}></div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Total Budget:</span>
                <span style={{ fontWeight: 'bold' }}>₹{totalBudget.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Total Spent:</span>
                <span style={{ fontWeight: 'bold' }}>₹{totalSpent.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderTop: '1px solid var(--border)', marginTop: '0.5rem' }}>
                <span style={{ fontWeight: 'bold' }}>Remaining:</span>
                <span style={{ fontWeight: 'bold', color: remaining < 0 ? '#ef4444' : '#10b981', fontSize: '1.25rem' }}>
                  ₹{remaining.toLocaleString()}
                </span>
              </div>
            </div>

            {remaining < (totalBudget * 0.1) && remaining >= 0 && (
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#fffbeb', borderRadius: '8px', border: '1px solid #f59e0b', display: 'flex', gap: '0.5rem', color: '#92400e', fontSize: '0.85rem' }}>
                <AlertCircle size={18} style={{ flexShrink: 0 }}/>
                <span><strong>Warning:</strong> You have used over 90% of your budget. Travel wisely!</span>
              </div>
            )}

            {remaining < 0 && (
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#fef2f2', borderRadius: '8px', border: '1px solid #ef4444', display: 'flex', gap: '0.5rem', color: '#991b1b', fontSize: '0.85rem' }}>
                <AlertCircle size={18} style={{ flexShrink: 0 }}/>
                <span><strong>Budget Exceeded!</strong> You are overspending. Check your "Emergency Buffer".</span>
              </div>
            )}
          </div>

          <div className="glass" style={{ marginTop: '1.5rem', padding: '1.5rem', textAlign: 'center' }}>
            <TrendingDown size={32} color="var(--primary)" style={{ marginBottom: '1rem' }}/>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <strong>AI Recommendation:</strong><br/>
              {remaining > 0 ? "You're doing great! Consider booking a premium activity with your savings." : "Try choosing 'Street Food' for your next meal to save up!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
