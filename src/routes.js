"use strict";

import React from 'react'; //eslint-disable-line no-unused-vars
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/homePage';
import Author from './components/authors/authorPage';
import About from './components/about/aboutPage';
import ManageAuthor from './components/authors/manageAuthor';
import NotFound from './components/notFoundPage';

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="authors" component={Author}/>
        <Route path="about" component={About}/>
        <Route path="author" component={ManageAuthor}/>
        <Route path="author/:id" component={ManageAuthor}/>
        <Route path="*" component={NotFound}/>
    </Route>
);

export default routes;
