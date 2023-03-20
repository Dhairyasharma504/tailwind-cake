import React from 'react';
import dynamic from 'next/dynamic';
import Blog from '../components/Blog';
import Rating from '../components/Rating';

const Layout = dynamic(() => import('../components/global/Layout'), {
  ssr: false,
});
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
