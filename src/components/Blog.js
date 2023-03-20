import React from 'react';
import PrimaryButton from './atoms/PrimaryButton';
import BlogCard from './elements/BlogCard';
import Heading from './elements/Heading';

function Blog() {
  return (
    <div className=" container px-3 mx-auto mb-16">
      <div className="flex justify-between items-center  py-14 ">
        <Heading heading="Food Lover's Say " />
        <PrimaryButton label="more blog" />
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <BlogCard /> <BlogCard />
      </div>
    </div>
  );
}

export default Blog;
