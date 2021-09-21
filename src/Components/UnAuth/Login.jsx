import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Button,
  DialogContentText,
  FormControl,
  InputAdornment,
  IconButton,
  DialogTitle,
  FormHelperText,
  LinearProgress,
} from "@material-ui/core";
import LoginImage from "../../assets/LoginImage.svg";
import WebsiteLogo from "../../assets/WebsiteLogo.svg";
import LoginBg from "../../assets/LoginBg.svg";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import CloseIcon from "@material-ui/icons/Close";
import { withRouter } from "react-router-dom";
import { loginAction } from "../../redux/token/tokenActions";
import { connect } from "react-redux";
class Login extends Component {
  state = {
    username: "",
    password: "",
    usernameValid: "",
    showPassword: false,
    passwordValid: "",
    formValid: "",
    formErrors: {
      username: "",
      password: "",
    },
  };
  onHandleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;
    switch (fieldName) {
      case "username":
        usernameValid = value.match(/^[A-Za-z0-9_@]{3,63}$/);
        fieldValidationErrors.username = usernameValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 8;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        usernameValid: usernameValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid: this.state.usernameValid && this.state.passwordValid,
    });
  }
  onHandleSubmit = async (e) => {
    e.preventDefault();
    const { loading, success } = this.props;
    const { username, password, formValid } = this.state;

    // if (!success && !loading && formValid) {
    await this.props.loginDispatch(username, password, "login");
    // }
  };
  handleClose = () => {
    this.props.history.push("/");
  };
  render() {
    const { showPassword, formErrors, formValid, username, password } =
      this.state;
    const { loading, success } = this.props;
    console.log(this.state);
    return (
      <React.Fragment>
        <Breakpoint large up>
          <Dialog
            open={true}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth
            maxWidth="lg"
          >
            <DialogTitle id="form-dialog-title"></DialogTitle>
            <DialogContent style={{ overflow: "hidden", height: "30rem" }}>
              <div className="login">
                <div className="login__left">
                  <div className="login__left__logo">
                    <img src={WebsiteLogo} />
                    <h1>TradeIn</h1>
                  </div>
                  <p>A better place to buy and sell products</p>
                  <h2>Welcome back!</h2>
                  <div className="login__left__loginImage">
                    <img src={LoginImage} />
                  </div>
                </div>
                <div className="login__right">
                  {loading && <LinearProgress style={{ height: "5.5px" }} />}
                  <h2>Login to your account</h2>
                  <form
                    className="login__right__myForm"
                    onSubmit={this.onHandleSubmit}
                  >
                    <div className="login__right__myForm__formData">
                      <label htmlFor="name">Username</label>
                      <br />
                      <TextField
                        onChange={this.onHandleChange}
                        required
                        className="login__right__myForm__formData__username"
                        name="username"
                        value={username}
                        variant="outlined"
                      ></TextField>
                      <FormHelperText className="errormessage">
                        {formErrors.username}
                      </FormHelperText>
                    </div>
                    <div className="login__right__myForm__formData">
                      <label htmlFor="pass">Password</label>
                      <br />
                      <TextField
                        type="password"
                        required
                        value={password}
                        onChange={this.onHandleChange}
                        className="login__right__myForm__formData__username"
                        variant="outlined"
                        name="password"
                        // InputProps={{
                        //   endAdornment: (
                        //     <InputAdornment position="end">
                        //       <IconButton
                        //         aria-label="toggle password visibility"
                        //         // onClick={this.handleClickShowPassword}
                        //         style={{ fontSize: "1rem" }}
                        //       >
                        //         {showPassword ? (
                        //           <VisibilityIcon />
                        //         ) : (
                        //           <VisibilityOffIcon />
                        //         )}
                        //       </IconButton>
                        //     </InputAdornment>
                        //   ),
                        // }}
                      ></TextField>
                      <FormHelperText className="errormessage">
                        {formErrors.password}
                      </FormHelperText>
                    </div>

                    <div className="login__right__myForm__pass">
                      Forgot Password?
                    </div>
                    <Button
                      disabled={!formValid || loading}
                      onClick={this.onHandleSubmit}
                      className={!formValid || loading ? "login__right__myForm__loginButton__disable"  :"login__right__myForm__loginButton"}
                      type="submit"
                    >
                      Login
                    </Button>
                    <div className="login__right__myForm__signup">
                      New to TradeIn?&nbsp;
                      <a href="#">Create Account</a>
                    </div>
                  </form>
                </div>
              </div>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </Breakpoint>
        <Breakpoint medium down>
          <Dialog
            open={true}
            aria-labelledby="form-dialog-title"
            fullWidth
            fullScreen
            maxWidth="lg"
          >
            <DialogTitle id="form-dialog-title"></DialogTitle>
            <DialogContent style={{ overflow: "hidden" }}>
              <div className="loginMobo">
                <img src={LoginBg} className="loginMobo__bgImage" />
                <div className="loginMobo__logo">
                  <img src={WebsiteLogo} />
                </div>
                <h2>Login</h2>
                <FormControl className="loginMobo__myForm">
                  <div className="loginMobo__myForm__formData">
                    <TextField
                      className="loginMobo__myForm__formData__username"
                      name="username"
                      variant="outlined"
                      placeholder="Username"
                    ></TextField>
                  </div>
                  <div className="loginMobo__myForm__FormData">
                    <TextField
                      className="loginMobo__myForm__formData__username"
                      name="password"
                      variant="outlined"
                      placeholder="Password"
                    ></TextField>
                  </div>
                  <a className="loginMobo__myForm__pass">Forgot Password?</a>
                  <Button type="submit">Login</Button>
                  <div className="loginMobo__myForm__signup">
                    New to TradeIn?&nbsp;
                    <a href="#">Create Account</a>
                  </div>
                </FormControl>
              </div>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </Breakpoint>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.token.loading,
    success: state.token.success,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginDispatch: (username, password, value) =>
      dispatch(loginAction(username, password, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
