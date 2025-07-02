import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$100', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Product 2', price: '$150', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Product 3', price: '$200', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <div className="container">
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>HomeEarths</h1>
        <p>Discover our new collection</p>
        <Link to="/shop" className="cta-button">Shop Now</Link>
      </motion.section>

      <motion.section
        className="featured-products"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
