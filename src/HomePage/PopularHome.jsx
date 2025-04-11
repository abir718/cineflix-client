import React, { useEffect, useState } from 'react'

function PopularHome() {

    let [popular, setPopular] = useState([])

    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => { setPopular(data.results) })
    }, [API_KEY]);
    console.log(popular)

    return (
        <div>
            <div className="mx-auto w-[95%] flex gap-3 items-center py-6">
                <div className="w-[10px] h-[40px] bg-[#DD003F]"></div>
                <p className="text-3xl font-bold text-white">Featured Movies</p>
            </div>
            <div className='grid grid-cols-6 mx-auto w-[90%]'>
                {popular.slice(0, 6).map((pop => (
                    <div className='bg-[#232323] w-fit p-3 rounded-lg' key={pop.id}>
                        <img className='w-52 rounded-lg' src={`https://image.tmdb.org/t/p/w500${pop.poster_path}`} alt={pop.original_title} />
                        <div className='flex justify-between items-center mt-2'>
                            <h1 className='text-white text-xl'>{pop.original_title}</h1>
                            <p className="text-sm font-medium text-gray-400">⭐ {Math.round(pop.vote_average)}/10</p>
                        </div>

                    </div>
                )))}
            </div>
        </div>

    )
}

export default PopularHome