import React from 'react'
import { useLoaderData } from 'react-router-dom'

function MovieDetails() {

    let { loadDetails, loadImages, loadVideos, loadCredits, loadReviews, loadRecommendations } = useLoaderData();

    let time = loadDetails.runtime
    let hour = Math.floor(time / 60)
    let min = time % 60

    return (
        <div >
            <div>
                <h1 className='text-5xl text-[#DD003F]'>{loadDetails.original_title}</h1>
                <p className='text-gray-400'>Duration {hour}h {min}m</p>
            </div>
            <div className='flex gap-2'>
                <img className='w-80 rounded-lg hover:brightness-75 transition duration-300' src={`https://image.tmdb.org/t/p/w1280${loadDetails.poster_path}`} alt="" />
                <iframe className='rounded-lg hover:brightness-75 transition duration-300' width="800px" height="fit"
                    src={`https://www.youtube.com/embed/${loadVideos.results[0].key}`}
                    title="YouTube video player">
                </iframe>
            </div>
            <div className='flex gap-2 mt-4'>
                {loadDetails.genres.map((gen)=>(
                    <div key={gen.id} className='border-[0.5px] text- text-[#DD003F] border-[#DD003F] w-fit rounded-full px-2'>
                        <p>{gen.name}</p>
                    </div>
                ))}
            </div>
            <p className='text-white'>{loadDetails.overview}</p>


        </div>
    )
}

export default MovieDetails