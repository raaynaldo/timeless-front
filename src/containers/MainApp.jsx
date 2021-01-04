import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import Toolbar from "../components/Navigation/Toolbar";
import Timeline from "../timeline/Timeline";
import PostForm from "../components/PostForm"
import { Switch, Route, useRouteMatch } from "react-router-dom";

const MainApp = (props) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  let { path, url } = useRouteMatch();
  console.log("mainapp: " + path);
  return (
    <div style={{ marginTop: "64px" }}>
      <Toolbar user={user ? user : {}} />
      <Route exact path={`${path}profile`}>
        <PostForm />
        <Timeline user={user ? user : {}} />
      </Route>
      {/* <Route exact path="/home" component={SignUp} /> */}
      {/* <Timeline user={user ? user : {}} /> */}
      <h1>FullName : {user?.full_name}</h1>
      <h1>Username : {user?.username}</h1>
    </div>
  );
};

export default MainApp;
