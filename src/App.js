import React from "react";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./components/user/User";
import "./assets/scss/main.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/User">
          <User />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
