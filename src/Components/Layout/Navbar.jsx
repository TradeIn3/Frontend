import React, { Component } from "react";
import WebsiteLogo from "../../assets/WebsiteLogo.svg";
import DummyPic from "../../assets/DummyPic.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LoopIcon from '@material-ui/icons/Loop';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Breakpoint } from "react-socks";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { removeTokenRequest } from "../../redux/token/tokenActions";
class Navbar extends Component {
  state = {
    style: "none",
    show:"none",
  };

  logout = async() =>{
    await this.props.removeTokenDispatch();
  }
  render() {
    return (
      <>
      <Breakpoint large up>
      <div className="nav">
        <div className="nav__logo">
          <a href="/">
            <img src={WebsiteLogo} />
            <h1>TradeIn</h1>
          </a>
          
        </div>
        <ul>
          <li className="nav__tab">
            <Link to="/home">HOME</Link>
          </li>
          <li className="nav__tab">
            <Link to="/buy">BUY</Link>
          </li>
          <li className="nav__tab">
            <Link to="/donate">DONATION</Link>
          </li>
          <li className="nav__tab">
            <Link to="/exchange">EXCHANGE</Link>
          </li>

          <li className="nav__tab1">
            <a href="#"  onMouseEnter={() => this.setState({ style: "block" })} onMouseLeave={() => this.setState({ style: "none" }) }>
              ADD POST <ExpandMoreIcon className="nav__expand"/>{" "}
            </a>{" "}
          
            <ul className="nav__dropdown" style={{ display: this.state.style }}>
              <ArrowDropUpIcon className="nav__dropdown__up"/>
              <li className="nav__dropdown__list">
                <a href="#"><LocalOfferIcon/>Sell</a>
              </li>
              <li className="nav__dropdown__list">
                <a href="#"><OfflineBoltIcon/>Donate</a>
              </li>
              <li className="nav__dropdown__list">
                <a href="#"><LoopIcon/>Exchange</a>
              </li>
            </ul>
          </li>

            <a href="#" onMouseEnter={() => this.setState({ show: "block" })} onMouseLeave={() => this.setState({ show: "none" }) }>
              <img src={DummyPic} className="nav__profile" />
              <ul className="nav__dropdownprofile" style={{ display: this.state.show }}>
              <ArrowDropUpIcon className="nav__dropdownprofile__up"/>
              <div className="nav__dropdownprofile__head">
              <img src={DummyPic} className="nav__profile" />
                <div>
                <h5>Rohit Jain</h5>
                <h6>@rohit0301</h6>
                </div>
              </div>
              <li className="nav__dropdownprofile__list">
                <Link href="#"><AccountCircleOutlinedIcon/>Profile</Link>
              </li>
              <li className="nav__dropdownprofile__list">
                <Link href="#"><BookmarkBorderOutlinedIcon/>Saved</Link>
              </li>
              <li className="nav__dropdownprofile__list" style={{border:"none"}}>
                <Link onClick={this.logout} to="/"><ExitToAppIcon/>Logout</Link>
              </li>
            </ul>
            </a>
        
        </ul>
      </div>
      </Breakpoint>
      <Breakpoint medium down>

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
    removeTokenDispatch: () => dispatch(removeTokenRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
