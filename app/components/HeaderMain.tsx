import React from 'react';
import { FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';

const HeaderMain = () => {
  return (  
    <div className='border-b border-gray-200 py-6'>
      <div className='container sm:flex justify-between items-center'>
        {/* Logo Section */}
        <div className='text-center pb-4 sm:pb-0'>
          <img 
            src="logo1.png" 
            alt="Logo" 
            className="h-20 mx-auto sm:mx-0" // Increased height to make the logo bigger
          />
        </div>

        {/* Search Section */}
        <div className='w-full sm:w-[70%] relative flex items-center space-x-4'>
          <input 
            className="border border-gray-200 p-2 px-4 rounded-lg w-full"
            type='text' 
            placeholder='Enter product name'
          />
          <button 
            className="bg-accent text-white p-2 px-6 rounded-lg hover:bg-purple-500"
            type="button"
          >
            Search
          </button>
          {/* Icons Section */}
          <div className="header_top__icon_wrapper flex text-gray-600 items-center space-x-4 ">
            <FaUser size={20} className="cursor-pointer" />
          </div>
          <div className="header_top__icon_wrapper text-gray-600 flex items-center space-x-4">
            <FaHeart size={20} className="cursor-pointer" />
          </div>
          <div className="header_top__icon_wrapper text-gray-600 flex items-center space-x-4">
            <FaShoppingBag size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
