import React, { useEffect, useState } from 'react';

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setShowButton(scrollPercent > 10);
      
      const progressCircle = document.getElementById('progressCircle');
      if (progressCircle) {
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (scrollPercent / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
      }
      
      const button = document.getElementById('scrollToTop');
      if (button) {
        if (scrollPercent > 10) {
          button.classList.remove('opacity-0', 'scale-0');
          button.classList.add('opacity-100', 'scale-100');
        } else {
          button.classList.remove('opacity-100', 'scale-100');
          button.classList.add('opacity-0', 'scale-0');
        }
      }
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { icon: '🌾', name: 'Agriculture', count: 156 },
    { icon: '💻', name: 'Technology', count: 342 },
    { icon: '📚', name: 'Education', count: 289 },
    { icon: '🔧', name: 'Skills', count: 187 },
    { icon: '💼', name: 'Business', count: 124 },
    { icon: '🎯', name: 'Jobs', count: 231 },
  ];

  const courses = [
    { 
      title: 'Digital Marketing', 
      instructor: 'Ahmed Rasel', 
      rating: 4.8, 
      students: 1250, 
      price: '৳ 2,500', 
      discount: '৳ 3,500', 
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      duration: '12 Hours',
      lessons: 24
    },
    { 
      title: 'Agriculture Management', 
      instructor: 'Dr. Farhana Islam', 
      rating: 4.9, 
      students: 890, 
      price: 'Free', 
      discount: null, 
      thumbnail: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&h=250&fit=crop',
      duration: '8 Hours',
      lessons: 16
    },
    { 
      title: 'Freelancing Guide', 
      instructor: 'Zubayer Hossain', 
      rating: 4.7, 
      students: 2100, 
      price: '৳ 1,200', 
      discount: '৳ 2,000', 
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      duration: '15 Hours',
      lessons: 30
    },
    { 
      title: 'Programming Basics', 
      instructor: 'Tanvir Hasan', 
      rating: 4.6, 
      students: 1670, 
      price: '৳ 1,800', 
      discount: '৳ 2,500', 
      thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
      duration: '20 Hours',
      lessons: 40
    },
  ];

  const instructors = [
    { 
      name: 'Dr. Sumaiya Khan', 
      expertise: 'Agriculture Specialist', 
      students: 5000, 
      courses: 12, 
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop',
      experience: '10 Years'
    },
    { 
      name: 'Rafi Ahmed', 
      expertise: 'Software Engineer', 
      students: 12000, 
      courses: 25, 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      experience: '8 Years'
    },
    { 
      name: 'Nishat Jahan', 
      expertise: 'Business Consultant', 
      students: 7500, 
      courses: 18, 
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
      experience: '12 Years'
    },
    { 
      name: 'Anisur Rahman', 
      expertise: 'Educational Technology', 
      students: 9200, 
      courses: 21, 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      experience: '6 Years'
    },
  ];

  const stats = [
    { number: '50,000+', label: 'Active Students', icon: '👨‍🎓' },
    { number: '1,200+', label: 'Courses', icon: '📚' },
    { number: '200+', label: 'Instructors', icon: '👨‍🏫' },
    { number: '95%', label: 'Satisfaction Rate', icon: '⭐' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Redesigned */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20" 
               style={{ backgroundColor: '#8B5CF6' }}></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20" 
               style={{ backgroundColor: '#10B981' }}></div>
          
          {/* Floating Shapes */}
          <div className="absolute top-1/4 left-10 w-16 h-16 rounded-lg rotate-12 animate-pulse"
               style={{ backgroundColor: 'rgba(79, 70, 229, 0.15)' }}></div>
          <div className="absolute bottom-1/4 right-20 w-12 h-12 rounded-full animate-bounce"
               style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)' }}></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 rotate-45 animate-pulse"
               style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)' }}></div>
        </div>

        {/* Gradient Background */}
        <div className="absolute inset-0" 
             style={{
               background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(236, 72, 153, 0.05) 100%)'
             }}>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Main Heading with Gradient */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">Learn in Bangla,</span>
              <span className="block mt-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Become Skilled
                </span>
              </span>
            </h1>

            {/* Animated Subheading */}
            <div className="h-20 mb-8">
              <p className="text-xl md:text-2xl text-gray-700 mb-4">
                <span className="typing-effect">
                  Join 1000+ Bangla courses, learn from experts, build your career
                </span>
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
              {[
                { number: '1000+', label: 'Bangla Courses', color: 'from-purple-500 to-indigo-500' },
                { number: '50,000+', label: 'Active Students', color: 'from-blue-500 to-cyan-500' },
                { number: '200+', label: 'Expert Instructors', color: 'from-green-500 to-emerald-500' },
                { number: '95%', label: 'Satisfaction Rate', color: 'from-pink-500 to-rose-500' }
              ].map((stat, index) => (
                <div key={index} 
                     className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons with Hover Effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="group relative px-8 py-4 rounded-xl font-medium text-lg text-white overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ 
                  backgroundColor: '#4F46E5',
                  background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Courses
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              
              <button 
                className="group relative px-8 py-4 rounded-xl font-medium text-lg border-2 overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ 
                  borderColor: '#4F46E5', 
                  color: '#4F46E5',
                  background: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Learn Free
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">Trusted by</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-2xl">🏢</div>
                <div className="text-2xl">🏛️</div>
                <div className="text-2xl">🎓</div>
                <div className="text-2xl">💼</div>
                <div className="text-2xl">🌾</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-white border-y py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold" style={{ color: '#4F46E5' }}>{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section - Redesigned with Rocket Growing Roots */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Learning Paths</h2>
            <p className="text-gray-600">Launch your journey from our rocket to growing knowledge roots</p>
          </div>
          
          {/* Rocket with Growing Roots */}
          <div className="relative mb-20">
            {/* Rocket at Center */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-20">
              <div className="relative">
                {/* Rocket Body */}
                <div className="text-5xl animate-bounce duration-1000">🚀</div>
                
                {/* Rocket Base - Connection Point for Roots */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full"
                       style={{ backgroundColor: 'rgba(79, 70, 229, 0.2)' }}>
                  </div>
                </div>
                
                {/* Rocket Flame */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-4 h-8 rounded-t-full animate-pulse"
                        style={{ 
                          backgroundColor: i === 0 ? '#F59E0B' : 
                                         i === 1 ? '#F97316' : '#EF4444',
                          animationDelay: `${i * 100}ms`,
                          marginTop: `-${i * 2}px`,
                          opacity: 0.8 - (i * 0.2)
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Central Connection Point */}
            <div className="absolute left-1/2 top-16 transform -translate-x-1/2 z-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center"
                   style={{ 
                     backgroundColor: 'rgba(139, 92, 246, 0.1)',
                     border: '2px dashed rgba(139, 92, 246, 0.3)'
                   }}>
                <div className="w-8 h-8 rounded-full animate-pulse"
                     style={{ backgroundColor: 'rgba(79, 70, 229, 0.3)' }}></div>
              </div>
            </div>
            
            {/* Main Roots Growing from Rocket */}
            <div className="absolute left-1/2 top-32 transform -translate-x-1/2 z-0 w-full">
              {/* Main Root Trunk */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-64 w-1"
                   style={{ 
                     background: 'linear-gradient(to bottom, transparent, #8B5CF6, transparent)',
                     opacity: 0.3
                   }}>
              </div>
              
              {/* Left Side Roots */}
              <div className="absolute left-1/2 top-0">
                {[0, 1, 2].map((i) => (
                  <div
                    key={`left-${i}`}
                    className="absolute"
                    style={{
                      left: '-120px',
                      top: `${40 + (i * 80)}px`,
                      width: '120px',
                      height: '2px',
                      transform: `rotate(${-30 - (i * 10)}deg)`,
                      transformOrigin: 'right center',
                      background: `linear-gradient(to left, transparent, #7C3AED)`,
                      opacity: 0.4 + (i * 0.1)
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Right Side Roots */}
              <div className="absolute left-1/2 top-0">
                {[0, 1, 2].map((i) => (
                  <div
                    key={`right-${i}`}
                    className="absolute"
                    style={{
                      left: '0',
                      top: `${40 + (i * 80)}px`,
                      width: '120px',
                      height: '2px',
                      transform: `rotate(${30 + (i * 10)}deg)`,
                      transformOrigin: 'left center',
                      background: `linear-gradient(to right, transparent, #7C3AED)`,
                      opacity: 0.4 + (i * 0.1)
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Floating Particles around Rocket */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  backgroundColor: `rgba(${Math.random() > 0.5 ? '139, 92, 246' : '79, 70, 229'}, 0.6)`,
                  left: `${40 + Math.random() * 20}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 100}ms`,
                  animationDuration: `${Math.random() * 3 + 2}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Categories as End Points of Roots */}
          <div className="mt-64">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {categories.map((category, index) => {
                const isLeft = index % 2 === 0;
                const row = Math.floor(index / 2);
                const delay = index * 100;
                
                return (
                  <div
                    key={index}
                    className={`relative ${isLeft ? 'md:mr-auto' : 'md:ml-auto'} transform hover:scale-105 transition-all duration-300`}
                    style={{ 
                      animationDelay: `${delay}ms`,
                      marginTop: `${row * 20}px`
                    }}
                  >
                    {/* Root Connection Line (Animated Growth) */}
                    <div 
                      className={`absolute top-1/2 w-24 h-0.5 hidden md:block ${isLeft ? '-left-24' : '-right-24'}`}
                      style={{ 
                        backgroundColor: 'rgba(139, 92, 246, 0.3)',
                        transformOrigin: isLeft ? 'right center' : 'left center',
                        transform: 'scaleX(0)',
                        animation: `growLine 0.8s ease-out ${delay + 300}ms forwards`
                      }}
                    ></div>
                    
                    {/* Category Node */}
                    <div className="relative group">
                      {/* Pulsing Effect */}
                      <div className="absolute inset-0 rounded-full animate-ping opacity-20"
                           style={{ 
                             backgroundColor: '#8B5CF6',
                             animationDelay: `${delay}ms`,
                             animationDuration: '2s'
                           }}>
                      </div>
                      
                      {/* Root End Point */}
                      <div 
                        className="relative w-20 h-20 mx-auto mb-3 rounded-full flex items-center justify-center text-3xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl cursor-pointer"
                        style={{
                          backgroundColor: index % 3 === 0 ? '#4F46E5' : 
                                          index % 3 === 1 ? '#7C3AED' : '#8B5CF6',
                          boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)'
                        }}
                      >
                        {category.icon}
                        
                        {/* Glow Effect on Hover */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                             style={{
                               boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
                             }}>
                        </div>
                      </div>
                      
                      {/* Category Details */}
                      <div className="text-center">
                        <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">{category.name}</h3>
                        
                        {/* Animated Course Count */}
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <div className="relative">
                            <div 
                              className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                              style={{ 
                                opacity: 0,
                                animation: `fadeIn 0.5s ease-out ${delay + 500}ms forwards`
                              }}
                            >
                              {category.count}
                            </div>
                          </div>
                          <span className="text-gray-500 text-sm">courses</span>
                        </div>
                        
                        {/* Growth Bar */}
                        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: '0%',
                              backgroundColor: index % 3 === 0 ? '#4F46E5' : 
                                              index % 3 === 1 ? '#7C3AED' : '#8B5CF6',
                              animation: `growWidth 1s ease-out ${delay + 700}ms forwards`,
                              animationFillMode: 'forwards'
                            }}
                            data-width={`${Math.min((category.count / 400) * 100, 100)}%`}
                          ></div>
                        </div>
                        
                        {/* Tiny Root Fibers */}
                        <div className="absolute top-10 hidden md:block">
                          {[...Array(2)].map((_, i) => (
                            <div
                              key={i}
                              className={`absolute h-px w-3 ${isLeft ? '-left-8' : '-right-8'}`}
                              style={{
                                backgroundColor: 'rgba(139, 92, 246, 0.2)',
                                top: `${i * 4}px`,
                                transform: isLeft ? 'rotate(10deg)' : 'rotate(-10deg)',
                                animation: `fadeIn 0.5s ease-out ${delay + 900 + (i * 100)}ms forwards`,
                                opacity: 0
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Interactive Root Growth on Hover */}
                    <div 
                      className={`absolute top-1/2 w-12 h-0.5 hidden md:block ${isLeft ? '-left-36' : '-right-36'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{ 
                        backgroundColor: '#7C3AED',
                        transform: `scaleX(${isLeft ? -1 : 1})`
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
            
            {/* Ground Level with Soil */}
            <div className="mt-20 pt-12 border-t border-gray-200 relative">
              {/* Soil Texture */}
              <div className="absolute -top-6 left-0 right-0 h-6 flex justify-center">
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className="w-px h-4 mx-0.5"
                    style={{
                      backgroundColor: `hsl(${30 + Math.random() * 20}, 50%, ${40 + Math.random() * 20}%)`,
                      transform: `translateY(${Math.sin(i * 0.5) * 2}px) rotate(${Math.random() * 10 - 5}deg)`,
                      opacity: 0.4 + Math.random() * 0.3
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Growth Message */}
              <div className="text-center">
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold" style={{ color: '#4F46E5' }}>{categories.reduce((sum, cat) => sum + cat.count, 0).toLocaleString()}+</span> courses growing from our learning rocket
                </p>
                <p className="text-gray-500 text-sm">
                  Each root represents knowledge expanding in different directions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section style={{ backgroundColor: 'rgb(233,231,253)' }} className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Courses</h2>
              <p className="text-gray-700">Most students are joining now</p>
            </div>
            <button 
              className="font-medium hover:underline flex items-center gap-1 group"
              style={{ color: '#4F46E5' }}
            >
              View All
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  {course.price === 'Free' && (
                    <div 
                      className="absolute top-3 left-3 text-white px-3 py-1 rounded text-sm font-medium shadow-md"
                      style={{ backgroundColor: '#4F46E5' }}
                    >
                      Free
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 hover:text-indigo-600 transition-colors cursor-pointer">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">Instructor: {course.instructor}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-gray-700 font-medium">{course.rating}</span>
                      <span className="text-gray-500 text-sm">({course.students.toLocaleString()})</span>
                    </div>
                    <div className="text-gray-500 text-sm">
                      {course.duration} • {course.lessons} lessons
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <div 
                        className="text-xl font-bold"
                        style={{ color: '#4F46E5' }}
                      >
                        {course.price}
                      </div>
                      {course.discount && (
                        <div className="text-sm text-gray-500 line-through">{course.discount}</div>
                      )}
                    </div>
                    <button 
                      className="px-4 py-2 rounded text-sm font-medium text-white hover:shadow-md transition-shadow"
                      style={{ backgroundColor: '#4F46E5' }}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Instructors</h2>
            <p className="text-gray-600">Learn directly from experts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 border"
                style={{ borderColor: 'rgb(229,230,250)' }}
              >
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2"
                  style={{ borderColor: 'rgb(233,231,253)' }}
                >
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="font-bold text-gray-900 text-lg mb-1">{instructor.name}</h3>
                <p 
                  className="font-medium mb-3"
                  style={{ color: '#4F46E5' }}
                >
                  {instructor.expertise}
                </p>
                <p className="text-gray-500 text-sm mb-4">{instructor.experience} experience</p>
                
                <div className="flex justify-center gap-6 mb-4">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">{instructor.students.toLocaleString()}+</div>
                    <div className="text-gray-500 text-sm">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">{instructor.courses}</div>
                    <div className="text-gray-500 text-sm">Courses</div>
                  </div>
                </div>
                
                <button 
                  className="w-full py-2 rounded text-sm font-medium border hover:bg-indigo-50 transition-colors"
                  style={{ borderColor: '#4F46E5', color: '#4F46E5' }}
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Courses Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div 
            className="rounded-xl p-8 md:p-12 hover:shadow-lg transition-shadow duration-300"
            style={{ backgroundColor: 'rgb(229,230,250)' }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Learn for Free
                  <span 
                    className="block"
                    style={{ color: '#4F46E5' }}
                  >
                    Without any cost
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Acquire basic skills from 100+ free courses. 
                  Start today, no payment required.
                </p>
                <button 
                  className="px-8 py-3 rounded-lg font-medium text-white hover:shadow-lg transition-shadow transform hover:-translate-y-0.5"
                  style={{ 
                    backgroundColor: '#4F46E5',
                    background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)'
                  }}
                >
                  View Free Courses
                </button>
              </div>
              
              <div className="md:w-1/3">
                <div 
                  className="rounded-lg p-6 text-center hover:shadow-md transition-shadow"
                  style={{ backgroundColor: 'rgb(233,231,253)' }}
                >
                  <div className="text-5xl mb-4 animate-bounce">🎓</div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">100+ Free Courses</div>
                  <div className="text-gray-700">Free learning opportunity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button with Progress Circle */}
      <button
        id="scrollToTop"
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full shadow-lg z-50 flex items-center justify-center transition-all duration-300 opacity-0 scale-0 hover:scale-110 hover:shadow-xl group"
        style={{ backgroundColor: '#4F46E5' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        {/* Progress Circle */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="4"
          />
          <circle
            id="progressCircle"
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset="283"
          />
        </svg>
        
        {/* Arrow Icon */}
        <svg 
          className="relative w-6 h-6 text-white transform transition-transform duration-300 group-hover:-translate-y-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        
        {/* Progress Percentage (Optional) */}
        <div className="absolute -top-1 -right-1 bg-white text-indigo-600 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
          {Math.round(scrollProgress)}%
        </div>
      </button>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes growLine {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
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
        
        @keyframes growWidth {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width, 100%);
          }
        }
      `}</style>
    </div>
  );
};

// CSS animations setup on component mount
const setupAnimations = () => {
  useEffect(() => {
    // Set custom CSS property for width animations
    document.querySelectorAll('[data-width]').forEach(el => {
      const width = el.getAttribute('data-width');
      el.style.setProperty('--target-width', width);
    });
  }, []);
};

export default Home;