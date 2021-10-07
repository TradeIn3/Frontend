import React, { Component } from "react";
import { Button, IconButton } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DummyPic from "../../assets/DummyPic.svg";
import DummyProduct1 from "../../assets/DummyProduct1.jpg";
import DummyProduct2 from "../../assets/DummyProduct2.jpg";
import DummyProduct3 from "../../assets/DummyProduct3.jpg";
import BookmarkBorderOutlined from "@material-ui/icons/BookmarkBorderOutlined";

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
   
    return (
      <div className="card">
       {/* <div className="card__top">
         <div className="card__top__hd">SELLING</div>
       </div> */}
      
       <div className="card__img">
         <img src={DummyProduct2}/>
       </div>
       <div className="card__btm">
         <div className="card__btm__lft">
         <p className="card__ttl">This is title sdfsd slflajfljslgslfnldfngsljfndgjn</p>
           <div className="card__btm__lft__price">Rs250</div>
           <div className="card__btm__lft__ship">+ Rs15 delivery fee</div>
         </div>
         <div className="card__btm__rgt">
          {/* <IconButton style={{padding:"0"}}> <BookmarkBorderOutlined/> </IconButton> */}
         </div>
       </div>
      </div>
    );
  }
}
