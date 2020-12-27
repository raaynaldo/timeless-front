import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {},
    };
  }

  changeState = (e) => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  loginOnClick = () => {
    const data = {
      user: this.state,
    };

    axios
      .post("/login", data)
      .then((response) => {
        console.log(response);
        const data = response.data;
        localStorage.setItem("token", data.jwt);
        this.props.loginSuccess();
      })
      .catch((error) => {
        const data = error.response.data;
        this.setState({ errors: data.errors });
      });
  };

  render() {
    return (
      <div>
        <LoginForm
          login={this.loginOnClick}
          changeState={this.changeState}
          errors={this.state.errors}
          signUpClick={this.props.signUpClick}
        />
      </div>
    );
  }
}
