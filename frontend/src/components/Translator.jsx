import { useState, useRef } from 'react';
import axios from 'axios';
import { Languages, Mic, Camera, RefreshCw, ArrowRightLeft } from 'lucide-react';
import Tesseract from 'tesseract.js';

export const Translator = ({ targetLanguage = 'es' }) => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [direction, setDirection] = useState('en-to-local'); // 'en-to-local' or 'local-to-en'
  const fileInputRef = useRef(null);

  const survivalPhrases = [
    "I need help",
    "Where is the hospital?",
    "Water please",
    "How much does this cost?",
    "Where is the bathroom?"
  ];

  const handleTranslate = async (textToTranslate, overrideDir = null) => {
    if (!textToTranslate) return;
    setLoading(true);
    const dir = overrideDir || direction;
    const langPair = dir === 'en-to-local' ? `en|${targetLanguage}` : `${targetLanguage}|en`;
    
    try {
      const res = await axios.get(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=${langPair}`);
      setTranslation(res.data.responseData.translatedText);
    } catch (err) {
      console.error(err);
      setTranslation("Translation failed. Check internet connection.");
    } finally {
      setLoading(false);
    }
  };

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice recognition is not supported in this browser. Try Chrome.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = direction === 'en-to-local' ? 'en-US' : targetLanguage;
    
    recognition.onstart = () => setIsListening(true);
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
      handleTranslate(transcript);
    };
    
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    
    recognition.start();
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setLoading(true);
    setTranslation("Scanning image for text... this may take a few seconds.");
    setDirection('local-to-en'); // Assume foreign image to English
    
    try {
      const langMap = { 'es': 'spa', 'fr': 'fra', 'ja': 'jpn', 'hi': 'hin', 'id': 'ind' };
      const tessLang = langMap[targetLanguage] || 'eng';
      
      const result = await Tesseract.recognize(file, tessLang);
      const extractedText = result.data.text.trim();
      
      if (!extractedText) {
        setTranslation("No text found in image.");
        return;
      }
      
      setText(extractedText);
      handleTranslate(extractedText, 'local-to-en');
    } catch (err) {
      console.error(err);
      setTranslation("Failed to read image. Please try a clearer photo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="translator-widget glass print-hide" style={{ padding: '1.5rem', borderRadius: '12px', marginTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
          <Languages size={24} /> Universal Translator
        </h3>
        <button 
          onClick={() => {
            setDirection(direction === 'en-to-local' ? 'local-to-en' : 'en-to-local');
            setText(translation);
            setTranslation(text);
          }}
          className="btn" 
          style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', background: 'var(--card-bg)', color: 'var(--text-main)', border: '1px solid var(--border)' }}
        >
          <ArrowRightLeft size={14} /> Swap
        </button>
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {direction === 'en-to-local' ? 'English' : `Local (${targetLanguage.toUpperCase()})`}
          </label>
          <textarea 
            className="input-field"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={direction === 'en-to-local' ? "Type something..." : "Foreign text..."}
            style={{ width: '100%', height: '80px', resize: 'none', background: 'rgba(255,255,255,0.5)' }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {direction === 'en-to-local' ? `Local (${targetLanguage.toUpperCase()})` : 'English'}
          </label>
          <div style={{ 
            width: '100%', height: '80px', 
            background: 'rgba(255,255,255,0.8)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '8px', 
            padding: '0.8rem',
            overflowY: 'auto'
          }}>
            {loading ? <div style={{display:'flex', gap:'0.5rem', alignItems:'center', color:'var(--primary)'}}><RefreshCw size={16} className="spin" /> Translating...</div> : translation}
          </div>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <button className="btn" onClick={() => handleTranslate(text)} disabled={loading} style={{ flex: 1 }}>
          Translate Text
        </button>
        <button 
          className="btn" 
          onClick={startListening} 
          disabled={loading} 
          style={{ background: isListening ? '#ef4444' : 'var(--secondary)' }}
          title="Voice Translation"
        >
          <Mic size={18} /> {isListening ? 'Listening...' : 'Voice'}
        </button>
        <button 
          className="btn" 
          onClick={() => fileInputRef.current.click()} 
          disabled={loading} 
          style={{ background: '#10b981' }}
          title="Scan foreign sign/menu"
        >
          <Camera size={18} /> Scan Image
        </button>
        <input 
          type="file" 
          ref={fileInputRef} 
          accept="image/*" 
          style={{ display: 'none' }} 
          onChange={handleImageUpload} 
        />
      </div>

      <div>
        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Quick Survival Phrases (Auto-Translates to Local)</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {survivalPhrases.map((phrase, idx) => (
            <button 
              key={idx} 
              onClick={() => { 
                setDirection('en-to-local');
                setText(phrase); 
                handleTranslate(phrase, 'en-to-local'); 
              }}
              style={{ 
                padding: '0.4rem 0.8rem', 
                fontSize: '0.8rem', 
                background: 'rgba(99, 102, 241, 0.1)', 
                color: 'var(--primary)', 
                border: '1px solid var(--primary)', 
                borderRadius: '20px', 
                cursor: 'pointer' 
              }}
            >
              {phrase}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
