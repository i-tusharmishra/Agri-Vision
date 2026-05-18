import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Sidebar from '../components/Sidebar';
import { LanguageContext } from '../context/LanguageContext';
import { cropStandards, soilPresets, unitMultipliers, getConfidenceLevel } from '../utils/yieldData';
import { cropDetails } from '../utils/cropData'; 
import '../App.css'; 

// --- FULL LIST OF INDIAN STATES & UTs ---
const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", 
  "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", 
  "Lakshadweep", "Puducherry"
];

const CropYield = () => {
  const navigate = useNavigate();
  const { content } = useContext(LanguageContext);
  const [user, setUser] = useState({});

  // --- API KEY ---
  const API_KEY = '62a8598b901dc7f7438846c2c6dded0b'; 

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    state: '', region: '', pincode: '', crop: '', sowingDate: '',
    landSize: '', unit: 'acre', soilType: 'loamy', irrigation: 'tubewell',
    nitrogen: '', phosphorus: '', potassium: '', ph: ''
  });

  const [locationData, setLocationData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) navigate('/login');
    else setUser(JSON.parse(userData));
  }, [navigate]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // --- STEP 1: FETCH LOCATION & WEATHER ---
  const handlePincodeSearch = async () => {
    if (formData.pincode.length !== 6) {
      alert("Please enter a valid 6-digit Pincode.");
      return;
    }
    setLoading(true);
    try {
      const pinRes = await axios.get(`https://api.postalpincode.in/pincode/${formData.pincode}`);
      if(pinRes.data[0].Status === "Success") {
        const place = pinRes.data[0].PostOffice[0];
        const city = place.District;
        const state = place.State;
        
        setLocationData(`${city}, ${state}`);
        setFormData(prev => ({ ...prev, region: city, state: state }));

        const weatherRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeatherData({
          temp: weatherRes.data.main.temp,
          humidity: weatherRes.data.main.humidity,
          rain: weatherRes.data.rain ? true : false,
          main: weatherRes.data.weather[0].main
        });
      } else {
        alert("Invalid Pincode");
        setLocationData(null);
      }
    } catch (err) {
      console.error(err);
      alert("Error fetching location.");
    }
    setLoading(false);
  };

  // --- STEP 2: AUTO-FILL SOIL ---
  const handleSoilChange = (e) => {
    const selectedSoil = e.target.value;
    const preset = soilPresets[selectedSoil];
    if (preset) {
      setFormData(prev => ({
        ...prev, 
        soilType: selectedSoil, 
        nitrogen: preset.n, phosphorus: preset.p, potassium: preset.k, ph: preset.ph 
      }));
    } else {
      setFormData(prev => ({ ...prev, soilType: selectedSoil }));
    }
  };

  // --- CALCULATION & SAVING LOGIC ---
  const calculateYield = () => {
    if (!formData.crop || !formData.landSize || !formData.sowingDate) {
      alert("Please fill all fields.");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      const cropKey = formData.crop.toLowerCase();
      const standard = cropStandards[cropKey] || cropStandards['wheat']; 
      const cropInfo = cropDetails[cropKey] || { season: 'Rabi' };

      const areaInHectares = parseFloat(formData.landSize) * unitMultipliers[formData.unit];

      // Weather Score
      let weatherScore = 1;
      let weatherStatus = "Optimal";
      if (weatherData) {
        if (weatherData.temp > standard.maxTemp + 5) { weatherScore -= 0.3; weatherStatus = "Heat Risk"; }
        if (weatherData.temp < standard.minTemp - 5) { weatherScore -= 0.2; weatherStatus = "Cold Risk"; }
      }

      // Season Score
      const sowingMonth = new Date(formData.sowingDate).getMonth() + 1;
      const idealMonth = standard.idealMonth || 11;
      const monthDiff = Math.abs(sowingMonth - idealMonth);
      const seasonScore = monthDiff > 2 ? 0.7 : 1.0;

      // Irrigation Score
      let waterScore = 1;
      if (formData.irrigation === 'rainfed' && !weatherData?.rain) waterScore = 0.6;
      if (formData.irrigation === 'drip') waterScore = 1.1;

      // Final Math
      const totalScore = (seasonScore * 0.4) + (weatherScore * 0.3) + (waterScore * 0.3);
      const yieldPerHa = standard.baseYield * totalScore; 
      const totalTons = (yieldPerHa * areaInHectares) / 10; 
      const revenueCalc = standard.baseYield * totalScore * areaInHectares * standard.price;

      // --- SAVE TO HISTORY ---
      const newRecord = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        crop: getCropLabel(formData.crop),
        yield: totalTons.toFixed(2),
        revenue: revenueCalc.toFixed(0),
        confidence: getConfidenceLevel(totalScore * 100),
        land: `${formData.landSize} ${formData.unit}`
      };

      const existingHistory = JSON.parse(localStorage.getItem('predictionHistory') || '[]');
      localStorage.setItem('predictionHistory', JSON.stringify([newRecord, ...existingHistory]));
      // ---------------------

      setResult({
        tons: totalTons.toFixed(2),
        weatherFactor: weatherStatus,
        confidence: getConfidenceLevel(totalScore * 100),
        bestSeason: cropInfo.season || "Rabi",
        score: (totalScore * 100).toFixed(0)
      });

      setStep(3);
      setLoading(false);
    }, 1500);
  };

  const getCropLabel = (key) => {
    const season = cropDetails[key]?.season || "";
    const name = key.charAt(0).toUpperCase() + key.slice(1);
    return season ? `${name} (${content[season.toLowerCase()] || season})` : name;
  };

  return (
    <div style={styles.container}>
      <Sidebar user={user} />

      <div style={styles.mainContent}>
        
        {/* --- HEADER --- */}
        <div style={styles.headerSection}>
          <h1 style={styles.pageTitle}>{content.card1Title}</h1>
          <p style={styles.subTitle}>AI-driven precision for your farm's future.</p>
        </div>

        {/* --- WIZARD PROGRESS BAR --- */}
        <div style={styles.wizardHeader}>
            <div style={step >= 1 ? styles.stepActive : styles.stepInactive}>
                <div style={styles.stepCircle}>{step > 1 ? '✓' : '1'}</div>
                <span>{content.step1}</span>
            </div>
            <div style={styles.line}></div>
            <div style={step >= 2 ? styles.stepActive : styles.stepInactive}>
                <div style={styles.stepCircle}>{step > 2 ? '✓' : '2'}</div>
                <span>{content.step2}</span>
            </div>
            <div style={styles.line}></div>
            <div style={step >= 3 ? styles.stepActive : styles.stepInactive}>
                <div style={styles.stepCircle}>3</div>
                <span>{content.step3}</span>
            </div>
        </div>

        <div style={styles.contentGrid}>
            
            {/* --- LEFT: MAIN FORM CARD --- */}
            <div style={styles.mainCard}>
                
                {/* STEP 1: LOCATION */}
                {step === 1 && (
                    <div style={styles.stepContainer}>
                        <h2 style={styles.cardTitle}>📍 {content.step1}</h2>
                        
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>{content.selectState}</label>
                            <div style={styles.customSelectWrapper}>
                              <select name="state" value={formData.state} onChange={handleChange} style={styles.select}>
                                  <option value="">-- {content.selectState} --</option>
                                  {indianStates.map(st => (
                                    <option key={st} value={st}>{st}</option>
                                  ))}
                              </select>
                              <span style={styles.selectArrow}>▼</span>
                            </div>
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label}>{content.enterPincode}</label>
                            <div style={{display: 'flex', gap: '10px'}}>
                                <input 
                                    type="text" 
                                    name="pincode" 
                                    value={formData.pincode} 
                                    onChange={handleChange} 
                                    placeholder="e.g. 144411" 
                                    maxLength="6"
                                    style={styles.input}
                                />
                                <button onClick={handlePincodeSearch} style={styles.searchBtn}>
                                    {loading ? "..." : "🔍"}
                                </button>
                            </div>
                        </div>

                        {locationData && (
                            <div style={styles.verifiedBadge}>
                                <span style={{fontSize:'1.2rem'}}>✅</span> 
                                <div>
                                  <strong>{content.locationFound}</strong>
                                  <div style={{color:'#004D40'}}>{locationData}</div>
                                </div>
                            </div>
                        )}

                        <button 
                            onClick={() => locationData ? setStep(2) : alert("Please search & verify pincode first.")} 
                            style={styles.nextBtn}
                        >
                            {content.nextBtn} →
                        </button>
                    </div>
                )}

                {/* STEP 2: CROP DETAILS */}
                {step === 2 && (
                    <div style={styles.stepContainer}>
                        <div style={{textAlign:'center', marginBottom:'20px'}}>
                            <span style={{fontSize:'3rem', display:'block', marginBottom:'10px'}}>🌾</span>
                            <h2 style={styles.cardTitle}>{content.step2}</h2>
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label}>{content.selectCropLabel}</label>
                            <div style={styles.customSelectWrapper}>
                              <select name="crop" value={formData.crop} onChange={handleChange} style={styles.select}>
                                  <option value="">-- {content.selectCropLabel} --</option>
                                  {Object.keys(cropDetails).map(key => (
                                      <option key={key} value={key}>
                                          {getCropLabel(key)}
                                      </option>
                                  ))}
                              </select>
                              <span style={styles.selectArrow}>▼</span>
                            </div>
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label}>{content.sowingDateLabel}</label>
                            <input type="date" name="sowingDate" value={formData.sowingDate} onChange={handleChange} style={styles.input} />
                        </div>

                        <div style={styles.row}>
                            <div style={{flex: 2}}>
                                <label style={styles.label}>{content.landSizeLabel}</label>
                                <input type="number" name="landSize" value={formData.landSize} onChange={handleChange} placeholder="e.g. 5" style={styles.input} />
                            </div>
                            <div style={{flex: 1}}>
                                <label style={styles.label}>{content.unitLabel}</label>
                                <div style={styles.customSelectWrapper}>
                                  <select name="unit" value={formData.unit} onChange={handleChange} style={styles.select}>
                                      <option value="acre">Acre</option>
                                      <option value="hectare">Hectare</option>
                                      <option value="sqft">Sq. Ft</option>
                                      <option value="guntha">Guntha</option>
                                  </select>
                                  <span style={styles.selectArrow}>▼</span>
                                </div>
                            </div>
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label}>{content.soilTypeLabel}</label>
                            <div style={styles.customSelectWrapper}>
                              <select name="soilType" value={formData.soilType} onChange={handleSoilChange} style={styles.select}>
                                  <option value="alluvial">Alluvial Soil</option>
                                  <option value="black">Black Soil</option>
                                  <option value="red">Red Soil</option>
                                  <option value="loamy">Loamy Soil</option>
                                  <option value="sandy">Sandy Soil</option>
                                  <option value="clay">Clay Soil</option>
                              </select>
                              <span style={styles.selectArrow}>▼</span>
                            </div>
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label}>{content.irrigationLabel}</label>
                            <div style={styles.customSelectWrapper}>
                              <select name="irrigation" value={formData.irrigation} onChange={handleChange} style={styles.select}>
                                  <option value="tubewell">{content.tubewell}</option>
                                  <option value="canal">{content.canal}</option>
                                  <option value="drip">{content.drip}</option>
                                  <option value="sprinkler">{content.sprinkler}</option>
                                  <option value="flood">{content.flood}</option>
                                  <option value="rainfed">{content.rainfed}</option>
                              </select>
                              <span style={styles.selectArrow}>▼</span>
                            </div>
                        </div>

                        <div style={styles.btnRow}>
                            <button onClick={() => setStep(1)} style={styles.backBtn}>← {content.backBtn}</button>
                            <button onClick={calculateYield} style={styles.nextBtn}>
                                {loading ? "Calculating..." : content.calculateBtn}
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 3: RESULTS */}
                {step === 3 && result && (
                    <div style={styles.stepContainer}>
                        <div style={{textAlign:'center'}}>
                            <div style={styles.iconBox}>🌱</div>
                            <h2 style={{color: '#333', marginBottom: '5px'}}>{content.estimatedYield}</h2>
                            <h3 style={{color: '#757575', marginTop: 0}}>{formData.crop.toUpperCase()}</h3>
                            
                            <div style={styles.resultDisplay}>
                                <h1 style={styles.bigNumber}>{result.tons} <span style={{fontSize:'1.5rem'}}>Tons</span></h1>
                            </div>
                        </div>

                        <div style={styles.statsGrid}>
                            <div style={styles.statBox}>
                                <small>{content.confidence}</small>
                                <strong style={{color: result.confidence==='High'?'#2E7D32':'#F57F17'}}>
                                    {result.confidence}
                                </strong>
                            </div>
                            <div style={styles.statBox}>
                                <small>{content.weatherFactor}</small>
                                <strong>{result.weatherFactor}</strong>
                            </div>
                        </div>

                        <div style={styles.recommendationBox}>
                            <h4>📝 {content.recommendations}</h4>
                            <ul>
                                <li>✅ {content.bestSeason}: <strong>{result.bestSeason}</strong></li>
                                <li>✅ Soil suitability score: <strong>{result.score}%</strong></li>
                            </ul>
                        </div>

                        <button onClick={() => {setStep(1); setResult(null);}} style={styles.nextBtn}>
                            🔄 {content.newPrediction}
                        </button>
                    </div>
                )}

            </div>

            {/* --- RIGHT: UNIT CONVERSION CARD --- */}
            <div style={styles.sideCard}>
                <h3 style={{marginTop:0, color:'#2E7D32', fontSize: '1.1rem'}}>📏 {content.conversionTitle}</h3>
                <ul style={styles.convList}>
                    <li>1 Hectare = <strong>2.47 Acres</strong></li>
                    <li>1 Acre = <strong>43,560 Sq. Ft</strong></li>
                    <li>1 Hectare = <strong>107,639 Sq. Ft</strong></li>
                    <li>1 Guntha = <strong>1089 Sq. Ft</strong></li>
                </ul>
                <p style={styles.note}>{content.conversionNote}</p>
            </div>

        </div>
      </div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  container: { display: 'flex', background: '#F4F7F6', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" },
  mainContent: { marginLeft: '280px', padding: '40px 60px', flex: 1 },
  headerSection: { textAlign: 'center', marginBottom: '40px' },
  pageTitle: { fontSize: '2.2rem', color: '#1B5E20', margin: '0 0 10px 0', fontWeight: '700' },
  subTitle: { color: '#546E7A', fontSize: '1rem', margin: 0 },
  wizardHeader: { display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' },
  stepActive: { display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#2E7D32', fontWeight: 'bold', flex: 1 },
  stepInactive: { display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#CFD8DC', flex: 1 },
  stepCircle: { width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '2px solid', borderColor: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px', fontWeight: 'bold', transition: '0.3s' },
  line: { height: '3px', flex: 2, background: '#E0E0E0', marginTop: '-25px' },
  contentGrid: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', alignItems: 'start', maxWidth: '1000px', margin: '0 auto' },
  mainCard: { background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', minHeight: '550px', position: 'relative', overflow: 'hidden' },
  sideCard: { background: '#E8F5E9', borderRadius: '24px', padding: '25px', color: '#1B5E20', boxShadow: '0 8px 20px rgba(46, 125, 50, 0.1)' },
  stepContainer: { animation: 'fadeIn 0.5s ease-out' },
  cardTitle: { textAlign: 'center', color: '#333', marginBottom: '30px', fontWeight: '600' },
  customSelectWrapper: { position: 'relative', display: 'flex', alignItems: 'center' },
  select: { width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #E0E0E0', fontSize: '1rem', background: 'white', appearance: 'none', cursor: 'pointer', outline: 'none', transition: '0.2s', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' },
  selectArrow: { position: 'absolute', right: '15px', color: '#757575', pointerEvents: 'none', fontSize: '0.8rem' },
  inputGroup: { marginBottom: '25px' },
  row: { display: 'flex', gap: '20px', marginBottom: '25px' },
  label: { display: 'block', marginBottom: '8px', color: '#455A64', fontWeight: '600', fontSize: '0.9rem' },
  input: { width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #E0E0E0', fontSize: '1rem', outline: 'none', boxSizing: 'border-box', transition: '0.2s', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' },
  searchBtn: { padding: '0 20px', borderRadius: '12px', border: 'none', background: '#37474F', color: 'white', cursor: 'pointer', fontWeight: '600', transition: '0.3s' },
  nextBtn: { width: '100%', padding: '16px', borderRadius: '12px', background: 'linear-gradient(135deg, #43A047, #2E7D32)', color: 'white', border: 'none', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px', transition: '0.3s', boxShadow: '0 4px 15px rgba(46, 125, 50, 0.3)' },
  backBtn: { padding: '16px 30px', borderRadius: '12px', background: '#F5F5F5', color: '#546E7A', border: 'none', fontSize: '1rem', cursor: 'pointer', fontWeight: '600' },
  btnRow: { display: 'flex', gap: '15px', marginTop: '30px' },
  verifiedBadge: { background: '#E0F2F1', color: '#00695C', padding: '15px', borderRadius: '12px', marginTop: '15px', display: 'flex', alignItems: 'center', gap: '15px', border: '1px solid #B2DFDB' },
  iconBox: { width: '70px', height: '70px', background: '#F1F8E9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '2rem', color: '#2E7D32' },
  resultDisplay: { background: '#FAFAFA', padding: '25px', borderRadius: '16px', margin: '25px 0', border: '1px dashed #BDBDBD' },
  bigNumber: { fontSize: '3.5rem', color: '#2E7D32', margin: 0, fontWeight: '800' },
  statsGrid: { display: 'flex', gap: '15px', justifyContent: 'space-between', marginBottom: '25px' },
  statBox: { flex: 1, background: 'white', border: '1px solid #F0F0F0', padding: '15px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' },
  recommendationBox: { background: '#FFF8E1', padding: '20px', borderRadius: '12px', color: '#F57F17', textAlign: 'left', fontSize: '0.95rem', borderLeft: '5px solid #FFCA28' },
  convList: { paddingLeft: '20px', lineHeight: '2', color: '#333' },
  note: { fontSize: '0.8rem', marginTop: '20px', opacity: 0.7, fontStyle: 'italic', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '10px' }
};

// Keyframe Animation
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);

export default CropYield;