

const Others = ({theme}) => {
    return (
        <div className="mx-auto w-[80%] ">
            <div>
            <div className="flex items-center gap-2 my-10">
                <div className="w-[10px] h-[40px] bg-[#DD003F]">
                </div>
                <p className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>Top Rated</p>
            </div>
            <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-10">
            <div className={`w-fit p-3 rounded-lg flex flex-col gap-2 ${theme === "dark" ? "bg-[#232323]" : "bg-[#e4e4e4]"}`}>
                    <img className="w-52 h-72 rounded-lg" src="https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg" alt="" />
                    <div className="flex items-center justify-around">
                        <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>Parasite</p>
                        <p className="text-sm font-medium text-gray-400">⭐ 8.8/10</p>
                    </div>
                    <a className="flex justify-center" href="https://en.wikipedia.org/wiki/Parasite_(2019_film)"><button className="text-[#DD003F] border-[2px] border-[#DD003F] rounded-full px-3 py-1 hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500 ">View Details</button></a>
                </div>
                <div className={`w-fit p-3 rounded-lg flex flex-col gap-2 ${theme === "dark" ? "bg-[#232323]" : "bg-[#e4e4e4]"}`}>
                    <img className="w-52 h-72 rounded-lg" src="https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_FMjpg_UX1000_.jpg" alt="Maze Runner" />
                    <div className="flex items-center justify-around">
                        <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>Maze Runner</p>
                        <p className="text-sm font-medium text-gray-400">⭐ 6.8/10</p>
                    </div>
                    <a className="flex justify-center" href="https://en.wikipedia.org/wiki/The_Maze_Runner_(film)">
                        <button className="text-[#DD003F] border-[2px] border-[#DD003F] rounded-full px-3 py-1 hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">View Details</button>
                    </a>
                </div>
                <div className={`w-fit p-3 rounded-lg flex flex-col gap-2 ${theme === "dark" ? "bg-[#232323]" : "bg-[#e4e4e4]"}`}>
                    <img className="w-52 h-72 rounded-lg" src="https://m.media-amazon.com/images/M/MV5BODg3ZTM2YWQtZDE5Ny00NGNiLTkzYjgtYWVlYjNkOTg5NDI1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="World War Z" />
                    <div className="flex items-center justify-around">
                        <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>World War Z</p>
                        <p className="text-sm font-medium text-gray-400">⭐ 7.0/10</p>
                    </div>
                    <a className="flex justify-center" href="https://en.wikipedia.org/wiki/World_War_Z_(film)">
                        <button className="text-[#DD003F] border-[2px] border-[#DD003F] rounded-full px-3 py-1 hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">View Details</button>
                    </a>
                </div>
                <div className={`w-fit p-3 rounded-lg flex flex-col gap-2 ${theme === "dark" ? "bg-[#232323]" : "bg-[#e4e4e4]"}`}>
                    <img className="w-52 h-72 rounded-lg" src="https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_FMjpg_UX1000_.jpg" alt="Gravity" />
                    <div className="flex items-center justify-around">
                        <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>Gravity</p>
                        <p className="text-sm font-medium text-gray-400">⭐ 7.7/10</p>
                    </div>
                    <a className="flex justify-center" href="https://en.wikipedia.org/wiki/Gravity_(2013_film)">
                        <button className="text-[#DD003F] border-[2px] border-[#DD003F] rounded-full px-3 py-1 hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">View Details</button>
                    </a>
                </div>

                <div className={`w-fit p-3 rounded-lg flex flex-col gap-2 ${theme === "dark" ? "bg-[#232323]" : "bg-[#e4e4e4]"}`}>
                    <img className="w-52 h-72 rounded-lg" src="https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_.jpg" alt="Avatar" />
                    <div className="flex items-center justify-around">
                        <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>Avatar</p>
                        <p className="text-sm font-medium text-gray-400">⭐ 7.9/10</p>
                    </div>
                    <a className="flex justify-center" href="https://en.wikipedia.org/wiki/Avatar_(2009_film)">
                        <button className="text-[#DD003F] border-[2px] border-[#DD003F] rounded-full px-3 py-1 hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">View Details</button>
                    </a>
                </div>
                <div className={`w-fit p-3 rounded-lg flex flex-col gap-2 ${theme === "dark" ? "bg-[#232323]" : "bg-[#e4e4e4]"}`}>
                    <img className="w-52 h-72 rounded-lg" src="https://m.media-amazon.com/images/M/MV5BZWU5ZjJkNTQtMzQwOS00ZGE4LWJkMWUtMGQ5YjdiM2FhYmRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="Dunkirk" />
                    <div className="flex items-center justify-around">
                        <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>Dunkirk</p>
                        <p className="text-sm font-medium text-gray-400">⭐ 7.8/10</p>
                    </div>
                    <a className="flex justify-center" href="https://en.wikipedia.org/wiki/Dunkirk_(2017_film)">
                        <button className="text-[#DD003F] border-[2px] border-[#DD003F] rounded-full px-3 py-1 hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">View Details</button>
                    </a>
                </div>
            </div>
            </div>
            </div>

            <div className="">
    <div className="flex items-center gap-2 my-10">
        <div className="w-[10px] h-[40px] bg-[#DD003F]"></div>
        <p className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>Upcoming</p>
    </div>
    <div className="flex items-center justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-10">

    <div className={`w-fit p-3 rounded-lg flex flex-col gap-2 ${theme === "dark" ? "bg-[#232323]" : "bg-[#e4e4e4]"}`}>
            <img className="w-52 h-72 rounded-lg" src="https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="Dune: Part Two" />
            <div className="flex items-center justify-around">
                <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>Dune: Part Two</p>
                <p className="text-sm font-medium text-gray-400">15th Mar</p>
            </div>
            <a className="flex justify-center" href="https://www.youtube.com/watch?v=Way9Dexny3w">
                <button className="text-[#DD003F] border-[2px] border-[#DD003F] rounded-full px-3 py-1 hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">
                    Watch Trailer
                </button>
            </a>
        </div>

        <div className={`w-fit p-3 rounded-lg flex flex-col gap-2 ${theme === "dark" ? "bg-[#232323]" : "bg-[#e4e4e4]"}`}>
            <img className="w-52 h-72 rounded-lg" src="https://tse3.mm.bing.net/th?id=OIP._Gvw1amb-m8l9Fq0AVkPRgHaJ4&pid=Api" alt="Wolf Man" />
            <div className="flex items-center justify-around">
                <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>Wolf Man</p>
                <p className="text-sm font-medium text-gray-400">25th Oct</p>
            </div>
            <a className="flex justify-center" href="https://www.youtube.com/watch?v=kAw4PH2IQgo">
                <button className="text-[#DD003F] border-[2px] border-[#DD003F] rounded-full px-3 py-1 hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">
                    Watch Trailer
                </button>
            </a>
        </div>

        <div className={`w-fit p-3 rounded-lg flex flex-col gap-2 ${theme === "dark" ? "bg-[#232323]" : "bg-[#e4e4e4]"}`}>
            <img className="w-52 h-72 rounded-lg" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ocmG9jo7aorZtjmewSbfwQuJr95.jpg" alt="Avatar 3" />
            <div className="flex items-center justify-around">
                <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>Avatar 3</p>
                <p className="text-sm font-medium text-gray-400">20th Dec</p>
            </div>
            <a className="flex justify-center" href="https://www.youtube.com/watch?v=JnlGeWRiBms">
                <button className="text-[#DD003F] border-[2px] border-[#DD003F] rounded-full px-3 py-1 hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">
                    Watch Trailer
                </button>
            </a>
        </div>

        <div className={`w-fit p-3 rounded-lg flex flex-col gap-2 ${theme === "dark" ? "bg-[#232323]" : "bg-[#e4e4e4]"}`}>
            <img className="w-52 h-72 rounded-lg" src="https://www.firstcomicsnews.com/wp-content/uploads/2023/11/THE-MARVELS-scaled.jpg" alt="The Marvels" />
            <div className="flex items-center justify-around">
                <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>The Marvels</p>
                <p className="text-sm font-medium text-gray-400">10th Nov</p>
            </div>
            <a className="flex justify-center" href="https://www.youtube.com/watch?v=wS_qbDztgVY">
                <button className="text-[#DD003F] border-[2px] border-[#DD003F] rounded-full px-3 py-1 hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">
                    Watch Trailer
                </button>
            </a>
        </div>

        <div className={`w-fit p-3 rounded-lg flex flex-col gap-2 ${theme === "dark" ? "bg-[#232323]" : "bg-[#e4e4e4]"}`}>
            <img className="w-52 h-72 rounded-lg" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/07/gladiator-2-2024-new-film-poster.jpg" alt="Gladiator 2" />
            <div className="flex items-center justify-around">
                <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>Gladiator 2</p>
                <p className="text-sm font-medium text-gray-400">22nd Nov</p>
            </div>
            <a className="flex justify-center" href="https://www.youtube.com/watch?v=Ts0N8swyWFI">
                <button className="text-[#DD003F] border-[2px] border-[#DD003F] rounded-full px-3 py-1 hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">
                    Watch Trailer
                </button>
            </a>
        </div>

        <div className={`w-fit p-3 rounded-lg flex flex-col gap-2 ${theme === "dark" ? "bg-[#232323]" : "bg-[#e4e4e4]"}`}>
            <img className="w-52 h-72 rounded-lg" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/02/zootopia-2-temp-poster.jpg" alt="Zootopia 2" />
            <div className="flex items-center justify-around">
                <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>Zootopia 2</p>
                <p className="text-sm font-medium text-gray-400">29th Nov</p>
            </div>
            <a className="flex justify-center" href="https://www.youtube.com/watch?v=-Dhz-ZOkNOI">
                <button className="text-[#DD003F] border-[2px] border-[#DD003F] rounded-full px-3 py-1 hover:bg-[#DD003F] hover:text-[#1b1b1b] transition duration-500">
                    Watch Trailer
                </button>
            </a>
        </div>
    </div>
    </div>

        </div>

        </div>

    );
};

export default Others;