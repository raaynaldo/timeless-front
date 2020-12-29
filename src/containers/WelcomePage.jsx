import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./Login";
import SignUp from "./SignUp";
import { Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/images/timeless.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

const WelcomePage = (props) => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Switch>
          <Route
            path="/login"
            render={() => <Login setAuth={props.setAuth} />}
          />
          <Route path="/signup" component={SignUp} />
        </Switch>
        {/* {props.children} */}
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
