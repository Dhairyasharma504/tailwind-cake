import React from 'react';
import Heading from './elements/Heading';
import PrimaryButton from './atoms/PrimaryButton';

function InstagramGallery() {
  return (
    <div>
      <div className="   ">
        <Heading heading="  Follow us on Instagram" />
        <PrimaryButton
          backgroundTransparent
          TextBrand
          TextHover
          label="cakeshop"
        />
      </div>
    </div>
  );
}

export default InstagramGallery;
