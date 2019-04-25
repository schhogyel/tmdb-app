import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import MovieCard from "./MovieCard";
import { getRatingColor } from "../utils";
import { convertToPercent, formatDate } from "../utils";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  gridTitle: {
    fontFamily: "'Montserrat', sans- serif",
    color: "#E3F4FC",
    fontSize: "1.25rem",
    fontWeight: "600",
    lineHeight: "1.4",
    padding: "10px 0",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.5rem"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  badge: {
    padding: "10px",
    fontSize: "0.75rem",
    right: "96%",
    top: "2%",
    fontWeight: "600",
    transform: "translate(100%, 0%)",
    [theme.breakpoints.up("sm")]: {
      padding: "15px",
      fontSize: "1.1rem",
      right: "90%",
      top: "4%"
    }
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  },
  title: {
    color: "#E6F7FF",
    paddingTop: "10px",
    fontSize: "0.875rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.15rem"
    }
  },
  yearText: {
    color: "#A1D1E6",
    fontSize: "0.75rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem"
    }
  }
});

function MovieGrid({ classes, title, movieList }) {
  return (
    <React.Fragment>
      <Typography
        className={classes.gridTitle}
        component="h3"
        gutterBottom
        align="left"
      >
        {title}
      </Typography>
      <Grid container spacing={40}>
        {movieList.map(movie => (
          <Grid item key={movie.id} xs={6} sm={6} md={4} lg={3}>
            <Link to={`/details/${movie.id}`}>
              <Badge
                badgeContent={convertToPercent(movie.vote_average)}
                color={getRatingColor(movie.vote_average)}
                classes={{ badge: classes.badge }}
                component={"div"}
              >
                <MovieCard
                  id={movie.id}
                  title={movie.title}
                  source={movie.poster_path}
                  vote={movie.vote_average}
                />
              </Badge>
            </Link>
            <Typography
              className={classes.title}
              gutterBottom
              variant="subtitle1"
              align="left"
            >
              {movie.title}
            </Typography>
            <Typography className={classes.yearText} component="p" align="left">
              {formatDate(movie.release_date)}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

MovieGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieGrid);
