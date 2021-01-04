import { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainApp from "./containers/MainApp";
import PrivateRoute from "./PrivateRoute";
import WelcomePage from "./containers/WelcomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AuthContext from "./context/auth/authContext";

function App() {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // console.log("Woy");
  }, []);

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={MainApp} />
        <Route path="/auth" component={WelcomePage} />
        {/* <WelcomePage>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </WelcomePage> */}
      </Switch>
    </Router>
  );
}

export default App;
