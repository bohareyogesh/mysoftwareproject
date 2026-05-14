import React, { useState } from 'react';
import './App.css';
import { quotes } from './data/quotes';
import Header from './components/Header';
import QuoteCard from './components/QuoteCard';
import Controls from './components/Controls';

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleNextQuote = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * quotes.length);
    } while (nextIndex === currentQuoteIndex && quotes.length > 1);
    
    setCurrentQuoteIndex(nextIndex);
  };

  return (
    <div className="app-container">
      <Header 
        currentLang={currentLang} 
        onLangChange={setCurrentLang} 
      />
      
      <main className="main-content">
        <QuoteCard 
          quoteData={quotes[currentQuoteIndex]} 
          currentLang={currentLang} 
        />
        
        <Controls onNext={handleNextQuote} />
      </main>
    </div>
  );
}

export default App;
