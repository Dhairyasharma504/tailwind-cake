import React from 'react';

function Title({ TextSmall, title }) {
  return (
    <div>
      <h1
        className={`${
          TextSmall ? 'text-5xl' : ' text-7xl'
        } font-normal pb-3 font-primary text-lightShade capitalize`}
      >
        {title}
      </h1>
    </div>
  );
}

export default Title;
