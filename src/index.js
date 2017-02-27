"use strict";

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/toastr/build/toastr.css';

import React from 'react'; //eslint-disable-line no-unused-vars
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import ReactDom from 'react-dom';

ReactDom.render(
    <Router history={browserHistory} routes={routes}/>, document.getElementById('app'));
