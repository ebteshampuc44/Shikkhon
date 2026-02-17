import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const MyClass = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [sparkles, setSparkles] = useState([]);
  const [rippleEffect, setRippleEffect] = useState(null);
  
  // ডেমো ডাটা - শুধু Agriculture Management রাখা হয়েছে
  const [purchasedCourses, setPurchasedCourses] = useState([
    {
      id: 1,
      title: 'Agriculture Management',
      instructor: 'Dr. Farhana Islam',
      thumbnail: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&h=250&fit=crop',
      progress: 45,
      duration: '8 Hours',
      lessons: 22,
      completedLessons: 7,
      lastWatched: '2 hours ago',
      videoUrl: 'https://youtu.be/rN7-y2aSaNI',
      platform: 'YouTube',
      color: 'from-green-400 to-emerald-500'
    }
  ]);

  // Track mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate sparkles on card hover
  const generateSparkles = (cardId, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 100,
      y: y + (Math.random() - 0.5) * 100,
      size: Math.random() * 6 + 4,
      delay: i * 0.05
    }));
    
    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 1000);
  };

  // Create ripple effect on button click
  const handleRipple = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRippleEffect({ x, y, id });
    setTimeout(() => setRippleEffect(null), 1000);
  };

  // SVG Icons Components
  const UserIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const BookIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );

  const PlayIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const HistoryIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const TrashIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );

  const YouTubeIcon = () => (
    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );

  if (purchasedCourses.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 px-4 overflow-hidden">
        
        {/* Animated Background Grid */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-indigo-300/50 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${10 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>

          {/* Soft Gradient Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          
          {/* 3D Tilt Header */}
          <div 
            className="mb-8 transform-gpu transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateZ(50px)`
            }}
          >
            {/* Empty State Illustration with Animation */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="relative w-48 h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center animate-float-slow">
                  <BookIcon />
                </div>
              </div>
            </div>

            {/* Message */}
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
                No Courses
              </span>
              <br />
              <span className="text-gray-800 relative">
                Yet!
                <div className="absolute -inset-2 bg-indigo-300/30 blur-2xl animate-pulse-slow"></div>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-4">
              You haven't purchased any courses yet.
            </p>
            
            <p className="text-gray-500 mb-10 max-w-lg mx-auto">
              Start your learning journey today by exploring our wide range of courses. 
              Your purchased courses will appear here once you enroll.
            </p>
          </div>

          {/* Stats Section with Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { number: '150+', label: 'Expert-Led Courses', icon: '📚', color: 'from-blue-400 to-indigo-500' },
              { number: '15k+', label: 'Happy Students', icon: '👥', color: 'from-green-400 to-emerald-500' },
              { number: '24/7', label: 'Lifetime Access', icon: '⏰', color: 'from-purple-400 to-pink-500' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons with Ripple Effect */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="relative group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              onClick={(e) => handleRipple(e, 'browse')}
            >
              {rippleEffect?.id === 'browse' && (
                <span 
                  className="absolute bg-white/30 rounded-full animate-ripple"
                  style={{
                    left: rippleEffect.x,
                    top: rippleEffect.y,
                    width: '100px',
                    height: '100px',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <BookIcon />
                Browse Courses
              </span>
            </Link>
            
            <Link
              to="/free-learning"
              className="relative group px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 border-2 border-gray-200 flex items-center justify-center gap-2"
              onClick={(e) => handleRipple(e, 'free')}
            >
              {rippleEffect?.id === 'free' && (
                <span 
                  className="absolute bg-indigo-100 rounded-full animate-ripple"
                  style={{
                    left: rippleEffect.x,
                    top: rippleEffect.y,
                    width: '100px',
                    height: '100px',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Free Learning
              </span>
            </Link>
          </div>

          {/* Popular Categories */}
          <div className="mt-16">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Popular Categories</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Agriculture', 'Technology', 'Business', 'Marketing', 'Design', 'Language'].map((cat, idx) => (
                <Link
                  key={idx}
                  to={`/courses?category=${cat.toLowerCase()}`}
                  className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border border-gray-200 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 px-4 overflow-hidden">
      
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-indigo-300/50 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Soft Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header with 3D Tilt - Centered */}
        <div 
          className="text-center mb-12 transform-gpu transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg) translateZ(30px)`
          }}
        >
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
              My Classes
            </span>
          </h1>
          <p className="text-gray-600 text-lg">Continue learning from where you left off</p>
          
          {/* Decorative Line */}
          <div className="flex justify-center mt-4">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-scale-x"></div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative pb-16">
          {purchasedCourses.map((course, index) => (
            <div
              key={course.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseMove={(e) => generateSparkles(course.id, e)}
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Sparkles Effect */}
              {sparkles.map((sparkle) => (
                <div
                  key={sparkle.id}
                  className="absolute pointer-events-none z-50"
                  style={{
                    left: sparkle.x,
                    top: sparkle.y,
                    width: sparkle.size,
                    height: sparkle.size,
                    background: `radial-gradient(circle, ${
                      course.color?.split(' ')[1] || '#8b5cf6'
                    }, transparent)`,
                    borderRadius: '50%',
                    animation: `sparkle 1s ease-out forwards`,
                    animationDelay: `${sparkle.delay}s`
                  }}
                />
              ))}

              {/* Morphing Card Background */}
              <div 
                className={`absolute -inset-0.5 bg-gradient-to-r ${course.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 ${
                  hoveredCard === course.id ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  animation: hoveredCard === course.id ? 'morph 3s ease-in-out infinite' : 'none'
                }}
              ></div>

              {/* Main Card */}
              <div 
                className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 group-hover:border-transparent transition-all duration-500 transform-gpu shadow-lg hover:shadow-2xl"
                style={{
                  transform: hoveredCard === course.id 
                    ? `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) scale(1.02) translateZ(30px)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0)',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {/* Thumbnail Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Animated Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t ${course.color} to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500`}
                    style={{
                      clipPath: hoveredCard === course.id 
                        ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
                        : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
                    }}
                  ></div>
                  
                  {/* Platform Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold text-white shadow-lg flex items-center ${
                      course.platform === 'YouTube' ? 'bg-red-600' : 'bg-indigo-600'
                    }`}>
                      {course.platform === 'YouTube' && <YouTubeIcon />}
                      {course.platform}
                    </span>
                  </div>

                  {/* Progress Badge */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex justify-between items-center text-white text-sm mb-1 drop-shadow-lg">
                      <span>{course.progress}% Complete</span>
                      <span>{course.completedLessons}/{course.lessons} lessons</span>
                    </div>
                    <div className="w-full bg-white/30 rounded-full h-2 backdrop-blur-sm">
                      <div 
                        className={`bg-gradient-to-r ${course.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  
                  {/* Title and Instructor */}
                  <div className="mb-4">
                    <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      <UserIcon />
                      {course.instructor}
                    </p>
                  </div>
                  
                  {/* Course Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-xl p-2 text-center group-hover:bg-indigo-50 transition-colors">
                      <div className="flex items-center justify-center text-indigo-600 mb-1">
                        <ClockIcon />
                      </div>
                      <div className="text-xs font-medium text-gray-700">{course.duration}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-2 text-center group-hover:bg-indigo-50 transition-colors">
                      <div className="flex items-center justify-center text-indigo-600 mb-1">
                        <BookIcon />
                      </div>
                      <div className="text-xs font-medium text-gray-700">{course.lessons} Lessons</div>
                    </div>
                  </div>

                  {/* Last Watched */}
                  <div className="flex items-center justify-between text-sm mb-4 bg-gradient-to-r from-indigo-50 to-purple-50 p-2 rounded-xl">
                    <span className="text-gray-600 flex items-center gap-1">
                      <HistoryIcon />
                      Last watched: {course.lastWatched}
                    </span>
                    <span className="text-indigo-600 font-medium">{course.completedLessons}/{course.lessons}</span>
                  </div>

                  {/* Continue Button with Ripple */}
                  <Link
                    to={`/course-playlist/${course.id}`}
                    className="relative w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden group/btn transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    onClick={(e) => handleRipple(e, `continue-${course.id}`)}
                  >
                    {rippleEffect?.id === `continue-${course.id}` && (
                      <span 
                        className="absolute bg-white/30 rounded-full animate-ripple"
                        style={{
                          left: rippleEffect.x,
                          top: rippleEffect.y,
                          width: '100px',
                          height: '100px',
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <PlayIcon />
                      Continue Learning
                    </span>
                  </Link>

                  {/* Remove Button */}
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this course?')) {
                        setPurchasedCourses([]);
                      }
                    }}
                    className="w-full mt-2 text-red-500 text-sm font-medium hover:text-red-600 transition-colors flex items-center justify-center gap-1 py-2 hover:bg-red-50 rounded-xl group/remove"
                  >
                    <TrashIcon />
                    Remove Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommended Section */}
        <div className="mt-12 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 relative text-center">
            Recommended for You
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-scale-x"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Advanced Farm Management', instructor: 'Dr. Sumaiya Khan', color: 'from-green-400 to-emerald-500' },
              { title: 'Sustainable Agriculture', instructor: 'Prof. Michael Chen', color: 'from-blue-400 to-indigo-500' },
              { title: 'Organic Farming Techniques', instructor: 'Emma Wilson', color: 'from-purple-400 to-pink-500' },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}>
                      <BookIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <UserIcon />
                        {item.instructor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(-10deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 70% / 40% 50% 60% 50%; }
          75% { border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%; }
        }
        
        @keyframes sparkle {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          100% { transform: scale(1) rotate(180deg); opacity: 0; }
        }
        
        @keyframes ripple {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(20); opacity: 0; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 20s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-ripple {
          animation: ripple 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-scale-x {
          animation: scaleX 0.6s ease-out forwards;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};

export default MyClass;