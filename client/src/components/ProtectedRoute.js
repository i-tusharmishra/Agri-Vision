import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if the user has a token (is logged in)
  const token = localStorage.getItem('token');

  // If no token, kick them back to Login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If token exists, let them pass to the Protected Page (Dashboard/Profile)
  return children;
};

export default ProtectedRoute;