import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import { Link } from "react-router-dom";
import { Button, Divider } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Grid,
} from "@material-ui/core";
import OrderCard from "../Card/OrderCard";

export default class AccountDetails extends Component {
  render() {
    return (
      <>
        <Breakpoint large up></Breakpoint>

        <Breakpoint medium down>
          <div className="ordersum">
            <div className="ordersum__id">Order ID - OD119830292287856000</div>
            <Divider />
            <div className="ordersum__card">
              <div className="card__img">
                <img src="https://cdn.pixabay.com/photo/2014/05/02/21/50/laptop-336378_960_720.jpg" />
              </div>
              <div className="card__btm">
                <div className="card__btm__lft">
                  <p
                    style={{ fontSize: "1rem", paddingTop: "0.4rem" }}
                    className="card__ttl"
                  >
                    Delivered on Sep 30,2020
                  </p>
                  <div className="card__btm__lft__price">
                    Samsung Galaxy M20
                  </div>
                  <div
                    style={{ backgroundColor: "white", padding: "0px 10px" }}
                    className="card__btm__lft__ship"
                  >
                    <a style={{ fontSize: "0.85rem" }} href="buy/6">
                      View Product Details
                    </a>
                  </div>
                </div>
                <div className="card__btm__rgt">
                  {/* <IconButton style={{padding:"0"}}> <BookmarkBorderOutlined/> </IconButton> */}
                </div>
              </div>
            </div>
            <Divider />
            <div className="ordersum__shipping">
              <h3>Shipping Details</h3>
              <h2>Rohit Jain</h2>
              <p>
                House No-32
                <br />
                C-Sector,Patel Nagar
                <br />
                Bhopal Madhya Pradesh 462022
              </p>
              <p>
                <span>Phone Number:</span>&nbsp;9963215478
              </p>
            </div>
            <Divider />
            <div className="ordersum__price">
              <h3>Price Details</h3>
              <Grid container className="ordersum__price__det">
                <Grid item xs={6} className="ordersum__price__det__cat">
                  Selling Price
                </Grid>
                <Grid item xs={6} className="ordersum__price__det__amt">
                  &#8377;17000
                </Grid>
              </Grid>
              <Grid container className="ordersum__price__det">
                <Grid item xs={6} className="ordersum__price__det__cat">
                  Shipping Charge
                </Grid>
                <Grid item xs={6} className="ordersum__price__det__amt">
                  &#8377;80
                </Grid>
              </Grid>
              <Divider style={{ margin: "0.55rem 0" }} />
              <Grid container className="ordersum__price__det">
                <Grid item xs={6} className="ordersum__price__det__cat">
                  Total Amount
                </Grid>
                <Grid item xs={6} className="ordersum__price__det__amt">
                  &#8377;17080
                </Grid>
              </Grid>
            </div>
          </div>
        </Breakpoint>
      </>
    );
  }
}
