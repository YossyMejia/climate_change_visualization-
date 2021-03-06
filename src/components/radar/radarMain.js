import React, {useState, Component} from "react"
//import "./styles.css";
import Radar from "react-d3-radar";
import dataFile3vars from '../../json_data/dataFile3vars.json';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';




// class RadarView extends React.Component {
  
export default function LinearView(props) {
  
const [value1, setValue1] = useState('');
const [value2, setValue2] = useState('');
const [value3, setValue3] = useState('');
const [year, setYear] = useState('');
const pais1 = []
const pais2 = []
const pais3 = []
const years= [1970, 1975, 1980,	1985,	1990,	1995,	2000,	2005,	2010,	2015, 2020];
const uniques = dataFile3vars.map(item => item.Entity)
.filter((value, index, self) => self.indexOf(value) === index)

const chartData = {
  variables: [
    { key: "tempeture", label: "Temperatura" },
    { key: "ghg", label: "GHG" },
    { key: "co2", label: "CO2" },
  ],
  sets: [
      {
        key: {value1},
        label: {value1},								
        color: "blue", 
        values: {
          tempeture: pais1[0],
          ghg: parseFloat(pais1[1]),
          co2: parseFloat(pais1[2]),           
        }
      },
      {
        key: {value2},
        label: {value2},
        values: {
          tempeture: 0.9,
          ghg: 0.2,
          co2: 0.4,    
        }
      },
      {
        key: {value3},
        label: {value3},
        values: {
          tempeture: 0.5,
          ghg: 1,
          co2: .5,    
        }
      }
    ]
  };
  // state = {
  //   highlighted: null
  // };

  // onHover = hovered => {
  //   const { highlighted } = this.state;
  //   if (hovered === null && highlighted === null) {
  //     return;
  //   }
  //   if (highlighted && hovered && hovered.key === highlighted.key) {
  //     return;
  //   }
  //   this.setState({ highlighted: hovered });
  // };

  // render() {

  
    return (
      
      <div>
        <div  >
          {/* style = "display:none;" */}
            {dataFile3vars.map((post, index) => {
                if (post.Entity == value1 && post.Day == year)
                    return pais1.push(post.temp, post.GHG, post.CO2)
            })}
            {dataFile3vars.map((post, index) => {
                if (post.Entity == value2 && post.Day == year)
                    return pais2.push(post.temp, post.GHG, post.CO2)
            })}
            {dataFile3vars.map((post, index) => {
                if (post.Entity == value3 && post.Day == year)
                    return pais3.push(post.temp, post.GHG, post.CO2)
            })}
        </div>
        <p>data: {value2} - {pais2[0]} - {pais2[1]} - {pais2[2]}</p>
        <FormControl variant="outlined"  size="small">
            <InputLabel id="demo-simple-select-outlined-label" size="small">A??o</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setYear(e.target.value)}
                label="A??o">
                {years.map((post, index) => {
                    return(
                        <MenuItem value={post}>{post}</MenuItem>
                    );
                })} 
            </Select>
        </FormControl>

        <FormControl variant="outlined"  size="small">
            <InputLabel id="demo-simple-select-outlined-label" size="small">Pa??s 1</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setValue1(e.target.value)}
                label="Pa??s 1"
                className="basic-multi-select"
                classNamePrefix="select">
                {uniques.map((post, index) => {
                    return(
                        <option value={post}>{post}</option>
                    );
                })} 
            </Select>
        </FormControl>

        <FormControl variant="outlined"  size="small">
            <InputLabel id="demo-simple-select-outlined-label" size="small">Pa??s 2</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setValue2(e.target.value)}
                label="Pa??s 2"
                className="basic-multi-select"
                classNamePrefix="select">
                {uniques.map((post, index) => {
                    return(
                        <option value={post}>{post}</option>
                    );
                })} 
            </Select>
        </FormControl>

        <FormControl variant="outlined"  size="small">
            <InputLabel id="demo-simple-select-outlined-label" size="small">Pa??s 3</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setValue3(e.target.value)}
                label="Pa??s 3"
                className="basic-multi-select"
                classNamePrefix="select">
                {uniques.map((post, index) => {
                    return(
                        <option value={post}>{post}</option>
                    );
                })} 
            </Select>
        </FormControl>
          <h3>A??o : {year}</h3>
          <h3>Pa??s 1: {value1}</h3>
          <h3>Pa??s 2: {value2}</h3>
          <h3>Pa??s 3: {value3}</h3>
        <Radar
          width={500}
          height={500}
          padding={70}
          domainMax={1}
          // highlighted={this.state.highlighted}
          // onHover={this.onHover}
          data={chartData}
        />
      </div>
    );
  // }
}

// export default RadarView;