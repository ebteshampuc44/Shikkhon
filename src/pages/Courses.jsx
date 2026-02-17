import React, { useState, useEffect } from 'react';

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
  const [isVisible, setIsVisible] = useState({});
  const [isFiltering, setIsFiltering] = useState(false);

  const courseCategories = [
    { id: 'all', label: 'All Courses' },
    { id: 'programming-6-12', label: 'Programming Class 6-12' },
    { id: 'hsc', label: 'HSC' },
    { id: 'university', label: 'University' },
    { id: 'job-preparation', label: 'Job Preparation' },
    { id: 'skill-development', label: 'Skill Development' },
    { id: 'language', label: 'Language Courses' },
  ];

  const courses = [
    // Programming Class 6-12
    {
      id: 1,
      title: 'Complete Web Development Course With Programming Hero',
      instructor: 'Jhankar Mahbub',
      price: '৳ 5500',
      status: 'Registration Closed',
      dateRange: '9th Dec - 24th Dec, 2025',
      category: 'programming-6-12',
      categoryLabel: 'Programming Class 6-12',
      tag: 'Bestseller',
      image: courseImages[0]
    },
    {
      id: 2,
      title: 'Python Programming for Beginners',
      instructor: 'Shakib Ahmed',
      price: '৳ 3500',
      status: 'Registration Open',
      dateRange: '15th Dec - 30th Dec, 2025',
      category: 'programming-6-12',
      categoryLabel: 'Programming Class 6-12',
      tag: 'Popular',
      image: courseImages[1]
    },
    
    // HSC Courses
    {
      id: 3,
      title: 'HSC Physics 1st & 2nd Paper (Complete Course)',
      instructor: 'Prof. Dr. Abdur Rahman',
      price: '৳ 4500',
      status: 'Registration Open',
      dateRange: '5th Jan - 20th Jan, 2026',
      category: 'hsc',
      categoryLabel: 'HSC',
      tag: 'Featured',
      image: courseImages[2]
    },
    {
      id: 4,
      title: 'HSC Chemistry (Organic & Inorganic)',
      instructor: 'Dr. Farzana Akter',
      price: '৳ 4200',
      status: 'Registration Open',
      dateRange: '10th Jan - 30th Jan, 2026',
      category: 'hsc',
      categoryLabel: 'HSC',
      tag: 'Bestseller',
      image: courseImages[3]
    },
    {
      id: 5,
      title: 'HSC Mathematics (Higher Math)',
      instructor: 'Shahidul Islam',
      price: '৳ 4800',
      status: 'Registration Closing Soon',
      dateRange: '12th Dec - 28th Dec, 2025',
      category: 'hsc',
      categoryLabel: 'HSC',
      tag: 'Hot',
      image: courseImages[4]
    },
    
    // University Courses
    {
      id: 6,
      title: 'University Admission Prep (Science)',
      instructor: 'Rafiqul Islam',
      price: '৳ 6000',
      status: 'Registration Open',
      dateRange: '1st Dec - 15th Dec, 2025',
      category: 'university',
      categoryLabel: 'University',
      tag: 'New',
      image: courseImages[5]
    },
    
    // Job Preparation
    {
      id: 7,
      title: 'BCS Preliminary Course',
      instructor: 'Tanvir Hasan',
      price: '৳ 5500',
      status: 'Registration Open',
      dateRange: '1st Jan - 20th Jan, 2026',
      category: 'job-preparation',
      categoryLabel: 'Job Preparation',
      tag: 'Popular',
      image: courseImages[0]
    },
    {
      id: 8,
      title: 'Bank Job Preparation Course',
      instructor: 'Mahmudul Hasan',
      price: '৳ 5000',
      status: 'Registration Open',
      dateRange: '5th Jan - 25th Jan, 2026',
      category: 'job-preparation',
      categoryLabel: 'Job Preparation',
      tag: 'Trending',
      image: courseImages[1]
    },
    
    // Skill Development
    {
      id: 9,
      title: 'Digital Marketing Masterclass',
      instructor: 'Ahmed Rasel',
      price: '৳ 4500',
      status: 'Registration Closing Soon',
      dateRange: '15th Dec - 30th Dec, 2025',
      category: 'skill-development',
      categoryLabel: 'Skill Development',
      tag: 'Trending',
      image: courseImages[2]
    },
    
    // Language Courses
    {
      id: 10,
      title: 'English Language Course (IELTS)',
      instructor: 'Nishat Jahan',
      price: '৳ 4000',
      status: 'Registration Open',
      dateRange: '10th Jan - 30th Jan, 2026',
      category: 'language',
      categoryLabel: 'Language Courses',
      tag: 'New',
      image: courseImages[3]
    },
    {
      id: 11,
      title: 'Arabic Language Course',
      instructor: 'Muhammad Abdullah',
      price: '৳ 3800',
      status: 'Registration Open',
      dateRange: '5th Jan - 25th Jan, 2026',
      category: 'language',
      categoryLabel: 'Language Courses',
      tag: 'Popular',
      image: courseImages[4]
    },
  ];

  // Filter courses based on selected category
  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  // Handle category change with animation
  const handleCategoryChange = (e) => {
    setIsFiltering(true);
    setSelectedCategory(e.target.value);
    
    // Reset visibility states
    setIsVisible({});
    
    // Trigger animation after category change
    setTimeout(() => {
      setIsFiltering(false);
    }, 300);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-id]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredCourses]);

  // Helper function to get status color
  const getStatusColor = (status) => {
    if (status === 'Registration Closed') return 'bg-red-100 text-red-700';
    if (status === 'Registration Open') return 'bg-green-100 text-green-700';
    return 'bg-yellow-100 text-yellow-700'; // Registration Closing Soon
  };

  // Get tag color
  const getTagColor = (tag) => {
    const colors = {
      'Bestseller': 'from-yellow-500 to-orange-500',
      'Popular': 'from-blue-500 to-cyan-500',
      'Featured': 'from-purple-500 to-pink-500',
      'Hot': 'from-red-500 to-pink-500',
      'New': 'from-green-500 to-emerald-500',
      'Trending': 'from-indigo-500 to-purple-500'
    };
    return colors[tag] || 'from-pink-500 to-rose-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Animation */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Learn from industry experts with practical, project-based courses designed for real-world success
          </p>
          
          {/* Decorative Line */}
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-scale-x"></div>
          </div>
        </div>

        {/* Category Selector with Animation */}
        <div className="flex justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative group">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="appearance-none bg-white border-2 border-indigo-200 rounded-xl px-6 py-3 pr-12 text-gray-700 font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 cursor-pointer w-64 shadow-md hover:shadow-lg hover:border-indigo-300"
            >
              {courseCategories.map((cat) => (
                <option key={cat.id} value={cat.id} className="py-2">
                  {cat.label}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover:translate-y-0.5">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Courses Grid with Animations */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isFiltering ? 'opacity-50' : 'opacity-100'}`}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div 
                key={course.id}
                data-id={course.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-indigo-100 transform hover:-translate-y-2 ${
                  isVisible[course.id] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Course Image with Hover Effects */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Animated Tag */}
                  {course.tag && (
                    <span className={`absolute top-3 right-3 px-3 py-1 bg-gradient-to-r ${getTagColor(course.tag)} text-white text-xs font-bold rounded-full z-10 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-2`}>
                      {course.tag}
                    </span>
                  )}
                  
                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Course Content with Staggered Animation */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-semibold rounded-full text-xs transform transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-100">
                      {course.categoryLabel}
                    </span>
                    
                    <span className={`text-lg font-bold transition-all duration-300 group-hover:scale-110 ${
                      course.price === 'Free' ? 'text-green-600' : 'text-gray-900'
                    }`}>
                      {course.price}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    By {course.instructor}
                  </p>
                  
                  {/* Date Range with Icon Animation */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 group-hover:text-gray-700 transition-colors">
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{course.dateRange}</span>
                  </div>
                  
                  {/* Status Badge with Pulse Animation */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 transition-all duration-300 hover:scale-105 ${getStatusColor(course.status)} ${
                    course.status === 'Registration Closing Soon' ? 'animate-pulse' : ''
                  }`}>
                    {course.status}
                  </div>
                  
                  {/* Action Button with Ripple Effect */}
                  <button 
                    className={`relative w-full py-3 font-semibold rounded-xl transition-all duration-300 overflow-hidden group/btn ${
                      course.status === 'Registration Closed' 
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl hover:-translate-y-0.5'
                    }`}
                    disabled={course.status === 'Registration Closed'}
                  >
                    <span className="relative z-10">
                      {course.status === 'Registration Closed' ? 'Registration Closed' : 'Enroll Now'}
                    </span>
                    {course.status !== 'Registration Closed' && (
                      <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></span>
                    )}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16 animate-fade-in">
              <div className="bg-white rounded-2xl p-12 inline-block shadow-xl transform hover:scale-105 transition-transform duration-300">
                <svg className="w-20 h-20 text-gray-300 mx-auto mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-gray-600 text-xl font-medium mb-2">No courses found in this category</p>
                <p className="text-gray-400">Please select another category to explore more courses</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add custom keyframe animations */}
      <style jsx>{`
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-scale-x {
          animation: scaleX 0.6s ease-out forwards;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};

export default Courses;