import React from 'react';
import Title from '../atoms/Title';

function Heading({ heading }) {
  return (
    <div className="max-w-2xl  ">
      <Title TextSmall title={heading} />
    </div>
  );
}

export default Heading;
