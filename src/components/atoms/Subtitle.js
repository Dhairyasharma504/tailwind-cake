import React from 'react';

function Subtitle({ TextWhite, subtitle, TextSmall }) {
  return (
    <div>
      <h3
        className={` ${TextWhite ? ' text-lightShade ' : ' text-brand'}
        ${TextSmall ? ' md:text-3xl text-xl' : 'md:text-4xl text-2xl'}
        font-normal  text-brand  font-primary`}
      >
        {subtitle}
      </h3>
    </div>
  );
}

export default Subtitle;
