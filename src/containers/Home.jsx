import React, { useState, useEffect } from "react";
import WelcomePage from "./WelcomePage";
import MainApp from "./MainApp";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "../axios";
import Login from "./Login";
import SignUp from "./SignUp";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Switch>
      {/* {token == null ? <Route path="/login" component={WelcomePage} /> : null}
      {token == null ? <Route path="/signup" component={WelcomePage} /> : null} */}
      <Route path="/login" render={() => <WelcomePage setAuth={setAuth} />} />
      <Route path="/signup" render={() => <WelcomePage setAuth={setAuth} />} />
      {redirect}
      <Route path="/" exact render={() => <MainApp user={user} />} />
    </Switch>
  );
};

export default Home;
