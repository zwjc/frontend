import React from 'react';

const Footer: React.FC = () => (
  <footer style={{ background: 'var(--color-secondary-dark)', padding: 'var(--space-3)', textAlign: 'center', color: 'white' }}>
    <p>&copy; {new Date().getFullYear()} HomeEarths. All rights reserved.</p>
  </footer>
);

export default Footer;