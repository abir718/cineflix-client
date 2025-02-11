import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../Authprovider";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { FaPen } from "react-icons/fa6";

const Details = () => {
  const { user } = useContext(authContext);
  const email = user?.email;
  const loadMovies = useLoaderData();
  const movieData = { ...loadMovies, email };
  const [movie, setMovie] = useState(movieData);

  const addToFav = () => {
    fetch("https://cineflix-server.vercel.app/favmovies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Movie added successfully!");
        } else if (data.message === "Movie already in favorites") {
          toast.error("This movie is already in your favorites!");
        }
      })
      .catch((error) => {
        console.error("Error adding movie to favorites:", error);
      });
  };

  const removeMovie = (id) => {
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
        fetch(`https://cineflix-server.vercel.app/addmovies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMovie(null);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  
  return (
    <div className="bg-[#1b1b1b] h-full">
      <div className="py-10">
        <div className="w-[80%] mx-auto">
          {movie?._id ? (
            <div className="mb-10 bg-[#232323] w-fit rounded-lg p-6 gap-4">
              <div className="md:flex items-center gap-8">
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
              <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <button onClick={addToFav} className="font-medium border-[2px] border-[#DD003F] text-[#DD003F] px-3 py-2 rounded-lg hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">
                  Add To Favorites</button>
                <button onClick={() => removeMovie(movie._id)} className="bg-[#DD003F] p-4 w-fit rounded-lg ">
                  <FaTrash className="text-white" />
                </button>
                <Link to={`/update/${movie._id}`}><button  className="bg-[#DD003F] w-fit p-4 rounded-lg">
                  <FaPen className="text-white" />
                </button></Link>

              </div>
            </div>
          ) : (
            <p className="text-white">No movie details available.</p>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default Details;
