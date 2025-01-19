import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Fedetails = () => {

    const loadMovies = useLoaderData();
    const [movie, setMovie] = useState(loadMovies);

    return (
        <div>
             <div className="bg-[#1b1b1b] h-screen">
                  <div className="py-10">
                    <div className="w-[80%] mx-auto grid grid-cols-3">
                        <div className="mb-10 bg-[#232323] w-fit rounded-lg p-6 gap-4">
                          <div className="flex items-center gap-8">
                            <div>
                              <img src={movie.poster} className="w-24 h-36 object-cover" />
                            </div>
                            <div className="flex flex-col gap-2 text-white">
                              <p>Title: {movie.title}</p>
                              <p>Genre: {movie.genre}</p>
                              <p>Duration: {movie.duration} mins</p>
                              <p>Release Year: {movie.releaseYear}</p>
                              <p>Rating: {movie.rating}/5</p>
                            </div>
                          </div>
                          <p className="text-white">Summary: {movie.summary}</p>
                          <div>
                            <Link to={`/allmovies`}><button  className="font-medium border-[2px] border-[#DD003F] text-[#DD003F] px-3 py-2 rounded-lg hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">
                                Go to All Movies</button></Link> 
                        </div>
                        </div>

                    </div>
                  </div>
                </div>
        </div>
    );
};

export default Fedetails;