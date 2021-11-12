import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./constants";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import MainPage from "./components/mainpage/MainPage";

const availablePath =
  "/view/(|map|tree|top3|lines)";

ReactDOM.render(
  <Provider store={generateStore()}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path={availablePath} component={MainPage}></Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>,
  </Provider>,
  document.getElementById("root")
);
