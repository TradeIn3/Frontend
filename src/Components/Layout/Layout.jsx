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
class Layout extends Component {
  async componentDidMount() {
    await this.props.myDetailsDispatch();
  }
  render() {
    if (!this.props.myDetails) return <MainLoader />;
    return (
      <>
        <Breakpoint large up>
          <Navbar />
          {this.props.children}
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
