import React from 'react';

const Blog = () => {
  const posts = [
    { id: 1, title: 'How to Start Learning Digital Marketing', date: 'Mar 15, 2024', category: 'Business', readTime: '5 min' },
    { id: 2, title: 'Agriculture Tips for Beginners', date: 'Mar 10, 2024', category: 'Agriculture', readTime: '4 min' },
    { id: 3, title: 'Top 5 Programming Languages in 2024', date: 'Mar 5, 2024', category: 'Technology', readTime: '7 min' },
    { id: 4, title: 'Free Learning Resources for Students', date: 'Feb 28, 2024', category: 'Education', readTime: '6 min' },
    { id: 5, title: 'Career Opportunities in Freelancing', date: 'Feb 20, 2024', category: 'Job Preparation', readTime: '8 min' },
    { id: 6, title: 'Success Stories from Our Students', date: 'Feb 15, 2024', category: 'Inspiration', readTime: '10 min' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 py-12 px-4">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog & Articles</h1>
        <p className="text-gray-600 mb-8">Latest insights, tips, and stories from the learning community</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-48 bg-indigo-100"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-600">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime} read</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2 hover:text-indigo-600 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 transition">
                    Read More →
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

export default Blog;