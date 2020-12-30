import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainApp from "./containers/MainApp";
import AuthState from "./context/auth/AuthState";
import PrivateRoute from "./PrivateRoute";
import WelcomePage from "./containers/WelcomePage";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";

function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={MainApp} />
          <WelcomePage>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </WelcomePage>
          {/* <Route exact path="/login" component={WelcomePage} /> */}
          {/* <Route exact path="/signup" component={WelcomePage} /> */}
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
