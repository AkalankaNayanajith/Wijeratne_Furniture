import React from 'react'
import UserAction from '../SideBar/UserAction'

const AdminUserPage = () => {
  return (
    <>
    <div className='flex '>
        <div className=' h-screen bg-[#051b32] fixed'> 
       <UserAction/>
        </div>      

        <div className='ml-72 w-[1200px] container mt-24 '>

            <div className='flex  justify-center'>  
            <div className="m-10 mt-10 ">
                <div className="w-[20rem]  bg-[#6ead96] rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl ease-in-out hover:scale-105 duration-300" onClick={1}>
                    <h1 className='text-center text-2xl font-bold pt-5'> Add Staff</h1>
                    <img className="w-full h-80 p-8 rounded-t-lg" src="../Images/addstaff.png" />

                    <div className="flex justify-between items-center mt-3">
                        <a
                        href="adduser"          
                        className="text-white w-full bg-[#06521a] hover:bg-[#1c1d1d] focus:ring-4 focus:outline-none focus:ring-[#2a2c2c]           font-medium rounded-lg text-sm px-[5rem] py-2.5 text-center dark:bg-[#1c1d1d]  dark:hover:bg-red-700        dark:focus:ring-red-800"
                        >ADD </a>
                    </div>
                </div>
            </div>

            <div className="m-10 mt-10 ">
                <div className="w-[20rem]  bg-[#f1ab8d] rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl ease-in-out hover:scale-105 duration-300" onClick={1}>
                    <h1 className='text-center text-2xl font-bold pt-5'> View staff</h1>
                    <img className="w-full h-80 p-8 rounded-t-lg" src="../Images/viewstaff.png" />

                    <div className="flex justify-between items-center mt-3">
                        <a
                        href="adduser"          
                        className="text-white w-full bg-[#fe570f] hover:bg-[#1c1d1d] focus:ring-4 focus:outline-none focus:ring-[#2a2c2c]           font-medium rounded-lg text-sm px-[5rem] py-2.5 text-center dark:bg-[#1c1d1d]  dark:hover:bg-red-700        dark:focus:ring-red-800"
                        >VIEW </a>
                    </div>
                </div>
            </div>


            </div>
        </div>
    </div>
  
    

    </>
  )
}

export default AdminUserPage