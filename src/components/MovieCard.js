import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { formatDate } from "../utils/formatDate";

const styles = {
  title: {
    color: "#E6F7FF",
    paddingTop: "10px",
    fontSize: "1.15rem"
  },
  yearText: { color: "#A1D1E6", fontSize: "1rem" },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover",
    height: "100%"
  }
};

function MovieCard(props) {
  const { classes } = props;
  return (
    <div className={classes.card}>
      <Card raised>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.media}
            height="140"
            image={`https://image.tmdb.org/t/p/w500/${props.source}`}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>

      {/* <Typography
        className={classes.title}
        gutterBottom
        variant="subtitle1"
        align="left"
      >
        {props.title}
      </Typography>
      <Typography className={classes.yearText} component="p" align="left">
        {formatDate(props.releaseDate)}
      </Typography> */}
    </div>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieCard);
