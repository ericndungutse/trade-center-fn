import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCompanies } from '../context/CompaniesCOnetext';

const CompanyList = () => {
  const { companies, onFetchedCompanies, loading, onLoading } = useCompanies();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        onLoading(true);
        const response = await axios.get(
          'http://localhost:3000/api/v1/companies'
        );

        onFetchedCompanies(response.data.data.companies);
      } catch (error) {
        console.log(error);
      } finally {
        onLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-between lg:grid-cols-3 gap-6'>
      {(loading && <span>Loading...</span>) ||
        companies.map((company) => (
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

            <div className='absolute bottom-0 left-0 right-0 bg-blue-600 text-white py-2 text-center'>
              <button
                onClick={() => {
                  navigate(`/companies/${company.id}`);
                }}
                className='cursor-pointer focus:outline-none'
              >
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
