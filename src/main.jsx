import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage.jsx';
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import MovieDeatil from './pages/MovieDeatil.jsx';
import RootLayout from './pages/RootLayout.jsx';
import PeoplePage from './pages/PeoplePage.jsx';

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
      const res = await  fetch(`https://api.themoviedb.org/3/person/${params.id}`,
   { headers: {
         accept: 'application/json',
        Authorization: `Bearer  ${import.meta.env.VITE_API_TOKEN}`,
    },
  }
);
return res;
}
    }
  ]}
   
])
createRoot(document.getElementById('root')).render(

  <StrictMode>
  <RouterProvider  router={router}></RouterProvider >
  </StrictMode>,
)
