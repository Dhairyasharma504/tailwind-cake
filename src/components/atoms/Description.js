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
      className={`  font-light  underline-offset-8  ${
        TextBrand ? ' text-brand' : ' text-lightShade'
      }

      ${TextLarge ? ' text-2xl' : ' text-lg'}


      ${TextUpper ? '  uppercase  ' : '  lowercase '}

      ${UnderLine ? ' underline ' : '  no-underline'}
      `}
    >
      {description}
    </p>
  );
}

export default Description;
