import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function PageLaout({ children }) {
  return (
    <div className='flex flex-col min-h-screen max-h-fit bg-gray-200'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
