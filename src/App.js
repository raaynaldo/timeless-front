import "./App.css";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";

const render = () => {
  return (
    <div>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
    </div>
  );
};

function App() {
  return (
    <div>
        <Switch location={true}>
          <Route exact path="/login" 
          component={withRouter(<Login />)}
          />
          <Route exact path="/signup" 
          component={withRouter(<SignUp />)}
          />
          <Route exact path="/" 
          component={withRouter(<Home />)}
          />
        </Switch>
      {/* <Toolbar />
      <SignUp />
      <Login /> */}
    </div>
  );
}

export default App;
