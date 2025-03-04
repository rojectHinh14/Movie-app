import React from 'react'
import { groupBy } from "lodash";
import CircularProgressBar from '../components/CircularProgressBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Banner = ({mediaInfor}) => {
    const certification =( (mediaInfor.release_dates?.results || []).find(result => result.iso_3166_1 === 'US')?.release_dates|| [] )
    .find(releaseDate => releaseDate.certification)?.certification;
  
    const crews = (mediaInfor.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  const groupedCrews = groupBy(crews, "job");

  console.log({ crews, groupedCrews });

    const groupCrew = groupBy(crews, "job")
  return (
    <div className='relative text-white overflow-hidden shadow-sm shadow-slate-800'>
    <img className='absolute inset-0 brightness-[0.2]'  src={`https://image.tmdb.org/t/p/original${mediaInfor.backdrop_path}`}  alt="" />
<div className='flex relative max-w-screen-xl mx-auto p-6 lg:gap-8 gap-6 py-10'>
  <div className='flex-1'>      
      <img src={`https://image.tmdb.org/t/p/original${mediaInfor.poster_path}`} alt="" />
  </div>
<div className='flex-[2] text-[1.2vw]'>
<p className='font-bold mb-2 text-lg lg:text-2xl'>{mediaInfor.title}</p>
<div className='flex gap-4 items-center'>
  <span className='text-gray-400 border border-gray-400 p-1'>{certification}</span>
  <p>{mediaInfor.release_date}</p>
  <p>{(mediaInfor.genres || []).map((genre) => genre.name).join(', ')}</p>
</div>
<div>

<div className='flex mt-4 items-center gap-4'>
<div className='flex gap-2 items-center'><CircularProgressBar percent={Math.round((mediaInfor.vote_average || 0)*10)} size={3.5} strokeWidth={0.3}/>Rating</div>
<button>
  <FontAwesomeIcon icon={faPlay} className='mr-1'/> Trailer
</button>
</div>
</div>
<div className='mt-4'>
<p className='font-bold text-[1.3vw] mb-2'>Overview</p>
<p>{mediaInfor.overview}</p>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
  {Object.keys(groupedCrews).map((job) => (
    <div key={job}>
      <p className="font-bold">{job}</p>
      <p>{groupedCrews[job].map((crew) => crew.name).join(", ")}</p>
    </div>
  ))}
  {/*             
  <div>
    <p className="font-bold">Director</p>
    <p>Jennifer Phang</p>
  </div>
  <div>
    <p className="font-bold">Writer</p>
    <p>Dan Frey, Russell Sommer</p>
  </div> */}
</div>
</div>
</div>
</div>
  )
}

export default Banner
