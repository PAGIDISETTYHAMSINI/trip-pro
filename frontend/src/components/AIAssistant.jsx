import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Sparkles, MapPin } from 'lucide-react';

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hi! I am your Trip Pro AI assistant. How can I help you discover India today?' }
  ]);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulated AI Response
    setTimeout(() => {
      let aiResponse = "That sounds like a great plan! India has so many beautiful places. Would you like me to find some itineraries for you?";
      
      if (input.toLowerCase().includes('goa')) {
        aiResponse = "Goa is perfect! For a budget trip, I recommend South Goa's Agonda beach. If you want a party vibe, North Goa is the place to be. Shall I build a 4-day Goa itinerary for you?";
      } else if (input.toLowerCase().includes('himalayas') || input.toLowerCase().includes('mountains')) {
        aiResponse = "The Himalayas are majestic! You should check out Spiti Valley for a rugged adventure or Manali for a classic mountain escape. Which one interests you?";
      } else if (input.toLowerCase().includes('food')) {
        aiResponse = "A foodie trip! You must visit Old Delhi for street food, Hyderabad for Biryani, and Kolkata for sweets. I can create a 'Kolkata Food Trail' for you!";
      }

      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    }, 1000);
  };

  return (
    <>
      <div className="ai-bubble" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
           <div style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'var(--danger)', color: '#fff', width: '20px', height: '20px', borderRadius: '50%', fontSize: '0.65rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>
              1
           </div>
        )}
      </div>

      {isOpen && (
        <div className="chat-window fade-in">
          <div className="chat-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem', borderRadius: 'var(--radius-md)' }}>
                <Bot size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', lineHeight: 1 }}>Trip Pro AI</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.8, marginTop: '2px' }}>Online · Ready to Plan</div>
              </div>
            </div>
            <Sparkles size={18} />
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`chat-message ${m.role}`}>
                {m.content}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-footer">
            <input 
              type="text" 
              className="chat-input" 
              placeholder="Ask anything..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              style={{ background: 'var(--primary)', color: '#fff', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Send size={18} />
            </button>
          </div>
          
          <div style={{ padding: '0.5rem 1.5rem', background: 'var(--slate-50)', fontSize: '0.65rem', color: 'var(--slate-400)', textAlign: 'center', fontWeight: 700 }}>
             POWERED BY TRIP PRO INTELLIGENCE
          </div>
        </div>
      )}
    </>
  );
};
