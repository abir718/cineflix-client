import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function PopularHome() {

    let [popular, setPopular] = useState([])

    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => { setPopular(data.results) })
    }, [API_KEY]);


    return (
        <div>
            <div className="mx-auto w-[95%] flex gap-3 items-center py-6">
                <div className="w-[10px] h-[40px] bg-[#DD003F]"></div>
                <p className="text-3xl font-bold text-white">Popular Movies</p>
            </div>
            <div className='grid grid-cols-6 mx-auto w-[90%]'>
                {popular.slice(0, 6).map((pop => (
                    <div className='bg-[#232323] w-fit p-3 rounded-lg group' key={pop.id}>
                        <img className='w-52 rounded-lg transition duration-300 group-hover:brightness-75' src={`https://image.tmdb.org/t/p/w500${pop.poster_path}`} alt={pop.original_title} />
                        <div className='flex justify-between items-start mt-2'>
                            <Link to={`/movie-details/${pop.id}`}>
                                <h1 className='text-white w-40 text-lg h-14 hover:text-[#DD003F] transition duration-300 cursor-pointer'>{pop.original_title}</h1>
                            </Link>
                            <p className="text-sm font-medium text-gray-400 mt-1">⭐ {Math.round(pop.vote_average)}/10</p>
                        </div>
                        <div className='flex items-center gap-3 justify-between'>
                            <button className='py-1 px-3 border-[2px] border-[#DD003F] text-[#DD003F] rounded-full cursor-pointer hover:bg-[#DD003F] hover:text-[#232323] transition duration-300 font-medium'>+ Watchlist</button>
                            <div className='hover:bg-[#363636] p-3 rounded-full transition duration-300 '>
                                <button className='w-6 h-6 flex items-center justify-center font-medium text-xl border-[2px] border-[#DD003F] text-[#DD003F] rounded-full cursor-pointer'>i</button>
                            </div>
                        </div>
                    </div>
                )))}
            </div>
        </div>

    )
}

export default PopularHome