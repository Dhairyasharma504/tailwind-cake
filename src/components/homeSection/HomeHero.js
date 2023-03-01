import React from 'react';
import Slider from 'react-slick';
import PrimaryButton from '../atoms/PrimaryButton';

import Title from '../atoms/Title';

import HeroWrapper from '../global/HeroWrapper';

const data = [
  { id: 1, bgImage: '/images/bghero1.jpg' },
  { id: 1, bgImage: '/images/bg3.webp' },
];
function SliderItem({ item }) {
  return (
    <HeroWrapper bgImage={item.bgImage}>
      <div className="bg-black/20 md:h-[80vh] h-[100vh]">
        <div className="  p-6  h-full flex flex-col justify-center items-start  w-full text-lightShade ">
          <div className=" ">
            {' '}
            <Title title="healthy made delicious cake" />
            <div className="mt-4">
              <PrimaryButton label="order now" />
            </div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
}
function HomeHero() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings}>
      {data.map((item) => (
        <SliderItem key={item.id} item={item} />
      ))}
    </Slider>
  );
}

export default HomeHero;
