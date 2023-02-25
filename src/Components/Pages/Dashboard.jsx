import React from 'react'
import AreaChart from '../Charts/AreaChart'
import BarChart from '../Charts/BarCharts'
import ColumnChart from '../Charts/ColumnChart'
import LineChart from '../Charts/LineChart'
import PieChart from '../Charts/PieChart'
import PolarAreaChart from '../Charts/PieChart'
import DashboardAction from '../SideBar/DashboardAction'

const Dashboard = () => {
  return (
    <>
    <div className='flex '>

        <div className=' h-screen bg-[#051b32] fixed'> 
        <DashboardAction/>        
        </div>      

        <div className='ml-80 w-[1200px] container'>

            <div className='ml-4 mt-20 flex justify-between'> 
            <AreaChart /> 
            <ColumnChart /> 
            </div>

            <div className='ml-4 mt-11 flex justify-between'> 
            <BarChart />
            <PieChart /> 
            </div>

          
            {/* <div className=" text-3xl mt-20 mb-4 mx-auto text-center text-zinc-900">
                Product List
            </div>
            <DataGridDemo/>

            <div className="mt-0  flex justify-between ">
                <Link to='/adminpanel/adminproductpage' className=" rounded-none bg-white text-blue-600 pr-16 py-[0.7rem] font-sans font-normal text-lg hover:text-blue-800 "> <p> <span>&#60;</span>&nbsp;&nbsp;&nbsp; Back </p>
                </Link>                
            </div> */}
        </div>

    </div>
          
          
          </>
  )
}

export default Dashboard