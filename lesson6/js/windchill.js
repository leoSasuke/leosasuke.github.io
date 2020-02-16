const hot = parseFloat(document.getElementById("temp").textContent);
const faster = parseFloat(document.getElementById('speed').textContent);


let f = 35.74+(0.6215*hot)-(35.75*Math.pow(faster,0.16))+0.4275*hot*Math.pow(faster,0.16);
let windchill = Math.round(f);

if(hot <= 50 && faster >3){
document.getElementById('chill').innerHTML = windchill;
}else{
    document.getElementById('chill').innerHTML = 'N/A'
}