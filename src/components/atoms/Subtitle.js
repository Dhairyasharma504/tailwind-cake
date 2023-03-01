import React from 'react';

function Subtitle({ TextWhite, subtitle }) {
  return (
    <div>
      <h3
        className={` ${
          TextWhite ? ' text-lightShade ' : ' text-brand'
        }font-normal text-4xl text-brand  font-primary`}
      >
        {subtitle}
      </h3>
    </div>
  );
}

export default Subtitle;
