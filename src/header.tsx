import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const Header: React.FC = () => (
  <header style={{ background: 'var(--color-neutral-cool)', padding: 'var(--space-3)' }}>
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
        <img src={logo} alt="Logo" style={{ height: '80px', marginRight: '1rem' }} />
        <h1 className="header-title">
          <span className="title-home">Home</span>
          <span className="title-earths">Earths</span>
        </h1>
      </Link>
      <div>
        <Link to="/" style={{ margin: '0 var(--space-2)', color: '#9ea298' }}>Home</Link> {/*hide the link*/}
        {/* More links */}
      </div>
    </nav>
  </header>
);

export default Header;