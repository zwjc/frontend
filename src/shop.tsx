import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Shop: React.FC = () => {
  const products = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: `${(Math.random() * 200 + 50).toFixed(2)}`,
  }));

  return (
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', fontSize: '3rem', margin: '4rem 0' }}
      >
        Our Collection
      </motion.h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
            <motion.div
              className="product-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.0001 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src="/images/placeholder-image.jpg" alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
