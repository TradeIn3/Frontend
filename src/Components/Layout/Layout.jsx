import React, { Component } from "react";
import WebsiteLogo from "../../assets/WebsiteLogo.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import { getMyDetails } from "../../redux/mydetails/myDetailsActions";
import { connect } from "react-redux";
import MainLoader from "../Loaders/MainLoader";
import { Breakpoint } from "react-socks";
import { Grid } from "@material-ui/core";
import Sidebar from "./Sidebar";
import { withRouter } from "react-router";
class Layout extends Component {
  async componentDidMount() {
    await this.props.myDetailsDispatch();
    if(this.props.isLoggedIn){
      this.props.history.push(this.props.location.pathname)
    }
  }

  render() {
    const {isLoggedIn} = this.props;
    if (isLoggedIn && !this.props.myDetails) return <MainLoader />;
    return (
      <>
        <Breakpoint large up>
          <Grid container>
            <Grid xs={12}>
              <Navbar {...this.props}/>
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
    isLoggedIn: state.token.isLoggedIn,
    myDetails: state.myDetails.myDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    myDetailsDispatch: () => dispatch(getMyDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));
