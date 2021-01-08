import { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainApp from "./containers/MainApp";
import PrivateRoute from "./PrivateRoute";
import WelcomePage from "./containers/WelcomePage";
import AuthContext from "./context/auth/authContext";
import {ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#4cc9f0ff",
      },
      secondary: {
        main: "#f72585ff",
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
