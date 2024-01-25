import React from 'react';
import Showcase from '../components/ShowCase';
import Features from '../components/Features';
import Footer from '../components/Footer';
import PageLaout from '../components/PageLaout';

export default function Home() {
  return (
    <PageLaout>
      <Showcase />
      <Features />
    </PageLaout>
  );
}
