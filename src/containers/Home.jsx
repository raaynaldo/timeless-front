import React, { useState, useEffect } from "react";
import Login from "./Login";
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
    <div>{loggedIn ? <MainApp /> : <Login loginSuccess={loginSuccess} />}</div>
  );
};

export default Home;
