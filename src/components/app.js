"use strict";

import React from 'react'; //eslint-disable-line no-unused-vars
import Header from './common/header';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
                <Header/>
                <div className="container-fluid">
                  {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
