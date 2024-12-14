import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="w-full my-8">
        <div className='max-w-[800px] md:flex items-center m-auto p-3 gap-4'>
        <div className='relative flex-grow'>
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 border bg-white rounded-xl text-darkBrown outline-none   shadow-md"
      />
      <button className="absolute top-1/2 right-3 ml-2 text-lg -translate-y-1/2 rounded-full text-blue-500">
      <FaSearch />
      </button>
      </div>
      <a href="/guide" className="mt-3 md:mt-0 underline text-electricBlue hover:text-blue-500 text-center block">
        Quick guide to search
      </a>
      </div>
    </div>
  );
};

export default SearchBar;
