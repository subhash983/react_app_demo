import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import {match, RouterContext} from 'react-router';
import routes from '../src/routes';
import {renderToString} from 'react-dom/server';
import React from 'react';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {publicPath: config.output.publicPath}));

app.use(express.static(path.join(__dirname, '../public')));

app.use(serverRender());

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '../src/index.html'));
// });
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../src/index.html'));
// });

app.use(serverRender);

app.listen(port, function(err) {
    if (err) {
        console.log(err); //eslint-disable-line no-console
    } else {
        open('http://localhost:' + port);
    }
});

function serverRender() {
    return function functionName(req, res, next) {
        match({
            routes,
            location: req.url
        }, (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message);
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            } else if (renderProps) {
                res.status(200).send(renderToString(<RouterContext{...renderProps}/>));
            } else {
                res.status(404).send('Not Found');
            }
        });
    }
}
