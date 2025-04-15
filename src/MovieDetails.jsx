import React from 'react'
import { useLoaderData } from 'react-router-dom'

function MovieDetails() {

    let { loadDetails, loadImages, loadVideos, loadCredits, loadsimilar } = useLoaderData();

    let time = loadDetails.runtime
    let hour = Math.floor(time / 60)
    let min = time % 60

    return (
        <div className='w-[90%] mx-auto'>
            <div className='flex gap-10'>
                <div>
                    <h1 className='text-5xl text-white'>{loadDetails.original_title}</h1>
                    <p className='text-gray-400'>Duration {hour}h {min}m</p>
                    <div className='flex gap-2'>
                        <img className='w-80 rounded-lg hover:brightness-75 transition duration-300' src={`https://image.tmdb.org/t/p/w1280${loadDetails.poster_path}`} alt="" />
                        <iframe className='rounded-lg hover:brightness-75 transition duration-300' width="800px" height="fit"
                            src={`https://www.youtube.com/embed/${loadVideos.results[0].key}`}
                            title="YouTube video player">
                        </iframe>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        {loadDetails.genres.map((gen) => (
                            <div key={gen.id} className='border-[0.5px] text-[#DD003F] border-[#DD003F] w-fit rounded-full px-2'>
                                <p>{gen.name}</p>
                            </div>
                        ))}
                    </div>
                    <p className='text-white py-2'>{loadDetails.overview}</p>
                    <div>
                        <div className="flex gap-3 items-center py-6">
                            <div className="w-[6px] h-[40px] bg-[#DD003F]"></div>
                            <p className="text-3xl font-medium text-white">Top Cast</p>
                        </div>
                        <div className='grid grid-cols-3'>
                            {loadCredits.cast.slice(0, 18).map((cast) => (
                                <div key={cast.id} >
                                    <div className='flex items-center gap-4 my-4'>
                                        <img className='w-20 h-20 object-cover rounded-full' src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} alt="" />
                                        <div>
                                            <p className='text-xl text-white font-medium hover:text-[#DD003F] transition duration-300 cursor-pointer'>{cast.name}</p>
                                            <p className='text-gray-400'>{cast.character}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col items-center py-6'>
                            <button className='text-[#DD003F] border-[2px] text-lg w-fit py-2 px-3 font-medium rounded-lg hover:text-[#212121] hover:bg-[#DD003F] cursor-pointer transition duration-300'>Show All Cast</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-3 items-center mt-4">
                            <div className="w-[6px] h-[40px] bg-[#DD003F]"></div>
                            <p className="text-3xl font-medium text-white">All Videos</p>
                        </div>
                        <div className='flex gap-3 my-4'>
                            {loadVideos.results.map((result) => (
                                <div key={result.id}>
                                    <iframe
                                        className='rounded-lg hover:brightness-75 transition duration-300 w-[600px] h-[338px]'
                                        src={`https://www.youtube.com/embed/${result.key}`}
                                        title="YouTube video player"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-3 items-center mt-10">
                            <div className="w-[6px] h-[40px] bg-[#DD003F]"></div>
                            <p className="text-3xl font-medium text-white">Photos</p>
                        </div>
                        <div className='grid grid-cols-3 gap-4 my-4'>
                            {loadImages.backdrops.map((backdrop) => (
                                <div >
                                    <img className='rounded-lg' src={`https://image.tmdb.org/t/p/w1280${backdrop.file_path}`} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-3 items-center py-6">
                        <div className="w-[6px] h-[40px] bg-[#DD003F]"></div>
                        <p className="text-3xl font-medium text-white">Similar Movies</p>
                    </div>
                    <div className='my-4'>
                        {loadsimilar.results.map((result) => (
                            <div className='flex gap-2 border-[0.5px] border-[#DD003F] rounded-lg w-[350px] my-4 p-2' key={result.id}>
                                <img className='rounded-lg w-16' src={`https://image.tmdb.org/t/p/w200${result.poster_path}`} alt="" />
                                <div className='flex flex-col justify-around'>
                                    <p className='text-xl text-white'>{result.title}</p>
                                    <p className='text-gray-400'>{result.release_date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieDetails