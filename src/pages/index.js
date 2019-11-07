import React, {Component} from "react"
import {  graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import Hero from '../components/Hero'
import Location from "../components/Location/Index"
import Schedule from "../components/Schedule/Index"
import Speakers from "../components/Speakers/Index"
import Partners from "../components/Partners/Index"

class IndexPage extends Component {
  render(){
    const data = this.props.data;
    return(
      <Layout>
        <SEO title="Gatsby Meetup #01, Bangladesh" />
        {/* <Hero/> */}
        <Speakers data={data.allStrapiSpeakers}/>
        <Schedule/>
        <Location/>
        <Partners data={data.allStrapiPartners}/>
      </Layout>
    )
  }
  
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allStrapiSpeakers{
      edges {
        node {
          id
          Name
          Designation
          topic_of_talk
          speaker_image {
            childImageSharp {
              # fluid(maxWidth:300) {
              #   ...GatsbyImageSharpFluid
              # }
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          meetup {
            name
            id
          }
        }
      }
    }
    allStrapiPartners {
      edges {
        node {
          name
          url
          meetups {
            name
          }
          image {
            childImageSharp {
              fixed(width:300){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
  
`
