import React, { useState, useEffect, useRef } from 'react';

const Blog = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [sparkles, setSparkles] = useState([]);
  const [rippleEffect, setRippleEffect] = useState(null);

  const posts = [
    { 
      id: 1, 
      title: 'How to Start Learning Digital Marketing', 
      date: 'Mar 15, 2024', 
      category: 'Business', 
      readTime: '5 min',
      excerpt: 'Discover the essential steps to begin your journey in digital marketing. From SEO to social media, learn what it takes to become a successful digital marketer.',
      author: 'Sarah Johnson',
      likes: 234,
      comments: 45,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      color: 'from-blue-400 to-indigo-500'
    },
    { 
      id: 2, 
      title: 'Agriculture Tips for Beginners', 
      date: 'Mar 10, 2024', 
      category: 'Agriculture', 
      readTime: '4 min',
      excerpt: 'Essential tips and techniques for starting your agricultural journey. Learn about soil preparation, crop selection, and modern farming methods.',
      author: 'Dr. Michael Chen',
      likes: 156,
      comments: 23,
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      color: 'from-green-400 to-emerald-500'
    },
    { 
      id: 3, 
      title: 'Top 5 Programming Languages in 2024', 
      date: 'Mar 5, 2024', 
      category: 'Technology', 
      readTime: '7 min',
      excerpt: 'Stay ahead of the curve with our comprehensive guide to the most in-demand programming languages this year and what you can build with them.',
      author: 'Alex Rivera',
      likes: 567,
      comments: 89,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      color: 'from-purple-400 to-pink-500'
    },
    { 
      id: 4, 
      title: 'Free Learning Resources for Students', 
      date: 'Feb 28, 2024', 
      category: 'Education', 
      readTime: '6 min',
      excerpt: 'Discover the best free online resources to enhance your learning experience. From courses to tools, we\'ve got you covered.',
      author: 'Emma Watson',
      likes: 345,
      comments: 67,
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      color: 'from-amber-400 to-orange-500'
    },
    { 
      id: 5, 
      title: 'Career Opportunities in Freelancing', 
      date: 'Feb 20, 2024', 
      category: 'Job Preparation', 
      readTime: '8 min',
      excerpt: 'Explore the vast opportunities in the freelancing world. Learn about high-demand skills and how to build a successful freelance career.',
      author: 'David Kim',
      likes: 432,
      comments: 78,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      color: 'from-red-400 to-rose-500'
    },
    { 
      id: 6, 
      title: 'Success Stories from Our Students', 
      date: 'Feb 15, 2024', 
      category: 'Inspiration', 
      readTime: '10 min',
      excerpt: 'Read inspiring stories of how our students transformed their lives through learning. Real people, real success stories.',
      author: 'Lisa Thompson',
      likes: 789,
      comments: 123,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      color: 'from-teal-400 to-cyan-500'
    },
    { 
      id: 7, 
      title: 'Understanding Machine Learning Basics', 
      date: 'Feb 10, 2024', 
      category: 'Technology', 
      readTime: '9 min',
      excerpt: 'A beginner-friendly introduction to machine learning concepts, algorithms, and real-world applications. No prior experience required.',
      author: 'Dr. Sarah Chen',
      likes: 654,
      comments: 92,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      color: 'from-indigo-400 to-blue-500'
    },
    { 
      id: 8, 
      title: 'Effective Study Techniques', 
      date: 'Feb 5, 2024', 
      category: 'Education', 
      readTime: '5 min',
      excerpt: 'Learn scientifically-proven study techniques to improve your learning efficiency and retention. Perfect for students of all ages.',
      author: 'Prof. James Wilson',
      likes: 287,
      comments: 43,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      color: 'from-violet-400 to-purple-500'
    },
    { 
      id: 9, 
      title: 'The Future of E-Learning', 
      date: 'Jan 28, 2024', 
      category: 'Technology', 
      readTime: '6 min',
      excerpt: 'Explore the trends shaping the future of online education. From AI tutors to virtual reality classrooms, see what\'s coming next.',
      author: 'Maria Garcia',
      likes: 398,
      comments: 56,
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      color: 'from-pink-400 to-rose-500'
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

  // SVG Icons Components
  const CalendarIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const HeartIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const CommentIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );

  const CategoryIcon = ({ category }) => {
    const getIcon = () => {
      switch(category) {
        case 'Technology': return '💻';
        case 'Business': return '💼';
        case 'Education': return '📚';
        case 'Agriculture': return '🌱';
        case 'Job Preparation': return '🎯';
        case 'Inspiration': return '✨';
        default: return '📰';
      }
    };
    return <span className="mr-1">{getIcon()}</span>;
  };

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
              BLOG &
            </span>
            <br />
            <span className="text-gray-800 relative">
              ARTICLES
              <div className="absolute -inset-2 bg-indigo-300/30 blur-2xl animate-pulse-slow"></div>
            </span>
          </h1>
          
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 blur-3xl opacity-50 animate-pulse"></div>
            <p className="relative text-gray-600 text-lg max-w-2xl mx-auto font-light tracking-wide">
              Latest insights, tips, and stories from our learning community
            </p>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-20 left-10 text-indigo-400 animate-float-slow">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 text-purple-400 animate-float-slower">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative pb-16">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseMove={(e) => generateSparkles(post.id, e)}
              onMouseEnter={() => setHoveredCard(post.id)}
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
                      post.color?.split(' ')[1] || '#8b5cf6'
                    }, transparent)`,
                    borderRadius: '50%',
                    animation: `sparkle 1s ease-out forwards`,
                    animationDelay: `${sparkle.delay}s`
                  }}
                />
              ))}

              {/* Morphing Card Background */}
              <div 
                className={`absolute -inset-0.5 bg-gradient-to-r ${post.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 ${
                  hoveredCard === post.id ? 'scale-110' : 'scale-100'
                }`}
                style={{
                  animation: hoveredCard === post.id ? 'morph 3s ease-in-out infinite' : 'none'
                }}
              ></div>

              {/* Main Card */}
              <div 
                className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 group-hover:border-transparent transition-all duration-500 transform-gpu shadow-lg hover:shadow-2xl"
                style={{
                  transform: hoveredCard === post.id 
                    ? `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) scale(1.02) translateZ(30px)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0)',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Animated Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t ${post.color} to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500`}
                    style={{
                      clipPath: hoveredCard === post.id 
                        ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
                        : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
                    }}
                  ></div>

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${post.color} text-white text-xs font-bold rounded-full shadow-lg flex items-center`}>
                      <CategoryIcon category={post.category} />
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-lg flex items-center gap-1">
                    <ClockIcon />
                    {post.readTime}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author and Date */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${post.color} flex items-center justify-center text-white text-xs font-bold`}>
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <CalendarIcon />
                        {post.date}
                      </div>
                    </div>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1 group-hover:text-pink-500 transition-colors">
                      <HeartIcon />
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1 group-hover:text-blue-500 transition-colors">
                      <CommentIcon />
                      {post.comments}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="relative mt-12 mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur-xl opacity-50"></div>
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 border border-gray-200 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600 mb-6">
                Get the latest articles, learning tips, and exclusive content delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 border-2 border-indigo-200 rounded-xl focus:outline-none focus:border-indigo-400 transition-all duration-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Blog;