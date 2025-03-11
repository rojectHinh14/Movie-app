import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="px-8 h-14 bg-slate-950 flex items-center justify-between text-white">
    <div className="flex items-center gap-4">
      <Link to="/">
      <img src="/netflix.png" alt="Netflix Logo" className="sm:w-28 w:16" />

      </Link>
      <Link to="/search?mediaType=movie">Movie </Link>
      <Link to="/search?mediaType=tv">Tv show</Link>
    </div>
    <div>
      <Link to='/search'>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="cursor-pointer"
      />
      </Link>
    
    </div>
  </header>
  )
}

export default Header
