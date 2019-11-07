import React, { Component } from 'react'
import Img from 'gatsby-image'
import {PartnerWrapper} from './Style'

export default class Index extends Component {
    render() {
        const partners = this.props.data.edges;
        console.log(partners);
        return (
            <PartnerWrapper>
                <h2 className="section-title">Partners</h2>
                <div className="all-partners">
                {
                    partners.map( (partner, index) => (
                        <div key={index}>
                            <div className={partner.node.name.toLowerCase()} key={partner.name + '-' + index}>
                                <a href={partner.node.url}>
                                    <Img fixed={partner.node.image.childImageSharp.fixed} />
                                </a>
                            </div>
                        </div>
                    ) )
                }
                </div>
            </PartnerWrapper>
        )
    }
}
