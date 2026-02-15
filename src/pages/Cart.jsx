import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Digital Marketing Masterclass',
      instructor: 'Ahmed Rasel',
      price: 2500,
      originalPrice: 3500,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      category: 'Business',
      duration: '12h 30m',
      lessons: 24,
      selected: true
    },
    {
      id: 2,
      title: 'Full Stack Web Development',
      instructor: 'Rafi Ahmed',
      price: 3000,
      originalPrice: 4500,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
      category: 'Technology',
      duration: '42h 20m',
      lessons: 85,
      selected: true
    },
    {
      id: 3,
      title: 'Professional Spoken English',
      instructor: 'Nishat Jahan',
      price: 1500,
      originalPrice: 2500,
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=250&fit=crop',
      category: 'Skill Development',
      duration: '16h 45m',
      lessons: 32,
      selected: false
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const toggleItem = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'shikkhon20') {
      setCouponApplied(true);
    } else {
      alert('Invalid coupon code');
    }
  };

  // Calculate totals
  const selectedItems = cartItems.filter(item => item.selected);
  const subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const discount = couponApplied ? subtotal * 0.2 : 0; // 20% discount
  const total = subtotal - discount;

  const handleCheckout = () => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-4 pb-12">
      {/* Coming Soon Notification */}
      {showComingSoon && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-slideDown">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Checkout Coming Soon!</h3>
              <p className="text-indigo-100 text-sm">We're working on payment integration</p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
            <p className="text-gray-600">{cartItems.length} courses in your cart</p>
          </div>
          <Link
            to="/courses"
            className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg hover:shadow-md transition-all duration-300 border border-indigo-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any courses yet</p>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Browse Courses
            </Link>
          </div>
        ) : (
          /* Cart Items Grid */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items - Left Column */}
            <div className="lg:col-span-2 space-y-4">
              {/* Select All Header */}
              <div className="bg-white rounded-xl p-4 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      const allSelected = cartItems.every(item => item.selected);
                      setCartItems(items =>
                        items.map(item => ({ ...item, selected: !allSelected }))
                      );
                    }}
                    className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-300 ${
                      cartItems.every(item => item.selected)
                        ? 'bg-indigo-600 border-indigo-600'
                        : cartItems.some(item => item.selected)
                        ? 'border-indigo-600'
                        : 'border-gray-300'
                    }`}>
                      {cartItems.every(item => item.selected) && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="font-medium">Select All</span>
                  </button>
                  <span className="text-gray-500 text-sm">
                    ({selectedItems.length} of {cartItems.length} selected)
                  </span>
                </div>
                <button
                  onClick={() => setCartItems([])}
                  className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                >
                  Remove All
                </button>
              </div>

              {/* Cart Items List */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-l-4 ${
                    item.selected ? 'border-indigo-600' : 'border-gray-200'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Checkbox */}
                      <button
                        onClick={() => toggleItem(item.id)}
                        className={`flex-shrink-0 w-6 h-6 border-2 rounded-md flex items-center justify-center transition-all duration-300 ${
                          item.selected
                            ? 'bg-indigo-600 border-indigo-600 scale-110'
                            : 'border-gray-300 hover:border-indigo-400'
                        }`}
                      >
                        {item.selected && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>

                      {/* Course Image */}
                      <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Course Details */}
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1 hover:text-indigo-600 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">By {item.instructor}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {item.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {item.lessons} lessons
                              </span>
                              <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium">
                                {item.category}
                              </span>
                            </div>
                          </div>

                          {/* Price and Remove */}
                          <div className="text-right">
                            <div className="text-xl font-bold text-indigo-600">
                              ৳{item.price.toLocaleString()}
                            </div>
                            {item.originalPrice && (
                              <div className="text-sm text-gray-400 line-through">
                                ৳{item.originalPrice.toLocaleString()}
                              </div>
                            )}
                            <button
                              onClick={() => removeItem(item.id)}
                              className="mt-2 text-red-500 hover:text-red-700 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Free Learning Promotion */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl animate-pulse">
                    🎁
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">Free Learning Available!</h4>
                    <p className="text-sm text-gray-600">Check out our free courses section for complimentary learning</p>
                  </div>
                  <Link
                    to="/free-learning"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                  >
                    Explore Free
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary - Right Column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                {/* Selected Items Count */}
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>Selected Items ({selectedItems.length})</span>
                  <span className="font-medium">৳{subtotal.toLocaleString()}</span>
                </div>

                {/* Coupon Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coupon Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      disabled={couponApplied}
                    />
                    <button
                      onClick={applyCoupon}
                      disabled={couponApplied}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        couponApplied
                          ? 'bg-green-500 text-white'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                    >
                      {couponApplied ? 'Applied' : 'Apply'}
                    </button>
                  </div>
                  {couponApplied && (
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      20% discount applied!
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">Try "SHIKKHON20" for 20% off</p>
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">৳{subtotal.toLocaleString()}</span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between mb-2 text-green-600">
                      <span>Discount (20%)</span>
                      <span>-৳{discount.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-indigo-600">৳{total.toLocaleString()}</span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={selectedItems.length === 0}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-500 transform hover:scale-105 hover:shadow-xl relative group overflow-hidden ${
                    selectedItems.length === 0
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Proceed to Checkout
                  </span>
                  {selectedItems.length > 0 && (
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  )}
                </button>

                {/* Payment Methods */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500 mb-3">Secure payment options</p>
                  <div className="flex justify-center gap-3">
                    {['bkash', 'nagad', 'rocket', 'visa', 'mastercard'].map((method, idx) => (
                      <div
                        key={idx}
                        className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-600 hover:scale-110 transition-transform"
                      >
                        {method.slice(0, 2).toUpperCase()}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coming Soon Badge */}
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
                  <p className="text-sm text-yellow-800 flex items-center justify-center gap-2">
                    <span className="animate-pulse">⏳</span>
                    Checkout feature coming soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Cart;