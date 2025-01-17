import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="bg-[#1b1b1b] drop-shadow-lg py-4 flex items-center justify-around">

            <div className="flex flex-col items-center">
                <img className="w-[80px]" src="/public/images/logo.png" alt="" />
                <p className="text-[#DD003F]" >Cineflix</p>
            </div>
            <div className="flex items-center gap-10">
            <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#DD003F]' : 'text-gray-500'}`} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#DD003F]' : 'text-gray-500'}`} to='/news'>News</NavLink>
            <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#DD003F]' : 'text-gray-500'}`} to='/allmovies'>All Movies</NavLink>
            <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#DD003F]' : 'text-gray-500'}`} to='/addmovies'>Add Movies</NavLink>
            <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#DD003F]' : 'text-gray-500'}`} to='/favourites'>My Favourites</NavLink>
            </div>
            <div className="flex gap-3">
                <NavLink to='/login'><button className="font-medium border-[2px] border-[#DD003F] bg-[#DD003F] text-white px-3 py-2 rounded-lg hover:bg-transparent transition duration-500">Login</button></NavLink>
                <NavLink to='/register'><button className="font-medium border-[2px] border-[#DD003F] text-[#DD003F] px-3 py-2 rounded-lg hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">Register</button></NavLink>
            </div>
        </div>
    );
};

export default Header;