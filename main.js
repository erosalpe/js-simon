const oreHtml = document.getElementById("ore");
const minutiHtml = document.getElementById("minuti");
const secondiHtml = document.getElementById("secondi");

const oreDomani = document.getElementById("oreDomani");
const minutiDomani = document.getElementById("minutiDomani");
const secondiDomani = document.getElementById("secondiDomani");



const a = setInterval(oreAttuali, 1000);

const b = setInterval(oreMancantiDomani, 1000);

function oreAttuali(){
    let d = new Date();
    oreHtml.innerHTML = d.getHours();
    minutiHtml.innerHTML = d.getMinutes();
    secondiHtml.innerHTML = d.getSeconds();
}

function oreMancantiDomani(){
    let d = new Date();
    oreDomani.innerHTML = (23 - d.getHours()) + 9;
    minutiDomani.innerHTML = (59 - d.getMinutes()) + 30;
    secondiDomani.innerHTML = 59 - d.getSeconds();
}


