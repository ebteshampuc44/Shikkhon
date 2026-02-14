import React from 'react';
import { Link } from 'react-router-dom';

const MyClass = () => {
  // এই স্টেটটা পরে রিডিউসার বা কনটেক্সট থেকে নেওয়া হবে
  const purchasedCourses = []; // এখন খালি, পরে ইউজারের কেনা কোর্স এখানে আসবে

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
          
       
          </div>

        
        </div>
      </div>
    );
  }

  // যখন কোর্স কেনা থাকবে তখন এই অংশ দেখাবে
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Classes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {purchasedCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* কোর্স কার্ডের ডিজাইন */}
              <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.instructor}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Progress: {course.progress}%</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyClass;