import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import { getCategories } from "../../utils/Utils";
import { Link } from "react-router-dom";
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
import AccountDetails from "./AccountDetails";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img1: { image: null, file: null },
    };
  }
  onImageChange = async (e) => {
    const name = e.target.name;
    if (name == "img1")
      await this.setState(
        {
          img1: {
            image: URL.createObjectURL(e.target.files[0]),
            file: e.target.files[0],
          },
        },
        this.validateForm
      );
  };

  render() {
    const categories = getCategories();
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
                    <div className="authhome__upper__profile__pic__cam">
                      {!this.state.img1.image ? (
                        <Button variant="contained" component="label">
                          <CameraAltIcon style={{ color: "white" }} />
                          <input
                            type="file"
                            hidden
                            onChange={this.onImageChange}
                            name="img1"
                            accept="image/png, image/jpeg"
                          />
                        </Button>
                      ) : (
                        <>
                          <img src={this.state.img1.image} />
                          <CameraAltIcon
                            style={{ color: "white" }}
                            className="authhome__upper__profile__pic__cam__close"
                            onClick={() =>
                              this.setState({
                                img1: { image: null, file: null },
                              })
                            }
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="authhome__upper__profile__headings">
                  <h3>Rohit Jain</h3>
                  <h5>@rohit0301</h5>
                </div>
              </div>
              <div className="authhome__upper__icon2">
                <EditIcon />
              </div>
            </div>
            <div className="authhome__menu">
              <div className="authhome__menu__icons">
                <ShoppingCartIcon />
                Order
                <div className="authhome__menu__icons__nxt">
                  {" "}
                  <a href="/myorders">
                    {" "}
                    <NavigateNextIcon />
                  </a>
                </div>
              </div>
              <div className="authhome__menu__in">Check your order status</div>
            </div>
            <div className="authhome__menu">
              <div className="authhome__menu__icons">
                <FavoriteIcon />
                Wishlist
                <div className="authhome__menu__icons__nxt">
                  {" "}
                  <NavigateNextIcon />
                </div>
              </div>
              <div className="authhome__menu__in">Your most loved product</div>
            </div>
            <div className="authhome__menu">
              <div className="authhome__menu__icons">
                <LocalOfferIcon />
                Sell
                <div className="authhome__menu__icons__nxt">
                  {" "}
                  <NavigateNextIcon />
                </div>
              </div>
              <div className="authhome__menu__in">Your Product</div>
            </div>
            <div className="authhome__menu">
              <div className="authhome__menu__icons">
                <OfflineBoltIcon />
                Donate
                <div className="authhome__menu__icons__nxt">
                  {" "}
                  <NavigateNextIcon />
                </div>
              </div>
              <div className="authhome__menu__in">Your Product</div>
            </div>
            <div className="authhome__menu">
              <div className="authhome__menu__icons">
                <LoopIcon />
                Exchange
                <div className="authhome__menu__icons__nxt">
                  {" "}
                  <NavigateNextIcon />
                </div>
              </div>
              <div className="authhome__menu__in">Your Product</div>
            </div>
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
      </>
    );
  }
}
