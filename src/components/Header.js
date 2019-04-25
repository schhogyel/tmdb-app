import React, { useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";

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
  appLogo: {
    width: "66px",
    height: "59px",
    [theme.breakpoints.up("sm")]: {
      width: "130px",
      height: "116px"
    }
  },

  logo: {
    backgroundImage: `url(${backgroundImage}) , radial-gradient(at 30% top, rgba(7, 64, 52, 1) 0%, rgba(8, 28, 36, 1) 70%)`,
    backgroundSize: "cover",
    padding: "64px 0",
    [theme.breakpoints.up("md")]: {
      padding: "60px 0"
    }
  },
  toolbar: {
    display: "flex",
    justifyContent: "center"
  },
  search: {
    position: "relative",
    borderRadius: "28px",
    backgroundColor: theme.palette.common.white,
    width: "680px"
  },
  searchIconContainer: {
    width: theme.spacing.unit * 6,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.main,
    right: 0,
    top: 0,
    [theme.breakpoints.up("md")]: {
      width: theme.spacing.unit * 9
    }
  },
  searchIcon: {
    width: "24px",
    height: "24px",
    [theme.breakpoints.up("md")]: {
      width: "42px",
      height: "42px"
    }
  },
  inputRoot: {
    fontSize: "0.875rem",
    width: "100%",
    "&:placeholder": {
      color: theme.palette.primary.main
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem"
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
  const inputEl = useRef(null);

  return (
    <AppBar position="static" className={classes.appBar}>
      <div className={classes.logo}>
        <Link to={"/"}>
          {" "}
          <img src={logo} className={classes.appLogo} alt="logo" />
        </Link>
      </div>
      <Toolbar className={classes.toolbar}>
        <div className={classes.search}>
          <form onSubmit={e => props.handleSubmit(e, inputEl)}>
            <InputBase
              inputRef={inputEl}
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </form>
          <div className={classes.searchIconContainer}>
            <SearchIcon className={classes.searchIcon} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
