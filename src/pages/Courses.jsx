import React, { useState } from 'react';

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

  // Helper function to get status color
  const getStatusColor = (status) => {
    if (status === 'Registration Closed') return 'bg-red-100 text-red-700';
    if (status === 'Registration Open') return 'bg-green-100 text-green-700';
    return 'bg-yellow-100 text-yellow-700'; // Registration Closing Soon
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-indigo-600">Courses</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Learn from industry experts with practical, project-based courses designed for real-world success
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center items-center mb-10">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-white border-2 border-indigo-200 rounded-xl px-6 py-3 pr-12 text-gray-700 font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all cursor-pointer w-64 shadow-md"
            >
              {courseCategories.map((cat) => (
                <option key={cat.id} value={cat.id} className="py-2">
                  {cat.label}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <div 
                key={course.id} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-indigo-100"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {course.tag && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold rounded-full z-10">
                      {course.tag}
                    </span>
                  )}
                </div>
                
                {/* Course Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-semibold rounded-full text-xs">
                      {course.categoryLabel}
                    </span>
                    
                    <span className={`text-lg font-bold ${course.price === 'Free' ? 'text-green-600' : 'text-gray-900'}`}>
                      {course.price}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3">By {course.instructor}</p>
                  
                  {/* Date Range */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{course.dateRange}</span>
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${getStatusColor(course.status)}`}>
                    {course.status}
                  </div>
                  
                  {/* Action Button */}
                  <button className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                    course.status === 'Registration Closed' 
                      ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl hover:-translate-y-0.5'
                  }`}
                  disabled={course.status === 'Registration Closed'}
                  >
                    {course.status === 'Registration Closed' ? 'Registration Closed' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="bg-gray-50 rounded-2xl p-12 inline-block">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-gray-500 text-lg font-medium">No courses found in this category</p>
                <p className="text-gray-400 text-sm mt-2">Please select another category</p>
              </div>
            </div>
          )}
        </div>

        {/* Course Count Footer */}
        {filteredCourses.length > 0 && (
          <div className="text-center mt-12 text-gray-500">
            <p>Showing {filteredCourses.length} courses</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;