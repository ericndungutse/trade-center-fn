import React from 'react';
import SignInForm from '../components/SigninForm';
import PageLaout from '../components/PageLaout';

export default function SignIn() {
  return (
    <PageLaout>
      <div className='flex items-start flex-1 justify-center pt-10'>
        <div className='bg-white p-8 rounded-md shadow-md w-[30%]'>
          <h2 className='text-4xl font-bold text-center mb-8'>Sign In</h2>
          <SignInForm />
        </div>
      </div>
    </PageLaout>
  );
}
