import React from 'react';

const ProductAddedSuccessfully = ({open,onClose}) => {    
    if(!open) return null

  return (
    <div className='w-full h-auto right-0 left-0 top-0 bottom-0 fixed bg-slate-800 bg-opacity-80 overflow-auto'>
        <div className='left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed w-[28rem] h-[15rem] backdrop-blur-md items-center justify-center rounded-lg drop-shadow-lg  bg-white'>

          <button className=' px-2 py-[0.25rem] left-[26.3rem] top-7 transform -translate-x-1/2 -translate-y-1/2 b fixed text-black text-lg font-medium ' onClick={onClose}>
                X
          </button>


          <div className='flex items-center justify-center mt-11'>
            <img src="../Gifs/Tick.gif" alt="" className='w-28 h-28'/>
          </div>


          <h1 className='text-xl font-bold text-green-600 font-Manrope flex justify-center mt-4'> Product added Successfully!</h1>

      {/* <div className='flex items-center justify-center mt-6 '>          
            <button className=' p-2 rounded-lg bg-green-500' >
              Save
            </button>
            <button className=' p-2 rounded-lg bg-red-500'>
              Cancel
            </button>                     
      </div> */}


          

        </div>

    </div>
  )
}

export default ProductAddedSuccessfully