import React, { Component } from "react";
import WebsiteLogo from "../../assets/WebsiteLogo.svg";
import DummyPic from "../../assets/DummyPic.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import LoopIcon from "@material-ui/icons/Loop";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { Breakpoint } from "react-socks";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeTokenRequest } from "../../redux/token/tokenActions";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
class SideBar extends Component {
  state={
    categoryVisible:false,
    brandVisible:false,
    conditionVisible:false,
    statusVisible:false,
    priceVisible:false,
    colorVisible:false,
  }
  render() {
    const {categoryVisible,brandVisible,conditionVisible,statusVisible,priceVisible,colorVisible} = this.state;
    return (
      <>
        <div className="sidebar">
          <div className="sidebar__head">Filter By </div>
          <div className="sidebar__cont">
            <div className="sidebar__cont__section">
              <div className ="sidebar__cont__section__item" onClick={()=>this.setState({categoryVisible:!categoryVisible})}>Category <ExpandMoreIcon /></div>
              <div className="sidebar__cont__section__item__list" style={{display:categoryVisible?"block":"none"}}>
                <FormGroup>
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Mobile"
                  />
                   <FormControlLabel
                   className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="electronics"
                  />
                   <FormControlLabel
                   className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Stationary"
                  />
                </FormGroup>
              </div>
            </div>

            <div className="sidebar__cont__section" style={{borderTop:"none"}}>
              <div className ="sidebar__cont__section__item" onClick={()=>this.setState({brandVisible:!brandVisible})}>Brand <ExpandMoreIcon /></div>
              <div className="sidebar__cont__section__item__list" style={{display:brandVisible?"block":"none"}}>
                <FormGroup>
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Mobile"
                  />
                   <FormControlLabel
                   className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="electronics"
                  />
                   <FormControlLabel
                   className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Stationary"
                  />
                </FormGroup>
              </div>
            </div>
            <div className="sidebar__cont__section" style={{borderTop:"none"}}>
              <div className ="sidebar__cont__section__item" onClick={()=>this.setState({conditionVisible:!conditionVisible})}>Condition <ExpandMoreIcon /></div>
              <div className="sidebar__cont__section__item__list" style={{display:conditionVisible?"block":"none"}}>
                <FormGroup>
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Mobile"
                  />
                   <FormControlLabel
                   className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="electronics"
                  />
                   <FormControlLabel
                   className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Stationary"
                  />
                </FormGroup>
              </div>
            </div>
            <div className="sidebar__cont__section" style={{borderTop:"none"}}>
              <div className ="sidebar__cont__section__item" onClick={()=>this.setState({statusVisible:!statusVisible})}>Status <ExpandMoreIcon /></div>
              <div className="sidebar__cont__section__item__list" style={{display:statusVisible?"block":"none"}}>
                <FormGroup>
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Mobile"
                  />
                   <FormControlLabel
                   className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="electronics"
                  />
                   <FormControlLabel
                   className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Stationary"
                  />
                </FormGroup>
              </div>
            </div>
            <div className="sidebar__cont__section" style={{borderTop:"none"}}>
              <div className ="sidebar__cont__section__item" onClick={()=>this.setState({colorVisible:!colorVisible})}>Color <ExpandMoreIcon /></div>
              <div className="sidebar__cont__section__item__list" style={{display:colorVisible?"block":"none"}}>
                <FormGroup>
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Mobile"
                  />
                   <FormControlLabel
                   className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="electronics"
                  />
                   <FormControlLabel
                   className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Stationary"
                  />
                </FormGroup>
              </div>
            </div>
            <div className="sidebar__cont__section" style={{borderTop:"none"}}>
              <div className ="sidebar__cont__section__item" onClick={()=>this.setState({priceVisible:!priceVisible})}>Price <ExpandMoreIcon /></div>
              <div className="sidebar__cont__section__item__list" style={{display:priceVisible?"block":"none"}}>
                <FormGroup>
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Mobile"
                  />
                   <FormControlLabel
                   className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="electronics"
                  />
                   <FormControlLabel
                   className="sidebar__cont__section__item__list__label"
                    control={
                      <Checkbox
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Stationary"
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myDetails: state.myDetails.myDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTokenDispatch: () => dispatch(removeTokenRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
