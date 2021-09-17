import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Button,
  DialogContentText,
  FormControl,
  DialogTitle,
} from "@material-ui/core";
import LoginImage from "../assets/LoginImage.svg";
import WebsiteLogo from "../assets/WebsiteLogo.svg";
import CloseIcon from '@material-ui/icons/Close';

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Breakpoint large up>
          <Dialog
            open={true}
            aria-labelledby="form-dialog-title"
            fullWidth
            maxWidth="lg"
          >
           
            <DialogTitle id="form-dialog-title"></DialogTitle>
            <DialogContent style={{ overflow: "hidden", height: "30rem" }}>
              <div className="login">
                <div className="login__left">
                  <div className="login__left__logo">
                    <img src={WebsiteLogo} />
                    <h1>TradeIn</h1>
                  </div>
                  <p>A better place to buy and sell products</p>
                  <h2>Welcome back!</h2>
                  <div className="login__left__loginImage">
                    <img src={LoginImage}/>
                  </div>
                </div>
                <div className="login__right">
                  <h2>Login to your account</h2>
                  <FormControl className="login__right__myForm">
                    <div className="login__right__myForm__formData">
                      <label htmlFor="name">Username</label>
                      <br />
                      <TextField id="name" className="login__right__myForm__formData__username" name="userName" variant="outlined" ></TextField>
                    </div>
                    <div className="login__right__myForm__formData">
                      <label htmlFor="pass">Password</label>
                      <br />
                      <TextField
                        type="password"
                        className="login__right__myForm__formData__username"
                        variant="outlined" 
                        name="password"
                      ></TextField>
                    </div>

                    <div className="login__right__myForm__pass">
                      Forgot Password?
                    </div>
                    <Button type="submit">Login</Button>
                    <div className="login__right__myForm__signup">
                      New to TradeIn?&nbsp;
                      <a href="#">Create Account</a>
                    </div>
                  </FormControl>
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
