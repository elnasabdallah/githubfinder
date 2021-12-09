import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  //  const [loading, setLoading] = useState(false); state with a hook

  return (
    <GithubState>
      <AlertState>
        <HashRouter>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <NotFound />
              </Switch>
            </div>
          </div>
        </HashRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
