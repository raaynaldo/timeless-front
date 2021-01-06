import { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainApp from "./containers/MainApp";
import PrivateRoute from "./PrivateRoute";
import WelcomePage from "./containers/WelcomePage";
import AuthContext from "./context/auth/authContext";
import TimelineState from "./context/timeline/TimelineState";
import {ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

function App() {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/auth" component={WelcomePage} />
          <PrivateRoute path="/" component={MainApp} />
          {/* <WelcomePage>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </WelcomePage> */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
