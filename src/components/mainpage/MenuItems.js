import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import stylesMainPage from "../../styles/mainPageStyles";

// Imports de íconos
import Language from '@material-ui/icons/Language';           // Mapa
import Map from '@material-ui/icons/Map';                     // Arbol
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom'; //top 3

//views name used to be compared with the actual selected view
const mundialMap = "Mapa mundial";
const tree = "Arbol";
const top3 = "Top 3 paises";

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

    </div> 
  )
}

export default MenuItems
