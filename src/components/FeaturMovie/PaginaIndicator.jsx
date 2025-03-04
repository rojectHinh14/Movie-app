import React from 'react'

const PaginaIndicator = ({movies, activeMovieId, setActiveMocieId}) => {
  return (
    <div className="absolute right-8 bottom-[10%]">

    <ul className="flex gap-1">
      {
        movies.map((movie)  =>     <li
        onClick={()=>{setActiveMocieId(movie.id)}}
        key={movie.id} 
        className={`w-6 h-1 cursor-pointer  ${movie.id === activeMovieId ? 'bg-slate-100': 'bg-slate-600'}`}></li>
        )
      }
   
    </ul>
    </div>
  )
}

export default PaginaIndicator
