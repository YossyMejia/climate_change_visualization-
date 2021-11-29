import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuItems from "./MenuItems";
import stylesMainPage from "../../styles/mainPageStyles";
import { useState, useEffect} from "react";
import { Route } from "react-router-dom";
import MapComponent from '../map/PrincipalMap';
import Top3Component from '../top3/PrincipalTop3';
import LoadPageComponent from '../loadpage/LoadPage';
import {useHistory} from "react-router-dom";
import {dataFile2} from '../../json_data/dataFile2';

export default function MainPage() {

  const classes = stylesMainPage();
  const history = useHistory();
  const data2 = dataFile2();

  const [open, setOpen] = useState(false);

  const [selection, setSelection] = useState("Mapa mundial"); 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const setCurrentSelection = (currentSelection) => {
    setSelection(currentSelection[0]);
    history.push("/view" + currentSelection[1]);
  };

  const loadDataDucks = () => {
    //load data
  }
                   

  useEffect(() => {
    loadDataDucks();
    history.push("/view/map");
  }, []);
  
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {selection}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <MenuItems setView={setCurrentSelection} selection={selection}/>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}> 
            <Route exact path="/view/map" component={MapComponent}></Route> 
            <Route exact path="/view/top3" component={Top3Component}></Route> 
        </Container>
      </main>
    </div>
  );
}
