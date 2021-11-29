import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import stylesMainPage from "../../styles/mainPageStyles";

// Imports de íconos
import Language from '@material-ui/icons/Language';           // Mapa
import Map from '@material-ui/icons/Map';                     // Arbol
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom'; //top 3
import Radar from '@material-ui/icons/Radio';                     // Radar
import Linear from '@material-ui/icons/LinearScale';                     // Linear


//views name used to be compared with the actual selected view
const mundialMap = "Mapa mundial";
const top3 = "Top 3 paises";
const radar = "Radar";
const linear = "Lineal";

// Componente que contiene todos los items del menú de opciones de administrador
const MenuItems = ({setView, selection}) => {
  const classes = stylesMainPage();

  return (
    <div> 
      <ListItem button 
      onClick={() => {setView(["Mapa mundial","/map"]); }}>
      <ListItemIcon>
        {selection === mundialMap ? <Language className={classes.buttonClicked}/> 
        : <Language />}
      </ListItemIcon>
      <ListItemText primary="Mapa mundial"/>
    </ListItem>

    <ListItem button 
      onClick={() => {setView(["Top 3 paises","/top3"]); }}>
      <ListItemIcon>
        {selection === top3 ? <AlignVerticalBottomIcon className={classes.buttonClicked}/> 
        : <AlignVerticalBottomIcon />}
      </ListItemIcon>
      <ListItemText primary="Top 3 paises"/>
    </ListItem>

    <ListItem button 
      onClick={() => {setView(["Radar","/tree"]); }}>
      <ListItemIcon>
        {selection === radar ? <Radar className={classes.buttonClicked}/> 
        : <Radar />}
      </ListItemIcon>
      <ListItemText primary="Radar" />
    </ListItem>

    <ListItem button 
      onClick={() => {setView(["Lineal","/tree"]); }}>
      <ListItemIcon>
        {selection === radar ? <Linear className={classes.buttonClicked}/> 
        : <Linear />}
      </ListItemIcon>
      <ListItemText primary="Lineal" />
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
