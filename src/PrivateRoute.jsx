import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return !loading ? (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Redirect to="/auth/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  ) : null;
};

export default PrivateRoute;
