import React from 'react';

const Cart: React.FC = () => (
  <main style={{ padding: 'var(--space-5)' }}>
    <h1 style={{ fontFamily: 'var(--font-bold)', color: 'var(--color-base-dark)' }}>
      Cart
    </h1>
    <p style={{ marginTop: 'var(--space-3)' }}>
      Here you can review your selected products before checkout.
    </p>
    {/* Placeholder for cart items */}
  </main>
);

export default Cart;
