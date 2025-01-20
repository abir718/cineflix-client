import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Authprovider";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Favourites = () => {

  const { user } = useContext(authContext);
  const loadMovies = useLoaderData();
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (user?.email) {
      const userMovies = loadMovies.filter(movie => movie.email === user.email);
      setFilteredMovies(userMovies);
    }
  }, [user, loadMovies]);

  const removeFav = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://cineflix-server.vercel.app/favmovies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data); 
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your movie has been deleted.",
                icon: "success",
              });
  
              const remaining = filteredMovies.filter((fav) => fav._id !== id);
              setFilteredMovies(remaining);
            } 
          })
          
      }
    });
  };
  
  

  return (
    <div className="bg-[#1b1b1b] py-10 text-white h-full">
      <div className="w-[80%] mx-auto">
      <div className="flex items-center gap-2 my-10">
                <div className="w-[10px] h-[40px] bg-[#DD003F]">
                </div>
                <p className="text-white text-3xl font-bold">Your Favourites</p>
            </div>
        {filteredMovies.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {filteredMovies.map((movie) => (
              <div key={movie._id} className="bg-[#232323] p-4 rounded-lg shadow-md">
                <img src={movie.poster} className="w-full h-48 object-cover mb-4 rounded"/>
                <p className="text-lg font-bold">{movie.title}</p>
                <p className="text-sm text-gray-400">Genre: {movie.genre}</p>
                <p className="text-sm text-gray-400">Duration: {movie.duration} mins</p>
                <p className="text-sm text-gray-400">Rating: {movie.rating}/5</p>
                <p className="text-sm text-gray-400">Release Year: {movie.releaseYear}</p>
                <div className="flex justify-end">
                <button onClick={()=> removeFav(movie._id)} className="bg-[#DD003F] p-2 rounded-lg"><FaTrash className="text-white"/></button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No favorite movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Favourites;
