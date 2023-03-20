import React from 'react';

function HeroWrapper({ bgImage, isSmall, children }) {
  return (
    <div className="md:py-16 py-10">
      <div
        style={{
          backgroundImage: `url(${bgImage || '/images/bg hero1.jpg'})`,
        }}
        className={`w-full ${
          isSmall ? 'md:h-[65vh] h-[65vh]' : 'md:h-[80vh] h-[80vh]'
        }  bg-bottom  bg-cover`}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
}

export default HeroWrapper;
