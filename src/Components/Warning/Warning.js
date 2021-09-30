import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import "./Warning.css";

const useStyles = makeStyles((theme) => ({
  warningContainer: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  buttonsContainer: {},
}));

const Warning = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Paper className="warning">
      <Grid className={classes.warningContainer} container spacing={1}>
        <Grid item>
          <Typography>Для заказа такси заполните профиль</Typography>
        </Grid>
        <Grid item className={classes.buttonsContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/profile")}
          >
            Перейти в профиль
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export { Warning };
