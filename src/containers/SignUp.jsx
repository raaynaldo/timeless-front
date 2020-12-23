import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";

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
    let newState = {}
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  signUp = async (e) => {
    const url = "http://127.0.0.1:3001/users";
    let requestObject = {};

    requestObject.method = "POST";

    requestObject.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    requestObject.body = JSON.stringify({
      user: this.state,
    });

    let res = await fetch(url, requestObject);
    if (res.ok) {
      let data = await res.json();
      localStorage.setItem("token", data.jwt);
    } else {
        let data = await res.json();
        this.setState({
        errors: data.errors
      })
    }
  };

  render() {
    return (
      <div>
        <SignUpForm signUp={this.signUp} changeState={this.changeState} errors={this.state.errors}/>
      </div>
    );
  }
}
