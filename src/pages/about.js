import React from 'react';
import About from '../components/About';
import Layout from '../components/global/Layout';

const about = () => {
  return (
    <Layout heroBgImage="/images/bghero1.jpg">
      <About />
      <div />
    </Layout>
  );
};

export default about;
