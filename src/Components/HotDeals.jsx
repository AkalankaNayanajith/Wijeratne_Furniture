import React from 'react'

export default function HotDeals() {
  return (
    <>
    <div className='text-4xl text-center bold w-full mt-[4rem]'> Hot Dealz! </div>
    
      <img className='object-scale-down h-48 w-full ' src="../Images/deals.png" alt="" />

    <div className='felx w-full'>
      <div className='w-60  h-[500px] mt-24 mb-24 bg-gray-500 rounded-tl-3xl rounded-br-3xl border-4 border-x-black'><img className='h-[30%] w-full' src="../Images/3.png" alt="" /></div>
      <div className='w-60  h-[500px] mt-24 mb-24 bg-black border-solid rounded-tl-3xl rounded-br-3xl border-8 border-x-black'></div>
      <div className='w-60  h-[200px] mt-24 mb-24 bg-gray-500 rounded-tl-3xl rounded-br-3xl border-4 border-x-black'><img className='h-[30%] w-full' src="../Images/3.png" alt="" /></div>
    </div>
        </>
  )
}
