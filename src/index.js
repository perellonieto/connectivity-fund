import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import ApplicationPage from "views/ApplicationPage/ApplicationPage.js";
import AboutPage from "views/AboutPage/AboutPage.js";
import BoardPage from "views/BoardPage/BoardPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/apply" component={ApplicationPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/board" component={BoardPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
