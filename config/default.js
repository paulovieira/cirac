var Path = require("path");
var Fs = require("fs");

var internals = {};
internals.tilesDir = Path.join(__dirname, "..", "tiles");

//internals.bundles  = JSON.parse(Fs.readFileSync(Path.join(internals.rootDir, "bundles.json"), "utf8"));

internals.defaultOptions = {

    host: "localhost",
    port: 5000,
    publicUri: "localhost",  // host
    publicPort: 5000,  // probably 80

    rootDir: Path.join(__dirname, ".."),
    viewsDir: Path.join(__dirname, "..", "lib/web/views"),
    tilesDir: internals.tilesDir,
    //bundles: internals.bundles,
/*    
    hapi: {
        
        // documentation: https://github.com/hapijs/joi#validatevalue-schema-options-callback
        joi: {

            abortEarly: true,  // returns all the errors found (does not stop on the first error)
            stripUnknown: true,  // delete unknown keys; this means that when the handler executes, only the keys that are explicitely stated
            // in the schema will be present in request.payload and request.query 
            convert: true
        }

    },
*/
};

module.exports = internals.defaultOptions;
