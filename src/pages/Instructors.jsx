import React, { useState } from 'react';

const Instructors = () => {
  const instructors = [
    { 
      id: 1, 
      name: 'Dr. Sumaiya Khan', 
      expertise: 'Agriculture Specialist', 
      students: 5000, 
      courses: 12,
      rating: 4.9,
      experience: '8 Years',
      avatarColor: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    { 
      id: 2, 
      name: 'Rafi Ahmed', 
      expertise: 'Software Engineer', 
      students: 12000, 
      courses: 25,
      rating: 4.8,
      experience: '10 Years',
      avatarColor: 'bg-gradient-to-br from-blue-500 to-indigo-600'
    },
    { 
      id: 3, 
      name: 'Nishat Jahan', 
      expertise: 'Business Consultant', 
      students: 7500, 
      courses: 18,
      rating: 4.7,
      experience: '7 Years',
      avatarColor: 'bg-gradient-to-br from-purple-500 to-pink-600'
    },
    { 
      id: 4, 
      name: 'Anisur Rahman', 
      expertise: 'Educational Technology', 
      students: 9200, 
      courses: 21,
      rating: 4.9,
      experience: '9 Years',
      avatarColor: 'bg-gradient-to-br from-amber-500 to-orange-600'
    },
    { 
      id: 5, 
      name: 'Ahmed Rasel', 
      expertise: 'Digital Marketing', 
      students: 8500, 
      courses: 15,
      rating: 4.6,
      experience: '6 Years',
      avatarColor: 'bg-gradient-to-br from-red-500 to-rose-600'
    },
    { 
      id: 6, 
      name: 'Dr. Farhana Islam', 
      expertise: 'Agriculture Expert', 
      students: 3200, 
      courses: 8,
      rating: 4.8,
      experience: '5 Years',
      avatarColor: 'bg-gradient-to-br from-teal-500 to-cyan-600'
    },
  ];

  const [showForm, setShowForm] = useState(false);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-indigo-600">Expert</span> Instructors
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Learn directly from industry leaders and experienced professionals who are passionate about teaching
          </p>
          
          <button 
            onClick={() => setShowForm(!showForm)}
            className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {showForm ? 'View All Instructors' : 'Become an Instructor'}
          </button>
        </div>

        {!showForm ? (
          <>
            {/* Instructors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {instructors.map(instructor => (
                <div 
                  key={instructor.id} 
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  <div className="p-8">
                    {/* Avatar */}
                    <div className="relative">
                      <div className={`${instructor.avatarColor} w-28 h-28 mx-auto rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-xl`}>
                        {instructor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        {instructor.rating}
                      </div>
                    </div>
                    
                    {/* Instructor Info */}
                    <div className="text-center mb-6">
                      <h3 className="font-bold text-2xl text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {instructor.name}
                      </h3>
                      <p className="text-indigo-600 font-semibold text-lg mb-1">{instructor.expertise}</p>
                      <p className="text-gray-500 text-sm">Experience: {instructor.experience}</p>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gray-50 rounded-xl p-4 text-center group-hover:bg-indigo-50 transition-colors">
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {instructor.students.toLocaleString()}+
                        </div>
                        <div className="text-gray-600 text-sm font-medium">Students</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center group-hover:bg-indigo-50 transition-colors">
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {instructor.courses}
                        </div>
                        <div className="text-gray-600 text-sm font-medium">Courses</div>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <button className="w-full py-3.5 bg-white text-indigo-600 font-semibold rounded-xl border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                      View Profile & Courses
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Become Instructor Form */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Join Our Instructor Team</h2>
                <p className="text-indigo-100 text-lg">
                  Share your knowledge and inspire thousands of learners
                </p>
              </div>
              
              {/* Form Body */}
              <div className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="+880 1XXX-XXXXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Area of Expertise *</label>
                      <input
                        type="text"
                        name="expertise"
                        value={formData.expertise}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="e.g., Web Development, Digital Marketing"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Years of Experience *</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="">Select experience</option>
                        <option value="1-3">1-3 Years</option>
                        <option value="3-5">3-5 Years</option>
                        <option value="5-10">5-10 Years</option>
                        <option value="10+">10+ Years</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">LinkedIn Profile</label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-2">Professional Bio *</label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Tell us about your professional background and teaching experience..."
                    ></textarea>
                  </div>
                  
                  <div className="mb-10">
                    <label className="block text-gray-700 font-medium mb-2">Course Idea / Topic *</label>
                    <textarea
                      name="courseIdea"
                      value={formData.courseIdea}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Describe the course you want to teach..."
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      Submit Application
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-300 hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Form Footer */}
              <div className="bg-gray-50 p-6 text-center border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  Our team will review your application and contact you within 3-5 business days.
                </p>
              </div>
            </div>
            
            {/* Benefits Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Earn Revenue</h4>
                <p className="text-gray-600">Competitive revenue sharing model</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Reach Thousands</h4>
                <p className="text-gray-600">Access to 50,000+ active learners</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Full Support</h4>
                <p className="text-gray-600">Production and marketing assistance</p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        {!showForm && (
          <div className="mt-20 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-indigo-100">Expert Instructors</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-white">
                <div className="text-4xl font-bold mb-2">300+</div>
                <div className="text-blue-100">Courses Published</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-green-100">Students Enrolled</div>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white">
                <div className="text-4xl font-bold mb-2">4.8</div>
                <div className="text-amber-100">Average Rating</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Instructors;