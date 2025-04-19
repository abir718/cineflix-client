import React, { useEffect, useState } from 'react';
import MovieSlider from '../Components/MovieSlider';

function UpcomingMovies() {
    const [upcoming, setUpcoming] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];

        const fetchPages = async () => {
            try {
                const [page1, page2, page3, page4, page5, page6, page7, page8] = await Promise.all([
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`).then(res => res.json()),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2&api_key=${API_KEY}`).then(res => res.json()),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=3&api_key=${API_KEY}`).then(res => res.json()),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=4&api_key=${API_KEY}`).then(res => res.json()),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=5&api_key=${API_KEY}`).then(res => res.json()),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=6&api_key=${API_KEY}`).then(res => res.json()),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=7&api_key=${API_KEY}`).then(res => res.json()),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=8&api_key=${API_KEY}`).then(res => res.json())
                ]);

                const combinedResults = [...page1.results, ...page2.results, ...page3.results, ...page4.results, ...page5.results, ...page6.results, ...page7.results, ...page8.results];
                const filteredMovies = combinedResults.filter(movie => movie.release_date > today);
                setUpcoming(filteredMovies.slice(0, 12)); 

            } catch (error) {
                console.error("Error fetching upcoming movies:", error);
            }
        };

        fetchPages();
    }, [API_KEY]);

    return <MovieSlider movies={upcoming} title="Upcoming Movies" />;
}

export default UpcomingMovies;
