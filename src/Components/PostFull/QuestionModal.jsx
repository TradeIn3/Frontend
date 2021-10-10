import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from "@material-ui/core";

export default class QuestionModal extends Component {
  render() {
    return (
      <Dialog
        open={true}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle className="title">
          <h2>Ask your Question</h2>
        </DialogTitle>

        <DialogContent
          style={{ overflow: "hidden", height: "30rem", padding: "0" }}
        >
          <div className="qmodal">
            <div className="qmodal__inner">
              <h3>Write your question here...</h3>
            </div>
            <div className="qmodal__buttons">
              <div className="qmodal__buttons__cancel">
                <Button>Cancel</Button>
              </div>
              <div className="qmodal__buttons__save">
                <Button>Save</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}
