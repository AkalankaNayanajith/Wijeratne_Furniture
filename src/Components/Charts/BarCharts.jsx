import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";


function BarChart () {

  const [state, setState] = useState ({
          
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 748, 870, 1100, 1200, 1380]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      
      title: {
        text: 'New Customer Count by Month',
        align: 'left'
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,          
        }
      },
      fill: {
        colors: ['#ffca3b']
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      }
    } 
  
  });  
    
  return (
        
    <div id='chart' className=' bg-white rounded p-1'>
       <ReactApexChart  options={state.options} series={state.series} type="bar" height={400} width={550} />
    </div>
  )
}

export default BarChart