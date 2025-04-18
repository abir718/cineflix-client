import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieSlider = ({ movies = [], title = 'Movies' }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 6,
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
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    return (
        <div className="w-[95%] mx-auto py-6">
            <div className="flex gap-3 items-center">
                <div className="w-[10px] h-[40px] bg-[#DD003F]"></div>
                <p className="text-3xl font-bold text-white">{title}</p>
            </div>

            <div className="mx-auto w-[92%] mt-4">
                <Slider {...settings}>
                    {movies.map((movie) => (
                        <div key={movie.id} className="px-2">
                            <div className="bg-[#232323] p-3 rounded-lg group">
                                <img
                                    className="w-52 mx-auto rounded-lg group-transition duration-300 group-hover:brightness-75"
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.original_title}
                                />
                                <div className="flex justify-between mt-2">
                                    <Link to={`/movie-details/${movie.id}`}>
                                        <h1 className="text-white w-40 text-lg h-14 hover:text-[#DD003F] transition duration-300 cursor-pointer">
                                            {movie.title}
                                        </h1>
                                    </Link>
                                    <p className="text-sm font-medium text-gray-400 mt-1">
                                        ⭐ {Math.round(movie.vote_average)}/10
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 justify-between">
                                    <button className="py-1 px-3 border-[2px] border-[#DD003F] text-[#DD003F] rounded-full cursor-pointer hover:bg-[#DD003F] hover:text-[#232323] transition duration-300 font-medium">
                                        + Watchlist
                                    </button>
                                    <div className="hover:bg-[#363636] p-3 rounded-full transition duration-300">
                                        <button className="w-6 h-6 flex items-center justify-center font-medium text-xl border-[2px] border-[#DD003F] text-[#DD003F] rounded-full cursor-pointer">
                                            i
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MovieSlider;
