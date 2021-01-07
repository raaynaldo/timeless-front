import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import TimelineState from "../context/timeline/TimelineState";
import Toolbar from "../components/Navigation/Toolbar";
import Timeline from "../timeline/Timeline";
import { Route, useRouteMatch } from "react-router-dom";
import MyAccount from "../components/MyAccount";


const MainApp = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  let { path } = useRouteMatch();

  return (
    <TimelineState>
      <div style={{ marginTop: "64px" }}>
        <Toolbar user={user ? user : {}} />
        <Route path={`${path}profile/:username`}>
          <Timeline />
        </Route>
        <Route exact path={`${path}profile`}>
          <Timeline />
        </Route>
        <Route exact path="/account">
          <MyAccount/>
        </Route>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        {/* <h1>FullName : {user?.full_name}</h1>
        <h1>Username : {user?.username}</h1> */}
      </div>
    </TimelineState>
  );
};

export default MainApp;
