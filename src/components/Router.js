import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "components/Navigation";
const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <React.Fragment>
            <Route exact path="/">
              <Home userObj={userObj}></Home>
            </Route>
            <Route exact path="/profile">
              <Profile></Profile>
            </Route>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route exact path="/">
              <Auth></Auth>
            </Route>
            <Redirect from="*" to="/" />
          </React.Fragment>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
