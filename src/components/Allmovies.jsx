import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Allmovies = () => {

  const loadMovies = useLoaderData();
  const [movies, setMovies] = useState(loadMovies);

    return (
      <div className="bg-[#1b1b1b] py-10">
        <div className=" w-[80%] mx-auto grid grid-cols-3">
        {movies.map((movie) => (
          <div
            key={movie._id}
           className="mb-10 bg-[#232323]  flex flex-col items-center justify-center w-fit rounded-lg p-6 gap-4" >
              <div className="flex items-center gap-8 ">
              <div>
              <img src={movie.poster} className="w-24 h-36 object-cover"/>
            </div>
            <div className="flex flex-col gap-2 text-white">
              <p className="">Title:{movie.title} </p>
              <p className="">Genre: {movie.genre}</p>
              <p className="">Duration: {movie.duration} mins</p>
              <p className="">Release Year: {movie.releaseYear}</p>
              <p className="">Rating: {movie.rating}/5</p>
            </div>
              </div>
              <button className="text-white bg-[#DD003F] w-fit rounded-lg py-2 px-3">View Details</button>


          
          </div>
        ))}
        </div>
        
      </div>
    );
  };
  
  export default Allmovies;
  