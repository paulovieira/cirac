var Fs = require("fs");
var Json2xls = require('json2xls');

var data = Fs.readFileSync("lib/web/client/cartografia-app/cirac-layers.js", "utf8");
var index1 = data.indexOf("[");
var index2 = data.lastIndexOf("]");
//console.log(data.substring(index1, index2+1))
var json = JSON.parse(data.substring(index1, index2+1))
console.log(json.length);

var xls = Json2xls(json);
Fs.writeFileSync('data.xlsx', xls, 'binary');
