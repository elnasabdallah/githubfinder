import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { keycloak } = useKeycloak();

  const isAutherized = () => {
    if (keycloak && roles) {
      return roles.some((r) => {
        const realm = keycloak.hasRealmRole(r);
        const resource = keycloak.hasResourceRole(r);
        return realm || resource;
      });
    } else if (keycloak) {
      console.log(roles);
      return keycloak.authenticated;
    }
    return false;
    // if (keycloak) return keycloak.authenticated;
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        return isAutherized(roles) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
