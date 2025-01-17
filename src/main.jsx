import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Home.jsx';
import Error from './Error.jsx';

import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import News from './components/News.jsx';
import Addmovies from './components/Addmovies.jsx';
import Allmovies from './components/Allmovies.jsx';
import Favourites from './components/Favourites.jsx';
import Homecontent from './Home Content/Homecontent.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Homecontent></Homecontent>,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/addmovies',
        element: <Addmovies />,
      },
      {
        path: '/allmovies',
        element: <Allmovies />,
      },
      {
        path: '/favourites',
        element: <Favourites />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
