import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import Banner from '../components/Banner'
import ActorList from '../components/FeaturMovie/ActorList'
import RelatedMedia from '../components/FeaturMovie/MediaDetail/RelatedMedia'
import MovieInformation from '../components/FeaturMovie/MediaDetail/MovieInformation'
import useFetch from '../hooks/useFetch'


const MovieDeatil = () => {
    const {id} = useParams();

    // const [movieInfor, setMoviInfor] =useState({});
    // const [isLoading, setIsLoading] = useState(false);
    const [isRelatedMovieLoading, setIsRelatedMovieLoading] = useState()
   
  const {data : movieInfor, isLoading} =useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits`
  })
    const {data: recommandationsResponse, isLoading: isRelatedMoviesLoading} =useFetch({
      url: `/movie/${id}/recommendations`
    })
    const relatedMovie = recommandationsResponse.results || [];
  
 
    if(isLoading){
      return <Loading/>
     
    }
    return (
<div>
  <Banner mediaInfor={movieInfor}/>
  <div className='bg-black text-white text-[1.2vw]'>
  <div className='mx-auto flex max-w-screen-xl gap-6 sm:gap-32 px-6 py-10 '>
<div className='flex-[2]'>

  <ActorList actors={movieInfor.credits?.cast || []}/>
  <RelatedMedia mediaList={relatedMovie} isLoading={isRelatedMovieLoading} title= "More like this"  className="mt-6"/>
</div>
<div className='1'>
  <MovieInformation movieInfor={movieInfor}/>
</div>
  </div>
  </div>
</div>
  )
}

export default MovieDeatil
