import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // এখানে রেজিস্ট্রেশন লজিক যোগ করুন
  };

  const handleGoogleSignUp = () => {
    console.log('Google Sign Up');
    // এখানে গুগল সাইন-আপ লজিক যোগ করুন
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-100"></div>
        
        {/* Animated Shapes */}
        <div className="absolute top-32 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 right-32 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating Dots */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400 opacity-30"
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

      {/* Back to Home Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 z-10 group"
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15)'
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
        {/* Header Section */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-block transform transition-transform duration-500 hover:scale-110">
            <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-6 shadow-2xl animate-float"
                 style={{
                   background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                   boxShadow: '0 20px 60px rgba(14, 165, 233, 0.4)'
                 }}>
              <span className="text-5xl font-bold text-white">Sh</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-400 opacity-30 blur-lg"></div>
            </div>
          </Link>
          <h1 className="text-4xl font-bold mb-3 text-gray-900 tracking-tight">
            Create Account<span className="text-cyan-600">.</span>
          </h1>
          <p className="text-gray-700 text-lg">Join Shikkhon community today</p>
        </div>

        {/* Glassmorphism Registration Form */}
        <div className="relative">
          {/* Form Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl blur-xl opacity-30"></div>
          
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(14, 165, 233, 0.25)'
               }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="group">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-2 group-focus-within:bg-cyan-200 transition-colors">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <label className="text-sm font-medium text-gray-800">Full Name</label>
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:ring-0 focus:border-cyan-500 focus:scale-[1.02]"
                  style={{
                    borderColor: 'rgba(14, 165, 233, 0.2)',
                    backgroundColor: 'rgba(249, 250, 251, 0.8)',
                    color: '#1f2937'
                  }}
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div className="group">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-2 group-focus-within:bg-cyan-200 transition-colors">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
                  className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:ring-0 focus:border-cyan-500 focus:scale-[1.02]"
                  style={{
                    borderColor: 'rgba(14, 165, 233, 0.2)',
                    backgroundColor: 'rgba(249, 250, 251, 0.8)',
                    color: '#1f2937'
                  }}
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div className="group">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-2 group-focus-within:bg-cyan-200 transition-colors">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <label className="text-sm font-medium text-gray-800">Mobile Number</label>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:ring-0 focus:border-cyan-500 focus:scale-[1.02]"
                  style={{
                    borderColor: 'rgba(14, 165, 233, 0.2)',
                    backgroundColor: 'rgba(249, 250, 251, 0.8)',
                    color: '#1f2937'
                  }}
                  placeholder="+880 1234 567890"
                />
              </div>

              {/* Password */}
              <div className="group">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-2 group-focus-within:bg-cyan-200 transition-colors">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:ring-0 focus:border-cyan-500 focus:scale-[1.02]"
                  style={{
                    borderColor: 'rgba(14, 165, 233, 0.2)',
                    backgroundColor: 'rgba(249, 250, 251, 0.8)',
                    color: '#1f2937'
                  }}
                  placeholder="Create a password"
                />
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full px-10 py-4 rounded-xl font-semibold text-white transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl group relative overflow-hidden mt-8"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                  boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span>Sign Up</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/90 backdrop-blur-xl text-gray-600">Or continue with</span>
                </div>
              </div>

              {/* Google Sign Up Button */}
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="w-full px-10 py-4 rounded-xl font-semibold text-gray-700 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center gap-3 border-2"
                style={{
                  borderColor: 'rgba(14, 165, 233, 0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>
            </form>

            {/* Login Link */}
            <div className="text-center mt-8 pt-6 border-t" style={{ borderColor: 'rgba(14, 165, 233, 0.1)' }}>
              <p className="text-gray-700">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-semibold transition-all duration-300 hover:text-cyan-700 hover:underline"
                  style={{ color: '#0ea5e9' }}
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
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
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Register;