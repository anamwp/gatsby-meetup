import React, { Component } from 'react'
import Img from "gatsby-image"


export default class SpeakerImage extends Component {
    render() {
        const data = this.props.data;
        return (
            <>
                <Img fluid={data.childImageSharp.fluid}/>
            </>
        )
    }
}
