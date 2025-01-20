import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Allmovies = () => {
  const loadMovies = useLoaderData(); 
  const [movies, setMovies] = useState(loadMovies);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase(); 
    setSearch(query); 

    const filteredMovies = loadMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query) 
    );
    setMovies(filteredMovies);
  };

  return (
    <div className="bg-[#1b1b1b] py-10 ">
      <div className="lg:w-[70%] py-10 mx-auto flex items-center flex-col md:flex-row justify-between">
        <div className="flex items-center gap-3 lg:py-10 ">
          <div className="w-[10px] h-[40px] bg-[#DD003F]"></div>
          <p className="text-white text-3xl font-bold">All Movies</p>
        </div>
        <div>
          <input type="text" placeholder="Search..."  value={search} onChange={handleSearch} className="text-gray-400 input bg-[#282828] border-gray-500 input-bordered" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-x-10">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="mb-10 bg-[#232323]  flex flex-col items-center justify-center w-fit rounded-lg p-6 gap-4" >
              <div className="flex items-center gap-8 ">
                <div>
                  <img src={movie.poster} className="w-24 h-36 object-cover" />
                </div>
                <div className="flex flex-col gap-2 text-white">
                  <p className="">Title:{movie.title} </p>
                  <p className="">Genre: {movie.genre}</p>
                  <p className="">Duration: {movie.duration} mins</p>
                  <p className="">Release Year: {movie.releaseYear}</p>
                  <p className="">Rating: {movie.rating}/5</p>
                </div>
              </div>
              <Link to={`/allmovies/${movie._id}`}><button className="text-white bg-[#DD003F] w-fit rounded-lg py-2 px-3">View Details</button></Link>




            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Allmovies;
