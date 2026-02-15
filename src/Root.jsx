// Root.jsx
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Root = () => {
  const location = useLocation();
  
  // Check if current route is login or register page
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  // স্ক্রোল টু টপ ইফেক্ট - প্রতিবার পাথ পরিবর্তনে কাজ করবে
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'smooth' দিলে মসৃণ স্ক্রোল হবে
    });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Show Navbar only if not on login/register pages */}
      {!isAuthPage && <Navbar />}
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Show Footer only if not on login/register pages */}
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default Root;