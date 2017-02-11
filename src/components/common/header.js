"use strict";

import React from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="images/site-logo.png" style={{
                            height: '25px',
                            width: '25px'
                        }}/>
                    </Link>
                    <ul className="nav navbar-nav">
                        <li>
                            <IndexLink activeClassName="nav-active" to="/">Home</IndexLink>
                        </li>
                        <li>
                            <Link activeClassName="nav-active" to="about">About</Link>
                        </li>
                        <li>
                            <Link activeClassName="nav-active" to="authors">Authors</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
