import React, { Component } from "react";
import LoginForm from "../components/LoginForm";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }

  changeState = (e) => {
      let newState = {}
      newState[e.target.name] = e.target.value;
      this.setState(newState);
  }

  loginOnClick = async (e) => {
    const url = "http://127.0.0.1:3001/login";
    let requestObject = {}

    requestObject.method = "POST";

    requestObject.headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    requestObject.body = JSON.stringify({
        user: this.state
    });

    let res = await fetch(url, requestObject);
    // let data = await res.json();
    // localStorage.setItem('token', data.jwt);
    // console.log(data.user);

    if (res.ok) {
        let data = await res.json();
        localStorage.setItem("token", data.jwt);
        this.setState({errors: {}})
        //open the 
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
        <LoginForm
          login={this.loginOnClick}
          changeState={this.changeState}
          errors={this.state.errors}
        />
      </div>
    );
  }
}
