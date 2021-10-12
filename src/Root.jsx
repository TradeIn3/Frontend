import React, { Component, useEffect } from "react";
import Login from "./Components/UnAuth/Login";
import {
  AUTH_BUY_FULL_PATH,
  AUTH_BUY_PATH,
  AUTH_DONATE_PATH,
  AUTH_HOME_PATH,
  UNAUTH_HOME_PATH,
  UNAUTH_LOGIN_PATH,
} from "./constants/routeConstants";
import { Route, Switch, Redirect } from "react-router-dom";
import { getToken } from "./redux/token/tokenActions";
import { connect } from "react-redux";
import FourOFourError from "./Components/FourOFour/FourOFourError";
import SnackBars from "./SnackBars";
import SessionExpirePrompt from "./SessionExpirePrompt";
import LandingPage from "./Components/UnAuth/LandingPage";
import Home from "./Components/Auth/Home";
import Layout from "./Components/Layout/Layout";
import MainLoader from "./Components/Loaders/MainLoader";
import PostCard from "./Components/Card/PostCard";
import Buy from "./Components/Auth/Buy";
import Donate from "./Components/Auth/Donate";
import Sidebar from "./Components/Layout/Sidebar";
import { Breakpoint } from "react-socks";
import { Grid, Popper } from "@material-ui/core";
import PostFull from "./Components/PostFull/PostFull";
import QuestionModal from "./Components/PostFull/QuestionModal";
function Root(props) {
  useEffect(() => {
    async function getToken() {
      await props.getTokenDispatch();
    }
    getToken();
  }, [props.isLoggedIn]);

  const AuthorizedRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          props.isLoggedIn ? (
            children(rest)
          ) : (
            <Redirect
              to={{
                pathname: `${UNAUTH_HOME_PATH}`,
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };
  const UnAuthorizedRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          !props.isLoggedIn ? (
            children(rest)
          ) : (
            <Redirect
              to={{
                pathname: `${AUTH_HOME_PATH}`,
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };

  return (
    <div className="config_css">
      <Switch>
        <Route path={AUTH_DONATE_PATH} exact>
          {(props) => (
            <Layout {...props}>
              <Breakpoint large up>
                <Grid container>
                  <Grid item xs={2} style={{ position: "relative" }}>
                    <Sidebar />
                  </Grid>
                  <Grid item xs={10}>
                    {" "}
                    <Donate {...props} />
                  </Grid>
                </Grid>
              </Breakpoint>
              <Breakpoint medium down>
                <Donate {...props} />
              </Breakpoint>
            </Layout>
          )}
        </Route>
        <Route path={AUTH_BUY_FULL_PATH}>
        {(props) => (
            <Layout {...props}>
              <PostFull {...props} />
            </Layout>
          )}
        </Route>
        <Route path={AUTH_BUY_PATH} exact>
          {(props) => (
            <Layout {...props}>
              <Breakpoint large up>
                <Grid container>
                  <Grid item xs={2} style={{ position: "relative" }}>
                    <Sidebar />
                  </Grid>
                  <Grid item xs={10}>
                    {" "}
                    <Buy {...props} />
                  </Grid>
                </Grid>
              </Breakpoint>
              <Breakpoint medium down>
                <Buy {...props} />
              </Breakpoint>
            </Layout>
          )}
        </Route>
        <AuthorizedRoute path={AUTH_HOME_PATH} exact>
          {(props) => (
            <Layout {...props}>
              <Home {...props} />
            </Layout>
          )}
        </AuthorizedRoute>
        <UnAuthorizedRoute path={UNAUTH_HOME_PATH} exact>
          {(props) => (
            <Layout {...props}>
              <Home {...props} />
            </Layout>
          )}
        </UnAuthorizedRoute>

        <Route path="*">
          <Layout {...props}>
            {" "}
            <FourOFourError {...props} />{" "}
          </Layout>
        </Route>
      </Switch>
      <Route path={UNAUTH_LOGIN_PATH}>{(props) => <Login {...props} />}</Route>
      <SessionExpirePrompt />
      <SnackBars />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.token.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTokenDispatch: () => dispatch(getToken()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
