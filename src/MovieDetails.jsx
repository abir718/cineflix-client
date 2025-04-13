import React from 'react'
import { useLoaderData } from 'react-router-dom'

function MovieDetails() {

    let { loadDetails, loadImages, loadVideos, loadCredits, loadReviews, loadRecommendations } = useLoaderData();
    console.log(loadDetails)


    return (
        <div className='flex gap-2'>
            <img className='w-80 rounded-lg hover:brightness-75 transition duration-300' src={`https://image.tmdb.org/t/p/w1280${loadDetails.poster_path}`} alt="" />
            <iframe className='rounded-lg hover:brightness-75 transition duration-300' width="800px" height="fit"
                src={`https://www.youtube.com/embed/${loadVideos.results[0].key}`}
                title="YouTube video player"
                frameborder="0"
                allowfullscreen>
            </iframe>
        </div>
    )
}

export default MovieDetails