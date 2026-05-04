import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MapPin, Wallet, Calendar, Plane, Building, Utensils, Activity, Search, Train, Car, Info, Users, Clock } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

export const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({
    destinationId: '',
    budget: '',
    days: '3'
  });
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch available destinations
    axios.get('http://localhost:5000/api/destinations')
      .then(res => setDestinations(res.data))
      .catch(err => console.error("Error fetching destinations", err));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.destinationId || !formData.budget || !formData.days) {
      setError("Please fill all fields");
      return;
    }
    
    setLoading(true);
    setError('');
    setSearched(true);
    
    try {
      const response = await axios.get('http://localhost:5000/api/itineraries', {
        params: formData
      });
      setItineraries(response.data);
    } catch (err) {
      setError("Failed to fetch itineraries. Please ensure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleBook = (itinerary) => {
    if (!user) {
      navigate('/login');
      return;
    }
    navigate('/checkout', { 
      state: { 
        itinerary, 
        destination: destinations.find(d => d.id === formData.destinationId),
        days: formData.days
      } 
    });
  };

  const selectedDestinationInfo = destinations.find(d => d.id === formData.destinationId);

  return (
    <>
      <section className="hero container">
        <h1>Plan Your Dream Trip <br/>Within Your Budget</h1>
        <p>Tell us where you want to go and how much you want to spend, and we'll craft the perfect itinerary options for you.</p>

        <div className="planner-form-container glass">
          <form className="planner-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label><MapPin size={16} style={{display:'inline', marginRight:'4px'}}/> Destination</label>
              <select 
                className="input-field" 
                name="destinationId" 
                value={formData.destinationId} 
                onChange={handleChange}
                required
              >
                <option value="">Select a place...</option>
                {destinations.map(d => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label><Wallet size={16} style={{display:'inline', marginRight:'4px'}}/> Budget ({selectedDestinationInfo?.currencySymbol || '$'})</label>
              <input 
                type="number" 
                className="input-field" 
                name="budget" 
                placeholder={selectedDestinationInfo?.currencySymbol === '₹' ? "e.g. 50000" : "e.g. 1500"} 
                value={formData.budget} 
                onChange={handleChange}
                min="10"
                required
              />
            </div>

            <div className="form-group">
              <label><Calendar size={16} style={{display:'inline', marginRight:'4px'}}/> Duration (Days)</label>
              <input 
                type="number" 
                className="input-field" 
                name="days" 
                value={formData.days} 
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <button type="submit" className="btn">
              <Search size={20} /> Let's Go
            </button>
          </form>
          {error && <div className="error-message">{error}</div>}
        </div>

        {selectedDestinationInfo && (
          <div className="destination-insights glass" style={{ marginTop: '2rem', padding: '1.5rem', display: 'flex', gap: '2rem', justifyContent: 'center', background: 'rgba(255,255,255,0.8)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Info size={20} color="var(--primary)" />
              <div>
                <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Best Months to Visit</strong>
                <span>{selectedDestinationInfo.bestMonths || 'Year-round'}</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={20} color="var(--primary)" />
              <div>
                <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Great For</strong>
                <span>{selectedDestinationInfo.suggestedAgeGroups || 'All Age Groups'}</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {searched && (
        <section className="results-section container">
          <div className="results-header">
            {loading ? (
              <div className="loading">
                <div className="spinner"></div>
                <h3>Finding the best options for you...</h3>
              </div>
            ) : itineraries.length > 0 ? (
              <>
                <h2>Curated Options for {selectedDestinationInfo?.name}</h2>
                <p className="text-muted">We found {itineraries.length} ways to make your trip happen under {selectedDestinationInfo?.currencySymbol}{formData.budget}.</p>
              </>
            ) : (
              <>
                <h2>No options found</h2>
                <p className="text-muted">Try increasing your budget or reducing the number of days.</p>
              </>
            )}
          </div>

          {!loading && itineraries.length > 0 && (
            <div className="results-grid">
              {itineraries.map((itinerary, index) => (
                <div key={index} className="itinerary-card glass">
                  <div className="card-header">
                    <h3>Option {index + 1}</h3>
                    <div className="total-cost">{itinerary.currencySymbol}{itinerary.totalCost.toLocaleString()}</div>
                  </div>

                  <div className="cost-breakdown">
                    <div className="breakdown-item">
                      <div className="item-info">
                        <div className="item-icon">
                          {itinerary.transport.method === 'Train' ? <Train size={20} /> : 
                           itinerary.transport.method === 'Car' ? <Car size={20} /> : 
                           <Plane size={20} />}
                        </div>
                        <div>
                          <strong>{itinerary.transport.method}</strong>
                          <div style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>{itinerary.transport.type}</div>
                        </div>
                      </div>
                      <div style={{fontWeight: 600}}>{itinerary.currencySymbol}{itinerary.breakdown.transport.toLocaleString()}</div>
                    </div>

                    <div className="breakdown-item">
                      <div className="item-info">
                        <div className="item-icon"><Building size={20} /></div>
                        <div>
                          <strong>Hotel ({formData.days} nights)</strong>
                          <div style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>{itinerary.hotel.type}</div>
                        </div>
                      </div>
                      <div style={{fontWeight: 600}}>{itinerary.currencySymbol}{itinerary.breakdown.hotel.toLocaleString()}</div>
                    </div>

                    <div className="breakdown-item">
                      <div className="item-info">
                        <div className="item-icon"><Utensils size={20} /></div>
                        <div>
                          <strong>Food ({formData.days} days)</strong>
                          <div style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>{itinerary.food.type}</div>
                        </div>
                      </div>
                      <div style={{fontWeight: 600}}>{itinerary.currencySymbol}{itinerary.breakdown.food.toLocaleString()}</div>
                    </div>

                    {itinerary.activities.length > 0 && (
                      <div className="breakdown-item" style={{borderBottom: 'none'}}>
                        <div className="item-info">
                          <div className="item-icon"><Activity size={20} /></div>
                          <div>
                            <strong>Activities</strong>
                            <div style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>{itinerary.activities.length} included</div>
                          </div>
                        </div>
                        <div style={{fontWeight: 600}}>{itinerary.currencySymbol}{itinerary.breakdown.activities.toLocaleString()}</div>
                      </div>
                    )}
                  </div>

                  {itinerary.activities.length > 0 && (
                    <div className="activities-list" style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Clock size={16} color="var(--primary)" /> Smart Activity Schedule
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {itinerary.activities.map((act, i) => (
                          <div key={i} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.5)', borderRadius: '8px', borderLeft: '3px solid var(--primary)' }}>
                            <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>{act.name}</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                              <span>{act.suggestedTime || 'Flexible Time'}</span>
                              <span>{act.proximity || 'Near City Center'}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <button 
                    className="btn" 
                    style={{ width: '100%', marginTop: 'auto' }}
                    onClick={() => handleBook(itinerary)}
                  >
                    Book This Trip
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
};
