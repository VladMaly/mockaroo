import React, { Component } from "react"
import "./Navigation.scss"
// import { default as logoSvg } from '../../images/Icons/logo.svg';
// import Button from "@material-ui/core/Button"
// import TextField from "@material-ui/core/TextField"
// import analytics from "../../analytics/analyticsHomepage"
// import analyticsLayerEvents from "../../analytics/analyticsLayer"

class Navigation extends Component {
    render() {
        return (
            <div className="navigation-container">
                <h1>Mockaroo API</h1>
                <div className="header-container">
                    <div className="title-logo">
                        <div>
                            {/* <div className="title-logo-main">
                                <img src={logoSvg} />
                            </div> */}
                            <div className="title-logo-secondary">
                                <h2>Mockaroo API</h2>
                                {/* <div>Aveline</div> */}
                            </div>
                        </div>
                    </div>
                    <div className="header-secondary">
                        <div>
                            {/* <h2></h2> */}
                        </div>
                    </div>
                </div>
                <div className="breaker-header">
                    <div className="divider div-transparent"></div>
                </div>
            </div>
        )
    }
}
export default Navigation
