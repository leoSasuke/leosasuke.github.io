const today=new Date();
console.log(today);

const dayNumber=today.getDay();
console.log(dayNumber);

const parametro = document.getElementById("message");

if(dayNumber == 5){
   parametro.classList.add("showme");
}else{
    parametro.classList.add("hideme");
}
