import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const Header: React.FC = () => (
  <header
    style={{
      background: 'var(--color-white)',
      padding: 'var(--space-2)',
      marginBottom: 'var(--space-5)',
      borderBottom: '1px solid #195833',
    }}
  >
    <nav
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'var(--space-5)',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img
          src={logo}
          alt="HomeEarths Logo"
          style={{ height: '60px', marginRight: '1rem' }}
        />
      </Link>

  
      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <Link to="/products"   className="header-button">Products</Link>
        <Link to="/about"      className="header-button">About Us</Link>
        <Link to="/contact"    className="header-button">Contact</Link>

      </div>
    </nav>
  </header>
);

export default Header;
