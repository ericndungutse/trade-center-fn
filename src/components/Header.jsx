// src/components/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-gradient-to-r py-2 from-purple-700 via-purple-600 to-purple-700 text-white'>
      <div className='flex items-center px-12 h-full'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex items-center'>
            <img
              src='/path/to/logo.png'
              alt='Logo'
              className='h-10 w-10 mr-2 rounded-full'
            />
            <span className='text-lg font-bold'>Your Logo</span>
          </div>
          <nav className='flex gap-4 items-center'>
            <Link to='/signin' className=' transition duration-300'>
              Sign In
            </Link>
            <Link
              to='/signup'
              className='bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-purple-600 transition hover:text-white'
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
