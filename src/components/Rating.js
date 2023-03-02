import React from 'react';
import Heading from './elements/Heading';
import RatingCard from './elements/RatingCard';

const cardData = [
  {
    id: '1',
    text: 'Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna',
    img: '/images/customer1.png.webp',
    Name: 'Wilma Mumduya',
  },
  {
    id: '2',
    text: 'Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna',
    img: '/images/customer1.png.webp',
    Name: 'Wilma Mumduya',
  },
  {
    id: '3',
    text: 'Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna',
    img: '/images/customer1.png.webp',
    Name: 'Wilma Mumduya',
  },
];

function Rating() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className=" flex justify-center text-center  ">
        <Heading heading="Food Lover's Say " />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1">
        {cardData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-500  first:border-x-0 last:border-x-0"
          >
            <RatingCard
              subtitle={item.text}
              img={item.img}
              UserName={item.Name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rating;
