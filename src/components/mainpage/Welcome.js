import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import Background from "../../assets/bg.png";
import stylesMainPage from "../../styles/mainPageStyles";

export default function Welcome() {
    const classes = stylesMainPage();
    const history = useHistory();

    const openApp = async (e) => {
        history.push("/view/map");
    }
  
    return (
        <div
            className={classes.welcome}
            style={{backgroundImage: "url(" + Background + ")"}}
            >
            <Container component="main" maxWidth="xs">
                <Button
                type="submit"
                fullWidth
                className={classes.buttonWelcome}
                variant="contained"
                onClick={openApp}
                >
                    Abrir aplicación
                </Button>
            </Container>
        </div>
    );
}
  