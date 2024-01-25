// src/components/Showcase.js
import React from 'react';

const Showcase = () => {
  return (
    <section className='bg-cover bg-center showcase h-[80vh] flex justify-center items-center'>
      <div className='container mx-auto text-center'>
        <h2 className='font-bold mb-1 text-white tracking-widest text-4xl uppercase'>
          Producers Connect
        </h2>

        <p className='text-whote text-center max-w-2xl mx-auto mb-8 text-gray-300'>
          Invest Smart And Wiser Everywhere.
        </p>

        <div className='space-x-4'>
          <button className='bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-700 transition duration-300'>
            Discover & Invest
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
