import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import { fetchMovies } from "../api/fetchMovies";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header.js";

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
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

function MovieBrowser(props) {
  const { classes } = props;
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    let abort = false;
    fetchMovies(abort).then(response => setPopularMovies(response));
    return () => {
      abort = true;
    };
  }, []);

  return (
    <React.Fragment>
      <Header />

      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {popularMovies.map(movie => (
              <Grid item key={movie.id} sm={6} md={4} lg={3}>
                <MovieCard
                  source={movie.poster_path}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  vote={movie.vote_average}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      <footer />
    </React.Fragment>
  );
}

MovieBrowser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieBrowser);
