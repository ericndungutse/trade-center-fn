import React from 'react';
import CompanyList from '../components/CompanyList';

export default function Companies() {
  return (
    <div className='container mx-auto mt-8 h-full py-8'>
      <h2 className='text-3xl font-bold text-blue-800 mb-6'>Company List</h2>
      <CompanyList />
    </div>
  );
}
