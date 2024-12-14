// src/Signup.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-lightBrown">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-darkBrown text-center">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-darkBrown">Name</label>
            <input
              type="text"
              id="name"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricBlue"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-darkBrown">Email</label>
            <input
              type="email"
              id="email"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricBlue"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-darkBrown">Password</label>
            <input
              type="password"
              id="password"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricBlue"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-darkBrown">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electricBlue"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-electricBlue rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-darkBrown">
          Already have an account?{' '}
          <Link to="/login" className="text-electricBlue hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
