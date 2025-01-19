import { Link } from "react-router-dom";


const Featuredmovies = ({ featuredMovies , theme }) => {
    const {_id , poster, title, rating} = featuredMovies;
  
    return (
<div className=" flex items-center justify-center">

<div className={`w-fit p-3 rounded-lg flex flex-col gap-2 ${theme === "dark" ? "bg-[#232323]" : "bg-[#e4e4e4]"}`}>
  <img className="w-52 h-72 rounded-lg"src={poster}/>
  <div className="flex items-center justify-around">
    <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>{title}</p>
    <p className="text-sm font-medium text-gray-400">⭐ {rating}/10</p>
  </div>
  <div className="flex justify-center">
    <Link to={`/${_id}`}><button className="text-[#DD003F] border-[2px] border-[#DD003F] rounded-full px-3 py-1 hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">View Details
    </button></Link>

  </div>
</div>
</div>


    );
  };
  
  export default Featuredmovies;
  