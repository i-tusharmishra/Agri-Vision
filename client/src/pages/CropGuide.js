import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { LanguageContext } from '../context/LanguageContext';
import { cropDetails } from '../utils/cropData';
import '../App.css'; 

const CropGuide = () => {
  const navigate = useNavigate();
  const { content } = useContext(LanguageContext);
  const [user, setUser] = useState({});
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCrop, setSelectedCrop] = useState(null); 

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

  // Helper: Get Translated Value for attributes
  const t = (key) => content[key] || key;

  // Helper: Get Translated Crop Name
  const getCropName = (key) => {
    const dict = content.crops || {};
    return dict[key] || key.charAt(0).toUpperCase() + key.slice(1);
  };

  // --- IMAGE DATABASE (Real Photos) ---
  const cropImages = {
    // Cereals
    "wheat": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80",
    "rice": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
    "paddy": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
    "maize": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&q=80",
    "barley": "https://images.unsplash.com/photo-1530268578403-ade584336291?auto=format&fit=crop&w=400&q=80",
    "millet": "https://images.unsplash.com/photo-1644347704207-6b37fc929237?auto=format&fit=crop&w=400&q=80",
    "bajra": "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?auto=format&fit=crop&w=400&q=80", // Field generic
    
    // Cash Crops
    "cotton": "https://images.unsplash.com/photo-1594294528723-6447d963500d?auto=format&fit=crop&w=400&q=80",
    "sugarcane": "https://images.unsplash.com/photo-1601633469036-7c0b0646c245?auto=format&fit=crop&w=400&q=80",
    "tea": "https://images.unsplash.com/photo-1564750975191-230911b31a38?auto=format&fit=crop&w=400&q=80",
    "coffee": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80",
    "mustard": "https://images.unsplash.com/photo-1528659560413-2b638927902d?auto=format&fit=crop&w=400&q=80",
    "sunflower": "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=400&q=80",
    "coconut": "https://images.unsplash.com/photo-1531238930509-3221d8b7a2d7?auto=format&fit=crop&w=400&q=80",
    
    // Vegetables
    "potato": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80",
    "tomato": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80",
    "onion": "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&w=400&q=80",
    "carrot": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80",
    "garlic": "https://images.unsplash.com/photo-1530999528776-322b27a3c393?auto=format&fit=crop&w=400&q=80",
    "chilli": "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=400&q=80",
    "ginger": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80",
    
    // Fruits
    "apple": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80",
    "banana": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80",
    "mango": "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80",
    "grapes": "https://images.unsplash.com/photo-1537640538965-1756e22d1d29?auto=format&fit=crop&w=400&q=80",
    "orange": "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=400&q=80",
    "pomegranate": "https://images.unsplash.com/photo-1615485925694-a03977593c84?auto=format&fit=crop&w=400&q=80",
    
    // Pulses
    "soyabean": "https://images.unsplash.com/photo-1622340333798-927d6d744b6c?auto=format&fit=crop&w=400&q=80",
    "chickpea": "https://images.unsplash.com/photo-1515543904379-3d757afe726e?auto=format&fit=crop&w=400&q=80",
    "gram": "https://images.unsplash.com/photo-1515543904379-3d757afe726e?auto=format&fit=crop&w=400&q=80",
  };

  // --- NEW: Smart Image Fetcher ---
  const getCropImageUrl = (cropKey) => {
    // 1. Check if we have a real photo mapping
    const lowerKey = cropKey.toLowerCase();
    if (cropImages[lowerKey]) {
      return cropImages[lowerKey];
    }
    
    // 2. Fallback: Use a generic "Agriculture" image for unknown crops
    // This is much better than a colored box!
    return "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&q=80";
  };

  // --- FILTER LOGIC ---
  const cropKeys = Object.keys(cropDetails);
  
  const filteredCrops = cropKeys.filter(key => {
    const crop = cropDetails[key];
    const translatedName = getCropName(key).toLowerCase();
    const categoryMatch = activeCategory === 'all' || crop.category === activeCategory;
    const searchMatch = key.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        translatedName.includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div style={styles.container}>
      <Sidebar user={user} handleLogout={handleLogout} />

      <div style={styles.mainContent}>
        
        {/* HEADER */}
        <div style={styles.header}>
            <h1 style={styles.pageTitle}>{content.encyclopediaTitle}</h1>
            <input 
                type="text" 
                placeholder={content.searchCrop}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchBar}
            />
        </div>

        {/* TABS */}
        <div style={styles.tabs}>
            {['all', 'grain', 'vegetable', 'fruit', 'commercial', 'pulse'].map(cat => (
                <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                        ...styles.tabBtn, 
                        background: activeCategory === cat ? '#2E7D32' : 'white',
                        color: activeCategory === cat ? 'white' : '#546E7A',
                        border: activeCategory === cat ? 'none' : '1px solid #CFD8DC'
                    }}
                >
                    {content[cat] || cat.toUpperCase()}
                </button>
            ))}
        </div>

        {/* CROP GRID WITH IMAGES */}
        <div style={styles.grid}>
            {filteredCrops.map(key => (
                <div 
                    key={key} 
                    className="dashboard-card"
                    style={styles.card}
                    onClick={() => setSelectedCrop({ key, ...cropDetails[key] })}
                >
                    {/* REAL IMAGE */}
                    <div style={styles.imageWrapper}>
                      <img 
                        src={getCropImageUrl(key)} 
                        alt={getCropName(key)} 
                        style={styles.cardImage}
                        loading="lazy" 
                      />
                      <div style={styles.imageOverlay} />
                    </div>
                    
                    <div style={styles.cardContent}>
                      <h3 style={styles.cropName}>{getCropName(key)}</h3>
                      <span style={styles.seasonBadge}>{t(cropDetails[key].season)}</span>
                    </div>
                </div>
            ))}
        </div>

        {/* MODAL */}
        {selectedCrop && (
            <div style={styles.modalOverlay} onClick={() => setSelectedCrop(null)}>
                <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                    <div style={styles.modalHeader}>
                        <h2>{getCropName(selectedCrop.key)}</h2>
                        <button onClick={() => setSelectedCrop(null)} style={styles.closeBtn}>&times;</button>
                    </div>
                    
                    {/* Big Image in Modal */}
                    <img 
                      src={getCropImageUrl(selectedCrop.key)} 
                      alt={getCropName(selectedCrop.key)} 
                      style={styles.modalImage}
                    />
                    
                    <div style={styles.modalBody}>
                        <div style={styles.detailRow}><span style={styles.label}>🗓️ {content.seasonLabel}:</span><span style={styles.value}>{t(selectedCrop.season)}</span></div>
                        <div style={styles.detailRow}><span style={styles.label}>🌱 {content.soilLabel}:</span><span style={styles.value}>{t(selectedCrop.soil)}</span></div>
                        <div style={styles.detailRow}><span style={styles.label}>💧 {content.waterLabel}:</span><span style={styles.value}>{t(selectedCrop.water)}</span></div>
                        <div style={styles.detailRow}><span style={styles.label}>🌡️ {content.tempLabel}:</span><span style={styles.value}>{selectedCrop.temp}</span></div>
                    </div>
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

// --- STYLES (Improved for Images) ---
const styles = {
  container: { display: 'flex', background: '#ECEFF1', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" },
  mainContent: { marginLeft: '280px', padding: '40px', flex: 1 },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' },
  pageTitle: { fontSize: '2rem', color: '#263238', fontWeight: '700', margin: 0 },
  searchBar: { padding: '12px 20px', borderRadius: '25px', border: '1px solid #CFD8DC', width: '300px', outline: 'none', fontSize: '1rem' },
  
  tabs: { display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' },
  tabBtn: { padding: '8px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: '500', transition: '0.3s' },
  
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '25px' },
  
  // Card Styles
  card: { 
    background: 'white', borderRadius: '16px', cursor: 'pointer',
    display: 'flex', flexDirection: 'column', overflow: 'hidden', 
    padding: 0, boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: '0.3s'
  },
  imageWrapper: { position: 'relative', width: '100%', height: '150px' },
  cardImage: { width: '100%', height: '100%', objectFit: 'cover' },
  imageOverlay: { position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40px', background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' },
  
  cardContent: { padding: '15px', textAlign: 'center' },
  cropName: { margin: '0 0 8px 0', color: '#37474F', fontSize: '1.2rem', fontWeight: '700' },
  seasonBadge: { background: '#E8F5E9', color: '#2E7D32', padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' },

  // Modal Styles
  modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(3px)' },
  modal: { background: 'white', padding: '25px', borderRadius: '24px', width: '450px', maxWidth: '90%', animation: 'popIn 0.3s ease', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' },
  modalHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' },
  modalImage: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px', marginBottom: '20px' },
  closeBtn: { background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: '#546E7A' },
  modalBody: { display: 'flex', flexDirection: 'column', gap: '12px' },
  detailRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#F5F5F5', borderRadius: '12px' },
  label: { color: '#546E7A', fontWeight: '500' },
  value: { color: '#263238', fontWeight: '700' }
};

export default CropGuide;