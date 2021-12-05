import React, { Component, useEffect } from "react";
import { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import Box from "@material-ui/core/Box";
import { Breakpoint } from "react-socks";
import Divider from "@material-ui/core/Divider";
import AddIcon from "@material-ui/icons/Add";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import { Request, RequestImg } from "../../api/Request";
import {
  FormLabel,
  FormControl,
  Radio,
  FormControlLabel,
  FormGroup,
  RadioGroup,
} from "@material-ui/core";
import {
  CreateNewPost,
  CreatePostSuccess,
  editPost,
  retrievePost,
} from "../../redux/post/postActions";
import { connect } from "react-redux";
import { getCategories, getColors } from "../../utils/Utils";
import { plugToRequest } from "react-cookies";
import { withRouter } from "react-router-dom";

class EditSell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props.post.category || "",
      subcategory: this.props.post.subcategory || "",
      color: this.props.post.color || "",
      condn: this.props.post.condition || "",
      title: this.props.post.title || "",
      desc: this.props.post.description || "",
      brand: this.props.post.brand || "",
      premium: "false",
      loading: false,
      price: this.props.post.price || "",
      formValid: true,
      categoryValid: false,
      fieldValid: {
        category: true,
        subcategory: true,
        color: true,
        condn: true,
        title: true,
        desc: true,
        brand: true,
        price: true,
      },
    };
  }

  async componentDidMount() {
    await this.props.retrievePostDispatch(this.props.match.params.id);
    await this.props.setInitialDispatch(false, null);
  }
  static getDerivedStateFromProps(props, state) {
    if (props.post.category != state.category) {
      // console.log(props.post);
      return {
        category: props.post.category || "",
        subcategory: props.post.subcategory || "",
        color: props.post.color || "",
        condn: props.post.condition || "",
        title: props.post.title || "",
        desc: props.post.description || "",
        brand: props.post.brand || "",
        price: props.post.price || "",
      };
    }
  }

  onHandleChange = async (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    if (name == "price") {
      if (
        value.charAt(value.length - 1) < "0" ||
        value.charAt(value.length - 1) > "9"
      )
        return;
    }
    await this.setState({ ...this.state, [name]: value }, () =>
      this.validateField(name, value)
    );
  };

  validateField = async (fieldName, value) => {
    let val = false;
    switch (fieldName) {
      case "category":
        value == "" ? (val = false) : (val = true);
        break;
      case "subcategory":
        value == "" ? (val = false) : (val = true);
        break;
      case "color":
        value == "" ? (val = false) : (val = true);
        break;
      case "condn":
        value == "" ? (val = false) : (val = true);
        break;
      case "brand":
        value == "" ? (val = false) : (val = true);
        break;
      case "price":
        value <= 0 ? (val = false) : (val = true);
        break;
      case "title":
        value.length <= 2 || value.length >= 100 ? (val = false) : (val = true);
        break;
      case "desc":
        value.length <= 5 || value.length > 250 ? (val = false) : (val = true);
        break;
      default:
        break;
    }
    await this.setState({
      fieldValid: { ...this.state.fieldValid, [fieldName]: val },
    });
    this.validateForm();
  };

  validateForm = async () => {
    await this.setState({
      formValid:
        this.state.fieldValid["category"] &&
        this.state.fieldValid["subcategory"] &&
        this.state.fieldValid["brand"] & this.state.fieldValid["color"] &&
        this.state.fieldValid["title"] &&
        this.state.fieldValid["desc"] &&
        this.state.fieldValid["condn"] &&
        this.state.fieldValid["price"],
    });
  };

  //  onImageChange = async(e) => {
  //   const name = e.target.name;
  //   if (name == "img1")
  //     await this.setState({img1:{
  //       image: URL.createObjectURL(e.target.files[0]),
  //       file: e.target.files[0],
  //     }},this.validateForm);
  //   else if (name == "img2")
  //    await this.setState({img2:{
  //     image: URL.createObjectURL(e.target.files[0]),
  //     file: e.target.files[0],
  //   }},this.validateForm);
  //   else if (name == "img3")
  //   await this.setState({img3:{
  //     image: URL.createObjectURL(e.target.files[0]),
  //     file: e.target.files[0],
  //   }},this.validateForm);
  //   else if (name == "img4")
  //   await this.setState({img4:{
  //     image: URL.createObjectURL(e.target.files[0]),
  //     file: e.target.files[0],
  //   }},this.validateForm);

  // };

  onHandleSubmit = async () => {
    const data = {
      category: this.state.category,
      subcategory: this.state.subcategory,
      color: this.state.color,
      condition: this.state.condn,
      title: this.state.title,
      description: this.state.desc,
      brand: this.state.brand,
      premium: this.state.premium,
      price: this.state.price,
      is_barter: false,
      is_donate: false,
      id: this.props.computedMatch.params.id,
    };
    // console.log(data);
    await this.props.editPostDispatch(data);
  };

  render() {
    const categories = getCategories();
    const colors = getColors();
    if (this.props.success) {
      this.props.history.push(`/buy/${this.props.match.params.id}`);
      return;
    }
    return (
      <React.Fragment>
        <div className="outer1">
          <div className="outer1__headings">
            <h1>Edit Post</h1>
            <h3>
              Hi, <span>{this.props.myDetails.username}</span>
            </h3>
          </div>
          <Grid container className="outer1__sell">
            <Grid
              item
              lg={7}
              md={7}
              sm={12}
              xs={12}
              className="outer1__sell__lt"
            >
              {/* <div className="outer1__sell__lt__heading1">
              <div style={{ color: "goldenrod", padding: "6px 8px" }}>
                <OfflineBoltIcon />
              </div>
              <h3>Post ad to earn 50 Trade-coin in your account</h3>
            </div> */}
              <form className="outer1__sell__lt">
                <Grid container className="outer1__sell__lt__outer">
                  <Grid
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    style={{ paddingRight: "4px" }}
                    className="outer__sell__lt__outer__categ"
                  >
                    <div className="login__right__myForm__formData">
                      <label htmlFor="name">Category</label>
                      <br />
                      <Box style={{ paddingTop: "10px" }}>
                        <Select
                          id="demo-simple-select"
                          value={this.state.category}
                          displayEmpty
                          name="category"
                          className="login__right__myForm__formData__select"
                          variant="outlined"
                          // label="Category"
                          onChange={this.onHandleChange}
                        >
                          <MenuItem value="" disabled>
                            Select
                          </MenuItem>
                          {Object.keys(categories).map((item) => (
                            <MenuItem value={item}>{item}</MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    style={{ paddingLeft: "4px" }}
                    className="outer1__sell_lt__outer__subcate"
                  >
                    <div className="login__right__myForm__formData">
                      <label htmlFor="name">Sub-Category</label>
                      <br />
                      <Box
                        sx={{ minWidth: 120 }}
                        style={{ paddingTop: "10px" }}
                      >
                        <Select
                          id="demo-simple-select"
                          value={this.state.subcategory}
                          displayEmpty
                          variant="outlined"
                          disabled={this.state.category == ""}
                          name="subcategory"
                          className="login__right__myForm__formData__select"
                          onChange={this.onHandleChange}
                        >
                          <MenuItem value="" disabled>
                            Select
                          </MenuItem>
                          {this.state.category != "" &&
                            categories[this.state.category].map((item) => (
                              <MenuItem value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                      </Box>
                    </div>
                  </Grid>
                </Grid>

                <Grid container className="outer1__sell__lt__outer">
                  <Grid
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    style={{ paddingRight: "4px" }}
                    className="outer1__sell__lt__outer__categ"
                  >
                    <div className="login__right__myForm__formData">
                      <label htmlFor="name">Color</label>
                      <br />
                      <Box
                        sx={{ minWidth: 200 }}
                        style={{ paddingTop: "10px" }}
                      >
                        <Select
                          id="demo-simple-select"
                          value={this.state.color}
                          displayEmpty
                          variant="outlined"
                          name="color"
                          className="login__right__myForm__formData__select"
                          style={{ backgroundColor: "white" }}
                          onChange={this.onHandleChange}
                        >
                          <MenuItem value="" disabled>
                            Select
                          </MenuItem>
                          {colors.map((item) => (
                            <MenuItem value={item}>{item}</MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </div>
                  </Grid>
                  <Grid
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="outer1__sell_lt__outer__subcate"
                  >
                    <div
                      className="outer1__sell__lt__outer__brand"
                      style={{ width: "100%" }}
                    >
                      <div className="login__right__myForm__formData">
                        <label htmlFor="name">Brand</label>
                        <br />
                        <TextField
                          onChange={this.onHandleChange}
                          required
                          style={{ paddingTop: "10px", width: "100%" }}
                          className="login__right__myForm__formData__username"
                          name="brand"
                          value={this.state.brand}
                          placeholder="Brand"
                          variant="outlined"
                          className="login__right__myForm__formData__select"
                        ></TextField>
                      </div>
                    </div>
                  </Grid>
                </Grid>

                <Grid container className="outer1__sell__lt__outer">
                  <Grid
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="outer1__sell__lt__outer__categ"
                    style={{ width: "100%", paddingRight: "4px" }}
                  >
                    <div className="login__right__myForm__formData">
                      <label htmlFor="name">Condition</label>
                      <br />
                      <Box style={{ paddingTop: "10px" }}>
                        <Select
                          id="demo-simple-select"
                          value={this.state.condn}
                          name="condn"
                          displayEmpty
                          variant="outlined"
                          className="login__right__myForm__formData__select"
                          onChange={this.onHandleChange}
                        >
                          <MenuItem value="" disabled>
                            Select
                          </MenuItem>
                          <MenuItem value="Good">Good</MenuItem>
                          <MenuItem value="New">New</MenuItem>
                          <MenuItem value="Like new">Like new</MenuItem>
                          <MenuItem value="Fair">Fair</MenuItem>
                          <MenuItem value="Poor">Poor</MenuItem>
                        </Select>
                      </Box>
                    </div>
                  </Grid>
                  <Grid
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    style={{ paddingLeft: "4px" }}
                    className="outer1__sell__lt__outer__subcate"
                  >
                   {this.props.type=="buy" && <div
                      className="login__right__myForm__formData"
                      style={{ width: "100%" }}
                    >
                      <label htmlFor="name">Price</label>
                      <br />
                      <TextField
                        className="outer1__sell__lt__outer__subcate__tf"
                        id="filled-number"
                        placeholder="Range"
                        // type="number"
                        name="price"
                        onChange={this.onHandleChange}
                        value={this.state["price"]}
                        style={{ width: "100%" }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                      />
                    </div>}
                  </Grid>
                </Grid>

                <div className="login__right__myForm__formData">
                  <label htmlFor="name">Title</label>
                  <br />
                  <TextField
                    onChange={this.onHandleChange}
                    required
                    className="login__right__myForm__formData__username"
                    name="title"
                    value={this.state["title"]}
                    variant="outlined"
                  ></TextField>
                </div>
                <div className="login__right__myForm__formData">
                  <label htmlFor="name">Description</label>
                  <br />
                  <TextField
                    onChange={this.onHandleChange}
                    required
                    name="desc"
                    multiline
                    value={this.state["desc"]}
                    row={8}
                    className="login__right__myForm__formData__username"
                    variant="outlined"
                  ></TextField>
                </div>

                {/* <div className="outer1__sell__lt__img">
                <label
                  className="login__right__myForm__formData"
                  htmlFor="image"
                >
                  Images
                </label>
                <br />
                <p>You can choose upto 4 images</p>
                <div className="outer1__sell__lt__img__sel">
                  <div className="outer1__sell__lt__img__sel__bdr">
                    <div className="outer1__sell__lt__img__sel__bdr__crc">
                      {!this.state.img1.image ? (
                        <Button variant="contained" component="label">
                          <AddIcon />
                          <input
                            type="file"
                            hidden
                            onChange={this.onImageChange}
                            name="img1"
                            accept="image/png, image/jpeg"
                          />
                        </Button>
                      ) : (
                        <>
                          <img src={this.state.img1.image} />
                          <CancelRoundedIcon
                            className="outer1__sell__lt__img__sel__bdr__crc__close"
                            onClick={() => this.setState({img1:{ image: null, file: null }})}
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="outer1__sell__lt__img__sel__bdr">
                    <div className="outer1__sell__lt__img__sel__bdr__crc">
                      {!this.state.img2.image ? (
                        <Button variant="contained" component="label">
                          <AddIcon />
                          <input
                            type="file"
                            hidden
                            onChange={this.onImageChange}
                            name="img2"
                            accept="image/png, image/jpeg"
                          />
                        </Button>
                      ) : (
                        <>
                          <img src={this.state.img2.image} />
                          <CancelRoundedIcon
                            className="outer1__sell__lt__img__sel__bdr__crc__close"
                            onClick={() => this.setState({img2:{ image: null, file: null }})}
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="outer1__sell__lt__img__sel__bdr">
                    <div className="outer1__sell__lt__img__sel__bdr__crc">
                      {!this.state.img3.image ? (
                        <Button variant="contained" component="label">
                          <AddIcon />
                          <input
                            type="file"
                            hidden
                            onChange={this.onImageChange}
                            name="img3"
                            accept="image/png, image/jpeg"
                          />
                        </Button>
                      ) : (
                        <>
                          <img src={this.state.img3.image} />
                          <CancelRoundedIcon
                            className="outer1__sell__lt__img__sel__bdr__crc__close"
                            onClick={() => this.setState({img3:{ image: null, file: null }})}
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="outer1__sell__lt__img__sel__bdr">
                    <div className="outer1__sell__lt__img__sel__bdr__crc">
                      {!this.state.img4.image ? (
                        <Button variant="contained" component="label">
                          <AddIcon />
                          <input
                            type="file"
                            hidden
                            onChange={this.onImageChange}
                            name="img4"
                            accept="image/png, image/jpeg"
                          />
                        </Button>
                      ) : (
                        <>
                          <img src={this.state.img4.image} />
                          <CancelRoundedIcon
                            className="outer1__sell__lt__img__sel__bdr__crc__close"
                            onClick={() => this.setState({img4:{ image: null, file: null }})}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div> */}
              </form>
            </Grid>
            <Grid
              item
              lg={5}
              md={5}
              sm={12}
              xs={12}
              className="outer1__sell__rt"
            >
              <div className="outer1__sell__rt__box">
                <div className="outer1__sell__rt__box__coin">
                  <div className="outer1__sell__rt__box__coin__icon">
                    <OfflineBoltIcon />
                  </div>
                  <h1>50</h1>
                </div>
                <h2> Trade coin Balance</h2>
              </div>
              <h3>Types of Ads</h3>
              <Grid container className="outer1__sell__rt__radio">
                <Grid
                  item
                  xs={7}
                  lg={8}
                  className="outer1__sell__rt__radio__lt1"
                >
                  <FormControl component="fieldset">
                    <RadioGroup
                      name="premium"
                      value={this.state.premium}
                      onChange={this.onHandleChange}
                    >
                      <FormControlLabel
                        style={{ paddingBottom: "1.4rem" }}
                        control={<Radio />}
                        label="Free Ad"
                        value="false"
                      />
                      <div className="outer1__sell__rt__radio__lt1__hr">
                        <hr />
                      </div>
                      <FormControlLabel
                        style={{ paddingTop: "1rem" }}
                        control={<Radio />}
                        label="Premium Ad"
                        value="true"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={5}
                  lg={4}
                  className="outer1__sell__rt__radio__rt1"
                >
                  <div
                    className="outer1__sell__rt__radio__rt1__con"
                    style={{ color: "goldenrod", paddingBottom: "1.2rem" }}
                  >
                    <OfflineBoltIcon />
                    <div
                      className="outer1__sell__rt__radio__rt1__con__heading3
                  "
                    >
                      <h4> 0 / Month</h4>
                    </div>
                  </div>
                  <div
                    className="outer1__sell__rt__radio__rt1__con"
                    style={{ color: "goldenrod", paddingTop: "1.7rem" }}
                  >
                    <OfflineBoltIcon />
                    <div
                      className="outer1__sell__rt__radio__rt1__con__heading3
                      
                  "
                    >
                      <h4> 200 / Month</h4>
                    </div>
                  </div>
                </Grid>
              </Grid>

              <div className="outer1__sell__rt__more">
                <p>
                  - Visible above all regular Ads.
                  <br />
                  -'Premium' tag
                  <br />- Priority in search results.
                  <br />- 4 weeks validity as premium
                </p>
              </div>

              <Button
                onClick={this.onHandleSubmit}
                className="login__right__myForm__loginButton"
                type="submit"
                disabled={!this.state.formValid}
              >
                Edit Post
              </Button>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    myDetails: state.myDetails.myDetails,
    success: state.post.success,
    postId: state.post.postId,
    post:
      ownProps.computedMatch.params.id &&
      ownProps.computedMatch.params.id in state.post.posts
        ? state.post.posts[ownProps.computedMatch.params.id]
        : {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrievePostDispatch: (postId) => dispatch(retrievePost(postId)),
    editPostDispatch: (data) => dispatch(editPost(data)),
    setInitialDispatch: (value, id) => dispatch(CreatePostSuccess(value, id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditSell));
