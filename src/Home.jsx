import React from 'react'
import Header from './StaticPage/Header'
import { Outlet } from 'react-router-dom'
import Footer from './StaticPage/Footer'
import { Toaster } from 'react-hot-toast';

function Home() {
  return (
    <div className='bg-[#1b1b1b]'>
        <Toaster></Toaster>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Home