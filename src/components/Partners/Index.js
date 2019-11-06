import React, { Component } from 'react'
import Img from 'gatsby-image'
import {PartnerWrapper} from './Style'

export default class Index extends Component {
    render() {
        const partners = this.props.data.edges;
        // console.log(partners);
        return (
            <PartnerWrapper>
                <h2 class="section-title">Partners</h2>
                {
                    partners.map( (partner, index) => (
                        <div key={index}>
                         {partner.node.meetups.map( (meetup, index) => (
                            meetup.name === "gatsby_meetup_01" && 
                            <div className={partner.node.name.toLowerCase()} key={meetup.name + '-' + index}>
                                <a href={partner.node.url}>
                                    <Img fixed={partner.node.image.childImageSharp.fixed} />
                                </a>
                            </div>
                         ) )}   
                        </div>
                    ) )
                }
            </PartnerWrapper>
        )
    }
}
