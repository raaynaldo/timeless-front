import React, { useContext, useEffect, useState } from "react";
import { Link as LinkRoute } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import Copyright from "../components/Copyright";

import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import TimelineIcon from "@material-ui/icons/Timeline";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const { login, validation, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    clearErrors();
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    login({ user });
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#fb5454",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <TimelineIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Log In
      </Typography>
      <form className={classes.form} noValidate onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              autoComplete="username"
              autoFocus
              onChange={onChange}
              id="username"
              label="Username"
              name="username"
              error={!!validation.username}
              helperText={
                !!validation.username ? validation.username.join(", ") : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              autoComplete="current-password"
              onChange={onChange}
              id="password"
              label="Password"
              type="password"
              name="password"
              error={!!validation.password}
              helperText={
                !!validation.password ? validation.password.join(", ") : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Log In
        </Button>
        <Grid container justify="flex-end">
          {/* <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid> */}
          <Grid item>
            <LinkRoute to="/auth/signup">
              {/* <Link variant="body2"> */}
              {"Don't have an account? Sign Up"}
              {/* </Link> */}
            </LinkRoute>
          </Grid>
        </Grid>
        <Copyright />
      </form>
    </div>
  );
};

export default Login;
