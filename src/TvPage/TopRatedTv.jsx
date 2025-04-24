import React, { useEffect, useState } from 'react';
import TvSlider from '../Components/TvSlider';

function PopularTv() {
    const [popularTv, setPopularTv] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setPopularTv(data.results));
    }, [API_KEY]);

    return (
        <TvSlider title="Top Rated TV Shows" series={popularTv} path='/top-rated-tv' />
    );
}

export default PopularTv;