import React from 'react';
import dynamic from 'next/dynamic';
import Contact from '../components/Contact';

const Layout = dynamic(() => import('../components/global/Layout'), {
  ssr: false,
});
const contact = () => {
  return (
    <div>
      <Layout heroBgImage="/images/bghero1.jpg">
        <div>
          <Contact />
        </div>
      </Layout>
    </div>
  );
};

export default contact;
