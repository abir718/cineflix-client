import React from 'react';
import BreakingBad from '../Slides/BreakingBad';
import Sopranos from '../Slides/Sopranos';
import GameOfThrones from '../Slides/GameOfThrones';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';
import StrangerThings from '../Slides/StrangerThings';
import TheWalkingDead from '../Slides/TheWalkingDead';
import DunePartTwo from '../Slides/DunePartTwo';
import MissionImpossible from '../Slides/MissionImpossible';
import Oppenheimer from '../Slides/Oppenheimer';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-[#DD003F] font-light cursor-pointer z-10" onClick={onClick}><MdOutlineArrowForwardIos />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-[#DD003F] font-light cursor-pointer z-10" onClick={onClick}><MdOutlineArrowBackIosNew />
        </div>
    );
}

function MovieSlides() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="w-[85%] mx-auto relative">
            <Slider {...settings}>
                <div>
                    <DunePartTwo></DunePartTwo>
                </div>
                <div>
                    <MissionImpossible></MissionImpossible>
                </div>
                <div>
                    <Oppenheimer></Oppenheimer>
                </div>
                <div>
                    <StrangerThings></StrangerThings>
                </div>
                <div>
                    <TheWalkingDead></TheWalkingDead>
                </div>
            </Slider>
        </div>
    );
}

export default MovieSlides;
