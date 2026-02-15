import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Instructors', path: '/instructors' },
    { name: 'Blog', path: '/blog' },
    { name: 'Free Learning', path: '/free-learning' },
    { name: 'My Class', path: '/my-class' },
    { name: 'Contact', path: '/contact' },
  ];

  // অ্যাক্টিভ লিংকের জন্য এনিমেটেড ক্লাস
  const getActiveClass = ({ isActive }) => {
    return `relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/20 group ${
      isActive 
        ? 'text-indigo-600 font-semibold' 
        : 'text-gray-700'
    }`;
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 pt-4">
      {/* Compact glass blur bar */}
      <nav 
        className="relative mx-auto w-[90%] max-w-5xl rounded-xl backdrop-blur-xl animate-slideDown overflow-visible"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
        }}
      >
        {/* অ্যানিমেটেড ব্যাকগ্রাউন্ড ইফেক্ট - এখন nav এর ভিতরে */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
          <div className="absolute -inset-[100%] animate-slow-spin opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-2.5 relative z-10">
          <div className="flex justify-between items-center">
            {/* অ্যানিমেটেড Logo */}
            <Link to="/" className="flex items-center space-x-2.5 z-20 group">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 animate-float"
                style={{ 
                  background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                  boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
                }}
              >
                <img 
                  src="https://i.ibb.co.com/rKTD0YgT/unnamed-removebg-preview.png" 
                  alt="Shikkhon Logo" 
                  className="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden">
                <h1 
                  className="text-xl font-bold tracking-tight transition-all duration-300 group-hover:translate-x-1"
                  style={{
                    color: '#1f2937',
                    textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)'
                  }}
                >
                  Shikkhon
                </h1>
                <p className="text-xs transition-all duration-300 group-hover:translate-x-1 delay-75" style={{ color: '#6b7280' }}>E-Learning</p>
              </div>
            </Link>

            {/* Desktop Navigation - এনিমেটেড লিংক */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={getActiveClass}
                  end={link.path === '/'}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {({ isActive }) => (
                    <span className="relative inline-block">
                      {link.name}
                      {/* অ্যানিমেটেড আন্ডারলাইন ইফেক্ট */}
                      <span 
                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                        style={{ 
                          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      ></span>
                    </span>
                  )}
                </NavLink>
              ))}
              
              <div className="w-px h-5 mx-2 animate-pulse" style={{ background: 'rgba(0, 0, 0, 0.1)' }}></div>
              
              {/* Cart Button with Link */}
              <Link
                to="/cart"
                className="p-2 rounded-lg transition-all duration-300 hover:bg-white/20 relative group"
                style={{ color: '#4F46E5' }}
              >
                <div className="indicator">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" 
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
              </Link>
              
              {/* অ্যানিমেটেড Login Button */}
              <Link
                to="/login"
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 relative group overflow-hidden"
                style={{ 
                  color: '#374151'
                }}
              >
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
              
              {/* অ্যানিমেটেড Register Button */}
              <Link
                to="/register"
                className="px-3 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl relative group overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                  boxShadow: '0 2px 8px rgba(79, 70, 229, 0.3)'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Register
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-full transition-transform duration-500"></span>
              </Link>
            </div>

            {/* Mobile Menu Button with Animation - জুম গুরুত্বপূর্ণ */}
            <button 
              className="lg:hidden p-2 rounded-lg z-50 transition-all duration-300 hover:bg-white/20 relative group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ 
                color: '#4F46E5'
              }}
            >
              <div className="relative w-5 h-5">
                <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-2' : 'rotate-0 top-0'
                }`}></span>
                <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100 top-2'
                }`}></span>
                <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-2' : 'rotate-0 top-4'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full mt-1 rounded-xl overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
          }`}
          style={{
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 20px 40px rgba(31, 38, 135, 0.2)',
            transformOrigin: 'top',
            zIndex: 40
          }}
        >
          <div className="p-4">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) => 
                    `relative px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-indigo-50 group overflow-hidden ${
                      isActive 
                        ? 'bg-indigo-100 text-indigo-600 font-semibold' 
                        : 'text-gray-700'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                  end={link.path === '/'}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {({ isActive }) => (
                    <span className="relative z-10 flex items-center justify-between">
                      <span>{link.name}</span>
                      {isActive && (
                        <svg className="w-4 h-4 animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </span>
                  )}
                </NavLink>
              ))}
              
              <div className="divider my-1 animate-fadeIn" style={{ borderColor: '#e5e7eb' }}></div>
              
              {/* Mobile Cart with Link */}
              <Link
                to="/cart"
                className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center gap-2"
                style={{ 
                  color: '#374151',
                  border: '1px solid #e5e7eb'
                }}
                onClick={() => setIsMenuOpen(false)}
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
              </Link>
              
              {/* Mobile Auth Buttons */}
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
      </nav>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        @keyframes slow-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Navbar;