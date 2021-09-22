import React, { Component } from "react";
import WebsiteLogo from "../../assets/WebsiteLogo.svg";
import DummyPic from "../../assets/DummyPic.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class Navbar extends Component {
  state = {
    style: "none",
  };
  render() {
    return (
      <div className="nav">
        <div className="nav__logo">
          <a href="/">
            <img src={WebsiteLogo} />
            <h1>TradeIn</h1>
          </a>
          
        </div>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="#">BUY</a>
          </li>
          <li>
            <a href="#">DONATION</a>
          </li>
          <li>
            <a href="#">EXCHANGE</a>
          </li>

          <li>
            <a href="#" onMouseEnter={() => this.setState({ style: "block" })} onMouseLeave={() => this.setState({ style: "none" })}>
              ADD
            </a>{" "}
            <ExpandMoreIcon />{" "}
            <ul style={{ display: this.state.style }}>
              <li className="list">
                <a href="#">SELLING POST</a>
              </li>
              <li>
                <a href="#">DONATION POST</a>
              </li>
              <li>
                <a href="#">EXCHANGE POST</a>
              </li>
            </ul>
          </li>

          <li className="list">
            <a href="#">
              <img src={DummyPic} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
