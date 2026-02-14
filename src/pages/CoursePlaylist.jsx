import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CoursePlaylist = () => {
  const { courseId } = useParams();
  const [activeVideo, setActiveVideo] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  // কোর্সের ডেটা (ডেমো)
  const courseData = {
    id: 1,
    title: 'Agriculture Management',
    instructor: 'Dr. Farhana Islam',
    thumbnail: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&h=250&fit=crop',
    description: 'Learn smart farming, crop management, and sustainable agriculture practices',
    totalDuration: '8 Hours',
    totalLessons: 22,
    completedLessons: 7,
    videoUrl: 'https://youtu.be/rN7-y2aSaNI',
    platform: 'YouTube'
  };

  // প্লেলিস্টের ভিডিওগুলো (একই YouTube ভিডিও বার বার দেখানো হচ্ছে ডেমোর জন্য)
  const [playlist, setPlaylist] = useState([
    {
      id: 1,
      title: '1. Introduction to Farm Management',
      duration: '15:30',
      videoUrl: 'https://youtu.be/rN7-y2aSaNI',
      isCompleted: true,
      notes: 'Farm management involves decision-making processes in agricultural production. This lecture covers basic concepts, scope, and importance of farm management in modern agriculture.'
    },
    {
      id: 2,
      title: '2. Production Economics Fundamentals',
      duration: '22:45',
      videoUrl: 'https://youtu.be/rN7-y2aSaNI',
      isCompleted: true,
      notes: 'Understanding production functions, input-output relationships, law of diminishing returns, and factors of production in agricultural context.'
    },
    {
      id: 3,
      title: '3. Resource Allocation in Agriculture',
      duration: '18:20',
      videoUrl: 'https://youtu.be/rN7-y2aSaNI',
      isCompleted: true,
      notes: 'Optimal use of land, labor, capital, and management resources. Resource optimization techniques and decision-making tools.'
    },
    {
      id: 4,
      title: '4. Cost Analysis in Farming',
      duration: '25:10',
      videoUrl: 'https://youtu.be/rN7-y2aSaNI',
      isCompleted: true,
      notes: 'Fixed costs, variable costs, break-even analysis, cost-benefit analysis, and farm budgeting techniques.'
    },
    {
      id: 5,
      title: '5. Risk Management in Agriculture',
      duration: '20:15',
      videoUrl: 'https://youtu.be/rN7-y2aSaNI',
      isCompleted: false,
      notes: 'Identifying and managing various risks in farming including production risk, market risk, financial risk, and institutional risk.'
    },
    {
      id: 6,
      title: '6. Sustainable Farming Practices',
      duration: '28:30',
      videoUrl: 'https://youtu.be/rN7-y2aSaNI',
      isCompleted: false,
      notes: 'Environmentally friendly and economically viable farming methods. Conservation agriculture, organic farming, and precision agriculture.'
    },
    {
      id: 7,
      title: '7. Marketing Strategies for Farmers',
      duration: '19:45',
      videoUrl: 'https://youtu.be/rN7-y2aSaNI',
      isCompleted: false,
      notes: 'Direct marketing, cooperatives, value-added products, contract farming, and digital marketing platforms for agricultural products.'
    },
    {
      id: 8,
      title: '8. Financial Management in Agriculture',
      duration: '24:20',
      videoUrl: 'https://youtu.be/rN7-y2aSaNI',
      isCompleted: false,
      notes: 'Budgeting, record keeping, financial analysis, credit management, and investment decisions in farming.'
    },
    {
      id: 9,
      title: '9. Farm Planning and Budgeting',
      duration: '21:40',
      videoUrl: 'https://youtu.be/rN7-y2aSaNI',
      isCompleted: false,
      notes: 'Whole-farm planning, enterprise budgeting, partial budgeting, and cash flow analysis.'
    },
    {
      id: 10,
      title: '10. Agricultural Policy and Economics',
      duration: '26:15',
      videoUrl: 'https://youtu.be/rN7-y2aSaNI',
      isCompleted: false,
      notes: 'Government policies, subsidies, price supports, trade agreements, and their impact on farm profitability.'
    },
    {
      id: 11,
      title: '11. Technology in Modern Agriculture',
      duration: '23:30',
      videoUrl: 'https://youtu.be/rN7-y2aSaNI',
      isCompleted: false,
      notes: 'Precision farming, IoT in agriculture, drone technology, smart irrigation systems, and farm management software.'
    },
    {
      id: 12,
      title: '12. Supply Chain Management',
      duration: '27:45',
      videoUrl: 'https://youtu.be/rN7-y2aSaNI',
      isCompleted: false,
      notes: 'Agricultural supply chains, post-harvest management, cold storage, transportation, and food distribution systems.'
    }
  ]);

  // YouTube ভিডিও আইডি এক্সট্রাক্ট করা
  const getYoutubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYoutubeVideoId(playlist[activeVideo].videoUrl);

  // সম্পূর্ণ হওয়া ভিডিওর সংখ্যা
  const completedCount = playlist.filter(v => v.isCompleted).length;
  const progressPercentage = (completedCount / playlist.length) * 100;

  // মার্ক as কমপ্লিট ফাংশন
  const markAsCompleted = () => {
    const updatedPlaylist = [...playlist];
    if (!updatedPlaylist[activeVideo].isCompleted) {
      updatedPlaylist[activeVideo].isCompleted = true;
      setPlaylist(updatedPlaylist);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* ব্যাক বাটন এবং হেডার */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            to="/my-class"
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to My Classes
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
              Course ID: {courseId}
            </span>
            <button
              onClick={() => setShowNotes(!showNotes)}
              className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {showNotes ? 'Hide Notes' : 'Show Notes'}
            </button>
          </div>
        </div>

        {/* কোর্স টাইটেল */}
        <div className="mb-6 bg-white rounded-xl p-6 shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{courseData.title}</h1>
          <p className="text-gray-600 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Instructor: {courseData.instructor}
          </p>
        </div>

        {/* মেইন কন্টেন্ট গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ভিডিও প্লেয়ার সেকশন (২ কলাম) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* ভিডিও প্লেয়ার */}
              <div className="relative pb-[56.25%] h-0 bg-black">
                {videoId ? (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={playlist[activeVideo].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <p className="text-white">Video unavailable</p>
                  </div>
                )}
              </div>

              {/* ভিডিও তথ্য */}
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    {playlist[activeVideo].title}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${
                    playlist[activeVideo].isCompleted 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {playlist[activeVideo].isCompleted ? '✓ Completed' : '● In Progress'}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {playlist[activeVideo].duration}
                  </span>
                </div>

                {/* নোটস সেকশন */}
                {showNotes && (
                  <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-100 animate-fadeIn">
                    <h3 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Lecture Notes
                    </h3>
                    <p className="text-indigo-800 text-sm leading-relaxed">
                      {playlist[activeVideo].notes}
                    </p>
                  </div>
                )}

                {/* নেভিগেশন বাটন */}
                <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
                  <button
                    onClick={() => setActiveVideo(prev => Math.max(0, prev - 1))}
                    disabled={activeVideo === 0}
                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                      activeVideo === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:shadow-md'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous Lesson
                  </button>
                  
                  <button
                    onClick={markAsCompleted}
                    disabled={playlist[activeVideo].isCompleted}
                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all transform hover:scale-105 ${
                      playlist[activeVideo].isCompleted
                        ? 'bg-green-100 text-green-700 cursor-default'
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {playlist[activeVideo].isCompleted ? 'Already Completed' : 'Mark as Completed'}
                  </button>
                  
                  <button
                    onClick={() => setActiveVideo(prev => Math.min(playlist.length - 1, prev + 1))}
                    disabled={activeVideo === playlist.length - 1}
                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                      activeVideo === playlist.length - 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:shadow-md'
                    }`}
                  >
                    Next Lesson
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* প্লেলিস্ট সাইডবার (১ কলাম) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
              {/* প্লেলিস্ট হেডার */}
              <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  Course Content
                </h3>
                <div className="flex justify-between text-sm">
                  <span>{completedCount}/{playlist.length} videos completed</span>
                  <span>{Math.round(progressPercentage)}%</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-2 mt-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* ভিডিও লিস্ট */}
              <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
                {playlist.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => setActiveVideo(index)}
                    className={`w-full p-3 text-left border-b hover:bg-gray-50 transition-colors ${
                      activeVideo === index ? 'bg-indigo-50 border-l-4 border-indigo-600' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* থাম্বনেইল */}
                      <div className="w-16 h-12 bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                        <img 
                          src={courseData.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-medium text-xs mb-1 line-clamp-2 ${
                          activeVideo === index ? 'text-indigo-700' : 'text-gray-900'
                        }`}>
                          {video.title}
                        </h4>
                        
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {video.duration}
                          </span>
                          {video.isCompleted ? (
                            <span className="text-green-600">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </span>
                          ) : (
                            <span className="text-xs px-1.5 py-0.5 bg-yellow-100 text-yellow-700 rounded">
                              Pending
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* কোর্স সম্পর্কিত তথ্য */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-indigo-600 mb-1">{playlist.length}</div>
            <div className="text-sm text-gray-600">Total Lessons</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-indigo-600 mb-1">{courseData.totalDuration}</div>
            <div className="text-sm text-gray-600">Total Duration</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-indigo-600 mb-1">{completedCount}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-indigo-600 mb-1">{playlist.length - completedCount}</div>
            <div className="text-sm text-gray-600">Remaining</div>
          </div>
        </div>

        {/* ডাউনলোড সেকশন */}
        <div className="mt-6 bg-white rounded-xl p-6 shadow-md">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4-4 4m4 4V4" />
            </svg>
            Course Materials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-medium text-gray-900">Lecture Slides</h4>
                <p className="text-xs text-gray-500">PDF • 12 MB</p>
              </div>
            </button>

            <button className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-medium text-gray-900">Practice Sheets</h4>
                <p className="text-xs text-gray-500">DOCX • 5 MB</p>
              </div>
            </button>

            <button className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-medium text-gray-900">Resource Materials</h4>
                <p className="text-xs text-gray-500">ZIP • 25 MB</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* কাস্টম স্ক্রলবার স্টাইল */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c7d2fe;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #818cf8;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CoursePlaylist;