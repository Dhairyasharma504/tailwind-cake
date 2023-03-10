import React from 'react';
import About from '../components/About';
import Blog from '../components/Blog';

import Layout from '../components/global/Layout';

import Price from '../components/Price';
import Products from '../components/Products';
import Rating from '../components/Rating';

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
