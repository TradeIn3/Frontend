import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import { Link, withRouter } from "react-router-dom";
import { Button, Divider } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
} from "@material-ui/core";
import {
  getUserBuy,
  getUserDonate,
  getUserExchange,
  loading,
  getUserOrders,
  getUserWishlist,
  getUserReserve,
} from "../../redux/profile/profileActions";
import { connect } from "react-redux";
import NoProfileImage from "../../assets/NoProfile.svg";
import PostCard from "../Card/PostCard";
import CardSkeleton from "../Skeleton/CardSkeleton";
import EmptyData from "../Skeleton/EmptyData";
import { ProfileImageUrl } from "../../api/pathConstants";

class AccountDetails extends Component {
  state = {
    product: "",
  };
  async componentDidMount() {
    await this.props.setLoading(true);
    await this.setState({ product: this.props.product });
    if (this.props.product === "sell") {
      await this.props.buyDispatch(this.props.match.params.id);
    }
    if (this.props.product === "donate") {
      await this.props.donateDispatch(this.props.match.params.id);
    }
    if (this.props.product === "exchange") {
      await this.props.exchangeDispatch(this.props.match.params.id);
    }
    if (this.props.product === "orders") {
      await this.props.ordersDispatch(this.props.match.params.id);
    }
    if (this.props.product === "wishlist") {
      await this.props.wishlistDispatch(this.props.match.params.id);
    }
    if (this.props.product === "reserves") {
      await this.props.reservesDispatch(this.props.match.params.id);
    }
  }

  async componentDidUpdate(props, state) {
    if (this.props.product != props.product) {
      await this.props.setLoading(true);
      await this.setState({ product: this.props.product });
      if (this.props.product === "sell") {
        await this.props.buyDispatch();
      }
      if (this.props.product === "donate") {
        await this.props.donateDispatch();
      }
      if (this.props.product === "exchange") {
        await this.props.exchangeDispatch();
      }
      if (this.props.product === "orders") {
        await this.props.ordersDispatch();
      }
      if (this.props.product === "reserves") {
        await this.props.reservesDispatch();
      }
      if (this.props.product === "wishlist") {
        await this.props.wishlistDispatch();
      }
    }
  }
  render() {
    const { data, loading,user,myDetails } = this.props;
    if (!data) return null;
    let is_mine = false;
    if (myDetails) is_mine = user.username === myDetails.username;
    return (
      <>
        <Breakpoint large up>
          <Grid container direction="row" className="acc">
            <Grid item xs={3} className="acc__fs">
              <img src={
                        user.image
                          ? ProfileImageUrl + "" + user.image
                          : NoProfileImage
                      }/>
              <h3>{myDetails.first_name+" "+myDetails.last_name}</h3>
              <h5>{myDetails.username}</h5>
            </Grid>
          <Grid item xs={6} direction="row" style={{display:"flex",flexWrap:"wrap"}} spacing={2}>
          {loading ? (
                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={6}
                      xs={6}
                      style={{ marginBottom: "1rem" }}
                    >
                      <CardSkeleton />
                    </Grid>
                  ))
                ) : data.length == 0 ? (
                  <EmptyData type={this.props.product} />
                ) : (
                  data.map((item) => (
                    <Grid
                      item
                      lg={3}
                      md={3}
                      sm={6}
                      xs={6}
                      style={{ marginBottom: "1rem" }}
                    >
                      <Link
                        to={
                          this.props.product === "orders"
                            ? `/account/${this.props.match.params.id}/orders/${item.id}`
                            : `/buy/${item.id}`
                        }
                      >
                        <PostCard
                          item={item}
                          type={this.props.product}
                          {...this.props}
                        />
                      </Link>
                    </Grid>
                  ))
                )}
          </Grid>
          <Grid item xs={3} className="acc__last">
          
          {is_mine && (
              <Link
                to={`/account/${this.props.computedMatch.params.id}/orders`}
                className=""
              >
                  Order
              </Link>
            )}
    

