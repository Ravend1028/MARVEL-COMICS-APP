import React from 'react'
import logo from '../assets/images/marvel-logo.png'
import { FaSearch } from "react-icons/fa"

const Header = () => {
  return (
    <header className='bg-black font-bangers'>
      <div className='container mx-auto py-4 flex justify-between items-center'>
        {/* <img className='w-20' src={ logo } alt="marvel-logo"/> */}

        <h3 className='text-2xl text-white'>
          Basta Gawa ito ni Raven Pota Hahahah
        </h3>

        <div className="relative w-1/6">
          <input
            type="search"
            className="p-2 pl-10 rounded-lg w-full border border-gray-300"
            placeholder="Search Comic Title"
          />
          
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </header>
  )
}

export default Header