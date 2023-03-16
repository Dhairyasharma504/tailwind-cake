import React from 'react';
import { TbLocation } from 'react-icons/tb';
import { BsTelephone } from 'react-icons/bs';

import Description from '../atoms/Description';
import PrimaryButton from '../atoms/PrimaryButton';
import Subtitle from '../atoms/Subtitle';

function Footer() {
  return (
    <div>
      <div className=" border-t  border-gray-500 my-12 max-w-screen-lg mx-auto  mt-24" />
      <footer className="    ">
        <div className="grid md:grid-cols-3 grid-cols-1  ">
          <div className=" flex-1 px-10 ">
            <Description description="Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat." />

            <div className="md:flex space-y-10 my-10 md:space-y-0 space-x-2 text-center">
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
                label="Instagram"
              />{' '}
              <PrimaryButton
                backgroundTransparent
                TextBrand
                TextHover
                label="twitter"
              />
            </div>
          </div>
          <div className=" text-center flex-1 ">
            <div className="w-1/2 mx-auto">
              <TbLocation className="text-white mx-auto my-4 w-10 h-10 " />
              <div className=" py-4">
                <Subtitle subtitle="location" />
              </div>
              <Description
                TextLarge
                description="4736 Poe Lane, HOT SPRINGS, Montana-59845 "
              />
            </div>
          </div>
          <div className=" text-center flex-1">
            <div className="w-1/2 mx-auto">
              <BsTelephone className="text-white mx-auto my-4 w-10 h-10 " />
              <div className="py-4">
                {' '}
                <Subtitle subtitle="contact" />
              </div>
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
