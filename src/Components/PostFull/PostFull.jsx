import React, { Component } from "react";
import { Button, Grid, IconButton, TextField } from "@material-ui/core";
import { Breakpoint } from "react-socks";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DummyPic from "../../assets/DummyPic.svg";
import DummyProduct1 from "../../assets/DummyProduct1.jpg";
import DummyProduct2 from "../../assets/DummyProduct2.jpg";
import DummyProduct3 from "../../assets/DummyProduct3.jpg";
import DummyProduct4 from "../../assets/DummyProduct4.jpg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import WebsiteLogo from "../../assets/WebsiteLogo.svg";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { getToken } from "../../redux/token/tokenActions";
import { connect } from "react-redux";
import {
  ProductPayment,
  ProductPaymentSuccess,
  ReservePayment,
  ReservePaymentSuccess,
} from "../../api/pathConstants";
import { Request } from "../../api/Request";
import { openSnackbar } from "../../redux/snackbar/snackbarActions";
import {
  answerQuestion,
  deleteQuestion,
  PostSave,
  retrievePost,
} from "../../redux/post/postActions";
import CardSkeleton from "../Skeleton/CardSkeleton";
import { Route, Link, Switch } from "react-router-dom";
import { AUTH_BUY_FULL_QUESTION_PATH } from "../../constants/routeConstants";
import QuestionModal from "./QuestionModal";
const handleReservePaymentSuccess = async (
  response,
  detail,
  token,
  payment_id,
  props
) => {
  const data = {
    response: response,
    data: detail,
    payment_id: payment_id,
  };

  const res = await Request("POST", ReservePaymentSuccess, token, data);
  if (res && res.status == 200) {
    props.openSnackbarDispatch("Payment done successfully");
  } else if (res && res.status == 204) {
    props.openSnackbarDispatch("Already Reserved");
  } else {
    props.openSnackbarDispatch("Something went wrong");
  }
};

const handleProductPaymentSuccess = async (
  response,
  detail,
  token,
  payment_id,
  props
) => {
  const data = {
    response: response,
    data: detail,
    payment_id: payment_id,
  };

  const res = await Request("POST", ProductPaymentSuccess, token, data);
  if (res && res.status == 200) {
    props.openSnackbarDispatch("Payment done successfully");
  } else {
    props.openSnackbarDispatch("Something went wrong");
  }
};

class PostFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArray: [DummyProduct1, DummyProduct2, DummyProduct3, DummyProduct4],
      selected: 0,
      answer: "",
    };
  }

  async componentDidMount() {
    await this.props.retrievePostDispatch(this.props.match.params.id);
  }

  handleDelete = async (id) => {
    await this.props.deleteQuestionDispatch(id, this.props.match.params.id);
  };

  handleSave =async(isSaved) => {
    if(this.props.isLoggedIn)
      await this.props.postSavedDispatch(this.props.match.params.id,this.props.myDetails.username,isSaved?"unsave":"save")
  }
  handleAnswer = async (id, action) => {
    await this.props.answerQuestionDispatch(
      this.state.answer,
      this.props.match.params.id,
      id,
      action
    );
    this.setState({ answer: "" });
  };

  onHandleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  };

  showProductRazorpay = async (e) => {
    e.preventDefault();
    await this.loadScript();
    await this.props.getTokenDispatch();
    const token = this.props.access;
    if (!token) {
      this.props.history.push("?login=true");
      return;
    }
    const props = this.props;
    let data = {
      amount: 100000,
      username: this.props.myDetails.username,
      order_product: this.props.match.params.id,
    };
    const res = await Request("POST", ProductPayment, token, data);
    if (res && res.status != 200) {
      this.props.openSnackbarDispatch("Something went wrong");
      return;
    } else if (!res) {
      this.props.openSnackbarDispatch("Network error");
      return;
    }
    data["amount"] = res.data.payment.amount;
    // console.log(res);
    // in data we will receive an object from the backend with the information about the payment
    //that has been made by the user
    var options = {
      key: `${process.env.REACT_APP_RAZORPAY_KEY}`,
      key_secret: `${process.env.REACT_APP_RAZORPAY_SECRET_KEY}`,
      amount: res.data.payment.amount,
      currency: "INR",
      name: "TradeIn",
      username: this.props.myDetails.username,
      description: "Buy now",
      image: WebsiteLogo, // add image url
      order_id: res.data.payment.id,
      handler: function (response) {
        console.log(props);
        handleProductPaymentSuccess(
          response,
          data,
          token,
          res.data.payment["id"],
          props
        );
      },
      prefill: {
        name: this.props.myDetails.username,
        email: this.props.myDetails.email,
        contact: this.props.myDetails.phone,
      },
      notes: {
        // address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#9147ff",
      },
    };

    var rzp1 = await new window.Razorpay(options);
    rzp1.open();
  };

  showReserveRazorpay = async (e) => {
    e.preventDefault();
    await this.loadScript();
    await this.props.getTokenDispatch();
    const token = this.props.access;

    const props = this.props;
    if (!token) {
      this.props.history.push("?login=true");
      return;
    }
    const data = {
      amount: 10,
      username: this.props.myDetails.username,
      reserve_product: this.props.match.params.id,
    };
    const res = await Request("POST", ReservePayment, token, data);
    if (res && res.status != 200) {
      this.props.openSnackbarDispatch("Something went wrong");
      return;
    } else if (!res) {
      this.props.openSnackbarDispatch("Network error");
      return;
    }
    // console.log(res);
    // in data we will receive an object from the backend with the information about the payment
    //that has been made by the user
    var options = {
      key: `${process.env.REACT_APP_RAZORPAY_KEY}`,
      key_secret: `${process.env.REACT_APP_RAZORPAY_SECRET_KEY}`,
      amount: res.data.payment.amount,
      currency: "INR",
      name: "TradeIn",
      username: this.props.myDetails.username,
      description: "Reserve now",
      image: WebsiteLogo, // add image url
      order_id: res.data.payment.id,
      handler: function (response) {
        handleReservePaymentSuccess(
          response,
          data,
          token,
          res.data.payment["id"],
          props
        );
      },
      prefill: {
        name: this.props.myDetails.username,
        email: this.props.myDetails.email,
        contact: this.props.myDetails.phone,
      },
      notes: {
        // address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#9147ff",
      },
    };

    var rzp1 = await new window.Razorpay(options);
    rzp1.open();
  };

  render() {
    const { imageArray, selected, answer } = this.state;
    const { post, loading } = this.props;
    if (loading) return <CardSkeleton />;
    return (
      <>
        <Breakpoint large up>
          <Grid
            container
            className="product"
            style={{ paddingLeft: "5rem", paddingTop: "2.5rem" }}
          >
            <Grid item xs={6} className="product__lt">
              <div className="product__lt__Box">
                <div className="product__lt__Box__imageWrapper">
                  {imageArray.map((item, index) => (
                    <div
                      className="product__lt__Box__imageWrapper__pic"
                      style={{
                        paddingBottom:
                          selected == imageArray.length ? "0" : "1.4rem",
                      }}
                    >
                      <a herf="#pic1">
                        <img
                          src={item}
                          onClick={() => this.setState({ selected: index })}
                          style={{ opacity: index == selected ? "1" : "0.4" }}
                        />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="product__lt__Box__outer">
                  <img src={imageArray[selected]} />
                  <div className="product__Box__outer__icons">
                    {selected > 0 && (
                      <div className="product__lt__Box__outer__icons__icon1">
                        <IconButton
                          onClick={() =>
                            this.setState({ selected: selected - 1 })
                          }
                        >
                          <ArrowBackIosIcon />
                        </IconButton>
                      </div>
                    )}
                    {selected < imageArray.length - 1 && (
                      <div className="product__lt__Box__outer__icons__icon2">
                        <IconButton
                          onClick={() =>
                            this.setState({ selected: selected + 1 })
                          }
                        >
                          <ArrowForwardIosIcon />
                        </IconButton>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="product__lt__moreopt">
                <h3>
                  Have a similar item? <a href="#">Sell yours</a>
                </h3>

                <div className="product__lt__moreopt__like">
                <Link to={this.props.isLoggedIn?`${this.props.location.pathname}`:`${this.props.location.pathname}?login=true`}>
                  <Button onClick={()=>this.handleSave(post.is_saved)}>{post.is_saved ?"Remove from wishlist" :"Add to wishlist"}</Button>
                  </Link>
                </div>
              </div>

              <div className="product__lt__profile">
                <div className="product__lt__profile__pic">
                  <img src={DummyPic} className="nav__profile" />
                  <div className="product__lt__profile__name">
                    Sold by {post.first_name + " " + post.last_name} <br />{" "}
                    <span>{post.city}</span>
                  </div>
                </div>

                <div className="product__lt__profile__btn">
                  <Button>View Profile</Button>
                </div>
              </div>

              <div className="product__lt__ques">
                <div className="product__lt__ques__heading">
                  <h2>Questions and Answers</h2>
                  {!post.is_owner && (
                    <div className="product__lt__ques__heading__ask">
                      <Link to={`/buy/${this.props.match.params.id}/ask`}>
                        Ask Question
                      </Link>
                    </div>
                  )}
                </div>

                {post.questions.map((obj) => (
                  <div className="product__lt__ques__q1">
                    <div className="product__lt__ques__q1__qa1">
                      <h3>Q. {obj.question}</h3>
                      {!post.is_owner && (
                        <h3 style={{ color: "#6e6e6e" }}>
                          {obj.is_answered ? (
                            `A. ${obj.answer}`
                          ) : (
                            <>
                              <div
                                style={{
                                  color: "#9e9e9e",
                                  fontSize: "0.85rem",
                                }}
                              >
                                Not Answered yet
                              </div>
                            </>
                          )}
                        </h3>
                      )}

                      {post.is_owner && (
                        <div className="product__lt__ques__q1__ans">
                          {!obj.is_answered ? (
                            <>
                              <TextField
                                type="text"
                                required
                                value={answer}
                                placeholder="write your answer here"
                                onChange={this.onHandleChange}
                                className="login__right__myForm__formData__username"
                                variant="outlined"
                                name="answer"
                                multiline
                                row={4}
                                // style={{ padding: "8px" }}
                              ></TextField>
                              <Button
                                onClick={() => this.handleAnswer(obj.id, "add")}
                              >
                                Answer
                              </Button>
                            </>
                          ) : (
                            <div className="product__lt__ques__q1__ansdone">
                              <h3 style={{ color: "#6e6e6e" }}>
                                A. {obj.answer}
                              </h3>{" "}
                              <IconButton
                                style={{ padding: "0" }}
                                onClick={() =>
                                  this.handleAnswer(obj.id, "delete")
                                }
                              >
                                <DeleteIcon className="product__lt__ques__q1__icon1__delete" />
                              </IconButton>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {!post.is_owner && (
                      <div className="product__lt__ques__q1__icon1">
                        {/* <IconButton style={{padding:"0"}} >
                        <EditIcon className="product__lt__ques__q1__icon1__edit" />
                      </IconButton> */}
                        <IconButton
                          style={{ padding: "0" }}
                          onClick={() => this.handleDelete(obj.id)}
                        >
                          <DeleteIcon className="product__lt__ques__q1__icon1__delete" />
                        </IconButton>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Grid>

            <Grid
              item
              xs={5}
              className="product__rt"
              style={{ paddingLeft: "4rem" }}
            >
              <div className="product__rt__sell">
                <h1>{post.title}</h1>
                <h3>{post.brand}</h3>
                <h2>&#8377;{post.price}</h2>
                <div className="product__rt__sell__deli">
                  + &#8377;15 delivery charges
                </div>

                <div className="product__rt__sell__buttons">
                  <div
                    className="product__rt__sell__buttons__buy"
                    style={{ width: "100%" }}
                  >
                    <Button
                      className="product__rt__sell__buttons__buy__buybtn"
                      onClick={this.showProductRazorpay}
                    >
                      Buy Now
                    </Button>
                  </div>
                  <div
                    className="product__rt__sell__buttons__nego"
                    style={{ width: "100%" }}
                  >
                    <Button className="product__rt__sell__buttons__nego__negobtn">
                      Negotiate
                    </Button>
                  </div>
                </div>
                <div className="product__rt__sell__reserved">
                  <Button
                    className="product__rt__sell__reserved__reservedbtn"
                    onClick={this.showReserveRazorpay}
                  >
                    RESERVED
                  </Button>
                </div>
              </div>

              <div className="product__rt__overview">
                <h2>Overview</h2>
                <div className="product__rt__overview__cond">
                  <div className="product__rt__overview__cond__condSt">
                    <h3>Condition</h3>
                  </div>
                  <div className="product__rt__overview__cond__state">
                    <h3>{post.condition}</h3>
                  </div>
                </div>

                <div className="product__rt__overview__categ">
                  <div className="product__rt__overview__categ__categTy">
                    <h3>Category</h3>
                  </div>
                  <div className="product__rt__overview__categ__type">
                    <h3>{post.category}</h3>
                  </div>
                </div>
                <div className="product__rt__overview__brand">
                  <div className="product__rt__overview__brand__brandNa">
                    <h3>Brand</h3>
                  </div>
                  <div className="product__rt__overview__brand__name">
                    <h3>{post.brand}</h3>
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
                    <h3>{post.date}</h3>
                  </div>
                </div>
              </div>
              <div className="product__rt__desc">
                <h2>Description</h2>
                <div className="product__rt__desc__desctext">
                  <p>{post.description} </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Breakpoint>
        <Breakpoint medium down>
          <div classN ame="product">
            <div className="product__lt">
              <div className="product__lt__Box">
                <div className="product__lt__Box__outer">
                  <img src={imageArray[selected]} />
                  <div className="product__Box__outer__icons">
                    {selected > 0 && (
                      <div className="product__lt__Box__outer__icons__icon1">
                        <IconButton
                          onClick={() =>
                            this.setState({ selected: selected - 1 })
                          }
                        >
                          <ArrowBackIosIcon />
                        </IconButton>
                      </div>
                    )}
                    {selected < imageArray.length - 1 && (
                      <div className="product__lt__Box__outer__icons__icon2">
                        <IconButton
                          onClick={() =>
                            this.setState({ selected: selected + 1 })
                          }
                        >
                          <ArrowForwardIosIcon />
                        </IconButton>
                      </div>
                    )}
                  </div>
                </div>
                <div className="product__lt__Box__imageWrapper">
                  {imageArray.map((item, index) => (
                    <div
                      className="product__lt__Box__imageWrapper__pic"
                      style={{
                        paddingBottom:
                          selected == imageArray.length ? "0" : "1.4rem",
                      }}
                    >
                      <a herf="#pic1">
                        <img
                          src={item}
                          onClick={() => this.setState({ selected: index })}
                          style={{ opacity: index == selected ? "1" : "0.4" }}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product__lt__moreopt">
                <h3>
                  Have a similar item?<a href="#">Sell yours</a>
                </h3>
                <div className="product__lt__moreopt__like">
                  <Link to={this.props.isLoggedIn?`${this.props.location.pathname}`:`${this.props.location.pathname}?login=true`}>
                  <Button onClick={()=>this.handleSave(post.is_saved)}>{post.is_saved ?"Remove from wishlist" :"Add to wishlist"}</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="product__rt">
              <div className="product__rt__sell">
                <h1>{post.title}</h1>
                <h3>{post.brand}</h3>
                <h2>&#8377;{post.price}</h2>
                <div className="product__rt__sell__deli">
                  + &#8377;15 delivery charges
                </div>

                <div className="product__rt__sell__buttons">
                  <div className="product__rt__sell__buttons__buy">
                    <Button
                      className="product__rt__sell__buttons__buy__buybtn"
                      onClick={this.showProductRazorpay}
                    >
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
                  <Button
                    className="product__rt__sell__reservedbtn"
                    onClick={this.showReserveRazorpay}
                  >
                    Reserved
                  </Button>
                </div>
              </div>

              <div className="product__rt__overview">
                <h2>Overview</h2>
                <div className="product__rt__overview__cond">
                  <div className="product__rt__overview__cond__condSt">
                    <h3>Condition</h3>
                  </div>
                  <div className="product__rt__overview__cond__state">
                    <h3>{post.condition}</h3>
                  </div>
                </div>

                <div className="product__rt__overview__cond">
                  <div className="product__rt__overview__cond__condSt">
                    <h3>Category</h3>
                  </div>
                  <div className="product__rt__overview__cond__state">
                    <h3>{post.category}</h3>
                  </div>
                </div>
                <div className="product__rt__overview__cond">
                  <div className="product__rt__overview__cond__condSt">
                    <h3>Brand</h3>
                  </div>
                  <div className="product__rt__overview__cond__state">
                    <h3>{post.brand}</h3>
                  </div>
                </div>
              </div>
              <div className="product__rt__overview">
                <h2>Details</h2>
                <div className="product__rt__overview__cond">
                  <div className="product__rt__overview__cond__condSt">
                    <h3>Posted</h3>
                  </div>
                  <div className="product__rt__overview__cond__state">
                    <h3>{post.date}</h3>
                  </div>
                </div>
              </div>
              <div className="product__rt__desc">
                <h2>Description</h2>
                <div className="product__rt__desc__desctext">
                  <p>{post.description} </p>
                </div>
              </div>

              <div className="product__lt__profile">
                <div className="product__lt__profile__pic">
                  <img src={DummyPic} className="nav__profile" />
                  <div className="product__lt__profile__name">
                    Sold by {post.first_name + " " + post.last_name} <br />{" "}
                    <span>{post.city}</span>
                  </div>
                </div>

                <div className="product__lt__profile__btn">
                  <Button>View Profile</Button>
                </div>
              </div>
              <div className="product__lt__ques">
                <div className="product__lt__ques__heading">
                  <h2>Questions and Answers</h2>
                  {!post.is_owner && (
                    <div className="product__lt__ques__heading__ask">
                      <Link to={`/buy/${this.props.match.params.id}/ask`}>
                        Ask Question
                      </Link>
                    </div>
                  )}
                </div>

                {post.questions.map((obj) => (
                  <div className="product__lt__ques__q1">
                    <div className="product__lt__ques__q1__qa1">
                      <h3>Q. {obj.question}</h3>
                      {!post.is_owner && (
                        <h3 style={{ color: "#6e6e6e" }}>
                          {obj.is_answered ? (
                            `A. ${obj.answer}`
                          ) : (
                            <>
                              <div
                                style={{
                                  color: "#9e9e9e",
                                  fontSize: "0.85rem",
                                }}
                              >
                                Not Answered yet
                              </div>
                            </>
                          )}
                        </h3>
                      )}

                      {post.is_owner && (
                        <div className="product__lt__ques__q1__ans">
                          {!obj.is_answered ? (
                            <>
                              <TextField
                                type="text"
                                required
                                value={answer}
                                placeholder="write your answer here"
                                onChange={this.onHandleChange}
                                className="login__right__myForm__formData__username"
                                variant="outlined"
                                name="answer"
                                multiline
                                row={4}
                                // style={{ padding: "8px" }}
                              ></TextField>
                              <Button
                                onClick={() => this.handleAnswer(obj.id, "add")}
                              >
                                Answer
                              </Button>
                            </>
                          ) : (
                            <div className="product__lt__ques__q1__ansdone">
                              <h3 style={{ color: "#6e6e6e" }}>
                                A. {obj.answer}
                              </h3>{" "}
                              <IconButton
                                style={{ padding: "0" }}
                                onClick={() =>
                                  this.handleAnswer(obj.id, "delete")
                                }
                              >
                                <DeleteIcon className="product__lt__ques__q1__icon1__delete" />
                              </IconButton>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {!post.is_owner && (
                      <div className="product__lt__ques__q1__icon1">
                        {/* <IconButton style={{padding:"0"}} >
                        <EditIcon className="product__lt__ques__q1__icon1__edit" />
                      </IconButton> */}
                        <IconButton
                          style={{ padding: "0" }}
                          onClick={() => this.handleDelete(obj.id)}
                        >
                          <DeleteIcon className="product__lt__ques__q1__icon1__delete" />
                        </IconButton>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Breakpoint>
        {!post.is_owner && (
          <Switch>
            <Route path={AUTH_BUY_FULL_QUESTION_PATH} exact>
              {(props) => <QuestionModal {...props} />}
            </Route>
          </Switch>
        )}
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    access: state.token.access,
    myDetails: state.myDetails.myDetails,
    loading: state.post.loading,
    isLoggedIn: state.token.isLoggedIn,
    post: ownProps.match.params.id
      ? state.post.posts[ownProps.match.params.id]
      : {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrievePostDispatch: (postId) => dispatch(retrievePost(postId)),
    getTokenDispatch: () => dispatch(getToken()),
    openSnackbarDispatch: (errorMessage) =>
      dispatch(openSnackbar(errorMessage)),
    deleteQuestionDispatch: (questionId, postId) =>
      dispatch(deleteQuestion(questionId, postId)),
    answerQuestionDispatch: (answer, postId, questionId, action) =>
      dispatch(answerQuestion(answer, postId, questionId, action)),
    postSavedDispatch:(postId,userId,verb)=>dispatch(PostSave(postId,userId,verb))  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostFull);