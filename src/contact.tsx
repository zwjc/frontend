import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: '3rem', marginBottom: '2rem' }}
      >
        Contact Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}
      >
        Test website for me
      </motion.p>
    </div>
  );
};

export default Contact;
