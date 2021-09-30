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
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { fetchSignUpRequest } from "../../redux/modules/auth";
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

const SignUpForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const signUpError = useSelector((state) => state.auth.singUpError);
  const { handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      email: "",
      name: "",
      surname: "",
      password: "",
    },
    validationSchema,
    onSubmit: ({ email, password, name, surname }) => {
      dispatch(fetchSignUpRequest({ email, password, name, surname }));
    },
  });
  return (
    <Paper>
      <form name="signUpForm" onSubmit={handleSubmit}>
        <Grid className={classes.formContainer} container spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h4" component="h2">
              Регистрация
            </Typography>
            <Typography>
              Уже зарегистрированы?{" "}
              <Link component={RouterLink} to="/login">
                Войти
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoFocus
              required
              margin="normal"
              type="email"
              id="email"
              name="email"
              label="Адрес электронной почты"
              value={values.email}
              onChange={handleChange}
              error={
                (touched.email && Boolean(errors.email)) || Boolean(signUpError)
              }
              helperText={(touched.email && errors.email) || signUpError}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              required
              margin="normal"
              id="name"
              name="name"
              label="Имя"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              required
              margin="normal"
              id="surname"
              name="surname"
              label="Фамилия"
              value={values.surname}
              onChange={handleChange}
              error={touched.surname && Boolean(errors.surname)}
              helperText={touched.surname && errors.surname}
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
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
          </Grid>
          <Grid className={classes.buttonsContainer} item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Зарегистрироваться
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export { SignUpForm };
