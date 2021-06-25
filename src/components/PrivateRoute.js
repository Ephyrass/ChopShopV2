import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./Context/AuthProvider";

function PrivateRoute({ component: Component, ...rest }) {
  const { auth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        auth ? <Component {...routeProps} /> : <Redirect to='/login' />
      }
    />
  );
}

export default PrivateRoute;
