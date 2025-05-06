import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { authContext } from "../AuthProvider";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const { user, logOut } = useContext(authContext);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <div className="bg-[#1b1b1b] drop-shadow-xl pt-2 sticky top-0 z-50">
            <div className="py-2 flex items-center justify-between px-4 lg:w-[80%] mx-auto">
                <div className="flex items-center gap-4">
                    <button className="text-[#DD003F] sm:hidden" onClick={toggleNav}>
                        <GiHamburgerMenu className="size-5" />
                    </button>
                    <img className="w-[70px]" src="/images/logo.png" alt="logo" />
                </div>



                <div className="hidden sm:flex gap-6 items-center">
                    <NavLink className={({ isActive }) => `font-medium hover:text-[#DD003F] transition duration-300 ${isActive ? "text-[#DD003F]" : "text-gray-500"}`} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => `font-medium hover:text-[#DD003F] transition duration-300 ${isActive ? "text-[#DD003F]" : "text-gray-500"}`} to="/tv-shows">TV Shows</NavLink>
                    <NavLink className={({ isActive }) => `font-medium hover:text-[#DD003F] transition duration-300 ${isActive ? "text-[#DD003F]" : "text-gray-500"}`} to="/browse">Browse</NavLink>
                    <NavLink className={({ isActive }) => `font-medium hover:text-[#DD003F] transition duration-300 ${isActive ? "text-[#DD003F]" : "text-gray-500"}`} to="/news">News</NavLink>
                </div>

                <div>
                    {user?.email ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="avatar">
                                <div className="w-12 rounded-lg cursor-pointer">
                                    <img src={user.photoURL} alt="profile" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu text-gray-400 dropdown-content mt-3 z-[1] p-2 shadow bg-[#212121] rounded-box w-fit">
                                <li className="hover:bg-black/20"><a>Watchlist</a></li>
                                <li onClick={logOut} className="hover:bg-black/20"><a>LogOut</a></li>
                            </ul>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="font-medium border-[2px] border-[#DD003F] text-[#DD003F] px-3 py-2 rounded-lg hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">
                                Log In
                            </button>
                        </Link>
                    )}
                </div>
            </div>


            <div className={`fixed top-0 left-0 h-screen w-64 bg-[#1b1b1b] z-50 transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 sm:hidden`}>
                <div className="p-6 flex flex-col gap-6">
                    <button onClick={toggleNav} className="text-[#DD003F] self-end ">
                        ✕
                    </button>
                    <NavLink onClick={toggleNav} className={({ isActive }) => `font-medium hover:text-[#DD003F] transition duration-300 ${isActive ? "text-[#DD003F]" : "text-gray-400"}`} to="/">Home</NavLink>
                    <NavLink onClick={toggleNav} className={({ isActive }) => `font-medium hover:text-[#DD003F] transition duration-300 ${isActive ? "text-[#DD003F]" : "text-gray-400"}`} to="/tv-shows">TV Shows</NavLink>
                    <NavLink onClick={toggleNav} className={({ isActive }) => `font-medium hover:text-[#DD003F] transition duration-300 ${isActive ? "text-[#DD003F]" : "text-gray-400"}`} to="/browse">Browse</NavLink>
                    <NavLink onClick={toggleNav} className={({ isActive }) => `font-medium hover:text-[#DD003F] transition duration-300 ${isActive ? "text-[#DD003F]" : "text-gray-400"}`} to="/news">News</NavLink>
                </div>
            </div>


            <div className="h-[1px] w-full bg-[#DD003F] mt-2"></div>
        </div>
    );
};

export default Header;
