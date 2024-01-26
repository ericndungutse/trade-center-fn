import React from 'react';
import RegisterCompanyForm from '../components/RegisterCompanyForm';
import { Link } from 'react-router-dom';
import PageLaout from '../components/PageLaout';

export default function RegisterCompany() {
  return (
    <PageLaout>
      <div className='flex items-start flex-1 justify-center py-10 text-sm'>
        <div className='bg-white p-6 rounded-md shadow-md max-w-md h-full w-full'>
          <h2 className='text-2xl font-bold text-center mb-4'>
            Register a Company
          </h2>

          <RegisterCompanyForm />

          <div className='mt-4 text-center text-sm'>
            <p className='text-gray-600 text-sm'>
              Already have an registered?{' '}
              <Link
                to='/signin'
                className='text-blue-500 hover:underline text-sm'
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageLaout>
  );
}
