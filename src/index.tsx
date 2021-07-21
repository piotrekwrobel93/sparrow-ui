import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <h1>Hey</h1>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
