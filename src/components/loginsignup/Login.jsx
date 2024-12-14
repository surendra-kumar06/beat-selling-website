// src/Login.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-lightBrown">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-darkBrown text-center">Login</h2>
        <form className="space-y-4">
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
          <button
            type="submit"
            className="w-full py-2 text-white bg-electricBlue rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-center text-darkBrown">
          Don't have an account?{' '}
          <Link to="/signup" className="text-electricBlue hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
