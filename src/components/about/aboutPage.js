"use strict";

import React from 'react'

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Nodet</li>
                        <li>Webpackt</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
}

export default About;
