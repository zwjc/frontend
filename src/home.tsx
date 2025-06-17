import React from 'react';
import Layout from './layout';
import Button from './button';
import './theme.css';

const Home: React.FC = () => (
<Layout>
  <h1 className="home-title">
    <span className="title-home">Home</span>
    <span className="title-earths">Earths</span>
  </h1>

  <p className="italic-line">
    Grow <span className="highlight-green">Green</span> at Home
  </p>
  
  <div className="button-wrapper">
    <Button variant="secondary">Get Started</Button>
  </div>
</Layout>
);

export default Home;