import React, { useEffect, useState } from 'react';

function UpcomingMovies() {
    const [upcoming, setUpcoming] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];

        const fetchPages = async () => {
            try {
                const [page1, page2, page3 , page4] = await Promise.all([
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`).then(res => res.json()),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2&api_key=${API_KEY}`).then(res => res.json()),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=6&api_key=${API_KEY}`).then(res => res.json()),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=10&api_key=${API_KEY}`).then(res => res.json())

                ]);

                const combinedResults = [...page1.results, ...page2.results, ...page3.results , ...page4.results];
                const filteredMovies = combinedResults.filter(movie => movie.release_date > today);
                setUpcoming(filteredMovies.slice(0, 6));

            } catch (error) {
                console.error("Error fetching upcoming movies:", error);
            }
        };

        fetchPages();
    }, [API_KEY]);

    return (
        <div>
            <div className="mx-auto w-[95%] flex gap-3 items-center py-6">
                <div className="w-[10px] h-[40px] bg-[#DD003F]"></div>
                <p className="text-3xl font-bold text-white">Upcoming Movies</p>
            </div>
            <div className='grid grid-cols-6 mx-auto w-[90%]'>
                {upcoming.map(movie => (
                    <div className='bg-[#232323] w-fit p-3 rounded-lg group' key={movie.id}>
                        <img className='w-52 rounded-lg transition duration-300 group-hover:brightness-75' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                        <div className='flex justify-between items-start mt-2'>
                            <h1 className='text-white w-40 text-lg h-14 hover:text-[#DD003F] transition duration-300 cursor-pointer'>{movie.original_title}</h1>
                            <p className="text-sm font-medium text-gray-400">⭐ {movie.vote_average ? Math.round(movie.vote_average)+'/10' : 'N/A'}</p>
                        </div>
                        <button className='border-[2px] w-full py-2 px-3 border-[#DD003F] text-[#DD003F] rounded-lg'>View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingMovies;
