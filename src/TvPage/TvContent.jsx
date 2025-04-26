import React from 'react'
import AiringToday from './AiringToday'
import PopularTv from './PopularTv'
import TopRatedTv from './TopRatedTv'
import AiringTv from './AiringTv'
import TvSlides from './TvSlides'

function TvContent() {
  return (
    <div>
        <TvSlides></TvSlides>
        <AiringToday></AiringToday>
        <TopRatedTv></TopRatedTv>
        <PopularTv></PopularTv>
        <AiringTv></AiringTv>
    </div>
  )
}

export default TvContent