// src/context/LanguageContext.js
'use client';
import { createContext, useContext, useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const stored = Cookies.get('locale');
    if (stored) setLocale(stored);
  }, []);

  const changeLanguage = (lang) => {
    setLocale(lang);
    Cookies.set('locale', lang, { expires: 365 });
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);