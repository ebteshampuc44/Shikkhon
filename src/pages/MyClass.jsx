import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyClass = () => {
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
      platform: 'YouTube'
    }
  ]);

  if (purchasedCourses.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Empty State Illustration */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
              <svg 
                className="w-24 h-24 text-indigo-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            No Courses Yet!
          </h1>
          
          <p className="text-xl text-gray-600 mb-4">
            You haven't purchased any courses yet.
          </p>
          
          <p className="text-gray-500 mb-10 max-w-lg mx-auto">
            Start your learning journey today by exploring our wide range of courses. 
            Your purchased courses will appear here once you enroll.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-indigo-600 mb-2">150+</div>
              <div className="text-gray-600">Expert-Led Courses</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-indigo-600 mb-2">15k+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">Lifetime Access</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Browse Courses
            </Link>
            <Link
              to="/free-learning"
              className="bg-white text-gray-700 font-semibold py-3 px-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Free Learning
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
                  className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border border-gray-200"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* হেডার */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">My Classes</h1>
            <p className="text-gray-600">Continue learning from where you left off</p>
          </div>
          <Link
            to="/courses"
            className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg hover:shadow-md transition-all duration-300 border border-indigo-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Browse More Courses
          </Link>
        </div>

        {/* কোর্স গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {purchasedCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* থাম্বনেইল */}
              <div className="relative h-48 overflow-hidden group">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* প্ল্যাটফর্ম ব্যাজ */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium text-white ${
                    course.platform === 'YouTube' ? 'bg-red-600' : 'bg-indigo-600'
                  }`}>
                    {course.platform}
                  </span>
                </div>

                {/* প্রোগ্রেস ব্যাজ */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex justify-between items-center text-white text-sm mb-1">
                    <span>{course.progress}% Complete</span>
                    <span>{course.completedLessons}/{course.lessons} lessons</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-indigo-400 to-purple-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* কোর্স তথ্য */}
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-900 mb-2 hover:text-indigo-600 transition-colors cursor-pointer">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {course.instructor}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>{course.lessons} Lessons</span>
                  </div>
                </div>

                {/* লাস্ট ওয়াচড */}
                <div className="flex items-center justify-between text-sm mb-4 bg-gray-50 p-2 rounded-lg">
                  <span className="text-gray-500 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Last watched: {course.lastWatched}
                  </span>
                  <span className="text-indigo-600 font-medium">{course.completedLessons}/{course.lessons}</span>
                </div>

                {/* কন্টিনিউ বাটন - লিংকে পরিবর্তন করা হয়েছে */}
                <Link
                  to={`/course-playlist/${course.id}`}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Continue Learning
                </Link>

                {/* রিমুভ বাটন - ডেমোর জন্য */}
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to remove this course?')) {
                      setPurchasedCourses([]);
                    }
                  }}
                  className="w-full mt-2 text-red-600 text-sm font-medium hover:text-red-700 transition-colors flex items-center justify-center gap-1 py-2 hover:bg-red-50 rounded-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Remove Course
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* রিকমেন্ডেড সেকশন */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Advanced Farm Management</h3>
                    <p className="text-sm text-gray-600">By Dr. Sumaiya Khan</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClass;