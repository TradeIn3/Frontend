import { ListItem } from "@material-ui/core";
import React, { Component } from "react";
import { PostImageUrl } from "../../api/pathConstants";

export default class OrderCard extends Component {
  render() {
   const {item} = this.props;
    return (
      <div className="card">
       {/* <div className="card__top">
         <div className="card__top__hd">SELLING</div>
       </div> */}
      
       <div className="card__img">
         <img src="https://cdn.pixabay.com/photo/2014/05/02/21/50/laptop-336378_960_720.jpg"/>
       </div>
       <div className="card__btm">
         <div className="card__btm__lft">
         <p style={{fontSize:"1rem",paddingTop:"0.4rem"}} className="card__ttl">Delivered on Sep 30,2020</p>
           <div className="card__btm__lft__price">Samsung Galaxy M20</div>
           <div style={{backgroundColor:"white",padding:"0px 10px"}}className="card__btm__lft__ship"><a style={{fontSize:"0.85rem"}} href="/ordersummary">View Order Details</a></div>
         </div>
         <div className="card__btm__rgt">
          {/* <IconButton style={{padding:"0"}}> <BookmarkBorderOutlined/> </IconButton> */}
         </div>
       </div>
      </div>
    );
  }
}
