import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { LanguageContext } from '../context/LanguageContext';
import '../App.css'; 

const Profile = () => {
  const navigate = useNavigate();
  const { content, language } = useContext(LanguageContext); // Get 'language' to send to backend
  
  const [user, setUser] = useState({ name: '', email: '' });
  
  // SECURE PASSWORD STATE
  const [passData, setPassData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [loading, setLoading] = useState(false);

  // Mock Data (Static for now)
  const [predictions] = useState([
    { date: '2025-12-20', crop: 'Wheat', yield: '4.2 Tons/Ha', location: 'Punjab' },
    { date: '2025-12-18', crop: 'Rice', yield: '3.8 Tons/Ha', location: 'Haryana' },
  ]);

  const [pincodeHistory] = useState([
    { code: '144411', place: 'Phagwara, Punjab', lastSearch: 'Today' },
    { code: '229001', place: 'Raebareli, UP', lastSearch: 'Yesterday' },
  ]);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) navigate('/login');
    else setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // --- NEW SECURE UPDATE LOGIC ---
  const handlePasswordUpdate = async () => {
    const { oldPassword, newPassword, confirmPassword } = passData;

    // 1. Frontend Validation (Localized Alerts)
    if (!oldPassword || !newPassword || !confirmPassword) {
      return alert(content.enterAllFields || "Fill all fields");
    }
    if (newPassword !== confirmPassword) {
      return alert(content.passMismatch || "Passwords do not match");
    }

    setLoading(true);
    try {
      // 2. Backend Call (Send 'lang' for localized server response)
      const response = await axios.put('http://localhost:5000/api/user/update-password', {
        email: user.email,
        oldPassword: oldPassword,
        newPassword: newPassword,
        lang: language // <--- Crucial: Telling server which language to reply in
      });

      // 3. Success Alert (From Server)
      alert(response.data.message);
      
      // Clear fields on success
      setPassData({ oldPassword: '', newPassword: '', confirmPassword: '' });

    } catch (error) {
      console.error(error);
      // 4. Error Alert (From Server - e.g., "Incorrect old password" in Hindi)
      const errorMsg = error.response?.data?.message || content.serverError || "Error";
      alert(errorMsg);
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <Sidebar user={user} handleLogout={handleLogout} />

      <div style={styles.mainContent}>
        {/* Translated Title */}
        <h1 style={styles.pageTitle}>{content.profile}</h1>

        <div style={styles.grid}>
          
          {/* COLUMN 1 */}
          <div style={styles.column}>
            
            {/* Details Card */}
            <div className="dashboard-card" style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.icon}>👤</span>
                <h3>{content.personalDetails}</h3>
              </div>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>{content.fullName}</label>
                <input type="text" value={user.name} disabled style={styles.inputDisabled} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>{content.emailAddr}</label>
                <input type="text" value={user.email} disabled style={styles.inputDisabled} />
              </div>
            </div>

            {/* Security Card */}
            <div className="dashboard-card" style={{...styles.card, marginTop: '20px'}}>
              <div style={styles.cardHeader}>
                <span style={styles.icon}>🔒</span>
                <h3>{content.security}</h3>
              </div>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>{content.oldPass}</label>
                <input 
                  type="password" 
                  value={passData.oldPassword}
                  onChange={(e) => setPassData({...passData, oldPassword: e.target.value})}
                  style={styles.input} 
                />
              </div>

              <div style={{display: 'flex', gap: '15px'}}>
                <div style={{flex: 1}}>
                    <label style={styles.label}>{content.newPass}</label>
                    <input 
                      type="password" 
                      value={passData.newPassword}
                      onChange={(e) => setPassData({...passData, newPassword: e.target.value})}
                      style={styles.input} 
                    />
                </div>
                <div style={{flex: 1}}>
                    <label style={styles.label}>{content.confirmNewPass}</label>
                    <input 
                      type="password" 
                      value={passData.confirmPassword}
                      onChange={(e) => setPassData({...passData, confirmPassword: e.target.value})}
                      style={styles.input} 
                    />
                </div>
              </div>

              <button 
                onClick={handlePasswordUpdate} 
                style={styles.btn}
                disabled={loading}
              >
                {loading ? "..." : content.updateBtn}
              </button>
            </div>

          </div>

          {/* COLUMN 2 */}
          <div style={styles.column}>
            
            {/* Predictions */}
            <div className="dashboard-card" style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.icon}>📊</span>
                <h3>{content.recentPred}</h3>
              </div>
              <div style={styles.list}>
                {predictions.map((item, index) => (
                  <div key={index} style={styles.listItem}>
                    <div>
                      <strong style={{color: '#2F5233'}}>{item.crop}</strong>
                      <div style={{fontSize: '0.8rem', color: '#666'}}>{item.location}</div>
                    </div>
                    <div style={{textAlign: 'right'}}>
                      <div style={{fontWeight: 'bold'}}>{item.yield}</div>
                      <div style={{fontSize: '0.7rem', color: '#999'}}>{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location History */}
            <div className="dashboard-card" style={{...styles.card, marginTop: '20px'}}>
              <div style={styles.cardHeader}>
                <span style={styles.icon}>📍</span>
                <h3>{content.savedLoc}</h3>
              </div>
              <div style={styles.list}>
                {pincodeHistory.map((item, index) => (
                  <div key={index} style={styles.listItem}>
                    <div>
                      <strong>{item.code}</strong>
                      <div style={{fontSize: '0.8rem', color: '#666'}}>{item.place}</div>
                    </div>
                    <span style={styles.badge}>{item.lastSearch}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  container: { display: 'flex', background: '#ECEFF1', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" },
  mainContent: { marginLeft: '280px', padding: '40px 60px', flex: 1 },
  pageTitle: { fontSize: '2rem', color: '#263238', marginBottom: '30px', fontWeight: '700' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', maxWidth: '1100px' },
  column: { display: 'flex', flexDirection: 'column' },
  card: { background: 'white', padding: '25px', borderRadius: '16px', border: '1px solid #ECEFF1' }, // removed shadow/transition to let CSS handle it
  cardHeader: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#2F5233' },
  icon: { fontSize: '1.4rem' },
  inputGroup: { marginBottom: '15px' },
  label: { display: 'block', marginBottom: '8px', color: '#546E7A', fontSize: '0.9rem' },
  input: { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #CFD8DC', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' },
  inputDisabled: { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ECEFF1', background: '#F5F5F5', color: '#78909C', boxSizing: 'border-box' },
  btn: { padding: '12px', width: '100%', marginTop: '20px', background: '#2F5233', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', transition: '0.3s' },
  list: { display: 'flex', flexDirection: 'column', gap: '10px' },
  listItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#F9FAFB', borderRadius: '10px', border: '1px solid #F0F0F0' },
  badge: { background: '#E8F5E9', color: '#2E7D32', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '600' }
};

export default Profile;