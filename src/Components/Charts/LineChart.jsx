import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";


function LineChart () {

  const [state, setState] = useState ({
          
    series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    } 
  
  });  
    
  return (
        
    <div id='chart' className=' bg-white rounded p-1'>
       <ReactApexChart  options={state.options} series={state.series} type="line" height={350} width={500} />
    </div>
  )
}

export default LineChart