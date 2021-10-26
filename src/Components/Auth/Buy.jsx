import React, { Component } from "react";
import Navbar from "../Layout/Navbar";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Select,
} from "@material-ui/core";
import PostCard from "../Card/PostCard";
import { retrievePost } from "../../redux/post/postActions";
import { connect } from "react-redux";
import CardSkeleton from "../Skeleton/CardSkeleton";
import PostFull from "../PostFull/PostFull";
import { Link, Switch, Route } from "react-router-dom";
import { AUTH_BUY_FULL_PATH } from "../../constants/routeConstants";
import EmptyData from "../Skeleton/EmptyData";
class Buy extends Component {
  state={
    sort: new URLSearchParams(this.props.location.search).get("sort")
  }
  render() {
    const { loading, posts } = this.props;
    const {sort} = this.state;
    return (
      <div>
        <div className="buy">
          <div className="buy__head">
            Search results <span>({posts.length}{posts.length<=1 ? " result" : " results"})</span>
          </div>
          <div className="buy__filter">
            <div className="buy__filter__chips"></div>
            <FormControl className="buy__filter__form" variant="outlined">
              <Select
                native
                className="buy__filter__select"
                 value={sort}
                //  onChange={handleChange}
                inputProps={{
                  name: "sort",
                  id: "outlined-age-native-simple",
                }}
              >
                <option value={"best"} onClick={()=>this.props.history.push("/buy")}>Sort by best match</option>
                <option value={"new"} onClick={()=>this.props.history.push("/buy?sort=new")}>Sort by newest first</option>
                <option value={"low"}onClick={()=>this.props.history.push("/buy?sort=lowest")}>Sort by lowest price first</option>
                <option value={"high"}onClick={()=>this.props.history.push("/buy?sort=highest")}>Sort by hightest price first</option>
              </Select>
            </FormControl>
          </div>
        </div>
        <Grid container spacing={3} style={{ width: "100%", margin: "0" }}>
         
            {loading ? (
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                <Grid
                item
                lg={3}
                md={3}
                sm={6}
                xs={12}
                style={{ marginBottom: "1rem" }}
              >
                  <CardSkeleton />
                  </Grid>
              ))
            ) : posts.length == 0 ? (
              <EmptyData />
            ) : (
              posts.map((item) => (
                <Grid
                item
                lg={3}
                md={3}
                sm={6}
                xs={12}
                style={{ marginBottom: "1rem" }}
              >
                <Link to={`/buy/${item.id}`}>
                  <PostCard item={item} />
                </Link>
                </Grid>
              ))
            )}
         
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const  posts= state.post.allPost;
  const buyPost = posts.filter((obj)=> !obj.is_barter && !obj.is_donate)
  return {
    loading: state.post.loading,
    posts: buyPost,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
