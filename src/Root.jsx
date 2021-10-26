import React, { Component, useEffect } from "react";
import Login from "./Components/UnAuth/Login";
import {
  AUTH_BUY_EDIT_PATH,
  AUTH_BUY_FULL_PATH,
  AUTH_BUY_PATH,
  AUTH_DONATE_PATH,
  AUTH_EXCHANGE_PATH,
  AUTH_HOME_PATH,
  AUTH_SELL_PRODUCT,
  AUTH_ACCOUNT_PATH,
  AUTH_ORDERS_PATH,
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
import Account from "./Components/Account/Account";
import AccountDetails from "./Components/Account/AccountDetails";
import Layout from "./Components/Layout/Layout";
import MainLoader from "./Components/Loaders/MainLoader";
import PostCard from "./Components/Card/PostCard";
import Buy from "./Components/Auth/Buy";
import Donate from "./Components/Auth/Donate";
import Exchange from "./Components/Auth/Exchange";
import Sidebar from "./Components/Layout/Sidebar";
import { Breakpoint } from "react-socks";
import { Grid, Popper } from "@material-ui/core";
import PostFull from "./Components/PostFull/PostFull";
import DonateFull from "./Components/PostFull/DonateFull";
import ExchangeFull from "./Components/PostFull/ExchangeFull";
import QuestionModal from "./Components/PostFull/QuestionModal";
import Sell from "./Components/AddPost/Sell";
import EmptyData from "./Components/Skeleton/EmptyData";
import EditSell from "./Components/EditPost/EditSell";
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
      <AuthorizedRoute path={AUTH_BUY_EDIT_PATH} exact>
          {(props) => (
            <Layout {...props}>
              <EditSell {...props} />
            </Layout>
          )}
        </AuthorizedRoute>
        <Route path={AUTH_DONATE_PATH} exact>
          {(props) => (
            <Layout {...props}>
              <Breakpoint large up>
                <Grid container>
                  <Grid item xs={2} style={{ position: "relative" }}>
                    <Sidebar {...props}/>
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
        <Route path={AUTH_EXCHANGE_PATH} exact>
          {(props) => (
            <Layout {...props}>
              <Breakpoint large up>
                <Grid container>
                  <Grid item xs={2} style={{ position: "relative" }}>
                    <Sidebar {...props}/>
                  </Grid>
                  <Grid item xs={10}>
                    {" "}
                    <Exchange {...props} />
                  </Grid>
                </Grid>
              </Breakpoint>
              <Breakpoint medium down>
                <Exchange {...props} />
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
                    <Sidebar {...props}/>
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
        <AuthorizedRoute path={AUTH_SELL_PRODUCT} exact>
          {(props) => (
            <Layout {...props}>
              <Sell {...props} />
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
        <AuthorizedRoute path={AUTH_ACCOUNT_PATH} exact>
          {(props) => (
            <Layout {...props}>
              <Account {...props} />
            </Layout>
          )}
        </AuthorizedRoute>
        <AuthorizedRoute path={AUTH_ORDERS_PATH} exact>
          {(props) => (
            <Layout {...props}>
              <AccountDetails {...props} />
            </Layout>
          )}
        </AuthorizedRoute>

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
