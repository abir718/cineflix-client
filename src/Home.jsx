import React from 'react'
import Header from './StaticPage/Header'
import { Outlet } from 'react-router-dom'
import Footer from './StaticPage/Footer'

function Home() {
  return (
    <div className='bg-[#1b1b1b]'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Home