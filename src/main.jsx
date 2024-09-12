import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App from "./App.jsx";
import './index.css';
import MovieListPage from './pages/MovieListPage.jsx';
import Home from './pages/Home.jsx';
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx';
import MovieDatielPage from './pages/MovieDetailPage.jsx';
import MovieLi


const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [
    {
      index: true,
      element: <Home/>
    },
    {
      path: '/MovieListPage',
      element: <MovieListPage/>
    },
    {
      path: '/Home',
      element: <Home/>
    },
    {
      path: '/MovieDatielPage',
      element: <MovieDatielPage/>
    },
    {
      path: '/MoviesByGenrePage',
      element: <MoviesByGenrePage/>
    },
    {
      path: '/MoviesByGenrePage',
      element: <MoviesByGenrePage/>
    }
  ]

])



{/* Deve ter as rotas:
  home
  filmes
  Detalhes do Filme
  Lista de gêneros
  Filmes por gênero
  Page Not Found
  */}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <App />
  </StrictMode>,
)
