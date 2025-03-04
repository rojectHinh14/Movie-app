import React from 'react'
import CircularProgressBar from './CircularProgressBar'
import { Link } from 'react-router-dom'

const MovieCard = ({id, title, releaseDate, poster, point, mediaType }) => {
  return (
    <Link to={`/movie/${id}`} className='border-slate-800 rounded-lg relative'>
        <div className='border '>
      {
        mediaType === 'tv' && (
          <p className='absolute right-1 top-1 bg-black text-white p-1 text-sm round shadow-md font-bold'>TV Show</p>
        )
      }
      <img className='rounded-lg' src={`https://image.tmdb.org/t/p/w500${poster}`} alt="" />
      <div className='px-4 relative -top-[1.5vw]'>
        <CircularProgressBar percent={Math.round(point *10)} strokeColor= {point >= 7 ? 'green' : point >= 5 ? 'orange' : 'red'} />
        <p className='font-bold mt-2'>{title}</p>
        <p className='text-slate-300'>{releaseDate}</p>
      </div>
    </div>
    </Link>

  )
}

export default MovieCard
