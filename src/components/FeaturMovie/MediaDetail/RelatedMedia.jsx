import React from 'react'
import MovieCard from '../../MovieCard'

const RelatedMedia = ({mediaList=[]}, title, className) => {
  return (
    <div className={className}>
      {title && <p className='font-bold text-[1.4vw] mb-4'>{title}</p>}
      <div className='grid grid-cols-3 sm:grid-cols-4 gap-10'>
        {mediaList.map((media)=>(
            <MovieCard 
            key={media.id}
            id={media.id}
            title={media.title}
            releaseDate={media.release_date}
            poster={media.poster_path}
            point={media.vote_average }
            mediaType={media.media_type}
            />
        ))}
      </div>
    </div>
  )
}

export default RelatedMedia
