import React, { Component } from "react"
import {SpeakerWrapper} from "./Style"
import SpeakerImage from './SpeakerImage'

export default class Index extends Component {
    render() {
        const speakers = this.props.data;
        
        return (
            <SpeakerWrapper>
                <h2 className="section-title">Speakers</h2>
                {
                    speakers.edges.map( (speaker, index) => (
                        <div className="single-speaker" key={index}>
                            <div className="image">
                                <SpeakerImage data={speaker.node.speaker_image}/>
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
