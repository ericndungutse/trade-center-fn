// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center'>
          <img
            src='/path/to/logo.png'
            alt='Logo'
            className='h-10 w-10 mr-2 rounded-full'
          />
          <span className='text-lg font-bold'>Your Logo</span>
        </div>

        {/* Navigation */}
        <nav className='space-x-4'>
          <NavLink
            to='/signin'
            className='hover:text-gray-300 transition duration-300'
          >
            Sign In
          </NavLink>
          <NavLink
            to='/signup'
            className='bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-purple-600 transition hover:text-white'
          >
            Sign Up
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
