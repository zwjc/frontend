import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const CartIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 4H3V6H5L8 14H19V12H9.42L8.1 8H19V6H6.21L5.27 4H7ZM7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18ZM17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z"
      fill="currentColor"
    />
  </svg>
);

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

      <Link to="/cart" className="header-button">
        <CartIcon size={20} />
        <span>Cart</span>
      </Link>
    </nav>
  </header>
);

export default Header;
