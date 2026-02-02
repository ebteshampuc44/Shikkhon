import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Root = () => {
  const location = useLocation();
  
  // Check if current route is login or register page
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

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