"use strict";

import React from 'react';
import {Link} from 'react-router'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="jumbotron">
                <h1>Site Administration</h1>
                <p>React,React Router, and Flux for ultra-responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}
export default Home;
