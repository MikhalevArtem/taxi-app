import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Nav } from "../";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { fetchPostCardRequest } from "../../redux/modules/card";
import { validationSchema } from "./validationSchema";
import backgroundImage from "../../shared/images/background-city.jpg";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  ProfileContainer: {
    flexGrow: 1,
    margin: "auto",
  },
  title: {
    paddingTop: theme.spacing(2),
  },
  cardsContainer: {
    padding: theme.spacing(6),
  },
  buttonsContainer: {
    paddingBottom: theme.spacing(2),
  },
}));

const ProfilePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { handleChange, handleSubmit, values, touched, errors, setFieldValue } =
    useFormik({
      initialValues: {
        cardNumber: "",
        expiryDate: new Date(),
        cardName: "",
        cvc: "",
      },
      validationSchema: validationSchema,
      onSubmit: ({ cardNumber, expiryDate, cardName, cvc }) => {
        let expiryDateStr = JSON.stringify(expiryDate);
        dispatch(
          fetchPostCardRequest({ cardNumber, expiryDateStr, cardName, cvc })
        );
      },
    });

  return (
    <Paper className={classes.bg}>
      <Nav />
      <Grid
        className={classes.ProfileContainer}
        container
        item
        direction="column"
        justifyContent="center"
        alignItems="center"
        sm={6}
      >
        <Paper>
          <Grid
            className={classes.title}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" component="h2" align="center">
                Профиль
              </Typography>
              <Typography align="center">Метод оплаты</Typography>
            </Grid>
          </Grid>
          <form name="profileForm" onSubmit={handleSubmit}>
            <Grid
              className={classes.cardsContainer}
              container
              alignItems="center"
              justifyContent="center"
              spacing={4}
            >
              <Grid item sm={12} md={6}>
                <Paper elevation={10}>
                  <Box padding={4}>
                    <TextField
                      fullWidth
                      required
                      autoFocus
                      margin="normal"
                      name="cardNumber"
                      type="text"
                      label="Номер карты"
                      value={values.cardNumber
                        .replace(/\D/g, "")
                        .replace(/(\d{4})/g, "$1 ")
                        .trim()}
                      onChange={handleChange}
                      error={touched.cardNumber && Boolean(errors.cardNumber)}
                      helperText={touched.cardNumber && errors.cardNumber}
                      inputProps={{ maxLength: 19 }}
                    />
                    <DatePicker
                      fullWidth
                      required
                      clearable
                      name="expiryDate"
                      margin="normal"
                      disablePast
                      openTo="year"
                      format="MM/yy"
                      views={["year", "month"]}
                      label="срок действия"
                      value={values.expiryDate}
                      onChange={(value) => setFieldValue("expiryDate", value)}
                      error={touched.expiryDate && Boolean(errors.expiryDate)}
                      helperText={touched.expiryDate && errors.expiryDate}
                    />
                  </Box>
                </Paper>
              </Grid>
              <Grid item sm={12} md={6}>
                <Paper elevation={10}>
                  <Box padding={4}>
                    <TextField
                      fullWidth
                      required
                      margin="normal"
                      name="cardName"
                      type="text"
                      label="Имя владельца"
                      value={
                        (values.cardName = values.cardName
                          .replace(/[^a-zA-Z ]/g, "")
                          .toUpperCase())
                      }
                      onChange={handleChange}
                      error={touched.cardName && Boolean(errors.cardName)}
                      helperText={touched.cardName && errors.cardName}
                    />
                    <TextField
                      fullWidth
                      required
                      margin="normal"
                      name="cvc"
                      type="text"
                      label="cvc"
                      value={values.cvc.replace(/\D/g, "")}
                      onChange={handleChange}
                      error={touched.cvc && Boolean(errors.cvc)}
                      helperText={touched.cvc && errors.cvc}
                      inputProps={{ maxLength: 3 }}
                    />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            <Grid
              className={classes.buttonsContainer}
              container
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <Button variant="contained" color="primary" type="submit">
                  Сохранить
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Paper>
  );
};

export { ProfilePage };
