import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsUserMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-white font-bold text-xl">Rotaract Club</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
            <Link to="/events" className="text-white/90 hover:text-white transition-colors">Events</Link>
            <Link to="/media" className="text-white/90 hover:text-white transition-colors">Media</Link>
            <Link to="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
            
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
                >
                  <User size={20} />
                  <span>{user.name}</span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    {(user.role === 'admin' || user.role === 'core') && (
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Settings className="inline w-4 h-4 mr-2" />
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      <LogOut className="inline w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Login
              </Link>
            )}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md rounded-lg mt-2 mb-4 p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
              <Link to="/events" className="text-white/90 hover:text-white transition-colors">Events</Link>
              <Link to="/media" className="text-white/90 hover:text-white transition-colors">Media</Link>
              <Link to="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
              {user ? (
                <>
                  <Link to="/dashboard" className="text-white/90 hover:text-white transition-colors">Dashboard</Link>
                  <button onClick={handleLogout} className="text-left text-white/90 hover:text-white transition-colors">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="text-white/90 hover:text-white transition-colors">Login</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;