import React from 'react'
import PopularHome from './PopularHome'
import TopRated from './TopRated'
import UpcomingMovies from './UpcomingMovies'
import Trending from './Trending'
import PopularPeople from './PopularPeople'

function HomeContent() {
  return (
    <div>
        <TopRated></TopRated>
        <PopularHome></PopularHome>
        <UpcomingMovies></UpcomingMovies>
        <Trending></Trending>
        <PopularPeople></PopularPeople>
    </div>
  )
}

export default HomeContent