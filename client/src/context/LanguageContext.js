import React, { createContext, useState } from 'react';
import { translations } from '../utils/translations';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default language state
  const [language, setLanguage] = useState('en');
  const [content, setContent] = useState(translations['en']);

  const switchLanguage = (langCode) => {
    setLanguage(langCode);
    setContent(translations[langCode]);
    // In the future (Node.js part), we will save this to a cookie here.
  };

  return (
    <LanguageContext.Provider value={{ language, content, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};