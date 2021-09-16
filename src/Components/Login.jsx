import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import LoginImage from "../assets/LoginImage.svg";
import WebsiteLogo from "../assets/WebsiteLogo.svg";

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Breakpoint large up>
          {/* This page is only for routings  */}
          <Dialog
            open={true}
            aria-labelledby="form-dialog-title"
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle id="form-dialog-title"></DialogTitle>
            <DialogContent style={{ overflow: "hidden" }}>
              <div className="login">
                <div className="login__left">
                  <div className="login__left__logo">
                    <img src={WebsiteLogo} />
                    <h1>TradeIn</h1>
                  </div>
                  <p>A better place to buy and sell products</p>
                  <h2>Welcome back!</h2>
                  <div className="login__left__loginImage">
                    <img src={LoginImage} />
                  </div>
                </div>
                <div className="login__right">
                  <h2>Login to your account</h2>
                  <form
                    className="login__right__myForm"
                    action="#"
                    method="post"
                  >
                    <div className="login__right__myForm__formData">
                      <label htmlFor="name">Username</label>
                      <br />
                      <TextField id="name" name="userName"></TextField>
                    </div>
                    <div className="login__right__myForm__formData">
                      <label htmlFor="pass">Password</label>
                      <br />
                      <TextField
                        type="password"
                        id="pass"
                        name="password"
                      ></TextField>
                    </div>

                    <div className="login__right__myForm__pass">
                      Forgot Password?
                    </div>
                    {/* <input type="submit" value="Login"></input> */}
                    <Button type="submit">Login</Button>
                    <div className="login__right__myForm__signup">
                      New Here?&nbsp;
                      <a href="#">Register</a>
                    </div>
                  </form>
                </div>
              </div>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </Breakpoint>
        <Breakpoint medium down>
          this is mobile size
        </Breakpoint>
      </React.Fragment>
    );
  }
}
