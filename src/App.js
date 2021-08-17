import React from "react";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./assets/scss/main.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
