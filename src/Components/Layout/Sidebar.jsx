import React, { Component } from "react";
import WebsiteLogo from "../../assets/WebsiteLogo.svg";
import DummyPic from "../../assets/DummyPic.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import LoopIcon from "@material-ui/icons/Loop";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import RemoveIcon from "@material-ui/icons/Remove";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Breakpoint } from "react-socks";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeTokenRequest } from "../../redux/token/tokenActions";
import {
  Checkbox,
  Radio,
  TextField,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";

class SideBar extends Component {
  state = {
    categoryVisible: false,
    brandVisible: false,
    conditionVisible: false,
    statusVisible: false,
    priceVisible: false,
    colorVisible: false,
    subcategVisible: false,
  };
  render() {
    const {
      categoryVisible,
      brandVisible,
      conditionVisible,
      statusVisible,
      priceVisible,
      colorVisible,
      subcategVisible,
    } = this.state;
    return (
      <>
        <div className="sidebar">
          <div className="sidebar__head">Filter By </div>
          <div className="sidebar__cont">
            <div className="sidebar__cont__section">
              <div
                className="sidebar__cont__section__item"
                onClick={() =>
                  this.setState({ categoryVisible: !categoryVisible })
                }
              >
                Category <ExpandMoreIcon />
              </div>
              <div
                className="sidebar__cont__section__item__list"
                style={{ display: categoryVisible ? "block" : "none" }}
              >
                {/* <FormGroup>
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Radio
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
                      <Radio
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
                      <Radio
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Stationary"
                  />
                </FormGroup> */}
              </div>

              <div
                className="sidebar__cont__section__item"
                style={{
                  paddingLeft: "1.6rem",
                  paddingTop: "12px",
                  justifyContent: "flex-start",
                }}
                onClick={() =>
                  this.setState({ subcategVisible: !subcategVisible })
                }
              >
                <div className="sidebar__cont__section__item__icon">
                  <ArrowBackIosIcon />
                </div>
                <div> Mobiles</div>
              </div>
              <div
                className="sidebar__cont__section__item__list"
                style={{
                  display: subcategVisible ? "block" : "none",
                  maxHeight: "272px",
                  overflowY: "scroll",
                  padding: "12px 0  0 1.8rem",
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Radio
                      // checked={state.checkedF}
                      // onChange={handleChange}
                      // name="checkedF"
                      />
                    }
                    label="Samsung"
                  />
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Radio
                      // checked={state.checkedF}
                      // onChange={handleChange}
                      // name="checkedF"
                      />
                    }
                    label="Oppp"
                  />
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Radio
                      // checked={state.checkedF}
                      // onChange={handleChange}
                      // name="checkedF"
                      />
                    }
                    label="Vivo"
                  />
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Radio
                      // checked={state.checkedF}
                      // onChange={handleChange}
                      // name="checkedF"
                      />
                    }
                    label="Realme"
                  />
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Radio
                      // checked={state.checkedF}
                      // onChange={handleChange}
                      // name="checkedF"
                      />
                    }
                    label="Apple"
                  />
                </FormGroup>
              </div>
            </div>

            <div
              className="sidebar__cont__section"
              style={{ borderTop: "none" }}
            >
              <div
                className="sidebar__cont__section__item"
                onClick={() => this.setState({ brandVisible: !brandVisible })}
              >
                Brand <ExpandMoreIcon />
              </div>
              <div
                className="sidebar__cont__section__item__list"
                style={{
                  display: brandVisible ? "block" : "none",
                  maxHeight: "272px",
                  overflowY: "scroll",
                }}
              >
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
            <div
              className="sidebar__cont__section"
              style={{ borderTop: "none" }}
            >
              <div
                className="sidebar__cont__section__item"
                onClick={() =>
                  this.setState({ conditionVisible: !conditionVisible })
                }
              >
                Condition <ExpandMoreIcon />
              </div>
              <div
                className="sidebar__cont__section__item__list"
                style={{ display: conditionVisible ? "block" : "none" }}
              >
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
            <div
              className="sidebar__cont__section"
              style={{ borderTop: "none" }}
            >
              <div
                className="sidebar__cont__section__item"
                onClick={() => this.setState({ statusVisible: !statusVisible })}
              >
                Status <ExpandMoreIcon />
              </div>
              <div
                className="sidebar__cont__section__item__list"
                style={{ display: statusVisible ? "block" : "none" }}
              >
                <FormGroup>
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Radio
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
                      <Radio
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
                      <Radio
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
            <div
              className="sidebar__cont__section"
              style={{ borderTop: "none" }}
            >
              <div
                className="sidebar__cont__section__item"
                onClick={() => this.setState({ colorVisible: !colorVisible })}
              >
                Color <ExpandMoreIcon />
              </div>
              <div
                className="sidebar__cont__section__item__list"
                style={{
                  display: colorVisible ? "block" : "none",
                  maxHeight: "272px",
                  overflowY: "scroll",
                }}
              >
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
            <div
              className="sidebar__cont__section"
              style={{ borderTop: "none" }}
            >
              <div
                className="sidebar__cont__section__item"
                onClick={() => this.setState({ priceVisible: !priceVisible })}
              >
                Price <ExpandMoreIcon />
              </div>
              <div
                className="sidebar__cont__section__item__list"
                style={{ display: priceVisible ? "block" : "none" }}
              >
                <FormGroup>
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Radio
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Under &#8377;1000"
                  />
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Radio
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="&#8377;1000 to &#8377;2000"
                  />
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Radio
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="&#8377;2000 and up"
                  />
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Radio
                        // checked={state.checkedF}
                        // onChange={handleChange}
                        name="checkedF"
                      />
                    }
                    label="Custom"
                  />

                  <div className="sidebar__cont__section__item__list__label__custom">
                    <TextField
                      className="sidebar__cont__section__item__list__label__custom__tf"
                      id="filled-number"
                      placeholder="Min"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />

                    <div className="sidebar__cont__section__item__list__label__custom__icon">
                      _
                    </div>
                    <TextField
                      className="sidebar__cont__section__item__list__label__custom__tf"
                      id="filled-number"
                      placeholder="Max"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                    <div className="sidebar__cont__section__item__list__label__custom__btn">
                      Apply
                    </div>
                  </div>
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
