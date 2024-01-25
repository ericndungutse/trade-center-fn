// src/components/SignIn.js
import React from 'react';
import { Link } from 'react-router-dom';

const SignInForm = () => {
  return (
    <form>
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-600'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='mt-1 p-2 w-full border rounded-md'
          placeholder='Enter your email'
        />
      </div>
      <div className='mb-1'>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-gray-600'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          className='mt-1 p-2 w-full border rounded-md'
          placeholder='Enter your password'
        />
      </div>

      <div className='flex justify-between mb-8'>
        <p className='text-gray-600'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-blue-500 hover:underline'>
            Sign Up
          </Link>
        </p>

        <a href='#' className='text-blue-500 hover:underline'>
          Forgot Password?
        </a>
      </div>

      <button
        type='submit'
        className='bg-blue-500 w-full text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-purple-700'
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
