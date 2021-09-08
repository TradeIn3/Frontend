import React, { Component } from "react";
import { Breakpoint } from "react-socks";

export default class App extends Component {
  render() {
    //   This page is only for routings
    return (
      <React.Fragment>
        <Breakpoint large up>
          <h2 className="head">Hello world</h2>
        </Breakpoint>
        <Breakpoint medium down>
          <h2 className="head">Open in web view to use this website.</h2>
        </Breakpoint>
      </React.Fragment>
    );
  }
}
