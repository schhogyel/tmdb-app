import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  cardContainer: {
    display: "flex"
  },
  card: {
    marginTop: "-12%",
    maxWidth: 345,
    width: "30%",
    flex: "1"
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  },
  title: {
    color: "#E3F4FC"
  },
  movieInfo: {
    color: "#B8D8E6"
  }
});

function MovieDetailsCard(props) {
  const { classes, title, year, score, image, duration } = props;
  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.media}
            image={`https://image.tmdb.org/t/p/w500/${image}`}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
      <div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {title}
        </Typography>
        <Typography className={classes.movieInfo} component="p">
          {year} {score} {duration}
        </Typography>
      </div>
    </div>
  );
}

MovieDetailsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieDetailsCard);
