import React, { useEffect, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';

function StrangerThings() {
    const [tvData, setTvData] = useState(null);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/66732?api_key=${API_KEY}&append_to_response=videos`)
            .then(res => res.json())
            .then(data => setTvData(data));
    }, [API_KEY]);

    const bgImage = tvData?.backdrop_path
        ? `https://image.tmdb.org/t/p/original${tvData.backdrop_path}`
        : '';

    const posterImage = tvData?.poster_path
        ? `https://image.tmdb.org/t/p/w500${tvData.poster_path}`
        : '';

    const trailerKey = tvData?.videos?.results?.find(v => v.type === "Trailer" && v.site === "YouTube")?.key;

    return (
        <div className='w-full mt-10'>
            <div className="relative h-full px-4 rounded-xl overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-10 p-4 md:p-10 text-white">
                    {posterImage ? (
                        <img
                            src={posterImage}
                            alt={tvData?.title || "Movie poster"}
                            className="w-[200px] md:w-[280px] lg:w-[300px] h-auto rounded-lg shadow-lg"
                        />
                    ) : null}
                    <div className="flex flex-col justify-center w-full">
                        <h1 className="text-2xl md:text-5xl font-bold">
                            {tvData?.name}
                            <span className="text-gray-400 text-lg md:text-3xl"> ({tvData?.first_air_date?.slice(0, 4)})</span>
                        </h1>
                        <p className="text-sm border border-white rounded px-2 w-fit my-2">
                            {tvData?.adult ? 'R-Rated' : 'TV-MA'} • {tvData?.genres?.map(g => g.name).join('  ')}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                            <div className="radial-progress text-[#DD003F] border-2 border-[#212121] bg-[#212121]" style={{ "--value": Math.round(tvData?.vote_average * 10), "--size": "4rem" }} role="progressbar"
                                aria-valuenow={Math.round(tvData?.vote_average * 10)}>{Math.round(tvData?.vote_average * 10)}%
                            </div>

                            <Link to={`/tv-details/${tvData?.id}`}>
                                <button className="border-[2px] border-[#DD003F] flex items-center gap-2 rounded-full px-4 py-2 bg-[#DD003F] text-[#212121] hover:text-[#DD003F] hover:bg-transparent transition duration-500 cursor-pointer">
                                    Details
                                </button>
                            </Link>                            {trailerKey && (
                                <a href={`https://www.youtube.com/watch?v=${trailerKey}`} className="text-[#DD003F] border-[2px] border-[#DD003F] flex items-center gap-2 rounded-full px-4 py-2  hover:bg-[#DD003F] hover:text-[#212121] transition duration-500"><FaPlay />Play Trailer</a>
                            )}
                        </div>
                        <div className="mt-4">
                            <h2 className="text-2xl font-semibold mb-1">Overview</h2>
                            <p className="text-gray-400 max-w-[800px] line-clamp-6 lg:line-clamp-none">In the 1980s town of Hawkins, Indiana, a young boy vanishes, uncovering a secret government experiment and a terrifying alternate dimension—the Upside Down. His friends, joined by a mysterious girl with psychic powers, confront supernatural horrors and conspiracies. Together, they battle monstrous forces threatening their world, friendship, and reality itself in this nostalgic sci-fi thriller.</p>
                            {tvData?.created_by?.[0] && (
                                <p className='text-xl font-medium mt-3'>{tvData.created_by[0].name}</p>
                            )}
                            <p className='text-gray-400'>Creator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StrangerThings