const d = new Date();
const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] ='sunday'; 
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

const apiURL ='//api.openweathermap.org/data/2.5/forecast?id=524901&appid=78b78816d97bf3ea58188b7f4b8332fb&units=imperial';

fetch(apiURL)
.then((response) => response.json())
.then((weatherInfo) =>{
  Console.log(weatherInfo);
  document.getElementById('townName').textContent = weatherInfo.city.name;
  let mylist = weatherInfo.list;
   let forecastDayNumber = todayDayNumber;
   for(i=0;i < mylist.length;i++){
     let time = mylist[i].dt_txt;
     if(time.includes('21:00:00')){
        console.log('found an entry with 21:00:00 in the time,it was report'+i+'from the my list of 40');

        forecastDayNumber +=1;
        if(forecastDayNumber === 7){
          forecastDayNumber = 0}
        
          let theDayNumber = document.createElement('span');
        theDayNumber.textContent = weekday[forecastDayNumber];

        let theTemp = document.createElement('p');
        theTemp.textContent = weatherInfo.list[i].main.temp +"\xB0";

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = '//openweathermap.org/img/w/'+iconcode+'png';
        let theicon = document.createElement('img');
        theicon.src=iconPath;

        let theDay = document.createElement('div');
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theicon);

        document.getElementById('weatherforecast').appendChild(theDay);
     }
   }
});