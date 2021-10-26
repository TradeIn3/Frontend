import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import { Link } from "react-router-dom";
import { Button, Divider } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@material-ui/core";

export default class AccountDetails extends Component {
  render() {
    return (
      <>
        <Breakpoint large up></Breakpoint>

        <Breakpoint medium down>
          <Dialog
            open={true}
            // onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth
            fullScreen
            maxWidth="lg"
          >
            <DialogTitle className="ordertitle">
              <ArrowBackIcon />
              Orders
            </DialogTitle>
            <Divider />
            <DialogContent></DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </Breakpoint>
      </>
    );
  }
}
