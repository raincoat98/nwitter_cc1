import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <React.Fragment>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route exact path="/">
              <Auth></Auth>
            </Route>
          </React.Fragment>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
