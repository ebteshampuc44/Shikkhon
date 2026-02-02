import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Courses', path: '/courses' },
    { name: 'Categories', path: '/categories' },
    { name: 'Instructors', path: '/instructors' },
    { name: 'Blog', path: '/blog' },
  ];

  const categories = [
    'Agriculture & Farming',
    'Programming & Tech',
    'Academic Education',
    'Skill Development',
    'Business Management',
  ];

  const contactInfo = [
    { icon: '📧', text: 'support@shikkhon.com' },
    { icon: '📞', text: '+880 1234 567890' },
  ];

  return (
    <footer style={{ backgroundColor: 'rgb(233,231,253)' }} className="text-gray-900 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand Info - Compact with Bigger Logo */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Bigger Logo Container */}
              <div 
                style={{ backgroundColor: 'rgb(229,230,250)' }} 
                className="w-16 h-16 rounded-lg flex items-center justify-center p-2"
              >
                <img 
                  src="https://i.ibb.co.com/rKTD0YgT/unnamed-removebg-preview.png" 
                  alt="Shikkhon Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold" style={{ color: '#4F46E5' }}>Shikkhon</h2>
                <p className="text-xs text-gray-600">E-Learning Platform</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Largest E-Learning Platform in Bangladesh.
            </p>
            <div className="flex space-x-3">
              {['Twitter', 'YouTube', 'Facebook', 'LinkedIn'].map((platform, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  style={{ backgroundColor: 'rgb(229,230,250)' }} 
                  className="p-1.5 rounded-full transition-colors duration-200 hover:scale-110"
                >
                  <div className="w-4 h-4" style={{ color: '#4F46E5' }}></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Compact */}
          <div>
            <h3 className="footer-title text-base font-bold mb-4" style={{ color: '#4F46E5' }}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories - Compact */}
          <div>
            <h3 className="footer-title text-base font-bold mb-4" style={{ color: '#4F46E5' }}>Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Compact */}
          <div>
            <h3 className="footer-title text-base font-bold mb-4" style={{ color: '#4F46E5' }}>Contact</h3>
            <ul className="space-y-3 mb-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span style={{ color: '#4F46E5' }}>{info.icon}</span>
                  <span className="text-gray-700 text-sm">{info.text}</span>
                </li>
              ))}
            </ul>
            
            {/* Newsletter Subscription - Compact */}
            <div>
              <h4 className="font-bold mb-3 text-sm">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="input w-full max-w-xs rounded-r-none text-sm py-2"
                  style={{ 
                    backgroundColor: 'rgb(229,230,250)', 
                    borderColor: '#4F46E5',
                    height: '36px'
                  }}
                />
                <button 
                  className="rounded-l-none px-3 text-white text-sm"
                  style={{ 
                    backgroundColor: '#4F46E5',
                    height: '36px'
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Compact */}
        <div className="border-t mt-8 pt-6" style={{ borderColor: 'rgb(229,230,250)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-gray-600 text-xs">
              © 2024 Shikkhon. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">Refund</a>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">Sitemap</a>
            </div>
          </div>
          
          {/* Payment Methods - Compact */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="text-gray-600 text-xs">Payment Methods:</div>
            <div className="flex space-x-2">
              {['bKash', 'Nagad', 'Rocket', 'Card'].map((method, idx) => (
                <div 
                  key={idx} 
                  style={{ backgroundColor: 'rgb(229,230,250)' }} 
                  className="px-2 py-1 rounded text-xs"
                >
                  <span className="font-bold" style={{ color: '#4F46E5' }}>{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;