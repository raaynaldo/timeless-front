import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import { Link, Router, Switch, Route } from "react-router-dom";

export default class Home extends Component {
  render() {
    return this.props.render();
  }
}
