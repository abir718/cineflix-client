import React, { useEffect, useState } from 'react';
import TvSlider from '../Components/TvSlider';

function AiringToday() {
    const [airingToday, setAiringToday] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setAiringToday(data.results));
    }, [API_KEY]);

    return (
        <TvSlider title="Airing Today" series={airingToday} path='/airing-today' />
    );
}

export default AiringToday;