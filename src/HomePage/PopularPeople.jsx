import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PrevArrow from '../Components/PrevArrow';
import NextArrow from '../Components/NextArrow';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';


function PopularPeople() {
    const [people, setPeople] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/popular?language=en-US&page=1&api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setPeople(data.results));
    }, [API_KEY]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 4, slidesToScroll: 4 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
        ],
    };

    return (
        <div className="w-[95%] mx-auto py-6">
            <div className="flex gap-3 items-center">
                <div className="w-[8px] h-[38px] bg-[#DD003F]"></div>
                <Link to={`/popular-people`} className=' flex items-center gap-3'>
                <p className="text-3xl font-medium text-white hover:text-[#DD003F] transition duration-300">Popular People</p>
                <MdOutlineArrowForwardIos className='text-[#DD003F] size-8 relative top-[3px]'/>
                </Link>
            </div>

            <div className="mx-auto w-[95%] mt-4">
                <Slider {...settings}>
                    {people.map((person) => (
                        <div key={person.id} className="">
                            <div className=" p-3 rounded-lg group text-center">
                                <img
                                    className="w-40 h-40 object-cover mx-auto rounded-full group-hover:brightness-75 transition duration-300"
                                    src={`https://image.tmdb.org/t/p/h632${person.profile_path}`}
                                    alt={person.name}
                                />
                                <h1 className="text-white text-lg mt-3 hover:text-[#DD003F] transition duration-300 cursor-pointer">
                                    {person.name}
                                </h1>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default PopularPeople;
