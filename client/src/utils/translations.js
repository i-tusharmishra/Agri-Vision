export const translations = {
  en: { 
    label: "English", 
    welcome: "Welcome to Agri Vision", 
    select: "Select Language", 
    tagline: "Smart farming starts with smart predictions", 
    emailLabel: "Email Address", 
    emailPlace: "farmer@example.com", 
    passLabel: "Password", 
    nameLabel: "Full Name", 
    confirmPass: "Confirm Password", 
    loginBtn: "Login", 
    signupBtn: "Sign Up", 
    noAccount: "Don't have an account?", 
    hasAccount: "Already have an account?", 
    linkLogin: "Login", 
    linkSignup: "Sign Up", 

    // --- Dashboard Keys ---
    dashboard: "Dashboard", 
    profile: "My Profile", 
    darkMode: "Dark Mode", 
    comingSoon: "Coming Soon", 
    logout: "Logout", 
    welcomeUser: "Welcome", 

    card1Title: "Crop Yield Prediction", 
    card1Desc: "AI-powered yield estimation based on soil & weather.", 
    card2Title: "Weather & Mandi", 
    card2Desc: "Live market prices and local weather forecasts.", 
    card3Title: "Crop Encyclopedia", 
    card3Desc: "Complete guide on growing conditions for all Indian crops.", 

    // --- Profile & Security Keys ---
    personalDetails: "Personal Details", 
    security: "Security", 
    fullName: "Full Name", 
    emailAddr: "Email Address", 
    oldPass: "Old Password", 
    newPass: "New Password", 
    confirmNewPass: "Confirm New Password", 
    updateBtn: "Update Password", 
    recentPred: "Recent Predictions", 
    savedLoc: "Saved Locations", 
    passMismatch: "New passwords do not match!", 
    enterAllFields: "Please fill all password fields.", 

    // --- Weather & Mandi Keys ---
    weatherTitle: "Live Weather & Market", 
    monitor: "Location", 
    enterPincode: "Enter Pincode", 
    search: "Search", 
    aiAdvisory: "Agri-Vision AI Advisory", 
    humidity: "Humidity", 
    wind: "Wind", 
    pressure: "Pressure", 
    marketRates: "Market Rates", 
    source: "Source", 
    crop: "Crop", 
    price: "Price (₹/Q)", 
    trend: "Trend", 
    noData: "No market data available",

    // --- AI Advisory Messages ---
    adv_rain: "🌧️ Heavy rain detected. Stop irrigation.",
    adv_rain_soon: "☁️ Rain expected soon. Delay spraying.",
    adv_wind: "💨 High winds. Avoid spraying to prevent drift.",
    adv_heat: "☀️ Heat alert. Ensure crops are irrigated.",
    adv_cold: "❄️ Low temperature alert. Protect from frost.",
    adv_optimal: "✅ Weather is optimal for field activities.",

    // --- CROP YIELD WIZARD (NEW) ---
    step1: "Location",
    step2: "Crop Details",
    step3: "Results",
    
    // Step 1
    selectState: "Select State",
    selectRegion: "Region / District",
    verifyLocation: "Verify Location",
    locationFound: "Location Found:",
    nextBtn: "Next",
    
    // Step 2
    selectCropLabel: "Select Crop",
    sowingDateLabel: "Sowing Date",
    landSizeLabel: "Land Size",
    unitLabel: "Unit",
    soilTypeLabel: "Soil Type",
    irrigationLabel: "Irrigation Type",
    backBtn: "Back",
    calculateBtn: "Calculate Yield",
    
    // Dropdown Options
    drip: "Drip Irrigation (90-95%)",
    sprinkler: "Sprinkler System (75-85%)",
    canal: "Canal Irrigation (60-70%)",
    tubewell: "Tubewell/Borewell (70-80%)",
    flood: "Flood Irrigation (40-50%)",
    rainfed: "Rainfed (No Irrigation)",

    // Side Card
    conversionTitle: "Unit Conversions",
    conversionNote: "Note: Values may vary by region. Please verify locally.",
    
    // Results
    estimatedYield: "Estimated Yield",
    confidence: "Confidence Level",
    weatherFactor: "Weather Factor",
    recommendations: "Recommendations",
    bestSeason: "Best planting season",
    newPrediction: "New Prediction",

    // --- CROP ENCYCLOPEDIA KEYS ---
    encyclopediaTitle: "Crop Encyclopedia",
    searchCrop: "Search for a crop...",
    
    // Categories
    all: "All",
    grain: "Grains",
    pulse: "Pulses",
    vegetable: "Vegetables",
    fruit: "Fruits",
    commercial: "Cash Crops",
    
    // Details Labels
    seasonLabel: "Season",
    soilLabel: "Soil Type",
    waterLabel: "Water Needs",
    tempLabel: "Temperature",

    // Attribute Values
    rabi: "Rabi (Winter)",
    kharif: "Kharif (Monsoon)",
    zaid: "Zaid (Summer)",
    summer: "Summer",
    winter: "Winter",
    autumn: "Autumn",
    allYear: "All Year",
    perennial: "Perennial",
    
    loamy: "Loamy",
    clay: "Clay",
    sandy: "Sandy",
    sandy_loam: "Sandy Loam",
    black: "Black Soil",
    acidic: "Acidic",
    laterite: "Laterite",
    clay_loam: "Clay Loam",
    
    high: "High",
    moderate: "Moderate",
    low: "Low",

    // --- Crop Dictionary (English) ---
    crops: {
      "wheat": "Wheat", "paddy": "Paddy", "rice": "Rice", "maize": "Maize", "cotton": "Cotton",
      "sugarcane": "Sugarcane", "potato": "Potato", "kinnow": "Kinnow", "mustard": "Mustard",
      "sunflower": "Sunflower", "barley": "Barley", "bajra": "Bajra", "gram": "Gram (Chana)",
      "jowar": "Jowar", "mango": "Mango", "chickpea": "Chickpea", "arhar": "Arhar (Tur)",
      "tur": "Tur", "apple": "Apple", "tomato": "Tomato", "ginger": "Ginger", "peach": "Peach",
      "plum": "Plum", "garlic": "Garlic", "soyabean": "Soyabean", "ragi": "Ragi",
      "litchi": "Litchi", "amaranthus": "Amaranthus", "saffron": "Saffron", "walnut": "Walnut",
      "cherry": "Cherry", "almond": "Almond", "rajmash": "Rajmash", "apricot": "Apricot",
      "buckwheat": "Buckwheat", "peas": "Peas", "turnip": "Turnip", "cauliflower": "Cauliflower",
      "spinach": "Spinach", "carrot": "Carrot", "okra": "Okra", "onion": "Onion", "guava": "Guava",
      "rose": "Rose", "guar": "Guar", "groundnut": "Groundnut", "coriander": "Coriander",
      "cumin": "Cumin", "isabgol": "Isabgol", "tobacco": "Tobacco", "castor": "Castor",
      "banana": "Banana", "grapes": "Grapes", "pomegranate": "Pomegranate", "cashewnut": "Cashewnut",
      "coconut": "Coconut", "arecanut": "Arecanut", "pineapple": "Pineapple", "jackfruit": "Jackfruit",
      "sweet potato": "Sweet Potato", "orange": "Orange", "chilli": "Chilli", "turmeric": "Turmeric",
      "coffee": "Coffee", "tea": "Tea", "tapioca": "Tapioca", "rubber": "Rubber",
      "black gram": "Black Gram", "green gram": "Green Gram", "jute": "Jute", "sesame": "Sesame",
      "cardamom": "Cardamom", "pepper": "Pepper", "millet": "Millet", "kiwi": "Kiwi",
      "lemon": "Lemon", "passion fruit": "Passion Fruit", "drumstick": "Drumstick", 
      "breadfruit": "Breadfruit", "cucumber": "Cucumber", "pumpkin": "Pumpkin", 
      "sapota": "Sapota", "mesta": "Mesta", "clove": "Clove", "nutmeg": "Nutmeg", "cinnamon": "Cinnamon"
    }
  },

  hi: { 
    label: "हिंदी (Hindi)", 
    welcome: "एग्री विजन में आपका स्वागत है", 
    select: "भाषा चुनें", 
    tagline: "स्मार्ट खेती की शुरुआत स्मार्ट सोच से होती है", 
    emailLabel: "ईमेल पता", 
    emailPlace: "kisan@example.com", 
    passLabel: "पासवर्ड", 
    nameLabel: "पूरा नाम", 
    confirmPass: "पासवर्ड की पुष्टि करें", 
    loginBtn: "लॉग इन करें", 
    signupBtn: "साइन अप करें", 
    noAccount: "खाता नहीं है?", 
    hasAccount: "क्या आपके पास पहले से एक खाता मौजूद है?", 
    linkLogin: "लॉग इन", 
    linkSignup: "साइन अप", 

    dashboard: "डैशबोर्ड", 
    profile: "मेरी प्रोफाइल", 
    darkMode: "डार्क मोड", 
    comingSoon: "जल्द आ रहा है", 
    logout: "लॉग आउट", 
    welcomeUser: "स्वागत है", 

    card1Title: "फसल उपज भविष्यवाणी", 
    card1Desc: "मिट्टी और मौसम के आधार पर एआई उपज अनुमान।", 
    card2Title: "मौसम और मंडी", 
    card2Desc: "बाजार भाव और स्थानीय मौसम पूर्वानुमान।", 
    card3Title: "फसल ज्ञानकोष", 
    card3Desc: "सभी भारतीय फसलों के लिए खेती की पूरी गाइड।", 

    personalDetails: "व्यक्तिगत विवरण", 
    security: "सुरक्षा", 
    fullName: "पूरा नाम", 
    emailAddr: "ईमेल पता", 
    oldPass: "पुराना पासवर्ड", 
    newPass: "नया पासवर्ड", 
    confirmNewPass: "नए पासवर्ड की पुष्टि करें", 
    updateBtn: "पासवर्ड अपडेट करें", 
    recentPred: "हाल की भविष्यवाणियाँ", 
    savedLoc: "सहेजे गए स्थान", 
    passMismatch: "नए पासवर्ड मेल नहीं खाते!", 
    enterAllFields: "कृपया सभी पासवर्ड फ़ील्ड भरें।", 

    weatherTitle: "मौसम और बाजार भाव", 
    monitor: "स्थान", 
    enterPincode: "पिनकोड दर्ज करें", 
    search: "खोजें", 
    aiAdvisory: "एग्री-विजन एआई सलाह", 
    humidity: "नमी", 
    wind: "हवा", 
    pressure: "दबाव", 
    marketRates: "मंडी भाव", 
    source: "स्रोत", 
    crop: "फसल", 
    price: "मूल्य (₹/क्विंटल)", 
    trend: "रुझान", 
    noData: "कोई बाजार डेटा उपलब्ध नहीं है",

    // --- AI Advisory Messages ---
    adv_rain: "🌧️ भारी बारिश का पता चला। सिंचाई रोकें।",
    adv_rain_soon: "☁️ जल्द बारिश की संभावना। छिड़काव टालें।",
    adv_wind: "💨 तेज हवाएं। छिड़काव से बचें।",
    adv_heat: "☀️ गर्मी की चेतावनी। फसलों की सिंचाई सुनिश्चित करें।",
    adv_cold: "❄️ कम तापमान की चेतावनी। पाले से बचाएं।",
    adv_optimal: "✅ खेत की गतिविधियों के लिए मौसम अनुकूल है।",

    // --- CROP YIELD WIZARD (NEW) ---
    step1: "स्थान",
    step2: "फसल विवरण",
    step3: "परिणाम",
    
    // Step 1
    selectState: "राज्य चुनें",
    selectRegion: "क्षेत्र / जिला",
    verifyLocation: "स्थान सत्यापित करें",
    locationFound: "स्थान मिला:",
    nextBtn: "अगला",
    
    // Step 2
    selectCropLabel: "फसल चुनें",
    sowingDateLabel: "बुवाई की तारीख",
    landSizeLabel: "भूमि का आकार",
    unitLabel: "इकाई",
    soilTypeLabel: "मिट्टी का प्रकार",
    irrigationLabel: "सिंचाई का प्रकार",
    backBtn: "पीछे",
    calculateBtn: "उपज की गणना करें",
    
    // Dropdown Options
    drip: "ड्रिप सिंचाई (90-95%)",
    sprinkler: "स्प्रिंकलर सिस्टम (75-85%)",
    canal: "नहर सिंचाई (60-70%)",
    tubewell: "ट्यूबवेल/बोरवेल (70-80%)",
    flood: "बाढ़ सिंचाई (40-50%)",
    rainfed: "वर्षा आधारित (कोई सिंचाई नहीं)",

    // Side Card
    conversionTitle: "इकाई रूपांतरण",
    conversionNote: "नोट: मान क्षेत्र के अनुसार भिन्न हो सकते हैं। कृपया स्थानीय स्तर पर सत्यापित करें।",
    
    // Results
    estimatedYield: "अनुमानित उपज",
    confidence: "विश्वास स्तर",
    weatherFactor: "मौसम कारक",
    recommendations: "सिफारिशें",
    bestSeason: "बुवाई का सर्वोत्तम मौसम",
    newPrediction: "नई भविष्यवाणी",

    // --- CROP ENCYCLOPEDIA KEYS ---
    encyclopediaTitle: "फसल ज्ञानकोष",
    searchCrop: "फसल खोजें...",
    
    // Categories
    all: "सभी",
    grain: "अनाज",
    pulse: "दालें",
    vegetable: "सब्जियां",
    fruit: "फल",
    commercial: "नकदी फसलें",

    // Labels
    seasonLabel: "मौसम",
    soilLabel: "मिट्टी का प्रकार",
    waterLabel: "पानी की आवश्यकता",
    tempLabel: "तापमान",

    // Values
    rabi: "रबी (सर्दी)",
    kharif: "खरीफ (मानसून)",
    zaid: "ज़ायद (गर्मी)",
    summer: "गर्मी",
    winter: "सर्दी",
    autumn: "पतझड़",
    allYear: "साल भर",
    perennial: "बारहमासी",

    loamy: "दोमट",
    clay: "चिकनी मिट्टी",
    sandy: "रेतीली",
    sandy_loam: "रेतीली दोमट",
    black: "काली मिट्टी",
    acidic: "अम्लीय",
    laterite: "लैटेराइट",
    clay_loam: "चिकनी दोमट",

    high: "अधिक",
    moderate: "मध्यम",
    low: "कम",

    // --- Crop Dictionary (Hindi) ---
    crops: {
      "wheat": "गेहूँ", "paddy": "धान", "rice": "चावल", "maize": "मक्का", "cotton": "कपास",
      "sugarcane": "गन्ना", "potato": "आलू", "kinnow": "किन्नू", "mustard": "सरसों",
      "sunflower": "सूरजमुखी", "barley": "जौ", "bajra": "बाजरा", "gram": "चना",
      "jowar": "ज्वार", "mango": "आम", "chickpea": "काबुली चना", "arhar": "अरहर",
      "tur": "तुअर", "apple": "सेब", "tomato": "टमाटर", "ginger": "अदरक", "peach": "आड़ू",
      "plum": "आलूबुखारा", "garlic": "लहसुन", "soyabean": "सोयाबीन", "ragi": "रागी",
      "litchi": "लीची", "amaranthus": "चौलाई", "saffron": "केसर", "walnut": "अखरोट",
      "cherry": "चेरी", "almond": "बादाम", "rajmash": "राजमा", "apricot": "खुबानी",
      "buckwheat": "कुट्टू", "peas": "मटर", "turnip": "शलजम", "cauliflower": "फूलगोभी",
      "spinach": "पालक", "carrot": "गाजर", "okra": "भिंडी", "onion": "प्याज़", "guava": "अमरूद",
      "rose": "गुलाब", "guar": "ग्वार", "groundnut": "मूंगफली", "coriander": "धनिया",
      "cumin": "जीरा", "isabgol": "इसबगोल", "tobacco": "तंबाकू", "castor": "अरंडी",
      "banana": "केला", "grapes": "अंगूर", "pomegranate": "अनार", "cashewnut": "काजू",
      "coconut": "नारियल", "arecanut": "सुपारी", "pineapple": "अनानास", "jackfruit": "कटहल",
      "sweet potato": "शकरकंद", "orange": "संतरा", "chilli": "मिर्च", "turmeric": "हल्दी",
      "coffee": "कॉफी", "tea": "चाय", "tapioca": "साबूदाना", "rubber": "रबर",
      "black gram": "उड़द", "green gram": "मूंग", "jute": "जूट", "sesame": "तिल",
      "cardamom": "इलायची", "pepper": "काली मिर्च", "millet": "बाजरा/मिलेट", "kiwi": "कीवी",
      "lemon": "नींबू", "passion fruit": "कृष्णा फल", "drumstick": "सहजन", 
      "breadfruit": "ब्रेडफ्रूट", "cucumber": "खीरा", "pumpkin": "कद्दू", 
      "sapota": "चीकू", "mesta": "मेस्टा", "clove": "लौंग", "nutmeg": "जायफल", "cinnamon": "दालचीनी"
    }
  },

  pa: { 
    label: "ਪੰਜਾਬੀ (Punjabi)", 
    welcome: "ਐਗਰੀ ਵਿਜ਼ਨ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ", 
    select: "ਭਾਸ਼ਾ ਚੁਣੋ", 
    tagline: "ਸਮਾਰਟ ਖੇਤੀ ਸਮਾਰਟ ਭਵਿੱਖਬਾਣੀਆਂ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ", 
    emailLabel: "ਈਮੇਲ ਪਤਾ", 
    emailPlace: "kisan@example.com", 
    passLabel: "ਪਾਸਵਰਡ", 
    nameLabel: "ਪੂਰਾ ਨਾਮ", 
    confirmPass: "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ", 
    loginBtn: "ਲਾਗ ਇਨ ਕਰੋ", 
    signupBtn: "ਸਾਈਨ ਅਪ ਕਰੋ", 
    noAccount: "ਕੀ ਖਾਤਾ ਨਹੀਂ ਹੈ?", 
    hasAccount: "ਪਹਿਲਾਂ ਹੀ ਖਾਤਾ ਹੈ?", 
    linkLogin: "ਲਾਗ ਇਨ", 
    linkSignup: "ਸਾਈਨ ਅਪ", 

    dashboard: "ਡੈਸ਼ਬੋਰਡ", 
    profile: "ਮੇਰੀ ਪ੍ਰੋਫਾਈਲ", 
    darkMode: "ਡਾਰਕ ਮੋਡ", 
    comingSoon: "ਜਲਦ ਆ ਰਿਹਾ ਹੈ", 
    logout: "ਲੌਗ ਆਉਟ", 
    welcomeUser: "ਜੀ ਆਇਆਂ ਨੂੰ", 

    card1Title: "ਫਸਲ ਉਪਜ ਭਵਿੱਖਬਾਣੀ", 
    card1Desc: "ਮਿੱਟੀ ਅਤੇ ਮੌਸਮ ਦੇ ਅਧਾਰ 'ਤੇ ਏਆਈ ਉਪਜ ਅਨੁਮਾਨ।", 
    card2Title: "ਮੌਸਮ ਅਤੇ ਮੰਡੀ", 
    card2Desc: "ਮਾਰਕੀਟ ਭਾਅ ਅਤੇ ਸਥਾਨਕ ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ।", 
    card3Title: "ਫਸਲ ਗਿਆਨ ਕੋਸ਼", 
    card3Desc: "ਸਾਰੀਆਂ ਭਾਰਤੀ ਫਸਲਾਂ ਲਈ ਖੇਤੀ ਦੀ ਪੂਰੀ ਗਾਈਡ।", 

    personalDetails: "ਨਿੱਜੀ ਵੇਰਵੇ", 
    security: "ਸੁਰੱਖਿਆ", 
    fullName: "ਪੂਰਾ ਨਾਮ", 
    emailAddr: "ਈਮੇਲ ਪਤਾ", 
    oldPass: "ਪੁਰਾਣਾ ਪਾਸਵਰਡ", 
    newPass: "ਨਵਾਂ ਪਾਸਵਰਡ", 
    confirmNewPass: "ਨਵੇਂ ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ", 
    updateBtn: "ਪਾਸਵਰਡ ਅੱਪਡੇਟ ਕਰੋ", 
    recentPred: "ਹਾਲੀਆ ਭਵਿੱਖਬਾਣੀਆਂ", 
    savedLoc: "ਸੁਰੱਖਿਅਤ ਕੀਤੀਆਂ ਥਾਵਾਂ", 
    passMismatch: "ਨਵੇਂ ਪਾਸਵਰਡ ਮੇਲ ਨਹੀਂ ਖਾਂਦੇ!", 
    enterAllFields: "ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੇ ਪਾਸਵਰਡ ਖੇਤਰ ਭਰੋ।", 

    weatherTitle: "ਮੌਸਮ ਅਤੇ ਬਾਜ਼ਾਰ ਭਾਅ", 
    monitor: "ਸਥਾਨ", 
    enterPincode: "ਪਿਨਕੋਡ ਦਰਜ ਕਰੋ", 
    search: "ਖੋਜੋ", 
    aiAdvisory: "ਐਗਰੀ-ਵਿਜ਼ਨ ਏਆਈ ਸਲਾਹ", 
    humidity: "ਨਮੀ", 
    wind: "ਹਵਾ", 
    pressure: "ਦਬਾਅ", 
    marketRates: "ਮੰਡੀ ਦੇ ਰੇਟ", 
    source: "ਸਰੋਤ", 
    crop: "ਫਸਲ", 
    price: "ਕੀਮਤ (₹/ਕੁਇੰਟਲ)", 
    trend: "ਰੁਝਾਨ", 
    noData: "ਕੋਈ ਮਾਰਕੀਟ ਡੇਟਾ ਉਪਲਬਧ ਨਹੀਂ ਹੈ",

    // --- AI Advisory Messages ---
    adv_rain: "🌧️ ਭਾਰੀ ਮੀਂਹ। ਸਿੰਚਾਈ ਬੰਦ ਕਰੋ।",
    adv_rain_soon: "☁️ ਜਲਦੀ ਮੀਂਹ ਦੀ ਉਮੀਦ। ਸਪਰੇਅ ਵਿੱਚ ਦੇਰੀ ਕਰੋ।",
    adv_wind: "💨 ਤੇਜ਼ ਹਵਾਵਾਂ। ਸਪਰੇਅ ਤੋਂ ਬਚੋ।",
    adv_heat: "☀️ ਗਰਮੀ ਦੀ ਚੇਤਾਵਨੀ। ਫਸਲਾਂ ਨੂੰ ਪਾਣੀ ਦਿਓ।",
    adv_cold: "❄️ ਘੱਟ ਤਾਪਮਾਨ। ਫਸਲਾਂ ਨੂੰ ਕੋਰੇ ਤੋਂ ਬਚਾਓ।",
    adv_optimal: "✅ ਮੌਸਮ ਖੇਤੀ ਲਈ ਅਨੁਕੂਲ ਹੈ।",

    // --- CROP YIELD WIZARD (NEW) ---
    step1: "ਸਥਾਨ",
    step2: "ਫਸਲ ਦੇ ਵੇਰਵੇ",
    step3: "ਨਤੀਜੇ",
    
    // Step 1
    selectState: "ਰਾਜ ਚੁਣੋ",
    selectRegion: "ਖੇਤਰ / ਜ਼ਿਲ੍ਹਾ",
    verifyLocation: "ਸਥਾਨ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    locationFound: "ਸਥਾਨ ਮਿਲਿਆ:",
    nextBtn: "ਅਗਲਾ",
    
    // Step 2
    selectCropLabel: "ਫਸਲ ਚੁਣੋ",
    sowingDateLabel: "ਬਿਜਾਈ ਦੀ ਮਿਤੀ",
    landSizeLabel: "ਜ਼ਮੀਨ ਦਾ ਆਕਾਰ",
    unitLabel: "ਇਕਾਈ",
    soilTypeLabel: "ਮਿੱਟੀ ਦੀ ਕਿਸਮ",
    irrigationLabel: "ਸਿੰਚਾਈ ਦੀ ਕਿਸਮ",
    backBtn: "ਪਿੱਛੇ",
    calculateBtn: "ਝਾੜ ਦੀ ਗਣਨਾ ਕਰੋ",
    
    // Dropdown Options
    drip: "ਤੁਪਕਾ ਸਿੰਚਾਈ (90-95%)",
    sprinkler: "ਫੁਹਾਰਾ ਪ੍ਰਣਾਲੀ (75-85%)",
    canal: "ਨਹਿਰੀ ਸਿੰਚਾਈ (60-70%)",
    tubewell: "ਟਿਊਬਵੈੱਲ/ਬੋਰਵੈੱਲ (70-80%)",
    flood: "ਹੜ੍ਹ ਸਿੰਚਾਈ (40-50%)",
    rainfed: "ਮੀਂਹ ਅਧਾਰਤ (ਕੋਈ ਸਿੰਚਾਈ ਨਹੀਂ)",

    // Side Card
    conversionTitle: "ਇਕਾਈ ਪਰਿਵਰਤਨ",
    conversionNote: "ਨੋਟ: ਮੁੱਲ ਖੇਤਰ ਅਨੁਸਾਰ ਵੱਖ-ਵੱਖ ਹੋ ਸਕਦੇ ਹਨ। ਕਿਰਪਾ ਕਰਕੇ ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਪੁਸ਼ਟੀ ਕਰੋ।",
    
    // Results
    estimatedYield: "ਅਨੁਮਾਨਿਤ ਝਾੜ",
    confidence: "ਭਰੋਸੇ ਦਾ ਪੱਧਰ",
    weatherFactor: "ਮੌਸਮ ਕਾਰਕ",
    recommendations: "ਸਿਫ਼ਾਰਸ਼ਾਂ",
    bestSeason: "ਬਿਜਾਈ ਲਈ ਵਧੀਆ ਮੌਸਮ",
    newPrediction: "ਨਵੀਂ ਭਵਿੱਖਬਾਣੀ",

    // --- CROP ENCYCLOPEDIA KEYS ---
    encyclopediaTitle: "ਫਸਲ ਗਿਆਨ ਕੋਸ਼",
    searchCrop: "ਫਸਲ ਖੋਜੋ...",
    
    // Categories
    all: "ਸਾਰੇ",
    grain: "ਅਨਾਜ",
    pulse: "ਦਾਲਾਂ",
    vegetable: "ਸਬਜ਼ੀਆਂ",
    fruit: "ਫਲ",
    commercial: "ਵਪਾਰਕ ਫਸਲਾਂ",

    // Labels
    seasonLabel: "ਮੌਸਮ",
    soilLabel: "ਮਿੱਟੀ ਦੀ ਕਿਸਮ",
    waterLabel: "ਪਾਣੀ ਦੀ ਲੋੜ",
    tempLabel: "ਤਾਪਮਾਨ",

    // Values
    rabi: "ਹਾੜ੍ਹੀ (ਸਰਦੀਆਂ)",
    kharif: "ਸਾਉਣੀ (ਮਾਨਸੂਨ)",
    zaid: "ਜ਼ੈਦ (ਗਰਮੀਆਂ)",
    summer: "ਗਰਮੀਆਂ",
    winter: "ਸਰਦੀਆਂ",
    autumn: "ਪਤਝੜ",
    allYear: "ਸਾਰਾ ਸਾਲ",
    perennial: "ਬਾਰਹਮਾਸੀ",

    loamy: "ਦੋਮਟ",
    clay: "ਚਿਕਨੀ ਮਿੱਟੀ",
    sandy: "ਰੇਤਲੀ",
    sandy_loam: "ਰੇਤਲੀ ਦੋਮਟ",
    black: "ਕਾਲੀ ਮਿੱਟੀ",
    acidic: "ਤੇਜ਼ਾਬੀ",
    laterite: "ਲੈਟਰਾਈਟ",
    clay_loam: "ਚਿਕਨੀ ਦੋਮਟ",

    high: "ਵੱਧ",
    moderate: "ਦਰਮਿਆਨਾ",
    low: "ਘੱਟ",

    // --- Crop Dictionary (Punjabi) ---
    crops: {
      "wheat": "ਕਣਕ", "paddy": "ਝੋਨਾ", "rice": "ਚੌਲ", "maize": "ਮੱਕੀ", "cotton": "ਕਪਾਹ/ਨਰਮਾ",
      "sugarcane": "ਗੰਨਾ", "potato": "ਆਲੂ", "kinnow": "ਕਿੰਨੂ", "mustard": "ਸਰ੍ਹੋਂ",
      "sunflower": "ਸੂਰਜਮੁਖੀ", "barley": "ਜੌਂ", "bajra": "ਬਾਜਰਾ", "gram": "ਛੋਲੇ",
      "jowar": "ਜਵਾਰ", "mango": "ਅੰਬ", "chickpea": "ਕਾਬੁਲੀ ਛੋਲੇ", "arhar": "ਅਰਹਰ",
      "tur": "ਤੂਰ", "apple": "ਸੇਬ", "tomato": "ਟਮਾਟਰ", "ginger": "ਅਦਰਕ", "peach": "ਆੜੂ",
      "plum": "ਆਲੂ ਬੁਖਾਰਾ", "garlic": "ਲਸਣ", "soyabean": "ਸੋਇਆਬੀਨ", "ragi": "ਰਾਗੀ",
      "litchi": "ਲੀਚੀ", "amaranthus": "ਚੌਲਾਈ", "saffron": "ਕੇਸਰ", "walnut": "ਅਖਰੋਟ",
      "cherry": "ਚੈਰੀ", "almond": "ਬਾਦਾਮ", "rajmash": "ਰਾਜਮਾਂਹ", "apricot": "ਖੁਰਮਾਨੀ",
      "buckwheat": "ਕੁੱਟੂ", "peas": "ਮਟਰ", "turnip": "ਸ਼ਲਗਮ", "cauliflower": "ਫੁੱਲ ਗੋਭੀ",
      "spinach": "ਪਾਲਕ", "carrot": "ਗਾਜਰ", "okra": "ਭਿੰਡੀ", "onion": "ਪਿਆਜ਼", "guava": "ਅਮਰੂਦ",
      "rose": "ਗੁਲਾਬ", "guar": "ਗਵਾਰਾ", "groundnut": "ਮੂੰਗਫਲੀ", "coriander": "ਧਨੀਆ",
      "cumin": "ਜੀਰਾ", "isabgol": "ਇਸਬਗੋਲ", "tobacco": "ਤੰਬਾਕੂ", "castor": "ਅਰੰਡੀ",
      "banana": "ਕੇਲਾ", "grapes": "ਅੰਗੂਰ", "pomegranate": "ਅਨਾਰ", "cashewnut": "ਕਾਜੂ",
      "coconut": "ਨਾਰੀਅਲ", "arecanut": "ਸੁਪਾਰੀ", "pineapple": "ਅਨਾਨਾਸ", "jackfruit": "ਕਟਹਲ",
      "sweet potato": "ਸ਼ਕਰਕੰਦੀ", "orange": "ਸੰਤਰਾ", "chilli": "ਮਿਰਚ", "turmeric": "ਹਲਦੀ",
      "coffee": "ਕੌਫੀ", "tea": "ਚਾਹ", "tapioca": "ਸਾਬੂਦਾਣਾ", "rubber": "ਰਬੜ",
      "black gram": "ਮਾਂਹ", "green gram": "ਮੂੰਗੀ", "jute": "ਪਟਸਨ", "sesame": "ਤਿਲ",
      "cardamom": "ਇਲੈਚੀ", "pepper": "ਕਾਲੀ ਮਿਰਚ", "millet": "ਬਾਜਰਾ", "kiwi": "ਕੀਵੀ",
      "lemon": "ਨਿੰਬੂ", "passion fruit": "ਪੈਸ਼ਨ ਫਰੂਟ", "drumstick": "ਸੁਹਾਂਜਣਾ", 
      "breadfruit": "ਬ੍ਰੈਡਫਰੂਟ", "cucumber": "ਖੀਰਾ", "pumpkin": "ਕੱਦੂ", 
      "sapota": "ਚੀਕੂ", "mesta": "ਮੇਸਤਾ", "clove": "ਲੌਂਗ", "nutmeg": "ਜੈਫਲ", "cinnamon": "ਦਾਲਚੀਨੀ"
    }
  },

  ta: { 
    label: "தமிழ் (Tamil)", 
    welcome: "அக்ரி விஷனுக்கு வரவேற்கிறோம்", 
    select: "மொழியைத் தேர்ந்தெடுக்கவும்", 
    tagline: "சிறந்த விவசாயம் சிறந்த கணிப்புகளுடன் தொடங்குகிறது", 
    emailLabel: "மின்னஞ்சல் முகவரி", 
    emailPlace: "kisan@example.com", 
    passLabel: "கடவுச்சொல்", 
    nameLabel: "முழு பெயர்", 
    confirmPass: "கடவுச்சொல்லை உறுதிப்படுத்தவும்", 
    loginBtn: "உள்நுழைய", 
    signupBtn: "பதிவு செய்க", 
    noAccount: "கணக்கு இல்லையா?", 
    hasAccount: "ஏற்கனவே கணக்கு உள்ளதா?", 
    linkLogin: "உள்நுழைய", 
    linkSignup: "பதிவு செய்க", 

    dashboard: "டாஷ்போர்டு", 
    profile: "என் சுயவிவரம்", 
    darkMode: "டார்க் மோட்", 
    comingSoon: "விரைவில் வருகிறது", 
    logout: "வெளியேறு", 
    welcomeUser: "வரவேற்கிறோம்", 

    card1Title: "பயிர் விளைச்சல் கணிப்பு", 
    card1Desc: "மண் மற்றும் வானிலை அடிப்படையில் AI விளைச்சல் கணிப்பு.", 
    card2Title: "வானிலை & மண்டி", 
    card2Desc: "நேரடி சந்தை விலை மற்றும் உள்ளூர் வானிலை முன்னறிவிப்புகள்.", 
    card3Title: "பயிர் கலைக்களஞ்சியம்", 
    card3Desc: "அனைத்து இந்திய பயிர்களுக்கும் வளரும் நிலைமைகள் பற்றிய முழுமையான வழிகாட்டி.", 

    personalDetails: "தனிப்பட்ட விவரங்கள்", 
    security: "பாதுகாப்பு", 
    fullName: "முழு பெயர்", 
    emailAddr: "மின்னஞ்சல் முகவரி", 
    oldPass: "பழைய கடவுச்சொல்", 
    newPass: "புதிய கடவுச்சொல்", 
    confirmNewPass: "புதிய கடவுச்சொல்லை உறுதிப்படுத்தவும்", 
    updateBtn: "கடவுச்சொல்லைப் புதுப்பிக்கவும்", 
    recentPred: "சமீபத்திய கணிப்புகள்", 
    savedLoc: "சேமிக்கப்பட்ட இடங்கள்", 
    passMismatch: "புதிய கடவுச்சொற்கள் பொருந்தவில்லை!", 
    enterAllFields: "அனைத்து கடவுச்சொல் புலங்களையும் நிரப்பவும்.", 

    weatherTitle: "வானிலை & சந்தை", 
    monitor: "இடம்", 
    enterPincode: "பின்கோடு உள்ளிடவும்", 
    search: "தேடுக", 
    aiAdvisory: "அக்ரி-விஷன் AI ஆலோசனை", 
    humidity: "ஈரப்பதம்", 
    wind: "காற்று", 
    pressure: "அழுத்தம்", 
    marketRates: "சந்தை விலைகள்", 
    source: "மூலம்", 
    crop: "பயிர்", 
    price: "விலை (₹/Q)", 
    trend: "போக்கு", 
    noData: "சந்தை தரவு இல்லை",

    // --- AI Advisory Messages ---
    adv_rain: "🌧️ பலத்த மழை. நீர்ப்பாசனத்தை நிறுத்துங்கள்.",
    adv_rain_soon: "☁️ மழை எதிர்பார்க்கப்படுகிறது. தெளிப்பதை தாமதப்படுத்தவும்.",
    adv_wind: "💨 பலத்த காற்று. மருந்து தெளிப்பதை தவிர்க்கவும்.",
    adv_heat: "☀️ வெப்ப எச்சரிக்கை. பயிர்களுக்கு நீர் பாய்ச்சவும்.",
    adv_cold: "❄️ குறைந்த வெப்பநிலை. உறைபனியிலிருந்து பாதுகாக்கவும்.",
    adv_optimal: "✅ வானிலை விவசாயத்திற்கு உகந்தது.",

    // --- CROP YIELD WIZARD (NEW) ---
    step1: "இடம்",
    step2: "பயிர் விவரங்கள்",
    step3: "முடிவுகள்",
    
    // Step 1
    selectState: "மாநிலத்தைத் தேர்ந்தெடுக்கவும்",
    selectRegion: "பகுதி / மாவட்டம்",
    verifyLocation: "இடத்தை சரிபார்க்கவும்",
    locationFound: "இடம் கண்டறியப்பட்டது:",
    nextBtn: "அடுத்து",
    
    // Step 2
    selectCropLabel: "பயிரைத் தேர்ந்தெடுக்கவும்",
    sowingDateLabel: "விதைக்கும் தேதி",
    landSizeLabel: "நில அளவு",
    unitLabel: "அலகு",
    soilTypeLabel: "மண் வகை",
    irrigationLabel: "நீர்ப்பாசன வகை",
    backBtn: "பின்னால்",
    calculateBtn: "கணக்கிடு",
    
    // Dropdown Options
    drip: "சொட்டு நீர் (90-95%)",
    sprinkler: "தெளிப்பு நீர் (75-85%)",
    canal: "கால்வாய் நீர்ப்பாசனம் (60-70%)",
    tubewell: "ஆழ்துளை கிணறு (70-80%)",
    flood: "வெள்ள நீர் (40-50%)",
    rainfed: "மானாவாரி (நீர்ப்பாசனம் இல்லை)",

    // Side Card
    conversionTitle: "அலகு மாற்றம்",
    conversionNote: "குறிப்பு: பிராந்தியத்தைப் பொறுத்து மதிப்புகள் மாறுபடலாம்.",
    
    // Results
    estimatedYield: "மதிப்பிடப்பட்ட விளைச்சல்",
    confidence: "நம்பிக்கை நிலை",
    weatherFactor: "வானிலை காரணி",
    recommendations: "பரிந்துரைகள்",
    bestSeason: "சிறந்த நடவு பருவம்",
    newPrediction: "புதிய கணிப்பு",

    // --- CROP ENCYCLOPEDIA KEYS ---
    encyclopediaTitle: "பயிர் கலைக்களஞ்சியம்",
    searchCrop: "பயிரைத் தேடுங்கள்...",
    
    // Categories
    all: "அனைத்தும்",
    grain: "தானியங்கள்",
    pulse: "பருப்பு வகைகள்",
    vegetable: "காய்கறிகள்",
    fruit: "பழங்கள்",
    commercial: "பணப்பயிர்கள்",

    // Labels
    seasonLabel: "பருவம்",
    soilLabel: "மண் வகை",
    waterLabel: "நீர் தேவை",
    tempLabel: "வெப்பநிலை",

    // Values
    rabi: "ராபி (குளிர்காலம்)",
    kharif: "காரீஃப் (மழைக்காலம்)",
    zaid: "சையத் (கோடைக்காலம்)",
    summer: "கோடைக்காலம்",
    winter: "குளிர்காலம்",
    autumn: "இலையுதிர் காலம்",
    allYear: "ஆண்டு முழுவதும்",
    perennial: "வற்றாத",

    loamy: "வண்டல் மண்",
    clay: "களிமண்",
    sandy: "மணல் பாங்கான",
    sandy_loam: "மணல் கலந்த வண்டல்",
    black: "கரிசல் மண்",
    acidic: "அமில மண்",
    laterite: "செம்மண்",
    clay_loam: "களிமண் கலந்த வண்டல்",

    high: "அதிகம்",
    moderate: "மிதமானது",
    low: "குறைவு",

    // --- Crop Dictionary (Tamil) ---
    crops: {
      "wheat": "கோதுமை", "paddy": "நெல்", "rice": "அரிசி", "maize": "சோளம்", "cotton": "பருத்தி",
      "sugarcane": "கரும்பு", "potato": "உருளைக்கிழங்கு", "kinnow": "கின்னோ", "mustard": "கடுகு",
      "sunflower": "சூரியகாந்தி", "barley": "பார்லி", "bajra": "கம்பு", "gram": "கொண்டைக்கடலை",
      "jowar": "சோளம்", "mango": "மாம்பழம்", "chickpea": "சுண்டல்", "arhar": "துவரை",
      "tur": "துவரம்பருப்பு", "apple": "ஆப்பிள்", "tomato": "தக்காளி", "ginger": "இஞ்சி", "peach": "பீச்",
      "plum": "பிளம்", "garlic": "பூண்டு", "soyabean": "சோயாபீன்", "ragi": "கேழ்வரகு",
      "litchi": "லிச்சி", "amaranthus": "கீரை", "saffron": "குங்குமப்பூ", "walnut": "வால்நட்",
      "cherry": "செர்ரி", "almond": "பாதாம்", "rajmash": "ராஜ்மா", "apricot": "ஆப்ரிகாட்",
      "buckwheat": "பக்வீட்", "peas": "பட்டாணி", "turnip": "நூல்கோல்", "cauliflower": "காலிஃபிளவர்",
      "spinach": "பசலைக்கீரை", "carrot": "கேரட்", "okra": "வெண்டைக்காய்", "onion": "வெங்காயம்", "guava": "கொய்யா",
      "rose": "ரோஜா", "guar": "கொத்தவரை", "groundnut": "வேர்க்கடலை", "coriander": "கொத்தமல்லி",
      "cumin": "சீரகம்", "isabgol": "இசப்கோல்", "tobacco": "புகையிலை", "castor": "ஆமணக்கு",
      "banana": "வாழை", "grapes": "திராட்சை", "pomegranate": "மாதுளை", "cashewnut": "முந்திரி",
      "coconut": "தேங்காய்", "arecanut": "பாக்கு", "pineapple": "அன்னாசி", "jackfruit": "பலாப்பழம்",
      "sweet potato": "சர்க்கரைவள்ளிக்கிழங்கு", "orange": "ஆரஞ்சு", "chilli": "மிளகாய்", "turmeric": "மஞ்சள்",
      "coffee": "காபி", "tea": "தேயிலை", "tapioca": "மரவள்ளிக்கிழங்கு", "rubber": "ரப்பர்",
      "black gram": "உளுந்து", "green gram": "பச்சை பயறு", "jute": "சணல்", "sesame": "எள்",
      "cardamom": "ஏலக்காய்", "pepper": "மிளகு", "millet": "திணை", "kiwi": "கிவி",
      "lemon": "எலுமிச்சை", "passion fruit": "பேஷன் பழம்", "drumstick": "முருங்கை", 
      "breadfruit": "ஈரப்பலா", "cucumber": "வெள்ளரிக்காய்", "pumpkin": "பூசணிக்காய்", 
      "sapota": "சப்போட்டா", "mesta": "மெஸ்டா", "clove": "கிராம்பு", "nutmeg": "ஜாதிக்காய்", "cinnamon": "இலவங்கப்பட்டை"
    }
  },

  te: { 
    label: "తెలుగు (Telugu)", 
    welcome: "అగ్రి విజన్‌కు స్వాగతం", 
    select: "భాషను ఎంచుకోండి", 
    tagline: "స్మార్ట్ వ్యవసాయం స్మార్ట్ అంచనాలతో ప్రారంభమవుతుంది", 
    emailLabel: "ఇమెయిల్ చిరునామా", 
    emailPlace: "kisan@example.com", 
    passLabel: "పాస్వర్డ్", 
    nameLabel: "పూర్తి పేరు", 
    confirmPass: "పాస్వర్డ్ నిర్ధారించండి", 
    loginBtn: "లాగిన్", 
    signupBtn: "సైన్ అప్", 
    noAccount: "ఖాతా లేదా?", 
    hasAccount: "ఇప్పటికే ఖాతా ఉందా?", 
    linkLogin: "లాగిన్", 
    linkSignup: "సైన్ అప్", 

    dashboard: "డాష్‌బోర్డ్", 
    profile: "నా ప్రొఫైల్", 
    darkMode: "డార్క్ మోడ్", 
    comingSoon: "త్వరలో వస్తుంది", 
    logout: "లాగ్ అవుట్", 
    welcomeUser: "స్వాగతం", 

    card1Title: "పంట దిగుబడి అంచనా", 
    card1Desc: "నేల మరియు వాతావరణం ఆధారంగా AI దిగుబడి అంచనా.", 
    card2Title: "వాతావరణం & మండి", 
    card2Desc: "ప్రత్యక్ష మార్కెట్ ధరలు మరియు స్థానిక వాతావరణ సూచనలు.", 
    card3Title: "పంట విజ్ఞాన సర్వస్వం", 
    card3Desc: "అన్ని భారతీయ పంటలకు సాగు పరిస్థితులపై పూర్తి గైడ్.", 

    personalDetails: "వ్యక్తిగత వివరాలు", 
    security: "భద్రత", 
    fullName: "పూర్తి పేరు", 
    emailAddr: "ఇమెయిల్ చిరునామా", 
    oldPass: "పాత పాస్‌వర్డ్", 
    newPass: "కొత్త పాస్‌వర్డ్", 
    confirmNewPass: "కొత్త పాస్‌వర్డ్ నిర్ధారించండి", 
    updateBtn: "పాస్‌వర్డ్ నవీకరించండి", 
    recentPred: "ఇటీవలి అంచనాలు", 
    savedLoc: "సేవ్ చేయబడిన స్థానాలు", 
    passMismatch: "కొత్త పాస్‌వర్డ్‌లు సరిపోలలేదు!", 
    enterAllFields: "దయచేసి అన్ని పాస్‌వర్డ్ ఫీల్డ్‌లను పూరించండి.", 

    weatherTitle: "ప్రత్యక్ష వాతావరణం & మార్కెట్", 
    monitor: "ప్రాంతం", 
    enterPincode: "పిన్ కోడ్ నమోదు చేయండి", 
    search: "వెతకండి", 
    aiAdvisory: "అగ్రి-విజన్ AI సలహా", 
    humidity: "తేమ", 
    wind: "గాలి", 
    pressure: "ఒత్తిడి", 
    marketRates: "మార్కెట్ రేట్లు", 
    source: "మూలం", 
    crop: "పంట", 
    price: "ధర (₹/Q)", 
    trend: "ట్రెండ్", 
    noData: "మార్కెట్ డేటా అందుబాటులో లేదు",

    // --- AI Advisory Messages ---
    adv_rain: "🌧️ భారీ వర్షం. నీటి పారుదల ఆపండి.",
    adv_rain_soon: "☁️ త్వరలో వర్షం కురిసే అవకాశం ఉంది. పిచికారీ వాయిదా వేయండి.",
    adv_wind: "💨 బలమైన గాలులు. పిచికారీ చేయవద్దు.",
    adv_heat: "☀️ వేడి హెచ్చరిక. పంటలకు నీరు పెట్టండి.",
    adv_cold: "❄️ తక్కువ ఉష్ణోగ్రత. మంచు నుండి రక్షించండి.",
    adv_optimal: "✅ వాతావరణం వ్యవసాయానికి అనుకూలంగా ఉంది.",

    // --- CROP YIELD WIZARD (NEW) ---
    step1: "స్థానం",
    step2: "పంట వివరాలు",
    step3: "ఫలితాలు",
    
    // Step 1
    selectState: "రాష్ట్రాన్ని ఎంచుకోండి",
    selectRegion: "ప్రాంతం / జిల్లా",
    verifyLocation: "స్థానాన్ని ధృవీకరించండి",
    locationFound: "స్థానం కనుగొనబడింది:",
    nextBtn: "తదుపరి",
    
    // Step 2
    selectCropLabel: "పంటను ఎంచుకోండి",
    sowingDateLabel: "విత్తే తేదీ",
    landSizeLabel: "భూమి పరిమాణం",
    unitLabel: "యూనిట్",
    soilTypeLabel: "నేల రకం",
    irrigationLabel: "నీటిపారుదల రకం",
    backBtn: "వెనుకకు",
    calculateBtn: "దిగుబడిని లెక్కించండి",
    
    // Dropdown Options
    drip: "బిందు సేద్యం (90-95%)",
    sprinkler: "స్ప్రింక్లర్ సిస్టమ్ (75-85%)",
    canal: "కాలువ నీటిపారుదల (60-70%)",
    tubewell: "బోరు బావి (70-80%)",
    flood: "వరద నీటిపారుదల (40-50%)",
    rainfed: "వర్షాధార (నీటిపారుదల లేదు)",

    // Side Card
    conversionTitle: "యూనిట్ మార్పిడి",
    conversionNote: "గమనిక: ప్రాంతాన్ని బట్టి విలువలు మారవచ్చు.",
    
    // Results
    estimatedYield: "అంచనా వేసిన దిగుబడి",
    confidence: "నమ్మక స్థాయి",
    weatherFactor: "వాతావరణ కారకం",
    recommendations: "సిఫార్సులు",
    bestSeason: "ఉత్తమ నాటడం సీజన్",
    newPrediction: "కొత్త అంచనా",

    // --- CROP ENCYCLOPEDIA KEYS ---
    encyclopediaTitle: "పంట విజ్ఞాన సర్వస్వం",
    searchCrop: "పంటను వెతకండి...",
    
    // Categories
    all: "అన్నీ",
    grain: "తృణధాన్యాలు",
    pulse: "పప్పులు",
    vegetable: "కూరగాయలు",
    fruit: "పండ్లు",
    commercial: "వాణిజ్య పంటలు",

    // Labels
    seasonLabel: "సీజన్",
    soilLabel: "నేల రకం",
    waterLabel: "నీటి అవసరం",
    tempLabel: "ఉష్ణోగ్రత",

    // Values
    rabi: "రబీ (చలికాలం)",
    kharif: "ఖరీఫ్ (వాానాకాలం)",
    zaid: "జైద్ (వేసవి)",
    summer: "వేసవి",
    winter: "చలికాలం",
    autumn: "శరదృతువు",
    allYear: "సంవత్సరం పొడవునా",
    perennial: "శాశ్వత",

    loamy: "ఒండ్రు మట్టి",
    clay: "బంకమట్టి",
    sandy: "ఇసుక నేల",
    sandy_loam: "ఇసుకతో కూడిన ఒండ్రు మట్టి",
    black: "నల్లరేగడి నేల",
    acidic: "ఆమ్ల నేల",
    laterite: "లాటరైట్ నేల",
    clay_loam: "బంకమట్టితో కూడిన ఒండ్రు నేల",

    high: "ఎక్కువ",
    moderate: "మితమైన",
    low: "తక్కువ",

    // --- Crop Dictionary (Telugu) ---
    crops: {
      "wheat": "గోధుమ", "paddy": "వరి", "rice": "బియ్యం", "maize": "మొక్కజొన్న", "cotton": "పత్తి",
      "sugarcane": "చెరకు", "potato": "బంగాళాదుంప", "kinnow": "కిన్నో", "mustard": "ఆవాలు",
      "sunflower": "పొద్దుతిరుగుడు", "barley": "బార్లీ", "bajra": "సజ్జలు", "gram": "శనగలు",
      "jowar": "జొన్నలు", "mango": "మామిడి", "chickpea": "కాబూలీ శనగ", "arhar": "కందులు",
      "tur": "కంది పప్పు", "apple": "యాపిల్", "tomato": "టమోటా", "ginger": "అల్లం", "peach": "పీచ్",
      "plum": "ప్లమ్", "garlic": "వెల్లుల్లి", "soyabean": "సోయాబీన్", "ragi": "రాగులు",
      "litchi": "లిచి", "amaranthus": "తోటకూర", "saffron": "కుంకుమ పువ్వు", "walnut": "వాల్‌నట్",
      "cherry": "చెర్రీ", "almond": "బాదం", "rajmash": "రాజ్మా", "apricot": "ఆప్రికాట్",
      "buckwheat": "బక్వీట్", "peas": "బఠానీలు", "turnip": "టర్నిప్", "cauliflower": "కాలిఫ్లవర్",
      "spinach": "పాలకూర", "carrot": "కాజర్", "okra": "బెండకాయ", "onion": "ఉల్లిపాయ", "guava": "జామ",
      "rose": "గులాబీ", "guar": "గోరుచిక్కుడు", "groundnut": "వేరుశెనగ", "coriander": "కొత్తిమీర",
      "cumin": "జీలకర్ర", "isabgol": "ఇసాబ్గోల్", "tobacco": "పొగాకు", "castor": "ఆముదం",
      "banana": "అరటి", "grapes": "ద్రాక్ష", "pomegranate": "దానిమ్మ", "cashewnut": "జీడిపప్పు",
      "coconut": "కొబ్బరి", "arecanut": "వక్క", "pineapple": "అనాస", "jackfruit": "పనస",
      "sweet potato": "చిలగడదుంప", "orange": "నారింజ", "chilli": "మిరపకాయ", "turmeric": "పసుపు",
      "coffee": "కాఫీ", "tea": "టీ", "tapioca": "కర్రపెండలం", "rubber": "రబ్బరు",
      "black gram": "మినుములు", "green gram": "పెసలు", "jute": "జనుము", "sesame": "నువ్వులు",
      "cardamom": "యాలకులు", "pepper": "మిరియాలు", "millet": "చిరుధాన్యాలు", "kiwi": "కివి",
      "lemon": "నిమ్మ", "passion fruit": "పాషన్ ఫ్రూట్", "drumstick": "మునగ", 
      "breadfruit": "బ్రెడ్‌ఫ్రూట్", "cucumber": "కీర దోస", "pumpkin": "గుమ్మడికాయ", 
      "sapota": "సపోటా", "mesta": "మెస్టా", "clove": "లవంగం", "nutmeg": "జాజికాయ", "cinnamon": "దాల్చిన చెక్క"
    }
  },

  ml: { 
    label: "മലയാളം (Malayalam)", 
    welcome: "അഗ്രി വിഷനിലേക്ക് സ്വാഗതം", 
    select: "ഭാഷ തിരഞ്ഞെടുക്കുക", 
    tagline: "സ്മാർട്ട് കൃഷി സ്മാർട്ട് പ്രവചനങ്ങളിൽ ആരംഭിക്കുന്നു", 
    emailLabel: "ഇമെയിൽ വിലാസം", 
    emailPlace: "kisan@example.com", 
    passLabel: "പാസ്‌വേഡ്", 
    nameLabel: "പൂർണ്ണ നാമം", 
    confirmPass: "പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക", 
    loginBtn: "ലോഗിൻ", 
    signupBtn: "സൈൻ അപ്പ്", 
    noAccount: "അക്കൗണ്ട് ഇല്ലേ?", 
    hasAccount: "അക്കൗണ്ട് ഉണ്ടോ?", 
    linkLogin: "ലോഗിൻ", 
    linkSignup: "സൈൻ അപ്പ്", 

    dashboard: "ഡാഷ്ബോർഡ്", 
    profile: "എന്റെ പ്രൊഫൈൽ", 
    darkMode: "ഡാർക്ക് മോഡ്", 
    comingSoon: "ഉടൻ വരുന്നു", 
    logout: "ലോഗ് ഔട്ട്", 
    welcomeUser: "സ്വാഗതം", 

    card1Title: "വിളവ് പ്രവചനം", 
    card1Desc: "മണ്ണും കാലാവസ്ഥയും അടിസ്ഥാനമാക്കിയുള്ള AI വിളവ് കണക്കാക്കൽ.", 
    card2Title: "കാലാവസ്ഥ & മണ്ടി", 
    card2Desc: "തത്സമയ വിപണി വിലകളും പ്രാദേശിക കാലാവസ്ഥാ പ്രവചനങ്ങളും.", 
    card3Title: "വിള വിജ്ഞാനകോശം", 
    card3Desc: "എല്ലാ ഇന്ത്യൻ വിളകൾക്കുമുള്ള വളർച്ചാ സാഹചര്യങ്ങളെക്കുറിച്ചുള്ള പൂർണ്ണ ഗൈഡ്.", 

    personalDetails: "വ്യക്തിഗത വിശദാംശങ്ങൾ", 
    security: "സുരക്ഷ", 
    fullName: "പൂർണ്ണ നാമം", 
    emailAddr: "ഇമെയിൽ വിലാസം", 
    oldPass: "പഴയ പാസ്‌വേഡ്", 
    newPass: "പുതിയ പാസ്‌വേഡ്", 
    confirmNewPass: "പുതിയ പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക", 
    updateBtn: "പാസ്‌വേഡ് അപ്‌ഡേറ്റ് ചെയ്യുക", 
    recentPred: "സമീപകാല പ്രവചനങ്ങൾ", 
    savedLoc: "സേവ് ചെയ്ത ലൊക്കേഷനുകൾ", 
    passMismatch: "പുതിയ പാസ്‌വേഡുകൾ പൊരുത്തപ്പെടുന്നില്ല!", 
    enterAllFields: "ദയവായി എല്ലാ പാസ്‌വേഡ് ഫീൽഡുകളും പൂരിപ്പിക്കുക.", 

    weatherTitle: "തത്സമയ കാലാവസ്ഥ & വിപണി", 
    monitor: "സ്ഥലം", 
    enterPincode: "പിൻകോഡ് നൽകുക", 
    search: "തിരയുക", 
    aiAdvisory: "അഗ്രി-വിഷൻ AI ഉപദേശം", 
    humidity: "ഈർപ്പം", 
    wind: "കാറ്റ്", 
    pressure: "മർദ്ദം", 
    marketRates: "വിപണി നിരക്കുകൾ", 
    source: "ഉറവിടം", 
    crop: "വിള", 
    price: "വില (₹/Q)", 
    trend: "ട്രെൻഡ്", 
    noData: "വിപണി വിവരങ്ങൾ ലഭ്യമല്ല",

    // --- AI Advisory Messages ---
    adv_rain: "🌧️ കനത്ത മഴ. നനയ്ക്കരുത്.",
    adv_rain_soon: "☁️ മഴ വരാൻ സാധ്യതയുണ്ട്. മരുന്ന് തളിക്കുന്നത് വൈകിപ്പിക്കുക.",
    adv_wind: "💨 ശക്തമായ കാറ്റ്. സ്പ്രേ ചെയ്യുന്നത് ഒഴിവാക്കുക.",
    adv_heat: "☀️ ഉയർന്ന ചൂട്. വിളകൾക്ക് വെള്ളം നൽകുക.",
    adv_cold: "❄️ കുറഞ്ഞ താപനില. മഞ്ഞിൽ നിന്ന് സംരക്ഷിക്കുക.",
    adv_optimal: "✅ കാലാവസ്ഥ കൃഷിക്ക് അനുയോജ്യമാണ്.",

    // --- CROP YIELD WIZARD (NEW) ---
    step1: "സ്ഥലം",
    step2: "വിള വിവരങ്ങൾ",
    step3: "ഫലങ്ങൾ",
    
    // Step 1
    selectState: "സംസ്ഥാനം തിരഞ്ഞെടുക്കുക",
    selectRegion: "പ്രദേശം / ജില്ല",
    verifyLocation: "സ്ഥലം പരിശോധിക്കുക",
    locationFound: "സ്ഥലം കണ്ടെത്തി:",
    nextBtn: "അടുത്തത്",
    
    // Step 2
    selectCropLabel: "വിള തിരഞ്ഞെടുക്കുക",
    sowingDateLabel: "വിതയ്ക്കൽ തീയതി",
    landSizeLabel: "ഭൂമിയുടെ വലിപ്പം",
    unitLabel: "യൂണിറ്റ്",
    soilTypeLabel: "മണ്ണിന്റെ തരം",
    irrigationLabel: "ജലസേചന തരം",
    backBtn: "തിരികെ",
    calculateBtn: "കണക്കാക്കുക",
    
    // Dropdown Options
    drip: "തുള്ളി നന (90-95%)",
    sprinkler: "സ്പ്രിങ്കളർ (75-85%)",
    canal: "കനാൽ ജലസേചനം (60-70%)",
    tubewell: "കുഴൽക്കിണർ (70-80%)",
    flood: "വെള്ളപ്പൊക്ക ജലസേചനം (40-50%)",
    rainfed: "മഴയെ ആശ്രയിച്ചുള്ള (നനവില്ല)",

    // Side Card
    conversionTitle: "യൂണിറ്റ് പരിവർത്തനം",
    conversionNote: "കുറിപ്പ്: പ്രദേശത്തിനനുസരിച്ച് മൂല്യങ്ങൾ വ്യത്യാസപ്പെടാം.",
    
    // Results
    estimatedYield: "പ്രതീക്ഷിക്കുന്ന വിളവ്",
    confidence: "വിശ്വാസ്യത",
    weatherFactor: "കാലാവസ്ഥാ ഘടകം",
    recommendations: "ശുപാർശകൾ",
    bestSeason: "മികച്ച നടീൽ സീസൺ",
    newPrediction: "പുതിയ പ്രവചനം",

    // --- CROP ENCYCLOPEDIA KEYS ---
    encyclopediaTitle: "വിള വിജ്ഞാനകോശം",
    searchCrop: "വിള തിരയുക...",
    
    // Categories
    all: "എല്ലാം",
    grain: "ധാന്യങ്ങൾ",
    pulse: "പയറുവർഗ്ഗങ്ങൾ",
    vegetable: "പച്ചക്കറികൾ",
    fruit: "പഴങ്ങൾ",
    commercial: "നാണ്യവിളകൾ",

    // Labels
    seasonLabel: "സീസൺ",
    soilLabel: "മണ്ണിന്റെ തരം",
    waterLabel: "ജല ആവശ്യകത",
    tempLabel: "താപനില",

    // Values
    rabi: "റാബി (ശീതകാലം)",
    kharif: "ഖാരിഫ് (മൺസൂൺ)",
    zaid: "സെയ്ദ് (വേനൽ)",
    summer: "വേനൽ",
    winter: "ശീതകാലം",
    autumn: "ശരത്കാലം",
    allYear: "വർഷം മുഴുവനും",
    perennial: "ബഹുവർഷ വിള",

    loamy: "പശിമരാശി മണ്ണ്",
    clay: "കളിമണ്ണ്",
    sandy: "മണൽ മണ്ണ്",
    sandy_loam: "മണൽ കലർന്ന പശിമരാശി",
    black: "കരിമണ്ണ്",
    acidic: "അസിഡിക് മണ്ണ്",
    laterite: "വെട്ടുകൽ മണ്ണ്",
    clay_loam: "കളിമണ്ണ് കലർന്ന പശിമരാശി",

    high: "കൂടുതൽ",
    moderate: "മിതമായ",
    low: "കുറഞ്ഞ",

    // --- Crop Dictionary (Malayalam) ---
    crops: {
      "wheat": "ഗോതമ്പ്", "paddy": "നെല്ല്", "rice": "അരി", "maize": "ചോളം", "cotton": "പരുത്തി",
      "sugarcane": "കരിമ്പ്", "potato": "ഉരുളക്കിഴങ്ങ്", "kinnow": "കിന്നോ", "mustard": "കടുക്",
      "sunflower": "സൂര്യകാന്തി", "barley": "ബാർലി", "bajra": "ബജ്റ", "gram": "കടല",
      "jowar": "ജോവർ", "mango": "മാങ്ങ", "chickpea": "വെള്ളക്കടല", "arhar": "തുവര",
      "tur": "തുവര പരിപ്പ്", "apple": "ആപ്പിൾ", "tomato": "തക്കാളി", "ginger": "ഇഞ്ചി", "peach": "പീച്ച്",
      "plum": "പ്ലം", "garlic": "വെളുത്തുള്ളി", "soyabean": "സോയാബീൻ", "ragi": "റാഗി",
      "litchi": "ലിച്ചി", "amaranthus": "ചീര", "saffron": "കുങ്കുമപ്പൂവ്", "walnut": "വാൽനട്ട്",
      "cherry": "ചെറി", "almond": "ബദാം", "rajmash": "രാജ്മ", "apricot": "ആപ്രിക്കോട്ട്",
      "buckwheat": "ബക്ക്വീറ്റ്", "peas": "പയർ", "turnip": "ടേണിപ്പ്", "cauliflower": "കോളിഫ്ലവർ",
      "spinach": "ചീര", "carrot": "ക്യാരറ്റ്", "okra": "വെണ്ടക്ക", "onion": "സവാള", "guava": "പേരയ്ക്ക",
      "rose": "റോസാപ്പൂവ്", "guar": "ഗ്വാർ", "groundnut": "നിലക്കടല", "coriander": "മല്ലി",
      "cumin": "ജീരകം", "isabgol": "ഇസബ്ഗോൾ", "tobacco": "പുകയില", "castor": "ആവണക്ക്",
      "banana": "വാഴ", "grapes": "മുന്തിരി", "pomegranate": "മാതളനാരങ്ങ", "cashewnut": "കശുവണ്ടി",
      "coconut": "തേങ്ങ", "arecanut": "അടക്ക", "pineapple": "കൈതച്ചക്ക", "jackfruit": "ചക്ക",
      "sweet potato": "മധുരക്കിഴങ്ങ്", "orange": "ഓറഞ്ച്", "chilli": "മുളക്", "turmeric": "മഞ്ഞൾ",
      "coffee": "കാപ്പി", "tea": "ചായ", "tapioca": "കപ്പ", "rubber": "റബ്ബർ",
      "black gram": "ഉഴുന്ന്", "green gram": "ചെറുപയർ", "jute": "ചണം", "sesame": "എള്ള്",
      "cardamom": "ഏലക്ക", "pepper": "കുരുമുളക്", "millet": "തിന", "kiwi": "കിവി",
      "lemon": "നാരങ്ങ", "passion fruit": "പാഷൻ ഫ്രൂട്ട്", "drumstick": "മുരിങ്ങ", 
      "breadfruit": "കടച്ചക്ക", "cucumber": "വെള്ളരി", "pumpkin": "മത്തങ്ങ", 
      "sapota": "സപ്പോട്ട", "mesta": "മെസ്റ്റ", "clove": "ഗ്രാമ്പൂ", "nutmeg": "ജാതിക്ക", "cinnamon": "കറുവപ്പട്ട"
    }
  },

  kn: { 
    label: "ಕನ್ನಡ (Kannada)", 
    welcome: "ಅಗ್ರಿ ವಿಷನ್‌ಗೆ ಸುಸ್ವಾಗತ", 
    select: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ", 
    tagline: "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಸ್ಮಾರ್ಟ್ ಮುನ್ಸೂಚನೆಗಳೊಂದಿಗೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ", 
    emailLabel: "ಇಮೇಲ್ ವಿಳಾಸ", 
    emailPlace: "kisan@example.com", 
    passLabel: "ಪಾಸ್‌ವರ್ಡ್", 
    nameLabel: "ಪೂರ್ಣ ಹೆಸರು", 
    confirmPass: "ಪಾಸ್‌ವರ್ಡ್ ಖಚಿತಪಡಿಸಿ", 
    loginBtn: "ಲಾಗಿನ್", 
    signupBtn: "ಸೈನ್ ಅಪ್", 
    noAccount: "ಖಾತೆ ಇಲ್ಲವೇ?", 
    hasAccount: "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?", 
    linkLogin: "ಲಾಗಿನ್", 
    linkSignup: "ಸೈನ್ ಅಪ್", 

    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", 
    profile: "ನನ್ನ ಪ್ರೊಫೈಲ್", 
    darkMode: "ಡಾರ್ಕ್ ಮೋಡ್", 
    comingSoon: "ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ", 
    logout: "ಲಾಗ್ ಔಟ್", 
    welcomeUser: "ಸುಸ್ವಾಗತ", 

    card1Title: "ಬೆಳೆ ಇಳುವರಿ ಮುನ್ಸೂಚನೆ", 
    card1Desc: "ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನ ಆಧಾರಿತ AI ಇಳುವರಿ ಅಂದಾಜು.", 
    card2Title: "ಹವಾಮಾನ ಮತ್ತು ಮಂಡಿ", 
    card2Desc: "ಲೈವ್ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಗಳು.", 
    card3Title: "ಬೆಳೆ ವಿಶ್ವಕೋಶ", 
    card3Desc: "ಎಲ್ಲಾ ಭಾರತೀಯ ಬೆಳೆಗಳಿಗೆ ಬೆಳೆಯುವ ಪರಿಸ್ಥಿತಿಗಳ ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ.", 

    personalDetails: "ವೈಯಕ್ತಿಕ ವಿವರಗಳು", 
    security: "ಭದ್ರತೆ", 
    fullName: "ಪೂರ್ಣ ಹೆಸರು", 
    emailAddr: "ಇಮೇಲ್ ವಿಳಾಸ", 
    oldPass: "ಹಳೆಯ ಪಾಸ್‌ವರ್ಡ್", 
    newPass: "ಹೊಸ ಪಾಸ್‌ವರ್ಡ್", 
    confirmNewPass: "ಹೊಸ ಪಾಸ್‌ವರ್ಡ್ ಖಚಿತಪಡಿಸಿ", 
    updateBtn: "ಪಾಸ್‌ವರ್ಡ್ ನವೀಕರಿಸಿ", 
    recentPred: "ಇತ್ತೀಚಿನ ಮುನ್ಸೂಚನೆಗಳು", 
    savedLoc: "ಉಳಿಸಿದ ಸ್ಥಳಗಳು", 
    passMismatch: "ಹೊಸ ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ!", 
    enterAllFields: "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಪಾಸ್‌ವರ್ಡ್ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.", 

    weatherTitle: "ಹವಾಮಾನ ಮತ್ತು ಮಾರುಕಟ್ಟೆ", 
    monitor: "ಸ್ಥಳ", 
    enterPincode: "ಪಿನ್ ಕೋಡ್ ನಮೂದಿಸಿ", 
    search: "ಹುಡುಕಿ", 
    aiAdvisory: "ಅಗ್ರಿ-ವಿಷನ್ AI ಸಲಹೆ", 
    humidity: "ತೇವಾಂಶ", 
    wind: "ಗಾಳಿ", 
    pressure: "ಒತ್ತಡ", 
    marketRates: "ಮಾರುಕಟ್ಟೆ ದರಗಳು", 
    source: "ಮೂಲ", 
    crop: "ಬೆಳೆ", 
    price: "ಬೆಲೆ (₹/Q)", 
    trend: "ಪ್ರವೃತ್ತಿ", 
    noData: "ಯಾವುದೇ ಮಾರುಕಟ್ಟೆ ಡೇಟಾ ಲಭ್ಯವಿಲ್ಲ",

    // --- AI Advisory Messages ---
    adv_rain: "🌧️ ಭಾರೀ ಮಳೆ. ನೀರಾವರಿ ನಿಲ್ಲಿಸಿ.",
    adv_rain_soon: "☁️ ಮಳೆಯಾಗುವ ಸಾಧ್ಯತೆ ಇದೆ. ಸಿಂಪಡಣೆಯನ್ನು ಮುಂದೂಡಿ.",
    adv_wind: "💨 ಬಲವಾದ ಗಾಳಿ. ಸಿಂಪಡಿಸುವುದನ್ನು ತಪ್ಪಿಸಿ.",
    adv_heat: "☀️ ಶಾಖದ ಎಚ್ಚರಿಕೆ. ಬೆಳೆಗಳಿಗೆ ನೀರುಣಿಸಿ.",
    adv_cold: "❄️ ಕಡಿಮೆ ತಾಪಮಾನ. ಹಿಮದಿಂದ ರಕ್ಷಿಸಿ.",
    adv_optimal: "✅ ಹವಾಮಾನವು ಕೃಷಿಗೆ ಸೂಕ್ತವಾಗಿದೆ.",

    // --- CROP YIELD WIZARD (NEW) ---
    step1: "ಸ್ಥಳ",
    step2: "ಬೆಳೆ ವಿವರಗಳು",
    step3: "ಫಲಿತಾಂಶಗಳು",
    
    // Step 1
    selectState: "ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    selectRegion: "ಪ್ರದೇಶ / ಜಿಲ್ಲೆ",
    verifyLocation: "ಸ್ಥಳವನ್ನು ಪರಿಶೀಲಿಸಿ",
    locationFound: "ಸ್ಥಳ ಪತ್ತೆಯಾಗಿದೆ:",
    nextBtn: "ಮುಂದೆ",
    
    // Step 2
    selectCropLabel: "ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    sowingDateLabel: "ಬಿತ್ತನೆ ದಿನಾಂಕ",
    landSizeLabel: "ಭೂಮಿಯ ಅಳತೆ",
    unitLabel: "ಘಟಕ",
    soilTypeLabel: "ಮಣ್ಣಿನ ವಿಧ",
    irrigationLabel: "ನೀರಾವರಿ ಪ್ರಕಾರ",
    backBtn: "ಹಿಂದಕ್ಕೆ",
    calculateBtn: "ಇಳುವರಿ ಲೆಕ್ಕಾಚಾರ",
    
    // Dropdown Options
    drip: "ಹನಿ ನೀರಾವರಿ (90-95%)",
    sprinkler: "ತುಂತುರು ವ್ಯವಸ್ಥೆ (75-85%)",
    canal: "ಕಾಲುವೆ ನೀರಾವರಿ (60-70%)",
    tubewell: "ಕೊಳವೆ ಬಾವಿ (70-80%)",
    flood: "ಪ್ರವಾಹ ನೀರಾವರಿ (40-50%)",
    rainfed: "ಮಳೆಯಾಶ್ರಿತ (ನೀರಾವರಿ ಇಲ್ಲ)",

    // Side Card
    conversionTitle: "ಘಟಕ ಪರಿವರ್ತನೆ",
    conversionNote: "ಗಮನಿಸಿ: ಮೌಲ್ಯಗಳು ಪ್ರದೇಶದ ಪ್ರಕಾರ ಬದಲಾಗಬಹುದು.",
    
    // Results
    estimatedYield: "ಅಂದಾಜು ಇಳುವರಿ",
    confidence: "ವಿಶ್ವಾಸ ಮಟ್ಟ",
    weatherFactor: "ಹವಾಮಾನ ಅಂಶ",
    recommendations: "ಶಿಫಾರಸುಗಳು",
    bestSeason: "ಉತ್ತಮ ಬಿತ್ತನೆ ಕಾಲ",
    newPrediction: "ಹೊಸ ಮುನ್ಸೂಚನೆ",

    // --- CROP ENCYCLOPEDIA KEYS ---
    encyclopediaTitle: "ಬೆಳೆ ವಿಶ್ವಕೋಶ",
    searchCrop: "ಬೆಳೆಯನ್ನು ಹುಡುಕಿ...",
    
    // Categories
    all: "ಎಲ್ಲಾ",
    grain: "ಧಾನ್ಯಗಳು",
    pulse: "ಬೇಳೆಕಾಳುಗಳು",
    vegetable: "ತರಕಾರಿಗಳು",
    fruit: "ಹಣ್ಣುಗಳು",
    commercial: "ವಾಣಿಜ್ಯ ಬೆಳೆಗಳು",

    // Labels
    seasonLabel: "ಋತು",
    soilLabel: "ಮಣ್ಣಿನ ವಿಧ",
    waterLabel: "ನೀರಿನ ಅವಶ್ಯಕತೆ",
    tempLabel: "ತಾಪಮಾನ",

    // Values
    rabi: "ರಬಿ (ಚಳಿಗಾಲ)",
    kharif: "ಖಾರಿಫ್ (ಮುಂಗಾರು)",
    zaid: "ಜೈದ್ (ಬೇಸಿಗೆ)",
    summer: "ಬೇಸಿಗೆ",
    winter: "ಚಳಿಗಾಲ",
    autumn: "ಶರತ್ಕಾಲ",
    allYear: "ವರ್ಷವಿಡೀ",
    perennial: "ಬಹುವಾರ್ಷಿಕ",

    loamy: "ಗೋಡು ಮಣ್ಣು",
    clay: "ಜೇಡಿ ಮಣ್ಣು",
    sandy: "ಮರಳಿನ ಮಣ್ಣು",
    sandy_loam: "ಮರಳು ಮಿಶ್ರಿತ ಗೋಡು ಮಣ್ಣು",
    black: "ಕಪ್ಪು ಮಣ್ಣು",
    acidic: "ಆಮ್ಲೀಯ ಮಣ್ಣು",
    laterite: "ಲ್ಯಾಟರೈಟ್ ಮಣ್ಣು",
    clay_loam: "ಜೇಡಿ ಮಿಶ್ರಿತ ಗೋಡು ಮಣ್ಣು",

    high: "ಹೆಚ್ಚು",
    moderate: "ಮಧ್ಯಮ",
    low: "ಕಡಿಮೆ",

    // --- Crop Dictionary (Kannada) ---
    crops: {
      "wheat": "ಗೋಧಿ", "paddy": "ಭತ್ತ", "rice": "ಅಕ್ಕಿ", "maize": "ಜೋಳ", "cotton": "ಹತ್ತಿ",
      "sugarcane": "ಕಬ್ಬು", "potato": "ಆಲೂಗಡ್ಡೆ", "kinnow": "ಕಿನ್ನೋ", "mustard": "ಸಾಸಿವೆ",
      "sunflower": "ಸೂರ್ಯಕಾಂತಿ", "barley": "ಬಾರ್ಲಿ", "bajra": "ಸಜ್ಜೆ", "gram": "ಕಡಲೆ",
      "jowar": "ಜೋಳ", "mango": "ಮಾವಿನಹಣ್ಣು", "chickpea": "ಕಡಲೆಕಾಳು", "arhar": "ತೊಗರಿ",
      "tur": "ತೊಗರಿ ಬೇಳೆ", "apple": "ಸೇಬು", "tomato": "ಟೊಮ್ಯಾಟೊ", "ginger": "ಶುಂಠಿ", "peach": "ಪೀಚ್",
      "plum": "ಪ್ಲಮ್", "garlic": "ಬೆಳ್ಳುಳ್ಳಿ", "soyabean": "ಸೋಯಾಬೀನ್", "ragi": "ರಾಗಿ",
      "litchi": "ಲಿಚಿ", "amaranthus": "ದಂಟು", "saffron": "ಕೇಸರಿ", "walnut": "ವಾಲ್ನಟ್",
      "cherry": "ಚೆರ್ರಿ", "almond": "ಬಾದಾಮಿ", "rajmash": "ರಾಜ್ಮಾ", "apricot": "ಏಪ್ರಿಕಾಟ್",
      "buckwheat": "ಬಕ್ವೀಟ್", "peas": "ಬಟಾಣಿ", "turnip": "ಟರ್ನಿಪ್", "cauliflower": "ಹೂಕೋಸು",
      "spinach": "ಪಾಲಕ್", "carrot": "ಕ್ಯಾರೆಟ್", "okra": "ಬೆಂಡೆಕಾಯಿ", "onion": "ಈರುಳ್ಳಿ", "guava": "ಸೀಬೆಹಣ್ಣು",
      "rose": "ಗುಲಾಬಿ", "guar": "ಗೋರಿಕಾಯಿ", "groundnut": "ಕಡಲೆಕಾಯಿ", "coriander": "ಕೊತ್ತಂಬರಿ",
      "cumin": "ಜೀರಿಗೆ", "isabgol": "ಇಸಬ್ಗೋಲ್", "tobacco": "ತಂಬಾಕು", "castor": "ಔಡಲ",
      "banana": "ಬಾಳೆಹಣ್ಣು", "grapes": "ದ್ರಾಕ್ಷಿ", "pomegranate": "ದಾಳಿಂಬೆ", "cashewnut": "ಗೋಡಂಬಿ",
      "coconut": "ತೆಂಗಿನಕಾಯಿ", "arecanut": "ಅಡಿಕೆ", "pineapple": "ಅನಾನಸ್", "jackfruit": "ಹಲಸಿನ ಹಣ್ಣು",
      "sweet potato": "ಸಿಹಿ ಗೆಣಸು", "orange": "ಕಿತ್ತಳೆ", "chilli": "ಮೆಣಸಿನಕಾಯಿ", "turmeric": "ಅರಿಶಿನ",
      "coffee": "ಕಾಫಿ", "tea": "ಚಹಾ", "tapioca": "ಮರಗೆಣಸು", "rubber": "ರಬ್ಬರ್",
      "black gram": "ಉದ್ದಿನ ಬೇಳೆ", "green gram": " ಹೆಸರು ಕಾಳು", "jute": "ಸೆಣಬು", "sesame": "ಎಳ್ಳು",
      "cardamom": "ಏಲಕ್ಕಿ", "pepper": "ಮೆಣಸು", "millet": "ಸಿರಿಧಾನ್ಯ", "kiwi": "ಕಿವಿ",
      "lemon": "ನಿಂಬೆ", "passion fruit": "ಪ್ಯಾಶನ್ ಫ್ರೂಟ್", "drumstick": "ನುಗ್ಗೆಕಾಯಿ", 
      "breadfruit": "ಬ್ರೆಡ್ ಫ್ರೂಟ್", "cucumber": "ಸೌತೆಕಾಯಿ", "pumpkin": "ಕುಂಬಳಕಾಯಿ", 
      "sapota": "ಸಪೋಟ", "mesta": "ಮೆಸ್ಟಾ", "clove": "ಲವಂಗ", "nutmeg": "ಜಾಯಿಕಾಯಿ", "cinnamon": "ದಾಲ್ಚಿನ್ನಿ"
    }
  }
};