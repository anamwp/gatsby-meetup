import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {HeaderWrapper} from './Style'
import Img from 'gatsby-image';



const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "gatsby-white.png" }) {
        childImageSharp {
          fixed(width:100){
              ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return(
    <>
    <HeaderWrapper
      style={{
        background: `rebeccapurple`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        <h1>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle || data.site.siteMetadata.title }
          </Link>
        </h1>
        
      </div>
    </HeaderWrapper>
  </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
