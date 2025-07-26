import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './home';
import Shop from './shop';
import About from './about';
import Contact from './contact';
import AuthForm from './AuthForm';
import Cart from './Cart';
import Profile from './Profile'; // Import Profile component
import logo from './images/logo.png';
import ProductDetail from './productDetail';
import Footer from './footer';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate(); // Use useNavigate hook

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('supabase.auth.token');
      setIsAuthenticated(!!token);
    };
    checkAuth();

    // Listen for changes in local storage (e.g., from login/logout)
    window.addEventListener('storage', checkAuth);
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogout = async () => {
    // Call backend logout endpoint if needed, for now just clear local storage
    try {
      const token = localStorage.getItem('supabase.auth.token');
      if (token) {
        const parsedToken = JSON.parse(token);
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${parsedToken.access_token}`,
          },
        });
      }
    } catch (error) {
      console.error('Error logging out from backend:', error);
    }
    localStorage.removeItem('supabase.auth.token');
    setIsAuthenticated(false);
    navigate('/'); // Redirect to home after logout
  };

  return (
    <>
      <motion.header
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <img src={logo} alt="HomeEarths Logo" className="logo-img" />
        </Link>
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/shop" className="nav-link" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="nav-link" onClick={() => setIsMenuOpen(false)}>Profile</Link>
              <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="nav-link" style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit' }}>Logout</button>
            </>
          ) : (
            <Link to="/auth" className="nav-link" onClick={() => setIsMenuOpen(false)}>Login/Sign Up</Link>
          )}
          <Link to="/cart" className="nav-link" onClick={() => setIsMenuOpen(false)}>Cart</Link>
        </nav>
        <Link to="/cart" className="cart-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        </Link>
      </motion.header>
      <main>
        {/* <p>Backend Message: {backendMessage}</p> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} /> {/* New protected route */}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
