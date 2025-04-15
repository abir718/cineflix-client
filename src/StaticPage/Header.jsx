import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="bg-[#1b1b1b] ">
            <div className="drop-shadow-lg py-2 flex items-center justify-between px-4 lg:w-[80%] mx-auto">
                <button className="text-white sm:hidden" onClick={toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <div className="flex items-center sm:flex-col">
                    <img className="w-[80px] lg:flex hidden" src="/images/logo.png" alt="" />
                    <p className="text-[#DD003F] lg:flex hidden">CineFlix</p>
                </div>

                <div className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-8 ${isNavOpen ? "flex" : "hidden"} md:flex`}>
                    <NavLink className={({ isActive }) => `font-medium hover:text-[#DD003F] transition duration-300 ${isActive ? "text-[#DD003F]" : "text-gray-500"}`} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => `font-medium hover:text-[#DD003F] transition duration-300 ${isActive ? "text-[#DD003F]" : "text-gray-500"}`} to="/tv-shows">TV Shows</NavLink>
                    <NavLink className={({ isActive }) => `font-medium hover:text-[#DD003F] transition duration-300 ${isActive ? "text-[#DD003F]" : "text-gray-500"}`} to="/browse-movies">Browse Movies</NavLink>
                    <NavLink className={({ isActive }) => `font-medium hover:text-[#DD003F] transition duration-300 ${isActive ? "text-[#DD003F]" : "text-gray-500"}`} to="/favourites">My Favourites</NavLink>
                </div>

                <div>

                        <div className="flex items-center gap-3">
                            <button className="font-medium border-[2px] border-[#DD003F] text-[#DD003F] px-3 py-2 rounded-lg hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">Log In</button>
                        </div>


                </div>
            </div>
            <div className="h-[1px] w-full bg-[#DD003F]"></div>
        </div>
    );
};

export default Header;