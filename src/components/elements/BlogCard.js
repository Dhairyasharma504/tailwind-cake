import React from 'react';
import Description from '../atoms/Description';
import Subtitle from '../atoms/Subtitle';

function BlogCard() {
  return (
    <div>
      <div className=" grid md:grid-cols-2 grid-cols-1 group ">
        <div className="relative">
          <img
            src="https://i.ibb.co/HxkBZQM/img-1.png"
            alt="stairs"
            className=" h-full"
          />
          <div className="bg-white absolute top-0 left-0">
            <p className="text-base leading-4 py-3 px-5 text-gray-800 dark:text-white dark:bg-gray-900">
              News
            </p>
          </div>
        </div>
        <div className="p-6 py-10 space-y-8 border border-gray-500 last:border-x-0">
          <Subtitle subtitle="Tomato, black olive, feta & anchovy tart ulla mco laboris" />
          <Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip." />
          <div className="transition  ease-in-out delay-150  group-hover:translate-x-4  duration-700">
            <Description
              TextBrand
              TextUpper
              UnderLine
              description=" learn more"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;