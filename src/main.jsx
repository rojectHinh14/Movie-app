import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout.jsx';
import { lazy } from 'react';
const MovieDeatil = lazy(() => import('./pages/MovieDeatil.jsx'))
const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const PeoplePage = lazy(() => import('./pages/PeoplePage.jsx'))
const SearchPage = lazy(() => import('./pages/SearchPage.jsx'))

const router = createBrowserRouter([
  {
    element : <RootLayout/>,
    children: [
      { 
        path: '/',
      element: <HomePage/>
    },
    {
      path: '/movie/:id',
      element: <MovieDeatil/>
    },
    {
      path: '/people/:id',
      element: <PeoplePage/>,
      loader: async({params})=>{
      const res = await  fetch(`https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
   { headers: {
         accept: 'application/json',
        Authorization: `Bearer  ${import.meta.env.VITE_API_TOKEN}`,
    },
  },
 
);
return res;
}
    },
    {
      path: '/search',
      element: <SearchPage/>
    }
  ]}
   
])
createRoot(document.getElementById('root')).render(

  <StrictMode>
  <RouterProvider  router={router}></RouterProvider >
  </StrictMode>,
)
