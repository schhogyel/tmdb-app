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
    display: "flex",
    paddingBottom: "40px"
  },
  cardWrapper: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  card: {
    marginTop: "-80px",
    maxWidth: 345,
    width: "30%",
    flex: "1",
    minWidth: "140px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "-130px"
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "-160px"
    }
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  },
  title: {
    fontFamily: "'Montserrat', sans-serif",
    color: "#E3F4FC",
    fontWeight: "600",
    fontSize: "1.75rem",
    textAlign: "left",
    lineHeight: "1.2",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem"
    }
  },
  movieInfo: {
    color: "#B8D8E6",
    fontSize: "0.75rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem"
    }
  },
  infoContainer: {
    paddingLeft: "20px",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "40px"
    }
  }
});

function MovieDetailsCard(props) {
  const { classes, title, year, score, image, duration } = props;
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardWrapper}>
        <Card className={classes.card} raised>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={title}
              className={classes.media}
              image={`https://image.tmdb.org/t/p/w500/${image}`}
              title={title}
            />
          </CardActionArea>
        </Card>
      </div>

      <div className={classes.infoContainer}>
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
