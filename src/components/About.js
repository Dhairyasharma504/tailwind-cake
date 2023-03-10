import React from 'react';
import Image from 'next/image';
import Description from './atoms/Description';
import Subtitle from './atoms/Subtitle';
import Heading from './elements/Heading';

function About() {
  return (
    <div className=" container mx-auto px-4 mb-11 ">
      <div className=" flex justify-center text-center  ">
        <Heading heading="This is Schilers. Awesome Food Theme. Purchase it and eat Burgers. " />
      </div>
      <div className="grid  md:grid-cols-2 grid-cols-1  px-8 gap-3 py-8">
        <div className=" flex flex-col justify-center  space-y-5 ">
          <div className=" py-5  max-w-xl">
            <Subtitle
              subtitle="This is Schilers. Awesome Food Theme.
Purchase it and eat Burgers."
            />
          </div>
          <Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum." />
          <Description description="Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum." />
        </div>
        <div className=" bg-zinc-300 text-lightShade">
          <Image
            src="/images/about1.jpg.webp"
            alt="Picture of the author"
            width={850}
            height={850}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
