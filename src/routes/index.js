import { useKeycloak } from "@react-keycloak/web";

import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Menu from "../components/Menu";
// import HomePage from "../pages/HomePage";
// import { PrivateRoute } from "../utilities/PrivateRoute";
// import ProtectedPage from "../pages/ProtectedPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Home from "../components/pages/Home";
import NotFound from "../components/pages/NotFound";

import Alert from "../components/layout/Alert";
import About from "../components/pages/About";
import User from "../components/users/User";
import PrivateRoute from "./PrivateRoute";
export const AppRouter = () => {
  const { initialized } = useKeycloak();
  if (!initialized) {
    return <h3>Loading nas... !!!</h3>;
  }
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute
                // roles={["RealmAdimn"]}
                exact
                path="/about"
                component={About}
              />
              <Route exact path="/user/:login" component={User} />
              <NotFound />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};
