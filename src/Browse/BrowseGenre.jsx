import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function BrowseGenre() {

    const allData = useLoaderData();
    console.log(allData)
    
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6 mt-6">
                    {allData.map((movie) => (
                        <div key={movie.id} className="bg-[#232323] p-2 rounded-lg group w-fit">
                            <img
                                className="w-60 h-fit mx-auto rounded-lg transition duration-300 group-hover:brightness-75"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className="flex justify-between mt-2">
                                <Link to={`/movie-details/${movie.id}`}>
                                    <h1 className="text-white w-40 h-14 hover:text-[#DD003F] transition duration-300 cursor-pointer" title={movie.title}>
                                        {movie.title.length > 36 ? movie.title.slice(0, 36) + '...' : movie.title}
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
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BrowseGenre