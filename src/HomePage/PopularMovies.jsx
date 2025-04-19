import React, { useEffect, useState } from 'react';
import MovieSlider from '../Components/MovieSlider';

function PopularMovies() {
    const [popular, setPopular] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setPopular(data.results));
    }, [API_KEY]);

    return <MovieSlider title="Popular Movies" movies={popular} path='/popular-movies' />;
}

export default PopularMovies;
