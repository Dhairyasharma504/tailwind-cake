import React from 'react';
import Blog from '../components/Blog';
import Layout from '../components/global/Layout';

const blog = () => {
  return (
    <Layout heroBgImage="/images/bghero1.jpg">
      <Blog />
      <div />
    </Layout>
  );
};

export default blog;
