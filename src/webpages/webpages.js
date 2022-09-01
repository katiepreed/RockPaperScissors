import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import User from "./user";

// the different webpages

const Webpages = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/user" component={User} />
    </Router>
  );
};

export default Webpages;
