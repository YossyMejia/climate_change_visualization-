import React, { useState} from 'react'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import stylesMapView from "../../styles/mapStyles";
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
        <TextField 
            id="outlined-search"
            label="Buscar" 
            type="search" 
            variant="outlined"
            size="small" 
            onKeyDown={keyPress}
            value={countryName}
            className={classes.searchTextField}
            onChange={handleSearch}/>  
            
        <FormControl variant="outlined" className={classes.formControl} size="small">
            <InputLabel id="demo-simple-select-outlined-label" size="small">Año</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={year}
                onChange={handleRolChange}
                label="Año">
                <MenuItem value={"none"}>
                    <em>Ninguno</em>
                </MenuItem>
            </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControlCategory} size="small">
            <InputLabel id="demo-simple-select-outlined-label" size="small">Comparación por región</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleStatusChange}
                label="Comparación por región"
                value={category}>
                <MenuItem value={"none"}>
                    <em>Ninguno</em>
                </MenuItem>
            </Select>
        </FormControl>
        </div>
    )
}

export default SearchUsers