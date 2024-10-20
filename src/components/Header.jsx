import React from 'react'
import logo from '../assets/images/marvel-logo.png'

const Header = () => {
  return (
    <header className='bg-black font-bangers'>
      <div className='container mx-auto py-4 flex justify-between items-center'>
        {/* <img className='w-20' src={ logo } alt="marvel-logo"/> */}

        <h3 className='text-2xl text-white'>
          Basta Gawa ito ni Raven 123 Hahahah
        </h3>

        <input className='p-2 rounded-lg w-1/6' type="search" placeholder='Search Comic Title'/>
      </div>
    </header>
  )
}

export default Header