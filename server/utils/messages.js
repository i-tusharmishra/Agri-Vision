const messages = {
  en: {
    userExists: "User already exists",
    registered: "Your account has been registered successfully",
    noAccount: "No account found with this email",
    wrongPassword: "Wrong password",
    serverError: "Internal Server error",
    loginSuccess: "Login successful",
    // New Keys
    incorrectOldPass: "Incorrect old password",
    passUpdated: "Password updated successfully"
  },
  hi: {
    userExists: "उपयोगकर्ता पहले से मौजूद है",
    registered: "आपका खाता सफलतापूर्वक पंजीकृत हो गया है",
    noAccount: "इस ईमेल के साथ कोई खाता नहीं मिला",
    wrongPassword: "गलत पासवर्ड",
    serverError: "सर्वर त्रुटि",
    loginSuccess: "लॉगिन सफल रहा",
    // New Keys
    incorrectOldPass: "पुराना पासवर्ड गलत है",
    passUpdated: "पासवर्ड सफलतापूर्वक अपडेट किया गया"
  },
  pa: {
    userExists: "ਯੂਜ਼ਰ ਪਹਿਲਾਂ ਤੋਂ ਮੌਜੂਦ ਹੈ",
    registered: "ਤੁਹਾਡਾ ਖਾਤਾ ਸਫਲਤਾਪੂਰਵਕ ਰਜਿਸਟਰ ਹੋ ਗਿਆ ਹੈ",
    noAccount: "ਇਸ ਈਮੇਲ ਨਾਲ ਕੋਈ ਖਾਤਾ ਨਹੀਂ ਮਿਲਿਆ",
    wrongPassword: "ਗਲਤ ਪਾਸਵਰਡ",
    serverError: "ਸਰਵਰ ਗਲਤੀ",
    loginSuccess: "ਲੌਗਇਨ ਸਫਲ ਰਿਹਾ",
    // New Keys
    incorrectOldPass: "ਪੁਰਾਣਾ ਪਾਸਵਰਡ ਗਲਤ ਹੈ",
    passUpdated: "ਪਾਸਵਰਡ ਸਫਲਤਾਪੂਰਵਕ ਅੱਪਡੇਟ ਕੀਤਾ ਗਿਆ"
  },
  ta: {
    userExists: "பயனர் ஏற்கனவே உள்ளார்",
    registered: "உங்கள் கணக்கு வெற்றிகரமாக பதிவு செய்யப்பட்டது",
    noAccount: "இந்த மின்னஞ்சலில் கணக்கு எதுவும் இல்லை",
    wrongPassword: "தவறான கடவுச்சொல்",
    serverError: "சர்வர் பிழை",
    loginSuccess: "உள்நுழைவு வெற்றிகரமாக உள்ளது",
    // New Keys
    incorrectOldPass: "பழைய கடவுச்சொல் தவறானது",
    passUpdated: "கடவுச்சொல் வெற்றிகரமாக புதுப்பிக்கப்பட்டது"
  },
  te: {
    userExists: "వినియోగదారు ఇప్పటికే ఉన్నారు",
    registered: "మీ ఖాతా విజయవంతంగా నమోదు చేయబడింది",
    noAccount: "ఈ ఇమెయిల్‌తో ఖాతా కనుగొనబడలేదు",
    wrongPassword: "తప్పు పాస్‌వర్డ్",
    serverError: "సర్వర్ లోపం",
    loginSuccess: "లాగిన్ విజయవంతమైంది",
    // New Keys
    incorrectOldPass: "పాత పాస్‌వర్డ్ తప్పు",
    passUpdated: "పాస్‌వర్డ్ విజయవంతంగా నవీకరించబడింది"
  },
  ml: {
    userExists: "ഉപയോക്താവ് നിലവിലുണ്ട്",
    registered: "നിങ്ങളുടെ അക്കൗണ്ട് വിജയകരമായി രജിസ്റ്റർ ചെയ്തു",
    noAccount: "ഈ ഇമെയിലിൽ അക്കൗണ്ട് കണ്ടെത്തിയില്ല",
    wrongPassword: "തെറ്റായ പാസ്‌വേഡ്",
    serverError: "സെർവർ പിശക്",
    loginSuccess: "ലോഗിൻ വിജയിച്ചു",
    // New Keys
    incorrectOldPass: "പഴയ പാസ്‌വേഡ് തെറ്റാണ്",
    passUpdated: "പാസ്‌വേഡ് വിജയകരമായി അപ്‌ഡേറ്റുചെയ്‌തു"
  },
  kn: {
    userExists: "ಬಳಕೆದಾರರು ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದಾರೆ",
    registered: "ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನೋಂದಾಯಿಸಲಾಗಿದೆ",
    noAccount: "ಈ ಇಮೇಲ್‌ನೊಂದಿಗೆ ಯಾವುದೇ ಖಾತೆ ಕಂಡುಬಂದಿಲ್ಲ",
    wrongPassword: "ತಪ್ಪು ಪಾಸ್‌ವರ್ಡ್",
    serverError: "ಸರ್ವರ್ ದೋಷ",
    loginSuccess: "ಲಾಗಿನ್ ಯಶಸ್ವಿಯಾಗಿದೆ",
    // New Keys
    incorrectOldPass: "ಹಳೆಯ ಪಾಸ್‌ವರ್ಡ್ ತಪ್ಪಾಗಿದೆ",
    passUpdated: "ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ"
  }
};

const getMessage = (lang, key) => {
  const selectedLang = messages[lang] ? lang : 'en';
  // Fallback to English message if key is missing in selected language
  return messages[selectedLang][key] || messages['en'][key];
};

module.exports = getMessage;