// src/components/RegisterCompany.js
import React from 'react';

const RegisterCompanyForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the company registration
    alert('Company registration logic goes here');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label
          htmlFor='companyName'
          className='block text-sm font-medium text-gray-600'
        >
          Company Name
        </label>
        <input
          type='text'
          id='companyName'
          name='companyName'
          className='mt-1 p-2 w-full border rounded-md'
          placeholder='Enter company name'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='companyEmail'
          className='block text-sm font-medium text-gray-600'
        >
          Company Email
        </label>
        <input
          type='email'
          id='companyEmail'
          name='companyEmail'
          className='mt-1 p-2 w-full border rounded-md'
          placeholder='Enter company email'
          required
        />
      </div>
      <button
        type='submit'
        className='bg-blue-500 text-white py-2 w-full px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-700'
      >
        Register Company
      </button>
    </form>
  );
};

export default RegisterCompanyForm;
