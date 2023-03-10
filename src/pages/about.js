import React from 'react';
import About from '../components/About';
import Layout from '../components/global/Layout';
import Price from '../components/Price';

const about = () => {
  return (
    <Layout heroBgImage="/images/bghero1.jpg">
      <About />
      <Price />
      <div />
    </Layout>
  );
};

export default about;
