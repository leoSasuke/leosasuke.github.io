//ADD the key and change units to imperial
const apiURLweather = "//api.openweathermap.org/data/2.5/weather?q=preston,us&appid=78b78816d97bf3ea58188b7f4b8332fb&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURLweather)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.
    //console.log(weatherinfo);
    
    document.getElementById('sky').innerHTML=weatherinfo.weather[0].main;
    
    document.getElementById('temp').innerHTML=weatherinfo.main.temp;
    document.getElementById('speed').innerHTML=weatherinfo.wind.speed;
    document.getElementById('hum').innerHTML=weatherinfo.main.humidity;

   //document.getElementById('first').innerHTML=weatherinfo.events[0].events[0];
   //document.getElementById('first').innerHTML=weatherinfo.events[1];
   //document.getElementById('first').innerHTML=weatherinfo.events[2];
    
 }); //end of "then" fat arrow function

 const api = '//byui-cit230.github.io/weather/data/towndata.json'

 fetch(api)
  .then((response) => response.json())
  .then((festa) => {
    console.log(festa);

    document.getElementById('first').innerHTML = festa.towns[0].events[0];
    document.getElementById('second').innerHTML = festa.towns[0].events[1];
    document.getElementById('third').innerHTML = festa.towns[0].events[2];
  });
