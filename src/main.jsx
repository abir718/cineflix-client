import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Home.jsx';
import HomeContent from './HomePage/HomeContent.jsx';
import MovieDetails from './MovieDetails.jsx';

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
        path: "/movie-details/:id",
        element: <MovieDetails></MovieDetails>,

        loader: async ({ params }) => {
          const details = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`)
          const images = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/images?api_key=${API_KEY}`)
          const videos = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${API_KEY}`)
          const credits = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${API_KEY}`)
          const reviews = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=${API_KEY}`)
          const recommendations = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`)
          const loadDetails = await details.json(); 
          const loadImages = await images.json(); 
          const loadVidoes = await videos.json(); 
          const loadCredits = await credits.json(); 
          const loadReviews = await reviews.json(); 
          const loadRecommendations = await recommendations.json(); 
          return { loadDetails , loadImages , loadVidoes , loadCredits , loadReviews , loadRecommendations };
        },
        
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
