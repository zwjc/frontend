import React from 'react';
import { motion } from 'framer-motion';

const Shop: React.FC = () => {
  const products = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: `$${(Math.random() * 200 + 50).toFixed(2)}`,
    image: `https://via.placeholder.com/300x400.png/EBEBEB/000000?text=Product+${i + 1}`,
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
          <motion.div
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
