import React, { useEffect } from 'react'
import {useForm} from "react-hook-form"
import FormField from './FormField';
import MediaTypeInput from './FormInput/MediaTypeInput';
import GenersInput from './FormInput/GenersInput';
import RatingInput from './FormInput/RatingInput';
import { useSearchParams } from 'react-router-dom';
const SearchForm = ({setSearchFormValues}) => {
  const [searchParams] = useSearchParams();
  const mediaType = searchParams.get('mediaType');
  const {handleSubmit, control , watch} = useForm(
      {
        defaultValues: {
          mediaType: ['tv', 'movie'].includes(mediaType) ? mediaType : 'movie',
          genres : [],
          rating: "All"
        }
      }
    );
    const onSubmit =(data) =>{
        console.log(JSON.stringify(data))
    }
    const formValue = watch();
    console.log({formValue})

    useEffect(()=>{
      setSearchFormValues(formValue)
    },[ JSON.stringify(formValue)])
  return (
    <div className='border rounded-lg p-4 shadow-md'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
      
        <FormField name="mediaType" label="Media Type" control={control} Component={MediaTypeInput}/>

       <FormField name="genered" label="Geners" control={control} Component={GenersInput}/>
        <FormField name="rating" label="Rating" control={control} Component={RatingInput}/>

        <input type="submit" />

      </form>
    </div>
  )
}

export default SearchForm
