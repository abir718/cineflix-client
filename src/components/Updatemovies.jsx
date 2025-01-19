
import { useState } from "react";
import toast from "react-hot-toast";
import Rating from '@mui/material/Rating';
import { useLoaderData } from "react-router-dom";


const Updatemovies = () => {

  const [rating, setRating] = useState(0)
  const genres = ["Comedy", "Drama", "Horror", "Action", "Thriller"];
  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

  const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const poster = form.poster.value;
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const releaseYear = form.releaseYear.value;
        const rating = parseInt(form.rating.value) || 0;
        const summary = form.summary.value;

        const newMovieData = {poster,title,genre,duration,releaseYear,rating,summary};
        

             
        const isValid = validateForm(newMovieData)
        if (isValid) {

          fetch(`http://localhost:5000/update/${_id}` , {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newMovieData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount) {
              toast.success("Movie updated successfully!")

            }
  
        })
        setRating(0)
        form.reset()
        }
  };

  const validateForm = (movieData) => {
    let isValid = true;
  
    if (!movieData.poster || !movieData.poster.trim().startsWith("http")) {
      toast.error("Poster must be a valid link.");
      isValid = false;
    }
  
    if (!movieData.title || movieData.title.length < 2) {
      toast.error("Title must be at least 2 characters long.");
      isValid = false;
    }
  
    if (!movieData.genre) {
      toast.error("Please select a genre.");
      isValid = false;
    }
  
    if (!movieData.duration || movieData.duration <= 60) {
      toast.error("Duration must be greater than 60 minutes.");
      isValid = false;
    }
  
    if (!movieData.releaseYear) {
      toast.error("Please select a release year.");
      isValid = false;
    }
  
    if (!movieData.rating || movieData.rating < 0) {
      toast.error("Please provide a rating.");
      isValid = false;
    }
  
    if (!movieData.summary || movieData.summary.length < 10) {
      toast.error("Summary must be at least 10 characters long.");
      isValid = false;
    }
    return isValid;
  };

  const movie = useLoaderData();
  const {_id} = movie;
  
  
  return (
    <div className="bg-[#1b1b1b]">
        <div className="flex items-center gap-3 pt-10 mx-auto w-[80%]">
        <div className="w-[10px] h-[40px] bg-[#DD003F]"></div>
        <p className="text-white text-3xl font-bold">Update Movies</p>
        </div>
      <div className="hero ">



        <div className="card bg-[#232323] w-full max-w-sm shrink-0 shadow-2xl my-14">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Movie Poster</span>
              </label>
              <input
                type="url"
                name="poster"
                placeholder="Poster URL"
                className="text-gray-400 input bg-[#282828] border-gray-500 input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Movie Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="text-gray-400 input bg-[#282828] border-gray-500 input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Genre</span>
              </label>
              <select
                name="genre"
                className="text-gray-400 select bg-[#282828] border-gray-500"
                required
              >
                <option value="">Select Genre</option>
                {genres.map((genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Duration (minutes)</span>
              </label>
              <input
                type="number"
                name="duration"
                placeholder="Duration"
                className="text-gray-400 input bg-[#282828] border-gray-500 input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Release Year</span>
              </label>
              <select
                name="releaseYear"
                className="text-gray-400 select bg-[#282828] border-gray-500"
                required
              >
                <option value="">Select Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Rating</span>
              </label>
              <div>
              <Rating
                name="rating"
                value={rating}
                size="large"
                onChange={(event, newValue) => setRating(newValue)}
              />
      </div>
                         </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Summary</span>
              </label>
              <textarea
                name="summary"
                placeholder="Short summary of the movie"
                className="text-gray-400 textarea bg-[#282828] border-gray-500"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="py-2 rounded-lg text-white bg-[#DD003F] hover:scale-105 transition duration-300">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Updatemovies;
