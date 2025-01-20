import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay } from "react-icons/fa6";



const Slide = ({theme}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="lg:w-[80%] w-[88%]  mx-auto ">
        <div className="py-10">
            <Slider {...settings}>

                <div className={`${theme === "dark" ? "text-white" : "text-black"}rounded-lg p-6`}>
                    <div className="flex items-center justify-between lg:mx-24">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-2 my-2">
                            <p className="bg-blue-500 text-sm px-2 py-1 rounded-md">Sci-Fi</p>
                            <p className="bg-yellow-500 text-sm px-2 py-1 rounded-md">Adventure</p>
                            <p className="bg-[#DD003F] text-sm px-2 py-1 rounded-md">Drama</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="lg:text-6xl text-2xl font-bold">INTERSTELLAR <span className="text-gray-400 text-lg">2014</span></p>
                            <div className="flex lg:gap-4 gap-3 text-gray-400">
                                <p className="text-sm">⭐ 8.6/10</p>
                                <p className="text-sm"> 2h 49m</p>
                                <p className="text-sm"> PG-13</p>
                                <p className="text-sm">7 November 2014</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-400 w-fit lg:w-[800px]">A breathtaking sci-fi odyssey that explores humanity`s quest for survival through interstellar travel, blending love, sacrifice, and the mysteries of space and time.</p>
                        </div>

                        <div className="mt-4 flex gap-6 items-center">
                            <button className="bg-[#DD003F] text-white px-4 py-2 rounded-md mr-2">
                                <a href="https://en.wikipedia.org/wiki/Interstellar_(film)">Read More</a>
                            </button>
                            <a className="flex items-center gap-2" href="https://www.youtube.com/watch?v=zSWdZVtXT7E">
                            <button className="text-[#DD003F] flex gap-2 items-center justify-center border-2 border-[#DD003F] rounded-full w-8 h-8 "> <FaPlay  /> </button>
                            <p className="text-[#DD003F]">Watch Trailer</p>
                            </a>
                        </div>
                    </div>      
                    <div className="w-[350px]  hidden md:flex">
                        <img className="rounded-lg" src="https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/08/19085635/gEU2QniE6E77NI6lCU6MxlNBvIx-scaled.jpg" alt="" />
                    </div>
                    </div>
                </div>

                <div className={`${theme === "dark" ? "text-white" : "text-black"}rounded-lg p-6`}>
                    <div className="flex items-center justify-between lg:mx-24">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-2 my-2">
                            <p className="bg-blue-500 text-sm px-2 py-1 rounded-md">Sci-Fi</p>
                            <p className="bg-yellow-500 text-sm px-2 py-1 rounded-md">Action</p>
                            <p className="bg-[#DD003F] text-sm px-2 py-1 rounded-md">Drama</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="lg:text-6xl text-2xl  font-bold">Avengers: Endgame <span className="text-gray-400 text-lg"> 2019</span></p>
                            <div className="flex lg:gap-4 gap-3 text-gray-400">
                                <p className="text-sm">⭐ 8.4/10</p>
                                <p className="text-sm"> 3h 1m</p>
                                <p className="text-sm"> PG-13</p>
                                <p className="text-sm">26 April 2019</p>
                            </div>
                            <div>
                                <p className="text-gray-400 w-fit lg:w-[800px]">A spectacular finale to the Infinity Saga, where the Avengers band together in a high-stakes battle to undo Thanos devastating snap and restore balance to the universe.</p>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-6">
                        <button className="bg-[#DD003F] text-white px-4 py-2 rounded-md mr-2">
                                <a href="https://en.wikipedia.org/wiki/Avengers:_Endgame">Read More</a>
                            </button>
                            <a className="flex items-center gap-2" href="https://www.youtube.com/watch?v=zSWdZVtXT7E">
                            <button className="text-[#DD003F] flex gap-2 items-center justify-center border-2 border-[#DD003F] rounded-full w-8 h-8 "> <FaPlay  /> </button>
                            <p className="text-[#DD003F]">Watch Trailer</p>
                            </a>
                        </div>

                    </div>      
                    <div className="w-[350px] hidden md:flex">
                        <img className="rounded-lg" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" />
                    </div>
                    </div>
                </div>

                <div className={`${theme === "dark" ? "text-white" : "text-black"}rounded-lg p-6`}>
                    <div className="flex items-center justify-between lg:mx-24">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-2 my-2">
                            <p className="bg-blue-500 text-sm px-2 py-1 rounded-md">Sci-Fi</p>
                            <p className="bg-yellow-500 text-sm px-2 py-1 rounded-md">Adventure</p>
                            <p className="bg-[#DD003F] text-sm px-2 py-1 rounded-md">Thriller</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="lg:text-6xl text-2xl  font-bold">INCEPTION <span className="text-gray-400 text-lg">2010</span></p>
                            <div className="flex gap-4 text-gray-400">
                                <p className="text-sm">⭐ 8.8/10</p>
                                <p className="text-sm"> 2h 28m</p>
                                <p className="text-sm"> PG-13</p>
                                <p className="text-sm">16 July 2010</p>
                            </div>
                            
                        </div>
                        <div>
                            <p className="text-gray-400 w-fit lg:w-[800px]">A mind-bending heist thriller that blurs the lines between dreams and reality, as a skilled thief ventures into the subconscious to plant an idea that could change everything.</p>
                        </div>
                        <div className="mt-4 flex items-center gap-6 ">
                        <button className="bg-[#DD003F] text-white px-4 py-2 rounded-md mr-2">
                                <a href="https://en.wikipedia.org/wiki/Inception">Read More</a>
                            </button>
                            <a className="flex items-center gap-2" href="https://www.youtube.com/watch?v=zSWdZVtXT7E">
                            <button className="text-[#DD003F] flex gap-2 items-center justify-center border-2 border-[#DD003F] rounded-full w-8 h-8 "> <FaPlay  /> </button>
                            <p className="text-[#DD003F]">Watch Trailer</p>
                            </a>
                        </div>
        
                    </div>      
                    <div className="w-[350px] hidden md:flex">
                        <img className="rounded-lg" src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg" alt="" />
                    </div>
                    </div>
                </div>






                
            </Slider>
        </div>
        </div>

    );
};

export default Slide;