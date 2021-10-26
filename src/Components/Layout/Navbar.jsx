import React, { Component } from "react";
import WebsiteLogo from "../../assets/WebsiteLogo.svg";
import NoProfileImage from "../../assets/NoProfile.svg";
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
    const {isLoggedIn} = this.props;
    console.log(isLoggedIn)
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
          {!isLoggedIn && <li className="nav__login">
            <Link to="?login=true">Login</Link>
          </li>}
          {isLoggedIn &&
          <li className="nav__tab1">
            <a href="#"  onMouseEnter={() => this.setState({ style: "block" })} onMouseLeave={() => this.setState({ style: "none" }) }>
              ADD POST <ExpandMoreIcon className="nav__expand"/>{" "}
            </a>{" "}
          
            <ul className="nav__dropdown" style={{ display: this.state.style }}>
              <ArrowDropUpIcon className="nav__dropdown__up"/>
              <li className="nav__dropdown__list">
                <a href="/sellproduct"><LocalOfferIcon/>Sell</a>
              </li>
              <li className="nav__dropdown__list">
                <a href="/donateproduct"><OfflineBoltIcon/>Donate</a>
              </li>
              <li className="nav__dropdown__list">
                <a href="/exchangeproduct"><LoopIcon/>Exchange</a>
              </li>
            </ul>
          </li>}



          {isLoggedIn &&  <a href="#" onMouseEnter={() => this.setState({ show: "block" })} onMouseLeave={() => this.setState({ show: "none" }) }>
              <img src={NoProfileImage} className="nav__profile" />
              <ul className="nav__dropdownprofile" style={{ display: this.state.show }}>
              <ArrowDropUpIcon className="nav__dropdownprofile__up"/>
              <div className="nav__dropdownprofile__head">
              <img src={NoProfileImage} className="nav__profile" />
                <div>
                <h5>Rohit Jain</h5>
                <h6>@rohit0301</h6>
                </div>
              </div>
              <li className="nav__dropdownprofile__list">
                {/* <Link href="/account"><AccountCircleOutlinedIcon/>Profile</Link> */}
                <a href="/account"><AccountCircleOutlinedIcon/>Profile</a>
              </li>
              <li className="nav__dropdownprofile__list">
                <Link href="#"><BookmarkBorderOutlinedIcon/>Saved</Link>
              </li>
              <li className="nav__dropdownprofile__list" style={{border:"none"}}>
                <Link onClick={this.logout} to={this.props.location?this.props.location.pathname:"/"}><ExitToAppIcon/>Logout</Link>
              </li>
            </ul>
            </a>}
        
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
    isLoggedIn: state.token.isLoggedIn,
    myDetails: state.myDetails.myDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTokenDispatch: () => dispatch(removeTokenRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
