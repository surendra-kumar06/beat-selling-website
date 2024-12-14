import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({beats}) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the email submission logic here
    setSuccess(true);
    setEmail('');
  };

  return (
    <div className="max-w-md h-full mx-auto p-4 border-l border-cream hidden md:block">
        <div className='pb-2'>
      <h2 className="text-lg mb-4 text-darkBrown">Sign Up for Our Newsletter</h2>
      {success && (
        <p className="text-green-500 mb-4">Thank you for signing up!</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          type="submit"
          className="w-full p-2 bg-electricBlue text-white rounded-md hover:bg-blue-400"
        >
          Subscribe
        </button>
      </form>
      </div>
      <div className='py-3 border-t mt-2 border-cream space-y-3'>
       {beats.map((beat)=>(
        <div key={beat.id}>
         <Link to={`/artist/${beat.id}`}>
         <div className='flex gap-2 items-center'>
         <div className='h-12 rounded-md'>
     <img src={beat.logo} className='h-full object-cover rounded-md' alt="" />
   </div>
   <div className='flex flex-col text-sm text-darkBrown'>
    <span className='text-xs text-gray-500'>{beat.artist}</span>
    <span>{beat.beatName}</span>
   </div>
     </div></Link></div>
       ))}
      </div>
      
    </div>
  );
};

export default Sidebar;
