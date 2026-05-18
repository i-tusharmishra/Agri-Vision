// Scientific Standards for Crop Requirements
// Yield is in Quintals per Hectare

export const cropStandards = {
    wheat: { 
      N: 120, P: 60, K: 40, ph: 6.5, 
      baseYield: 45, price: 2275,
      minTemp: 10, maxTemp: 25, minHum: 40,
      idealMonth: 11, latePenalty: 0.05 
    },
    rice: { 
      N: 100, P: 50, K: 50, ph: 6.0, 
      baseYield: 60, price: 2200,
      minTemp: 25, maxTemp: 35, minHum: 70,
      idealMonth: 6, latePenalty: 0.03
    },
    maize: { 
      N: 120, P: 60, K: 40, ph: 6.5, 
      baseYield: 50, price: 2090,
      minTemp: 21, maxTemp: 30, minHum: 50,
      idealMonth: 6, latePenalty: 0.02
    },
    sugarcane: { 
      N: 150, P: 60, K: 60, ph: 7.0, 
      baseYield: 800, price: 340,
      minTemp: 20, maxTemp: 35, minHum: 60,
      idealMonth: 2, latePenalty: 0.01
    },
    cotton: { 
      N: 120, P: 60, K: 60, ph: 7.5, 
      baseYield: 25, price: 6620,
      minTemp: 25, maxTemp: 35, minHum: 50,
      idealMonth: 5, latePenalty: 0.03
    },
    mustard: { 
      N: 80, P: 40, K: 20, ph: 6.8, 
      baseYield: 18, price: 5650,
      minTemp: 10, maxTemp: 25, minHum: 40,
      idealMonth: 10, latePenalty: 0.04
    },
    potato: { 
      N: 120, P: 80, K: 100, ph: 5.5, 
      baseYield: 250, price: 800,
      minTemp: 15, maxTemp: 25, minHum: 50,
      idealMonth: 10, latePenalty: 0.05
    },
    tomato: { 
      N: 100, P: 60, K: 60, ph: 6.5, 
      baseYield: 300, price: 1500,
      minTemp: 20, maxTemp: 30, minHum: 60,
      idealMonth: 10, latePenalty: 0.05
    }
  };
  
  export const soilPresets = {
    "alluvial": { n: 50, p: 20, k: 30, ph: 7.0, label: "Alluvial Soil (Jaloor)" },
    "black": { n: 40, p: 15, k: 40, ph: 7.5, label: "Black Soil (Kali Mitti)" },
    "red": { n: 30, p: 15, k: 20, ph: 6.0, label: "Red Soil (Lal Mitti)" },
    "laterite": { n: 20, p: 10, k: 15, ph: 5.5, label: "Laterite Soil" },
    "sandy": { n: 20, p: 10, k: 30, ph: 7.5, label: "Sandy Soil (Retili)" },
    "clay": { n: 60, p: 25, k: 30, ph: 8.0, label: "Clay Soil (Chikni)" },
    "loamy": { n: 40, p: 40, k: 40, ph: 6.5, label: "Loamy Soil" }
  };
  
  export const unitMultipliers = {
    "hectare": 1,         
    "acre": 0.4047,       
    "sqft": 0.00000929,   
    "bigha": 0.25,        
    "guntha": 0.0101
  };
  
  export const getConfidenceLevel = (score) => {
    if (score > 80) return "High";
    if (score > 50) return "Medium";
    return "Low";
  };