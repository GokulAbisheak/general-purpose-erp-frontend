import React from "react";
import { Route, useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, condition }) => {
  const navigate = useNavigate();
  return (
    <Route
      render={(props) =>
        condition ? <Component {...props} /> : navigate("/login")
      }
    />
  );
};

export default PrivateRoute;
