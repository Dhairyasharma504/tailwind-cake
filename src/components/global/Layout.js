import Footer from './Footer';
import HomeHero from '../homeSection/HomeHero';

import Navbar from './Navbar';
import Hero from './Hero';

function Layout({ isHome, heroBgImage, pageName, children }) {
  return (
    <div className=" ">
      <Navbar />
      {isHome ? (
        <HomeHero />
      ) : (
        <Hero bgImage={heroBgImage} pageName={pageName} />
      )}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
