import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import { fetchMovies, searchMovie } from "../api";
import Header from "../components/Header.js";
import MovieGrid from "../components/MovieGrid";

const styles = theme => ({
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
    [theme.breakpoints.up("md")]: {
      padding: `${theme.spacing.unit * 4}px 0`
    }
  }
});

function MovieBrowser(props) {
  const { classes } = props;
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let abort = false;
    fetchMovies(abort).then(response => setPopularMovies(response));
    return () => {
      abort = true;
    };
  }, []);

  const handleSubmit = (e, ref) => {
    e.preventDefault();
    const query = ref.current.value;
    setLoading(true);
    searchMovie(query).then(response => {
      setSearchResults(response);
      setLoading(false);
    });
  };

  const renderGrid = () => {
    if (searchResults && searchResults.length) {
      return <MovieGrid title={"Search Results"} movieList={searchResults} />;
    } else {
      return <MovieGrid title={"Popular Movies"} movieList={popularMovies} />;
    }
  };

  return (
    <React.Fragment>
      <Header handleSubmit={handleSubmit} />
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {renderGrid()}
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
