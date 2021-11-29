import React, { Component, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import LinearView from "./linearMain";
import Select from '@material-ui/core/Select';
import stylesMapView from "../../styles/mapStyles";
import {useDispatch, useSelector} from 'react-redux';
import dataFileTempPers from '../../json_data/dataFileTempPers.json';
import {
    setSearchCountryAction,
    searchDataAction,
} from '../../redux/mapDuck';

const SearchUsers = ({year, category, countryName}) => {
    const dispatch = useDispatch();
    const classes = stylesMapView();
    const currentSearchCountry = useSelector((store) => store.mapInfo.search_country);

    const [value, setValue] = useState('');

    // Cambia el rol de la búsqueda
    const handleSearchCountry = (event) => {
        dispatch(setSearchCountryAction(event.target.value));
    };

    function keyPress(event){
        if(event.keyCode === 13){
           dispatch(searchDataAction()); // Realiza la búsqueda 
        }
     };

    const uniques = dataFileTempPers.map(item => item.Entity)
                    .filter((value, index, self) => self.indexOf(value) === index)



    return (
        <div>
            {/* <FormControl variant="outlined" className={classes.formControlCategory} size="small">
            <InputLabel id="demo-simple-select-outlined-label" size="small">País</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={countryName}
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
            
            <div>
            <label>{value}</label>
                {dataFileTempPers.map((post, index) => {
                    <p>{post.Entity}</p>
                    if (post.Entity == value)
                        return <div>
                                <p>{post.Year}</p>
                                <p>{post.temperature}</p>
                                <p>{post.value}</p>
                            </div>
                })}
            </div> */}
        </div>
    )
}

export default SearchUsers