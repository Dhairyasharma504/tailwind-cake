import Link from 'next/link';
import React from 'react';

function PrimaryButton({ label, backgroundTransparent, TextBrand, TextHover }) {
  return (
    <div>
      <Link href="/">
        <button
          type="button"
          className={` ${
            backgroundTransparent ? ' bg-transparent' : ' bg-brand'
          }

          ${TextBrand ? ' text-brand' : ' text-darkShade'}
          ${TextHover ? ' hover:text-lightShade' : 'hover:text-brand'}
          inline-block  font-secondary uppercase  border border-brand  duration-500  ease-in-out
         px-8 py-5  text-base font-normal hover:bg-transparent
        `}
        >
          {label}
        </button>
      </Link>
    </div>
  );
}

export default PrimaryButton;
