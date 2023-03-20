import React from 'react';

function Description({
  description,
  TextBrand,
  TextLarge,
  TextUpper,
  UnderLine,
}) {
  return (
    <p
      className={` font-secondary  font-light  underline-offset-8  ${
        TextBrand ? ' text-brand' : ' text-lightShade'
      }

      ${TextLarge ? ' md:text-2xl text-xl' : ' md:text-lg text-base'}


      ${TextUpper ? '  uppercase  ' : '  lowercase '}

      ${UnderLine ? ' underline ' : '  no-underline'}
      `}
    >
      {description}
    </p>
  );
}

export default Description;
