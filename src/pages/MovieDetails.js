import React from "react";

import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "@reach/router";

import MovieDetailsCard from "../components/MovieDetailsCard";

import { fetchMovie } from "../api";

const styles = theme => ({
  heroImage: {
    maxHeight: "300px",
    overflow: "hidden",
    display: "flex"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  backArrow: {
    position: "absolute",
    left: 0,
    width: "2.5rem",
    height: "2.5rem",
    color: "#fff"
  }
});

function MovieDetails(props) {
  const { id, classes } = props;
  const [movie, setMovie] = React.useState({});
  React.useEffect(() => {
    let abort = false;
    fetchMovie(id, abort).then(response => setMovie(response));
    return () => {
      abort = true;
    };
  }, [id]);
  return (
    <main>
      <Link to={"/"}>
        <ArrowBack className={classes.backArrow} />
      </Link>

      <div className={classes.heroImage}>
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt="poster"
        />
      </div>
      <MovieDetailsCard
        title={movie.title}
        year={movie.release_date}
        score={movie.vote_average}
        image={movie.poster_path}
        duration={movie.runtime}
      />
      <div>{movie.overview}</div>
    </main>
  );
}

MovieDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieDetails);
