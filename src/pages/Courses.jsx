import React from 'react';

const Courses = () => {
  const courses = [
    { 
      id: 1, 
      title: 'Digital Marketing Masterclass', 
      category: 'Business', 
      instructor: 'Ahmed Rasel', 
      price: '৳2,500',
      rating: 4.8,
      students: 1240,
      duration: '12h 30m',
      tag: 'Trending'
    },
    { 
      id: 2, 
      title: 'Modern Agriculture Management', 
      category: 'Agriculture', 
      instructor: 'Dr. Farhana Islam', 
      price: 'Free',
      rating: 4.6,
      students: 890,
      duration: '8h 15m',
      tag: 'Popular'
    },
    { 
      id: 3, 
      title: 'Full Stack Web Development', 
      category: 'Technology', 
      instructor: 'Rafi Ahmed', 
      price: '৳3,000',
      rating: 4.9,
      students: 2560,
      duration: '42h 20m',
      tag: 'Bestseller'
    },
    { 
      id: 4, 
      title: 'Professional Spoken English', 
      category: 'Skill Development', 
      instructor: 'Nishat Jahan', 
      price: '৳1,500',
      rating: 4.7,
      students: 1870,
      duration: '16h 45m',
      tag: 'Featured'
    },
    { 
      id: 5, 
      title: 'UI/UX & Graphic Design', 
      category: 'Technology', 
      instructor: 'Tanvir Hasan', 
      price: '৳2,000',
      rating: 4.5,
      students: 1120,
      duration: '20h 10m',
      tag: 'New'
    },
    { 
      id: 6, 
      title: 'Job Interview & Career Prep', 
      category: 'Job Preparation', 
      instructor: 'Anisur Rahman', 
      price: '৳1,200',
      rating: 4.8,
      students: 2310,
      duration: '10h 30m',
      tag: 'Hot'
    },
  ];

  const categories = ['All', 'Technology', 'Business', 'Agriculture', 'Skill Development', 'Job Preparation'];
  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-indigo-600">Courses</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Learn from industry experts with practical, project-based courses designed for real-world success
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all ${idx === 0 ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <select className="bg-white px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                {levels.map((level, idx) => (
                  <option key={idx}>{level}</option>
                ))}
              </select>
              
              <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                </svg>
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map(course => (
            <div 
              key={course.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-indigo-100"
            >
              {/* Course Header */}
              <div className="relative">
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 font-semibold rounded-full text-sm">
                      {course.category}
                    </span>
                    
                    <span className={`text-lg font-bold ${course.price === 'Free' ? 'text-green-600' : 'text-gray-900'}`}>
                      {course.price}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6">By {course.instructor}</p>
                  
                  {/* Course Stats */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-amber-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span className="font-semibold ml-1">{course.rating}</span>
                      </div>
                      <span className="text-gray-500">({course.students.toLocaleString()})</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {course.duration}
                    </div>
                    
                    {course.tag && (
                      <span className="ml-auto px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold rounded-full">
                        {course.tag}
                      </span>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <button className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group-hover:from-indigo-700 group-hover:to-purple-700">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-10 border border-indigo-100">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                Contact our learning advisors for personalized course recommendations
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
                Book Consultation
              </button>
              <button className="px-8 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border border-gray-300 hover:bg-gray-50 transition shadow-sm">
                View Learning Paths
              </button>
            </div>
          </div>
          
          <p className="text-gray-500 mt-8 text-sm">
            <span className="font-semibold text-gray-700">4,000+</span> students enrolled this month
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;