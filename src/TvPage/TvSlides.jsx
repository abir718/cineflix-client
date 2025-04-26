import React from 'react';
import BreakingBad from '../Slides/BreakingBad';
import Sopranos from '../Slides/Sopranos';
import GameOfThrones from '../Slides/GameOfThrones';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-[#DD003F] cursor-pointer z-10" onClick={onClick}><MdOutlineArrowForwardIos />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-[#DD003F] cursor-pointer z-10" onClick={onClick}><MdOutlineArrowBackIosNew />
    </div>
  );
}

function TvSlides() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="max-w-[1400px] mx-auto relative">
      <Slider {...settings}>
        <div>
          <BreakingBad />
        </div>
        <div>
          <Sopranos />
        </div>
        <div>
          <GameOfThrones />
        </div>
      </Slider>
    </div>
  );
}

export default TvSlides;
