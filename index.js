const request = require('request'); 
var API_KEY = '5fa1e5948ead05d2b41ef481ceb634bf'; 
  
const forecast = function (latitude, longitude) { 
  
var url = `http://api.openweathermap.org/data/2.5/weather?`
            +`lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  
    request({ url: url, json: true }, function (error, response) { 
        if (error) { 
            console.log('Unable to connect to Forecast API'); 
        } 
          else { 
  
            console.log('It is currently '
                + response.body.main.temp
                + ' degrees out.'
            ); 
  
            console.log('The high today is '
                + response.body.main.temp_max 
                + ' with a low of '
                + response.body.main.temp_min
            ); 
  
            console.log('Humidity today is '
                + response.body.main.humidity
            ); 
        } 
    }) 
} 
  //東京
// var latitude = 35.676192; // Indore latitude 
// var longitude = 139.650311; // Indore longitude 
  
//  大阪
var latitude = 34.693725; // Indore latitude 
var longitude = 135.502254; // Indore longitude 
// Function call 
forecast(latitude, longitude); 