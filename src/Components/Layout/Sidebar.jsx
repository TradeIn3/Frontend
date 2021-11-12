import React, { Component } from "react";
import WebsiteLogo from "../../assets/WebsiteLogo.svg";
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
  RadioGroup,
  IconButton,
  Drawer,
  Button,
} from "@material-ui/core";
import { getCategories, getColors } from "../../utils/Utils";
import { addPostFilters, retrieveAllPost } from "../../redux/post/postActions";

class SideBar extends Component {
  state = {
    ...this.props.filters,
    sort: new URLSearchParams(this.props.location.search).get("sort"),
    cond: ["Good", "New", "Like new", "Fair", "Poor"],
  };

  async componentDidMount() {
    let barter = false;
    let donate = false;
    const { status, condition, category, subcategory, color, brand, min, max } =
      this.state;
    
    const data = {
        categoryVisible: true,
        brandVisible: true,
        conditionVisible: true,
        statusVisible: true,
        priceVisible: true,
        colorVisible: true,
        subcategVisible: true,
    
        status: "Any",
        condition: [],
        category: "Any",
        subcategory: "Any",
        brand: "Any",
        price: "0",
        color: {},
        min: 0,
        max: 0,
        bool: false,
    }   
    await this.props.addPostFiltersDispatch(data);
    await this.props.retrieveAllPostDispatch(
      category,
      subcategory,
      brand,
      [],
      min,
      max,
      status,
      [],
      barter,
      donate
    );
  }
  async componentDidUpdate(props, state) {
    if (
      new URLSearchParams(this.props.location.search).get("sort") != state.sort
    ) {
      this.handleFilter(
        new URLSearchParams(this.props.location.search).get("sort")
      );
      return;
    }
    if(this.props.location.pathname!=props.location.pathname){
      const data = {
        categoryVisible: true,
        brandVisible: true,
        conditionVisible: true,
        statusVisible: true,
        priceVisible: true,
        colorVisible: true,
        subcategVisible: true,
    
        status: "Any",
        condition: [],
        category: "Any",
        subcategory: "Any",
        brand: "Any",
        price: "0",
        color: {},
        min: 0,
        max: 0,
        bool: false,
    }   
    await this.props.addPostFiltersDispatch(data);
    } else {
      return;
    }
  }

  handleChangeColor = (item) => {
    this.setState(
      {
        color:
          item in this.state.color == false
            ? { ...this.state.color, [item]: true }
            : { ...this.state.color, [item]: false },
      },
      this.handleFilter
    );
  };

  handleChangeCondition = (event) => {
    const item = event.target.value;
    this.setState(
      {
        condition:
          item in this.state.condition == false
            ? { ...this.state.condition, [item]: true }
            : { ...this.state.condition, [item]: false },
      },
      this.handleFilter
    );
  };

  handleClickPrice = () => {
    this.setState({ bool: true });
    this.handleFilter();
    window.scrollTo(0, 0);
  };

  handleFilter = async (sort) => {
    if (this.state.price == 4 && this.state.bool == false) return;
    await this.props.addPostFiltersDispatch(this.state);
    let barter = false;
    let exchange = false;
    const {
      status,
      condition,
      category,
      subcategory,
      color,
      brand,
      min,
      max,
      price,
    } = this.state;
    let col = [];
    await Object.keys(color).map(
      async (item) => color[item] && (await col.push(item))
    );
    let con = [];
    await Object.keys(condition).map(
      async (item) => condition[item] && (await con.push(item))
    );
    
    let minp = 0,
      maxp = 0;
    if (price == 1) {
      maxp = 1000;
    } else if (price == 2) {
      minp = 1001;
      maxp = 2000;
    } else if (price == 3) {
      minp = 2001;
      maxp = 10000000000;
    } else if (price == 4) {
      minp = min;
      maxp = max;
    }
    await this.props.addPostFiltersDispatch(this.state);
    await this.props.retrieveAllPostDispatch(
      category,
      subcategory,
      brand,
      col,
      minp,
      maxp,
      status,
      con,
      barter,
      exchange,
      sort
    );
    if (price != 4) window.scrollTo(0, 0);
  };

