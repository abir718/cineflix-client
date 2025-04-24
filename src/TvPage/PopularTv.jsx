import React, { useEffect, useState } from 'react';
import TvSlider from '../Components/TvSlider';

function PopularTv() {
    const [trending, setTrending] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setTrending(data.results));
    }, [API_KEY]);

    return (
        <TvSlider title="Popular Tv Shows" series={trending} path='/popular-tv' />
    );
}

export default PopularTv;