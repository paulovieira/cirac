var Path = require("path");
var Config = require("config");
var Hoek = require("hoek");
var Utils = require("../common/utils");

var internals = {};

exports.register = function(server, options, next){

    // route for the homepage
    server.route({
        path: "/",
        method: "GET",
        config: {
            handler: function(request, reply) {

                return reply.view("home.html");
            }
        }
    });

    // route for the client app (static files: js, css, etc)
    server.route({
        path: "/cartografia-app/{anyPath*}",
        method: "GET",
        config: {
            handler: {
                directory: { 
                    path: Path.join(Config.get("rootDir"), "lib/web/client/cartografia-app") 
                }
            },
            cache: {
                privacy: "public",
                expiresIn: 3600000
            },
            cors: {
                methods: ["GET"]
            }
        }
    });

	// route for the client libraries (static files: css, js, etc)
    server.route({
        path: "/static/{anyPath*}",
        method: "GET",
        config: {
            handler: {
                directory: { 
                    path: Path.join(Config.get("rootDir"), "lib/web/client/static"),
                    index: false,
                    listing: false,
                    showHidden: false
                }
            },
            cache: {
                privacy: "public",
                expiresIn: 3600000
            },
            cors: {
                methods: ["GET"]
            }
        }
    });


	return next();
};

exports.register.attributes = {
    name: "cirac-web",
    dependencies: ["vision", "inert"]
};