            {is_mine && (
              <Link
                to={`/account/${this.props.computedMatch.params.id}/reserves`}
                className=""
              >
              
                  Reserve
                  
              </Link>
            )}

            {is_mine && (
              <Link
                to={`/account/${this.props.computedMatch.params.id}/wishlist`}
                className=""
              >
               
                  Wishlist
                 
              </Link>
            )}
            <Link
              to={`/account/${this.props.computedMatch.params.id}/sell`}
              className=""
            >
            
                Sell
               
            </Link>
            <Link
              to={`/account/${this.props.computedMatch.params.id}/donate`}
              className=""
            >
             
                Donate
              
            </Link>
            <Link
              to={`/account/${this.props.computedMatch.params.id}/exchange`}
              className=""
            >
              
                Exchange
               
            </Link>
            <Link
              to={`/account/${this.props.computedMatch.params.id}/address`}
              className=""
            >
            
                Address
             
            </Link>
          </Grid>
          </Grid>
        </Breakpoint>

        <Breakpoint medium down>
          <Dialog
            open={true}
            // onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth
            fullScreen
            maxWidth="lg"
          >
            <DialogTitle className="ordertitle">
              <IconButton
                onClick={() =>
                  this.props.history.push(
                    `/account/${this.props.match.params.id}`
                  )
                }
              >
                <ArrowBackIcon />
              </IconButton>
              {this.props.title}
            </DialogTitle>
            <Divider />
            <DialogContent style={{ padding: "8px" }}>
              <Grid
                container
                spacing={3}
                style={{ width: "100%", margin: "0" }}
              >
                {loading ? (
                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                    <Grid
                      item
                      lg={3}
                      md={3}
                      sm={6}
                      xs={6}
                      style={{ marginBottom: "1rem" }}
                    >
                      <CardSkeleton />
                    </Grid>
                  ))
                ) : data.length == 0 ? (
                  <EmptyData type={this.props.product} />
                ) : (
                  data.map((item) => (
                    <Grid
                      item
                      lg={3}
                      md={3}
                      sm={6}
                      xs={6}
                      style={{ marginBottom: "1rem" }}
                    >
                      <Link
                        to={
                          this.props.product === "orders"
                            ? `/account/${this.props.match.params.id}/orders/${item.id}`
                            : `/buy/${item.id}`
                        }
                      >
                        <PostCard
                          item={item}
                          type={this.props.product}
                          {...this.props}
                        />
                      </Link>
                    </Grid>
                  ))
                )}
              </Grid>
            </DialogContent>
          </Dialog>
        </Breakpoint>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const ur = ownProps.computedMatch.params.id;
  return {
    user: ownProps.computedMatch.params.id
    ? state.profile.users[ownProps.computedMatch.params.id]
    : null,
    myDetails: state.myDetails.myDetails,
    loading: state.profile.productLoading,
    data:
      ownProps.product == "sell" && ur in state.profile.buy == true
        ? state.profile.buy[ur]
        : ownProps.product == "reserves" && ur in state.profile.reserves == true
        ? state.profile.reserves[ur]
        : ownProps.product == "donate" && ur in state.profile.donate == true
        ? state.profile.donate[ur]
        : ownProps.product == "exchange" && ur in state.profile.exchange == true
        ? state.profile.exchange[ur]
        : ownProps.product == "orders" && ur in state.profile.orders == true
        ? state.profile.orders[ur]
        : ownProps.product == "wishlist" && ur in state.profile.wishlist == true
        ? state.profile.wishlist[ur]
        : [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyDispatch: (id) => dispatch(getUserBuy(id)),
    donateDispatch: (id) => dispatch(getUserDonate(id)),
    exchangeDispatch: (id) => dispatch(getUserExchange(id)),
    ordersDispatch: (id) => dispatch(getUserOrders(id)),
    reservesDispatch: (id) => dispatch(getUserReserve(id)),
    wishlistDispatch: (id) => dispatch(getUserWishlist(id)),
    setLoading: (value) => dispatch(loading(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AccountDetails));
