import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderComponent(props) {
  const { slidesToShow, data, rowItem } = props;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow || 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" px-5 mx-auto ">
      <Slider {...settings}>
        {data?.map((item) => {
          return rowItem(item);
        })}
      </Slider>
    </div>
  );
}
export default SliderComponent;
