import React, { useContext, useEffect, useState } from "react";
import { Link as LinkRoute } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import Copyright from "../components/Copyright";

import {
  Avatar,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";

import TimelineIcon from "@material-ui/icons/Timeline";

const SignUp = (props) => {
  const authContext = useContext(AuthContext);
  const { signup, validation, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    clearErrors();
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    birthday: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  });

  const {
    first_name,
    last_name,
    birthday,
    email,
    username,
    password,
    password_confirmation,
  } = user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    signup({ user });
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(1, 4),
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
        Sign Up
      </Typography>
      <form className={classes.form} noValidate onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              variant="outlined"
              required
              fullWidth
              autoFocus
              onChange={onChange}
              id="first_name"
              label="First Name"
              name="first_name"
              value={first_name}
              error={!!validation.first_name}
              helperText={
                !!validation.first_name ? validation.first_name.join(", ") : ""
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              autoComplete="lname"
              onChange={onChange}
              id="last_name"
              label="Last Name"
              name="last_name"
              value={last_name}
              error={!!validation.last_name}
              helperText={
                !!validation.last_name ? validation.last_name.join(", ") : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="date"
              label="Birthday"
              type="date"
              onChange={onChange}
              name="birthday"
              value={birthday}
              error={!!validation.birthday}
              helperText={
                !!validation.birthday ? validation.birthday.join(", ") : ""
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              onChange={onChange}
              id="email"
              label="Email"
              type="email"
              name="email"
              value={email}
              error={!!validation.email}
              helperText={!!validation.email ? validation.email.join(", ") : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              onChange={(e) => onChange(e)}
              id="username"
              label="Username"
              name="username"
              type="text"
              value={username}
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
              onChange={(e) => onChange(e)}
              id="password"
              label="Password"
              type="password"
              name="password"
              value={password}
              error={!!validation.password}
              helperText={
                !!validation.password ? validation.password.join(", ") : ""
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
              id="password_confirmation"
              label="Password Confirmation"
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              error={!!validation.password_confirmation}
              helperText={
                !!validation.password_confirmation
                  ? validation.password_confirmation.join(", ")
                  : ""
              }
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
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <LinkRoute to="/auth/login">
              {/* <Link variant="body2"> */}
              Already have an account? Sign in
              {/* </Link> */}
            </LinkRoute>
          </Grid>
        </Grid>
        <Copyright />
      </form>
    </div>
  );
};

export default SignUp;
