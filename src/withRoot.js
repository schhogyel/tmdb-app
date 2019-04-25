import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    default: {
      main: "#D1225B"
    },
    primary: {
      main: "#01D277",
      contrastText: "#FFF"
    },
    secondary: {
      main: "#4902A3"
    },
    error: {
      main: "#D1225B"
    },
    titleText: "#E3F4FC"
  },
  typography: {
    useNextVariants: true
  },
  background: {
    default: "rgb(7, 32, 39)"
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
