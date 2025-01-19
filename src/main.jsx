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
import Auth from './Authprovider';
import Details from './components/Details.jsx';
import Hidden from './Hidden.jsx';

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
        element: <Hidden><Addmovies/></Hidden>,
      },
      {
        path: '/allmovies',
        element: <Allmovies />,
        loader: () => fetch('http://localhost:5000/addmovies')
      },
      {
        path: '/allmovies/:id',
        element: <Hidden><Details/></Hidden>,
        loader: ({params}) => fetch(`http://localhost:5000/addmovies/${params.id}`)
      },

      
      {
        path: '/favourites',
        element:<Hidden><Favourites/></Hidden>,
        loader: () => fetch('http://localhost:5000/favmovies')
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth>
    <RouterProvider router={router} />
    </Auth>
  </StrictMode>
)
