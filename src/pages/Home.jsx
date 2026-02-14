import React, { useEffect, useState, useRef } from 'react';

const Home = () => {
  const [mouseY, setMouseY] = useState(0);
  const [rocketPosition, setRocketPosition] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Drag/slide states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);
  const autoSlideTimerRef = useRef(null);
  const rocketSectionRef = useRef(null);
  
  // State for counting numbers
  const [counts, setCounts] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
    satisfaction: 0
  });

  // Track mouse position for rocket
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (rocketSectionRef.current) {
        const sectionRect = rocketSectionRef.current.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        
        // Calculate mouse position relative to section (0 to 100%)
        const relativeY = ((e.clientY - sectionTop) / sectionHeight) * 100;
        
        // Clamp between 0 and 100
        const clampedY = Math.min(100, Math.max(0, relativeY));
        setMouseY(clampedY);
        
        // Update rocket position - reverse direction (top to bottom)
        setRocketPosition(clampedY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll for button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      
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

  // Counting animation effect
  useEffect(() => {
    const targetNumbers = {
      students: 50000,
      courses: 1200,
      instructors: 200,
      satisfaction: 95
    };

    const duration = 1000;
    const steps = 40;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      if (currentStep <= steps) {
        const progress = currentStep / steps;
        
        setCounts({
          students: Math.min(Math.floor(targetNumbers.students * progress), targetNumbers.students),
          courses: Math.min(Math.floor(targetNumbers.courses * progress), targetNumbers.courses),
          instructors: Math.min(Math.floor(targetNumbers.instructors * progress), targetNumbers.instructors),
          satisfaction: Math.min(Math.floor(targetNumbers.satisfaction * progress), targetNumbers.satisfaction)
        });
      } else {
        setCounts({
          students: targetNumbers.students,
          courses: targetNumbers.courses,
          instructors: targetNumbers.instructors,
          satisfaction: targetNumbers.satisfaction
        });
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Auto slide functionality
  useEffect(() => {
    startAutoSlide();
    
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setCurrentTranslate(-activeSlide * 100);
    setPrevTranslate(-activeSlide * 100);
    resetAutoSlide();
  }, [activeSlide]);

  const startAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
    
    autoSlideTimerRef.current = setInterval(() => {
      if (!isDragging) {
        setActiveSlide((prev) => (prev + 1) % 3);
      }
    }, 5000);
  };

  const resetAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
    startAutoSlide();
  };

  // Drag/Slide Handlers
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setPrevTranslate(currentTranslate);
    sliderRef.current.style.cursor = 'grabbing';
    
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const currentX = e.pageX - sliderRef.current.offsetLeft;
    const diff = currentX - startX;
    const newTranslate = prevTranslate + (diff / sliderRef.current.offsetWidth) * 100;
    
    const maxTranslate = 0;
    const minTranslate = -200;
    
    if (newTranslate <= maxTranslate && newTranslate >= minTranslate) {
      setCurrentTranslate(newTranslate);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    sliderRef.current.style.cursor = 'grab';
    
    const slideWidth = 100;
    const slideIndex = Math.round(Math.abs(currentTranslate) / slideWidth);
    const newIndex = Math.min(Math.max(slideIndex, 0), 2);
    setActiveSlide(newIndex);
    resetAutoSlide();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setPrevTranslate(currentTranslate);
    
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const currentX = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const diff = currentX - startX;
    const newTranslate = prevTranslate + (diff / sliderRef.current.offsetWidth) * 100;
    
    const maxTranslate = 0;
    const minTranslate = -200;
    
    if (newTranslate <= maxTranslate && newTranslate >= minTranslate) {
      setCurrentTranslate(newTranslate);
    }
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    if (!isDragging) return;
    setIsDragging(false);
    
    const slideWidth = 100;
    const slideIndex = Math.round(Math.abs(currentTranslate) / slideWidth);
    const newIndex = Math.min(Math.max(slideIndex, 0), 2);
    setActiveSlide(newIndex);
    resetAutoSlide();
  };

  const handleTouchCancel = (e) => {
    e.preventDefault();
    if (isDragging) {
      handleTouchEnd(e);
    }
  };

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

  const StatsIcons = {
    Students: () => (
      <svg className="w-8 h-8 mx-auto mb-2" style={{ color: '#4F46E5' }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    Courses: () => (
      <svg className="w-8 h-8 mx-auto mb-2" style={{ color: '#4F46E5' }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
      </svg>
    ),
    Instructors: () => (
      <svg className="w-8 h-8 mx-auto mb-2" style={{ color: '#4F46E5' }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-1 .05 1.16.84 2 1.87 2 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    Satisfaction: () => (
      <svg className="w-8 h-8 mx-auto mb-2" style={{ color: '#4F46E5' }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    )
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20" 
               style={{ backgroundColor: '#8B5CF6' }}></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20" 
               style={{ backgroundColor: '#10B981' }}></div>
          
          <div className="absolute top-1/4 left-10 w-16 h-16 rounded-lg rotate-12 animate-pulse"
               style={{ backgroundColor: 'rgba(79, 70, 229, 0.15)' }}></div>
          <div className="absolute bottom-1/4 right-20 w-12 h-12 rounded-full animate-bounce"
               style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)' }}></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 rotate-45 animate-pulse"
               style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)' }}></div>
        </div>

        <div className="absolute inset-0" 
             style={{
               background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(236, 72, 153, 0.05) 100%)'
             }}>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mt-8 md:mt-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">Learn in Bangla,</span>
              <span className="block mt-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Become Skilled
                </span>
              </span>
            </h1>

            <div className="h-auto min-h-[80px] md:h-20 mb-8 md:mb-10">
              <p className="text-xl md:text-2xl text-gray-700 mb-4 px-4 md:px-0 leading-relaxed">
                <span className="typing-effect block md:inline">
                  Join 1000+ Bangla courses, learn from experts, build your career
                </span>
              </p>
            </div>

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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-white border-y py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <StatsIcons.Students />
              <div className="text-3xl font-bold" style={{ color: '#4F46E5' }}>
                {counts.students.toLocaleString()}+
              </div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="text-center">
              <StatsIcons.Courses />
              <div className="text-3xl font-bold" style={{ color: '#4F46E5' }}>
                {counts.courses.toLocaleString()}+
              </div>
              <div className="text-gray-600">Courses</div>
            </div>
            <div className="text-center">
              <StatsIcons.Instructors />
              <div className="text-3xl font-bold" style={{ color: '#4F46E5' }}>
                {counts.instructors.toLocaleString()}+
              </div>
              <div className="text-gray-600">Instructors</div>
            </div>
            <div className="text-center">
              <StatsIcons.Satisfaction />
              <div className="text-3xl font-bold" style={{ color: '#4F46E5' }}>
                {counts.satisfaction}%
              </div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section with Mouse-Controlled Rocket */}
      <section ref={rocketSectionRef} className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Learning Paths</h2>
            <p className="text-gray-600">Move your mouse up and down to control the rocket!</p>
          </div>
          
          <div className="relative min-h-[600px] md:min-h-[700px]">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-200 via-indigo-200 to-transparent"></div>
              
              {/* Animated Line that follows mouse */}
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-600 via-indigo-600 to-pink-600 transition-all duration-100 ease-out"
                style={{ 
                  height: `${rocketPosition}%`,
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
                }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>

            {/* Mouse-Controlled Rocket */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 z-20 transition-all duration-100 ease-out"
              style={{ 
                top: `${rocketPosition}%`,
              }}
            >
              <div className="relative">
                {/* Rocket Body */}
                <div className="text-5xl animate-bounce" style={{ animationDuration: '1s' }}>
                  🚀
                </div>
                
                {/* Rocket Flame */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-3 h-6 rounded-t-full animate-pulse"
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

                {/* Connection Points */}
                <div className="absolute -left-1 top-1/2 w-4 h-0.5 bg-purple-500"></div>
                <div className="absolute -right-1 top-1/2 w-4 h-0.5 bg-purple-500"></div>
              </div>
            </div>

            {/* Mouse Position Indicator */}
            <div className="absolute right-4 top-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg z-30 border border-purple-100">
              <p className="text-sm text-gray-600">
                Mouse Position: <span className="font-bold text-purple-600">{Math.round(rocketPosition)}%</span>
              </p>
            </div>

            {/* Left Side Categories - Agriculture, Technology, Education */}
            <div className="absolute left-0 md:left-[15%] top-0 w-[45%] md:w-[30%] space-y-16 md:space-y-24">
              {categories.slice(0, 3).map((category, index) => {
                // Calculate connection line activation based on rocket position
                const connectionThreshold = (index + 1) * 25; // 25%, 50%, 75%
                const isConnected = rocketPosition >= connectionThreshold - 10;
                const connectionWidth = isConnected ? 100 : 0;
                
                return (
                  <div
                    key={index}
                    className="relative group"
                    style={{ marginTop: index === 0 ? '2rem' : '0' }}
                  >
                    {/* Connection Line from Category to Main Line */}
                    <div className="absolute right-0 top-1/2 w-[100%] md:w-[200%] h-0.5 z-10">
                      {/* Base Line */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-transparent"></div>
                      
                      {/* Animated Connection Line - activates based on rocket position */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300"
                        style={{ 
                          width: `${connectionWidth}%`,
                          opacity: isConnected ? 0.8 : 0,
                          boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
                        }}
                      ></div>
                    </div>

                    {/* Category Card */}
                    <div className={`relative bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border ${isConnected ? 'border-purple-400' : 'border-purple-100'}`}>
                      {/* Icon */}
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-3xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg">
                        {category.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <h3 className="font-bold text-gray-900 mb-1">{category.name}</h3>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            {category.count}
                          </span>
                          <span className="text-gray-500 text-sm">courses</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mt-3 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transition-all duration-1000"
                            style={{ 
                              width: isConnected ? `${Math.min((category.count / 400) * 100, 100)}%` : '0%',
                              opacity: isConnected ? 1 : 0
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side Categories - Skills, Business, Jobs */}
            <div className="absolute right-0 md:right-[15%] top-0 w-[45%] md:w-[30%] space-y-16 md:space-y-24">
              {categories.slice(3, 6).map((category, index) => {
                // Calculate connection line activation based on rocket position
                const connectionThreshold = (index + 4) * 20; // 80%, 100%, 120% (adjusted)
                const isConnected = rocketPosition >= connectionThreshold - 15;
                const connectionWidth = isConnected ? 100 : 0;
                
                return (
                  <div
                    key={index}
                    className="relative group"
                    style={{ marginTop: index === 0 ? '2rem' : '0' }}
                  >
                    {/* Connection Line from Category to Main Line */}
                    <div className="absolute left-0 top-1/2 w-[100%] md:w-[200%] h-0.5 z-10">
                      {/* Base Line */}
                      <div className="absolute inset-0 bg-gradient-to-l from-purple-200 to-transparent"></div>
                      
                      {/* Animated Connection Line - activates based on rocket position */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-l from-purple-600 to-indigo-600 transition-all duration-300"
                        style={{ 
                          width: `${connectionWidth}%`,
                          opacity: isConnected ? 0.8 : 0,
                          right: 0,
                          boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
                        }}
                      ></div>
                    </div>

                    {/* Category Card */}
                    <div className={`relative bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border ${isConnected ? 'border-purple-400' : 'border-purple-100'}`}>
                      {/* Icon */}
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-3xl bg-gradient-to-br from-indigo-500 to-pink-600 text-white shadow-lg">
                        {category.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <h3 className="font-bold text-gray-900 mb-1">{category.name}</h3>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                            {category.count}
                          </span>
                          <span className="text-gray-500 text-sm">courses</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mt-3 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-indigo-500 to-pink-600 rounded-full transition-all duration-1000"
                            style={{ 
                              width: isConnected ? `${Math.min((category.count / 400) * 100, 100)}%` : '0%',
                              opacity: isConnected ? 1 : 0
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating Particles - React to mouse position */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse pointer-events-none"
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  backgroundColor: `rgba(${Math.random() > 0.5 ? '139, 92, 246' : '79, 70, 229'}, ${0.3 + Math.random() * 0.5})`,
                  left: `${30 + Math.random() * 40}%`,
                  top: `${Math.min(rocketPosition + (Math.random() * 20 - 10), 100)}%`,
                  animationDelay: `${i * 100}ms`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  opacity: rocketPosition > 20 ? 0.6 : 0.2,
                  transition: 'top 0.3s ease-out'
                }}
              ></div>
            ))}
          </div>

          {/* Mouse Control Instructions */}
          <div className="mt-12 text-center">
        
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
         
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

      {/* Free Courses Slider Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learn for Free
              <span className="block text-2xl md:text-3xl mt-2" style={{ color: '#4F46E5' }}>
                Without any cost
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Acquire basic skills from 100+ free courses. Start today, no payment required.
            </p>
          </div>

          <div 
            className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl select-none touch-pan-y"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(${currentTranslate}%)` }}
            >
              {/* Slide 1 - Agriculture */}
              <div className="min-w-full relative">
                <img 
                  src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1200&h=500&fit=crop" 
                  alt="Agriculture Course"
                  className="w-full h-[300px] md:h-[400px] object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 flex items-center pointer-events-none">
                  <div className="text-white p-8 md:p-12 max-w-2xl">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block mb-4">
                      <span className="text-lg">🌾 Free Course</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Modern Agriculture Techniques</h3>
                    <p className="text-lg md:text-xl mb-6 text-gray-100">Learn smart farming, crop management, and sustainable agriculture practices</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                        <span>2.5k+ enrolled</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                        <span>Dr. Sumaiya Khan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 - Technology */}
              <div className="min-w-full relative">
                <img 
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=500&fit=crop" 
                  alt="Programming Course"
                  className="w-full h-[300px] md:h-[400px] object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-900/80 flex items-center pointer-events-none">
                  <div className="text-white p-8 md:p-12 max-w-2xl">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block mb-4">
                      <span className="text-lg">💻 Free Course</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Programming for Beginners</h3>
                    <p className="text-lg md:text-xl mb-6 text-gray-100">Learn Python, JavaScript, and web development from scratch</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                        <span>5k+ enrolled</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                        <span>Rafi Ahmed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 - Freelancing */}
              <div className="min-w-full relative">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=500&fit=crop" 
                  alt="Freelancing Course"
                  className="w-full h-[300px] md:h-[400px] object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/80 flex items-center pointer-events-none">
                  <div className="text-white p-8 md:p-12 max-w-2xl">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block mb-4">
                      <span className="text-lg">💼 Free Course</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Freelancing Masterclass</h3>
                    <p className="text-lg md:text-xl mb-6 text-gray-100">Learn how to start freelancing, find clients, and earn in dollars</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                        <span>3.8k+ enrolled</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                        <span>Zubayer Hossain</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveSlide(index);
                  resetAutoSlide();
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? 'w-8 bg-indigo-600' 
                    : 'bg-gray-300 hover:bg-indigo-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <button 
              className="px-8 py-3 rounded-lg font-medium text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2 group"
              style={{ 
                backgroundColor: '#4F46E5',
                background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)'
              }}
            >
              View All Free Courses
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        id="scrollToTop"
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full shadow-lg z-50 flex items-center justify-center transition-all duration-300 opacity-0 scale-0 hover:scale-110 hover:shadow-xl group"
        style={{ backgroundColor: '#4F46E5' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
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
        
        <svg 
          className="relative w-6 h-6 text-white transform transition-transform duration-300 group-hover:-translate-y-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        
        <div className="absolute -top-1 -right-1 bg-white text-indigo-600 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
          {Math.round(rocketPosition)}%
        </div>
      </button>

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

        @media (max-width: 768px) {
          section:first-of-type {
            margin-top: 10px;
          }
          
          .typing-effect {
            margin-top: 8px;
            line-height: 1.5;
            display: block;
          }
          
          h1 {
            margin-bottom: 0.25rem !important;
          }
          
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;