import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React, { useState } from 'react'
import ReportsAction from '../SideBar/ReportsAction'

const AdminReports = () => {
  
  const [report, setReport] = useState('')

  const handleReportChange = (event) => {
    setReport(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
    <div className='flex '>

        <div className=' h-screen bg-[#051b32] fixed'> 
        <ReportsAction />
        </div>      

        <div className='ml-80 w-[1200px] container'>
            <div className="h-[550px] w-[30%] shadow-xl mt-28 mx-auto  text-zinc-900 border-2 rounded-lg border-slate-100">
               <h1 className='mt-4 text-3xl font-bold text-center'> Generate Report</h1>
               <p className='mt-8 ml-6 text-base font-semibold text-slate-700'> Report Type</p>   
               
              <Stack className="h-20 mt-3" spacing={1}>
               <Stack direction="row" spacing={1}>               
               <FormControl fullWidth className=" w-[25.5rem] mx-5">
               <InputLabel id="demo-simple-select-label" > Report </InputLabel>
                <Select required color="secondary"
               
                
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={report}
                    label="report"
                    onChange={handleReportChange}
                    error = {!report}  >
                        <MenuItem value={"Sales Report"}>Sales Report</MenuItem>
                        <MenuItem value={"Inventory Report"}>Inventory Report</MenuItem>
                        <MenuItem value={"Customer Analytics Report"}>Customer Analytics Report</MenuItem>
                 </Select>
               </FormControl>
              </Stack>          
            </Stack>

               <p className='mt-2 ml-6 text-base font-semibold text-slate-700'> Select Date </p>                         
               <p className='mt-5 ml-6 text-sm font-semibold text-gray-600'>From: </p>     
                <input className='mt-2 ml-6 w-[310px] px-2 py-3 border-2 border-slate-400 rounded-lg'type="date" />               
               <p className='mt-5 ml-6 text-sm font-semibold text-gray-600'>To: </p>     
                <input className='mt-2 ml-6  mb-6  w-[310px] px-2  py-3 border-2 border-slate-400 rounded-lg'type="date" />            
                <button className='mt-5 ml-6 w-[310px]  p-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-semibold text-lg' > Generate</button>
            </div>
            
        </div>

    </div>
          
          
    </>
  )
}

export default AdminReports