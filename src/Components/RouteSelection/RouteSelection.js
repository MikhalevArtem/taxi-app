import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddressRequest } from "../../redux/modules/address/slice";
import { fetchWayRequest } from "../../redux/modules/way/slice";
import { validationSchema } from "./validationSchema";
import "./RouteSelection.css";

const useStyles = makeStyles((theme) => ({
  routeContainer: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  buttonsContainer: {
    textAlign: "center",
  },
}));

const RouteSelection = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses.addresses);
  const { handleSubmit, setFieldValue, values, isValid, dirty } = useFormik({
    initialValues: {
      addressFrom: "",
      addressTo: "",
    },
    validationSchema,
    onSubmit: () => {
      dispatch(fetchWayRequest([values.addressFrom, values.addressTo]));
    },
  });

  useEffect(() => {
    if (!addresses.length) {
      dispatch(fetchAddressRequest());
    }
  }, []);

  return (
    <Paper className="route-selection">
      <form onSubmit={handleSubmit}>
        <Grid className={classes.routeContainer} container spacing={1}>
          <Grid item>
            <Autocomplete
              id="address-from"
              name="address-from"
              options={(function () {
                const overlap = addresses.indexOf(values.addressTo);
                return overlap === -1
                  ? addresses
                  : addresses
                      .slice(0, overlap)
                      .concat(addresses.slice(overlap + 1));
              })()}
              debug
              getOptionLabel={(option) => option}
              getOptionSelected={() => true}
              style={{ width: "100%" }}
              value={values.addressFrom}
              onChange={(e, value) => setFieldValue("addressFrom", value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Откуда"
                  variant="outlined"
                  margin="normal"
                />
              )}
            />
          </Grid>
          <Grid item>
            <Autocomplete
              id="addressTo"
              name="address-to"
              options={(function () {
                const overlap = addresses.indexOf(values.addressFrom);
                return overlap === -1
                  ? addresses
                  : addresses
                      .slice(0, overlap)
                      .concat(addresses.slice(overlap + 1));
              })()}
              debug
              getOptionLabel={(option) => option}
              getOptionSelected={() => true}
              style={{ width: "100%" }}
              value={values.addressTo}
              onChange={(e, value) => setFieldValue("addressTo", value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Куда"
                  variant="outlined"
                  margin="normal"
                />
              )}
            />
          </Grid>
          <Grid className={classes.buttonsContainer} item>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!(isValid && dirty)}
            >
              Вызвать такси
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export { RouteSelection };
