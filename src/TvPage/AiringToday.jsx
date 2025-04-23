import React, { useEffect, useState } from 'react';
import MovieSlider from '../Components/MovieSlider';
import TvSlider from '../Components/TvSlider';

function AiringToday() {
    const [trending, setTrending] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setTrending(data.results));
    }, [API_KEY]);

    return (
        <TvSlider title="Airing Today" series={trending} path='/trending-movies' />
    );
}

export default AiringToday;