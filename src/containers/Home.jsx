import React, { useState, useEffect } from "react";
import WelcomePage from "./WelcomePage";
import MainApp from "./MainApp";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "../axios";
import Login from "./Login";
import SignUp from "./SignUp";

const Home = () => {
  const [user, setUser] = useState({});
  const [authData, setAuthData] = useState(localStorage.token);

  let redirect = null;
  if (!authData) {
    redirect = <Redirect to="/login" />;
  }

  const setAuth = (token) => {
    setAuthData(token);
    redirect = null;
  };

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
