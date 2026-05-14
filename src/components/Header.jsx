import React from 'react';
import { languages } from '../data/quotes';

export default function Header({ currentLang, onLangChange }) {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo-title">Lumina</h1>
        <p className="logo-subtitle">Daily Inspiration</p>
      </div>
      
      <select 
        className="lang-selector"
        value={currentLang} 
        onChange={(e) => onLangChange(e.target.value)}
        aria-label="Select Language"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </header>
  );
}
