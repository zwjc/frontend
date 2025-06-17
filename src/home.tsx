import React from 'react';
import Layout from './layout';
import Button from './button';

const Home: React.FC = () => (
  <Layout>
    <h1 style={{ color: 'var(--color-secondary-dark)' }}>Welcome to HomeEarths!</h1>
    <p>Hello Woooooooooooorld</p>
    <Button variant="primary">Button</Button>
  </Layout>
);

export default Home;