  render() {
    const categories = getCategories();
    const colors = getColors();
    console.log(this.state);
    const {
      categoryVisible,
      brandVisible,
      conditionVisible,
      statusVisible,
      priceVisible,
      colorVisible,
      subcategVisible,
      status,
      color,
      condition,
      category,
      cond,
      price,
      subcategory,
    } = this.state;

    return (
      <>
        <Breakpoint large up>
          <div className="sidebar">
            <div className="sidebar__head">Filter By </div>
            <form className="sidebar__cont">
              <div className="sidebar__cont__section">
                <div
                  className="sidebar__cont__section__item"
                  onClick={() =>
                    this.setState({ categoryVisible: !categoryVisible })
                  }
                >
                  Category <ExpandMoreIcon />
                </div>
                {category == "Any" && (
                  <div
                    className="sidebar__cont__section__item__list"
                    style={{ display: categoryVisible ? "block" : "none" }}
                  >
                    <FormGroup>
                      <RadioGroup
                        aria-label="category"
                        name="category"
                        value={category}
                        onChange={async (e) =>
                          await this.setState(
                            { category: e.target.value },
                            this.handleFilter
                          )
                        }
                      >
                        <FormControlLabel
                          className="sidebar__cont__section__item__list__label"
                          value="Any"
                          control={<Radio />}
                          label="Any"
                        />
                        {Object.keys(categories).map((item) => {
                          return (
                            <FormControlLabel
                              className="sidebar__cont__section__item__list__label"
                              value={item}
                              control={<Radio />}
                              label={item}
                            />
                          );
                        })}
                      </RadioGroup>
                    </FormGroup>
                  </div>
                )}

                {category != "Any" && (
                  <>
                    <div
                      className="sidebar__cont__section__item1"
                      style={{
                        paddingLeft: "1.6rem",
                        paddingTop: "12px",
                        justifyContent: "flex-start",
                        display: categoryVisible ? "block" : "none",
                        alignItems: "center",
                      }}
                    >
                      <div className="sidebar__cont__section__item__icon">
                        <IconButton
                          style={{ padding: "0" }}
                          onClick={() =>
                            this.setState(
                              { category: "Any", subcategory: "Any" },
                              this.handleFilter
                            )
                          }
                        >
                          <ArrowBackIosIcon />
                        </IconButton>
                        <div> {category}</div>
                      </div>
                      <div
                        className="sidebar__cont__section__item__list"
                        style={{
                          padding: "12px 0  0 0rem",
                          display: categoryVisible ? "block" : "none",
                        }}
                      >
                        <FormGroup>
                          <RadioGroup
                            aria-label="subcategory"
                            name="subcategory"
                            value={subcategory}
                            onChange={(e) =>
                              this.setState(
                                { subcategory: e.target.value },
                                this.handleFilter
                              )
                            }
                          >
                            <FormControlLabel
                              className="sidebar__cont__section__item__list__label"
                              value="Any"
                              control={<Radio />}
                              label="Any"
                            />

                            {categories[category].map((item) => (
                              <FormControlLabel
                                className="sidebar__cont__section__item__list__label"
                                value={item}
                                control={<Radio />}
                                label={item}
                              />
                            ))}
                          </RadioGroup>
                        </FormGroup>
                      </div>{" "}
                    </div>
                  </>
                )}
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
                      className="sidebar__cont__section__item__list__label1"
                      control={
                        <Checkbox
                          // checked={state.checkedF}
                          // onCha()=>nge={handleChange(item)}
                          name="checkedF"
                        />
                      }
                      label="Mobile"
                    />
                    <FormControlLabel
                      className="sidebar__cont__section__item__list__label1"
                      control={
                        <Checkbox
                          // checked={state.checkedF}
                          // onCha()=>nge={handleChange(item)}
                          name="checkedF"
                        />
                      }
                      label="electronics"
                    />
                    <FormControlLabel
                      className="sidebar__cont__section__item__list__label1"
                      control={
                        <Checkbox
                          // checked={state.checkedF}
                          // onCha()=>nge={handleChange(item)}
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
                  <FormGroup onChange={this.handleChangeCondition}>
                    {cond.map((item) => (
                      <FormControlLabel
                        className="sidebar__cont__section__item__list__label1"
                        value={item}
                        control={
                          item in condition && condition[item] == true ? (
                            <Checkbox defaultChecked />
                          ) : (
                            <Checkbox />
                          )
                        }
                        label={item}
                      />
                    ))}
                    {/* <FormControlLabel
                    className="sidebar__cont__section__item__list__label1"
                    value="New"
                    control={<Checkbox />}
                    label="New"
                  />
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label1"
                    value="Like new"
                    control={<Checkbox />}
                    label="Like new"
                  />
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label1"
                    value="Fair"
                    control={<Checkbox />}
                    label="Fair"
                  />
                  <FormControlLabel
                    className="sidebar__cont__section__item__list__label1"
                    value="Poor"
                    control={<Checkbox />}
                    label="Poor"
                  /> */}
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
                    this.setState({ statusVisible: !statusVisible })
                  }
                >
                  Status <ExpandMoreIcon />
                </div>
                <div
                  className="sidebar__cont__section__item__list"
                  style={{ display: statusVisible ? "block" : "none" }}
                >
                  <FormGroup>
                    <RadioGroup
                      aria-label="status"
                      name="status"
                      value={status}
                      onChange={(e) =>
                        this.setState(
                          { status: e.target.value },
                          this.handleFilter
                        )
                      }
                    >
                      <FormControlLabel
                        className="sidebar__cont__section__item__list__label"
                        value="Any"
                        control={<Radio />}
                        label="Any"
                      />
                      <FormControlLabel
                        className="sidebar__cont__section__item__list__label"
                        value="Sold"
                        control={<Radio />}
                        label="Sold"
                      />
                    </RadioGroup>
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
                    // maxHeight: "272px",
                    // overflowY: "scroll",
                  }}
                >
                  <FormGroup>
                    {colors.map((item) => (
                      <FormControlLabel
                        className="sidebar__cont__section__item__list__label1"
                        value={item}
                        control={
                          item in this.state.color &&
                          this.state.color[item] == true ? (
                            <Checkbox
                              defaultChecked
                              onChange={() => this.handleChangeColor(item)}
                            />
                          ) : (
                            <Checkbox
                              onChange={() => this.handleChangeColor(item)}
                            />
                          )
                        }
                        label={item}
                      />
                    ))}
                  </FormGroup>
                </div>
              </div>
              {this.props.location.pathname == "/buy" && (
                <div
                  className="sidebar__cont__section"
                  style={{ borderTop: "none" }}
                >
                  <div
                    className="sidebar__cont__section__item"
                    onClick={() =>
                      this.setState({ priceVisible: !priceVisible })
                    }
                  >
                    Price <ExpandMoreIcon />
                  </div>
                  <div
                    className="sidebar__cont__section__item__list"
                    style={{ display: priceVisible ? "block" : "none" }}
                  >
                    <FormGroup>
                      <RadioGroup
                        aria-label="status"
                        name="price"
                        value={price}
                        onChange={(e) =>
                          this.setState(
                            { price: e.target.value },
                            this.handleFilter
                          )
                        }
                      >
                        <FormControlLabel
                          className="sidebar__cont__section__item__list__label"
                          value="0"
                          control={<Radio />}
                          label="Any"
                        />
                        <FormControlLabel
                          className="sidebar__cont__section__item__list__label"
                          value="1"
                          control={<Radio />}
                          label="Under &#8377;1000"
                        />
                        <FormControlLabel
                          className="sidebar__cont__section__item__list__label"
                          value="2"
                          control={<Radio />}
                          label="&#8377;1000 to &#8377;2000"
                        />
                        <FormControlLabel
                          className="sidebar__cont__section__item__list__label"
                          value="3"
                          control={<Radio />}
                          label="&#8377;2000 and up"
                        />

                        <FormControlLabel
                          className="sidebar__cont__section__item__list__label"
                          value="4"
                          control={<Radio name="checkedF" />}
                          label="Custom"
                        />
                      </RadioGroup>

                      <div className="sidebar__cont__section__item__list__label__custom">
                        <TextField
                          className="sidebar__cont__section__item__list__label__custom__tf"
                          id="filled-number"
                          placeholder="Min"
                          type="number"
                          onChange={(e) =>
                            this.setState({ min: e.target.value })
                          }
                          disabled={price != "4"}
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
                          disabled={price != "4"}
                          onChange={(e) =>
                            this.setState({ max: e.target.value })
                          }
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="outlined"
                        />
                        <div
                          className="sidebar__cont__section__item__list__label__custom__btn"
                          onClick={this.handleClickPrice}
                        >
                          Apply
                        </div>
                      </div>
                    </FormGroup>
                  </div>
                </div>
              )}
            </form>
          </div>
        </Breakpoint>
        <Breakpoint medium down>
          {this.props.filter ? (
            <Drawer anchor="left" open={true}>
              <div className="sidebar__head" style={{ marginTop: "0" }}>
                Filter By{" "}
                <Button onClick={() => this.props.handleDrawer(false)}>
                  Apply
                </Button>
              </div>
              <form className="sidebar__cont">
                <div className="sidebar__cont__section">
                  <div
                    className="sidebar__cont__section__item"
                    onClick={() =>
                      this.setState({ categoryVisible: !categoryVisible })
                    }
                  >
                    Category <ExpandMoreIcon />
                  </div>
                  {category == "Any" && (
                    <div
                      className="sidebar__cont__section__item__list"
                      style={{ display: categoryVisible ? "block" : "none" }}
                    >
                      <FormGroup>
                        <RadioGroup
                          aria-label="category"
                          name="category"
                          value={category}
                          onChange={async (e) =>
                            await this.setState(
                              { category: e.target.value },
                              this.handleFilter
                            )
                          }
                        >
                          <FormControlLabel
                            className="sidebar__cont__section__item__list__label"
                            value="Any"
                            control={<Radio />}
                            label="Any"
                          />
                          {Object.keys(categories).map((item) => {
                            return (
                              <FormControlLabel
                                className="sidebar__cont__section__item__list__label"
                                value={item}
                                control={<Radio />}
                                label={item}
                              />
                            );
                          })}
                        </RadioGroup>
                      </FormGroup>
                    </div>
                  )}

                  {category != "Any" && (
                    <>
                      <div
                        className="sidebar__cont__section__item1"
                        style={{
                          paddingLeft: "1.6rem",
                          paddingTop: "12px",
                          justifyContent: "flex-start",
                          display: categoryVisible ? "block" : "none",
                          alignItems: "center",
                        }}
                      >
                        <div className="sidebar__cont__section__item__icon">
                          <IconButton
                            style={{ padding: "0" }}
                            onClick={() =>
                              this.setState(
                                { category: "Any", subcategory: "Any" },
                                this.handleFilter
                              )
                            }
                          >
                            <ArrowBackIosIcon />
                          </IconButton>
                          <div> {category}</div>
                        </div>
                        <div
                          className="sidebar__cont__section__item__list"
                          style={{
                            padding: "12px 0  0 0rem",
                            display: categoryVisible ? "block" : "none",
                          }}
                        >
                          <FormGroup>
                            <RadioGroup
                              aria-label="subcategory"
                              name="subcategory"
                              value={subcategory}
                              onChange={(e) =>
                                this.setState(
                                  { subcategory: e.target.value },
                                  this.handleFilter
                                )
                              }
                            >
                              <FormControlLabel
                                className="sidebar__cont__section__item__list__label"
                                value="Any"
                                control={<Radio />}
                                label="Any"
                              />

                              {categories[category].map((item) => (
                                <FormControlLabel
                                  className="sidebar__cont__section__item__list__label"
                                  value={item}
                                  control={<Radio />}
                                  label={item}
                                />
                              ))}
                            </RadioGroup>
                          </FormGroup>
                        </div>{" "}
                      </div>
                    </>
                  )}
                </div>

                <div
                  className="sidebar__cont__section"
                  style={{ borderTop: "none" }}
                >
                  <div
                    className="sidebar__cont__section__item"
                    onClick={() =>
                      this.setState({ brandVisible: !brandVisible })
                    }
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
                        className="sidebar__cont__section__item__list__label1"
                        control={
                          <Checkbox
                            // checked={state.checkedF}
                            // onCha()=>nge={handleChange(item)}
                            name="checkedF"
                          />
                        }
                        label="Mobile"
                      />
                      <FormControlLabel
                        className="sidebar__cont__section__item__list__label1"
                        control={
                          <Checkbox
                            // checked={state.checkedF}
                            // onCha()=>nge={handleChange(item)}
                            name="checkedF"
                          />
                        }
                        label="electronics"
                      />
                      <FormControlLabel
                        className="sidebar__cont__section__item__list__label1"
                        control={
                          <Checkbox
                            // checked={state.checkedF}
                            // onCha()=>nge={handleChange(item)}
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
                    <FormGroup onChange={this.handleChangeCondition}>
                      {cond.map((item) => (
                        <FormControlLabel
                          className="sidebar__cont__section__item__list__label1"
                          value={item}
                          control={
                            item in condition && condition[item] == true ? (
                              <Checkbox defaultChecked />
                            ) : (
                              <Checkbox />
                            )
                          }
                          label={item}
                        />
                      ))}
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
                      this.setState({ statusVisible: !statusVisible })
                    }
                  >
                    Status <ExpandMoreIcon />
                  </div>
                  <div
                    className="sidebar__cont__section__item__list"
                    style={{ display: statusVisible ? "block" : "none" }}
                  >
                    <FormGroup>
                      <RadioGroup
                        aria-label="status"
                        name="status"
                        value={status}
                        onChange={(e) =>
                          this.setState(
                            { status: e.target.value },
                            this.handleFilter
                          )
                        }
                      >
                        <FormControlLabel
                          className="sidebar__cont__section__item__list__label"
                          value="Any"
                          control={<Radio />}
                          label="Any"
                        />
                        <FormControlLabel
                          className="sidebar__cont__section__item__list__label"
                          value="Sold"
                          control={<Radio />}
                          label="Sold"
                        />
                      </RadioGroup>
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
                      this.setState({ colorVisible: !colorVisible })
                    }
                  >
                    Color <ExpandMoreIcon />
                  </div>
                  <div
                    className="sidebar__cont__section__item__list"
                    style={{
                      display: colorVisible ? "block" : "none",
                      // maxHeight: "272px",
                      // overflowY: "scroll",
                    }}
                  >
                    <FormGroup>
                      {colors.map((item) => (
                        <FormControlLabel
                          className="sidebar__cont__section__item__list__label1"
                          value={item}
                          control={
                            item in this.state.color &&
                            this.state.color[item] == true ? (
                              <Checkbox
                                defaultChecked
                                onChange={() => this.handleChangeColor(item)}
                              />
                            ) : (
                              <Checkbox
                                onChange={() => this.handleChangeColor(item)}
                              />
                            )
                          }
                          label={item}
                        />
                      ))}
                    </FormGroup>
                  </div>
                </div>
                {this.props.location.pathname == "/buy" && (
                  <div
                    className="sidebar__cont__section"
                    style={{ borderTop: "none" }}
                  >
                    <div
                      className="sidebar__cont__section__item"
                      onClick={() =>
                        this.setState({ priceVisible: !priceVisible })
                      }
                    >
                      Price <ExpandMoreIcon />
                    </div>
                    <div
                      className="sidebar__cont__section__item__list"
                      style={{ display: priceVisible ? "block" : "none" }}
                    >
                      <FormGroup>
                        <RadioGroup
                          aria-label="status"
                          name="price"
                          value={price}
                          onChange={(e) =>
                            this.setState(
                              { price: e.target.value },
                              this.handleFilter
                            )
                          }
                        >
                          <FormControlLabel
                            className="sidebar__cont__section__item__list__label"
                            value="0"
                            control={<Radio />}
                            label="Any"
                          />
                          <FormControlLabel
                            className="sidebar__cont__section__item__list__label"
                            value="1"
                            control={<Radio />}
                            label="Under &#8377;1000"
                          />
                          <FormControlLabel
                            className="sidebar__cont__section__item__list__label"
                            value="2"
                            control={<Radio />}
                            label="&#8377;1000 to &#8377;2000"
                          />
                          <FormControlLabel
                            className="sidebar__cont__section__item__list__label"
                            value="3"
                            control={<Radio />}
                            label="&#8377;2000 and up"
                          />

                          <FormControlLabel
                            className="sidebar__cont__section__item__list__label"
                            value="4"
                            control={<Radio name="checkedF" />}
                            label="Custom"
                          />
                        </RadioGroup>

                        <div className="sidebar__cont__section__item__list__label__custom">
                          <TextField
                            className="sidebar__cont__section__item__list__label__custom__tf"
                            id="filled-number"
                            placeholder="Min"
                            type="number"
                            onChange={(e) =>
                              this.setState({ min: e.target.value })
                            }
                            disabled={price != "4"}
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
                            disabled={price != "4"}
                            onChange={(e) =>
                              this.setState({ max: e.target.value })
                            }
                            InputLabelProps={{
                              shrink: true,
                            }}
                            variant="outlined"
                          />
                          <div
                            className="sidebar__cont__section__item__list__label__custom__btn"
                            onClick={this.handleClickPrice}
                          >
                            Apply
                          </div>
                        </div>
                      </FormGroup>
                    </div>
                  </div>
                )}
              </form>
            </Drawer>
          ) : (
            <Drawer
              anchor="bottom"
              open={true}
              onClose={() => this.props.handleDrawerClose(false)}
            >
              <h3 style={{ padding: "12px 10px" }}>Sort By</h3>
              <Link
                to="/exchange"
                onClick={() => this.props.handleDrawerClose(false)}
                className="bottom-link"
              >
                {" "}
                Sort by best match{" "}
              </Link>
              <Link
                to="/exchange?sort=new"
                onClick={() => this.props.handleDrawerClose(false)}
                className="bottom-link"
              >
                {" "}
                Sort by newest first{" "}
              </Link>
              {this.props.buy && (
                <>
                  {" "}
                  <Link
                    value={"low"}
                    onClick={() => this.props.history.push("/buy?sort=lowest")}
                    className="bottom-link"
                  >
                    Sort by lowest price first
                  </Link>
                  <Link
                    value={"high"}
                    onClick={() => this.props.history.push("/buy?sort=highest")}
                    className="bottom-link"
                  >
                    Sort by hightest price first
                  </Link>
                </>
              )}
            </Drawer>
          )}
        </Breakpoint>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myDetails: state.myDetails.myDetails,
    filters: state.post.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPostFiltersDispatch: (data) => dispatch(addPostFilters(data)),
    retrieveAllPostDispatch: (
      category,
      subcategory,
      brand,
      color,
      min,
      max,
      status,
      condition,
      barter,
      donate,
      sort
    ) =>
      dispatch(
        retrieveAllPost(
          category,
          subcategory,
          brand,
          color,
          min,
          max,
          status,
          condition,
          barter,
          donate,
          sort
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
