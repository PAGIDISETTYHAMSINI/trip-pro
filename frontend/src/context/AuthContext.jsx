import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    // Sync token to localStorage
    if (token) {
      localStorage.setItem('token', token);
      
      // Fetch fresh user data (including coins)
      const fetchProfile = async () => {
        try {
          const res = await fetch('https://trip-pro.onrender.com/api/auth/profile', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (res.ok) {
            const data = await res.json();
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
          }
        } catch (err) {
          console.error("Failed to fetch profile", err);
        }
      };
      
      fetchProfile();
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
    }
  }, [token]);

  const login = (userData, jwtToken) => {
    setToken(jwtToken);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
