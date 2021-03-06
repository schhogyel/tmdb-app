import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "@reach/router";

import MovieDetailsCard from "../components/MovieDetailsCard";
import Typography from "@material-ui/core/Typography";

import { fetchMovie } from "../api";

const styles = theme => ({
  mainContainer: {
    paddingBottom: "100px"
  },
  heroImage: {
    maxHeight: "245px",
    overflow: "hidden",
    display: "flex"
  },
  image: {
    width: "100%",
    objectFit: "cover"
  },
  backArrow: {
    position: "absolute",
    left: 0,
    width: "2.5rem",
    height: "2.5rem",
    color: "#fff",
    marginLeft: "20px",
    marginTop: "25px"
  },
  detailsContainer: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "20px",
    [theme.breakpoints.up("sm")]: {
      padding: "40px"
    }
  },
  overviewContainer: {},
  overviewTitle: {
    fontFamily: "'Montserrat', sans-serif",
    color: "#E3F4FC",
    fontWeight: "600",
    fontSize: "1.25rem",
    padding: "20px 0",
    borderTop: "1px solid #0F303D",
    [theme.breakpoints.up("md")]: {
      padding: "40px 0",
      fontSize: "2.5rem"
    }
  },
  overviewDescription: {
    color: "#B8D8E6",
    textAlign: "left",
    fontSize: "1rem"
  }
});

export function MovieDetails(props) {
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
    <main className={classes.mainContainer}>
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
      <div className={classes.detailsContainer}>
        <MovieDetailsCard
          title={movie.title}
          year={movie.release_date}
          score={movie.vote_average}
          image={movie.poster_path}
          duration={movie.runtime}
        />
        <div className={classes.overviewContainer}>
          <Typography
            className={classes.overviewTitle}
            component="h3"
            align="left"
            gutterBottom
          >
            Overview
          </Typography>
          <Typography className={classes.overviewDescription} component="p">
            {movie.overview}
          </Typography>
        </div>
      </div>
    </main>
  );
}

MovieDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieDetails);
