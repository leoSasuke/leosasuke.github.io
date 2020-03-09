//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?q=Preston,us&appid=78b78816d97bf3ea58188b7f4b8332fb&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('ceu').innerHTML=weathe[main];
    
    document.getElementById('temp').innerHTML=weatherInfo.main.temp;
    document.getElementById('speed').innerHTML=weatherInfo.wind.speed;
    document.getElementById('hum').innerHTML=weatherInfo.main.humidity;

    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/"+ +".png";
    console.log("icon_path");

    document.getElementById('weather_icon').src = icon_path;


 }); //end of "then" fat arrow function