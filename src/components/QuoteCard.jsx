import React, { useState, useEffect } from 'react';

export default function QuoteCard({ quoteData, currentLang }) {
  const [animating, setAnimating] = useState(false);
  const [displayData, setDisplayData] = useState(quoteData);

  useEffect(() => {
    // If the entire quote object changes (user clicked next)
    if (quoteData !== displayData) {
      setAnimating(true);
      const timer = setTimeout(() => {
        setDisplayData(quoteData);
        setAnimating(false);
      }, 500); // Wait for exit animation
      return () => clearTimeout(timer);
    }
  }, [quoteData, displayData]);

  const translation = displayData.translations[currentLang] || displayData.translations['en'];

  return (
    <div className="quote-card glass-panel slide-up">
      <span className="quote-icon">"</span>
      
      <div className={`quote-text-container fade-transition ${animating ? 'fade-exit-active' : 'fade-enter-active'}`}>
        <div>
          <h2 className="quote-text">{translation.text}</h2>
          <p className="quote-author">{translation.author}</p>
        </div>
      </div>
    </div>
  );
}
