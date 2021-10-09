import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DummyPic from "../../assets/DummyPic.svg";
import DummyProduct1 from "../../assets/DummyProduct1.jpg";
import DummyProduct2 from "../../assets/DummyProduct2.jpg";
import DummyProduct3 from "../../assets/DummyProduct3.jpg";
import DummyProduct4 from "../../assets/DummyProduct4.jpg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Breakpoint } from "react-socks";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

// const images = [
//     {
//       url: DummyProduct1,
//     },
//     {
//       url: DummyProduct2,
//     },
//     {
//       url: DummyProduct3,
//     },
//     {
//         url: DummyProduct4,
//       },
//   ];

export default class PostFull extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides",
    };
    return (
      <>
        <Breakpoint large up>
          <Grid
            container
            className="product"
            style={{ paddingLeft: "5rem", paddingTop: "2.5rem" }}
          >
            <Grid item xs={6} className="product__lt">
              <div className="product__lt__Box">
                <div className="product__lt__Box__imageWrapper">
                  <div className="product__lt__Box__imageWrapper__pic">
                    <a herf="#pic1">
                      <img src={DummyProduct1} />
                    </a>
                  </div>
                  <div className="product__lt__Box__imageWrapper__pic">
                    <a href="..#pic2">
                      <img src={DummyProduct2} />
                    </a>
                  </div>
                  <div className="product__lt__Box__imageWrapper__pic">
                    <img src={DummyProduct3} />
                  </div>
                  <div
                    className="product__lt__Box__imageWrapper__pic"
                    style={{ paddingBottom: 0 }}
                  >
                    <img src={DummyProduct4} />
                  </div>
                </div>
                <div className="product__lt__Box__outer">
                  <img src={DummyProduct1} />
                  <div className="product__Box__outer__icons">
                    <div className="product__lt__Box__outer__icons__icon1">
                      <ArrowBackIosIcon />
                    </div>
                    <div className="product__lt__Box__outer__icons__icon2">
                      <ArrowForwardIosIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__lt__moreopt">
                <h3>
                  Have a similar item? <a href="#">Sell yours</a>
                </h3>

                <div className="product__lt__moreopt__like">
                  <Button>Add to wishlist</Button>
                </div>
              </div>

              <div className="product__lt__profile">
                <div className="product__lt__profile__pic">
                  <img src={DummyPic} className="nav__profile" />
                  <div className="product__lt__profile__name">
                    Sold by Rohit Jain <br /> <span>Nepanagar</span>
                  </div>
                </div>

                <div className="product__lt__profile__btn">
                  <Button>View Profile</Button>
                </div>
              </div>
              <div className="product__lt__ques">
                <div className="product__lt__ques__heading">
                  <h2>Questions and Answers</h2>
                  <div className="product__lt__ques__heading__ask">
                    <Button>Ask Question</Button>
                  </div>
                </div>

                <div className="product__lt__ques__q1">
                  <div className="product__lt__ques1__q1__qa1">
                    <h3>Q. This is a Question?</h3>
                    <h3 style={{ color: "#6e6e6e" }}>A. This is a Answer.</h3>
                  </div>

                  <div className="product__lt__ques__q1__icon1">
                    <EditIcon className="product__lt__ques__q1__icon1__edit" />
                    <DeleteIcon className="product__lt__ques__q1__icon1__delete" />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid
              item
              xs={5}
              className="product__rt"
              style={{ paddingLeft: "4rem" }}
            >
              <div className="product__rt__sell">
                <h1>Selling this product</h1>
                <h3>Adidas</h3>
                <h2>&#8377;250.00</h2>
                <div className="product__rt__sell__deli">
                  + &#8377;15 delivery charges
                </div>

                <div className="product__rt__sell__buttons">
                  <div
                    className="product__rt__sell__buttons__buy"
                    style={{ width: "100%" }}
                  >
                    <Button className="product__rt__sell__buttons__buy__buybtn">
                      Buy Now
                    </Button>
                  </div>
                  <div
                    className="product__rt__sell__buttons__nego"
                    style={{ width: "100%" }}
                  >
                    <Button className="product__rt__sell__buttons__nego__negobtn">
                      Negotiate
                    </Button>
                  </div>
                </div>
                <div className="product__rt__sell__reserved">
                  <Button className="product__rt__sell__reserved__reservedbtn">
                    RESERVED
                  </Button>
                </div>
              </div>

              <div className="product__rt__overview">
                <h2>Overview</h2>
                <div className="product__rt__overview__cond">
                  <div className="product__rt__overview__cond__condSt">
                    <h3>Condition</h3>
                  </div>
                  <div className="product__rt__overview__cond__state">
                    <h3>new</h3>
                  </div>
                </div>

                <div className="product__rt__overview__categ">
                  <div className="product__rt__overview__categ__categTy">
                    <h3>Category</h3>
                  </div>
                  <div className="product__rt__overview__categ__type">
                    <h3>Stationery</h3>
                  </div>
                </div>
                <div className="product__rt__overview__brand">
                  <div className="product__rt__overview__brand__brandNa">
                    <h3>Brand</h3>
                  </div>
                  <div className="product__rt__overview__brand__name">
                    <h3>xasdnan</h3>
                  </div>
                </div>
              </div>
              <div className="product__rt__details">
                <h2>Details</h2>
                <div className="product__rt__details__postdetail">
                  <div className="product__rt__details__postdetail__post">
                    <h3>Posted</h3>
                  </div>
                  <div className="product__rt__details__postdetail__date">
                    <h3>10/02/2021</h3>
                  </div>
                </div>
              </div>
              <div className="product__rt__desc">
                <h2>Description</h2>
                <div className="product__rt__desc__desctext">
                  <p>
                    Filler text is a text that shares some characteristics of a
                    real written text, but is random or otherwise generated. It
                    may used to Filler text Filler text is a text that shares
                    some characteristics of a real written text, but is random
                    or otherwise generated. It may used to Filler text Filler
                    text is a text that shares some characteristics of a real
                    written text, but is random or otherwise generated. It may
                    used to Filler text Filler text is a text that shares some
                    characteristics of a real written text, but is random or
                    otherwise generated. It may used to Filler text Filler text
                    is a text that shares some characteristics of a real written
                    text, but is random or otherwise generated. It may used to
                    Filler text Filler text is a text that shares some
                    characteristics of a real written text.{" "}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Breakpoint>
        <Breakpoint medium down>
          <div classN ame="product">
            <div className="product__lt">
              <div className="product__lt__Box">
              
                <div className="product__lt__Box__outer">
                  <img src={DummyProduct1} />

                  <div className="product__Box__outer__icons">
                    <div className="product__lt__Box__outer__icons__icon1">
                      <ArrowBackIosIcon />
                    </div>
                    <div className="product__lt__Box__outer__icons__icon2">
                      <ArrowForwardIosIcon />
                    </div>
                  </div>
                </div>
                <div className="product__lt__Box__imageWrapper">
                  <div className="product__lt__Box__imageWrapper__pic">
                    <a herf="#pic1">
                      <img src={DummyProduct1} />
                    </a>
                  </div>
                  <div className="product__lt__Box__imageWrapper__pic">
                    <a href="..#pic2">
                      <img src={DummyProduct2} />
                    </a>
                  </div>
                  <div className="product__lt__Box__imageWrapper__pic">
                    <img src={DummyProduct3} />
                  </div>
                  <div className="product__lt__Box__imageWrapper__pic">
                    <img src={DummyProduct4} />
                  </div>
                </div>
              </div>
              
              <div className="product__lt__moreopt">
                <h3>Have a similar item?<a href="#">Sell yours</a></h3>
                <div className="product__lt__moreopt__like">
                  <Button>Add to wishlist</Button>
                </div>
              </div>
             
            </div>

            <div className="product__rt">
              <div className="product__rt__sell">
              <h1>Selling this product</h1>
                <h3>Adidas</h3>
                <h2>&#8377;250.00</h2>
                <div className="product__rt__sell__deli">
                  + &#8377;15 delivery charges
                </div>


                <div className="product__rt__sell__buttons">
                  <div className="product__rt__sell__buttons__buy">
                    <Button className="product__rt__sell__buttons__buy__buybtn">
                      Buy Now
                    </Button>
                  </div>
                  <div className="product__rt__sell__buttons__nego">
                    <Button className="product__rt__sell__buttons__negobtn">
                      Negotiate
                    </Button>
                  </div>
                </div>
                <div className="product__rt__sell__reserved">
                  <Button className="product__rt__sell__reservedbtn">
                    Reserved
                  </Button>
                </div>
              </div>
            
              <div className="product__rt__overview">
                <h2>Overview</h2>
                <div className="product__rt__overview__cond">
                  <div className="product__rt__overview__cond__condSt">
                    <h3>Condition</h3>
                  </div>
                  <div className="product__rt__overview__cond__state">
                    <h3>new</h3>
                  </div>
                </div>

                <div className="product__rt__overview__cond">
                  <div className="product__rt__overview__cond__condSt">
                    <h3>Category</h3>
                  </div>
                  <div className="product__rt__overview__cond__state">
                    <h3>Stationery</h3>
                  </div>
                </div>
                <div className="product__rt__overview__cond">
                  <div className="product__rt__overview__cond__condSt">
                    <h3>Brand</h3>
                  </div>
                  <div className="product__rt__overview__cond__state">
                    <h3>xasdnan</h3>
                  </div>
                </div>
              </div>
              <div className="product__rt__overview">
                <h2>Details</h2>
                <div className="product__rt__overview__cond">
                  <div className="product__rt__overview__cond__condSt">
                    <h3>Posted</h3>
                  </div>
                  <div className="product__rt__overview__cond__state">
                    <h3>10/02/2021</h3>
                  </div>
                </div>
              </div>
              <div className="product__rt__desc">
                <h2>Description</h2>
                <div className="product__rt__desc__desctext">
                  <p>
                    Filler text is a text that shares some characteristics of a
                    real written text, but is random or otherwise generated. It
                    may used to Filler text Filler text is a text that shares
                    some characteristics of a real written text, but is random
                    or otherwise generated. It may used to Filler text Filler
                    text is a text that shares some characteristics of a real
                    written text, but is random or otherwise generated. It may
                    used to Filler text Filler text is a text that shares some
                    characteristics of a real written text, but is random or
                    otherwise generated. It may used to Filler text Filler text
                    is a text that shares some characteristics of a real written
                    text, but is random or otherwise generated. It may used to
                    Filler text Filler text is a text that shares some
                    characteristics of a real written text.{" "}
                  </p>
                </div>
              </div>
            
              <div className="product__lt__profile">
                <div className="product__lt__profile__pic">
                  <img src={DummyPic} className="nav__profile" />
                  <div className="product__lt__profile__name">
                    Sold by Rohit Jain <br /> <span>Nepanagar</span>
                  </div>
                </div>

                <div className="product__lt__profile__btn">
                  <Button>View Profile</Button>
                </div>
              </div>
              <div className="product__lt__ques">
                <div className="product__lt__ques__heading">
                  <h2>Questions and Answers</h2>
                  <div className="product__lt__ques__heading__ask">
                    <Button>Ask Question</Button>
                  </div>
                </div>

                <div className="product__lt__ques__q1">
                  <div className="product__lt__ques1__q1__qa1">
                    <h3>Q. This is a Question?</h3>
                    <h3 style={{ color: "#6e6e6e" }}>A. This is a Answer.</h3>
                  </div>

                  <div className="product__lt__ques__q1__icon1">
                    <EditIcon className="product__lt__ques__q1__icon1__edit" />
                    <DeleteIcon className="product__lt__ques__q1__icon1__delete" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Breakpoint>
      </>
    );
  }
}
