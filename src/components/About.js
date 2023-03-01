import React from 'react';
import Image from 'next/image';
import Description from './atoms/Description';
import Subtitle from './atoms/Subtitle';
import Heading from './elements/Heading';

function About() {
  return (
    <div className=" container mx-auto px-4  ">
      <div className=" flex justify-center text-center  ">
        <Heading heading="This is Schilers. Awesome Food Theme. Purchase it and eat Burgers. " />
      </div>
      <div className="grid  md:grid-cols-2 grid-cols-1  max-w-screen-lg mx-auto gap-3 py-8">
        <div className=" flex flex-col justify-center  space-y-5 ">
          <h4 className=" py-5  max-w-xl">
            <Subtitle
              subtitle="This is Schilers. Awesome Food Theme.
Purchase it and eat Burgers."
            />
          </h4>
          <p>
            <Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum." />
          </p>
          <p>
            <Description description="Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum." />
          </p>
        </div>
        <div className=" bg-zinc-300 text-lightShade">
          <Image
            src="/images/about1.jpg.webp"
            alt="Picture of the author"
            width={550}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
