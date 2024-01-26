// src/components/SignUp.js
import React from 'react';

const SignupForm = () => {
  return (
    <form>
      <div className='mb-4 text-sm'>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-600'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='mt-1 p-2 w-full border rounded-md text-sm'
          placeholder='Enter your name'
        />
      </div>
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
          className='mt-1 p-2 w-full border rounded-md text-sm'
          placeholder='Enter your email'
        />
      </div>
      <div className='mb-4'>
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
          className='mt-1 p-2 w-full border rounded-md text-sm'
          placeholder='Enter your password'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='confirmPassword'
          className='block text-sm font-medium text-gray-600'
        >
          Confirm Password
        </label>
        <input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          className='mt-1 p-2 w-full border rounded-md text-sm'
          placeholder='Confirm your password'
        />
      </div>
      <button
        type='submit'
        className='bg-blue-500 w-full text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-700 text-sm'
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
