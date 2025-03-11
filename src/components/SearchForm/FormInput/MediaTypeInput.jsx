import React from 'react'

const MediaTypeInput = ({onChange, name, value}) => {
  return (
    <div className='accent-black'>

      <input type="radio" id="sf-type-movie" name={name} value="movie" onChange={onChange} checked={value === "movie"} 
      className='mr-1'
      />
      <label htmlFor="sf-type-movie">Movie</label> <br />


      <input type='radio' id="sf-type-tv" name={name} value="tv" onChange={onChange} checked={value === "tv"}/>
      <label htmlFor='sf-type-tv'>Tv Show</label>
    </div>
  )
}

export default MediaTypeInput
