import React from 'react';
import SignupForm from '../components/SignupForm';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='flex items-start h-full justify-center py-10'>
      <div className='bg-white p-8 rounded-md shadow-md max-w-md w-full'>
        <h2 className='text-4xl font-bold text-center mb-12'>Sign Up</h2>
        <div className='bg-blue-50 border-l-4 border-blue-500 p-4 mb-4'>
          <p className='text-blue-800'>
            Want to register a company? Click{' '}
            <button
              className='text-blue-500 hover:underline'
              onClick={() => alert('You clicked the Register a Company button')}
            >
              here
            </button>
            .
          </p>
        </div>

        <SignupForm />
        <div className='mt-4 text-center'>
          <p className='text-gray-600'>
            Already have an account?{' '}
            <Link to='/signin' className='text-blue-500 hover:underline'>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
