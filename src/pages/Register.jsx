
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    learningGoal: ''
  });

  const [step, setStep] = useState(1);
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
    console.log('Registration data:', formData);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const learningGoals = [
    { value: 'career', label: 'Career Development', icon: '🚀' },
    { value: 'skill', label: 'Learn New Skills', icon: '🛠️' },
    { value: 'business', label: 'Start a Business', icon: '💼' },
    { value: 'hobby', label: 'Learn for Hobby', icon: '🎨' },
    { value: 'academic', label: 'Academic Studies', icon: '📚' },
    { value: 'freelance', label: 'Learn Freelancing', icon: '💻' },
  ];

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
        
        {/* Animated Lines */}
        <div className="absolute top-1/3 left-10 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse animation-delay-1000"></div>
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

      <div className="max-w-4xl w-full mx-4 relative z-10">
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
          <h1 className="text-5xl font-bold mb-3 text-gray-900 tracking-tight">
            Start Your Journey<span className="text-cyan-600">.</span>
          </h1>
          <p className="text-gray-700 text-lg mb-2">Become a member of Shikkhon community</p>
          <p className="text-gray-600">Create account in 3 easy steps</p>
        </div>

        {/* Progress Steps with Animation */}
        <div className="flex justify-center mb-10 relative">
          {/* Connection Line */}
          <div className="absolute top-5 left-1/4 right-1/4 h-1 bg-gray-200"></div>
          <div 
            className="absolute top-5 left-1/4 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000"
            style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
          ></div>
          
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex flex-col items-center mx-8 relative">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 ${
                  step >= stepNum 
                    ? 'text-white scale-110 shadow-2xl' 
                    : 'text-gray-400 bg-gray-100'
                }`}
                style={{
                  background: step >= stepNum 
                    ? 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)' 
                    : 'transparent',
                  border: step >= stepNum ? 'none' : '3px solid #e5e7eb',
                  boxShadow: step >= stepNum ? '0 10px 30px rgba(14, 165, 233, 0.4)' : 'none',
                  transform: step >= stepNum ? 'scale(1.1)' : 'scale(1)'
                }}
              >
                {step >= stepNum ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span className={`text-sm mt-3 font-medium transition-all duration-300 ${
                step >= stepNum ? 'text-gray-900 scale-105' : 'text-gray-500'
              }`}>
                {stepNum === 1 ? 'Personal Info' : stepNum === 2 ? 'Create Account' : 'Confirm'}
              </span>
              {step === stepNum && (
                <div className="absolute -bottom-6 text-xs text-cyan-600 font-semibold animate-pulse">
                  ↓ Current Step
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Glassmorphism Registration Form */}
        <div className="relative">
          {/* Form Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl blur-xl opacity-30"></div>
          
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/30"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(14, 165, 233, 0.25)'
               }}>
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-8">
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Introduce Yourself</h2>
                    <p className="text-gray-600">Fill in the information below</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                    {/* Learning Goal */}
                    <div className="group">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-2 group-focus-within:bg-cyan-200 transition-colors">
                          <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <label className="text-sm font-medium text-gray-800">Learning Goal</label>
                      </div>
                      <select
                        name="learningGoal"
                        value={formData.learningGoal}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:ring-0 focus:border-cyan-500 focus:scale-[1.02] appearance-none"
                        style={{
                          borderColor: 'rgba(14, 165, 233, 0.2)',
                          backgroundColor: 'rgba(249, 250, 251, 0.8)',
                          color: '#1f2937',
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%230ea5e9' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 0.5rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em'
                        }}
                      >
                        <option value="">Select your goal</option>
                        {learningGoals.map((goal) => (
                          <option key={goal.value} value={goal.value}>
                            {goal.icon} {goal.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Learning Goals Grid */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Popular Goals</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {learningGoals.map((goal) => (
                        <button
                          type="button"
                          key={goal.value}
                          onClick={() => setFormData(prev => ({ ...prev, learningGoal: goal.value }))}
                          className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                            formData.learningGoal === goal.value 
                              ? 'border-cyan-500 bg-cyan-50 scale-105' 
                              : 'border-gray-200 hover:border-cyan-300 hover:scale-105'
                          }`}
                        >
                          <span className="text-2xl mb-2">{goal.icon}</span>
                          <span className="text-sm font-medium text-gray-800 text-center">{goal.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-6">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-10 py-4 rounded-xl font-semibold text-white transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl group relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                        boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)'
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <span>Next Step</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Account Information */}
              {step === 2 && (
                <div className="space-y-8">
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Secure Your Account</h2>
                    <p className="text-gray-600">Create a strong password</p>
                  </div>
                  
                  <div className="space-y-6">
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
                        placeholder="At least 8 characters"
                      />
                      <div className="flex items-center gap-2 mt-3">
                        <div className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                          formData.password.length >= 8 ? 'bg-green-500' : 'bg-gray-200'
                        }`}></div>
                        <div className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                          /[A-Z]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-200'
                        }`}></div>
                        <div className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                          /\d/.test(formData.password) ? 'bg-green-500' : 'bg-gray-200'
                        }`}></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        For strong password: 8+ characters, uppercase letter, number required
                      </p>
                    </div>

                    {/* Confirm Password */}
                    <div className="group">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-2 group-focus-within:bg-cyan-200 transition-colors">
                          <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <label className="text-sm font-medium text-gray-800">Confirm Password</label>
                      </div>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:ring-0 focus:border-cyan-500 focus:scale-[1.02]"
                        style={{
                          borderColor: formData.password === formData.confirmPassword && formData.password 
                            ? 'rgba(34, 197, 94, 0.5)' 
                            : 'rgba(14, 165, 233, 0.2)',
                          backgroundColor: 'rgba(249, 250, 251, 0.8)',
                          color: '#1f2937'
                        }}
                        placeholder="Re-enter password"
                      />
                      {formData.password && formData.confirmPassword && (
                        <p className={`text-xs mt-2 font-medium ${
                          formData.password === formData.confirmPassword 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {formData.password === formData.confirmPassword 
                            ? '✓ Passwords match' 
                            : '✗ Passwords do not match'}
                        </p>
                      )}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="bg-cyan-50 rounded-xl p-5 border border-cyan-100">
                      <div className="flex items-start mb-4">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          required
                          className="sr-only"
                          id="agreeTerms"
                        />
                        <label 
                          htmlFor="agreeTerms" 
                          className="flex items-start cursor-pointer"
                        >
                          <div className="w-6 h-6 border-2 rounded mr-3 flex-shrink-0 flex items-center justify-center transition-all duration-300 mt-0.5"
                               style={{ 
                                 borderColor: formData.agreeTerms ? '#0ea5e9' : '#d1d5db',
                                 backgroundColor: formData.agreeTerms ? '#0ea5e9' : 'transparent'
                               }}>
                            {formData.agreeTerms && (
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <p className="text-sm text-gray-800">
                              I agree to the{' '}
                              <Link to="/terms" className="text-cyan-600 hover:underline font-medium">
                                Terms of Service
                              </Link>{' '}
                              and{' '}
                              <Link to="/privacy" className="text-cyan-600 hover:underline font-medium">
                                Privacy Policy
                              </Link>
                            </p>
                            <p className="text-xs text-gray-600 mt-2">
                              Your information will be stored securely and used only for platform development.
                            </p>
                          </div>
                        </label>
                      </div>
                      
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <label className="ml-2 text-sm text-gray-800">
                          I want to receive emails about newsletters and special offers
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                      style={{
                        borderColor: 'rgba(14, 165, 233, 0.3)',
                        color: '#0ea5e9',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Previous
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-10 py-4 rounded-xl font-semibold text-white transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl group relative overflow-hidden"
                      disabled={!formData.agreeTerms}
                      style={{
                        background: formData.agreeTerms 
                          ? 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)' 
                          : 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)',
                        boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)',
                        opacity: formData.agreeTerms ? 1 : 0.7
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <span>Next Step</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="space-y-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-xl animate-pulse">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Ready! 🎉</h2>
                    <p className="text-gray-600">Review your information and finish</p>
                  </div>
                  
                  {/* Summary Card */}
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Name</p>
                          <p className="font-semibold text-gray-900 text-lg">{formData.fullName || '—'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Email</p>
                          <p className="font-semibold text-gray-900 text-lg">{formData.email || '—'}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Phone</p>
                          <p className="font-semibold text-gray-900 text-lg">{formData.phone || '—'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Goal</p>
                          <p className="font-semibold text-gray-900 text-lg">
                            {learningGoals.find(g => g.value === formData.learningGoal)?.label || '—'}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mt-8 pt-6 border-t border-cyan-100">
                      <h4 className="font-bold text-gray-900 mb-4 text-center">What You Get</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="text-center p-3">
                          <div className="text-2xl mb-2">🎓</div>
                          <p className="text-sm font-medium text-gray-800">100+ Free Courses</p>
                        </div>
                        <div className="text-center p-3">
                          <div className="text-2xl mb-2">📜</div>
                          <p className="text-sm font-medium text-gray-800">Certificates</p>
                        </div>
                        <div className="text-center p-3">
                          <div className="text-2xl mb-2">👨‍🏫</div>
                          <p className="text-sm font-medium text-gray-800">Expert Instructors</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-700 mb-6">
                      You are about to become a part of Shikkhon community. 
                      Complete registration and start your skills development journey.
                    </p>
                  </div>

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                      style={{
                        borderColor: 'rgba(14, 165, 233, 0.3)',
                        color: '#0ea5e9',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Previous
                      </span>
                    </button>
                    <button
                      type="submit"
                      className="px-12 py-4 rounded-xl font-semibold text-white transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl group relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)'
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <span>Create Account</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Login Link */}
            <div className="text-center mt-10 pt-8 border-t" style={{ borderColor: 'rgba(14, 165, 233, 0.1)' }}>
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
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Register;
