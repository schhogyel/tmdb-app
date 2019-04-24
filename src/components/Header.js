import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import logo from "../assets/tmdb_logo.svg";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import backgroundImage from "../assets/tmdb_background_new.jpg";

const styles = theme => ({
  appBar: {
    position: "relative",
    backgroundColor: "rgb(7, 32, 39)",
    boxShadow: "none"
  },
  logo: {
    backgroundImage: `url(${backgroundImage}) , radial-gradient(at 30% top, rgba(7, 64, 52, 1) 0%, rgba(8, 28, 36, 1) 70%)`,
    backgroundSize: "cover",
    padding: "60px 0"
  },
  toolbar: {
    display: "flex",
    justifyContent: "center"
  },
  search: {
    position: "relative",
    borderRadius: "28px",
    backgroundColor: theme.palette.common.white,
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "680px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3
    }
  },
  searchIconContainer: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.main,
    right: 0,
    top: 0
  },
  searchIcon: {
    width: "42px",
    height: "42px"
  },
  inputRoot: {
    color: "inherit",
    fontSize: "1.5rem",
    width: "100%",
    "&:placeholder": {
      color: theme.palette.primary.main
    }
  },
  inputInput: {
    paddingTop: theme.spacing.unit * 1.75,
    paddingRight: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 1.75,
    paddingLeft: theme.spacing.unit * 3,
    transition: theme.transitions.create("width"),
    "&::placeholder": {
      color: theme.palette.primary.main,
      fontWeight: "600"
    },
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%"
    }
  }
});

function Header(props) {
  const { classes } = props;

  return (
    <AppBar position="static" className={classes.appBar}>
      <div className={classes.logo}>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width="130"
          height="116"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        <div className={classes.search}>
          <InputBase
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
          <div className={classes.searchIconContainer}>
            <SearchIcon className={classes.searchIcon} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
