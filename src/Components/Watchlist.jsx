import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../AuthProvider';
import { Link } from 'react-router-dom';

function Watchlist() {
    const data = useLoaderData();
    const { user } = useContext(authContext);
    const email = user?.email;

    const filteredItems = data.filter(item => item.user === email);

    return (
        <div className="w-[95%] mx-auto py-6">
            <div className="flex gap-3 items-center">
                <div className="w-[8px] h-[38px] bg-[#DD003F]"></div>
                <p className="text-3xl font-medium text-white">Your Watchlist</p>
            </div>

            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6 mt-6">
                    {filteredItems.map((movie) => (
                        <div key={movie._id} className="bg-[#262626] p-3 w-fit rounded-lg group">
                            <img
                                className="w-60 h-fit mx-auto rounded-lg transition duration-300 group-hover:brightness-75"
                                src={`https://image.tmdb.org/t/p/w500${movie.image}`}
                                alt={movie.title}
                            />
                            <div className="flex justify-between mt-2">
                                <Link to={`/movie-details/${movie._id}`}>
                                    <h1
                                        className="text-white w-48 text-lg h-14 hover:text-[#DD003F] transition duration-300 cursor-pointer"
                                        title={movie.title}
                                    >
                                        {movie.title.length > 36 ? movie.title.slice(0, 36) + '...' : movie.title}
                                    </h1>
                                </Link>
                                <p className="text-sm font-medium text-gray-400 mt-1">⭐ {movie.ratings}/10</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Watchlist;
