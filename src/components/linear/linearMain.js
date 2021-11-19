import React from "react"
//import "./styles.css";
import { Line } from 'react-chartjs-2';

export default function LinearView() {

  const data = {
    labels: [2000,	2001,	2002,	2003,	2004,	2005,	2006,	2007,	2008,	2009],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: '# of No Votes',
        data: [-1, -0.2, 1, 2, 1, 1, 2, 2],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: '',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className='header'>
        <h1 className='title'>Multi Axis Line Chart</h1>
      </div>
      <Line data={data} options={options} />
    </>
  );
}
