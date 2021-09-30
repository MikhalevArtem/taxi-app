import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  PrivateRoute,
  Map,
  SignUpPage,
  ProfilePage,
  LoginPage,
  ErrorPage,
} from "..";
import { ConnectedRouter } from "connected-react-router";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { CircularProgress, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import { history } from "../../history";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#ffff",
  },
}));

const localeMap = {
  ru: ruLocale,
};

const RootRouter = () => {
  const authLoading = useSelector((state) => state.auth.isLoading);
  const addressLoading = useSelector((state) => state.addresses.isLoading);
  const cardLoading = useSelector((state) => state.card.isLoading);
  const wayLoading = useSelector((state) => state.way.isLoading);
  const classes = useStyles();
  const locale = "ru";
  return (
    <div>
      <ErrorPage>
        <MuiPickersUtilsProvider
          utils={DateFnsUtils}
          locale={localeMap[locale]}
        >
          <ConnectedRouter history={history}>
            <div className="app">
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <PrivateRoute
                  path="/profile"
                  to="login"
                  component={ProfilePage}
                />
                <PrivateRoute path="/map" to="login" component={Map} />
                <Redirect from="/" to="/map" />
              </Switch>
            </div>
          </ConnectedRouter>
        </MuiPickersUtilsProvider>
        <Backdrop
          className={classes.backdrop}
          open={authLoading || addressLoading || cardLoading || wayLoading}
        >
          <CircularProgress />
        </Backdrop>
      </ErrorPage>
    </div>
  );
};

export { RootRouter };
