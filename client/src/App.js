import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSelection from './pages/LanguageSelection';
import Login from './pages/Login';
import Signup from './pages/Signup'; // Import the new page
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import WeatherMandi from './pages/WeatherMandi';
import CropGuide from './pages/CropGuide';
import CropYield from './pages/CropYield';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LanguageSelection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={
           <ProtectedRoute>
             <Profile />
           </ProtectedRoute>
         } 
       />
       <Route 
            path="/market-weather" element={
              <ProtectedRoute>
                <WeatherMandi />
              </ProtectedRoute>
            } 
          />
        <Route path="/crop-guide" element={<ProtectedRoute><CropGuide /></ProtectedRoute>} />
        <Route path="/prediction" element={
    <ProtectedRoute>
      <CropYield />
    </ProtectedRoute>
  } 
/>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;