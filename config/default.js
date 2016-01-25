var Path = require("path");
var Fs = require("fs");

var internals = {};

// absolute paths
internals.rootDir = Path.resolve(__dirname, "..");
internals.viewsDir = Path.join(internals.rootDir, "lib/web/views");
internals.tilesDir = Path.join(internals.rootDir, "tiles");
//internals.bundles = JSON.parse(Fs.readFileSync(Path.join(internals.rootDir, "bundles.json"), "utf8"));

internals.defaultOptions = {

    host: "localhost",
    port: 5000,
    publicUri: "localhost",  // host
    publicPort: 5000,  // probably 80

    rootDir: internals.rootDir,
    viewsDir: internals.viewsDir,
    tilesDir: internals.tilesDir,
    //bundles: internals.bundles,
    
    hapi: {
        
        // documentation: https://github.com/hapijs/joi#validatevalue-schema-options-callback
        joi: {

            abortEarly: true,  // returns all the errors found (does not stop on the first error)
            stripUnknown: true,  // delete unknown keys; this means that when the handler executes, only the keys that are explicitely stated
            // in the schema will be present in request.payload and request.query 
            convert: true
    /*

            allowUnknown: false, // allows object to contain unknown keys; note that is stipUnknown option is used, this becomes obsolete (because all unknown keys will be removed before the check for unknown keys is done)

            convert: ...
            skipFunctions: ...
            stripUnknown: ...
            language: ...
            presence: ...
            context: ...
    */
        }

    },

};

module.exports = internals.defaultOptions;
