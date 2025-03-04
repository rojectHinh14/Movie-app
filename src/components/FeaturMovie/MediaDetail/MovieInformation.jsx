import React from 'react'
import { currencyFormatter } from '../../../libs/ultils'

const MovieInformation = ({movieInfor={}}) => {
  return (
    <div>
      <p className='mb-4 text-[1.4vw] font-bold'>Movie Information</p>
      <div  className='mb-4'>
        <p className='font-bold'>Name</p>
        <p>{movieInfor.original_title}</p>
      </div>

      <div  className='mb-4'>
        <p className='font-bold'>Original Country</p>
        {
           ( movieInfor.origin_country || []).map(countryCode => 
            <img key={countryCode} src={`https://flagcdn.com/48x36${countryCode.toLowerCase()}.png`} alt=""
            className='w-[1.4vw] mt-1 mr-1' />
           )
        }
      </div>

      <div  className='mb-4'>
        <p className='font-bold'>Status</p>
        <p>{movieInfor.status}</p>
      </div>

      <div  className='mb-4'>
        <p className='font-bold'>Budget</p>
      <p>{currencyFormatter(movieInfor.budget)}</p>
      </div>

      <div  className='mb-4'>
        <p className='font-bold'>Revunue</p>
        <p>{currencyFormatter(movieInfor.revenue)}</p>
      </div>

    </div>
  )
}

export default MovieInformation
