import React, { useState } from 'react'
import ActorInfor from './MediaDetail/ActorInfor'

const ActorList = ({actors =[]}) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentActor = isShowMore ? actors.slice(0,32) : actors.slice(0,4)
  return (
    <div>
        <p className='font-bold text-[1.4vw] mb-4'>Actor</p>
        <div className='grid grid-cols-3 gap-4 sm:grid-cols-4'>
               {
                  currentActor.map((actor) => (
                    <ActorInfor                    
                    key={actor.id}
                    id={actor.id}
                    name ={actor.name}
                    character = {actor.character}
                    profilePath ={actor.profile_path}
                    />
                  ))
                }
              

        </div>
        <p className='cursor-pointer mt-1 ' onClick={() =>{
          setIsShowMore(!isShowMore)
        }}>{isShowMore ? "Show Less" : "Show More"}</p>
    </div>
  )
}

export default ActorList
