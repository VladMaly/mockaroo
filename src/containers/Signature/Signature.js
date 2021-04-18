import React, { Component } from "react"
import "./Signature.scss"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
// import { useSelector, useDispatch } from "react-redux"
// import { increment, selectCount } from "../../redux/features/counter/counterSlice"

class Signature extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }
    render() {
        console.log("data")
        console.log(this.props.data)
        // console.log(useSelector(state => state.counter));
        // const dispatch = useDispatch()
        return (
            <div className="signature-container">
                <div>By Jamie Aveline/Vladimir Maly</div>
                <Img fixed={this.props.data && this.props.data.file.childImageSharp.fixed} />
                {/* <div>{this.state.count}</div> */}
            </div>
        )
    }
}

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                file(relativePath: { eq: "king-regis-on-throne.jpg" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        # Makes it trivial to update as your page's design changes.
                        fixed(width: 1000, height: 1000) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={(data) => <Signature data={data} {...props} />}
    />
)
