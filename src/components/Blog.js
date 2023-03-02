import React from 'react';
import PrimaryButton from './atoms/PrimaryButton';
import BlogCard from './elements/BlogCard';
import Heading from './elements/Heading';

function Blog() {
  return (
    <div className=" container mx-auto ">
      <div className="flex justify-between items-center px-10">
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
