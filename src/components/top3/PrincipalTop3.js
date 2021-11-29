import React from "react";
import { useEffect } from "react";
import SearchTop3 from "./SearchTop3";
import GraphTop3 from "./GraphTop3";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import {
    changeTitleAction,
    getFilterDataAction,
} from "../../redux/top3Duck";

export default function PrincipalTop3(){

  // Constantes
  const dispatch = useDispatch();
  const search_category = useSelector((store) => store.top3Info.search_category);
  const top3_data = useSelector((store) => store.top3Info.top3_data);
  const available_categories = useSelector((store) => store.top3Info.available_categories);
  const subtitle = useSelector((store) => store.top3Info.subtitle);

  const loadData = () => {
    dispatch(changeTitleAction(search_category));
    dispatch(getFilterDataAction(search_category)); // Load filter and initial data  
  };

  const getAllCategories = () => { 
    //dispatch(getCategoriesAction());
  };

  useEffect(() => {
    getAllCategories();
    loadData();
  }, [search_category]);




  return (
    <div>
      <Grid container>
        <Grid item>
           <SearchTop3 category={search_category} available_categories={available_categories}/>
        </Grid>
      </Grid>
      <GraphTop3
        top3_data={top3_data} subtitle={subtitle}
      />
    </div>
  );
};