/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import PropTypes from "prop-types"
import React, { Component } from 'react'
import {ThemeProvider} from 'styled-components'
import {InitialTheme} from '../utils/GlobalStyle'

import Header from "./Header/header"
import "./layout.css"
import Footer from './Footer'



class Layout extends Component{
  
  render(){
    return(
      <ThemeProvider theme={InitialTheme}>
        <div id="gatsby-meetup-01">
          <Header siteTitle="" />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 0`,
              paddingTop: 0,
            }}
          >
            <main>{this.props.children}</main>
          </div>
          <Footer/>
        </div>
      </ThemeProvider>
    )
  }
}


export default Layout
