import React, { useEffect } from 'react'
// import {Chart} from 'chart.js'


const Charts = () => {

  

 useEffect(()=>{
   
  var ctx = document.getElementById('myChart').getContext('2d');
 var myChart = new Chart(ctx, {
     type: 'line',
     data: {
       labels: ["0","Daily", "Weekly", "Monthly"],
       datasets: [
         {
          label: 'Pending Orders',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: 'false',
          borderColor: 'red',
          borderColor:'red',
          tension: 0.1
        },
        {
          label: 'Completed Orders',
          data: [20, 39, 48, 45, 76, 35, 50],
          fill: 'false',
          borderColor: 'green',
          borderColor:'green',
          tension: 0.1
        }
       ]
     },
   });

 },[])
//  localStorage.setItem("graphModal","false")

  return (
    <div className='admindetails charts'>
      <div className='admindetails-container'>
      <div className="headings" onClick={()=>{localStorage.setItem("graphModal","true")}} >CLOSE</div>
	<canvas id="myChart"></canvas>
    </div>
 
    
    </div>
  )
}

export default Charts
