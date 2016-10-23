const https = require('https');
const http = require('http');

function printMessage (city, description, temp) {
  console.log("The weather in " + city + " is " + description + ". The temperature is " + temp + " Fahrenheit.")
}
function printError (error) {
  console.error(error.message);
}
function getWeather (city) {
  http.get("http://api.openweathermap.org/data/2.5/weather?q={" + city + "}&APPID=6ae939733005d26ea252d403832ee9e9", (response) =>
    var body = "";
    response.on('data', (d) => {
      body += d;
    });
    response.on("end", function() {
      try {
        jsonObj = JSON.parse(body);
        console.log(jsonObj.coord);
        printMessage(jsonObj.name, jsonObj.weather[0].description, jsonObj.main.temp);
      //Document not found
      } catch (err) {
        console.log("WHAA??? There has been an error retrieving the data. The reason is: '" + http.STATUS_CODES[response.statusCode] + "'.");
      }
    });
    //Connection Error
  }).on("error", printError);
}
module.exports.get = getWeather;
