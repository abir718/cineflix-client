import {useContext} from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Authprovider";

const Details = () => {
    const { user } = useContext(authContext);
    const email = user?.email;  
    const loadMovies = useLoaderData();
    const movieData = { ...loadMovies, email };
let addToFav = () => {

    fetch('http://localhost:5000/favmovies' , {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(movieData)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if (data.insertedId) {
          toast.success("Movie added successfully!")
        }

    })
}
    return (
        <div>
              <div className="bg-[#1b1b1b] py-10">
        <div className=" w-[80%] mx-auto grid grid-cols-3">
          <div

           className="mb-10 bg-[#232323] w-fit rounded-lg p-6 gap-4" >
              <div className="flex items-center gap-8 ">
              <div>
              <img src={loadMovies.poster} className="w-24 h-36 object-cover"/>
            </div>
            <div className="flex flex-col gap-2 text-white">
              <p className="">Title:{loadMovies.title} </p>
              <p className="">Genre: {loadMovies.genre}</p>
              <p className="">Duration: {loadMovies.duration} mins</p>
              <p className="">Release Year: {loadMovies.releaseYear}</p>
              <p className="">Rating: {loadMovies.rating}/5</p>
            </div>
            </div>
            <p className="text-white">summary: {loadMovies.summary}</p>
             <div className="flex gap-3">
             <button className="font-medium border-[2px] border-[#DD003F] bg-[#DD003F] text-white px-3 py-2 rounded-lg hover:bg-transparent transition duration-500">Delete</button>
             <button onClick={addToFav} className="font-medium border-[2px] border-[#DD003F] text-[#DD003F] px-3 py-2 rounded-lg hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">Add To Favourites</button>
             </div>
          </div>

        </div>
        
      </div>
        </div>
    );
};

export default Details;