import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: '3rem', marginBottom: '2rem' }}
      >
        About Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}
      >
        [Your company story, mission, and values will go here. This is placeholder text. Replace it with your own compelling narrative about what makes your brand unique.]
      </motion.p>
    </div>
  );
};

export default About;
