import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faHeart,faUser} from '@fortawesome/free-regular-svg-icons'

export default function Products() {
  return (
    <>
    <div className='text-5xl text-center font-normal w-full mt-[3rem] font-Pragati-Narrow'> Products</div>
    <div className='h-0.5 mt-[2rem]  w-full bg-[#dfdfdf]'>
      <div className='w-[100%] h-full mx-auto bg-[#DFDFDF]'> </div> 
    </div>

    <FontAwesomeIcon icon={faSearch} className='fill-white ' > </FontAwesomeIcon> 

    <div className='h-0.5  w-full bg-[#dfdfdf]'>
      <div className='w-[100%] h-full mx-auto bg-[#DFDFDF]'> </div> 
    </div>

    <div className='h-16  w-full '></div>
    </>
  )
}
