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
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
           <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-white" style={{ fontSize: '0.6rem' }}>
              1
           </div>
        )}
      </div>

      {isOpen && (
        <div className="chat-window shadow-lg border-0 fade-in">
          <div className="chat-header d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <div className="bg-white bg-opacity-25 p-2 rounded-lg">
                <Bot size={18} />
              </div>
              <div>
                <div className="fw-black small lh-1">Trip Pro AI</div>
                <div className="small opacity-75 mt-1" style={{ fontSize: '0.65rem' }}>Online · Ready to Plan</div>
              </div>
            </div>
            <Sparkles size={16} />
          </div>

          <div className="chat-body p-3">
            {messages.map((m, i) => (
              <div key={i} className={`chat-message ${m.role} mb-2 shadow-sm`}>
                {m.content}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-footer p-3 bg-white border-top">
            <div className="d-flex gap-2">
              <input 
                type="text" 
                className="form-control form-control-sm border-0 bg-light" 
                placeholder="Ask anything..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                style={{ borderRadius: '20px', paddingLeft: '1rem' }}
              />
              <button 
                onClick={handleSend}
                className="btn btn-primary rounded-circle p-0 d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: '36px', height: '36px' }}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
          
          <div className="py-2 bg-light text-center small text-muted fw-bold border-top" style={{ fontSize: '0.6rem', letterSpacing: '0.5px' }}>
             POWERED BY TRIP PRO INTELLIGENCE
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
