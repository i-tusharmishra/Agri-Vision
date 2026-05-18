import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; 
import { LanguageContext } from '../context/LanguageContext';
import '../App.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { content } = useContext(LanguageContext);
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const ActionCard = ({ title, desc, icon, onClick, color, isComingSoon }) => (
    <div 
      style={{...styles.card, borderTop: `5px solid ${color}`}} 
      onClick={!isComingSoon ? onClick : null}
      className="dashboard-card" 
    >
      <div style={{...styles.cardIcon, background: `${color}15`, color: color}}>
        {icon}
      </div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDesc}>{desc}</p>
      
      {!isComingSoon ? (
        <div style={{...styles.arrow, color: color}}>&rarr;</div>
      ) : (
        <span style={styles.soonBadge}>{content.comingSoon || "Coming Soon"}</span>
      )}
    </div>
  );

  return (
    <div style={styles.container}>
      <Sidebar user={user} handleLogout={handleLogout} />

      <div style={styles.mainContent}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.welcomeTitle}>
            {content.welcomeUser}, <span style={{color: '#1E3923'}}>{user.name}!</span>
          </h1>
          <p style={styles.subtitle}>{content.tagline}</p>
        </div>

        {/* 2-Column Grid */}
        <div style={styles.grid}>
          
          {/* 1. Yield Prediction */}
          <ActionCard 
            title={content.card1Title} 
            desc={content.card1Desc} 
            icon="📊" 
            color="#2E7D32" // Strong Forest Green
            onClick={() => navigate('/prediction')} 
          />

          {/* 2. Weather & Mandi */}
          <ActionCard 
            title={content.card2Title} 
            desc={content.card2Desc} 
            icon="⛅" 
            color="#E65100" // Earthy Orange
            onClick={() => navigate('/market-weather')} 
          />

          {/* 3. Crop Encyclopedia */}
          <ActionCard 
            title={content.card3Title} 
            desc={content.card3Desc} 
            icon="📚" 
            color="#5D4037" // Dark Soil Brown
            onClick={() => navigate('/crop-guide')} 
          />

          {/* 4. More Options (Coming Soon) */}
          <ActionCard 
            title="Advanced Analytics" 
            desc="Soil health and fertility analysis features & more." 
            icon="🚀" 
            color="#455A64" // Slate Grey
            isComingSoon={true}
          />

        </div>
      </div>
    </div>
  );
};

// --- STYLES (Fixed Spacing & Darker Theme) ---
const styles = {
  container: {
    display: 'flex',
    background: '#ECEFF1', // Slightly darker, cooler grey background
    minHeight: '100vh',
    fontFamily: "'Poppins', sans-serif",
  },
  mainContent: {
    marginLeft: '280px', // Matches Sidebar width EXACTLY
    padding: '40px 60px', // Extra padding to detach content from sidebar
    flex: 1,
    boxSizing: 'border-box'
  },
  header: {
    marginBottom: '40px'
  },
  welcomeTitle: {
    fontSize: '2.4rem',
    color: '#263238', // Dark Blue Grey
    margin: '0 0 10px 0',
    fontWeight: '700'
  },
  subtitle: {
    color: '#546E7A',
    fontSize: '1.1rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // STRICT 2 COLUMNS
    gap: '30px', // Space between cards
    maxWidth: '1100px' // Prevents cards from getting too wide on huge screens
  },
  // Darker Card Styles
  card: {
    background: 'white',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '220px',
    border: '1px solid #ECEFF1'
  },
  cardIcon: {
    width: '55px',
    height: '55px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.6rem',
    marginBottom: '20px'
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: '#37474F',
    margin: '0 0 10px 0',
    fontWeight: '700'
  },
  cardDesc: {
    color: '#607D8B',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    marginBottom: 'auto' // Pushes arrow/badge to bottom
  },
  arrow: {
    marginTop: '20px',
    fontSize: '1.5rem',
    alignSelf: 'flex-end',
    fontWeight: 'bold'
  },
  soonBadge: {
    marginTop: '20px',
    alignSelf: 'flex-start',
    background: '#ECEFF1',
    color: '#78909C',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600'
  }
};

export default Dashboard;