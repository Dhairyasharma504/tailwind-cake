import React from 'react';

function Title({ TextSmall, title }) {
  return (
    <div>
      <h1
        className={`${
          TextSmall ? 'text-4xl md:text-5xl' : ' text-5xl md:text-7xl'
        } font-normal pb-3 font-primary text-lightShade capitalize`}
      >
        {title}
      </h1>
    </div>
  );
}

export default Title;
