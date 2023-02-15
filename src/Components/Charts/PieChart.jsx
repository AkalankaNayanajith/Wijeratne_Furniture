import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";


function PieChart () {

  const [state, setState] = useState ({
          
    series: [44, 55, 13, 43, 22],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
      
              title: {
                text: 'Revenue by Product Category',
                align: 'left'
              },
              labels: ['Dining Room', 'Living Room', 'Kitchen', 'Office', 'Bed Room'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          });  
    
  return (
        
    <div id='chart' className=' bg-white rounded p-1'>
       <ReactApexChart  options={state.options} series={state.series} type="pie" height={500} width={550} />
    </div>
  )
}

export default PieChart