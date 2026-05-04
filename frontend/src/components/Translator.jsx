import { useState } from 'react';
import axios from 'axios';
import { Languages, Volume2, RefreshCw } from 'lucide-react';

export const Translator = ({ targetLanguage = 'es' }) => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');
  const [loading, setLoading] = useState(false);

  const survivalPhrases = [
    "I need help",
    "Where is the hospital?",
    "Water please",
    "How much does this cost?",
    "Where is the bathroom?"
  ];

  const handleTranslate = async (textToTranslate) => {
    if (!textToTranslate) return;
    setLoading(true);
    try {
      // Free MyMemory API
      const res = await axios.get(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLanguage}`);
      setTranslation(res.data.responseData.translatedText);
    } catch (err) {
      console.error(err);
      setTranslation("Translation failed. Check internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="translator-widget glass" style={{ padding: '1.5rem', borderRadius: '12px', marginTop: '2rem' }}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
        <Languages size={24} /> Universal Translator
      </h3>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>English</label>
          <textarea 
            className="input-field"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something to translate..."
            style={{ width: '100%', height: '80px', resize: 'none', background: 'rgba(255,255,255,0.5)' }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Local Language ({targetLanguage.toUpperCase()})</label>
          <div style={{ 
            width: '100%', height: '80px', 
            background: 'rgba(255,255,255,0.8)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '8px', 
            padding: '0.8rem',
            overflowY: 'auto'
          }}>
            {loading ? <RefreshCw size={16} className="spin" /> : translation}
          </div>
        </div>
      </div>
      
      <button className="btn" onClick={() => handleTranslate(text)} disabled={loading} style={{ width: '100%', marginBottom: '1.5rem' }}>
        Translate
      </button>

      <div>
        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Quick Survival Phrases</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {survivalPhrases.map((phrase, idx) => (
            <button 
              key={idx} 
              onClick={() => { setText(phrase); handleTranslate(phrase); }}
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
