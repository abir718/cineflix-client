import React, { useEffect, useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';

function MissionImpossible() {
    const [movieData, setMovieData] = useState(null);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/575265?api_key=${API_KEY}&append_to_response=videos,credits`)
            .then(res => res.json())
            .then(data => setMovieData(data));
    }, [API_KEY]);

    const bgImage = movieData?.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`
        : '';

    const posterImage = movieData?.poster_path
        ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
        : '';

    const trailerKey = movieData?.videos?.results?.find(v => v.type === "Trailer" && v.site === "YouTube")?.key;

    return (
        <div className='w-full mt-10'>
            <div className="relative mx-auto h-full px-4 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${bgImage})` }}></div>
                <div className="relative z-10 flex flex-col lg:flex-row gap-10 p-4 md:p-10 text-white">
                    {posterImage ? (
                        <img
                            src={posterImage}
                            alt={movieData?.title || "Movie poster"}
                            className="w-[200px] md:w-[280px] lg:w-[300px] h-auto rounded-lg shadow-lg"
                        />
                    ) : null}
                    <div className="flex flex-col justify-center w-full">
                        <div className="flex lg:flex-row items-start lg:items-center text-2xl md:text-5xl font-bold">
                            <div>
                                <span className="hidden md:inline">Mission: Impossible -The </span>
                                <span>Final Reckoning</span>
                            </div>
                            <span className="text-gray-400 text-lg md:text-3xl lg:mt-4 mt-1">
                                ({movieData?.release_date?.slice(0, 4)})
                            </span>
                        </div>

                        <p className="text-sm border border-white rounded px-2 w-fit my-2">
                            {movieData?.adult ? 'R-Rated' : 'PG-13'} • {movieData?.genres?.map(g => g.name).join(', ')}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                            <div
                                className="radial-progress text-[#DD003F] border-2 border-[#212121] bg-[#212121]"
                                style={{
                                    "--value": Math.round(8 * 10),
                                    "--size": "4rem"
                                }}
                                role="progressbar"
                                aria-valuenow={Math.round(8 * 10)}
                            >
                                {Math.round(8 * 10)}%
                            </div>

                            <Link to={`/movie-details/${movieData?.id}`}>
                                <button className="border-[2px] border-[#DD003F] flex items-center gap-2 rounded-full px-4 py-2 bg-[#DD003F] text-[#212121] hover:text-[#DD003F] hover:bg-transparent transition duration-500 cursor-pointer">
                                    Details
                                </button>
                            </Link>

                            {trailerKey && (
                                <a
                                    href={`https://www.youtube.com/watch?v=${trailerKey}`}
                                    className="text-[#DD003F] border-[2px] border-[#DD003F] flex items-center gap-2 rounded-full px-4 py-2 hover:bg-[#DD003F] hover:text-[#212121] transition duration-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaPlay /> Play Trailer
                                </a>
                            )}
                        </div>
                        <div className="mt-4">
                            <h2 className="text-2xl font-semibold mb-1">Overview</h2>
                            <p className="text-gray-400 max-w-[800px] line-clamp-6 lg:line-clamp-none">{movieData?.overview}</p>
                            {movieData?.credits?.crew?.filter(c => c.job === "Director").map(director => (
                                <p className='text-xl font-medium mt-3' key={director.id}>{director.name}</p>
                            ))}
                            <p className='text-gray-400'>Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionImpossible;
