//Trykker på streger - kryds kommer frem
//document.getElementById("burgermenu").addEventListener("click", vismenu);
document.getElementById("burgermenu").onclick = vismenu;
function vismenu(){
    alert("vismenu");
    document.getElementById("burgermenu").style.display = "none";
    document.getElementById("kryds").style.display = "flex";
    document.getElementById("menupunkter").style.display = "block";
}


//Trykker på kryds - streger kommer frem
document.getElementById("kryds").addEventListener("click", offmenu);

function offmenu(){
    document.getElementById("kryds").style.display = "none";
    document.getElementById("burgermenu").style.display = "flex";
    document.getElementById("menupunkter").style.display = "none";
}
//Henter id'er fra HTML
const glas_01 = document.getElementById("glas_01");
const glas_02 = document.getElementById("glas_02");
const glas_03 = document.getElementById("glas_03");
const hoejrePil = document.getElementById("hoejre_pil");
const venstrePil = document.getElementById("venstre_pil");

//Arrayet
const karussel = [glas_01, glas_02, glas_03];

//Et billede bliver vist ad gangen
karussel[0].style.display = "block";
karussel[1].style.display = "none";
karussel[2].style.display = "none";

//Knapper
venstrePil.addEventListener("click", forrigeBillede);
hoejrePil.addEventListener("click", naesteBillede);

//Funktioner

function naesteBillede(){
    karussel[0].style.display = "none"; //Skjuler den viste
    karussel.push(karussel[0]); //Put den første ind til sidst i køen
    karussel.shift(); //Fjerner den første og skubber alle en ned
    karussel[0].style.display = "block"; //Vis den der er der nu først
}

function forrigeBillede(){
    karussel[0].style.display = "none";
    karussel.unshift(karussel[2]);
    karussel.pop();
    karussel[0].style.display = "block";
}







//Menupunkterne der bliver vist
/*function burger(){
    var links = document.getElementById("menupunkter");
    if(links.style.display === "block")
    {
        links.style.display = "none";
    } 
    else {
        links.style.display = "block";
    }
}*/

/*
function menupunkter(){
    var links = document.getElementById("links");
    Infinity(links.style.display === "block")
    {
        links.style.display = "none";
    } 
    else {
        links.style.display = "block";
    }
}*/

