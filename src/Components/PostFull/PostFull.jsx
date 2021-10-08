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
      <Grid container className="product">
        <Grid item xs={7} className="product__lt">
          <div className="product__lt__Box">
            <div className="product__lt__Box__imageWrapper">
              <div className="product__lt__Box__imageWrapper__pic1">
                <a herf="#pic1">
                  <img src={DummyProduct1} />
                </a>
              </div>
              <div className="product__lt__Box__imageWrapper__pic2">
                <a href="..#pic2">
                  <img src={DummyProduct2} />
                </a>
              </div>
              <div className="product__lt__Box__imageWrapper__pic3">
                <img src={DummyProduct3} />
              </div>
              <div className="product__lt__Box__imageWrapper__pic4">
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
            <h3>Have a similar item?</h3>&nbsp;
            <a href="#">Sell yours</a>
            <div className="product__lt__moreopt__like">
              <Button>Add to wishlist</Button>
            </div>
          </div>
          <div className="product__lt__hr1">
            <hr />
          </div>
          <div className="product__lt__profile">
            <div className="product__lt__profile__pic">
              <img src={DummyPic} className="nav__profile" />
            </div>
            <div className="product__lt__profile__name">
              Sold by Rohit Jain <br /> <span>Nepanagar</span>
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
                <MoreVertIcon />
              </div>
            </div>
            <div className="product__lt__ques__hr2">
              {" "}
              <hr />
            </div>
            <div className="product__lt__ques__q2">
              <div className="product__lt__ques__q2__qa2">
                <h3>Q. This is a Question?</h3>
                <h3 style={{ color: "#6e6e6e" }}>A. This is a Answer.</h3>
                <div className="product__lt__ques__q2__icon2">
                  <MoreVertIcon />
                </div>
              </div>
            </div>
            <div className="product__lt__ques__hr3">
              {" "}
              <hr />
            </div>
            <div className="product__lt__ques__q3">
              <div className="product__lt__ques__q3__qa3">
                <h3>Q. This is a Question?</h3>
                <h3 style={{ color: "#6e6e6e" }}>A. This is a Answer.</h3>
                <div className="product__lt__ques__q3__icon3">
                  <MoreVertIcon />
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={5} className="product__rt">
          <div className="product__rt__sell">
            <h1>Selling this product</h1>
            <h1>&#8377; 250.00</h1>
            <div className="product__rt__sell__deli">
              +&#8377;15 delivery charges
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
          <div className="product__rt__hr4">
            <hr />
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
                Filler text is a text that shares some characteristics of a real
                written text, but is random or otherwise generated. It may used
                to Filler text Filler text is a text that shares some
                characteristics of a real written text, but is random or
                otherwise generated. It may used to Filler text Filler text is a
                text that shares some characteristics of a real written text,
                but is random or otherwise generated. It may used to Filler text
                Filler text is a text that shares some characteristics of a real
                written text, but is random or otherwise generated. It may used
                to Filler text Filler text is a text that shares some
                characteristics of a real written text, but is random or
                otherwise generated. It may used to Filler text Filler text is a
                text that shares some characteristics of a real written text.{" "}
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}
