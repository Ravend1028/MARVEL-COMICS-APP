import React from 'react'
import test from '../assets/images/test-cover.jpg'

const Card = ({img, title, desc}) => {
  return (
    <div className='flex flex-col w-full rounded-xl bg-slate-900 text-white'>
      <img src={ img } alt="comic-cover" className='object-cover w-full rounded-t-xl'/>

      <div className='flex flex-col justify-start space-y-2 p-3'>
        <h3 className='font-bold text-xl'>{ title }</h3>

        <p className='font-light'>
          { desc }
        </p>
      </div>
    </div>
  )
}

export default Card