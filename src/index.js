import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

import React from 'react'; //eslint-disable-line no-unused-vars
import ReactDom from 'react-dom';
import Home from './components/homePage';
import About from './components/about/aboutPage';
import Header from './components/common/header';
import Authors from './components/authors/authorPage';

(function(win) {
    "use strict";
    class App extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            var Child;
            switch (this.props.route) {
                case 'about':
                    Child = About;
                    break;
                case 'authors':
                    Child = Authors;
                    break;
                default:
                    Child = Home
            }
            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }
    }
    function render() {
        var route = window.location.hash.substr(1);
        ReactDom.render(
            <App route={route}/>, document.getElementById('app'));
    }
    win.addEventListener('hashchange', render)
    render();
}(window));
