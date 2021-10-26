import React from "react";
import { Grid } from "@material-ui/core";
import NoPost from "../../assets/NoPost.svg";

export default function EmptyData() {
  return (
    <Grid container className="nopost">
      <div className="nopost__image">
        <img src={NoPost} />
      </div>
      <div className="nopost__con">
        <h3>No Product Available</h3>
      </div>
    </Grid>
  );
}
