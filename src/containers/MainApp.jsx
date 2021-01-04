import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import Toolbar from "../components/Navigation/Toolbar";
import Timeline from "../timeline/Timeline";

const MainApp = (props) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <div>
      <Toolbar user={user ? user : {}} />
      <Timeline user={user ? user : {}} />
      <h1>FullName : {user?.full_name}</h1>
      <h1>Username : {user?.username}</h1>
    </div>
  );
};

export default MainApp;
