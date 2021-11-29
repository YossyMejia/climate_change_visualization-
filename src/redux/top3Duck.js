import {dataFile2} from '../json_data/dataFile2';
import {dataFile3} from '../json_data/dataFile3';
import {dataFile4} from '../json_data/dataFile4';

//Function to sort an array objects using the 'value' attribute 
function compareValues( a, b ) {
  if ( a.value > b.value ){
    return -1;
  }
  if ( a.value < b.value ){
    return 1;
  }
  return 0;
}

//Function to sum all the data by country and get an average, also the new data is stored in a new array that is going to be sort
//from bigger to min value, the return value is an array with the top 3 elements 
function findTop3(data){
  data = data.filter(function(country) { return country.Entity != "World"; }); 
  var top3 = [];
  data.map((single_country) => { 
    var current_country = single_country.Entity;
    var country_data = data.filter(obj => {
      return obj.Entity === current_country
    })
    if(country_data.length != 0){
      var value_sum = country_data.reduce((n, {Value}) => n + Value, 0);
      top3.push({title: country_data[0].Entity, value: value_sum/country_data.length, color: '', value_label: 0})
      data = data.filter(function(country) { return country.Entity != current_country; }); 
    }
  })
  top3 = top3.sort(compareValues);
  return top3.slice(0, 3);
}

const colors = ['#184e77', '#d9ed92', '#52b69a']

//Function to get the top 3 countries with the biggest value by category, and set the respective colors and round the value numbers  
function getTop3(data) {
  if(data !== null){
    var top3 = findTop3(data);
    top3.map((top_ele, index) => {
      top_ele.color = colors[index];
      top_ele.value_label = top_ele.value.toFixed(2);
    })
    return top3;
  }
  else{
    return null;
  }
}

//Return the category data attribute that match with the variable
function getDataByCategory(category, allCategories){
  var selectedCategory = allCategories.filter(obj => { return obj.value === category });
  return selectedCategory[0].data;
} 


const initialState = {
    search_category: "1",
    
    top3_data: null,

    available_categories: [
      {value: "1", name: "Promedio de precipitación", data: dataFile2()},
      {value: "2", name: "Emisiones anuales de CO2 per cápita", data: dataFile3()},
      {value: "3", name: "Total de emisiones de gas por efecto invernadero excluyendo uso de tierra y bosque", data: dataFile4()}
    ],

    subtitle: "Categoria: Promedio de precipitación",
  };
  
  /* - * - * - * - Types - * - * - * - */
  const SET_SEARCH = "SET_SEARCH";
  const CHANGE_SUBTITLE_TOP3 = "CHANGE_SUBTITLE_TOP3";
  const SET_NEW_TOP3_DATA = "SET_NEW_TOP3_DATA";
  
  /* - * - * - * - Reducer - * - * - * - */
  export default function top3Reducer(state = initialState, action) {
    switch (action.type) {
      case CHANGE_SUBTITLE_TOP3:
        return { ...state, subtitle: action.payload};
      case SET_SEARCH: 
        return { ...state, search_category: action.payload};
      case SET_NEW_TOP3_DATA: 
        return { ...state, top3_data: action.payload};
      default:
        return state;
    }
  }
  
  
  /* - * - * - * - Acciones - * - * - * - */
  
  //Set the selected category to be used as filter
  export const setSearchCategoryAction = (category) => async (dispatch) => {
      try {
        dispatch({
          type: SET_SEARCH,
          payload: category,
        });
      } catch (error) {
        console.log(error);
      }
  };

  //Change the title based on the category selected 
  export const changeTitleAction = (category) => async (dispatch, getState) => {
    const {available_categories} = getState().top3Info;
    var category_text = available_categories.find(x => x.value === category);
    var new_subtitle = "Categoria seleccionada: "+category_text.name;
    try {
        dispatch({
          type: CHANGE_SUBTITLE_TOP3,
          payload: new_subtitle,
        });
      } catch (error) {
        console.log(error);
      }
  }
  
  //Change the title based on the category selected 
  export const getFilterDataAction = (category) => async (dispatch, getState) => {
    var data = null;
    const {available_categories} = getState().top3Info;
    data = getDataByCategory(category, available_categories);
    var new_data = getTop3(data);
    try {
        dispatch({
          type: SET_NEW_TOP3_DATA,
          payload: new_data,
        });
    } catch (error) {
        console.log(error);
    }
  }
    
  