import React from 'react'
import { Link } from 'react-router-dom';

const movieGenres = [
  { id: 28, name: "Action", image: "images/action.png" },
  { id: 12, name: "Adventure", image: "images/adventure.png" },
  { id: 16, name: "Animation", image: "images/animation.png" },
  { id: 35, name: "Comedy", image: "images/comedy.png" },
  { id: 80, name: "Crime", image: "images/crime.png" },
  { id: 99, name: "Documentary", image: "images/documentary.png" },
  { id: 18, name: "Drama", image: "images/drama.png" },
  { id: 10751, name: "Family", image: "images/family.png" },
  { id: 14, name: "Fantasy", image: "images/fantasy.png" },
  { id: 36, name: "History", image: "images/history.png" },
  { id: 27, name: "Horror", image: "images/horror.png" },
  { id: 10402, name: "Music", image: "images/music.png" },
  { id: 9648, name: "Mystery", image: "images/mystery.png" },
  { id: 10749, name: "Romance", image: "images/romance.png" },
  { id: 878, name: "Science Fiction", image: "images/science.png" },
  { id: 10770, name: "TV Movie", image: "images/tvmovie.png" },
  { id: 53, name: "Thriller", image: "images/thriller.png" },
  { id: 10752, name: "War", image: "images/war.png" },
  { id: 37, name: "Western", image: "images/western.png" },
  { id: 10762, name: "Kids", image: "images/kids.png" },
  { id: 10763, name: "News", image: "images/news.png" },
  { id: 10764, name: "Reality", image: "images/reality.png" },
  { id: 10765, name: "Sci-Fi & Fantasy", image: "images/scifi.png" },
  { id: 10767, name: "Talk", image: "images/talk.png" },
  { id: 10768, name: "War & Politics", image: "images/politics.png" }
];



function Browse() {
  return (
    <div className='w-[95%] mx-auto py-6'>
      <div className="flex gap-3 items-center">
        <div className="w-[8px] h-[38px] bg-[#DD003F]"></div>
        <p className="text-3xl font-medium text-white">Browse Movies & TV Shows by Genre</p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center p-4">
        {movieGenres.map((movie) => (
          <Link key={movie.id} to={`/browse/${movie.id}`}>
            <div className="bg-[#262626] rounded-md overflow-hidden shadow-md w-80">
              <img className="w-full hover:opacity-75 transition duration-300" src={movie.image} alt={movie.name} />
              <div className="p-2">
                <p className="text-white text-lg font-semibold hover:text-[#DD003F] transition duration-300 cursor-pointer">{movie.name}</p>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>

  )
}

export default Browse