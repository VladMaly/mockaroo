import * as React from "react"
import MainWrapper from "../config/MainWrapper"
import Signature from "../containers/Signature/Signature"

const IndexPage = () => {
    var pageName = ""
    var pageDescription = "";
    return (
        <main>
            <MainWrapper pageName={pageName} description={pageDescription}>
                <Signature />
            </MainWrapper>
        </main>
    )
}

export default IndexPage
