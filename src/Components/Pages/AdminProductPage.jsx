import React from 'react'
import ProductAction from './ProductAction'

const AdminProductPage = () => {
  return (
    <>
    <div className='flex '>
        <div className=' h-screen bg-[#051b32] fixed'> 
        <ProductAction/>
        </div>      

        <div className='ml-72 w-[1200px] container  '>

            <div className="text-3xl mt-[5rem] mx-auto text-center text-zinc-900 ">
             Add Product
            </div>

            <div className='flex  justify-between'>  
            <div className="m-10 mt-10 ">
                <div className="w-[20rem]  bg-[#6ead96] rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl ease-in-out hover:scale-105 duration-300" onClick={1}>
                    <h1 className='text-center text-2xl font-bold pt-5'> Normal Product</h1>
                    <img className="w-full h-72 p-8 rounded-t-lg" src="../Images/normal.jpg" />

                    <div className="flex justify-between items-center mt-3">
                        <a
                        href="addproduct"          
                        className="text-white w-full bg-[#06521a] hover:bg-[#1c1d1d] focus:ring-4 focus:outline-none focus:ring-[#2a2c2c]           font-medium rounded-lg text-sm px-[5rem] py-2.5 text-center dark:bg-[#1c1d1d]  dark:hover:bg-red-700        dark:focus:ring-red-800"
                        >ADD </a>
                    </div>
                </div>
            </div>

            <div className="m-10 mt-10 ">
                <div className="w-[20rem]  bg-[#f1ab8d] rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl ease-in-out hover:scale-105 duration-300" onClick={1}>
                    <h1 className='text-center text-2xl font-bold pt-5'> Hot Deal Product</h1>
                    <img className="w-full h-72 p-8 rounded-t-lg" src="../Images/deals.svg" />

                    <div className="flex justify-between items-center mt-3">
                        <a
                        href="addproduct"          
                        className="text-white w-full bg-[#fe570f] hover:bg-[#1c1d1d] focus:ring-4 focus:outline-none focus:ring-[#2a2c2c]           font-medium rounded-lg text-sm px-[5rem] py-2.5 text-center dark:bg-[#1c1d1d]  dark:hover:bg-red-700        dark:focus:ring-red-800"
                        >ADD </a>
                    </div>
                </div>
            </div>



            <div className="m-10 mt-10 ">
                <div className="w-[20rem]  bg-[#8aa5e1] rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl ease-in-out hover:scale-105 duration-300" onClick={1}>
                    <h1 className='text-center text-2xl font-bold pt-5'> Discounted Product</h1>
                    <img className="w-full h-72 p-8 rounded-t-lg" src="../Images/discount.png" />

                    <div className="flex justify-between items-center mt-3">
                        <a
                        href="addproduct"          
                        className="text-white w-full bg-[#152d5f] hover:bg-[#1c1d1d] focus:ring-4 focus:outline-none focus:ring-[#2a2c2c] font-medium rounded-lg text-sm px-[5rem] py-2.5 text-center dark:bg-[#1c1d1d]  dark:hover:bg-red-700        dark:focus:ring-red-800"
                        >ADD </a>
                    </div>
                </div>
            </div>

            
            </div>

            <div className=' w-[1200px]'>
            <div className="ml-[27.5rem] mt-4 w-[1200px] w-[20rem] ">
                <div className="max-w-xs  bg-[#daf445] rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl ease-in-out hover:scale-105 duration-300" onClick={1}>

                    <h1 className='text-center text-2xl font-bold pt-5'> View Product List</h1>

                    <div className="flex text-center items-center mt-3">
                        <a
                        href="addproduct"          
                        className="text-white w-full bg-[#676f0e] hover:bg-[#1c1d1d] focus:ring-4 focus:outline-none focus:ring-[#2a2c2c]           font-medium rounded-lg text-sm px-[5rem] py-2.5 text-center dark:bg-[#1c1d1d]  dark:hover:bg-red-700        dark:focus:ring-red-800"
                        >View </a>
                    </div>
                </div>
            </div>
            </div>




        </div>

        


        
    </div>
    

    </>
  )
}

export default AdminProductPage