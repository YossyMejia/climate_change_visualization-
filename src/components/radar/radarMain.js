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
          ghg: pais1[1],
          co2: pais1[2],           
        }
      },
      {
        key: {value2},
        label: {value2},
        values: {
          tempeture: 3,
          ghg: 5,
          co2:6,    
        }
      },
      {
        key: {value3},
        label: {value3},
        values: {
          tempeture: 4,
          ghg: 4,
          co2: 2,    
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
        <p>{pais1}</p>
        <FormControl variant="outlined"  size="small">
            <InputLabel id="demo-simple-select-outlined-label" size="small">Año</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setYear(e.target.value)}
                label="Año">
                {years.map((post, index) => {
                    return(
                        <MenuItem value={post}>{post}</MenuItem>
                    );
                })} 
            </Select>
        </FormControl>

        <FormControl variant="outlined"  size="small">
            <InputLabel id="demo-simple-select-outlined-label" size="small">País 1</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setValue1(e.target.value)}
                label="País 1"
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
            <InputLabel id="demo-simple-select-outlined-label" size="small">País 2</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setValue2(e.target.value)}
                label="País 2"
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
            <InputLabel id="demo-simple-select-outlined-label" size="small">País 3</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(e) => setValue3(e.target.value)}
                label="País 3"
                className="basic-multi-select"
                classNamePrefix="select">
                {uniques.map((post, index) => {
                    return(
                        <option value={post}>{post}</option>
                    );
                })} 
            </Select>
        </FormControl>
          <h3>Año : {year}</h3>
          <h3>País 1: {value1}</h3>
          <h3>País 2: {value2}</h3>
          <h3>País 3: {value3}</h3>
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