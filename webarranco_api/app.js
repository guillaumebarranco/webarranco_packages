"use strict";

const
	express = require('express'),
	cookieParser = require('cookie-parser'),
	cors = require('cors'),
	bodyParser = require('body-parser')
;

const elasticsearch = require('elasticsearch');
global.elasticClient = new elasticsearch.Client({
    host: 'localhost:9200'
});

global.port = 1208;

global.hasInternet = true;

process.argv.forEach(function (val) {
    if(val.indexOf("--nointernet") > -1) global.hasInternet = false
});

var app = express();

class AppFunctions {

	constructor() {
    }

	enableSessions() {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(cookieParser());
    }

    useCors() {
        app.use(cors());
    }

	enableProxy() {
        app.enable('trust proxy');
    }

	handle404() {
        app.use((req, res) => {
            res.status(405).send({
                message: "This route is not allowed !"
            });
        });
    }
}

const myApp = new AppFunctions();
myApp.enableSessions();
myApp.useCors();
myApp.enableProxy();
// myApp.handle404();

class Routes {

    constructor() {
        const getRoutes = this.getRoutes(),
            setRoutes = this.setRoutes(getRoutes)
        ;

        for(let route in setRoutes) {
            if(setRoutes.hasOwnProperty(route)) {
                this.useRoutes(setRoutes[route]);
            }
        }
    }

    getRoutes() {

        return {

            // Mangas

            route              :       require('./app/routes/route')
        };
    }

    setRoutes(getRoutes) {
        return {

            Routes: {
                '/route'                :       getRoutes.route,
            }
        };
    }

    useRoutes(routes) {
        for (let route in routes) {
            if(routes.hasOwnProperty(route)) app.use(route, routes[route]);
        }
    }
}

new Routes();

var server = require('http').Server(app);

server.listen(global.port, function() {
	console.log('server started with hasInternet : ' + global.hasInternet);
});
