import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Products from './products';
import About from './about';
import Contact from './contact';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;