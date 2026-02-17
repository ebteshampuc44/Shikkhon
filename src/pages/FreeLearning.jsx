import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const FreeLearning = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [sparkles, setSparkles] = useState([]);
  const [rippleEffect, setRippleEffect] = useState(null);

  // Free courses data
  const freeCourses = [
    {
      id: 1,
      title: 'Web Development Basics',
      instructor: 'Alex Johnson',
      duration: '4 hours',
      lessons: 12,
      students: '10,234',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      category: 'Technology',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 2,
      title: 'Digital Marketing Fundamentals',
      instructor: 'Sarah Miller',
      duration: '3 hours',
      lessons: 10,
      students: '8,567',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w-400&h=250&fit=crop',
      category: 'Business',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 3,
      title: 'Graphic Design for Beginners',
      instructor: 'Michael Chen',
      duration: '5 hours',
      lessons: 15,
      students: '15,892',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&h=250&fit=crop',
      category: 'Design',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 4,
      title: 'Python Programming',
      instructor: 'Dr. Robert Davis',
      duration: '6 hours',
      lessons: 18,
      students: '25,743',
      image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec7?w=400&h=250&fit=crop',
      category: 'Technology',
      color: 'from-amber-400 to-orange-500'
    },
    {
      id: 5,
      title: 'Financial Literacy',
      instructor: 'Emma Wilson',
      duration: '2.5 hours',
      lessons: 8,
      students: '7,431',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      category: 'Business',
      color: 'from-red-400 to-rose-500'
    },
    {
      id: 6,
      title: 'Mobile Photography',
      instructor: 'James Taylor',
      duration: '3 hours',
      lessons: 11,
      students: '12,586',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=250&fit=crop',
      category: 'Skill Development',
      color: 'from-teal-400 to-cyan-500'
    }
  ];

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
  const ClockIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const LessonsIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  const StudentsIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  const FreeBadgeIcon = () => (
    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

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
        
        {/* 3D Tilt Header */}
        <div 
          className="text-center mb-12 transform-gpu transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateZ(50px)`
          }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
              FREE
            </span>
            <br />
            <span className="text-gray-800 relative">
              LEARNING RESOURCES
              <div className="absolute -inset-2 bg-indigo-300/30 blur-2xl animate-pulse-slow"></div>
            </span>
          </h1>
          
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 blur-3xl opacity-50 animate-pulse"></div>
            <p className="relative text-gray-600 text-lg max-w-2xl mx-auto font-light tracking-wide">
              Access high-quality educational content absolutely free. Start learning today without any cost!
            </p>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-20 left-10 text-indigo-400 animate-float-slow">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 text-purple-400 animate-float-slower">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Stats Section with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { number: '500+', label: 'Free Courses', sub: 'Updated weekly', icon: '📚', color: 'from-blue-400 to-indigo-500' },
            { number: '50K+', label: 'Active Learners', sub: 'Community growing', icon: '👥', color: 'from-green-400 to-emerald-500' },
            { number: '100+', label: 'Expert Instructors', sub: 'Sharing knowledge', icon: '👨‍🏫', color: 'from-purple-400 to-pink-500' },
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
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Free Courses Grid */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 relative">
              Featured Free Courses
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-scale-x"></div>
            </h2>
            <div className="text-indigo-600 font-medium bg-indigo-50 px-4 py-2 rounded-full">
              {freeCourses.length} Courses Available
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeCourses.map((course, index) => (
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
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image} 
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

                    {/* FREE Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
                        <FreeBadgeIcon />
                        FREE
                      </span>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${course.color} text-white text-xs font-bold rounded-full shadow-lg`}>
                        {course.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    
                    {/* Title and Instructor */}
                    <div className="mb-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-1">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        By {course.instructor}
                      </p>
                    </div>
                    
                    {/* Course Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      <div className="bg-gray-50 rounded-xl p-2 text-center group-hover:bg-indigo-50 transition-colors">
                        <div className="flex items-center justify-center text-indigo-600 mb-1">
                          <ClockIcon />
                        </div>
                        <div className="text-xs font-medium text-gray-700">{course.duration}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2 text-center group-hover:bg-indigo-50 transition-colors">
                        <div className="flex items-center justify-center text-indigo-600 mb-1">
                          <LessonsIcon />
                        </div>
                        <div className="text-xs font-medium text-gray-700">{course.lessons} lessons</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2 text-center group-hover:bg-indigo-50 transition-colors">
                        <div className="flex items-center justify-center text-indigo-600 mb-1">
                          <StudentsIcon />
                        </div>
                        <div className="text-xs font-medium text-gray-700">{course.students}</div>
                      </div>
                    </div>
                    
                    {/* Enroll Button with Ripple */}
                    <button 
                      className="relative w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden group/btn transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                      onClick={(e) => handleRipple(e, course.id)}
                    >
                      {rippleEffect?.id === course.id && (
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
                        Enroll Now - Free
                        <ArrowRightIcon />
                      </span>
                      <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section with Animation */}
        <div className="relative mt-12 mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 md:p-12 text-center text-white overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
            </div>
            
            {/* Floating Icons */}
            <div className="absolute top-5 left-5 text-4xl animate-float-slow opacity-20">📚</div>
            <div className="absolute bottom-5 right-5 text-4xl animate-float-slower opacity-20">🎓</div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-down">
                Start Learning Today!
              </h2>
              <p className="text-lg opacity-90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Join thousands of learners who are enhancing their skills with our free courses. No payment required, ever.
              </p>
              <Link 
                to="/register"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                Create Free Account
                <span className="transform group-hover:translate-x-1 transition-transform">
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
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
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
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
        
        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }
        
        .animate-scale-x {
          animation: scaleX 0.6s ease-out forwards;
          transform-origin: center;
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default FreeLearning;