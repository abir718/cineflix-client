import React from 'react'
import PopularMovies from './PopularMovies'
import TopRated from './TopRated'
import UpcomingMovies from './UpcomingMovies'
import Trending from './Trending'
import PopularPeople from './PopularPeople'

function HomeContent() {
  return (
    <div>
        <TopRated></TopRated>
        <PopularMovies></PopularMovies>
        <UpcomingMovies></UpcomingMovies>
        <Trending></Trending>
        <PopularPeople></PopularPeople>
    </div>
  )
}

export default HomeContent