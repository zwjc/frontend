import React from 'react';
import AppRoutes from './routes';
import './theme.css';
import Header from './header';
import './App.css';

const App: React.FC = () => (
  <>
    <Header />
    <AppRoutes />
  </>
);

export default App;