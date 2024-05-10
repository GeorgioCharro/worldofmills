// LanguageSwitcher.js
import React, { useContext } from 'react';
import ArabicImg from '../media/png/arabic.png';
import EnglishImg from '../media/png/english.png';
import { LanguageContext } from '../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    toggleLanguage();
    i18n.changeLanguage(language === 'en' ? 'ar' : 'en');
  };

  const getCurrentFlag = () => (language === 'en' ? ArabicImg : EnglishImg);
  const getCurrentLabel = () => (language === 'en' ? 'Arabic' : 'English');

  return (
    <button
      onClick={changeLanguage}
      className="fixed right-4 top-1/3 z-50 p-2 bg-white rounded-full shadow-lg border border-yellow-500"
    >
      <img src={getCurrentFlag()} alt={getCurrentLabel()} className="h-8 w-8" />
    </button>
  );
}

export default LanguageSwitcher;
