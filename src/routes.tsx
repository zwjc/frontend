import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Products from './products';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/about" element={<div>About Us Page</div>} />
    <Route path="/contact" element={<div>Contact Page</div>} />
    {/* Add more routes here */}
  </Routes>
);

export default AppRoutes;