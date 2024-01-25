import React from 'react';

const CompanyList = () => {
  const companies = [
    {
      id: 1,
      logo: '/path/to/company1-logo.png',
      name: 'Company One',
      location: 'City A, Country X',
      industry: 'Technology',
    },
    {
      id: 2,
      logo: '/path/to/company2-logo.png',
      name: 'Company Two',
      location: 'City B, Country Y',
      industry: 'Finance',
    },
    {
      id: 3,
      logo: '/path/to/company2-logo.png',
      name: 'Cimerwa',
      location: 'City B, Country Y',
      industry: 'Finance',
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-between lg:grid-cols-3 gap-6'>
      {companies.map((company) => (
        <div
          key={company.id}
          className='bg-white p-6 rounded-md shadow-md relative overflow-hidden'
        >
          <div className='mb-4'>
            <img
              src='/images/showcase.jpg'
              alt={`${company.name} Logo`}
              className='w-full h-56 object-cover rounded'
            />
          </div>
          <h3 className='text-xl font-bold mb-2'>{company.name}</h3>
          <p className='text-gray-600 mb-2'>{company.location}</p>
          <p className='bg-blue-100 mb-6 w-fit text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded '>
            {company.industry}
          </p>

          <div className='absolute bottom-0 left-0 right-0 bg-blue-600 text-white py-2 text-center'>
            <button className='cursor-pointer focus:outline-none'>
              <span className='inline-block transform -translate-y-1'>+</span>{' '}
              Explore Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;
