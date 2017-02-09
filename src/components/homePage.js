"use strict";

import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="jumbotron">
                <h1>Site Administration</h1>
                <p>React,React Router, and Flux for ultra-responsive web apps.</p>
            </div>
        );
    }
}
export default Home;
