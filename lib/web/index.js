var Path = require("path");
var Fs = require("fs");
var Config = require("config");
var Nunjucks = require("hapi-nunjucks");
//var Utils = require("../common/utils");


var internals = {};

exports.register = function(server, options, next){

    var pluginName = exports.register.attributes.name;

    // configure nunjucks
    var env = Nunjucks.configure(Path.join(__dirname, "views"), { 
        autoescape: false,
        watch: false,
        noCache: process.env.NODE_ENV === "production" ? true : false,
        pluginName: pluginName,
        // throwOnUndefined: false,
    });

    internals.addNunjucksGlobals(env);

    // expose the Environment object to the outside
    server.expose("env", env);

    // configure a view's manager using the nunjucks lib
    server.views({
        path: Path.join(__dirname, "views"),
        allowAbsolutePaths: true,
        engines: {
            html: Nunjucks
            // html: {
            //     compile: Nunjucks.getCompile(env)
            // }
        },
        compileOptions: {
            pluginName: pluginName
        }
    });


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

internals.addNunjucksGlobals = function(env){

    var bundles  = JSON.parse(Fs.readFileSync(Path.join(Config.get("rootDir"), "bundles.json"), "utf8"));
    env.addGlobal("NODE_ENV", process.env.NODE_ENV);
    env.addGlobal("bundles", bundles);
};


exports.register.attributes = {
    name: Path.parse(__dirname).name, 
    dependencies: ["vision", "inert"]
};
