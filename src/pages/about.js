import React from 'react';
import dynamic from 'next/dynamic';

import Price from '../components/Price';

const About = dynamic(() => import('../components/About'), {
  ssr: false,
});
const Layout = dynamic(() => import('../components/global/Layout'), {
  ssr: false,
});
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
