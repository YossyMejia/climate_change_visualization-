import React from "react";
import { useEffect } from "react";
import SearchCountry from "./SearchCountry";
import RadarView from "./radarMain";
//import AddUserButton from "./AddUserButton";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import {
  //getUsersAction,
} from "../../redux/mapDuck";

export default function PrincipalRadar(){

  // Constantes
  const dispatch = useDispatch();
  //const users = useSelector((store) => store.users.array); // Datos para la página actual
  //const totalUsers = useSelector((store) => store.users.usersLength); // Total de usuarios

  const loadData = () => {
    //dispatch(getUsersAction(status, page, rowsPerPage, rol)); // Load initial data  
    //dispatch(getRolsAction());
  };

  const getAllRoles = () => { 
    //dispatch(getRolsAction());
  };

  const getAllStatus = () => { 
    //dispatch(getStatusAction());
  };

  const getTotalUsers = () => {
    //dispatch(getUsersLenght(status, "", rol, "")); // get total data lenght from query  
  }; 

  const disableUser = (userId, stateId) => {
    //dispatch(changeUserStatusAction(userId, stateId));
  };

  useEffect(() => {
    getAllRoles();
    getAllStatus();
    loadData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    getTotalUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div>
      <Grid container>
        <Grid item>
            <SearchCountry/>
          {//<SearchCountry rol={rol} status={status} rols={allRoles} allStatus = {allStatus}/>
          }
        </Grid>
        <Grid item>
          {//<SearchPerYear />
          }
        </Grid>
      </Grid>
      <RadarView />
    </div>
  );
};