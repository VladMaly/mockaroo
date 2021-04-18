import React, { Component } from "react"
import SEO from "./seo"
// import { ThemeProvider } from "@material-ui/core/styles"
// import theme from "./theme"
// import "../styles/global.scss"
// import * as serviceWorker from "./serviceWorker"
import store from "../redux/store"
import { Provider } from "react-redux"
import analyticsLayerEvents from "../analytics/analyticsLayer"

const pageStyles = {
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

class MainWrapper extends Component {
    componentDidMount() {
        analyticsLayerEvents.onPageLoad();
    }
    render() {
        return (
            <>
                <SEO title={this.props.pageName} description={this.props.description} />
                <Provider store={store}>
                    <div style={pageStyles}>
                        {/* <ThemeProvider theme={theme}> */}
                            {this.props.children}
                        {/* </ThemeProvider> */}
                    </div>
                </Provider>
            </>
        )
    }
}

export default MainWrapper

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
