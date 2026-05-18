import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Added useLocation to check active page
import { LanguageContext } from '../context/LanguageContext';
import logo from '../assets/logo_eye.jpg'; 
import '../App.css'; 

const Sidebar = ({ user, handleLogout }) => {
  const { content, switchLanguage, language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation(); // Gets current URL path

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी (Hindi)' },
    { code: 'pa', label: 'ਪੰਜਾਬੀ (Punjabi)' },
    { code: 'ta', label: 'தமிழ் (Tamil)' },
    { code: 'te', label: 'తెలుగు (Telugu)' },
    { code: 'ml', label: 'മലയാളം (Malayalam)' },
    { code: 'kn', label: 'ಕನ್ನಡ (Kannada)' },
  ];

  const currentLabel = languages.find(l => l.code === language)?.label || 'English';

  return (
    <div style={styles.sidebarContainer}>
      <div>
        {/* LOGO */}
        <div style={styles.brand}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <div>
            <h2 style={styles.brandName}>Agri-Vision</h2>
            <span style={styles.brandTag}>Crop Yield Prediction Portal</span>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav style={styles.nav}>
          
          {/* Dashboard Item */}
          <div 
            className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
            onClick={() => navigate('/dashboard')}
          >
            <span style={styles.icon}>🏠</span> {content.dashboard}
          </div>
          
          {/* Profile Item */}
          <div 
            className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}
            onClick={() => navigate('/profile')}
          >
            <span style={styles.icon}>👤</span> {content.profile}
          </div>

          {/* Dark Mode Item */}
          <div className="nav-item">
            <span style={styles.icon}>🌙</span> {content.darkMode} 
            <span style={styles.badge}>{content.comingSoon}</span>
          </div>

          {/* LANGUAGE DROPDOWN */}
          <div style={styles.dropdownWrapper}>
             <span style={styles.dropdownIcon}>🌐</span>
             <div className="lang-container"> {/* CSS Class handles the style now */}
              <select 
                value={language}
                onChange={(e) => switchLanguage(e.target.value)} 
                style={styles.hiddenSelect}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} style={{color: '#333'}}>
                    {lang.label}
                  </option>
                ))}
              </select>
              <span style={styles.visibleLabel}>{currentLabel}</span>
              <span style={styles.arrowIcon}>⌵</span>
            </div>
          </div>
        </nav>
      </div>

      {/* BOTTOM SECTION */}
      <div style={styles.bottomSection}>
        <div style={styles.userProfile}>
          <div style={styles.avatar}>{user.name ? user.name[0].toUpperCase() : 'U'}</div>
          <div style={styles.userInfo}>
            <p style={styles.userName}>{user.name}</p>
            <p style={styles.userEmail}>{user.email}</p>
          </div>
        </div>
        
        {/* Logout Button */}
        <button onClick={handleLogout} className="logout-btn">
          ↪️ {content.logout}
        </button>
      </div>
    </div>
  );
};

// --- REDUCED INLINE STYLES (Moved dynamic parts to CSS) ---
const styles = {
  sidebarContainer: {
    width: '280px', height: '100vh', background: '#1A2F23', color: '#E0E5E0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem 1.5rem', position: 'fixed', left: 0, top: 0, fontFamily: "'Poppins', sans-serif", zIndex: 1000, boxShadow: '4px 0 15px rgba(0,0,0,0.2)', boxSizing: 'border-box'
  },
  brand: { display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2.5rem' },
  logo: { width: '48px', height: '48px', borderRadius: '12px', border: '2px solid #4CAF50' },
  brandName: { fontSize: '1.3rem', color: '#FFFFFF', margin: 0, fontWeight: '700' },
  brandTag: { fontSize: '0.75rem', color: '#8FB595' },
  nav: { display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto', maxHeight: 'calc(100vh - 250px)', paddingRight: '5px' },
  
  // NOTE: 'navItem' and 'navItemActive' styles are REMOVED from here.
  // They are now in App.css as .nav-item and .nav-item.active

  icon: { fontSize: '1.1rem' },
  badge: { fontSize: '0.6rem', background: '#5D4037', color: 'white', padding: '3px 8px', borderRadius: '10px', marginLeft: 'auto' },
  dropdownWrapper: { display: 'flex', alignItems: 'center', gap: '12px', marginTop: '15px', paddingLeft: '12px' },
  dropdownIcon: { fontSize: '1.1rem', color: '#B0C4B1' },
  
  // langContainer style is REMOVED (moved to CSS)
  
  hiddenSelect: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', zIndex: 2 },
  visibleLabel: { color: '#333333', fontSize: '0.9rem', fontWeight: '500' },
  arrowIcon: { color: '#666666', fontSize: '0.8rem', fontWeight: 'bold' },
  bottomSection: { borderTop: '1px solid #2F5233', paddingTop: '1.5rem' },
  userProfile: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' },
  avatar: { width: '42px', height: '42px', borderRadius: '50%', background: '#4CAF50', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem' },
  userInfo: { overflow: 'hidden' },
  userName: { margin: 0, fontWeight: '600', color: '#fff', fontSize: '0.9rem' },
  userEmail: { margin: 0, color: '#8FB595', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '160px' },
  
  // logoutBtn style is REMOVED (moved to CSS)
};

export default Sidebar;