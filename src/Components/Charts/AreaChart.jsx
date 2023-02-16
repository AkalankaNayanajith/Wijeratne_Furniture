import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";


function AreaChart () {

  const [state, setState] = useState ({
          
    series: [{
      data: [80000, 83000, 64000, 50200, 154000, 108000, 69000, 110000, 120000, 138000,104100,116600]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      
      title: {
        text: 'Total Revenue by Month',
        align: 'left'
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec' ],
      }
    } 
  
  });  
    
  return (
        
    <div id='chart' className=' bg-white rounded p-1'>
       <ReactApexChart  options={state.options} series={state.series} type="area" height={350} width={550} />
    </div>
  )
}

export default AreaChart