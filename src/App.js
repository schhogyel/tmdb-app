import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "./withRoot";

import MovieBrowser from "./pages/MovieBrowser";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: "rgb(7, 32, 39)"
    }
  },
  root: {
    textAlign: "center"
  }
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <MovieBrowser />
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
