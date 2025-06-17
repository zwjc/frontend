import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header style={{ background: 'var(--color-base-dark)', padding: 'var(--space-3)' }}>
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ color: 'white', fontFamily: 'var(--font-italic)', fontSize: '1.5rem' }}>
        HomeEarths
      </Link>
      <div>
        <Link to="/" style={{ margin: '0 var(--space-2)', color: 'white' }}>Home</Link>
        {/* More links */}
      </div>
    </nav>
  </header>
);

export default Header;