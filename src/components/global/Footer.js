import React from 'react';
import Description from '../atoms/Description';
import PrimaryButton from '../atoms/PrimaryButton';
import Subtitle from '../atoms/Subtitle';

function Footer() {
  return (
    <div>
      <footer className=" text-lightShade container mx-auto px-4">
        <div className="grid md:grid-cols-3 grid-cols-1 ">
          <div className=" ">
            <Description description="Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat." />

            <div className="flex space-x-10 my-10">
              <PrimaryButton
                backgroundTransparent
                TextBrand
                TextHover
                label="facebook"
              />{' '}
              <PrimaryButton
                backgroundTransparent
                TextBrand
                TextHover
                label="facebook"
              />{' '}
              <PrimaryButton
                backgroundTransparent
                TextBrand
                TextHover
                label="facebook"
              />
            </div>
          </div>
          <div className=" text-center">
            <div>
              <Subtitle subtitle="location" />
              <Description
                TextLarge
                description="4736 Poe Lane, HOT SPRINGS, Montana-59845 "
              />{' '}
            </div>
          </div>
          <div className=" text-center">
            <div>
              <Subtitle subtitle="contact" />
              <Description TextLarge description="913-473-7000 " />{' '}
              <Description description="dhairyasharma2311@gmail.com" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
