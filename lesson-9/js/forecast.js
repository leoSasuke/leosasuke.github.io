const mydate = new Date();
const y = mydate.getDay();

const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] ="Monday";
myweekday[2] = "Tuesday";
myweekday[3] ="Wednesday";
myweekday[4] = "Thursday";
myweekday[5] ="Friday";
myweekday[6] ="Saturday";

console.log(myweekday[2]);

//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5879400&appid=78b78816d97bf3ea58188b7f4b8332fb&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    /*document.getElementById('00').innerHTML=weatherInfo.weather[0].main;
    
    document.getElementById('01').innerHTML=weatherInfo.main.temp;
    document.getElementById('02').innerHTML=weatherInfo.wind.speed;
    document.getElementById('03').innerHTML=weatherInfo.main.humidity;

    /*const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/"+iconcode +".png";
    console.log("icon_path");

    document.getElementById('weather_icon').src = icon_path;*/


 }); //end of "then" fat arrow function