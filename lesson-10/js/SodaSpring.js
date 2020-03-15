//ADD the key and change units to imperial
const apiURLweather = "//api.openweathermap.org/data/2.5/weather?q=sodasprings,us&appid=78b78816d97bf3ea58188b7f4b8332fb&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURLweather)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherinfo);
    
    document.getElementById('sky').innerHTML=weatherinfo.weather[0].main;
    
    document.getElementById('temp').innerHTML=weatherinfo.main.temp;
    document.getElementById('speed').innerHTML=weatherinfo.wind.speed;
    document.getElementById('hum').innerHTML=weatherinfo.main.humidity;

    /*const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/"+iconcode +".png";
    console.log("icon_path");

    document.getElementById('weather_icon').src = icon_path;*/


 }); //end of "then" fat arrow function