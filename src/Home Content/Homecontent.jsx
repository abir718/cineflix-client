import { useLoaderData } from "react-router-dom";
import Featuredmovies from "./Featuredmovies";
import Others from "./Others";
import Slide from "./Slide";

const Homecontent = () => {
  const featuredMovies = useLoaderData();

  return (
    <div className="bg-[#1b1b1b]">
      <Slide></Slide>
      <div className="mx-auto w-[80%] flex gap-3 items-center">
      <div className="w-[10px] h-[40px] bg-[#DD003F]"></div>
      <p className="text-white text-3xl font-bold">Featured Movies</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-6 w-[80%] mx-auto">
        {featuredMovies.map((movie) => (
          <Featuredmovies key={movie._id} featuredMovies={movie}></Featuredmovies>
        ))}
      </div>
      <Others></Others>
    </div>
  );
};

export default Homecontent;
