import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import { getCategories } from "../../utils/Utils";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import NoProfileImage from "../../assets/NoProfile.svg";
import CloseIcon from "@material-ui/icons/Close";
import { Button, Grid } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditIcon from "@material-ui/icons/Edit";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import LoopIcon from "@material-ui/icons/Loop";
import { AUTH_ACCOUNT_BUY_PATH } from "../../constants/routeConstants"
import {connect} from "react-redux"

class Account extends Component {
  render() {

    return (
      <>
        <Breakpoint large up></Breakpoint>

        <Breakpoint medium down>
          <div className="authhome">
            <div className="authhome__upper">
              <div className="authhome__upper__icon1">
                <ArrowBackIcon style={{ color: "white", marginTop: "7px" }} />
                <h3>My Account</h3>
              </div>
              <div className="authhome__upper__profile">
                <div className="authhome__upper__profile__pic">
                  <div>
                    {" "}
                    <img src={NoProfileImage} />
                  </div>
                </div>
                <div className="authhome__upper__profile__headings">
                  <h3>{this.props.myDetails.first_name+ " "+this.props.myDetails.last_name}</h3>
                  <h5>{this.props.myDetails.username}</h5>
                </div>
              </div>
              <div className="authhome__upper__icon2">
                <EditIcon />
              </div>
            </div>
            <Link to={`/account/${this.props.computedMatch.params.id}/orders`} className="authhome__menu">
              <div className="authhome__menu__icons">
                <ShoppingCartIcon />
                Order
                <div className="authhome__menu__icons__nxt">
                  {" "}
                  <NavigateNextIcon />
                </div>
              </div>
              <div className="authhome__menu__in">Check your order status</div>
            </Link>
            <Link to={`/account/${this.props.computedMatch.params.id}/wishlist`} className="authhome__menu">
              <div className="authhome__menu__icons">
                <FavoriteIcon />
                Wishlist
                <div className="authhome__menu__icons__nxt">
                  {" "}
                  <NavigateNextIcon />
                </div>
              </div>
              <div className="authhome__menu__in">Your most loved product</div>
            </Link>
            <Link to={`/account/${this.props.computedMatch.params.id}/sell`} className="authhome__menu">
              <div className="authhome__menu__icons">
                <LocalOfferIcon />
                Sell
                <div className="authhome__menu__icons__nxt">
                  {" "}
                  <NavigateNextIcon />
                </div>
              </div>
              <div className="authhome__menu__in">Your Product</div>
            </Link>
            <Link to={`/account/${this.props.computedMatch.params.id}/donate`} className="authhome__menu">
              <div className="authhome__menu__icons">
                <OfflineBoltIcon />
                Donate
                <div className="authhome__menu__icons__nxt">
                  {" "}
                  <NavigateNextIcon />
                </div>
              </div>
              <div className="authhome__menu__in">Your Product</div>
            </Link>
            <Link to={`/account/${this.props.computedMatch.params.id}/exchange`} className="authhome__menu">
              <div className="authhome__menu__icons">
                <LoopIcon />
                Exchange
                <div className="authhome__menu__icons__nxt">
                  {" "}
                  <NavigateNextIcon />
                </div>
              </div>
              <div className="authhome__menu__in">Your Product</div>
            </Link>
            <div className="authhome__btn">
              <Button
                className="authhome__btn__logout"
                style={{ marginTop: "1.2rem" }}
              >
                Log Out
              </Button>
            </div>
          </div>
        </Breakpoint>
        <Switch>
          {/* <Route path={AUTH_ACCOUNT_BUY_PATH}>
            <AccountDetails/>
          </Route> */}
        </Switch>
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
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);

