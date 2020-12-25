import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function LoginForm(props) {
  return (
    <Card>
      <CardContent>
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
          />
          <br />
          <Button
            onClick={(e) => props.login(e)}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
