
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Categories', path: '/categories' },
    { name: 'Instructors', path: '/instructors' },
    { name: 'Blog', path: '/blog' },
    { name: 'Free Learning', path: '/free-learning' },
    { name: 'Contact', path: '/contact' },
  ];

  const categories = [
    'Agriculture', 'Technology', 'Academic Education', 'Skill Development', 
    'Business & Entrepreneurship', 'Job Preparation'
  ];

  return (
    <div className="sticky top-0 z-50">
      {/* Compact glass blur bar */}
      <nav 
        className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl rounded-xl"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(25px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
        }}
      >
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex justify-between items-center">
            {/* Compact Logo with Image */}
            <Link to="/" className="flex items-center space-x-2.5 z-20 group">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ 
                  background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                  boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
                }}
              >
                <img 
                  src="https://i.ibb.co.com/rKTD0YgT/unnamed-removebg-preview.png" 
                  alt="Shikkhon Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <h1 
                  className="text-xl font-bold tracking-tight"
                  style={{
                    color: '#1f2937',
                    textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)'
                  }}
                >
                  Shikkhon
                </h1>
                <p className="text-xs" style={{ color: '#6b7280' }}>E-Learning</p>
              </div>
            </Link>

            {/* Desktop Navigation - More compact */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/20"
                  style={{ 
                    color: link.name === 'Home' ? '#4F46E5' : '#374151',
                    fontWeight: link.name === 'Home' ? '600' : '500'
                  }}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Categories Dropdown */}
              <div className="dropdown dropdown-hover">
                <label 
                  tabIndex={0} 
                  className="px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-white/20 flex items-center gap-1"
                  style={{ 
                    color: '#374151'
                  }}
                >
                  Categories
                  <svg 
                    className="w-3.5 h-3.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </label>
                
                <div 
                  tabIndex={0} 
                  className="dropdown-content menu p-3 shadow-xl rounded-xl w-60 mt-2"
                  style={{
                    background: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 20px 40px rgba(31, 38, 135, 0.2)'
                  }}
                >
                  <div className="grid grid-cols-2 gap-1.5">
                    {categories.map((cat, idx) => (
                      <a 
                        key={idx} 
                        className="p-2.5 rounded-lg text-xs font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 text-center"
                      >
                        {cat}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="w-px h-5 mx-2" style={{ background: 'rgba(0, 0, 0, 0.1)' }}></div>
              
              {/* Compact Cart Button */}
              <button 
                className="p-2 rounded-lg transition-all duration-300 hover:bg-white/20 relative"
                style={{ 
                  color: '#4F46E5'
                }}
              >
                <div className="indicator">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span 
                    className="badge badge-xs indicator-item"
                    style={{ 
                      backgroundColor: '#10B981',
                      color: 'white',
                      border: '1px solid white'
                    }}
                  >
                    3
                  </span>
                </div>
              </button>
              
              {/* Updated Login Button with Link */}
              <Link
                to="/login"
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/20"
                style={{ 
                  color: '#374151'
                }}
              >
                Login
              </Link>
              
              {/* Updated Register Button with Link */}
              <Link
                to="/register"
                className="px-3 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                  boxShadow: '0 2px 8px rgba(79, 70, 229, 0.3)'
                }}
              >
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg z-20 transition-all duration-300 hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ 
                color: '#4F46E5'
              }}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Compact */}
        {isMenuOpen && (
          <div 
            className="lg:hidden absolute top-full left-0 w-full mt-1 rounded-xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(25px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 20px 40px rgba(31, 38, 135, 0.2)'
            }}
          >
            <div className="p-4">
              <div className="flex flex-col space-y-1.5">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-50 transition-all duration-300"
                    style={{ 
                      color: link.name === 'Home' ? '#4F46E5' : '#374151'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Categories */}
                <div className="px-3 py-2">
                  <h3 className="font-bold mb-2 text-sm" style={{ color: '#4F46E5' }}>Categories</h3>
                  <div className="grid grid-cols-2 gap-1.5">
                    {categories.map((cat, idx) => (
                      <a 
                        key={idx} 
                        className="p-2 rounded text-xs font-medium text-center hover:bg-indigo-50 transition-all duration-200"
                        style={{ 
                          color: '#374151',
                          border: '1px solid #e5e7eb'
                        }}
                      >
                        {cat}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="divider my-1" style={{ borderColor: '#e5e7eb' }}></div>
                
                {/* Mobile Cart */}
                <button 
                  className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ 
                    color: '#374151',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  <div className="relative">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span 
                      className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-3 h-3 flex items-center justify-center"
                    >
                      3
                    </span>
                  </div>
                  <span>Cart</span>
                </button>
                
                {/* Updated Mobile Auth Buttons with Links */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Link
                    to="/login"
                    className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all duration-300 text-center"
                    style={{ 
                      color: '#374151',
                      border: '1px solid #e5e7eb'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105 text-center"
                    style={{ 
                      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
