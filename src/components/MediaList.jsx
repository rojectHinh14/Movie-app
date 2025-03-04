import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'



const MediaList = ({title, tabs}) => {

  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  useEffect(() => {
    const url =tabs.find(tab => tab.id === activeTabId)?.url
    if(url){

      fetch(url, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDNjMjQ5MDYwNTFjNjQ0NjcyZjM1ZGFlZWE0MDNlOSIsIm5iZiI6MTczOTg2ODQyNi42NjYsInN1YiI6IjY3YjQ0OTBhZDQ0ZGNhZmUwZjlmOWU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JpX8plHRFe0myt-L4fNc--Nqj05UCMtl0KOTt6R6DGY`
        }
      }).then(async (res) => {
        const data = await res.json();
        console.log({data})
        const trendingMovieList = data.results.slice(0,12);
        setMediaList(trendingMovieList)
       
      });
    }
  }, [activeTabId, tabs]);

  return (
    <div className="px-8 text-[1.2vw] py-10 bg-black text-white">
        <div className="flex items-center gap-4 mb-6"> 

        <p className="text-[2vw] font-bold">{title}</p>
        <ul className='flex border border-white rounded'>
            {/* <li className='bg-white text-black px-2 py-1 rounded cursor-pointer'>All</li>
            <li className='bg-white text-black px-2 py-1 rounded cursor-pointer'>Movie</li>
            <li className='bg-white text-black px-2 py-1 rounded cursor-pointer'>TV show</li> */}
            {
              tabs.map((tab)=>(
                <li key={tab.id}
                onClick={() => setActiveTabId(tab.id)} 
                className={` px-2 py-1 rounded cursor-pointer ${tab.id === activeTabId ? "text-black bg-white" : ""} `}>Movie</li>
              ))
            }

        </ul>


        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
        {
  mediaList.map(media => {
    return (
      <MovieCard 
        id={media.id}
        key={media.id} 
        title={media.title || media.name} 
        releaseDate={media.release_date || media.first_air_date} 
        poster={media.poster_path} 
        point={media.vote_average} 
        mediaType={media.media_type
        } 
      />
    );
  })
}


        </div>
 
    </div>
  )
}

export default MediaList
