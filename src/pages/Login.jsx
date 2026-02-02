
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"></div>
        
        {/* Animated Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-1/4 right-1/4">
          <div className="relative">
            <div className="w-8 h-8 border-2 border-indigo-300 rounded-full absolute animate-spin-slow"></div>
            <div className="w-12 h-12 border-2 border-purple-300 rounded-full absolute -top-2 -left-2 animate-spin-slow-reverse"></div>
          </div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/4">
          <div className="relative">
            <div className="w-6 h-6 border-2 border-pink-300 rotate-45 absolute animate-pulse"></div>
            <div className="w-10 h-10 border-2 border-indigo-300 rotate-45 absolute -top-2 -left-2 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 z-10 group"
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(79, 70, 229, 0.2)',
          boxShadow: '0 8px 32px rgba(79, 70, 229, 0.15)'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-gray-800">Back to Home</span>
      </button>

      <div className="max-w-md w-full mx-4 relative z-10">
        {/* Logo with Floating Effect */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-block transform transition-transform duration-500 hover:scale-110">
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-2xl animate-float"
                 style={{
                   background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                   boxShadow: '0 20px 60px rgba(79, 70, 229, 0.4)'
                 }}>
              <span className="text-4xl font-bold text-white">Sh</span>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400 to-purple-400 opacity-30 blur-lg"></div>
            </div>
          </Link>
          <h1 className="text-4xl font-bold mb-3 text-gray-900 tracking-tight">
            Shikkhon<span className="text-indigo-600">.</span>
          </h1>
          <p className="text-gray-700 text-lg">Start your skills journey</p>
        </div>

        {/* Glassmorphism Login Form */}
        <div className="relative">
          {/* Form Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur-xl opacity-30"></div>
          
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/30"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.25)'
               }}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
              <p className="text-gray-600">Return to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Email Input with Icon */}
              <div className="group">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 group-focus-within:bg-indigo-200 transition-colors">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <label className="text-sm font-medium text-gray-800">Email Address</label>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:ring-0 focus:border-indigo-500 focus:scale-[1.02]"
                  style={{
                    borderColor: 'rgba(79, 70, 229, 0.2)',
                    backgroundColor: 'rgba(249, 250, 251, 0.8)',
                    color: '#1f2937'
                  }}
                  placeholder="example@email.com"
                />
              </div>

              {/* Password Input with Icon */}
              <div className="group">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 group-focus-within:bg-indigo-200 transition-colors">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <label className="text-sm font-medium text-gray-800">Password</label>
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:ring-0 focus:border-indigo-500 focus:scale-[1.02]"
                  style={{
                    borderColor: 'rgba(79, 70, 229, 0.2)',
                    backgroundColor: 'rgba(249, 250, 251, 0.8)',
                    color: '#1f2937'
                  }}
                  placeholder="••••••••"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="sr-only"
                      id="rememberMe"
                    />
                    <label 
                      htmlFor="rememberMe" 
                      className="flex items-center cursor-pointer"
                    >
                      <div className="w-5 h-5 border-2 rounded mr-2 flex items-center justify-center transition-all duration-300"
                           style={{ 
                             borderColor: formData.rememberMe ? '#4F46E5' : '#d1d5db',
                             backgroundColor: formData.rememberMe ? '#4F46E5' : 'transparent'
                           }}>
                        {formData.rememberMe && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-gray-800">Remember me</span>
                    </label>
                  </div>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium transition-all duration-300 hover:text-indigo-700 hover:underline"
                  style={{ color: '#4F46E5' }}
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button with Hover Effect */}
              <button
                type="submit"
                className="w-full py-4 px-4 rounded-xl font-semibold text-white transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl active:scale-95 group relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                  boxShadow: '0 10px 30px rgba(79, 70, 229, 0.4)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span>Login</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>

              {/* Or Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" style={{ borderColor: 'rgba(79, 70, 229, 0.1)' }}></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-sm text-gray-500">Or login with social media</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                  style={{ 
                    borderColor: 'rgba(79, 70, 229, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)'
                  }}
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  </svg>
                  <span className="font-medium text-gray-800">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                  style={{ 
                    borderColor: 'rgba(79, 70, 229, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)'
                  }}
                >
                  <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-medium text-gray-800">Facebook</span>
                </button>
              </div>

              {/* Register Link */}
              <div className="text-center pt-6 border-t" style={{ borderColor: 'rgba(79, 70, 229, 0.1)' }}>
                <p className="text-gray-700">
                  New user?{' '}
                  <Link
                    to="/register"
                    className="font-semibold transition-all duration-300 hover:text-indigo-700 hover:underline"
                    style={{ color: '#4F46E5' }}
                  >
                    Register now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute -z-10">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-indigo-300 opacity-50"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Add CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Login;
