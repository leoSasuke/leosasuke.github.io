/*-----------NAV-----------------*/
function toggleMenu(){
    document.getElementById("prinav").classList.toggle("hide");
    
}
/*------------employess--------------*/
const api = 'https://sheet.best/api/sheets/ce3f0a76-b0ca-465f-8052-cd07c92b297c'

 fetch(api)
  .then((response) => response.json())
  .then((festa) => {
    console.log(festa);
    
for(i=0;i < festa.length;i++){
    let card = document.createElement('div');
    let image =document.createElement('img');
    let nome = document.createElement('h3');
    let exp = document.createElement('h3');
    let nivel = document.createElement('h3');
    let mail = document.createElement('h3');
    let vida = document.createElement('p'); 

    image.setAttribute('src', festa[i].photo,alt="pict");
    nome.textContent = 'Name: '+festa[i].name ;
    exp.textContent = 'Years of experience: '+festa[i].experience ;
    nivel.textContent = 'Certification Level: '+festa[i].certLevel;
    mail.textContent = 'Email: '+festa[i].email;
    vida.textContent = 'About me: '+festa[i].bio;
    
    card.appendChild(image);
    card.appendChild(nome);
    card.appendChild(exp);
    card.appendChild(nivel);
    card.appendChild(mail);
    card.appendChild(vida);

    document.querySelector('div.guides').appendChild(card);
}
  });
  /*-------weather API-------*/
  const urlapi = 'https://api.openweathermap.org/data/2.5/weather?q=riggins,us&appid=78b78816d97bf3ea58188b7f4b8332fb&units=imperial';

  fetch(urlapi)
   .then((response) => response.json())
   .then((idaho) => {
     console.log(idaho);
    
     let iconcode = idaho.weather[0].icon;
     let iconPath = "https://openweathermap.org/img/w/"+iconcode+".png";
     
     
     let image =document.createElement('img');
     image.setAttribute('src', iconPath,alt="");
    
     document.querySelector('div.weather').appendChild(image);

    document.getElementById('temp').innerHTML=idaho.main.temp;
    document.getElementById('desc').innerHTML=idaho.weather[0].description;
   
  
    });

