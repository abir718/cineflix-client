import React from 'react'
import { useLoaderData } from 'react-router-dom'

function MovieDetails() {

    let { loadDetails , loadImages , loadVidoes , loadCredits , loadReviews , loadRecommendations } = useLoaderData();
    console.log(loadDetails)

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w1280${loadDetails.backdrop_path}`} alt="" />
        </div>
    )
}

export default MovieDetails