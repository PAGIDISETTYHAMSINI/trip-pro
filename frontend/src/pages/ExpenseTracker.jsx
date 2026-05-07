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
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <button onClick={() => navigate('/dashboard')} className="btn border bg-white px-4 mb-4 d-inline-flex align-items-center gap-2 small fw-bold">
          <ArrowLeft size={16}/> Dashboard
        </button>

        <div className="row g-4">
          <div className="col-lg-8">
            <h1 className="fw-black display-6 mb-4 d-flex align-items-center gap-2">
              <Wallet className="text-primary"/> Live Tracker
            </h1>

            <div className="card border-0 shadow-sm p-4 p-md-5 mb-4">
              <h3 className="fw-black mb-4 fs-4">Add New Expense</h3>
              <form onSubmit={addExpense} className="row g-3">
                <div className="col-md-6">
                  <input 
                    className="form-control" 
                    placeholder="Description (e.g. Scuba Diving)" 
                    value={newExpense.description}
                    onChange={e => setNewExpense({...newExpense, description: e.target.value})}
                    required
                  />
                </div>
                <div className="col-6 col-md-3">
                  <input 
                    className="form-control" 
                    type="number" 
                    placeholder="Amount" 
                    value={newExpense.amount}
                    onChange={e => setNewExpense({...newExpense, amount: e.target.value})}
                    required
                  />
                </div>
                <div className="col-6 col-md-3">
                  <select 
                    className="form-select" 
                    value={newExpense.category}
                    onChange={e => setNewExpense({...newExpense, category: e.target.value})}
                  >
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn-startup w-100 justify-content-center py-3"><Plus size={16}/> Add Expense</button>
                </div>
              </form>
            </div>

            <div className="card border-0 shadow-sm p-4 p-md-5">
              <h3 className="fw-black mb-4 fs-4">History</h3>
              {expenses.length === 0 ? (
                <div className="text-center py-5">
                  <p className="text-muted m-0">No expenses recorded yet.</p>
                </div>
              ) : (
                <div className="d-flex flex-column gap-2">
                  {expenses.map(e => (
                    <div key={e.id} className="d-flex justify-content-between align-items-center p-3 border-bottom">
                      <div>
                        <div className="fw-black">{e.description}</div>
                        <div className="small text-muted">{e.date} • {e.category}</div>
                      </div>
                      <div className="d-flex align-items-center gap-4">
                        <div className="fw-black text-primary fs-5">₹{parseFloat(e.amount).toLocaleString()}</div>
                        <button onClick={() => removeExpense(e.id)} className="btn text-danger p-0 border-0"><Trash2 size={18}/></button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="col-lg-4">
            <div className={`card border-0 shadow-lg p-4 mb-4 ${remaining < 0 ? 'border-danger border-2' : 'border-primary'}`}>
              <h3 className="fw-black mb-4 fs-5">Budget Status</h3>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2 small fw-bold">
                  <span className="text-muted">Consumed</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div className={`progress-bar ${remaining < 0 ? 'bg-danger' : 'bg-primary'}`} style={{ width: `${Math.min(progress, 100)}%` }}></div>
                </div>
              </div>

              <div className="d-flex flex-column gap-2">
                <div className="d-flex justify-content-between small">
                  <span className="text-muted fw-bold">Total Budget:</span>
                  <span className="fw-black">₹{totalBudget.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between small">
                  <span className="text-muted fw-bold">Total Spent:</span>
                  <span className="fw-black">₹{totalSpent.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between py-3 border-top mt-3">
                  <span className="fw-black">Remaining:</span>
                  <span className={`fw-black fs-4 ${remaining < 0 ? 'text-danger' : 'text-success'}`}>
                    ₹{remaining.toLocaleString()}
                  </span>
                </div>
              </div>

              {remaining < (totalBudget * 0.1) && remaining >= 0 && (
                <div className="alert alert-warning d-flex gap-2 mt-3 p-2 small border-0 bg-warning bg-opacity-10 text-warning-dark">
                  <AlertCircle size={18} className="flex-shrink-0"/>
                  <span><strong>Warning:</strong> Low budget! Travel wisely.</span>
                </div>
              )}

              {remaining < 0 && (
                <div className="alert alert-danger d-flex gap-2 mt-3 p-2 small border-0 bg-danger bg-opacity-10 text-danger">
                  <AlertCircle size={18} className="flex-shrink-0"/>
                  <span><strong>Overspent!</strong> Check your buffer.</span>
                </div>
              )}
            </div>

            <div className="card border-0 shadow-sm p-4 text-center">
              <TrendingDown size={32} className="text-primary mx-auto mb-3"/>
              <p className="small text-muted m-0 lh-base">
                <strong className="text-main">AI Recommendation:</strong><br/>
                {remaining > 0 ? "You're doing great! Consider booking a premium activity." : "Choose street food to save up on your next meal!"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
