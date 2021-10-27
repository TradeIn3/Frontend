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
import { AUTH_ACCOUNT_SELL_PATH,AUTH_ACCOUNT_DONATE_PATH,AUTH_ACCOUNT_EXCHANGE_PATH,AUTH_ACCOUNT_ORDER_PATH,AUTH_ACCOUNT_WISHLIST_PATH } from "../../constants/routeConstants"
import {connect} from "react-redux"
import AccountDetails from "./AccountDetails";
import {ProfileBuy} from "../../api/pathConstants"
import {getUserDetails,userLoading} from "../../redux/profile/profileActions";
import PostLoader from '../Loaders/PostLoader';

class Account extends Component {
  async componentDidMount(){
    await this.props.userLoadingDispatch(true)
    await this.props.getUserDispatch(this.props.computedMatch.params.id);
  }
  render() {
    const {user,myDetails,loading} = this.props
    if(loading) return <PostLoader/>
    if(!user) return <div>User not found</div>
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
                  <h3>{user.first_name+ " "+user.last_name}</h3>
                  <h5>{user.username}</h5>
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
                <a href="/myorders">  <NavigateNextIcon /></a>
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
          <Route path={AUTH_ACCOUNT_SELL_PATH}>
           {(props)=> <AccountDetails title="My Products(Sell)" product="sell" {...props}/>}
          </Route>
           <Route path={AUTH_ACCOUNT_DONATE_PATH}>
             {(props)=>  <AccountDetails title="My Products(Donate)" product="donate" {...props}/>}
          </Route>
           <Route path={AUTH_ACCOUNT_EXCHANGE_PATH}>
             {(props)=>  <AccountDetails title="My Products(Exchange)" product="exchange" {...props}/>}
          </Route>
           <Route path={AUTH_ACCOUNT_ORDER_PATH}>
             {(props)=>  <AccountDetails title="My Orders" product="orders" {...props}/>}
          </Route>
           <Route path={AUTH_ACCOUNT_WISHLIST_PATH}>
              {(props)=> <AccountDetails title="My Wishlist" product="wishlist" {...props}/>}
          </Route>

        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    myDetails: state.myDetails.myDetails,
    loading:state.profile.userLoading,
    user:ownProps.computedMatch.params.id ? state.profile.users[ownProps.computedMatch.params.id]:null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoadingDispatch:(value)=>dispatch(userLoading(value)),
    getUserDispatch:(id)=>dispatch(getUserDetails(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Account));
