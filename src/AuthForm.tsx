import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    const endpoint = isLogin ? `${process.env.REACT_APP_BACKEND_URL}/auth/signin` : `${process.env.REACT_APP_BACKEND_URL}/auth/signup`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin && data.session) {
          localStorage.setItem('supabase.auth.token', JSON.stringify(data.session));
          setMessage('Login successful!');
          navigate('/'); // Redirect to home or a protected page
        } else if (!isLogin) {
          setMessage('Sign up successful! Please check your email for confirmation (if required) and then log in.');
          setIsLogin(true); // Switch to login form after successful signup
        } else {
          setMessage(data.message || (isLogin ? 'Login failed.' : 'Sign up failed.'));
        }
      } else {
        setMessage(data.message || (isLogin ? 'Login failed.' : 'Sign up failed.'));
      }
    } catch (error: any) {
      setMessage('Error: ' + error.message);
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <div style={styles.toggleButtons}>
          <button
            onClick={() => setIsLogin(true)}
            style={isLogin ? styles.activeButton : styles.inactiveButton}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            style={!isLogin ? styles.activeButton : styles.inactiveButton}
          >
            Sign Up
          </button>
        </div>

        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}

        <div style={styles.divider}>OR</div>

        <button onClick={handleGoogleSignIn} style={styles.googleButton}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    backgroundColor: '#f0f2f5',
    padding: '20px',
  },
  formCard: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  toggleButtons: {
    display: 'flex',
    marginBottom: '20px',
    borderRadius: '5px',
    overflow: 'hidden',
    border: '1px solid #ddd',
  },
  activeButton: {
    flex: 1,
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  inactiveButton: {
    flex: 1,
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#f8f9fa',
    color: '#007bff',
    cursor: 'pointer',
    fontSize: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
  },
  submitButton: {
    padding: '12px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  message: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#e9ecef',
    borderRadius: '4px',
    color: '#333',
  },
  divider: {
    margin: '25px 0',
    color: '#666',
    position: 'relative',
  },
  googleButton: {
    padding: '12px 20px',
    backgroundColor: '#db4437',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
  },
};

export default AuthForm;
