import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import Profile from '../screens/Profile';

const AppNavigator = () => {
  return (
    <Router>
      <Routes>
        
        <Route 
          path="/" 
          element={<Onboarding />} 
        />
        
        {/* Auth Screens */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Main App Screens */}
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppNavigator;