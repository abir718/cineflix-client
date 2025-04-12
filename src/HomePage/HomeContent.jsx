import React from 'react'
import PopularHome from './PopularHome'
import TopRated from './TopRated'
import UpcomingMovies from './UpcomingMovies'
import Trending from './Trending'

function HomeContent() {
  return (
    <div>
        <TopRated></TopRated>
        <PopularHome></PopularHome>
        <UpcomingMovies></UpcomingMovies>
        <Trending></Trending>
    </div>
  )
}

export default HomeContent