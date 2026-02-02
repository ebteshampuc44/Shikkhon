import React from 'react';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Agriculture', courseCount: 156, color: 'bg-green-500', icon: '🌱' },
    { id: 2, name: 'Technology', courseCount: 342, color: 'bg-blue-500', icon: '💻' },
    { id: 3, name: 'Academic Education', courseCount: 289, color: 'bg-purple-500', icon: '🎓' },
    { id: 4, name: 'Skill Development', courseCount: 187, color: 'bg-yellow-500', icon: '⚡' },
    { id: 5, name: 'Business & Entrepreneurship', courseCount: 124, color: 'bg-red-500', icon: '📈' },
    { id: 6, name: 'Job Preparation', courseCount: 231, color: 'bg-indigo-500', icon: '🎯' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Explore Our <span className="text-indigo-600">Course</span> Categories
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover expertly curated learning paths designed to help you achieve your professional and personal goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(cat => (
            <div 
              key={cat.id} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`${cat.color} w-16 h-16 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg`}>
                    {cat.icon}
                  </div>
                  <span className="bg-gray-100 text-gray-800 font-semibold px-4 py-2 rounded-full text-sm">
                    {cat.courseCount} Courses
                  </span>
                </div>
                
                <h3 className="font-bold text-2xl text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Master essential skills with our comprehensive collection of courses tailored for modern professionals.
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-indigo-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all hover:text-indigo-800">
                    Explore Courses
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                  
                  <div className="text-sm text-gray-500">
                    Updated weekly
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-10 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Categories
          </button>
          
          <p className="text-gray-500 mt-6 text-sm">
            Join <span className="font-semibold text-gray-700">15,000+</span> professionals advancing their careers with us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;