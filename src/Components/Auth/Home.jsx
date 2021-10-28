import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import { getCategories } from "../../utils/Utils";
import NoProfileImage from "../../assets/NoProfile.svg";
import { Button, Grid, TextField } from "@material-ui/core";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";

export default class Home extends Component {

  render() {
    const categories = getCategories();
    return (
      <>
        <Breakpoint large up>
          <div>
            {Object.keys(categories).map((item) => {
              return <div>{item}</div>;
            })}
          </div>
        </Breakpoint>

        <Breakpoint medium down>

        </Breakpoint>
      </>
      
    );
  }
}
