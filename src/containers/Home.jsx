import React, { useState, useEffect } from "react";
import Login from "./Login";
import MainApp from "./MainApp";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(localStorage.token);
  }, []);

  return <div>{loggedIn ? <MainApp /> : <Login />}</div>;
};

export default Home;
