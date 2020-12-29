import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Toolbar from "../components/Navigation/Toolbar";

const MainApp = () => {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    console.log("token", localStorage.token);
    axios
      .get("/profile", {
        headers: { Authorization: "Bearer " + localStorage.token },
      })
      .then((response) => {
        console.log(response);
        setUser(response.data.user);
      })
      .catch(() => {
        history.replace("/login");
      });
  }, []);

  // console.log("masuk main app", props);
  return (
    <div>
      <Toolbar user={user} />
      <h1>FullName : {user.full_name}</h1>
      <h1>Username : {user.username}</h1>
    </div>
  );
};

export default MainApp;
