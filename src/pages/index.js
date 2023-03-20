import React from 'react';
import dynamic from 'next/dynamic';
import Blog from '../components/Blog';
import Price from '../components/Price';
import Products from '../components/Products';
import Rating from '../components/Rating';

const Layout1 = dynamic(() => import('../components/global/Layout'), {
  ssr: false,
});

const About = dynamic(() => import('../components/About'), {
  ssr: false,
});
const index = () => {
  return (
    <div>
      <Layout1 isHome>
        <About />
        <Products />
        <Rating />
        <Blog />
        <Price />
      </Layout1>
    </div>
  );
};

export default index;
