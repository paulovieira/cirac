//var Promise = require("bluebird");
var Fs = require("fs");
var Path = require("path");
var Glob = require("glob");
var ReadMultipleFiles = require("read-multiple-files");

//var filesPaths = Glob.sync("tiles/cirac*.export");
var filesPaths = Glob.sync("/home/pvieira/clima-app/clima-acores/tilemill-files/project/cirac*/project.mml");

var tileJsons = [];

ReadMultipleFiles(filesPaths, function(err, files){

	if(err){
		throw new Error("error reading files")
	}

	files.forEach(function(file, i){

		var tileJson = {};
		//var mml = (JSON.parse(file.toString())).from.mml;
		var mml = JSON.parse(file.toString());

		//var filename = Path.basename(filesPaths[i], ".export");
		var filename = filesPaths[i].split("/").splice(-2, 1).pop();

		// reuse these properties from the mml file

	    tileJson["bounds"] = mml["bounds"];
	    tileJson["center"] = mml["center"];
	    tileJson["minzoom"] = mml["minzoom"];
	    tileJson["maxzoom"] = mml["maxzoom"];
	    tileJson["name"] = mml["name"];
	    tileJson["description"] = mml["description"];
	    tileJson["legend"] = mml["legend"];

	    // ad-hoc properties

	    tileJson["id"] = filename;
		tileJson["template"] = mml["interactivity"]["template_teaser"];
		tileJson["tiles"] = ["/tiles/" + filename + "/{z}/{x}/{y}.png"];
		tileJson["grids"] = ["/tiles/" + filename + "/{z}/{x}/{y}.grid.json"];

		if(filename.indexOf("cirac_vul") !==-1 || filename.indexOf("cirac-vul") !==-1){
			tileJson["isCirac"] = true;	
		}
		else if(filename.indexOf("_t500") !== -1 || filename.indexOf("_t50") !== -1 || filename.indexOf("_t100") !== -1){
			tileJson["isFlood"] = true;	
			tileJson["zIndex"] = 7;	

		}
		else if(filename.indexOf("cirac_risk") !==-1){
			tileJson["isRisk"] = true;	
			tileJson["zIndex"] = 7;	
		}
		else{
			throw new Error("filename: " + filename);
		}


	    

		tileJsons.push(tileJson);
	});

	var output = "Cirac.layers = " + JSON.stringify(tileJsons, null, 4) + ";\n";

	Fs.writeFile("./lib/web/client/cartografia-app/cirac-layers_pp_sf.js", output, function(err){

		if(err){
			throw err;
		}

		console.log("all done!");
	});
});
