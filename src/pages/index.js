import React from 'react';
import About from '../components/About';

import Layout from '../components/global/Layout';

const index = () => {
  return (
    <div>
      <Layout isHome>
        <About />
      </Layout>
    </div>
  );
};

export default index;
