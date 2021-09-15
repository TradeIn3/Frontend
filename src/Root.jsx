import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import Login from "./Components/Login";

export default class Root extends Component {
  render() {
    //   This page is only for routings
    return (
      <React.Fragment>
        <Breakpoint large up>
          this is a web screen
        </Breakpoint>
        <Breakpoint medium down>
          this is mobile size
        </Breakpoint>
      </React.Fragment>
    );
  }
}
