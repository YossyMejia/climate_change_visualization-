import React, { useState} from 'react'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import stylesMapView from "../../styles/mapStyles";
import {useDispatch, useSelector} from 'react-redux';
import {
    setSearchCountryAction,
    setSearchYearAction,
    setSearchCategoryAction,
    searchDataAction,
} from '../../redux/mapDuck';

const SearchMap = ({year, category, countryName, available_categories}) => {
    const dispatch = useDispatch();
    const classes = stylesMapView();
    const currentSearchCountry = useSelector((store) => store.mapInfo.search_country);
    const currentSearchYear = useSelector((store) => store.mapInfo.search_year)

    // Cambia el estado de la búsqueda
    const handleCategoryChange = (event) => {
        dispatch(setSearchCategoryAction(event.target.value));
    };

    // Cambia el rol de la búsqueda
    const handleSearchYear = (event) => {
        dispatch(setSearchYearAction(event.target.value));
    };

    // Cambia el rol de la búsqueda
    const handleSearchCountry = (event) => {
        dispatch(setSearchCountryAction(event.target.value));
        console.log(event.target.value)
    };

    function keyPress(event){
        if(event.keyCode === 13){
           dispatch(searchDataAction()); // Realiza la búsqueda 
        }
     };
     
    

    return (
        <div>
        <TextField 
            id="outlined-search"
            label="Buscar pais" 
            type="search" 
            variant="outlined"
            size="small" 
            onKeyDown={keyPress}
            value={currentSearchCountry}
            className={classes.searchTextField}
            onChange={handleSearchCountry}/>  

        <TextField 
            id="outlined-search"
            label="Buscar año" 
            type="search" 
            variant="outlined"
            size="small" 
            onKeyDown={keyPress}
            value={currentSearchYear}
            className={classes.searchTextField}
            onChange={handleSearchYear}/>  

        <FormControl variant="outlined" className={classes.formControlCategory} size="small">
            <InputLabel id="demo-simple-select-outlined-label" size="small">Categoria de clasificacion</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleCategoryChange}
                label="Categoria de clasificacion"
                value={category}>
                {available_categories !== null && (
                    available_categories.map((single_category) => {
                        return (
                            <MenuItem key={single_category.value} value={single_category.value}>{single_category.name}</MenuItem>
                        );
                    })
                )}
            </Select>
        </FormControl>
        </div>
    )
}

export default SearchMap