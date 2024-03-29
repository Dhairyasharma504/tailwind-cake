import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiCake } from 'react-icons/hi';
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

  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 200) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener('scroll', setFixed);
  return (
    <div
      className={` ${
        fix ? 'fixed  bg-darkShade shadow-xl' : 'bg-black'
      }  md:p-4 p-0  md: top-0 z-50  w-full duration-800  `}
    >
      <div className="flex justify-between items-center  ">
        <div className=" flex-1 p-5 ">
          <div className="flex space-x-3 items-center absolute top-7 left-2">
            <FaFacebook className=" w-6 h-6 text-lightShade hover:text-brand" />
            <FaInstagram className=" w-6 h-6 text-lightShade hover:text-brand" />
            <FaTwitter
              className="
              w-6
              h-6
              text-lightShade hover:text-brand"
            />
          </div>
        </div>
        <div className="flex ">
          <div className="animate-bounce   text-white  flex items-center  ">
            <HiCake className="md:h-10 h-8 md:w-10 w-8  " />
          </div>
          <Link href="/">
            <Image
              className=" mx-auto"
              src="/images/Cake and Bakery Logo 3.png"
              alt="logo"
              height={100}
              width={200}
            />
          </Link>
        </div>{' '}
        <div className=" flex-1 text-right md:visible collapse">
          <PrimaryButton
            TextBrand
            TextHover
            backgroundTransparent
            label="Call Us: +10 783 346 4378"
          />
        </div>
      </div>
      <div className=" z-20">
        <div className="container mx-auto">
          <nav className="">
            <div className="flex items-center justify-around">
              <div className="flex   sm:hidden  ">
                <button
                  onClick={() => setActive(!active)}
                  type="button"
                  className="inline-flex items-center justify-center rounded-md ml-28 absolute top-7 right-2 "
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
                  <div className="flex space-x-10 pt-6">
                    {navbarMenu.map((item) => (
                      <Link href={item.navLink} key={item.id}>
                        <span
                          className="relative font-medium   text-lightShade before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-brand before:transition hover:before:scale-x-100"
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
            <div className="sm:hidden flex flex-col space-y-4 text-center h-full   bg-brand/80 py-6">
              {navbarMenu.map((item) => (
                <Link href={item.navLink} key={item.id}>
                  <span
                    className="relative font-medium text-lightShade before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-brand before:transition hover:before:scale-100"
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
