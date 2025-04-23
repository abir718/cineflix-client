import React from 'react'
import AiringToday from './AiringToday'
import PopularTv from './PopularTv'
import TopRatedTv from './TopRatedTv'
import AiringTv from './AiringTv'

function TvContent() {
  return (
    <div>
        <AiringToday></AiringToday>
        <PopularTv></PopularTv>
        <TopRatedTv></TopRatedTv>
        <AiringTv></AiringTv>
    </div>
  )
}

export default TvContent