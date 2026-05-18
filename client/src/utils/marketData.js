export const getMarketData = (state) => {
    const stateKey = state.toLowerCase();
    
    // Static Fallback Data
    const database = {
      "punjab": [
        { crop: "Wheat", price: "2,275", trend: "up" },
        { crop: "Paddy (Basmati)", price: "3,800", trend: "up" },
        { crop: "Maize", price: "2,050", trend: "down" },
        { crop: "Potato", price: "850", trend: "stable" }
      ],
      "haryana": [
        { crop: "Wheat", price: "2,280", trend: "stable" },
        { crop: "Mustard", price: "5,450", trend: "down" }
      ],
      "maharashtra": [
        { crop: "Cotton", price: "7,100", trend: "up" },
        { crop: "Onion", price: "1,800", trend: "down" }
      ],
      // Default for unknown states
      "default": [
        { crop: "Rice (Common)", price: "2,200", trend: "up" },
        { crop: "Wheat", price: "2,125", trend: "stable" },
        { crop: "Tomato", price: "1,500", trend: "up" }
      ]
    };
  
    const key = Object.keys(database).find(k => stateKey.includes(k));
    return key ? database[key] : database["default"];
  };