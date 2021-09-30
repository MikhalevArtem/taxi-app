import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  Paper,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { fetchLoginRequest } from "../../redux/modules/auth";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  buttonsContainer: {
    textAlign: "right",
    marginTop: theme.spacing(1),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.auth.loginError);
  const { handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      email: "test@test.com",
      password: "123123",
    },
    validationSchema,
    onSubmit: ({ email, password }) => {
      dispatch(fetchLoginRequest({ email, password }));
    },
  });
  return (
    <Paper>
      <form name="loginFOrm" onSubmit={handleSubmit}>
        <Grid className={classes.formContainer} container spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h4" component="h2">
              Войти
            </Typography>
            <Typography>
              Новый пользователь?{" "}
              <Link component={RouterLink} to="/signup">
                Регистрация
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoFocus
              fullWidth
              required
              margin="normal"
              type="email"
              id="email"
              name="email"
              label="Адрес электронной почты"
              value={values.email}
              onChange={handleChange}
              error={
                (touched.email && Boolean(errors.email)) || Boolean(loginError)
              }
              helperText={(touched.email && errors.email) || loginError}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              margin="normal"
              type="password"
              id="password"
              name="password"
              label="Пароль"
              value={values.password}
              onChange={handleChange}
              error={
                (touched.password && Boolean(errors.password)) ||
                Boolean(loginError)
              }
              helperText={touched.password && errors.password}
            />
          </Grid>
          <Grid className={classes.buttonsContainer} item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Войти
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export { LoginForm };
