import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlay } from "@fortawesome/free-solid-svg-icons";


const Movie = (props) => {
  const {data :{backdrop_path, title, release_date, overview}} = props
  return (
    <div>
          <img
      src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      className="aspect-video brightness-50"
    />
    <div className="absolute bottom-[10%] left-8 w-1/2 text-white sm:w-1/3">
      <p className="font-bold sm:text-[2vw] mb-2">{title}</p>
      <div>
        <p className="text-gray-400 border border-gray-400 p-1 mb-1 inline-block">PG13</p>
        <p className="text-[1.2vw]">{release_date}</p>
      </div>
      <div>
        <div className="hidden sm:block text-[1.2vw] mt-4">
          <p className="font-bold mb-2">Overview</p>
          <p>
           {overview}
          </p>
        </div>
      </div>
      <div className="mt-4"> 
        <button className="bg-white mr-2 text-black py-2 px-4 rounded- text-[10px] lg:text-lg">
          {" "}
          <FontAwesomeIcon icon={faPlay} />
          Trailer
        </button>
        <button className="bg-slate-300/35 text-black/50 py-2 px-4 rounded- text-[10px] lg:text-lg">View Detail</button>
      </div>
    </div>
    </div>
  )
}

export default Movie
