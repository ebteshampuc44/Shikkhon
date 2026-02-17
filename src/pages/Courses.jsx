import React, { useState, useEffect, useRef } from 'react';

// Demo Images (Replace with actual image URLs or import local images)
const courseImages = [
  'https://img-c.udemycdn.com/course/240x135/567828_67d0_2.jpg',
  'https://img-c.udemycdn.com/course/240x135/1565838_e54e_13.jpg',
  'https://img-c.udemycdn.com/course/240x135/2485386_1b7d_2.jpg',
  'https://img-c.udemycdn.com/course/240x135/914296_3670_2.jpg',
  'https://img-c.udemycdn.com/course/240x135/2733603_661e_2.jpg',
  'https://img-c.udemycdn.com/course/240x135/1011450_1c57_2.jpg'
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [sparkles, setSparkles] = useState([]);
  const [rippleEffect, setRippleEffect] = useState(null);
  const gridRef = useRef(null);

  const courseCategories = [
    { id: 'all', label: 'All Courses', icon: '🌐' },
    { id: 'programming-6-12', label: 'Programming Class 6-12', icon: '💻' },
    { id: 'hsc', label: 'HSC', icon: '📚' },
    { id: 'university', label: 'University', icon: '🎓' },
    { id: 'job-preparation', label: 'Job Preparation', icon: '💼' },
    { id: 'skill-development', label: 'Skill Development', icon: '⚡' },
    { id: 'language', label: 'Language Courses', icon: '🗣️' },
  ];

  const courses = [
    // Programming Class 6-12
    {
      id: 1,
      title: 'Complete Web Development Course With Programming Hero',
      instructor: 'Jhankar Mahbub',
      price: '৫,৫০০',
      currency: '৳',
      status: 'Registration Closed',
      dateRange: '৯ই ডিসেম্বর - ২৪শে ডিসেম্বর, ২০২৫',
      category: 'programming-6-12',
      categoryLabel: 'Programming Class 6-12',
      tag: 'Bestseller',
      image: courseImages[0],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      id: 2,
      title: 'Python Programming for Beginners',
      instructor: 'Shakib Ahmed',
      price: '৩,৫০০',
      currency: '৳',
      status: 'Registration Open',
      dateRange: '১৫ই ডিসেম্বর - ৩০শে ডিসেম্বর, ২০২৫',
      category: 'programming-6-12',
      categoryLabel: 'Programming Class 6-12',
      tag: 'Popular',
      image: courseImages[1],
      color: 'from-green-400 to-emerald-400'
    },
    
    // HSC Courses
    {
      id: 3,
      title: 'HSC Physics 1st & 2nd Paper (Complete Course)',
      instructor: 'Prof. Dr. Abdur Rahman',
      price: '৪,৫০০',
      currency: '৳',
      status: 'Registration Open',
      dateRange: '৫ই জানুয়ারি - ২০শে জানুয়ারি, ২০২৬',
      category: 'hsc',
      categoryLabel: 'HSC',
      tag: 'Featured',
      image: courseImages[2],
      color: 'from-purple-400 to-pink-400'
    },
    {
      id: 4,
      title: 'HSC Chemistry (Organic & Inorganic)',
      instructor: 'Dr. Farzana Akter',
      price: '৪,২০০',
      currency: '৳',
      status: 'Registration Open',
      dateRange: '১০ই জানুয়ারি - ৩০শে জানুয়ারি, ২০২৬',
      category: 'hsc',
      categoryLabel: 'HSC',
      tag: 'Bestseller',
      image: courseImages[3],
      color: 'from-red-400 to-orange-400'
    },
    {
      id: 5,
      title: 'HSC Mathematics (Higher Math)',
      instructor: 'Shahidul Islam',
      price: '৪,৮০০',
      currency: '৳',
      status: 'Registration Closing Soon',
      dateRange: '১২ই ডিসেম্বর - ২৮শে ডিসেম্বর, ২০২৫',
      category: 'hsc',
      categoryLabel: 'HSC',
      tag: 'Hot',
      image: courseImages[4],
      color: 'from-yellow-400 to-amber-400'
    },
    
    // University Courses
    {
      id: 6,
      title: 'University Admission Prep (Science)',
      instructor: 'Rafiqul Islam',
      price: '৬,০০০',
      currency: '৳',
      status: 'Registration Open',
      dateRange: '১লা ডিসেম্বর - ১৫ই ডিসেম্বর, ২০২৫',
      category: 'university',
      categoryLabel: 'University',
      tag: 'New',
      image: courseImages[5],
      color: 'from-indigo-400 to-blue-400'
    },
    
    // Job Preparation
    {
      id: 7,
      title: 'BCS Preliminary Course',
      instructor: 'Tanvir Hasan',
      price: '৫,৫০০',
      currency: '৳',
      status: 'Registration Open',
      dateRange: '১লা জানুয়ারি - ২০শে জানুয়ারি, ২০২৬',
      category: 'job-preparation',
      categoryLabel: 'Job Preparation',
      tag: 'Popular',
      image: courseImages[0],
      color: 'from-orange-400 to-red-400'
    },
    {
      id: 8,
      title: 'Bank Job Preparation Course',
      instructor: 'Mahmudul Hasan',
      price: '৫,০০০',
      currency: '৳',
      status: 'Registration Open',
      dateRange: '৫ই জানুয়ারি - ২৫শে জানুয়ারি, ২০২৬',
      category: 'job-preparation',
      categoryLabel: 'Job Preparation',
      tag: 'Trending',
      image: courseImages[1],
      color: 'from-pink-400 to-rose-400'
    },
    
    // Skill Development
    {
      id: 9,
      title: 'Digital Marketing Masterclass',
      instructor: 'Ahmed Rasel',
      price: '৪,৫০০',
      currency: '৳',
      status: 'Registration Closing Soon',
      dateRange: '১৫ই ডিসেম্বর - ৩০শে ডিসেম্বর, ২০২৫',
      category: 'skill-development',
      categoryLabel: 'Skill Development',
      tag: 'Trending',
      image: courseImages[2],
      color: 'from-teal-400 to-cyan-400'
    },
    
    // Language Courses
    {
      id: 10,
      title: 'English Language Course (IELTS)',
      instructor: 'Nishat Jahan',
      price: '৪,০০০',
      currency: '৳',
      status: 'Registration Open',
      dateRange: '১০ই জানুয়ারি - ৩০শে জানুয়ারি, ২০২৬',
      category: 'language',
      categoryLabel: 'Language Courses',
      tag: 'New',
      image: courseImages[3],
      color: 'from-violet-400 to-purple-400'
    },
    {
      id: 11,
      title: 'Arabic Language Course',
      instructor: 'Muhammad Abdullah',
      price: '৩,৮০০',
      currency: '৳',
      status: 'Registration Open',
      dateRange: '৫ই জানুয়ারি - ২৫শে জানুয়ারি, ২০২৬',
      category: 'language',
      categoryLabel: 'Language Courses',
      tag: 'Popular',
      image: courseImages[4],
      color: 'from-emerald-400 to-green-400'
    },
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
  const handleRipple = (e, courseId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRippleEffect({ x, y, id: courseId });
    setTimeout(() => setRippleEffect(null), 1000);
  };

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  // Get status color (light mode)
  const getStatusColor = (status) => {
    if (status === 'Registration Closed') return 'bg-gray-100 text-gray-500';
    if (status === 'Registration Open') return 'bg-green-50 text-green-600';
    return 'bg-amber-50 text-amber-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 px-4 overflow-hidden">
      {/* Animated Background Grid - Light Version */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
        
        {/* Floating Particles - Light Version */}
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
        {/* 3D Tilt Header - Light Version */}
        <div 
          className="text-center mb-12 transform-gpu transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateZ(50px)`
          }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
              MASTER
            </span>
            <br />
            <span className="text-gray-800 relative">
              YOUR SKILLS
              <div className="absolute -inset-2 bg-indigo-300/30 blur-2xl animate-pulse-slow"></div>
            </span>
          </h1>
          
          {/* Animated Tagline - Light Version */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 blur-3xl opacity-50 animate-pulse"></div>
            <p className="relative text-gray-600 text-lg max-w-2xl mx-auto font-light tracking-wide">
              Where innovation meets education
            </p>
          </div>

          {/* Floating Icons - Light Version */}
          <div className="absolute top-20 left-10 text-3xl animate-float-slow text-indigo-400">⚡</div>
          <div className="absolute bottom-20 right-10 text-3xl animate-float-slower text-purple-400">🚀</div>
        </div>

        {/* Modern Category Selector - Light Version */}
        <div className="flex justify-center items-center mb-12 relative">
          <div className="relative group">
            {/* Neon Border - Light Version */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="relative appearance-none bg-white/90 backdrop-blur-xl border-2 border-indigo-200 rounded-2xl px-6 py-3 pr-14 text-gray-700 font-medium focus:outline-none focus:border-indigo-400 transition-all duration-300 cursor-pointer w-72 shadow-xl text-base"
            >
              {courseCategories.map((cat) => (
                <option key={cat.id} value={cat.id} className="bg-white text-gray-700 py-2">
                  {cat.icon} {cat.label}
                </option>
              ))}
            </select>
            
            {/* Custom Arrow - Light Version */}
            <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <div className="relative">
                <div className="w-5 h-5 border-2 border-indigo-400 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Morphing Grid Layout - Smaller Cards */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 relative pb-16"
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className="group relative"
                onMouseMove={(e) => generateSparkles(course.id, e)}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Sparkles Effect - Light Version */}
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

                {/* Morphing Card Background - Light Version */}
                <div 
                  className={`absolute -inset-0.5 bg-gradient-to-r ${course.color || 'from-indigo-400 to-purple-400'} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500 ${
                    hoveredCard === course.id ? 'scale-105' : 'scale-100'
                  }`}
                  style={{
                    animation: hoveredCard === course.id ? 'morph 3s ease-in-out infinite' : 'none'
                  }}
                ></div>

                {/* Main Card - Smaller Size */}
                <div 
                  className="relative bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200 group-hover:border-transparent transition-all duration-500 transform-gpu shadow-md hover:shadow-xl"
                  style={{
                    transform: hoveredCard === course.id 
                      ? `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) scale(1.01) translateZ(30px)`
                      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0)',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  {/* Image Section - Smaller */}
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    
                    {/* Animated Overlay - Light Version */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-t ${course.color || 'from-indigo-400'} to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500`}
                      style={{
                        clipPath: hoveredCard === course.id 
                          ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
                          : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
                      }}
                    ></div>

                    {/* Floating Tag - Smaller */}
                    {course.tag && (
                      <div 
                        className={`absolute top-2 right-2 px-2 py-1 bg-gradient-to-r ${course.color || 'from-indigo-400 to-purple-400'} text-white text-[10px] font-bold rounded-full z-10 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md`}
                        style={{
                          animation: 'float-tag 3s ease-in-out infinite'
                        }}
                      >
                        {course.tag}
                      </div>
                    )}

                    {/* Pulsing Status Indicator - Smaller */}
                    <div className="absolute bottom-2 left-2 flex items-center gap-1">
                      <span className={`relative flex h-2 w-2`}>
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                          course.status === 'Registration Open' ? 'bg-green-400' : 
                          course.status === 'Registration Closing Soon' ? 'bg-yellow-400' : 'bg-red-400'
                        } opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${
                          course.status === 'Registration Open' ? 'bg-green-500' : 
                          course.status === 'Registration Closing Soon' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></span>
                      </span>
                    </div>
                  </div>

                  {/* Content Section - Smaller Padding */}
                  <div className="p-4 relative">
                    {/* Category Badge with Icon - Smaller */}
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-lg transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                        {courseCategories.find(c => c.id === course.category)?.icon}
                      </span>
                      <span className="text-[10px] font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                        {course.categoryLabel}
                      </span>
                    </div>

                    {/* Title - Smaller */}
                    <h3 className="text-sm font-bold text-gray-800 mb-2 relative group/title line-clamp-2">
                      <span className="relative z-10">{course.title}</span>
                      <span className="absolute inset-0 text-indigo-400 opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 transition-all duration-100 glitch-effect text-sm">
                        {course.title}
                      </span>
                      <span className="absolute inset-0 text-purple-400 opacity-0 group-hover/title:opacity-100 group-hover/title:-translate-x-0.5 transition-all duration-100 glitch-effect-delay text-sm">
                        {course.title}
                      </span>
                    </h3>

                    {/* Instructor - Smaller */}
                    <p className="text-gray-500 text-xs mb-2 flex items-center gap-1">
                      <span className="text-indigo-500 text-xs">👤</span>
                      <span className="truncate">{course.instructor}</span>
                    </p>

                    {/* Date Range - Smaller */}
                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-3 group/date">
                      <span className="text-indigo-500 transform transition-transform duration-300 group-hover/date:rotate-12 text-xs">
                        📅
                      </span>
                      <span className="group-hover/date:text-indigo-600 transition-colors text-[10px]">
                        {course.dateRange}
                      </span>
                    </div>

                    {/* Price and Status - Fixed Currency Symbol */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-base font-bold text-gray-800">
                          {course.currency} {course.price}
                        </span>
                        <span className="text-[8px] text-gray-400">BDT</span>
                      </div>
                      <span className={`text-[8px] font-semibold px-2 py-0.5 rounded-full ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                    </div>

                    {/* Modern Button - Fixed Text */}
                    <button 
                      className={`relative w-full py-2.5 text-sm font-semibold rounded-lg overflow-hidden group/btn transition-all duration-300 ${
                        course.status === 'Registration Closed' 
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r ' + course.color + ' text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                      }`}
                      disabled={course.status === 'Registration Closed'}
                      onClick={(e) => handleRipple(e, course.id)}
                    >
                      {/* Ripple Effect - Light Version */}
                      {rippleEffect?.id === course.id && (
                        <span 
                          className="absolute bg-white/50 rounded-full animate-ripple"
                          style={{
                            left: rippleEffect.x,
                            top: rippleEffect.y,
                            width: '60px',
                            height: '60px',
                            transform: 'translate(-50%, -50%)'
                          }}
                        />
                      )}

                      <span className="relative z-10 flex items-center justify-center gap-1">
                        {course.status === 'Registration Closed' ? '🔒' : '✨'}
                        {course.status === 'Registration Closed' ? 'Closed' : 'Enroll →'}
                      </span>
                      
                      {/* Animated Border - Light Version */}
                      <div className="absolute inset-0 border border-transparent group-hover/btn:border-white/30 rounded-lg transition-all duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 blur-3xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-12 border border-gray-200 shadow-xl">
                  <div className="text-6xl mb-4 animate-bounce text-indigo-400">🌈</div>
                  <p className="text-gray-700 text-xl font-light mb-1">No courses in this category</p>
                  <p className="text-gray-400 text-sm">Explore other categories</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom Animations - Keep all animations same */}
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
        
        @keyframes float-tag {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
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
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-ripple {
          animation: ripple 1s ease-out forwards;
        }
        
        .glitch-effect {
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          transform: translate(-2px, -2px);
        }
        
        .glitch-effect-delay {
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
          transform: translate(2px, 2px);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Courses;