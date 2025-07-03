import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
}

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cartMessage, setCartMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/products`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId: string) => {
    const token = localStorage.getItem('supabase.auth.token');
    if (!token) {
      setCartMessage('Please log in to add items to your cart.');
      return;
    }

    try {
      const parsedToken = JSON.parse(token);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/cart/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${parsedToken.access_token}`,
        },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      if (response.ok) {
        setCartMessage('Item added to cart!');
      } else {
        const errorData = await response.json();
        setCartMessage(`Failed to add item to cart: ${errorData.message || response.statusText}`);
      }
    } catch (error: any) {
      setCartMessage(`Error adding to cart: ${error.message}`);
    }
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
      {cartMessage && <p style={{ textAlign: 'center', color: cartMessage.includes('Failed') || cartMessage.includes('Error') ? 'red' : 'green' }}>{cartMessage}</p>}
      <div className="product-grid">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.0001 }}
            whileHover={{ scale: 1.03 }}
          >
            <Link to={`/product/${product.id}`} className="product-card-link">
              {product.image_url && <img src={product.image_url} alt={product.name} />}
              {!product.image_url && <img src="/images/placeholder-image.jpg" alt={product.name} />}
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </Link>
            <button onClick={() => handleAddToCart(product.id)} style={{ marginTop: '10px', padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
