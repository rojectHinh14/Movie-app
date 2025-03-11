import React from 'react'
import { useLoaderData } from 'react-router-dom'
import RelatedMedia from '../components/FeaturMovie/MediaDetail/RelatedMedia';

const GENDER_MAPPING = {
    0: "Not set",
    1: "Male",
    2: "Female",
    3: "Non-binary",
}

const PeoplePage = () => {
        const peopleInfor = useLoaderData();


  return (

    <div className='max-w-screen-xl flex mx-auto gap-6 px-6 py-10 sm:gap-8 bg-black text-white'>

<div className='flex gap-6'>
        <div className='flex-1' >
        <div>
        <img src={`https://image.tmdb.org/t/p/w500${peopleInfor.profile_path}`} alt="" width={600} height={900} className='mb-6'/>
      </div>
        <div>
            <p className='font-bold text-lg mb-6'>Personal Information</p>
            <div className='space-y-4'>

            <div>
                <p className='font-bold text-lg' >Know For</p>
                <p>{peopleInfor.known_for_department}</p>
            </div>
            <div>
                <p className='font-bold text-lg'>Gender</p>
                <p>{GENDER_MAPPING[peopleInfor.gender]}</p>
            </div>

            <div>
                <p className='font-bold text-lg'>Place of Birdth</p>
                <p>{peopleInfor.place_of_birth}</p>
            </div>

            <div>
                <p className='font-bold text-lg'>Bidthday</p>
                <p>{peopleInfor.birthday}</p>
            </div>
            </div>
        </div>

        </div>
        <div className='flex-2'>
            <p className='font-bold text-2xl mb-6'>{peopleInfor.name}</p>
            <div className='mb-6'>
                <p className='font-bold text-lg mb-4'>Biography</p>
                <p className='whitespace-pre-line'>{peopleInfor.biography}</p>
            </div>
            <RelatedMedia mediaList={peopleInfor.combined_credits?.cast || []}/>
            <div>
                <p>Known For</p>
                
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default PeoplePage
