import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import PrimaryButton from '../atoms/PrimaryButton';

const navbarMenu = [
  { navItem: 'Home', navLink: '/' },
  { navItem: 'About', navLink: '/about' },
  { navItem: 'Blog', navLink: '/blog' },
  { navItem: 'Contact', navLink: '/contact' },
];

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <div className="  p-4">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="flex space-x-3">
            <FaFacebook className=" w-6 h-6 text-lightShade" />
            <FaInstagram className=" w-6 h-6 text-lightShade" />
            <FaTwitter
              className="
              w-6
              h-6
              text-lightShade"
            />
          </div>
        </div>
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png.webp"
              alt="logo"
              height={100}
              width={200}
            />
          </Link>
        </div>{' '}
        <div className="">
          <PrimaryButton
            TextBrand
            TextHover
            backgroundTransparent
            label="Call Us: +10 783 346 4378"
          />
        </div>
      </div>
      <div className=" z-20 p-4">
        <div className="container mx-auto">
          <nav className="">
            <div className="flex items-center justify-around">
              <div className="flex items-center sm:hidden">
                <button
                  onClick={() => setActive(!active)}
                  type="button"
                  className="inline-flex items-center justify-center rounded-md ml-28 "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {active ? (
                    <AiOutlineClose
                      className="h-10 w-12 md:w-24 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <GiHamburgerMenu
                      className="h-8 w-12 md:w-24 text-white"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
              <div className="flex font-poppins items-center justify-end sm:items-stretch sm:justify-center">
                <div className="hidden sm:block">
                  <div className="flex space-x-8">
                    {navbarMenu.map((item) => (
                      <Link href={item.navLink} key={item.id}>
                        <span
                          className="p-2 text-white rounded-md text-base font-medium hover:text-primaryDark transition duration-1000 ease-in-out"
                          aria-current="page"
                        >
                          {item.navItem}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {active && (
            <div className="sm:hidden flex flex-col space-y-4 text-center bg-primaryDark/30 px-2 py-6">
              {navbarMenu.map((item) => (
                <Link href={item.navLink} key={item.id}>
                  <span
                    className="text-white px-5 py-2 rounded-md text-base font-medium hover:text-primaryDark transition duration-1000 ease-in-out"
                    aria-current="page"
                  >
                    {item.navItem}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
