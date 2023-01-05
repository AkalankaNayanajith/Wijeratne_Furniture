import React from 'react'
import ReportsAction from '../SideBar/ReportsAction'

const AdminReports = () => {
  return (
    <>
    <div className='flex '>

        <div className=' h-screen bg-[#051b32] fixed'> 
        <ReportsAction />
        </div>      

        <div className='ml-80 w-[1200px] container'>
            <div className=" text-3xl mt-20 mb-4 mx-auto text-center text-zinc-900">
                Reports Generate
            </div>
            
        </div>

    </div>
          
          
    </>
  )
}

export default AdminReports