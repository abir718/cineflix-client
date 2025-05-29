import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Home.jsx';
import HomeContent from './HomePage/HomeContent.jsx';
import MovieDetails from './DetailedPreview/MovieDetails.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AllTopMovies from './DetailedPreview/AllTopMovies.jsx';
import AllPopularMovies from './DetailedPreview/AllPopularMovies.jsx';
import AllUpcomingMovies from './DetailedPreview/AllUpcomingMovies.jsx';
import AllTrendingMovies from './DetailedPreview/AllTrendingMovies.jsx';
import AllPopularPeople from './DetailedPreview/AllPopularPeople.jsx';
import TvContent from './TvPage/TvContent.jsx';
import AllAiringToday from './TvDetails/AllAiringToday.jsx';
import AllTopRatedTv from './TvDetails/AllTopRatedTv.jsx';
import AllPopularTv from './TvDetails/AllPopularTv.jsx';
import AllAiringThisWeek from './TvDetails/AllAiringThisWeek.jsx';
import TvDetails from './TvDetails/TvDetails.jsx';
import AuthProvider from './AuthProvider.jsx';
import Browse from './Browse/Browse.jsx';
import BrowseGenre from './Browse/BrowseGenre.jsx';
import News from './News.jsx';
import Watchlist from './Components/Watchlist.jsx';

const API_KEY = import.meta.env.VITE_API_KEY;


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
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
          return { loadDetails, loadImages, loadVideos, loadCredits, loadsimilar, loadRecommendations };
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
        path: "/news",
        element: <News></News>
      },
      {
        path: "/browse",
        element: <Browse></Browse> 
      },      
      {
        path: "/watchlist",
        element: <Watchlist></Watchlist>,
        loader: () => fetch('https://cineflix-main-server.vercel.app/watchlist')
      },
      {
        path: "/browse/:id",
        element: <BrowseGenre />,
        loader: ({ params }) =>
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${params.id}&page=1`)
            .then(res1 => res1.json())
            .then(data1 => {
              return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${params.id}&page=2`)
                .then(res2 => res2.json())
                .then(data2 => {
                  return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${params.id}&page=3`)
                    .then(res3 => res3.json())
                    .then(data3 => {
                      const combined = data1.results.concat(data2.results, data3.results);
                      return combined;
                    });
                });
            })
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
      {
        path: "/top-rated-tv",
        element: <AllTopRatedTv></AllTopRatedTv>
      },
      {
        path: "/popular-tv",
        element: <AllPopularTv></AllPopularTv>
      },
      {
        path: "/airing-week",
        element: <AllAiringThisWeek></AllAiringThisWeek>
      },
      {
        path: "/tv-details/:id",
        element: <TvDetails></TvDetails>,

        loader: async ({ params }) => {
          const details = await fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=${API_KEY}`)
          const images = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/images?api_key=${API_KEY}`)
          const videos = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/videos?api_key=${API_KEY}`)
          const credits = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=${API_KEY}`)
          const similar = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/similar?api_key=${API_KEY}`)
          const recommendations = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/recommendations?api_key=${API_KEY}`)
          const loadDetails = await details.json();
          const loadImages = await images.json();
          const loadVideos = await videos.json();
          const loadCredits = await credits.json();
          const loadsimilar = await similar.json();
          const loadRecommendations = await recommendations.json();
          return { loadDetails, loadImages, loadVideos, loadCredits, loadsimilar, loadRecommendations };
        },

      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
