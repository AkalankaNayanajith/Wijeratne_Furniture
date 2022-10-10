import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHand, faSearch} from '@fortawesome/free-solid-svg-icons'
import {faHeart,faUser} from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
  return (
  
  <>
    <div className='Footer justify-between w-[100%] h-[559px] flex mt-auto bg-[#DFDFDF]'>

      <div className='p-5'>
        <a href='www.google.com'> <h1 className='text-4xl w-[30%] font-praise '> Wijeratne</h1></a>
        <p className='font-Manuale'> “We furnish the dreams !” </p>
      </div>

      <div className='p-3 w-[10%]'>
        <h1 className=''>hello 3</h1>
      </div>

      <div className='p-3 w-[10%]'>
        <h1>hello3</h1>
      </div>

      <div className='p-3 w-[10%]'>
        <h1>hello4</h1>
      </div>

      <div className='w-[35%]'>
        <div> 
          <h2> Sign up for exclusive offers ! </h2>
        </div>

        <div className='hidden md:flex justify-center  '>
          <ul className='hidden md:flex'>
          <li className='p-4'><FontAwesomeIcon icon={faSearch} className='text-[#000300]' > </FontAwesomeIcon> </li>
          <li className='p-4'><FontAwesomeIcon icon={faHand} className='text-[#000300]' > </FontAwesomeIcon> </li>
          <li className='p-4'><FontAwesomeIcon icon={faHeart} className='text-[#000300]' > </FontAwesomeIcon> </li>
          <li className='p-4'><FontAwesomeIcon icon={faUser} className='text-[#000300]' > </FontAwesomeIcon> </li>
          </ul>
        </div>
      </div>
      
    </div>


      <div>
          <p className='text-[#000300] text-center text-xs h-[40px] font-Manrope bg-[#DFDFDF]'> Copyright @ Wijerathne Furniture 2022. All Rights Reserved. </p>
      </div>



  </>
    
  )
}
