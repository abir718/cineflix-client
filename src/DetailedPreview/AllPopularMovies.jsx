import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider';
import toast from 'react-hot-toast'; 

function AllPopularMovies() {
    const [allMovies, setAllMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchMovies = async () => {
            const requests = [];
            for (let i = 1; i <= 30; i++) {
                requests.push(
                    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${i}&api_key=${API_KEY}`)
                        .then(res => res.json())
                );
            }
            const pages = await Promise.all(requests);
            const combined = pages.flatMap(page => page.results);
            setAllMovies(combined);
        };
        fetchMovies();
    }, [API_KEY]);

        const { user, watchlist , setWatchlist } = useContext(authContext);
        
    let addToWatchlist = (movie) => {

        if (!user?.email) {
            toast('You need to login first!', {
                style: {
                    background: '#212121',
                    color: '#DD003F',
                    fontSize: '1.125rem',
                    fontWeight: 500
                },
            });
            return;
        }

        const movieTitle = movie.title || movie.name;

        const alreadyExists = watchlist.some(item =>
            item.title === movieTitle && item.user === user.email
        );

        if (alreadyExists) {
            toast('Already in your watchlist!', {
                style: {
                    background: '#212121',
                    color: '#DD003F',
                    fontSize: '1.125rem',
                    fontWeight: 500
                },
            });
            return;
        }

        const MovieData = {
            image: movie.poster_path,
            title: movieTitle,
            ratings: Math.round(movie.vote_average),
            user: user.email
        };

        fetch("http://localhost:5000/watchlist", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(MovieData),
        });
        setWatchlist(prevWatchlist => [...prevWatchlist, MovieData]);
        toast('Successfully added to your watchlist', {
            style: {
                background: '#212121',
                color: '#DD003F',
                fontSize: '1.125rem',
                fontWeight: 500
            },
        });
    };

    const moviesPerPage = 30;
    const totalPages = Math.ceil(allMovies.length / moviesPerPage);
    const startIndex = (currentPage - 1) * moviesPerPage;
    const paginatedMovies = allMovies.slice(startIndex, startIndex + moviesPerPage);

    return (
        <div className="w-[95%] mx-auto py-6">
            <div className="flex gap-3 items-center">
                <div className="w-[8px] h-[38px] bg-[#DD003F]"></div>
                <p className="text-3xl font-medium text-white">Popular Movies</p>
            </div>

            <div className='flex items-center justify-center'>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6 mt-6">
                    {paginatedMovies.map((movie) => (
                        <div key={movie.id} className="bg-[#262626] p-3 w-fit rounded-lg group">
                            <img
                                className="w-60 h-fit mx-auto rounded-lg transition duration-300 group-hover:brightness-75"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className="flex justify-between mt-2">
                                <Link to={`/movie-details/${movie.id}`}>
                                    <h1
                                        className="text-white w-48 text-lg h-14 hover:text-[#DD003F] transition duration-300 cursor-pointer"
                                        title={movie.title}
                                    >
                                        {movie.title.length > 36 ? movie.title.slice(0, 36) + '...' : movie.title}
                                    </h1>
                                </Link>
                                <p className="text-sm font-medium text-gray-400 mt-1">⭐ {Math.round(movie.vote_average)}/10</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <button onClick={()=> addToWatchlist(movie)} className="py-1 px-3 border-[2px] border-[#DD003F] text-[#DD003F] rounded-full cursor-pointer hover:bg-[#DD003F] hover:text-[#262626] transition duration-300 font-medium">
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

            <div className="flex flex-wrap items-center justify-center mt-10 gap-2">
                <button
                    onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-[#DD003F] text-white rounded disabled:opacity-50 cursor-pointer"
                >
                    Previous
                </button>

                {[
                    1,
                    currentPage - 1 > 1 ? currentPage - 1 : null,
                    currentPage !== 1 && currentPage !== totalPages ? currentPage : null,
                    currentPage + 1 < totalPages ? currentPage + 1 : null,
                    totalPages > 1 ? totalPages : null
                ]
                    .filter((page, index, self) => page && self.indexOf(page) === index)
                    .map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-1 rounded cursor-pointer ${currentPage === page ? 'bg-[#DD003F] text-white' : 'text-[#DD003F] border border-[#DD003F]'}`}
                        >
                            {page}
                        </button>
                    ))}

                <button
                    onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-[#DD003F] text-white rounded disabled:opacity-50 cursor-pointer"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default AllPopularMovies;
