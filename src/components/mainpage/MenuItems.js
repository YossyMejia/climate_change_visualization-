import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import stylesMainPage from "../../styles/mainPageStyles";

// Imports de íconos
import Language from '@material-ui/icons/Language';           // Mapa
import Map from '@material-ui/icons/Map';                     // Arbol

//views name used to be compared with the actual selected view
const userAdmin = "Mapa mundial";
const extUserAdmin = "Arbol";

// Componente que contiene todos los items del menú de opciones de administrador
const MenuItems = ({setView, selection}) => {
  const classes = stylesMainPage();

  return (
    <div> 
      <ListItem button 
      onClick={() => {setView(["Mapa mundial","/map"]); }}>
      <ListItemIcon>
        {selection === userAdmin ? <Language className={classes.buttonClicked}/> 
        : <Language />}
      </ListItemIcon>
      <ListItemText primary="Mapa mundial" />
    </ListItem>

    <ListItem button 
      onClick={() => {setView(["Arbol","/tree"]); }}>
      <ListItemIcon>
        {selection === extUserAdmin ? <Map className={classes.buttonClicked}/> 
        : <Map />}
      </ListItemIcon>
      <ListItemText primary="Arbol" />
    </ListItem>

    {/*
    <ListItem button 
    onClick={() => {setView(["Administración de GPS","/gps"]); }}>
      <ListItemIcon>
      {selection === gpsAdmin ? <GpsFixed className={classes.buttonClicked}/> 
        : <GpsFixed />}
      </ListItemIcon>
      <ListItemText primary="GPS" />
    </ListItem> */}

    </div> 
  )
}

export default MenuItems
