import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import stylesMainPage from "../../styles/mainPageStyles";

// Imports de íconos
import PeopleIcon from '@material-ui/icons/People';           // Usuarios
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'; //Usuarios externos
import GpsFixed from '@material-ui/icons/GpsFixed';           // GPS
import Commute from '@material-ui/icons/Commute';             // Vehículos
import Language from '@material-ui/icons/Language';           // Geocercas
import Map from '@material-ui/icons/Map';                     // Rutas/Viajes
import LocationOn from '@material-ui/icons/LocationOn';       // Localizar
import ReportProblem from '@material-ui/icons/ReportProblem'; // Alertas
import BarChart from '@material-ui/icons/BarChart';           // Estadísticas

//views name used to be compared with the actual selected view
const userAdmin = "Administración de Usuarios";
const extUserAdmin = "Administración de Usuarios externos";
const gpsAdmin = "Administración de GPS";
const vehiculeAdmin = "Administración de Vehículos";
const geoAdmin = "Administración de Geocercas";
const travelsAdmin = "Administración de Rutas";
const trackinAdmin = "Rastreo de Vehículos";
const alertsAdmin = "Seguimiento de Alertas";
const statisticsAdmin = "Estadísticas";

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
      <ListItemText primary="Usuarios" />
    </ListItem>

    <ListItem button 
      onClick={() => {setView(["Arbol. ","/tree"]); }}>
      <ListItemIcon>
        {selection === extUserAdmin ? <Map className={classes.buttonClicked}/> 
        : <Map />}
      </ListItemIcon>
      <ListItemText primary="Usuarios Externos" />
    </ListItem>

    	{/*
    <ListItem button 
    onClick={() => {setView(["Administración de GPS","/gps"]); }}>
      <ListItemIcon>
      {selection === gpsAdmin ? <GpsFixed className={classes.buttonClicked}/> 
        : <GpsFixed />}
      </ListItemIcon>
      <ListItemText primary="GPS" />
    </ListItem>

    <ListItem button 
    onClick={() => {setView(["Administración de Vehículos","/vehicles"]); }}>
      <ListItemIcon>
      {selection === vehiculeAdmin ? <Commute className={classes.buttonClicked}/> 
        : <Commute />}
      </ListItemIcon>
      <ListItemText primary="Vehículos" />
    </ListItem>

    <ListItem button 
    onClick={() => {setView(["Administración de Geocercas","/fences"]); }}>
      <ListItemIcon>
      {selection === geoAdmin ? <Language className={classes.buttonClicked}/> 
        : <Language />}
      </ListItemIcon>
      <ListItemText primary="Geocercas" />
    </ListItem>

    <ListItem button 
    onClick={() => {setView(["Administración de Rutas","/travels"]); }}>
      <ListItemIcon>
      {selection === travelsAdmin ? <Map className={classes.buttonClicked}/> 
        : <Map />}
      </ListItemIcon>
      <ListItemText primary="Rutas" />
    </ListItem>

    <ListItem button 
    onClick={() => {setView(["Rastreo de Vehículos","/tracking"]); }}>
      <ListItemIcon>
      {selection === trackinAdmin ? <LocationOn className={classes.buttonClicked}/> 
        : <LocationOn />}
      </ListItemIcon>
      <ListItemText primary="Localizar" />
    </ListItem>

    <ListItem button 
    onClick={() => {setView(["Seguimiento de Alertas","/alerts"]); }}>
      <ListItemIcon>
      {selection === alertsAdmin ? <ReportProblem className={classes.buttonClicked}/> 
        : <ReportProblem />}
      </ListItemIcon>
      <ListItemText primary="Alertas" />
      </ListItem> */}

    </div> 
  )
}

export default MenuItems
