import React, { Component } from "react";
import { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import Box from "@material-ui/core/Box";
import { Breakpoint } from "react-socks";
import {
  Radio,
  FormControlLabel,
} from "@material-ui/core";

export default function Sell() {
  const [category, setCategory] = React.useState("");
  const [subcategory, setsubCateg] = React.useState("");
  const [color, setcolor] = React.useState("");
  const [condn, setcondn] = React.useState("");
  const [title, settitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [brand, setBrand] = React.useState("");

  const onHandleChange = (event) => {
    event.preventDefault();
    
    setcolor(event.target.value);
    setDesc(event.target.value);
    setBrand(event.target.value);
  };
  const updateCategory = (event) => {
    event.preventDefault();
    setCategory(event.target.value);
   
  };
  const updateSubCateg = (event) => {
    event.preventDefault();
    setsubCateg(event.target.value);
   
  };
  const updateColor = (event) => {
    event.preventDefault();
    setcolor(event.target.value);
   
  };
  const updateCondn = (event) => {
    event.preventDefault();
    setcondn(event.target.value);
   
  };



  return (
    <React.Fragment>
    <Breakpoint large up>
      <div className="outer1">
      <h1>Sell your Product</h1>
      <Grid container spacing className="outer1__sell">
      <Grid item xs={7} className="outer1__sell__lt">
       
        <form className="outer1__sell__lt">
         
          <div className="outer1__sell__lt__outer">
            <div className="outer__sell__lt__outer__categ">
              <div className="login__right__myForm__formData">
                <label htmlFor="name">Category</label>
                <br />
                <Box sx={{ minWidth: 120 }} style={{paddingTop:"10px"}}>
                  <Select
                    id="demo-simple-select"
                    value={category}
                    displayEmpty
                    variant="outlined"
                    label="Category"
                    onChange={updateCategory}
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    <MenuItem value={1}>Electronics</MenuItem>
                    <MenuItem value={2}>Mobiles</MenuItem>
                    <MenuItem value={3}>Appliances</MenuItem>
                    <MenuItem value={4}>Home</MenuItem>
                    <MenuItem value={5}>Vehicles</MenuItem>
                  </Select>
                </Box>
              </div>
            </div>
            <div className="outer1__sell_lt__outer__subcate">
              <div className="login__right__myForm__formData">
                <label htmlFor="name">Sub-Category</label>
                <br />
                <Box sx={{ minWidth: 120 }} style={{paddingTop:"10px"}}>
                  <Select
                    id="demo-simple-select"
                    value={subcategory}
                    displayEmpty
                    variant="outlined"
                    label="Sub-Category"
                    onChange={updateSubCateg}
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    <MenuItem value={1}>SamSung</MenuItem>
                    <MenuItem value={2}>Realme</MenuItem>
                    <MenuItem value={3}>Oppp</MenuItem>
                    <MenuItem value={4}>Vivo</MenuItem>
                    <MenuItem value={5}>Apple</MenuItem>
                  </Select>
                </Box>
              </div>
            </div>
          </div>
          
        
          <div className="outer1__sell__lt__outer">
            <div className="outer1__sell__lt__outer__categ">
            <div className="login__right__myForm__formData">
                <label htmlFor="name">Color</label>
                <br />
                <Box sx={{ minWidth: 200 }} style={{paddingTop:"10px"}}>
                  <Select
                    id="demo-simple-select"
                    value={color}
                    displayEmpty
                    variant="outlined"
                    label="Color"
                    onChange={updateCondn}
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    <MenuItem value={1}>Blue</MenuItem>
                    <MenuItem value={2}>Red</MenuItem>
                    <MenuItem value={3}>Yellow</MenuItem>
                    <MenuItem value={4}>Orange</MenuItem>
                    <MenuItem value={5}>Green</MenuItem>
                  </Select>
                </Box>
              </div>
            </div>
            <div className="outer1__sell_lt__outer__subcate">
            <div className="outer1__sell_lt__outer__brand">
            <div className="login__right__myForm__formData">
            <label htmlFor="name">Brand</label>
            <br />
            <TextField
              onChange={onHandleChange}
              required
              className="login__right__myForm__formData__username"
              name="brand"
              variant="outlined"
            ></TextField>
          </div>
            </div>
            </div>
          </div>

          <div className="outer1__sell__lt__outer">
            <div className="outer1__sell__lt__outer__categ">
              <div className="login__right__myForm__formData">
                <label htmlFor="name">Condition</label>
                <br />
                <Box sx={{ minWidth: 120 }} style={{paddingTop:"10px"}}>
                  <Select
                    id="demo-simple-select"
                    value={condn}
                    displayEmpty
                    variant="outlined"
                    label="Condition"
                    onChange={updateCondn}
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    <MenuItem value={1}>Good</MenuItem>
                    <MenuItem value={2}>Fair</MenuItem>
                    <MenuItem value={3}>Excellent</MenuItem>
                  </Select>
                </Box>
              </div>
            </div>
            <div className="outer1__sell__lt__outer__subcate">
            <div className="login__right__myForm__formData">
            <label htmlFor="name">Price</label>
            <br />
            <TextField
              className="outer1__sell__lt__outer__subcate__tf"
              id="filled-number"
              placeholder="Range"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </div>
            </div>
           
           
          </div>

           
          <div className="login__right__myForm__formData">
            <label htmlFor="name">Title</label>
            <br />
            <TextField
              onChange={onHandleChange}
              required
              className="login__right__myForm__formData__username"
              name="title"
              variant="outlined"
            ></TextField>
          </div>
          <div className="login__right__myForm__formData">
            <label htmlFor="name">Description</label>
            <br />
            <TextField
              onChange={onHandleChange}
              required
              name="desc"
              className="login__right__myForm__formData__username"
              variant="outlined"
            ></TextField>
          </div>
          <div className="outer1__sell__lt__btn">
            <Button>Submit</Button>
          </div>
        </form>
      </Grid>
      <Grid item xs={5} className="outer1__sell__rt">
      <div className="outer1__sell__rt__box">
          <div className="outer1__sell__rt__box__coin">
            <div><OfflineBoltIcon/></div>
          <  h1>50</h1>
          </div>
          <h2> Trade coin Balance</h2>
        </div>
        <h3>Types of Ads</h3>
      <div className="outer1__sell__rt__radio">
      <FormControlLabel
                    className="sidebar__cont__section__item__list__label"
                    control={
                      <Radio
                      // checked={state.checkedF}
                      // onChange={handleChange}
                      // name="checkedF"
                      />
                    }
                    label="Free Ad"
                  />
                  <div><OfflineBoltIcon/></div>
                  0 / Month

      </div>



      </Grid>
    </Grid>

      </div>
    
    </Breakpoint>

        {/* <Breakpoint medium down>
        <Grid container spacing={4} className="sell">
      <Grid item xs={6} className="sell__lt">
        <h1>Sell your Product</h1>
        <form className="sell__lt">
          <div className="login__right__myForm__formData">
            <label htmlFor="name">Title</label>
            <br />
            <TextField
              onChange={onHandleChange}
              required
              className="login__right__myForm__formData__username"
              name="title"
              variant="outlined"
            ></TextField>
          </div>
          <div className="sell__lt__outer">
            <div className="sell__lt__outer__categ">
              <div className="login__right__myForm__formData">
                <label htmlFor="name">Category</label>
                <br />
                <Box sx={{ minWidth: 120 }} style={{paddingTop:"10px"}}>
                  <Select
                    id="demo-simple-select"
                    value={category}
                    displayEmpty
                    variant="outlined"
                    label="Category"
                    onChange={updateCategory}
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    <MenuItem value={1}>Electronics</MenuItem>
                    <MenuItem value={2}>Mobiles</MenuItem>
                    <MenuItem value={3}>Appliances</MenuItem>
                    <MenuItem value={4}>Home</MenuItem>
                    <MenuItem value={5}>Vehicles</MenuItem>
                  </Select>
                </Box>
              </div>
            </div>
            <div className="sell_lt__outer__subcate">
              <div className="login__right__myForm__formData">
                <label htmlFor="name">Sub-Category</label>
                <br />
                <Box sx={{ minWidth: 120 }} style={{paddingTop:"10px"}}>
                  <Select
                    id="demo-simple-select"
                    value={subcategory}
                    displayEmpty
                    variant="outlined"
                    label="Sub-Category"
                    onChange={updateSubCateg}
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    <MenuItem value={1}>SamSung</MenuItem>
                    <MenuItem value={2}>Realme</MenuItem>
                    <MenuItem value={3}>Oppp</MenuItem>
                    <MenuItem value={4}>Vivo</MenuItem>
                    <MenuItem value={5}>Apple</MenuItem>
                  </Select>
                </Box>
              </div>
            </div>
          </div>
         
          <div className="login__right__myForm__formData">
            <label htmlFor="name">Price</label>
            <br />
            <TextField
              className="sell__lt__tf"
              id="filled-number"
              placeholder="Range"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </div>
         

          <div className="sell__lt__outer">
            <div className="sell__lt__outer__categ">
              <div className="login__right__myForm__formData">
                <label htmlFor="name">Condition</label>
                <br />
                <Box sx={{ minWidth: 120 }} style={{paddingTop:"10px"}}>
                  <Select
                    id="demo-simple-select"
                    value={condn}
                    displayEmpty
                    variant="outlined"
                    label="Condition"
                    onChange={updateCondn}
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    <MenuItem value={1}>Good</MenuItem>
                    <MenuItem value={2}>Fair</MenuItem>
                    <MenuItem value={3}>Excellent</MenuItem>
                  </Select>
                </Box>
              </div>
            </div>
            <div className="sell_lt__outer__subcate">
              <div className="login__right__myForm__formData">
                <label htmlFor="name">Color</label>
                <br />
                <Box sx={{ minWidth: 200 }} style={{paddingTop:"10px"}}>
                  <Select
                    id="demo-simple-select"
                    value={color}
                    displayEmpty
                    variant="outlined"
                    label="Color"
                    onChange={updateCondn}
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    <MenuItem value={1}>Blue</MenuItem>
                    <MenuItem value={2}>Red</MenuItem>
                    <MenuItem value={3}>Yellow</MenuItem>
                    <MenuItem value={4}>Orange</MenuItem>
                    <MenuItem value={5}>Green</MenuItem>
                  </Select>
                </Box>
              </div>
            </div>
          </div>
         
          <div className="sell__lt__btn">
            <Button>Submit</Button>
          </div>
        </form>
      </Grid>
      <Grid item xs={6} className="sell__rt">
        <div className="sell__rt__box">
          <div className="sell__rt__box__coin">
            <div><OfflineBoltIcon/></div>
          <h1>50</h1>
          </div>
          <h2> Trade coin Balance</h2>
        </div>
      </Grid>
    </Grid>

        </Breakpoint> */}
        </React.Fragment>
  );
}
