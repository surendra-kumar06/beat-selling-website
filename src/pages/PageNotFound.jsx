import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F5E6D3] flex flex-col items-center justify-center p-6">
      <h1 className="text-6xl font-bold text-[#4A3728] mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-[#4A3728] mb-2">Page Not Found</h2>
      <p className="text-lg text-[#4A3728] mb-4">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="bg-[#00A4E4] text-white py-2 px-4 rounded hover:bg-[#0089b4]">
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFound;
