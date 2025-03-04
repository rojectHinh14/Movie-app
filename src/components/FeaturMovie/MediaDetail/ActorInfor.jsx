import React from 'react'
import { Link } from 'react-router-dom'

const ActorInfor = ({id, name, character, profilePath}) => {
  return (
   <Link to={`/people/${id}`}>
    <div className='bg-black text-white border border-slate-300 shadow-sm rounded-lg'>
 <img
        className="rounded-lg"
        src={
          profilePath
          ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
          : "/review-phim-nhung-manh-ghep-cam-xuc-2-nhan-vat.jpg.webp"
        }
      />    <div className='p-3'>
        <p className='font-bold'>{name}</p>
        <p>{character}</p>
        {/* <p>18</p> */}
    </div>
  </div>
   
   </Link>
   
  )
}

export default ActorInfor
