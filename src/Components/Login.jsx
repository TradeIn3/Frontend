import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import TextField from '@material-ui/core/TextField';
import {Dialog, DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core';

import LoginImage from '../assets/LoginImage.svg';

export default class Login extends Component {
         render() {
    //   This page is only for routings
    return (
      <Dialog open={true} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <img src={LoginImage} />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    );
  }
}

