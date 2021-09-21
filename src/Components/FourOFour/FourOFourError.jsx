import React from 'react'
import { Link } from 'react-router-dom';
import FourOFour from '../../assets/FourOFour.svg';
import WebsiteLogo from '../../assets/WebsiteLogo.svg';
export default function FourZeroFour() {
    return (
        <div className="four">
            {/* <div className="four__top">
            <img src={WebsiteLogo} className="four__top__img"/>
                TradeIn
            </div> */}
           
            <img src={FourOFour} className="four__img"/>
            {/* <Link to="/" className="four__btn">Back to Home</Link> */}
        </div>
    )
}
