import React from 'react';
import RegisterCompanyForm from '../components/RegisterCompanyForm';
import { Link } from 'react-router-dom';
import PageLaout from '../components/PageLaout';

export default function RegisterCompany() {
  return (
    <PageLaout>
      <div className='bg-white p-6 rounded-md shadow-md max-w-md w-full h'>
        <h2 className='text-2xl font-bold text-center mb-4'>
          Register a Company
        </h2>

        <RegisterCompanyForm />

        <div className='mt-4 text-center'>
          <p className='text-gray-600'>
            Already have an registered?{' '}
            <Link to='/signin' className='text-blue-500 hover:underline'>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </PageLaout>
  );
}
