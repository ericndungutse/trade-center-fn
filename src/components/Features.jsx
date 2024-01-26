// src/components/Features.js
import React from 'react';
import Container from './Container';

const Features = () => {
  return (
    <section className='bg-white py-8 text-sm'>
      <div className='container mx-auto text-center'>
        <Container>
          <h2 className='text-3xl font-bold text-blue-800 mb-8'>Features</h2>
          <div className='flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8'>
            <div className='bg-gray-100 p-6 rounded-md shadow-md flex-1'>
              <h3 className='text-xl font-bold mb-4'>Feature 1</h3>
              <p className='text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className='bg-gray-100 p-6 rounded-md shadow-md flex-1'>
              <h3 className='text-xl font-bold mb-4'>Feature 2</h3>
              <p className='text-gray-600'>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Features;
