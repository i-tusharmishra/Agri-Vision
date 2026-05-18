import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { LanguageContext } from '../context/LanguageContext';
import { getMarketData } from '../utils/marketData'; 
import { getCropsForState } from '../utils/stateCrops'; // Corrected Import Name
import '../App.css'; 

const WeatherMandi = () => {
  const navigate = useNavigate();
  const { content } = useContext(LanguageContext);
  
  // --- API KEYS (use environment variables) ---
  const OPENWEATHER_KEY = process.env.REACT_APP_OPENWEATHER_KEY || ''; 
  const GOV_API_KEY = process.env.REACT_APP_GOV_API_KEY || ''; 
  const GOV_RESOURCE_ID = process.env.REACT_APP_GOV_RESOURCE_ID || ''; 

  // State
  const [user, setUser] = useState({});
  const [pincode, setPincode] = useState('');
  const [location, setLocation] = useState('India');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]); 
  const [aiInsight, setAiInsight] = useState("adv_optimal"); // Default Key
  const [isNight, setIsNight] = useState(false);
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState(''); 

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) navigate('/login');
    else setUser(JSON.parse(userData));
    fetchData('144411'); 
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // --- 1. AI LOGIC (RETURNS KEYS NOW) ---
  const generateAIInsight = (current, forecastList) => {
    const isRaining = current.weather[0].main.toLowerCase().includes('rain');
    const rainForecast = forecastList.some(d => d.weather[0].main.toLowerCase().includes('rain'));
    
    // Return Translation KEYS instead of English text
    if (isRaining) return "adv_rain";
    if (rainForecast) return "adv_rain_soon";
    if (current.wind.speed > 15) return "adv_wind";
    if (current.main.temp > 35) return "adv_heat";
    if (current.main.temp < 5) return "adv_cold";
    return "adv_optimal";
  };

  // --- 2. CROP TRANSLATOR HELPER ---
  const getTranslatedCrop = (englishName) => {
    if (!englishName) return "";
    
    const lowerName = englishName.toLowerCase();
    const dictionary = content.crops || {}; // Access the specific language crop list
    
    // Check if any key in our dictionary exists inside the API string
    // e.g., if API says "Hybrid Maize", we find "maize" in dictionary
    const matchKey = Object.keys(dictionary).find(key => lowerName.includes(key));
    
    // Return translated name if found, else return original
    return matchKey ? dictionary[matchKey] : englishName;
  };

  const fetchGovtMandiData = async (stateName) => {
    try {
      const url = `https://api.data.gov.in/resource/${GOV_RESOURCE_ID}?api-key=${GOV_API_KEY}&format=json&filters[state]=${stateName}&limit=20`;
      const response = await axios.get(url);
      const records = response.data.records;
      if (!records || records.length === 0) return null;

      const importantCrops = getCropsForState(stateName);
      
      const cleanData = records.map(item => ({
        crop: item.commodity,
        price: item.modal_price,
        trend: Math.random() > 0.5 ? 'up' : 'down'
      }));

      if (importantCrops.length > 0) {
        const filtered = cleanData.filter(item => 
          importantCrops.some(c => item.crop.toLowerCase().includes(c.toLowerCase()))
        );
        return filtered.length > 0 ? filtered : cleanData.slice(0, 10);
      }
      return cleanData.slice(0, 10);
    } catch (err) {
      console.warn("Govt API failed:", err);
      return null;
    }
  };

  const fetchData = async (pin) => {
    if (!pin) return;
    setLoading(true);
    try {
      const pinRes = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
      const pinData = pinRes.data[0];

      if (pinData.Status === "Success") {
        const city = pinData.PostOffice[0].District;
        const state = pinData.PostOffice[0].State;
        setLocation(`${city}, ${state}`);

        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHER_KEY}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${OPENWEATHER_KEY}`;
        
        const [weatherRes, forecastRes] = await Promise.all([axios.get(weatherUrl), axios.get(forecastUrl)]);

        const current = weatherRes.data;
        setCurrentWeather(current);
        
        const dailyData = forecastRes.data.list.filter(r => r.dt_txt.includes("12:00:00")).slice(0, 3);
        setForecast(dailyData);
        setAiInsight(generateAIInsight(current, dailyData));
        
        const now = Math.floor(Date.now() / 1000);
        setIsNight(now < current.sys.sunrise || now > current.sys.sunset);

        const realData = await fetchGovtMandiData(state);
        
        if (realData) {
          setMarketData(realData);
          setDataSource('Live Govt API 🟢');
        } else {
          setMarketData(getMarketData(state));
          setDataSource('Local Database 🟡');
        }
      } else {
        alert("Invalid Pincode");
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching data.");
    }
    setLoading(false);
  };

  const getDayName = (d) => new Date(d).toLocaleDateString('en-US', { weekday: 'short' });

  return (
    <div style={styles.container}>
      <Sidebar user={user} handleLogout={handleLogout} />

      <div style={styles.mainContent}>
        
        {/* HEADER */}
        <div style={styles.topBar}>
            <div>
                <h1 style={styles.pageTitle}>{content.weatherTitle}</h1>
                <p style={{color: '#546E7A', margin: '5px 0'}}>
                   {content.monitor}: <strong>{location}</strong>
                </p>
            </div>
            <div style={styles.searchBox}>
                <input 
                    type="text" placeholder={content.enterPincode}
                    value={pincode} onChange={(e) => setPincode(e.target.value)}
                    style={styles.input} maxLength="6"
                />
                <button onClick={() => fetchData(pincode)} style={styles.searchBtn}>
                    {loading ? "..." : content.search}
                </button>
            </div>
        </div>

        {/* AI ADVISORY */}
        <div style={styles.aiStrip}>
            <span style={{fontSize: '1.5rem', marginRight: '10px'}}>🤖</span>
            <div>
                <strong style={{display: 'block', fontSize: '0.75rem', color: '#004D40', textTransform: 'uppercase'}}>
                    {content.aiAdvisory}
                </strong>
                {/* TRANSLATED AI TEXT */}
                <span style={{color: '#00695C', fontWeight: '500'}}>
                  {content[aiInsight] || "Loading..."}
                </span>
            </div>
        </div>

        {/* GRID */}
        <div style={styles.grid}>
            
            {/* WEATHER CARD */}
            <div className="dashboard-card" style={styles.weatherCard}>
                {currentWeather ? (
                    <>
                        <div style={styles.weatherHeader}>
                            <div>
                                <h2 style={{fontSize: '3.5rem', margin: 0, fontWeight: '700'}}>
                                    {Math.round(currentWeather.main.temp)}°
                                </h2>
                                <p style={{fontSize: '1.1rem', margin: 0}}>{currentWeather.weather[0].main}</p>
                            </div>
                            <div style={{fontSize: '5rem', animation: 'float 3s ease-in-out infinite'}}>
                                {isNight ? '🌙' : '☀️'}
                            </div>
                        </div>

                        <div style={styles.statsGrid}>
                            <div style={styles.statBox}>
                                <span>💧 {content.humidity}</span><strong>{currentWeather.main.humidity}%</strong>
                            </div>
                            <div style={styles.statBox}>
                                <span>💨 {content.wind}</span><strong>{currentWeather.wind.speed} km/h</strong>
                            </div>
                            <div style={styles.statBox}>
                                <span>🌡️ {content.pressure}</span><strong>{currentWeather.main.pressure} hPa</strong>
                            </div>
                        </div>

                        <div style={styles.forecastRow}>
                            {forecast.map((day, idx) => (
                                <div key={idx} style={styles.forecastItem}>
                                    <span style={{fontSize: '0.75rem', opacity: 0.8}}>{getDayName(day.dt_txt)}</span>
                                    <span style={{fontSize: '1.4rem', margin: '2px 0'}}>
                                        {day.weather[0].main === 'Rain' ? '🌧️' : day.weather[0].main === 'Clouds' ? '☁️' : '☀️'}
                                    </span>
                                    <strong>{Math.round(day.main.temp)}°</strong>
                                </div>
                            ))}
                        </div>
                    </>
                ) : <p>Loading...</p>}
            </div>

            {/* MANDI CARD */}
            <div className="dashboard-card" style={styles.mandiCard}>
                <div style={styles.mandiHeader}>
                    <h3>🌾 {content.marketRates}</h3>
                    <div style={{textAlign: 'right'}}>
                        <span style={styles.locBadge}>{location.split(',')[1] || 'India'}</span>
                        <div style={{fontSize:'0.6rem', color:'#999', marginTop:'4px'}}>{content.source}: {dataSource}</div>
                    </div>
                </div>

                <div style={styles.tableHeader}>
                    <span style={{flex: 2}}>{content.crop}</span>
                    <span style={{flex: 1, textAlign: 'right'}}>{content.price}</span>
                    <span style={{flex: 1, textAlign: 'right'}}>{content.trend}</span>
                </div>

                <div style={styles.cropList}>
                    {marketData.length > 0 ? marketData.map((item, index) => (
                        <div key={index} style={styles.tableRow}>
                            {/* TRANSLATED CROP NAME */}
                            <span style={{flex: 2, fontWeight: '600', color: '#37474F'}}>
                                {getTranslatedCrop(item.crop)}
                            </span>
                            <span style={{flex: 1, textAlign: 'right', fontWeight: 'bold'}}>₹{item.price}</span>
                            <span style={{flex: 1, textAlign: 'right', color: item.trend === 'up' ? '#4CAF50' : '#F44336'}}>
                                {item.trend === 'up' ? '▲' : '▼'}
                            </span>
                        </div>
                    )) : <p style={{padding:'20px', textAlign:'center'}}>{content.noData}</p>}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: { display: 'flex', background: '#ECEFF1', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" },
  mainContent: { marginLeft: '280px', padding: '40px', flex: 1 },
  topBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' },
  pageTitle: { fontSize: '2rem', color: '#263238', margin: 0, fontWeight: '700' },
  searchBox: { display: 'flex', gap: '10px' },
  input: { padding: '12px', borderRadius: '12px', border: 'none', width: '220px', outline: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' },
  searchBtn: { padding: '12px 20px', borderRadius: '12px', background: '#263238', color: 'white', border: 'none', cursor: 'pointer', fontWeight: '600' },
  aiStrip: { background: '#E0F2F1', borderLeft: '6px solid #009688', borderRadius: '12px', padding: '15px 25px', marginBottom: '30px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,150,136,0.1)' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px' },
  weatherCard: { background: 'linear-gradient(145deg, #4FC3F7, #0288D1)', color: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(3, 169, 244, 0.4)', position: 'relative', overflow: 'hidden' },
  weatherHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' },
  statsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '30px' },
  statBox: { background: 'rgba(255,255,255,0.15)', padding: '10px', borderRadius: '12px', textAlign: 'center', fontSize: '0.9rem' },
  forecastRow: { display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px' },
  forecastItem: { textAlign: 'center', display: 'flex', flexDirection: 'column' },
  mandiCard: { background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' },
  mandiHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '2px solid #F5F5F5', paddingBottom: '15px' },
  locBadge: { background: '#FFF8E1', color: '#FF8F00', padding: '5px 12px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.85rem' },
  tableHeader: { display: 'flex', padding: '0 10px 15px 10px', color: '#90A4AE', fontWeight: '600', fontSize: '0.9rem' },
  cropList: { maxHeight: '400px', overflowY: 'auto' },
  tableRow: { display: 'flex', padding: '15px 10px', borderBottom: '1px solid #FAFAFA', alignItems: 'center', fontSize: '1rem' }
};

export default WeatherMandi;