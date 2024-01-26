// src/components/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from './Container';
import { useUser } from '../context/UserContext';

const Header = () => {
  const { user, onLogout } = useUser();
  return (
    <header className='bg-gradient-to-r py-2 from-blue-700 via-blue-600 to-blue-700 text-white text-xs'>
      <Container>
        <div className='flex items-center h-full'>
          <div className='container mx-auto flex justify-between items-center'>
            <div className='flex items-center'>
              <img src='' alt='Logo' className='h-10 w-10 mr-2 rounded-full' />
              <span className='text-lg font-bold'>Your Logo</span>
            </div>
            <nav className='flex gap-4 items-center'>
              {!user ? (
                <>
                  {' '}
                  <Link to='/signin' className=' transition duration-300'>
                    Sign In
                  </Link>
                  <Link
                    to='/signup'
                    className='bg-white text-gray-900 px-6 py-2 rounded-fulltransition rounded '
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to='/user'
                    className='bg-white text-gray-900 px-6 py-2 rounded-fulltransition rounded '
                  >
                    {user.user.email}
                  </Link>

                  <button
                    onClick={onLogout}
                    className='bg-white text-gray-900 px-6 py-2 rounded-fulltransition rounded '
                  >
                    Sign Out
                  </button>
                </>
              )}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
