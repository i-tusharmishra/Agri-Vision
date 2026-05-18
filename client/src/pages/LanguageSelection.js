import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Syllabus Unit V: Routing [cite: 19]
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import AuthLayout from '../components/AuthLayout';

const LanguageSelection = () => {
  const { switchLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleLanguageSelect = (langKey) => {
    switchLanguage(langKey);
    // Navigate to Login page after selection
    navigate('/login'); 
  };

  // Inline styles for buttons (Syllabus allows inline )
  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    backgroundColor: '#2F5233', // Dark Green matching the "Agri" theme
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  };

  return (
    <AuthLayout>
      <h2 style={{ color: '#1a1a1a', marginBottom: '5px' }}>Welcome to Agri-Vision</h2>
      <p style={{ color: '#666', marginBottom: '25px' }}>Select your Language / अपनी भाषा चुनें</p>
      
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {Object.keys(translations).map((langKey) => (
          <button 
            key={langKey} 
            onClick={() => handleLanguageSelect(langKey)}
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#407040'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#2F5233'}
          >
            {translations[langKey].label}
          </button>
        ))}
      </div>
    </AuthLayout>
  );
};

export default LanguageSelection;