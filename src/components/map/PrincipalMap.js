import React from "react";
import { useEffect } from "react";
import SearchMap from "./SearchMap";
import WorldMap from "./WorldMap";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import {
  searchDataAction,
} from "../../redux/mapDuck";

export default function PrincipalMap(){

  // Constantes
  const dispatch = useDispatch();
  const search_year = useSelector((store) => store.mapInfo.search_year);
  const search_category = useSelector((store) => store.mapInfo.search_category);
  const search_country = useSelector((store) => store.mapInfo.search_country);
  const map_data = useSelector((store) => store.mapInfo.map_data);
  const available_categories = useSelector((store) => store.mapInfo.available_categories);

  const loadData = () => {
    dispatch(searchDataAction()); // Load filter and initial data  
  };


  useEffect(() => {
    loadData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search_category]);




  return (
    <div>
      <Grid container>
        <Grid item>
           <SearchMap year={search_year} category={search_category} countryName={search_country} 
           available_categories={available_categories} />
        </Grid>
      </Grid>
      <WorldMap
        map_data={map_data}
      />
    </div>
  );
};