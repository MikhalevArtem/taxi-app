import React from "react";
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import taxi from "./assets/taxi.svg";
import { useDispatch } from "react-redux";
import { logout as authLogout } from "../../redux/modules/auth/";
import { logout as cardLogout } from "../../redux/modules/card/";
import { wayClear } from "../../redux/modules/way";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    color: "primary",
  },
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },
  logo: {
    height: "50px",
  },
}));

const Nav = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <AppBar className={classes.AppBar} position="static">
      <Toolbar>
        <Typography className={classes.title}>
          <img className={classes.logo} src={taxi} alt="taxi logo" />
        </Typography>
        <Button color="inherit" component={RouterLink} to="map">
          Карта
        </Button>
        <Button color="inherit" component={RouterLink} to="profile">
          Профиль
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            dispatch(authLogout());
            dispatch(cardLogout());
            dispatch(wayClear());
          }}
        >
          Выйти
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export { Nav };
