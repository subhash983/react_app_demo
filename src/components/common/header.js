"use strict";

import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img src="images/site-logo.png" style={{height:'25px',width:'25px'}}/>
                    </a>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/#about">About</a>
                        </li>
                        <li>
                            <a href="/#authors">Authors</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
