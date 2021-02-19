import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import theme from "./theme";

const store = configureStore();

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  rootElement
);
