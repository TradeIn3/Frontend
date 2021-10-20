import { ListItem } from "@material-ui/core";
import React, { Component } from "react";
import { PostImageUrl } from "../../api/pathConstants";

export default class PostCard extends Component {
  render() {
   const {item} = this.props;
    return (
      <div className="card">
       {/* <div className="card__top">
         <div className="card__top__hd">SELLING</div>
       </div> */}
      
       <div className="card__img">
         <img src={PostImageUrl+""+item.image}/>
       </div>
       <div className="card__btm">
         <div className="card__btm__lft">
         <p className="card__ttl">{item.title}</p>
           <div className="card__btm__lft__price">Rs{item.price}</div>
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
