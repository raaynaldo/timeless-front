import React, { useState, useEffect } from "react";
import WelcomePage from "./WelcomePage";
import MainApp from "./MainApp";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.token);
  }, []);

  const loginSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <div>{loggedIn ? <MainApp /> : <WelcomePage loginSuccess={loginSuccess} />}</div>
  );
};

export default Home;
