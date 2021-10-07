import React, { Component } from "react";
import WebsiteLogo from "../../assets/WebsiteLogo.svg";
import DummyPic from "../../assets/DummyPic.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import { getMyDetails } from "../../redux/mydetails/myDetailsActions";
import { connect } from "react-redux";
import MainLoader from "../Loaders/MainLoader";
import { Breakpoint } from "react-socks";
import { Grid } from "@material-ui/core";
import Sidebar from "./Sidebar";
class Layout extends Component {
  async componentDidMount() {
    console.log("index");
    await this.props.myDetailsDispatch();
  }
  render() {
    if (!this.props.myDetails) return <MainLoader />;
    return (
      <>
        <Breakpoint large up>
          <Grid container>
            <Grid xs={12}>
              <Navbar />
            </Grid>
            <Grid item xs={12} style={{marginTop:"3rem"}}>
              {this.props.children}
            </Grid>
          </Grid>
        </Breakpoint>
        <Breakpoint medium down>
          <Navbar />
          {this.props.children}
          <BottomBar />
        </Breakpoint>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    myDetails: state.myDetails.myDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    myDetailsDispatch: () => dispatch(getMyDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
