import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Slide } from "@material-ui/core";
import car from "./assets/car.png";
import backgroundImage from "../../../shared/images/background-city.jpg";

const useStyles = makeStyles((theme) => ({
  bg: {
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",
  },
  logoContainer: {
    justifyContent: "center",
  },
  logo: {
    height: "400px",
  },
}));

const SessionContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.bg}>
      <Grid className={classes.mainContainer} container>
        <Grid className={classes.logoContainer} container item sm={12} md={6}>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={700}
          >
            <img className={classes.logo} src={car} alt="taxi logo" />
          </Slide>
        </Grid>
        <Grid container item sm={12} md={4}>
          {children}
        </Grid>
      </Grid>
    </Paper>
  );
};

export { SessionContainer };
