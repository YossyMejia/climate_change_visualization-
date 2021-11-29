import React, { useState} from 'react'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Multiselect} from 'multiselect-react-dropdown'
import stylesMapView from "../../styles/mapStyles";
import dataFile3vars from '../../json_data/dataFile3vars.json';
import {useDispatch, useSelector} from 'react-redux';
import {
    //setStatusAction,
    //setRolAction,
    //setSearchUserAction,
    //searchUserAction
} from '../../redux/mapDuck';

const SearchUsers = ({year, category, countryName}) => {
    const dispatch = useDispatch();
    const classes = stylesMapView();
    const years= [1970, 1975, 1980,	1985,	1990,	1995,	2000,	2005,	2010,	2015, 2020];
    const uniques = dataFile3vars.map(item => item.Entity)
        .filter((value, index, self) => self.indexOf(value) === index)
    const [value, setValue] = useState('');
    const [options] = useState(uniques);
    
    //const currentSearch = useSelector((store) => store.users.search)

    // Cambia el estado de la búsqueda
    const handleStatusChange = (event) => {
    //    dispatch(setStatusAction(event.target.value));
    };

    // Cambia el rol de la búsqueda
    const handleRolChange = (event) => {
    //    dispatch(setRolAction(event.target.value));
    };

    // Cambia el rol de la búsqueda
    const handleSearch = (event) => {
    //    dispatch(setSearchUserAction(event.target.value));
    };

    function keyPress(event){
    //    if(event.keyCode === 13){
    //       dispatch(searchUserAction()); // Realiza la búsqueda 
    //    }
     };
     
     
    

    return (
        <div>
            
        {/* <FormControl variant="outlined" className={classes.formControl} size="small">
            <InputLabel id="demo-simple-select-outlined-label" size="small">Año</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={year}
                onChange={handleRolChange}
                label="Año">
                {years.map((post, index) => {
                    return(
                        <MenuItem value={post}>{post}</MenuItem>
                    );
                })} 
            </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControlCategory} size="small">
            <InputLabel id="demo-simple-select-outlined-label" size="small">Paises</InputLabel>
            <Select
                // labelId="demo-simple-select-outlined-label"
                isMulti
                // id="demo-simple-select-outlined"
                onChange={(e) => setValue(e.target.value)}
                label="Paises"
                value={countryName}
                className="basic-multi-select"
                classNamePrefix="select">
                {uniques.map((post, index) => {
                    return(
                        <option value={post}>{post}</option>
                    );
                })} 
            </Select>
        </FormControl>

        <Multiselect>
            {uniques.map((post, index) => {
                return(
                    <options>{post}</options>
                );
            })}
        </Multiselect> */}
        </div>
    )
}

export default SearchUsers