import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";


function ColumnChart () {

  const [state, setState] = useState ({
          
    series: [{
        name: 'Avg Order Value',
        data: [2500, 3100, 4000, 10100, 8000, 6600, 3200, 2300, 1400, 1800, 4500, 5200]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        
        title: {
          text: 'Average Order Value (Rs)',
          floating: true,
          offsetY: 330,
          align: 'left',
          style: {
            color: '#444'
          }
        },
    
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        fill: {
        colors: ['#00ab41']
      },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        
        }
      },
  });  
    
  return (
        
    <div id='chart' className=' bg-white rounded p-1'>
       <ReactApexChart  options={state.options} series={state.series} type="bar" height={350} width={550} />
    </div>
  )
}

export default ColumnChart