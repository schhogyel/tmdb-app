import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import MovieCard from "./MovieCard";
import { getRatingColor } from "../utils";
import { convertToPercent } from "../utils";
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
    fontSize: "2.5rem",
    fontWeight: "600"
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  badge: {
    padding: "15px",
    fontSize: "1.1rem",
    right: "90%",
    top: "4%",
    transform: "translate(100%, 0%)"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
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
                  source={movie.poster_path}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  vote={movie.vote_average}
                />
              </Badge>
            </Link>
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
