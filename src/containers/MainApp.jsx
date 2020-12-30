import React, { useContext, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
// import axios from "axios";
import Toolbar from "../components/Navigation/Toolbar";

const MainApp = (props) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <div>
      <Toolbar user={user ? user : {}} />
      <h1>FullName : {user?.full_name}</h1>
      <h1>Username : {user?.username}</h1>
    </div>
  );
};

export default MainApp;
