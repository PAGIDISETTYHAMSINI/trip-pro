import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { MapPin, Wallet, Calendar, Plane, Train, Bus, Car, Building, Coffee, Map, Clock, Search, CheckCircle, ArrowRight, ArrowLeft, Activity, Zap } from 'lucide-react';

export const TripBuilder = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [selectedDestinationId, setSelectedDestinationId] = useState('');
  const [days, setDays] = useState(3);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [travelers, setTravelers] = useState(2);
  const [travelStyle, setTravelStyle] = useState('mid'); // budget, mid, luxury
  const [useBuffer, setUseBuffer] = useState(true); // 15% safety buffer
  const [destDetails, setDestDetails] = useState(null);
  
  // Selections
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [lang, setLang] = useState('en');

  // Filters & Search
  const [transportType, setTransportType] = useState('Flight');
  const [transportSearch, setTransportSearch] = useState('');
  const [placeCategory, setPlaceCategory] = useState('All');
  const [placeSearch, setPlaceSearch] = useState('');
  const [foodCategory, setFoodCategory] = useState('All');
  const [foodSearch, setFoodSearch] = useState('');

  const translations = {
    en: {
      title: "Premium Travel Concierge",
      step1: "Destination & Dates",
      step2: "Transport Selection",
      step3: "Luxury Accommodation",
      step4: "Curated Experiences",
      step5: "Exquisite Dining",
      step6: "Trip Itinerary Review",
      next: "Next Step",
      back: "Back",
      review: "Review Trip",
      checkout: "Book Custom Package",
      all: "All",
      search: "Search...",
      cats: {
        Main: "Main Attractions",
        "Hidden Gem": "Hidden Gems",
        Adventure: "Adventure",
        Cultural: "Cultural",
        Traditional: "Traditional",
        "Fine Dining": "Fine Dining",
        "Street Food": "Street Food",
        Continental: "Continental",
        Asian: "Asian",
        Cafe: "Cafe",
        Steakhouse: "Steakhouse",
        Seafood: "Seafood",
        Vegan: "Vegan"
      }
    },
    hi: {
      title: "प्रीमियम यात्रा दरबान",
      step1: "गंतव्य और तिथियां",
      step2: "परिवहन चयन",
      step3: "लक्जरी आवास",
      step4: "क्यूरेटेड अनुभव",
      step5: "उत्तम भोजन",
      step6: "यात्रा कार्यक्रम समीक्षा",
      next: "अगला कदम",
      back: "पीछे",
      review: "यात्रा की समीक्षा",
      checkout: "कस्टम पैकेज बुक करें",
      all: "सभी",
      search: "खोजें...",
      cats: {
        Main: "प्रमुख आकर्षण",
        "Hidden Gem": "छिपे हुए रत्न",
        Adventure: "साहसिक",
        Cultural: "सांस्कृतिक",
        Traditional: "पारंपरिक",
        "Fine Dining": "शानदार भोजन",
        "Street Food": "स्ट्रीट फूड",
        Continental: "कॉन्टिनेंटल",
        Asian: "एशियाई",
        Cafe: "कैफे",
        Steakhouse: "स्टेकहाउस",
        Seafood: "सीफूड",
        Vegan: "शाकाहारी"
      }
    },
    te: {
      title: "ప్రీమియం ట్రావెల్ కన్సైర్జ్",
      step1: "గమ్యం & తేదీలు",
      step2: "రవాణా ఎంపిక",
      step3: "లగ్జరీ వసతి",
      step4: "క్యూరేటెడ్ అనుభవాలు",
      step5: "అద్భుతమైన భోజనం",
      step6: "ట్రిప్ ఇటినెరరీ రివ్యూ",
      next: "తదుపరి దశ",
      back: "వెనుకకు",
      review: "ట్రిప్ రివ్యూ",
      checkout: "కస్టమ్ ప్యాకేజీని బుక్ చేయండి",
      all: "అన్నీ",
      search: "వెతకండి...",
      cats: {
        Main: "ప్రధాన ఆకర్షణలు",
        "Hidden Gem": "దాగి ఉన్న అందాలు",
        Adventure: "సాహసం",
        Cultural: "సాంస్కృతిక",
        Traditional: "సాంప్రదాయ",
        "Fine Dining": "ఫైన్ డైనింగ్",
        "Street Food": "స్ట్రీట్ ఫుడ్",
        Continental: "కాంటినెంటల్",
        Asian: "ఏషియన్",
        Cafe: "కాఫీ షాప్",
        Steakhouse: "స్టేక్ హౌస్",
        Seafood: "సీఫుడ్",
        Vegan: "వీగన్"
      }
    }
  };

  const t = translations[lang];

  useEffect(() => {
    axios.get('https://trip-pro.onrender.com/api/destinations')
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
      const res = await axios.get(`https://trip-pro.onrender.com/api/destinations/${selectedDestinationId}`);
      setDestDetails(res.data);
      setStep(2);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const runAIOptimization = () => {
    if (!destDetails) return;
    
    // 1. Select Transport based on style
    const sortedTransport = [...destDetails.detailedTransport].sort((a, b) => a.cost - b.cost);
    if (travelStyle === 'budget') setSelectedTransport(sortedTransport[0]);
    else if (travelStyle === 'luxury') setSelectedTransport(sortedTransport[sortedTransport.length - 1]);
    else setSelectedTransport(sortedTransport[Math.floor(sortedTransport.length / 2)]);

    // 2. Select Hotel
    const sortedHotels = [...destDetails.hotels].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    const bestHotel = sortedHotels[0];
    setSelectedHotel(bestHotel);
    
    const sortedRooms = [...bestHotel.roomOptions].sort((a, b) => a.cost - b.cost);
    if (travelStyle === 'budget') setSelectedRoom(sortedRooms[0]);
    else if (travelStyle === 'luxury') setSelectedRoom(sortedRooms[sortedRooms.length - 1]);
    else setSelectedRoom(sortedRooms[Math.floor(sortedRooms.length / 2)]);

    // 3. Select Top 3 Activities
    const topActivities = [...destDetails.activities].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 3);
    setSelectedActivities(topActivities);

    // 4. Select 1 Restaurant
    const topRest = [...destDetails.restaurants].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))[0];
    setSelectedRestaurants([topRest]);

    setStep(6); // Jump to Review
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const toggleActivity = (act) => {
    if (selectedActivities.find(a => a.name === act.name)) {
      setSelectedActivities(selectedActivities.filter(a => a.name !== act.name));
    } else {
      setSelectedActivities([...selectedActivities, act]);
    }
  };

  const toggleRestaurant = (res) => {
    if (selectedRestaurants.find(r => r.name === res.name)) {
      setSelectedRestaurants(selectedRestaurants.filter(r => r.name !== res.name));
    } else {
      setSelectedRestaurants([...selectedRestaurants, res]);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    if (selectedTransport) total += (selectedTransport.cost * travelers);
    if (selectedRoom) total += (selectedRoom.cost * days * Math.ceil(travelers / 2)); // Assume 2 per room
    
    const activitiesCost = selectedActivities.reduce((sum, a) => sum + a.cost, 0);
    total += (activitiesCost * travelers);
    
    const foodCost = selectedRestaurants.reduce((sum, r) => sum + (r.averageCost * days), 0);
    total += (foodCost * travelers);

    if (useBuffer) {
      total += (total * 0.15); // 15% Emergency Buffer
    }

    return Math.round(total);
  };

  const proceedToCheckout = () => {
    const itinerary = {
      totalCost: calculateTotal(),
      currencySymbol: destDetails.name.includes('India') || destDetails.name.includes('Andaman') ? '₹' : '$',
      transport: selectedTransport,
      hotel: selectedHotel,
      room: selectedRoom,
      activities: selectedActivities,
      restaurants: selectedRestaurants,
      cancellationPolicy: destDetails.cancellationPolicy
    };
    navigate('/checkout', { state: { itinerary, destination: destDetails, days } });
  };

  const getVibeStyles = () => {
    if (!destDetails) return { glow: 'rgba(79, 70, 229, 0.1)', iconColor: 'var(--primary)' };
    if (destDetails.name.includes('Andaman') || destDetails.name.includes('Goa')) 
      return { glow: 'rgba(14, 165, 233, 0.15)', iconColor: '#0ea5e9' };
    if (destDetails.name.includes('Paris') || destDetails.name.includes('London')) 
      return { glow: 'rgba(236, 72, 153, 0.15)', iconColor: '#ec4899' };
    return { glow: 'rgba(79, 70, 229, 0.1)', iconColor: 'var(--primary)' };
  };

  const vibe = getVibeStyles();

  if (loading && step === 1) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading destinations...</div>;

  return (
    <div className="container" style={{ padding: '4rem 0', display: 'flex', gap: '2rem', position: 'relative', transition: 'all 0.5s ease' }}>
      
      {/* Background Vibe Glow */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(circle at 50% 50%, ${vibe.glow} 0%, transparent 70%)`, zIndex: -2, pointerEvents: 'none' }}></div>

      {/* LEFT: MAIN CONTENT */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ margin: 0, color: vibe.iconColor, fontWeight: 900, transition: 'color 0.5s' }}>{t.title}</h1>
          <select value={lang} onChange={(e) => setLang(e.target.value)} style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <option value="en">English</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="te">తెలుగు (Telugu)</option>
          </select>
        </div>
      
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
            }}>{num}</div>
          ))}
        </div>

        {/* STEP 1: DESTINATION & DATES */}
        {step === 1 && (
          <div className="glass fade-in" style={{ padding: '3rem' }}>
            <h2 style={{ marginBottom: '2rem' }}>{t.step1}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="form-group">
                <label>Where would you like to go?</label>
                <select className="input-field" value={selectedDestinationId} onChange={(e) => setSelectedDestinationId(e.target.value)}>
                  <option value="">Select a destination...</option>
                  {destinations.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div className="form-group" style={{ flex: 1, minWidth: '150px' }}>
                  <label>Travelers</label>
                  <input type="number" className="input-field" min="1" value={travelers} onChange={(e) => setTravelers(parseInt(e.target.value))} />
                </div>
                <div className="form-group" style={{ flex: 1, minWidth: '150px' }}>
                  <label>Travel Style</label>
                  <select className="input-field" value={travelStyle} onChange={(e) => setTravelStyle(e.target.value)}>
                    <option value="budget">Budget (Economy)</option>
                    <option value="mid">Mid-Range (Comfort)</option>
                    <option value="luxury">Luxury (Premium)</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid #10b981' }}>
                <input type="checkbox" checked={useBuffer} onChange={(e) => setUseBuffer(e.target.checked)} style={{ width: '20px', height: '20px' }} />
                <label style={{ fontSize: '0.9rem', color: '#10b981' }}><strong>Add 15% Emergency Buffer</strong> (Recommended for safety & unexpected costs)</label>
              </div>
              <button className="btn" onClick={fetchDestinationDetails} disabled={!selectedDestinationId}>Next: Transport <ArrowRight size={16}/></button>
            </div>
          </div>
        )}

        {/* STEP 2: TRANSPORT */}
        {step === 2 && destDetails && (
          <div className="fade-in">
            <h2 style={{ marginBottom: '2rem' }}>{t.step2}</h2>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              {['Flight', 'Train', 'Bus', 'Ferry', 'Car'].map(type => (
                <button key={type} onClick={() => { setTransportType(type); setSelectedTransport(null); }} className="btn" style={{ background: transportType === type ? 'var(--primary)' : 'white', color: transportType === type ? 'white' : 'var(--text-main)', border: '1px solid var(--border)' }}>{type}</button>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {destDetails.detailedTransport.filter(tr => {
                const type = transportType.toLowerCase();
                if (type === 'flight') return tr.id.startsWith('f');
                if (type === 'train') return tr.id.startsWith('t');
                if (type === 'bus') return tr.id.startsWith('b');
                if (type === 'car') return tr.id.startsWith('c');
                return tr.type.toLowerCase().includes(type);
              }).map(tr => (
                <div key={tr.id} className={`glass card-hover ${selectedTransport?.id === tr.id ? 'active-card' : ''}`} style={{ padding: '1.5rem', cursor: 'pointer', border: selectedTransport?.id === tr.id ? '2px solid var(--primary)' : '1px solid var(--border)' }} onClick={() => setSelectedTransport(tr)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ fontWeight: 'bold' }}>{tr.agency}</div>
                    <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{destDetails.name.includes('India') ? '₹' : '$'}{tr.cost}</div>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{tr.name}</div>
                  <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}><Clock size={14} style={{ display: 'inline', marginRight: '4px' }}/> {tr.departureTime}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <button className="btn" style={{ background: '#64748b' }} onClick={handleBack}><ArrowLeft size={16}/> {t.back}</button>
              <button className="btn" onClick={handleNext} disabled={!selectedTransport}>{t.next} <ArrowRight size={16}/></button>
            </div>
          </div>
        )}

        {/* STEP 3: ACCOMMODATION */}
        {step === 3 && destDetails && (
          <div className="fade-in">
            <h2 style={{ marginBottom: '2rem' }}>{t.step3}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {destDetails.hotels.map(hotel => (
                <div key={hotel.id} className="glass" style={{ padding: '1.5rem', border: selectedHotel?.id === hotel.id ? '2px solid var(--primary)' : '1px solid var(--border)' }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>{hotel.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ background: '#f59e0b', color: 'white', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.8rem' }}>⭐ {hotel.rating}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{hotel.type}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {hotel.roomOptions.map((room, idx) => (
                      <div key={idx} className={`glass card-hover ${selectedRoom?.type === room.type && selectedHotel?.id === hotel.id ? 'active-card' : ''}`} style={{ padding: '1rem', cursor: 'pointer', border: selectedRoom?.type === room.type && selectedHotel?.id === hotel.id ? '2px solid var(--primary)' : '1px solid var(--border)' }} onClick={() => { setSelectedHotel(hotel); setSelectedRoom(room); }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ fontWeight: 600 }}>{room.type}</span>
                          <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{destDetails.name.includes('India') ? '₹' : '$'}{room.cost}/night</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <button className="btn" style={{ background: '#64748b' }} onClick={handleBack}><ArrowLeft size={16}/> {t.back}</button>
              <button className="btn" onClick={handleNext} disabled={!selectedRoom}>{t.next} <ArrowRight size={16}/></button>
            </div>
          </div>
        )}

        {/* STEP 4: ACTIVITIES */}
        {step === 4 && destDetails && (
          <div className="fade-in">
            <h2 style={{ marginBottom: '2rem' }}>{t.step4}</h2>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {['All', 'Main', 'Hidden Gem', 'Adventure', 'Cultural', 'Traditional'].map(cat => (
                <button key={cat} onClick={() => setPlaceCategory(cat)} className="btn" style={{ background: placeCategory === cat ? 'var(--primary)' : 'white', color: placeCategory === cat ? 'white' : 'var(--text-main)', border: '1px solid var(--border)', fontSize: '0.8rem', padding: '0.4rem 1rem' }}>{t.cats[cat] || cat}</button>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {destDetails.activities.filter(a => placeCategory === 'All' || a.category === placeCategory).map((act, i) => (
                <div key={i} className={`glass card-hover ${selectedActivities.find(a => a.name === act.name) ? 'active-card' : ''}`} style={{ padding: '1.5rem', cursor: 'pointer', border: selectedActivities.find(a => a.name === act.name) ? '2px solid var(--primary)' : '1px solid var(--border)' }} onClick={() => toggleActivity(act)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ fontWeight: 'bold' }}>{act.name}</div>
                    <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{destDetails.name.includes('India') ? '₹' : '$'}{act.cost}</div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>⭐ {act.rating} • {act.openingTime} - {act.closingTime}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <button className="btn" style={{ background: '#64748b' }} onClick={handleBack}><ArrowLeft size={16}/> {t.back}</button>
              <button className="btn" onClick={handleNext}>{t.next} <ArrowRight size={16}/></button>
            </div>
          </div>
        )}

        {/* STEP 5: DINING */}
        {step === 5 && destDetails && (
          <div className="fade-in">
            <h2 style={{ marginBottom: '2rem' }}>{t.step5}</h2>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {['All', 'Fine Dining', 'Street Food', 'Cafe', 'Seafood', 'Steakhouse', 'Asian', 'Continental'].map(cat => (
                <button key={cat} onClick={() => setFoodCategory(cat)} className="btn" style={{ background: foodCategory === cat ? 'var(--primary)' : 'white', color: foodCategory === cat ? 'white' : 'var(--text-main)', border: '1px solid var(--border)', fontSize: '0.8rem', padding: '0.4rem 1rem' }}>{t.cats[cat] || cat}</button>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {destDetails.restaurants.filter(r => foodCategory === 'All' || r.category === foodCategory).map((res, i) => (
                <div key={i} className={`glass card-hover ${selectedRestaurants.find(r => r.name === res.name) ? 'active-card' : ''}`} style={{ padding: '1.5rem', cursor: 'pointer', border: selectedRestaurants.find(r => r.name === res.name) ? '2px solid var(--primary)' : '1px solid var(--border)' }} onClick={() => toggleRestaurant(res)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ fontWeight: 'bold' }}>{res.name}</div>
                    <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>~{destDetails.name.includes('India') ? '₹' : '$'}{res.averageCost}/day</div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>⭐ {res.rating} • {res.category}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <button className="btn" style={{ background: '#64748b' }} onClick={handleBack}><ArrowLeft size={16}/> {t.back}</button>
              <button className="btn" onClick={handleNext}>{t.review} <ArrowRight size={16}/></button>
            </div>
          </div>
        )}

        {/* STEP 6: REVIEW */}
        {step === 6 && destDetails && (
          <div className="fade-in">
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>{t.step6}</h2>
            <div style={{ background: 'rgba(255,255,255,0.5)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px dashed var(--border)', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Destination:</span>
                <span>{destDetails.name} ({days} Days)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px dashed var(--border)', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Start Date:</span>
                <span>{new Date(startDate).toLocaleDateString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px dashed var(--border)', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Transport:</span>
                <span style={{ textAlign: 'right' }}>{selectedTransport?.agency} - {selectedTransport?.name}<br/><small>{selectedTransport?.type} • Departure: {selectedTransport?.departureTime}</small></span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px dashed var(--border)', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Accommodation:</span>
                <span style={{ textAlign: 'right' }}>{selectedHotel?.name}<br/><small>{selectedRoom?.type} ({destDetails?.name?.includes('India') ? '₹' : '$'}{selectedRoom?.cost}/night)</small></span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px dashed var(--border)', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Activities ({selectedActivities.length}):</span>
                <span>{destDetails?.name?.includes('India') ? '₹' : '$'}{selectedActivities.reduce((sum, a) => sum + a.cost, 0).toLocaleString()}</span>
              </div>
              <div style={{ padding: '1rem', background: '#fffbeb', borderLeft: '4px solid #f59e0b', margin: '1.5rem 0', borderRadius: '4px' }}>
                <p style={{ fontSize: '0.85rem', color: '#92400e' }}><strong>Cancellation Policy:</strong> {destDetails.cancellationPolicy}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '2px solid var(--primary)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>
                <span style={{ fontWeight: 800, color: 'var(--primary)' }}>Total Package Cost:</span>
                <span style={{ fontWeight: 800, color: 'var(--primary)' }}>{destDetails.name.includes('India') || destDetails.name.includes('Andaman') ? '₹' : '$'}{calculateTotal().toLocaleString()}</span>
              </div>

              {/* Extra Details */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                {destDetails.inclusions && (
                  <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                    <h4 style={{ color: '#166534', marginBottom: '0.5rem' }}>✅ Inclusions</h4>
                    <ul style={{ fontSize: '0.8rem', paddingLeft: '1.2rem', color: '#166534' }}>
                      {destDetails.inclusions.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                )}
                {destDetails.exclusions && (
                  <div style={{ background: '#fef2f2', padding: '1rem', borderRadius: '8px', border: '1px solid #fecaca' }}>
                    <h4 style={{ color: '#991b1b', marginBottom: '0.5rem' }}>❌ Exclusions</h4>
                    <ul style={{ fontSize: '0.8rem', paddingLeft: '1.2rem', color: '#991b1b' }}>
                      {destDetails.exclusions.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                )}
              </div>

              {destDetails.bankDetails && (
                <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'white', border: '1px solid var(--border)', borderRadius: '12px' }}>
                  <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Wallet size={18}/> Bank Details</h4>
                  <div style={{ fontSize: '0.85rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    <p><strong>Name:</strong> {destDetails.bankDetails.name}</p>
                    <p><strong>Bank:</strong> {destDetails.bankDetails.bank}</p>
                    <p><strong>A/C:</strong> {destDetails.bankDetails.account}</p>
                    <p><strong>IFSC:</strong> {destDetails.bankDetails.ifsc}</p>
                  </div>
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn" style={{ background: '#64748b' }} onClick={handleBack}><ArrowLeft size={16}/> {t.back}</button>
              <button className="btn" style={{ background: '#10b981' }} onClick={proceedToCheckout}>{t.checkout} <ArrowRight size={16}/></button>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT: SIDEBAR */}
      <div style={{ width: '320px', position: 'sticky', top: '2rem', height: 'fit-content' }}>
        <div className="glass" style={{ padding: '1.5rem', border: `2px solid ${vibe.iconColor}` }}>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Wallet color={vibe.iconColor}/> Trip Budget Meter</h3>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: vibe.iconColor, marginBottom: '1rem' }}>
            {destDetails?.name?.includes('India') || destDetails?.name?.includes('Andaman') ? '₹' : '$'}{calculateTotal().toLocaleString()}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span>Transport:</span>
              <span>{selectedTransport ? (destDetails?.name?.includes('India') ? '₹' : '$') + selectedTransport.cost.toLocaleString() : '---'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span>Stay:</span>
              <span>{selectedRoom ? (destDetails?.name?.includes('India') ? '₹' : '$') + (selectedRoom.cost * days).toLocaleString() : '---'}</span>
            </div>
          </div>
          {step < 6 && (
            <button className="btn" style={{ width: '100%', background: '#10b981' }} onClick={() => setStep(6)} disabled={!selectedDestinationId || !selectedTransport || !selectedRoom}>Quick Review <ArrowRight size={16}/></button>
          )}
          {destDetails && step < 6 && (
            <button className="btn" style={{ width: '100%', background: '#4f46e5', marginTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }} onClick={runAIOptimization}>
              <Zap size={16} fill="white"/> AI Optimized Build
            </button>
          )}
          {destDetails && (
             <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <button className="btn" style={{ background: 'transparent', color: vibe.iconColor, border: `1px solid ${vibe.iconColor}`, fontSize: '0.75rem' }} onClick={() => { const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'); audio.volume = 0.2; audio.play(); }}>🎵 Play Destination Vibe</button>
             </div>
          )}
        </div>
        <div className="glass" style={{ marginTop: '1rem', padding: '1rem', background: '#fffbeb' }}>
          <p style={{ fontSize: '0.8rem', color: '#92400e', margin: 0 }}><strong>💡 Pro Tip:</strong> {step === 1 ? "Start with your favorite place!" : "Check the local gems!"}</p>
        </div>
      </div>
    </div>
  );
};
