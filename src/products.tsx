import React from 'react';

const Products: React.FC = () => (
  <main style={{ padding: 'var(--space-5)' }}>
    <h1 style={{ fontFamily: 'var(--font-bold)', color: 'var(--color-base-dark)' }}>
      Products
    </h1>
    <p style={{ marginTop: 'var(--space-3)' }}>
      Here you can browse all of our products.
    </p>
    {/* Placeholder for product listings */}
  </main>
);

export default Products;
