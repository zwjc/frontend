import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="container">
        <p>&copy; {new Date().getFullYear()} HomeEarths. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
