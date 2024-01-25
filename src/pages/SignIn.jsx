import React from 'react';
import SignInForm from '../components/SigninForm';

export default function SignIn() {
  return (
    <div className='flex items-start h-full justify-center pt-10'>
      <div className='bg-white p-8 rounded-md shadow-md max-w-md w-full'>
        <h2 className='text-4xl font-bold text-center mb-8'>Sign In</h2>
        <SignInForm />
      </div>
    </div>
  );
}
