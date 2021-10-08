import React, { Component } from "react";

export default class PostCard extends Component {
  render() {
   
    return (
      <div className="card">
       {/* <div className="card__top">
         <div className="card__top__hd">SELLING</div>
       </div> */}
      
       <div className="card__img">
         <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Q4_DTTP4CjuYIeVq7AHNUQHaEo%26pid%3DApi&f=1"/>
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
