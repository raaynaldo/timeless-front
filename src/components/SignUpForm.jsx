import React from "react";
import Copyright from "./Copyright";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import TimelineIcon from "@material-ui/icons/Timeline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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

const SignUpForm = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <TimelineIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              variant="outlined"
              required
              fullWidth
              autoFocus
              onChange={props.changeState}
              id="first_name"
              label="First Name"
              name="first_name"
              error={!!props.errors.first_name}
              helperText={
                !!props.errors.first_name
                  ? props.errors.first_name.join(", ")
                  : ""
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              autoComplete="lname"
              onChange={props.changeState}
              id="last_name"
              label="Last Name"
              name="last_name"
              error={!!props.errors.last_name}
              helperText={
                !!props.errors.last_name
                  ? props.errors.last_name.join(", ")
                  : ""
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
              onChange={props.changeState}
              name="birthday"
              error={!!props.errors.birthday}
              helperText={
                !!props.errors.birthday ? props.errors.birthday.join(", ") : ""
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
              onChange={props.changeState}
              id="email"
              label="Email"
              type="email"
              name="email"
              error={!!props.errors.email}
              helperText={
                !!props.errors.email ? props.errors.email.join(", ") : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              onChange={(e) => props.changeState(e)}
              id="username"
              label="Username"
              name="username"
              type="text"
              error={!!props.errors.username}
              helperText={
                !!props.errors.username ? props.errors.username.join(", ") : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              autoComplete="current-password"
              onChange={(e) => props.changeState(e)}
              id="password"
              label="Password"
              type="password"
              name="password"
              error={!!props.errors.password}
              helperText={
                !!props.errors.password ? props.errors.password.join(", ") : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              autoComplete="current-password"
              onChange={props.changeState}
              id="password_confirmation"
              label="Password Confirmation"
              type="password"
              name="password_confirmation"
              error={!!props.errors.password_confirmation}
              helperText={
                !!props.errors.password_confirmation
                  ? props.errors.password_confirmation.join(", ")
                  : ""
              }
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={(e) => props.signUp(e)}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
        <Copyright />
      </form>
    </div>
  );
};

export default SignUpForm;