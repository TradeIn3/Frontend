import React, { Component } from "react";
import WebsiteLogo from "../../assets/WebsiteLogo.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { Breakpoint } from "react-socks";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AddBoxIcon from "@material-ui/icons/AddBox";
import HomeIcon from "@material-ui/icons/Home";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import LoopIcon from "@material-ui/icons/Loop";
import { render } from "@testing-library/react";

export default class Navbar extends Component {
  state = {
    style: "none",
  };

  render() {
    return (
      <>
        <Breakpoint large up>
          <div className="btmbar"></div>
        </Breakpoint>

        <Breakpoint medium down>
          <div className="btmbar">
            <div className="btmbar__home">
              <HomeIcon />
            </div>
            <div className="btmbar__home">
              <LocalOfferIcon />
            </div>
            <div className="btmbar__home">
              <AddBoxIcon />
            </div>
            <div className="btmbar__home">
              <OfflineBoltIcon />
            </div>
            <div className="btmbar__home">
              <LoopIcon />
            </div>
          </div>
        </Breakpoint>
      </>
    );
  }
}
