import { Button } from '@material-ui/core'
import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Navbar from '../Layout/Navbar'
import UnAuthHome from '../../assets/UnAuthHome.svg';
import WebsiteLogo from '../../assets/WebsiteLogo.svg';
import { UNAUTH_LOGIN_PATH } from '../../constants/routeConstants';
import Login from './Login';
export default function LandingPage() {
    return (
        <>
        <div className="unauthhome">
            <div className="unauthhome__top">
                <div className="unauthhome__top__lft">
                    <img src={WebsiteLogo} alt="" />
                    <div className="unauthhome__top__lft__ttl">TradeIn</div>
                </div>
                <div className="unauthhome__top__rgt">
                <Link className="unauthhome__top__rgt__login" to ="/login">Login</Link>
                <Link className="unauthhome__top__rgt__sign" to ="/signup">Sign Up</Link>
                </div>
            </div>
           <div className="unauthhome__mid">
               <div className="unauthhome__mid__lft">A place to <span>Buy</span> <br></br> old items.</div>
               <img src={UnAuthHome} alt="" />
           </div>
        </div>
        <Switch>
            <Route path={UNAUTH_LOGIN_PATH} exact>
               {(props)=> <Login {...props}/>}
            </Route>
        </Switch>
        </>
    )
}
