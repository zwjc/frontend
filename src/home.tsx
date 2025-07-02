import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$100' },
    { id: 2, name: 'Product 2', price: '$150' },
    { id: 3, name: 'Product 3', price: '$200' },
  ];

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <>
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video autoPlay loop muted className="background-video">
          <source src="/videos/placeholder-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>HomeEarths</h1>
          <p>Discover our new collection</p>
          <Link to="/shop" className="cta-button">Shop Now</Link>
        </div>
      </motion.section>

      <motion.div
        style={{
          y,
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          backgroundColor: '#8B4513',
          borderRadius: '50%',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Scroll
      </motion.div>

      <motion.section
        className="featured-products"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
              <motion.div
                className="product-card"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                
              >
                <img src="/images/placeholder-image.jpg" alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Home;
