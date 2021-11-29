import React, { useState} from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import stylesTop3View from "../../styles/mapStyles";
import {useDispatch, useSelector} from 'react-redux';
import {
    setSearchCategoryAction
} from '../../redux/top3Duck';

const SearchTop3 = ({category, available_categories}) => {
    const dispatch = useDispatch();
    const classes = stylesTop3View();
    
    // Cambia el estado de la búsqueda
    const handleCategoryChange = (event) => {
        dispatch(setSearchCategoryAction(event.target.value));
    };
    
    return (
        <div>
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

export default SearchTop3