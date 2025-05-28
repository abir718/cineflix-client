import React, { useEffect, useState } from 'react'
import Header from './StaticPage/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './StaticPage/Footer'
import { Toaster } from 'react-hot-toast';
import Loading from './Components/Loading';


function Home() {

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (navigation.state === "loading") {
      setShowLoader(true);
    } else {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 2000);

      return () => clearTimeout(timer); 
    }
  }, [navigation.state]);
  
  return (
    <div className='bg-[#1b1b1b]'>
      {showLoader && <Loading />}
      <Toaster></Toaster>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Home