import React from "react";

const PrivateRoute = ({ component = component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component rest={rest} />;
        } else {
          <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
