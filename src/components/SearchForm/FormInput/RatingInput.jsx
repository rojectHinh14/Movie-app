import React from 'react'

const RatingInput = ({ onChange, name }) => {
    return (
      <select className='rounded border' name={name} onChange={onChange} defaultValue="">
          <option value="All">All</option>
          <option value="0-49">0-49</option> 
          <option value="50-69">50-69</option>
          <option value="70-100">70-100</option>
      </select>
    );
  };
  
  export default RatingInput;
