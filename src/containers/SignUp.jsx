import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import axios from "axios";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      birthday: "",
      emil: "",
      username: "",
      password: "",
      password_confirmation: "",
      errors: {},
    };
  }

  changeState = (e) => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  signUp = () => {
    const data = { user: this.state };

    axios
      .post("/users", data)
      .then((response) => {
        console.log(response);
        const data = response.data;
        localStorage.setItem("token", data.jwt);
        this.props.history.replace("/");
      })
      .catch((error) => {
        const data = error.response.data;
        this.setState({ errors: data.errors });
      });
  };

  render() {
    return (
      <div>
        <SignUpForm
          signUp={this.signUp}
          changeState={this.changeState}
          errors={this.state.errors}
        />
      </div>
    );
  }
}
