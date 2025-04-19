import React, { useEffect, useState } from 'react';
import MovieSlider from '../Components/MovieSlider';

function TopRated() {
    const [top, setTop] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setTop(data.results));
    }, [API_KEY]);

    return (
        <MovieSlider movies={top} title="Top Movies" path="/top-movies" />
    );
}

export default TopRated;
