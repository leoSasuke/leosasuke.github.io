//ADD the key and change units to imperial
const apiURLweather = "//api.openweathermap.org/data/2.5/weather?q=preston,us&appid=78b78816d97bf3ea58188b7f4b8332fb&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURLweather)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherinfo);
    
    document.getElementById('sky').innerHTML=weatherinfo.weather[0].main;
    document.getElementById('temp').innerHTML=weatherinfo.main.temp_max;
    document.getElementById('speed').innerHTML=weatherinfo.wind.speed;
    document.getElementById('hum').innerHTML=weatherinfo.main.humidity;

    let f = 35.74 + (0.6215*t.innerHTML) - 35.75*Math.pow(s.innerHTML, 0.16) + (0.4275*t.innerHTML*Math.pow(s.innerHTML, 0.16));
    /*const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/"+iconcode +".png";
    console.log("icon_path");

    document.getElementById('weather_icon').src = icon_path;*/


 }); //end of "then" fat arrow function