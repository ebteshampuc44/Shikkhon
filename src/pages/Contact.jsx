import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 px-4 md:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Page <span className="text-indigo-600">Coming Soon</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          We’re working on something great! This page will be available soon.
          <br />
          If you have any questions, feel free to reach out to us via email.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:opacity-90 transition"
          >
            Go Back Home
          </Link>

          <a
            href="mailto:support@shikkhon.com"
            className="px-6 py-3 rounded-lg border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
          >
            Email Us
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} Shikkhon. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
