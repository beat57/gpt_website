// src/components/common/Header.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get('http://localhost:2000/api/auth/status', { withCredentials: true });
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        console.error('Error checking auth status:', error);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:2000/api/auth/logout', {}, { withCredentials: true });
      setIsLoggedIn(false);
      window.location.href = '/'; // Redirect to home page after logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">TravelVista</Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/destination" className="text-gray-600 hover:text-blue-600">Destination</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
              <Link to="/register" className="text-gray-600 hover:text-blue-600">Register</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="text-gray-600 hover:text-blue-600">Logout</button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
