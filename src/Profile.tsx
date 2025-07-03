import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserSession {
  user: {
    email: string;
    // Add other user properties you might need
  };
  // Add other session properties you might need
}

const Profile: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSession = localStorage.getItem('supabase.auth.token');
    if (storedSession) {
      try {
        const session: UserSession = JSON.parse(storedSession);
        if (session.user && session.user.email) {
          setUserEmail(session.user.email);
        } else {
          // No user in session, redirect to login
          navigate('/auth');
        }
      } catch (e) {
        console.error('Failed to parse session from localStorage', e);
        navigate('/auth');
      }
    } else {
      // No session found, redirect to login
      navigate('/auth');
    }
  }, [navigate]);

  if (!userEmail) {
    return <div>Loading profile...</div>; // Or a spinner
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Welcome, {userEmail}!</h2>
      <p>This is your protected profile page.</p>
      {/* Add more user-specific content here */}
    </div>
  );
};

export default Profile;
