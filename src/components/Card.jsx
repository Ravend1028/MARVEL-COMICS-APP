import React from 'react'
import test from '../assets/images/test-cover.jpg'

const Card = (img, title, desc) => {
  return (
    <div className='flex flex-col justify-center items-center w-1/6 rounded-xl space-y-2 text-white bg-slate-900'>
      <img src={ img } alt="comic-cover" className='object-cover w-full h-56 rounded-t-xl'/>

      <div className='flex flex-col justify-center items-start space-y-2 p-3'>
        <h3 className='font-bold text-xl'>{ title }</h3>

        <p className='font-light'>
          { desc }
        </p>
      </div>
    </div>
  )
}

export default Card