import React, { useState, useEffect } from "react";
import WelcomePage from "./WelcomePage";
import MainApp from "./MainApp";
import axios from "../axios";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/profile")
      .then((response) => {
        console.log(response);
        setUser(response.data.user);
        setLoggedIn(true);
      })
      .catch((error) => {
        // console.log(error.response);
        setLoggedIn(false);
      });
  }, []);

  const loginSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <MainApp user={user} />
      ) : (
        <WelcomePage loginSuccess={loginSuccess} />
      )}
    </div>
  );
};

export default Home;
