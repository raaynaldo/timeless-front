import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

export default function SignUpForm(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <form className={classes.root}>
          <TextField
            onChange={props.changeState}
            id="first_name"
            label="First Name"
            name="first_name"
            error={!!props.errors.first_name}
            helperText={
              !!props.errors.first_name ? props.errors.first_name.join(", ") : ""
            }
          />
          <TextField
            onChange={props.changeState}
            id="last_name"
            label="Last Name"
            name="last_name"
            error={!!props.errors.last_name}
            helperText={
              !!props.errors.last_name ? props.errors.last_name.join(", ") : ""
            }
          />
          <br />
          <TextField
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
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="birthday"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={props.birthdate}
                onChange={props.changeState}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                name="birthday"
              />
            </MuiPickersUtilsProvider> */}
          <br />
          <TextField
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
          <br />
          <TextField
            onChange={props.changeState}
            id="username"
            label="Username"
            name="username"
            error={!!props.errors.username}
            helperText={
              !!props.errors.username ? props.errors.username.join(", ") : ""
            }
          />
          <br />
          <TextField
            onChange={props.changeState}
            id="password"
            label="Password"
            type="password"
            name="password"
            error={!!props.errors.password}
            helperText={
              !!props.errors.password ? props.errors.password.join(", ") : ""
            }
          />
          <TextField
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
          <br />
          <Button onClick={props.signUp} variant="contained" color="primary">
            SignUp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
