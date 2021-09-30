import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const authToken = useSelector((state) => state.auth.token);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        authToken ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export { PrivateRoute };
