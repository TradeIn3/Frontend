import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import { getCategories } from "../../utils/Utils";
import NoProfileImage from "../../assets/NoProfile.svg";
import { Button, Grid, TextField } from "@material-ui/core";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      district: "",
      city: "",
      pincode: "",
      phone: "",
    };
  }

  onHandleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      // this.validateField(name, value);
    });
  };
  render() {
    const categories = getCategories();
    return (
      // <>
      //   <Breakpoint large up>
      //     <div>
      //       {Object.keys(categories).map((item) => {
      //         return <div>{item}</div>;
      //       })}
      //     </div>
      //   </Breakpoint>

      //   <Breakpoint medium down>

      //   </Breakpoint>
      // </>
      <div className="address">
        <form className="address__details">
          <Grid container spacing={2} className="address__details">
            <Grid item xs={12} className="address__details__add">
              <div className="login__right__myForm__formData">
                <label htmlFor="name">Address</label>
                <br />
                <TextField
                  onChange={this.onHandleChange}
                  required
                  name="address"
                  multiline
                  value={this.state.address}
                  className="login__right__myForm__formData__username"
                  variant="outlined"
                ></TextField>
              </div>
            </Grid>
            <Grid item xs={6} className="address__details__district">
              <div className="login__right__myForm__formData">
                <label htmlFor="name">District</label>
                <br />
                <TextField
                  onChange={this.onHandleChange}
                  required
                  style={{ paddingTop: "10px", width: "100%" }}
                  className="login__right__myForm__formData__username"
                  name="district"
                  value={this.state.district}
                  placeholder="District"
                  variant="outlined"
                  className="login__right__myForm__formData__select"
                ></TextField>
              </div>
            </Grid>
            <Grid item xs={6} className="address__details__city">
              <div className="login__right__myForm__formData">
                <label htmlFor="name">City</label>
                <br />
                <TextField
                  onChange={this.onHandleChange}
                  required
                  style={{ paddingTop: "10px", width: "100%" }}
                  className="login__right__myForm__formData__username"
                  name="city"
                  value={this.state.city}
                  placeholder="City"
                  variant="outlined"
                  className="login__right__myForm__formData__select"
                ></TextField>
              </div>
            </Grid>
            <Grid item xs={6} className="address__details__pin">
              <div className="login__right__myForm__formData">
                <label htmlFor="name">Pin Code</label>
                <br />
                <TextField
                  onChange={this.onHandleChange}
                  required
                  style={{ paddingTop: "10px", width: "100%" }}
                  className="login__right__myForm__formData__username"
                  name="pincode"
                  value={this.state.pincode}
                  placeholder="Pin Code"
                  variant="outlined"
                  className="login__right__myForm__formData__select"
                ></TextField>
              </div>
            </Grid>
            <Grid
              item
              xs={6}
              className="address__details__phone"
              style={{ paddingRight: "4px" }}
            >
              <div className="login__right__myForm__formData">
                <label htmlFor="name">Phone No</label>
                <br />
                <TextField
                  onChange={this.onHandleChange}
                  required
                  style={{ paddingTop: "10px", width: "100%" }}
                  className="login__right__myForm__formData__username"
                  name="phone"
                  value={this.state.phone}
                  placeholder="Phone No"
                  variant="outlined"
                  className="login__right__myForm__formData__select"
                ></TextField>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
