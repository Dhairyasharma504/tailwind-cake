import React from 'react';
import PriceCard from './elements/PriceCard';
import SliderComponent from './elements/Slider_Hero';
import Heading from './elements/Heading';

const reviewHero = [
  {
    id: 1,
    name: 'chocolate',
    label: 'cake',
    image: '/images/choclate cake/pexels-meryem-adak-11647298.jpg',
    category: 'fruitCake',
    type: 'veg',
  },
  {
    id: 2,
    name: 'valvet',
    label: 'cake',
    image: '/images/valvet cake/pexels-photo-6211054.jpeg',
    category: 'fruitCake',
    type: 'nonVeg',
  },
  {
    id: 3,
    name: 'fruit-cake',
    label: 'cake',
    image: '/images/fruit cake/pexels-photo-3913295.jpeg',
  },
  {
    id: 4,
    name: 'valvet-cake',
    label: 'cake',
    image: '/images/valvet cake/pexels-photo-140831.webp',
  },
  {
    id: 5,
    name: 'fruit-cake',
    label: 'cake',
    image: '/images/fruit cake/pexels-photo-7525189.webp',
  },
];
function Price() {
  return (
    <div className="container px-3 mx-auto  pb-11">
      <div className=" flex justify-center py-10 text-center  mb-10 ">
        <Heading heading="most popular cake " />
      </div>
      {/* <CategoryTabs /> */}
      <SliderComponent
        // eslint-disable-next-line react/no-unstable-nested-components
        rowItem={(item) => <PriceCard key={item.id} item={item} />}
        data={reviewHero}
      />
    </div>
  );
}

export default Price;
