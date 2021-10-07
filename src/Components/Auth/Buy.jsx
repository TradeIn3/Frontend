import React, { Component } from "react";
import Navbar from "../Layout/Navbar";
import { Button, FormControl, Grid, InputLabel, Select } from "@material-ui/core";
import PostCard from "../Card/PostCard";
import { retrievePost } from "../../redux/post/postActions";
import { connect } from "react-redux";
import CardSkeleton from "../Skeleton/CardSkeleton";
class Buy extends Component {
  async componentDidMount() {
    await this.props.retrievePostDispatch(null, null, false);
  }
  render() {
    return (
      <div>
        <div className="buy">
          <div className="buy__head">
            Search results <span>(990+ results)</span>
          </div>
          <div className="buy__filter">
           <div className="buy__filter__chips"></div>
            <FormControl className="buy__filter__form" variant="outlined" >
              <Select
                native
                className="buy__filter__select"
               //  value={state.age}
               //  onChange={handleChange}
               inputProps={{
                    name: 'sort',
                    id: 'outlined-age-native-simple',
                  }}
              >
                <option value={"best"}>Sort by best match</option>
                <option value={"new"}>Sort by newest first</option>
                <option value={"low"}>Sort by lowest price first</option>
                <option value={"high"}>Sort by hightest price first</option>
               
              </Select>
            </FormControl>
          </div>
        </div>
        <Grid container spacing={3} style={{ width: "100%", margin: "0" }}>
          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xs={12}
            style={{ marginBottom: "1rem" }}
          >
            <CardSkeleton />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <CardSkeleton />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <CardSkeleton />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <CardSkeleton />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <CardSkeleton />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <CardSkeleton />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <CardSkeleton />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <CardSkeleton />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <CardSkeleton />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <CardSkeleton />
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    //   myDetails: state.myDetails.myDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrievePostDispatch: (category, sortby, donation) =>
      dispatch(retrievePost(category, sortby, donation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
