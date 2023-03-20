import React from 'react';
import dynamic from 'next/dynamic';
import Blog from '../components/Blog';

import Layout from '../components/global/Layout';

import Price from '../components/Price';
import Products from '../components/Products';
import Rating from '../components/Rating';

const About = dynamic(() => import('../components/About'), {
  ssr: false,
});
const index = () => {
  return (
    <div>
      <Layout isHome>
        <About />
        <Products />
        <Rating />
        <Blog />
        <Price />
      </Layout>
    </div>
  );
};

export default index;
