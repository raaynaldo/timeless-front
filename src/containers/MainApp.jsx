import React, { Component } from "react";
import Toolbar from "../components/Navigation/Toolbar";
import axios from "../axios";

class MainApp extends Component {
  // state = {
  //   user: {},
  // };

  // componentDidMount() {
  //   axios
  //     .get("/profile")
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error.response));
  // }

  render() {
    return (
      <div>
        <Toolbar user={this.props.user} />
        <h1>FullName : {this.props.user.full_name}</h1>
        <h1>Username : {this.props.user.username}</h1>
      </div>
    );
  }
}

export default MainApp;
