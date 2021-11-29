import React from "react"
//import "./styles.css";
import { Line } from 'react-chartjs-2';

export default function LinearView() {

  const data = {
    labels: [1970,	1975,	1980,	1985,	1990,	1995,	2000,	2005,	2010,	2015, 2020],
    datasets: [
      {
        label: 'Número de personas',
        data: [11964910, 13505540,14185730,12603190,13032160, 19789880, 22856300, 27614720,
          31411750, 35818900, 40735060 ],
        fill: false,
        backgroundColor: '#99d98c',
        borderColor: '#52b69a',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Anormalidad en la temperatura',
        data: [-0.02, 0.16, 0.21, 0.07, 0.47, 0.75, 0.38, 0.94, 0.8, 1.18, 1.59],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: '#184e77',
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
          position: 'right',
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
        <h1 className='title'>Relación temperaturas-crecimiento poblacional</h1>
        <h2 className='title'>Costa Rica</h2>
      </div>
      <Line data={data} options={options} />
    </>
  );
}
