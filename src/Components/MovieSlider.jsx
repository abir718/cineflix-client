import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const MovieSlider = ({ movies = [], title = 'Movies', path = "/" }) => {
    return (
        <div className="w-[95%] mx-auto mt-8">
            <div className="flex gap-3 items-center">
                <div className="w-[8px] h-[38px] bg-[#DD003F]"></div>
                <Link to={path} className='flex items-center gap-3'>
                    <p className="text-3xl font-medium text-white hover:text-[#DD003F] transition duration-300">{title}</p>
                    <MdOutlineArrowForwardIos className='text-[#DD003F] size-8 relative top-[3px]' />
                </Link>
            </div>

            <div className="mx-auto w-[95%] mt-3">
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={10}
                    slidesPerGroup={6}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.3,
                            slidesPerGroup: 1,
                            centeredSlides: false,
                            loop: true,
                        },
                        480: {
                            slidesPerView: 1.5,
                            slidesPerGroup: 1,
                            centeredSlides: false,
                            loop: true,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 2,
                            centeredSlides: false,
                            loop: false,
                        },
                        1280: {
                            slidesPerView: 6,
                            slidesPerGroup: 6,
                            centeredSlides: false,
                            loop: false,
                        },
                    }}
                    speed={600}

                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className="px-2">
                                <div className="bg-[#232323] p-3 w-fit rounded-lg group">
                                    <img
                                        className="w-60 mx-auto rounded-lg transition duration-300 group-hover:brightness-75"
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.original_title}
                                    />
                                    <div className="flex justify-between mt-2">
                                        <Link to={`/movie-details/${movie.id}`}>
                                            <h1 className="text-white w-44 text-lg h-14 hover:text-[#DD003F] transition duration-300 cursor-pointer">
                                                {movie.title}
                                            </h1>
                                        </Link>
                                        <p className="text-sm font-medium text-gray-400 mt-1">⭐ {Math.round(movie.vote_average)}/10</p>
                                    </div>
                                    <div className="flex items-center justify-between">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default MovieSlider;
