"use strict";
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import '../../node_modules/toastr/build/toastr.css';

import React from 'react';
import {Link} from 'react-router';

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
