import React from 'react';
import Blog from '../components/Blog';
import Layout from '../components/global/Layout';
import Rating from '../components/Rating';

const blog = () => {
  return (
    <Layout heroBgImage="/images/bghero1.jpg">
      <Blog />
      <Rating />
      <div />
    </Layout>
  );
};

export default blog;
