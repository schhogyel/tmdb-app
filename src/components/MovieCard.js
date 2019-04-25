import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  title: {
    color: "#E6F7FF",
    paddingTop: "10px",
    fontSize: "1.15rem"
  },
  yearText: { color: "#A1D1E6", fontSize: "1rem" },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover",
    minheight: "233px",
    minWidth: "155px",
    [theme.breakpoints.up("sm")]: {
      height: "100%"
    }
  }
});

function MovieCard(props) {
  const { classes } = props;
  return (
    <div className={classes.card}>
      <Card raised>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.title}
            className={classes.media}
            image={`https://image.tmdb.org/t/p/w500/${props.source}`}
            title={props.title}
          />
        </CardActionArea>
      </Card>
    </div>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieCard);
