import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* Add more routes here */}
  </Routes>
);

export default AppRoutes;