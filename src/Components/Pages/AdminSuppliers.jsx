import React from 'react'
import SupplierAction from '../SideBar/SupplierAction'


const AdminSuppliers = () => {
  return (
    <>
    <div className='flex '>

        <div className=' h-screen bg-[#051b32] fixed'> 
        <SupplierAction />
        </div>      

        <div className='ml-80 w-[1200px] container'>
            <div className=" text-3xl mt-20 mb-4 mx-auto text-center text-zinc-900">
                suppliers
            </div>
            
        </div>

    </div>
          
          
    </>
  )
}

export default AdminSuppliers