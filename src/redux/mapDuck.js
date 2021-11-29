import {dataFile2} from '../json_data/dataFile2';
import {dataFile3} from '../json_data/dataFile3';
import {dataFile4} from '../json_data/dataFile4';

const { getCode, getName, getData } = require("country-list");

//If the user have enter a year in the filter a function to select the data by year will be called, otherwise the full data is returned
function applyYearFilter(data, year){
  if(year !== ""){
    data = getDataByYear(data, year);
  }
  else{
    data = getFullData(data);
  }
  return data;
}

//
function applyCountryFilter(data, country){
  if(country !== ""){
    data = getDataByCountry(data, country);
  }
  return data;
}

//First we call a function that applies  the year filter on the data, then a function that applies the country filter 
function getFilterData(data, year, country) {
  if(data !== null){
    data = data.filter(function(country) { return country.Entity != "World"; });  //Cleaning data
    data = applyYearFilter(data, year);
    data = applyCountryFilter(data, country);
    return data;
  }
  else{
    return null;
  }
}

//Get and return the country code based on a country name, if the library doesn't recognize the name it'll catch the error
function getCountryCode(countryName){
  try{
    return getCode(countryName).toLowerCase();
  } catch(error){
    console.log("ERROR",countryName);
  }
}

//Function to filter the data by a single year
function getDataByYear(data, year){
  var yearData = [];
  data = data.filter(obj => { return obj.Year == year })
  data.map((single_country) => { 
    var country_code = getCountryCode(single_country.Entity);
    if(country_code !== undefined)
      yearData.push({country: country_code, value: single_country.Value})
  })
  return yearData;
}

//Function to filter the data by a single country
function getDataByCountry(data, country){
  var countryData = [];
  var country_code = getCountryCode(country);
  if(country_code !== undefined){
    data = data.filter(obj => { return obj.country == country_code })
    data.map((single_country) => { 
      countryData.push({country: country_code, value: single_country.value})
    })
    return countryData;
  }
  else{
    return [];
  }
}

//Function to get all the average data by country without filters
function getFullData(data) {
  var fullData = [];
  data.map((single_country) => { 
    var current_country = single_country.Entity;
    var country_data = data.filter(obj => { return obj.Entity === current_country })
    if(country_data.length !== 0){
      var value_sum = country_data.reduce((n, {Value}) => n + Value, 0);
      var country_code = getCountryCode(country_data[0].Entity);
      if(country_code !== undefined)
        fullData.push({country: country_code, value: value_sum/country_data.length})
      data = data.filter(function(country) { return country.Entity != current_country; }); 
    }
  })
  return fullData;
}

//Return the category data attribute that match with the variable
function getDataByCategory(category, allCategories){
  var selectedCategory = allCategories.filter(obj => { return obj.value === category });
  return selectedCategory[0].data;
} 

const initialState = {
  search_country: "",
  search_year: "",
  search_category: "1",

  map_data: [],

  available_categories: [
    {value: "1", name: "Promedio de precipitación", data: dataFile2()},
    {value: "2", name: "Emisiones anuales de CO2 per cápita", data: dataFile3()},
    {value: "3", name: "Total de emisiones de gas por efecto invernadero excluyendo uso de tierra y bosque", data: dataFile4()}
  ],
};

/* - * - * - * - Types - * - * - * - */
const SET_SEARCH_COUNTRY = "SET_SEARCH_COUNTRY";
const SET_SEARCH_YEAR = "SET_SEARCH_YEAR";
const SET_SEARCH_CATEGORY = "SET_SEARCH_CATEGORY";
const GET_MAP_DATA = "GET_MAP_DATA";

/* - * - * - * - Reducer - * - * - * - */
export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_COUNTRY:
      return { ...state, search_country: action.payload};
    case SET_SEARCH_YEAR: 
        return { ...state, search_year: action.payload};
    case SET_SEARCH_CATEGORY: 
        return { ...state, search_category: action.payload};
    case GET_MAP_DATA: 
        return { ...state, map_data: action.payload};
    default:
      return state;
  }
}


/* - * - * - * - Acciones - * - * - * - */

//Set the country name to be used as filter
export const setSearchCountryAction = (search) => async (dispatch) => {
    try {
      dispatch({
        type: SET_SEARCH_COUNTRY,
        payload: search,
      });
    } catch (error) {
      console.log(error);
    }
};

//Set the selected year to be used as filter
export const setSearchYearAction = (year) => async (dispatch) => {
    try {
      dispatch({
        type: SET_SEARCH_YEAR,
        payload: year,
      });
    } catch (error) {
      console.log(error);
    }
};

//Set the selected category to be used as filter
export const setSearchCategoryAction = (category) => async (dispatch) => {
    try {
      dispatch({
        type: SET_SEARCH_CATEGORY,
        payload: category,
      });
    } catch (error) {
      console.log(error);
    }
};

//Set the data to show in the map
export const getMapData = (year, category, country) => async (dispatch, getState) => {
  var data = null;
  const {available_categories} = getState().mapInfo;
  data = getDataByCategory(category, available_categories);
  var new_data = getFullData(data);
  try {
    dispatch({
      type: GET_MAP_DATA,
      payload: new_data,
    });
  } catch (error) {
    console.log(error);
  }
};

//Filter the data with the search filters
export const searchDataAction = () => async (dispatch, getState) => {
  var data = null;
  const {available_categories, search_country, search_year, search_category} = getState().mapInfo;
  data = getDataByCategory(search_category, available_categories);
  var new_data = getFilterData(data, search_year, search_country);
  try {
    dispatch({
      type: GET_MAP_DATA,
      payload: new_data,
    });
  } catch (error) {
    console.log(error);
  }
};




