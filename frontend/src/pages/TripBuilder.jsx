import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { MapPin, Calendar, Plane, Train, Bus, Car, Building, Coffee, Map, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export const TripBuilder = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [selectedDestinationId, setSelectedDestinationId] = useState('');
  const [days, setDays] = useState(3);
  const [destDetails, setDestDetails] = useState(null);
  
  // Selections
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/destinations')
      .then(res => {
        setDestinations(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  const fetchDestinationDetails = async () => {
    if (!selectedDestinationId) return;
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/destinations/${selectedDestinationId}`);
      setDestDetails(res.data);
      setStep(2);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (step === 1) fetchDestinationDetails();
    else setStep(s => s + 1);
  };

  const handleBack = () => setStep(s => s - 1);

  const toggleActivity = (activity) => {
    if (selectedActivities.find(a => a.name === activity.name)) {
      setSelectedActivities(selectedActivities.filter(a => a.name !== activity.name));
    } else {
      setSelectedActivities([...selectedActivities, activity]);
    }
  };

  const toggleRestaurant = (restaurant) => {
    if (selectedRestaurants.find(r => r.id === restaurant.id)) {
      setSelectedRestaurants(selectedRestaurants.filter(r => r.id !== restaurant.id));
    } else {
      setSelectedRestaurants([...selectedRestaurants, restaurant]);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    if (selectedTransport) total += selectedTransport.cost;
    if (selectedRoom) total += (selectedRoom.cost * days);
    selectedActivities.forEach(a => total += a.cost);
    // Assuming restaurant cost is average per day
    selectedRestaurants.forEach(r => total += (r.averageCost * days));
    return total;
  };

  const proceedToCheckout = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    const totalCost = calculateTotal();
    
    // Map custom selections back into the standard itinerary format for Checkout/Schedule
    const itinerary = {
      id: `custom_${Date.now()}`,
      destinationId: destDetails.id,
      destinationName: destDetails.name,
      totalCost: totalCost,
      currencySymbol: destDetails.name.includes('India') ? '₹' : '$',
      language: destDetails.language,
      culturalEtiquette: destDetails.culturalEtiquette,
      emergencyContacts: destDetails.emergencyContacts,
      inclusions: destDetails.inclusions,
      exclusions: destDetails.exclusions,
      packingList: destDetails.packingList,
      shoppingGuide: destDetails.shoppingGuide,
      knowBeforeYouGo: destDetails.knowBeforeYouGo,
      policies: destDetails.policies,
      cancellationPolicy: destDetails.cancellationPolicy,
      breakdown: {
        transport: selectedTransport?.cost || 0,
        hotel: (selectedRoom?.cost || 0) * days,
        food: selectedRestaurants.reduce((sum, r) => sum + r.averageCost, 0) * days,
        activities: selectedActivities.reduce((sum, a) => sum + a.cost, 0)
      },
      transport: {
        type: selectedTransport?.type || 'Self',
        cost: selectedTransport?.cost || 0,
        agency: selectedTransport?.agency,
        departureTime: selectedTransport?.departureTime,
        name: selectedTransport?.name
      },
      hotel: {
        type: `${selectedHotel?.type || 'Hotel'} - ${selectedRoom?.type || 'Standard'}`,
        costPerNight: selectedRoom?.cost || 0,
        rating: selectedHotel?.rating || 4.0,
        nearbyRestaurants: selectedRestaurants.map(r => r.name)
      },
      food: {
        type: 'Custom Selection',
        costPerDay: selectedRestaurants.reduce((sum, r) => sum + r.averageCost, 0),
        selectedRestaurants: selectedRestaurants
      },
      activities: selectedActivities
    };

    navigate('/checkout', { 
      state: { 
        itinerary, 
        destination: destDetails,
        days: days
      } 
    });
  };

  if (loading && step === 1) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading destinations...</div>;

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center', color: 'var(--primary)' }}>Build Your Custom Trip</h1>
      
      {/* Progress Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '4px', background: 'var(--border)', zIndex: -1, transform: 'translateY(-50%)' }}></div>
        {[1,2,3,4,5,6].map(num => (
          <div key={num} style={{ 
            width: '40px', height: '40px', borderRadius: '50%', 
            background: step >= num ? 'var(--primary)' : 'var(--card-bg)',
            color: step >= num ? 'white' : 'var(--text-muted)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: `2px solid ${step >= num ? 'var(--primary)' : 'var(--border)'}`,
            fontWeight: 'bold'
          }}>
            {num}
          </div>
        ))}
      </div>

      <div className="glass" style={{ padding: '3rem' }}>
        
        {/* STEP 1: DESTINATION & DATES */}
        {step === 1 && (
          <div className="fade-in">
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin/> Where do you want to go?</h2>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label>Destination</label>
              <select className="input-field" value={selectedDestinationId} onChange={(e) => setSelectedDestinationId(e.target.value)}>
                <option value="">Select a place...</option>
                {destinations.map(d => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: '2rem' }}>
              <label>Duration (Days)</label>
              <input type="number" className="input-field" value={days} onChange={(e) => setDays(Number(e.target.value))} min="1" />
            </div>
            <button className="btn" onClick={handleNext} disabled={!selectedDestinationId || days < 1}>
              Next Step <ArrowRight size={16}/>
            </button>
          </div>
        )}

        {/* STEP 2: TRANSPORT */}
        {step === 2 && destDetails && (
          <div className="fade-in">
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Plane/> Choose Your Transport</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '2rem' }}>
              {destDetails.detailedTransport && destDetails.detailedTransport.map(t => (
                <div 
                  key={t.id} 
                  onClick={() => setSelectedTransport(t)}
                  style={{ 
                    padding: '1.5rem', border: `2px solid ${selectedTransport?.id === t.id ? 'var(--primary)' : 'var(--border)'}`, 
                    borderRadius: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: selectedTransport?.id === t.id ? 'rgba(79, 70, 229, 0.05)' : 'transparent'
                  }}
                >
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                      {t.type === 'Flight' ? <Plane size={18}/> : t.type === 'Train' ? <Train size={18}/> : t.type === 'Bus' ? <Bus size={18}/> : <Car size={18}/>}
                      {t.agency} - {t.name}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Departure: {t.departureTime}</p>
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                    {destDetails.name.includes('India') ? '₹' : '$'}{t.cost.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn" style={{ background: '#64748b' }} onClick={handleBack}><ArrowLeft size={16}/> Back</button>
              <button className="btn" onClick={handleNext} disabled={!selectedTransport}>Next Step <ArrowRight size={16}/></button>
            </div>
          </div>
        )}

        {/* STEP 3: HOTEL & ROOM */}
        {step === 3 && destDetails && (
          <div className="fade-in">
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Building/> Select Accommodation</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              {destDetails.hotels && destDetails.hotels.map(h => (
                <div key={h.id} style={{ border: '1px solid var(--border)', padding: '1.5rem', borderRadius: '8px' }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>{h.type} <span style={{fontSize:'0.9rem', color:'#f59e0b'}}>⭐ {h.rating}</span></h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                    {h.roomOptions && h.roomOptions.map((room, idx) => {
                      const isSelected = selectedHotel?.id === h.id && selectedRoom?.type === room.type;
                      return (
                        <div 
                          key={idx}
                          onClick={() => { setSelectedHotel(h); setSelectedRoom(room); }}
                          style={{
                            padding: '1rem', border: `2px solid ${isSelected ? 'var(--primary)' : 'var(--border)'}`,
                            borderRadius: '8px', cursor: 'pointer', textAlign: 'center',
                            background: isSelected ? 'rgba(79, 70, 229, 0.05)' : 'transparent'
                          }}
                        >
                          <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{room.type}</div>
                          <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{destDetails.name.includes('India') ? '₹' : '$'}{room.cost} / night</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn" style={{ background: '#64748b' }} onClick={handleBack}><ArrowLeft size={16}/> Back</button>
              <button className="btn" onClick={handleNext} disabled={!selectedRoom}>Next Step <ArrowRight size={16}/></button>
            </div>
          </div>
        )}

        {/* STEP 4: ACTIVITIES */}
        {step === 4 && destDetails && (
          <div className="fade-in">
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Map/> Select Places to Visit</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {destDetails.activities.map(a => {
                const isSelected = !!selectedActivities.find(act => act.name === a.name);
                return (
                  <div 
                    key={a.name}
                    onClick={() => toggleActivity(a)}
                    style={{
                      padding: '1.5rem', border: `2px solid ${isSelected ? 'var(--primary)' : 'var(--border)'}`,
                      borderRadius: '8px', cursor: 'pointer', position: 'relative',
                      background: isSelected ? 'rgba(79, 70, 229, 0.05)' : 'transparent'
                    }}
                  >
                    {isSelected && <CheckCircle size={20} color="var(--primary)" style={{position:'absolute', top:'10px', right:'10px'}}/>}
                    <h4 style={{ marginBottom: '0.5rem', paddingRight: '20px' }}>{a.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#f59e0b', marginBottom: '0.25rem' }}>⭐ {a.rating}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}><Clock size={12} style={{display:'inline'}}/> {a.openingTime} - {a.closingTime}</p>
                    <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{destDetails.name.includes('India') ? '₹' : '$'}{a.cost}</div>
                  </div>
                )
              })}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn" style={{ background: '#64748b' }} onClick={handleBack}><ArrowLeft size={16}/> Back</button>
              <button className="btn" onClick={handleNext}>Next Step <ArrowRight size={16}/></button>
            </div>
          </div>
        )}

        {/* STEP 5: RESTAURANTS */}
        {step === 5 && destDetails && (
          <div className="fade-in">
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Coffee/> Select Restaurants</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {destDetails.restaurants && destDetails.restaurants.map(r => {
                const isSelected = !!selectedRestaurants.find(rest => rest.id === r.id);
                return (
                  <div 
                    key={r.id}
                    onClick={() => toggleRestaurant(r)}
                    style={{
                      padding: '1.5rem', border: `2px solid ${isSelected ? 'var(--primary)' : 'var(--border)'}`,
                      borderRadius: '8px', cursor: 'pointer', position: 'relative',
                      background: isSelected ? 'rgba(79, 70, 229, 0.05)' : 'transparent'
                    }}
                  >
                    {isSelected && <CheckCircle size={20} color="var(--primary)" style={{position:'absolute', top:'10px', right:'10px'}}/>}
                    <h4 style={{ marginBottom: '0.5rem', paddingRight: '20px' }}>{r.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#f59e0b', marginBottom: '0.5rem' }}>⭐ {r.rating}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Highlights:</strong> {r.menuHighlights.join(', ')}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}><Clock size={12} style={{display:'inline'}}/> {r.openingTime}</p>
                    <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>Avg: {destDetails.name.includes('India') ? '₹' : '$'}{r.averageCost} / day</div>
                  </div>
                )
              })}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn" style={{ background: '#64748b' }} onClick={handleBack}><ArrowLeft size={16}/> Back</button>
              <button className="btn" onClick={handleNext}>Review Trip <ArrowRight size={16}/></button>
            </div>
          </div>
        )}

        {/* STEP 6: REVIEW */}
        {step === 6 && destDetails && (
          <div className="fade-in">
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Review Your Custom Trip</h2>
            
            <div style={{ background: 'rgba(255,255,255,0.5)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px dashed var(--border)', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Destination:</span>
                <span>{destDetails.name} ({days} Days)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px dashed var(--border)', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Transport:</span>
                <span>{selectedTransport?.agency} - {selectedTransport?.name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px dashed var(--border)', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Accommodation:</span>
                <span>{selectedHotel?.type} ({selectedRoom?.type})</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px dashed var(--border)', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Activities ({selectedActivities.length}):</span>
                <span>{selectedActivities.reduce((sum, a) => sum + a.cost, 0)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '2px solid var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>
                <span style={{ fontWeight: 800, color: 'var(--primary)' }}>Total Package Cost:</span>
                <span style={{ fontWeight: 800, color: 'var(--primary)' }}>{destDetails.name.includes('India') ? '₹' : '$'}{calculateTotal().toLocaleString()}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn" style={{ background: '#64748b' }} onClick={handleBack}><ArrowLeft size={16}/> Edit Selections</button>
              <button className="btn" style={{ background: '#10b981', boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.39)' }} onClick={proceedToCheckout}>
                Proceed to Checkout <ArrowRight size={16}/>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
