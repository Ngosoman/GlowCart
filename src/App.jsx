import React from 'react';
import { AuthProvider } from '../src/context/AuthContext';
import AppNavigator from './navigation/AppNavigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;