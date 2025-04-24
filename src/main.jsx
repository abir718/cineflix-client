import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Home.jsx';
import HomeContent from './HomePage/HomeContent.jsx';
import MovieDetails from './MovieDetails.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AllTopMovies from './DetailedPreview/AllTopMovies.jsx';
import AllPopularMovies from './DetailedPreview/AllPopularMovies.jsx';
import AllUpcomingMovies from './DetailedPreview/AllUpcomingMovies.jsx';
import AllTrendingMovies from './DetailedPreview/AllTrendingMovies.jsx';
import AllPopularPeople from './DetailedPreview/AllPopularPeople.jsx';
import TvContent from './TvPage/TvContent.jsx';
import AllAiringToday from './TvDetails/AllAiringToday.jsx';

const API_KEY = import.meta.env.VITE_API_KEY;


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
        element: <HomeContent></HomeContent>
      },
      {
        path: "/tv-shows",
        element: <TvContent></TvContent>
      }, 
      {
        path: "/movie-details/:id",
        element: <MovieDetails></MovieDetails>,

        loader: async ({ params }) => {
          const details = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`)
          const images = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/images?api_key=${API_KEY}`)
          const videos = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${API_KEY}`)
          const credits = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${API_KEY}`)
          const similar = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${API_KEY}`)
          const recommendations = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`)
          const loadDetails = await details.json(); 
          const loadImages = await images.json(); 
          const loadVideos = await videos.json(); 
          const loadCredits = await credits.json(); 
          const loadsimilar = await similar.json(); 
          const loadRecommendations = await recommendations.json(); 
          return { loadDetails , loadImages , loadVideos , loadCredits , loadsimilar , loadRecommendations };
        },
        
      },
      {
        path: "/login",
        element: <Login></Login>
      },      
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/top-movies",
        element: <AllTopMovies></AllTopMovies>
      },
      {
        path: "/popular-movies",
        element: <AllPopularMovies></AllPopularMovies>
      },
      {
        path: "/upcoming-movies",
        element: <AllUpcomingMovies></AllUpcomingMovies>
      },
      {
        path: "/trending-movies",
        element: <AllTrendingMovies></AllTrendingMovies>
      },
      {
        path: "/popular-people",
        element: <AllPopularPeople></AllPopularPeople>
      },
      {
        path: "/airing-today",
        element: <AllAiringToday></AllAiringToday>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
