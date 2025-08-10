
'use client';

import { FiMapPin, FiTool } from 'react-icons/fi';

const SearchForm = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <form className="flex flex-col md:flex-row items-center md:items-center md:justify-center gap-4 w-full">
        
        <div className="w-full ">
          <div className="relative">
            <FiMapPin size={20} className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full p-4 pl-12 rounded-md bg-white text-gray-900 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-[#902D31]"
            />
          </div>
          <p className="text-sm text-white/95 mt-2 text-left pl-1 line-clamp-1">
            Example : Biratnagar, Kathmandu + 50 more
          </p>
        </div>

        <div className="w-full ">
          <div className="relative">
            <FiTool size={20} className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Enter Profession"
              className="w-full p-4 pl-12 rounded-md bg-white text-gray-900 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-[#902D31]"
            />
          </div>
           <p className="text-sm text-white/95 mt-2 text-left pl-1 line-clamp-1">
            Example : Cleaner, Carpenter + 160 more
          </p>
        </div>

        <div className="w-1/2  md:flex-1 lg:w-auto md:self-start">
            <button
              type="submit"
              className="w-full lg:w-auto bg-[#902D31] text-white font-bold px-10 py-4 rounded-md hover:bg-[#7a282b] transition-colors flex-shrink-0 shadow-md"
            >
              Search
            </button>
        </div>

      </form>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-[#902D31] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#7a282b] transition-colors shadow-lg">
          Browse All Cities
        </button>
        <button className="bg-[#902D31] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#7a282b] transition-colors shadow-lg">
          Browse All Services
        </button>
      </div>
    </div>
  );
};

export default SearchForm;