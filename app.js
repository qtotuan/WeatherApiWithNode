var weather = require("./weather.js");
var city = process.argv.slice(2);
weather.get(city);
