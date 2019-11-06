import React, { Component } from 'react'
import {SpeakerWrapper} from './Style'
import Img from 'gatsby-image'

export default class Index extends Component {
    render() {
        const speakers = this.props.data;
        console.log(speakers);
        return (
            <SpeakerWrapper>
                <h2 className="section-title">Speakers</h2>
                {
                    speakers.edges.map( (speaker, index) => (
                        <div className="single-speaker" key={index}>
                            <div className="image">
                                {
                                speaker.node.speaker_image.childImageSharp && 
                                <Img fixed={speaker.node.speaker_image.childImageSharp.fixed} />
                                }
                            </div>
                            <div className="bio">
                                <p className="name">
                                    {speaker.node.Name}
                                </p>
                                <p className="designation">
                                    {speaker.node.Designation}
                                </p>
                                <p className="description">
                                    Topic : {speaker.node.topic_of_talk}
                                </p>

                            </div>
                        </div>
                    ) )
                }
            </SpeakerWrapper>
        )
    }
}
