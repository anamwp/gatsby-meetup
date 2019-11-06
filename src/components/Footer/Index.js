import React, { Component } from 'react'
import {FooterWrapper} from './Style'

export default class Index extends Component {
    render() {
        return (
            <FooterWrapper>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </FooterWrapper>
        )
    }
}
