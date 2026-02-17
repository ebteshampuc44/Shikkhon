import React, { useState, useEffect, useRef } from 'react';

const Instructors = () => {
  const [showForm, setShowForm] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [sparkles, setSparkles] = useState([]);
  const [rippleEffect, setRippleEffect] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    expertise: '',
    experience: '',
    linkedin: '',
    bio: '',
    courseIdea: ''
  });

  const instructors = [
    { 
      id: 1, 
      name: 'Dr. Sumaiya Khan', 
      expertise: 'Agriculture Specialist', 
      students: 5000, 
      courses: 12,
      rating: 4.9,
      experience: '8 Years',
      avatarColor: 'from-green-400 to-emerald-500',
      achievements: 'PhD in Agricultural Science',
      studentsCount: '5,000+'
    },
    { 
      id: 2, 
      name: 'Rafi Ahmed', 
      expertise: 'Software Engineer', 
      students: 12000, 
      courses: 25,
      rating: 4.8,
      experience: '10 Years',
      avatarColor: 'from-blue-400 to-indigo-500',
      achievements: 'Ex-Google, Tech Lead',
      studentsCount: '12,000+'
    },
    { 
      id: 3, 
      name: 'Nishat Jahan', 
      expertise: 'Business Consultant', 
      students: 7500, 
      courses: 18,
      rating: 4.7,
      experience: '7 Years',
      avatarColor: 'from-purple-400 to-pink-500',
      achievements: 'MBA, IBA',
      studentsCount: '7,500+'
    },
    { 
      id: 4, 
      name: 'Anisur Rahman', 
      expertise: 'Educational Technology', 
      students: 9200, 
      courses: 21,
      rating: 4.9,
      experience: '9 Years',
      avatarColor: 'from-amber-400 to-orange-500',
      achievements: 'EdTech Innovator Award',
      studentsCount: '9,200+'
    },
    { 
      id: 5, 
      name: 'Ahmed Rasel', 
      expertise: 'Digital Marketing', 
      students: 8500, 
      courses: 15,
      rating: 4.6,
      experience: '6 Years',
      avatarColor: 'from-red-400 to-rose-500',
      achievements: 'Google Certified',
      studentsCount: '8,500+'
    },
    { 
      id: 6, 
      name: 'Dr. Farhana Islam', 
      expertise: 'Agriculture Expert', 
      students: 3200, 
      courses: 8,
      rating: 4.8,
      experience: '5 Years',
      avatarColor: 'from-teal-400 to-cyan-500',
      achievements: 'Research Excellence Award',
      studentsCount: '3,200+'
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
  const handleRipple = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRippleEffect({ x, y, id });
    setTimeout(() => setRippleEffect(null), 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      expertise: '',
      experience: '',
      linkedin: '',
      bio: '',
      courseIdea: ''
    });
    setShowForm(false);
  };

  // SVG Icons Components
  const UserIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  const StarIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const UsersIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  const BookIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );

  const AwardIcon = () => (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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
              MEET OUR
            </span>
            <br />
            <span className="text-gray-800 relative">
              EXPERT INSTRUCTORS
              <div className="absolute -inset-2 bg-indigo-300/30 blur-2xl animate-pulse-slow"></div>
            </span>
          </h1>
          
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 blur-3xl opacity-50 animate-pulse"></div>
            <p className="relative text-gray-600 text-lg max-w-2xl mx-auto font-light tracking-wide">
              Learn directly from industry leaders and experienced professionals who are passionate about teaching
            </p>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-20 left-10 text-indigo-400 animate-float-slow">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 text-purple-400 animate-float-slower">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>

        {/* Toggle Button with Animation */}
        <div className="flex justify-center items-center mb-12 relative">
          <button 
            onClick={() => setShowForm(!showForm)}
            className="relative group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
          >
            <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative z-10 flex items-center gap-2">
              {showForm ? (
                <>
                  <UsersIcon />
                  View All Instructors
                </>
              ) : (
                <>
                  <AwardIcon />
                  Become an Instructor
                </>
              )}
              <ArrowRightIcon />
            </span>
          </button>
        </div>

        {!showForm ? (
          <>
            {/* Instructors Grid with Animations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 relative pb-16">
              {instructors.map((instructor, index) => (
                <div
                  key={instructor.id}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseMove={(e) => generateSparkles(instructor.id, e)}
                  onMouseEnter={() => setHoveredCard(instructor.id)}
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
                          instructor.avatarColor?.split(' ')[1] || '#8b5cf6'
                        }, transparent)`,
                        borderRadius: '50%',
                        animation: `sparkle 1s ease-out forwards`,
                        animationDelay: `${sparkle.delay}s`
                      }}
                    />
                  ))}

                  {/* Morphing Card Background */}
                  <div 
                    className={`absolute -inset-0.5 bg-gradient-to-r ${instructor.avatarColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 ${
                      hoveredCard === instructor.id ? 'scale-110' : 'scale-100'
                    }`}
                    style={{
                      animation: hoveredCard === instructor.id ? 'morph 3s ease-in-out infinite' : 'none'
                    }}
                  ></div>

                  {/* Main Card */}
                  <div 
                    className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 group-hover:border-transparent transition-all duration-500 transform-gpu shadow-lg hover:shadow-2xl"
                    style={{
                      transform: hoveredCard === instructor.id 
                        ? `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) scale(1.02) translateZ(30px)`
                        : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0)',
                      transition: 'transform 0.3s ease-out'
                    }}
                  >
                    <div className="p-8">
                      {/* Avatar with Animation */}
                      <div className="relative mb-6">
                        <div className={`w-28 h-28 mx-auto rounded-full bg-gradient-to-r ${instructor.avatarColor} flex items-center justify-center text-white text-4xl font-bold shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                          {instructor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        
                        {/* Achievement Badge */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 shadow-md border border-indigo-100 animate-pulse-slow flex items-center gap-1">
                          <AwardIcon />
                          {instructor.achievements}
                        </div>
                        
                        {/* Rating Badge */}
                        <div className="absolute top-0 right-4 bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-md transform transition-all duration-300 group-hover:scale-110">
                          <StarIcon />
                          {instructor.rating}
                        </div>
                      </div>
                      
                      {/* Instructor Info */}
                      <div className="text-center mb-6">
                        <h3 className="font-bold text-2xl text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors relative inline-block">
                          {instructor.name}
                          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </h3>
                        <p className={`bg-gradient-to-r ${instructor.avatarColor} bg-clip-text text-transparent font-semibold text-lg mb-1`}>
                          {instructor.expertise}
                        </p>
                        <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
                          <ClockIcon />
                          Experience: {instructor.experience}
                        </p>
                      </div>
                      
                      {/* Stats with Animation */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 text-center group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                          <div className="text-2xl font-bold text-indigo-600 mb-1 flex items-center justify-center gap-1">
                            <UsersIcon />
                            {instructor.studentsCount}
                          </div>
                          <div className="text-gray-600 text-sm font-medium">Students</div>
                          <div className="w-full h-1 bg-indigo-200 rounded-full mt-2 overflow-hidden">
                            <div className="h-full bg-indigo-500 rounded-full animate-progress" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                          <div className="text-2xl font-bold text-purple-600 mb-1 flex items-center justify-center gap-1">
                            <BookIcon />
                            {instructor.courses}
                          </div>
                          <div className="text-gray-600 text-sm font-medium">Courses</div>
                          <div className="w-full h-1 bg-purple-200 rounded-full mt-2 overflow-hidden">
                            <div className="h-full bg-purple-500 rounded-full animate-progress" style={{ width: '60%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Button with Ripple */}
                      <button 
                        className="relative w-full py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden group/btn transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                        onClick={(e) => handleRipple(e, instructor.id)}
                      >
                        {rippleEffect?.id === instructor.id && (
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
                          View Profile & Courses
                          <ArrowRightIcon />
                        </span>
                        <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section with Animations */}
            <div className="mt-20 mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
                Our Impact in Numbers
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full animate-scale-x"></div>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { number: '50+', label: 'Expert Instructors', icon: <UsersIcon />, color: 'from-indigo-500 to-purple-600' },
                  { number: '300+', label: 'Courses Published', icon: <BookIcon />, color: 'from-blue-500 to-cyan-600' },
                  { number: '50K+', label: 'Students Enrolled', icon: <UsersIcon />, color: 'from-green-500 to-emerald-600' },
                  { number: '4.8', label: 'Average Rating', icon: <StarIcon />, color: 'from-amber-500 to-orange-600' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="group relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className="relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-indigo-600 mb-3 flex justify-center">
                        <div className="w-10 h-10">{stat.icon}</div>
                      </div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Become Instructor Form with Animations */
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              
              {/* Form Header with Animation */}
              <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-10 text-center overflow-hidden">
                <div className="absolute inset-0 bg-white/10 transform -skew-y-12"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-down flex items-center justify-center gap-2">
                    <AwardIcon />
                    Join Our Instructor Team
                  </h2>
                  <p className="text-indigo-100 text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Share your knowledge and inspire thousands of learners
                  </p>
                </div>
              </div>
              
              {/* Form Body */}
              <div className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Enter your full name', icon: <UserIcon /> },
                      { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'you@example.com', icon: <MailIcon /> },
                      { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+880 1XXX-XXXXXX', icon: <PhoneIcon /> },
                      { label: 'Area of Expertise *', name: 'expertise', type: 'text', placeholder: 'e.g., Web Development', icon: <AwardIcon /> },
                    ].map((field, index) => (
                      <div key={field.name} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <label className="block text-gray-700 font-medium mb-2 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                          <span className="text-indigo-500">{field.icon}</span>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          required={field.label.includes('*')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-300"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                    
                    {/* Experience Select */}
                    <div className="group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                      <label className="block text-gray-700 font-medium mb-2 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                        <ClockIcon />
                        Years of Experience *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-300"
                      >
                        <option value="">Select experience</option>
                        <option value="1-3">1-3 Years</option>
                        <option value="3-5">3-5 Years</option>
                        <option value="5-10">5-10 Years</option>
                        <option value="10+">10+ Years</option>
                      </select>
                    </div>
                    
                    {/* LinkedIn */}
                    <div className="group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                      <label className="block text-gray-700 font-medium mb-2 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                        <LinkedinIcon />
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-300"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <div className="mb-8 group animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <label className="block text-gray-700 font-medium mb-2 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                      <UserIcon />
                      Professional Bio *
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-300"
                      placeholder="Tell us about your professional background and teaching experience..."
                    ></textarea>
                  </div>
                  
                  {/* Course Idea */}
                  <div className="mb-10 group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <label className="block text-gray-700 font-medium mb-2 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                      <BookIcon />
                      Course Idea / Topic *
                    </label>
                    <textarea
                      name="courseIdea"
                      value={formData.courseIdea}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-300"
                      placeholder="Describe the course you want to teach..."
                    ></textarea>
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <button
                      type="submit"
                      className="relative flex-1 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden group/btn hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      onClick={(e) => handleRipple(e, 'submit')}
                    >
                      {rippleEffect?.id === 'submit' && (
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
                        Submit Application
                        <CheckIcon />
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-300 hover:bg-gray-50 hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Form Footer */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 text-center border-t border-gray-200">
                <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
                  <span className="animate-pulse">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Our team will review your application and contact you within 3-5 business days.
                  <span className="animate-pulse">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
            
            {/* Benefits Section with Animation */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Earn Revenue', desc: 'Competitive revenue sharing model', color: 'from-green-400 to-emerald-500' },
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, title: 'Reach Thousands', desc: 'Access to 50,000+ active learners', color: 'from-blue-400 to-indigo-500' },
                { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Full Support', desc: 'Production and marketing assistance', color: 'from-purple-400 to-pink-500' },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {benefit.icon}
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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
        
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 75%;
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
        
        .animate-progress {
          animation: progress 1s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default Instructors;