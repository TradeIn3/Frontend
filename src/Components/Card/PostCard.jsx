import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DummyPic from "../../assets/DummyPic.svg";
import DummyProduct1 from "../../assets/DummyProduct1.jpg";
import DummyProduct2 from "../../assets/DummyProduct2.jpg";
import DummyProduct3 from "../../assets/DummyProduct3.jpg";

const images = [
  {
    url: DummyProduct1,
  },
  {
    url: DummyProduct2,
  },
  {
    url: DummyProduct3,
  },
];
export default class PostCard extends Component {
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
      <div className="card">
        <div className="card__sell">
          <Button className="card__sell__btn">Selling</Button>
          <div className="card__sell__icon">
            <MoreVertIcon />
          </div>
        </div>
        <hr />

        <div className="card__profile">
          <div className="card__profile__pic">
            <img src={DummyPic} className="nav__profile" />
          </div>
          <div className="card__profile__name">
            Rohit Jain <br /> <span>Nepanagar</span>
          </div>
          <div className="card__profile__email">@rohit0301 &nbsp;</div>
          <div className="card__profile__lastSeen">| &nbsp; 5 min ago</div>
        </div>
        <hr />
        <div className="card__product">
          <h1>Selling this product</h1>
          <div className="card__product__carousel style={{padding:28}}">
            <Slider {...settings}>
              {images.map((image) => {
                return (
                  <div>
                    <img width="100%" src={image.url} />
                  </div>
                );
              })}
            </Slider>
          </div>
          <p>
            Filler text is text that shares some characters of a real written
            text, but is random or otherwise generated.It may be used to .....
          </p>
          <hr />
        </div>
        <div className="card__bottom">
          <div className="card__bottom__used">
            <p>Used for</p>
            <h3>2 years</h3>
          </div>
          <div className="card__bottom__sp">
            <p>Selling Price</p>
            <h3>
              <del>RS. 850.00</del>{" "}
            </h3>
          </div>
          <div className="card__bottom__bp">
            <p>Buying Price</p>
            <h3>RS. 250.00</h3>
          </div>
          <div className="card__bottom__buy">
            <Button className="card__bottom__buy__buybtn">Buy Now</Button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
