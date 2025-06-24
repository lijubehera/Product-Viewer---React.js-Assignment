import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProductPage from './ProductPage';
import ProtectedRoute from './ProtectedRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<ProtectedRoute><ProductPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;


