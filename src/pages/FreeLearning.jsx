import React from 'react';
import { Link } from 'react-router-dom';

const FreeLearning = () => {
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
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Digital Marketing Fundamentals',
      instructor: 'Sarah Miller',
      duration: '3 hours',
      lessons: 10,
      students: '8,567',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w-400&h=250&fit=crop',
      category: 'Business & Entrepreneurship'
    },
    {
      id: 3,
      title: 'Graphic Design for Beginners',
      instructor: 'Michael Chen',
      duration: '5 hours',
      lessons: 15,
      students: '15,892',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&h=250&fit=crop',
      category: 'Skill Development'
    },
    {
      id: 4,
      title: 'Python Programming',
      instructor: 'Dr. Robert Davis',
      duration: '6 hours',
      lessons: 18,
      students: '25,743',
      image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec7?w=400&h=250&fit=crop',
      category: 'Technology'
    },
    {
      id: 5,
      title: 'Financial Literacy',
      instructor: 'Emma Wilson',
      duration: '2.5 hours',
      lessons: 8,
      students: '7,431',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      category: 'Business & Entrepreneurship'
    },
    {
      id: 6,
      title: 'Mobile Photography',
      instructor: 'James Taylor',
      duration: '3 hours',
      lessons: 11,
      students: '12,586',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=250&fit=crop',
      category: 'Skill Development'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free <span className="text-indigo-600">Learning</span> Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access high-quality educational content absolutely free. Start learning today without any cost!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
            <div className="text-gray-700 font-medium">Free Courses</div>
            <div className="text-gray-500 text-sm mt-1">Updated weekly</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">50K+</div>
            <div className="text-gray-700 font-medium">Active Learners</div>
            <div className="text-gray-500 text-sm mt-1">Community growing</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">100+</div>
            <div className="text-gray-700 font-medium">Expert Instructors</div>
            <div className="text-gray-500 text-sm mt-1">Sharing knowledge</div>
          </div>
        </div>

        {/* Free Courses Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Free Courses</h2>
            <div className="text-indigo-600 font-medium">All Free ({freeCourses.length})</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeCourses.map((course) => (
              <div 
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      FREE
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-sm text-gray-600">By {course.instructor}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {course.lessons} lessons
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium text-gray-700">{course.students}</span> students
                    </div>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Start Learning Today!</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of learners who are enhancing their skills with our free courses. No payment required, ever.
          </p>
          <Link 
            to="/register"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Create Free Account
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeLearning;