import React, { useEffect, useState } from 'react';
import MovieSlider from '../Components/MovieSlider';

function Trending() {
    const [trending, setTrending] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1&api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setTrending(data.results));
    }, [API_KEY]);

    return (
        <MovieSlider title="Trending This Week" movies={trending} />
    );
}

export default Trending;
