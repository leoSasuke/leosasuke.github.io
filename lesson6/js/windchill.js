const hot = parseFloat(document.getElementById('temp').textContent);
const faster = parseFloat(document.getElementById('speed').textContent);

let f = 35.74+(0.6215*hot)-(35.75*Math.pow(fater,0.16))+0.4275*hot*Math.pow(faster,0.16);
let windchill = Math.round(f);
if (hot<=50 && speed > 3){
    document.getElementById('chill') = windchill;
}else{
    document.getElementById('chill') = "not Today"
}

