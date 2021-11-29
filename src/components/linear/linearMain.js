import React, { Component, useState} from "react"
//import "./styles.css";
import { Line } from 'react-chartjs-2';
import dataFileTempPers from '../../json_data/dataFileTempPers.json';
import SearchCountry from "./SearchCountry";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function LinearView(props) {
  const [value, setValue] = useState('');
  const uniques = dataFileTempPers.map(item => item.Entity)
  .filter((value, index, self) => self.indexOf(value) === index)
  const personas = []
  const temp = []


  const data = {
    labels: [1970,	1975,	1980,	1985,	1990,	1995,	2000,	2005,	2010,	2015, 2020],
    datasets: [
      {
        label: 'Número de personas',
        // data: [11964910, 13505540,14185730,12603190,13032160, 19789880, 22856300, 27614720,
        //   31411750, 35818900, 40735060 ],
        data : personas,
        fill: false,
        backgroundColor: '#99d98c',
        borderColor: '#52b69a',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Anormalidad en la temperatura',
        data: temp,
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
    <div  >
      {/* style = "display:none;" */}
        {dataFileTempPers.map((post, index) => {
            if (post.Entity == value)
                return personas.push(post.value)
        })}
        {dataFileTempPers.map((post, index) => {
          if (post.Entity == value)
              return temp.push(post.temperature)
      })}
    </div>
    <div>

        <FormControl variant="outlined"  size="small">
        <InputLabel id="demo-simple-select-outlined-label" size="small">País</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="País"
            onChange={(e) => setValue(e.target.value)}
        >
            {uniques.map((post, index) => {
                return(
                    <MenuItem value={post}>{post}</MenuItem>
                );
            })}
        </Select>
        </FormControl>
        {personas.map((post, index) => {
              if (post.Entity == value) return <p>{post.Year}</p>
          })}
    </div>
      <div className='header'>
        <h1 className='title'>Relación temperaturas-crecimiento poblacional</h1>
        <h2 className='title'>{value}</h2>
      </div>
      <Line data={data} options={options} />
    </>
  );
}
