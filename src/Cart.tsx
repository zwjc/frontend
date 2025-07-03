import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  id: string;
  quantity: number;
  product_id: string;
  products: {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url?: string;
  };
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchCart = useCallback(async () => {
    const token = localStorage.getItem('supabase.auth.token');
    if (!token) {
      navigate('/auth'); // Redirect to login if not authenticated
      return;
    }

    try {
      const parsedToken = JSON.parse(token);
      const response = await fetch('http://localhost:3000/cart', {
        headers: {
          'Authorization': `Bearer ${parsedToken.access_token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: CartItem[] = await response.json();
      setCartItems(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [navigate, setCartItems, setError, setLoading]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const handleUpdateQuantity = async (productId: string, newQuantity: number) => {
    const token = localStorage.getItem('supabase.auth.token');
    if (!token) return;

    try {
      const parsedToken = JSON.parse(token);
      const response = await fetch(`http://localhost:3000/cart/items/${productId}` , {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${parsedToken.access_token}`,
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });

      if (response.ok) {
        fetchCart(); // Refresh cart after update
      } else {
        const errorData = await response.json();
        console.error('Failed to update cart item:', errorData.message || response.statusText);
      }
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  const handleRemoveItem = async (productId: string) => {
    const token = localStorage.getItem('supabase.auth.token');
    if (!token) return;

    try {
      const parsedToken = JSON.parse(token);
      const response = await fetch(`http://localhost:3000/cart/items/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${parsedToken.access_token}`,
        },
      });

      if (response.ok) {
        fetchCart(); // Refresh cart after removal
      } else {
        const errorData = await response.json();
        console.error('Failed to remove cart item:', errorData.message || response.statusText);
      }
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  if (loading) {
    return <div>Loading cart...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const total = cartItems.reduce((sum, item) => sum + item.products.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', padding: '10px 0' }}>
              <img src={item.products.image_url || '/images/placeholder-image.jpg'} alt={item.products.name} style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px' }} />
              <div style={{ flexGrow: 1 }}>
                <h3>{item.products.name}</h3>
                <p>Price: ${item.products.price.toFixed(2)}</p>
                <p>Quantity:
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item.products.id, parseInt(e.target.value))}
                    style={{ width: '50px', marginLeft: '10px' }}
                  />
                </p>
              </div>
              <button onClick={() => handleRemoveItem(item.products.id)} style={{ background: 'red', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>Remove</button>
            </div>
          ))}
          <h3 style={{ textAlign: 'right', marginTop: '20px' }}>Total: ${total.toFixed(2)}</h3>
          <button style={{ width: '100%', padding: '15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px', cursor: 'pointer', marginTop: '20px' }}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
