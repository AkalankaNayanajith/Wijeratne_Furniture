import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const RegisteredSuccessfully = ({openRegisteredAlert,closeRegisteredAlert}) => {    
    if(!openRegisteredAlert) return null

  return (
    <div className='w-full h-auto right-0 left-0 top-0 bottom-0 fixed bg-slate-800 bg-opacity-80 overflow-auto'>
        <div className='left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed w-[28rem] h-[15rem] backdrop-blur-md items-center justify-center rounded-lg drop-shadow-lg  bg-white'>

        <button className=' px-[0.5rem] py-[0.125rem] left-[26.7rem] top-6 transform -translate-x-1/2 -translate-y-1/2 b fixed   border-2 text-white rounded-lg  text-sm font-medium border-red-500 bg-red-500  ext-white hover:border-red-700 hover:bg-red-700 '   onClick={closeRegisteredAlert}>
                <FontAwesomeIcon icon={faXmark} className='fill-white' > </FontAwesomeIcon>
            </button>

          <div className='flex items-center justify-center mt-11'>
            <img src="../Gifs/Tick.gif" alt="" className='w-28 h-28'/>
          </div>


          <h1 className='text-xl font-bold text-green-600 font-Manrope flex justify-center mt-4'> Registered Successfully!</h1>

        </div>

    </div>
  )
}

export default RegisteredSuccessfully