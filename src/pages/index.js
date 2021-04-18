import * as React from "react"
import MainWrapper from "../config/MainWrapper"
import Homepage from "../containers/Homepage/Homepage"

const IndexPage = () => {
    var pageName = "Mockaroo Api"
    var pageDescription = ""
    return (
        <main>
            <MainWrapper pageName={pageName} description={pageDescription}>
                <Homepage />
            </MainWrapper>
        </main>
    )
}

export default IndexPage
