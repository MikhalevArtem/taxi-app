import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button, Typography } from "@material-ui/core";
import "./RepeatOrder.css";
import { useDispatch } from "react-redux";
import { wayClear } from "../../redux/modules/way";

const useStyles = makeStyles((theme) => ({
  repeatContainer: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  buttonsContainer: {
    textAlign: "center",
  },
}));

const RepeatOrder = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Paper className="repeat-order">
      <Grid className={classes.repeatContainer} container spacing={1}>
        <Grid item>
          <Typography>Такси скоро подъедет</Typography>
        </Grid>
        <Grid className={classes.buttonsContainer} item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(wayClear())}
          >
            Новый заказ
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export { RepeatOrder };
