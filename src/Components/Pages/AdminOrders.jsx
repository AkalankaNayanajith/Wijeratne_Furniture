import React from 'react'
import { Link } from 'react-router-dom'
import DataGridOrders from '../DataGridOrders'
import OrderAction from '../SideBar/OderAction'


const AdminOrders = () => {
  return (
    <>
    <div className='flex '>

        <div className=' h-screen bg-[#051b32] fixed'> 
        <OrderAction/>
        </div>      

        <div className='ml-80 w-[1200px] container'>
            <div className=" text-3xl mt-20 mb-4 mx-auto text-center text-zinc-900">
                Orders List
            </div>
            <DataGridOrders/>

            <div className="mt-0  flex justify-between ">
                <Link to='/adminpanel/adminproductpage' className=" rounded-none bg-white text-blue-600 pr-16 py-[0.7rem] font-sans font-normal text-lg hover:text-blue-800 "> <p> <span>&#60;</span>&nbsp;&nbsp;&nbsp; Back </p>
                </Link>                
            </div>
        </div>

    </div>
          
          
    </>
  )
}

export default AdminOrders 
