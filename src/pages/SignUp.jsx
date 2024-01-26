import React from 'react';
import SignupForm from '../components/SignupForm';
import { Link } from 'react-router-dom';
import PageLaout from '../components/PageLaout';

export default function SignUp() {
  return (
    <PageLaout>
      <div className='flex items-start flex-1 justify-center py-10'>
        <div className='bg-white p-6 rounded-md shadow-md w-[40%]'>
          <h2 className='text-4xl font-bold text-center mb-8'>Sign Up</h2>
          <div className='bg-blue-50 border-l-4 text-sm border-blue-500 p-4 mb-4'>
            <p className='text-blue-800 '>
              Want to register a company? Click{' '}
              <Link
                to='/register-company'
                className='text-blue-500 hover:underline'
              >
                here
              </Link>
              .
            </p>
          </div>

          <SignupForm />
          <div className='mt-4 text-center text-sm'>
            <p className='text-gray-600'>
              Already have an account?{' '}
              <Link to='/signin' className='text-blue-500 hover:underline'>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageLaout>
  );
}
