import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {LocationWrapper} from "./Style"
import Img from "gatsby-image";

export const MapImage = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "location.png" }) {
          childImageSharp {
            fixed(width:50){
                ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)
  
    return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}


export default class Index extends Component {
    render() {
        return (
            <LocationWrapper>
                <h2 className="section-title">Date and Time</h2>
                <p className="time">9th November, 2019 at 3.00 PM</p>
                <MapImage/>
                <p className="place">
                ThemeXpert, Level - 12, Suite - 1202, SEL HUQ SKYPARK<br/>
                23/2 Mirpur Rd, Dhaka 1207, Bangladesh
                </p>
            </LocationWrapper>
        )
    }
}
