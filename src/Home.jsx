import React from 'react'
import Header from './StaticPage/Header'
import { Outlet } from 'react-router-dom'
import Footer from './StaticPage/Footer'

function Home() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Home