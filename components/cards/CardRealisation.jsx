import React from 'react'

export default function CardRealisation({img, description, description2}) {
  return (
    <div className='shadow-2xl mt-10 flex flex-col items-center justify-center'>
        <img src={img} alt="" />
        <p className='uppercase font-semibold py-10'>{description}<span className='text-red-500 font-bold'>{description2}</span></p>
    </div>
  )
}
