import React from 'react'
import PopularMovies from './PopularMovies'
import TopRated from './TopRated'
import UpcomingMovies from './UpcomingMovies'
import Trending from './Trending'
import PopularPeople from './PopularPeople'
import MovieSlides from './MovieSlides'

function HomeContent() {
  return (
    <div>
      <MovieSlides></MovieSlides>
        <TopRated></TopRated>
        <PopularMovies></PopularMovies>
        <UpcomingMovies></UpcomingMovies>
        <Trending></Trending>
        <PopularPeople></PopularPeople>
    </div>
  )
}

export default HomeContent