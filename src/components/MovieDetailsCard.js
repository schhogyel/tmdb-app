import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { formatYear, convertToPercent, convertMinToHourMin } from "../utils";

const styles = theme => ({
  cardContainer: {
    display: "flex"
  },
  card: {
    marginTop: "-12%",
    maxWidth: 345,
    width: "30%",
    flex: "1",
    minWidth: "150px"
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  },
  title: {
    fontFamily: "'Montserrat', sans-serif",
    color: "#E3F4FC",
    fontWeight: "600",
    fontSize: "2.5rem",
    textAlign: "left"
  },
  movieInfo: {
    color: "#B8D8E6"
  },
  infoContainer: {
    paddingLeft: "40px"
  }
});

function MovieDetailsCard(props) {
  const { classes, title, year, score, image, duration } = props;
  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card} raised>
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
      <div class={classes.infoContainer}>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {title}
        </Typography>
        <Typography
          className={classes.movieInfo}
          component="p"
          align="left"
          gutterBottom
        >
          {formatYear(year)} &nbsp; &#8226;&nbsp; {convertToPercent(score)}{" "}
          &nbsp;User Score
          <br />
          {convertMinToHourMin(duration)}
        </Typography>
      </div>
    </div>
  );
}

MovieDetailsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieDetailsCard);
