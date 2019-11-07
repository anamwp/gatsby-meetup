import React, { Component } from "react"
import {ScheduleWrapper} from "./Style"

export default class Index extends Component {
    render() {
        return (
            <ScheduleWrapper>
                <h2 className="section-title">Schedule</h2>
                <div className="schedule">
                    <p>
                        <code>3.00 PM</code>
                        <span>Gathering</span>
                    </p>
                    <p>
                        <code>3.15 PM</code>
                        <span>Opening Speech</span>
                    </p>
                    <p>
                        <code>3.20 PM</code>
                        <span>What is Gatsby and How to get started</span>
                    </p>
                    <p>
                        <code>4.00 PM</code>
                        <span>Build a blog with Gatsby and WordPress</span>
                    </p>
                    <p>
                        <code>4.20 PM</code>
                        <span>Break & Prayer Time</span>
                    </p>
                    <p>
                        <code>4.40 PM</code>
                        <span>Gatsby Theme Authoring</span>
                    </p>
                    <p>
                        <code>5.00 PM</code>
                        <span>Getting started with GraphQL</span>
                    </p>
                    <p>
                        <code>5.20 PM</code>
                        <span>Break & Prayer Time</span>
                    </p>
                    <p>
                        <code>5.40 PM</code>
                        <span>Migrating from Rest to GraphQL</span>
                    </p>
                    <p>
                        <code>6.00 PM</code>
                        <span>Present and Future of Gatsby</span>
                    </p>
                    <p>
                        <code>6.20 PM</code>
                        <span>Questions, Answer & Case Study</span>
                    </p>


                </div>
            </ScheduleWrapper>
        )
    }
}

