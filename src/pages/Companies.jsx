import React from 'react';
import CompanyList from '../components/CompanyList';
import Container from '../components/Container';
import PageLaout from '../components/PageLaout';

export default function Companies() {
  return (
    <PageLaout>
      <Container>
        <div className='container mx-auto mt-4  text-sm flex-1 py-8'>
          <h2 className='text-2xl font-bold text-blue-800 mb-6'>
            Company List
          </h2>
          <CompanyList />
        </div>
      </Container>
    </PageLaout>
  );
}
