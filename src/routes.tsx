import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Products from './products';
import About from './about';
import Contact from './contact';
import Cart from './cart';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
);

export default AppRoutes;