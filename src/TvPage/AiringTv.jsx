import React, { useEffect, useState } from 'react';
import TvSlider from '../Components/TvSlider';

function PopularTv() {
    const [airing, setAiring] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setAiring(data.results));
    }, [API_KEY]);

    return (
        <TvSlider title="Airing This Week" series={airing} path='/airing-week' />
    );
}

export default PopularTv;