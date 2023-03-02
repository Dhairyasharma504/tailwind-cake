import React from 'react';
import PriceCard from './elements/PriceCard';
import SliderComponent from './elements/Slider_Hero';
import Heading from './elements/Heading';

const reviewHero = [
  {
    id: 1,
    name: 'samual',
    label: 'cake',
    image: '/images/about1.jpg.webp',
  },
  {
    id: 2,
    name: 'samual',
    label: 'cake',
    image: '/images/about1.jpg.webp',
  },
  {
    id: 3,
    name: 'samual',
    label: 'cake',
    image: '/images/about1.jpg.webp',
  },
  {
    id: 4,
    name: 'samual',
    label: 'cake',
    image: '/images/about1.jpg.webp',
  },
  {
    id: 5,
    name: 'samual',
    label: 'cake',
    image: '/images/about1.jpg.webp',
  },
];
function Price() {
  return (
    <div className="container mx-auto px-4">
      <div className=" flex justify-center text-center  ">
        <Heading heading="most popular cake " />
      </div>

      <SliderComponent
        // eslint-disable-next-line react/no-unstable-nested-components
        rowItem={(item) => <PriceCard key={item.id} item={item} />}
        data={reviewHero}
      />
    </div>
  );
}

export default Price;
