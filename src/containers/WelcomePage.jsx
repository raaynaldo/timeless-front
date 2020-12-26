import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TimelineIcon from "@material-ui/icons/Timeline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/brycemooore">
        Bryce
      </Link>
      {" & "}
      <Link color="inherit" href="https://github.com/raaynaldo">
        Raynaldo
      </Link>{" "}
      {2020}
      {"."}
    </Typography>
  );
}

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const WelcomePage = (props) => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#fb5454",
  };

  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <TimelineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoComplete="username"
              autoFocus
              onChange={(e) => props.changeState(e)}
              id="username"
              label="Username"
              name="username"
              error={!!props.errors.username}
              helperText={
                !!props.errors.username ? props.errors.username.join(", ") : ""
              }
            />
            <TextField
              variant="outlined"
              margin="normal"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => props.login(e)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      {/* <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <TimelineIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form>
          <TextField
            onChange={(e) => props.changeState(e)}
            id="username"
            label="Username"
            name="username"
            error={!!props.errors.username}
            helperText={
              !!props.errors.username ? props.errors.username.join(", ") : ""
            }
            fullWidth
            required
          />
          <br />
          <TextField
            onChange={(e) => props.changeState(e)}
            id="password"
            label="Password"
            type="password"
            name="password"
            error={!!props.errors.password}
            helperText={
              !!props.errors.password ? props.errors.password.join(", ") : ""
            }
            fullWidth
            required
          />
          <br />
          <Button
            onClick={(e) => props.login(e)}
            variant="contained"
            color="primary"
            fullWidth
          >
            Login
          </Button>
        </form>
      </Paper> */}
    </Grid>
  );
};

export default WelcomePage;
