import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import Login from "./Components/Login";

export default class Root extends Component {
  render() {
    //   This page is only for routings
    return (
      <React.Fragment>
        <Breakpoint large up>
            <Login/>
        </Breakpoint>
        <Breakpoint medium down>
         
        </Breakpoint>
      </React.Fragment>
    );
  }
}
