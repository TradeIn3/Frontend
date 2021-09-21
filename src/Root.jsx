import React, { Component, useEffect } from "react";
import Login from "./Components/UnAuth/Login";
import { AUTH_HOME_PATH, UNAUTH_HOME_PATH, UNAUTH_LOGIN_PATH } from "./constants/routeConstants";
import {Route,Switch,Redirect} from 'react-router-dom';
import {getToken} from './redux/token/tokenActions';
import { connect } from "react-redux";
import FourOFourError from "./Components/FourOFour/FourOFourError";
import SnackBars from './SnackBars';
import SessionExpirePrompt from './SessionExpirePrompt';
import LandingPage from './Components/UnAuth/LandingPage';
import Home from './Components/Auth/Home';
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

        <UnAuthorizedRoute path={UNAUTH_HOME_PATH} exact>
          {(props) => <LandingPage {...props} />}
        </UnAuthorizedRoute>
        <UnAuthorizedRoute path={UNAUTH_LOGIN_PATH} exact>
          {(props) => <Login {...props} />}
        </UnAuthorizedRoute>
        <AuthorizedRoute path={AUTH_HOME_PATH} exact>
          {(props) => (
            //<Layout {...props}>
              <Home {...props} />
            //</Layout>
          )}
        </AuthorizedRoute>
        

        <Route path="*">
          {(props) =>
              <FourOFourError {...props} />
          }
        </Route>
      </Switch>
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
