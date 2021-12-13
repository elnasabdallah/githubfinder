import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/layout/Navbar";
// import Home from "./components/pages/Home";
// import NotFound from "./components/pages/NotFound";

// import Alert from "./components/layout/Alert";
// import About from "./components/pages/About";
// import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import { AppRouter } from "./routes";
const App = () => {
  //  const [loading, setLoading] = useState(false); state with a hook

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <GithubState>
        <AlertState>
          <AppRouter />
        </AlertState>
      </GithubState>
    </ReactKeycloakProvider>
  );
};

export default App;
