//Lavet af Nikoline og Emma
//Burgermenu
//Trykker på streger - kryds kommer frem
document.getElementById("burgermenu").addEventListener("click", vismenu);
document.getElementById("burgermenu").onclick = vismenu;
function vismenu(){
    //alert("vismenu");
    document.getElementById("burgermenu").style.display = "none";
    document.getElementById("kryds").style.display = "flex";
    document.getElementById("menupunkter").style.display = "block";
}


//Trykker på kryds - streger kommer frem
document.getElementById("kryds").addEventListener("click", lukmenu);

function lukmenu(){
    document.getElementById("kryds").style.display = "none";
    document.getElementById("burgermenu").style.display = "flex";
    document.getElementById("menupunkter").style.display = "none";
}

//Billedekarussel
//Henter id'er fra HTML
const glas_01 = document.getElementById("glas_01");
const glas_02 = document.getElementById("glas_02");
const glas_03 = document.getElementById("glas_03");
const hoejrePil = document.getElementById("hoejre_pil");
const venstrePil = document.getElementById("venstre_pil");

//Arrayet
const karussel = [glas_01, glas_02, glas_03];

if (karussel[0] != null) {

    
    //Et billede bliver vist ad gangen
    karussel[0].style.display = "block";
    karussel[1].style.display = "none";
    karussel[2].style.display = "none";

    //Knapper
    venstrePil.addEventListener("click", forrigeBillede);
    hoejrePil.addEventListener("click", naesteBillede);
} //Lukkes her fordi funktionen ikke er blevet kaldt, det bliver den først når man klikker

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


//Pil til top funktion
//Henter id'et fra HTML
const tilTop = document.getElementById("pilTilTop");

//Den laver onscroll på hele vinduet
window.onscroll = function() {scrollfunction()};

//Definerer funktionen --> dette sker når man scroller
function scrollfunction(){
    if (document.documentElement.scrollTop > 20){
        tilTop.style.display = "block";
    } else {
        tilTop.style.display = "none"
    }
}

//Klikker på knappen
tilTop.onclick = function (){topFunction()}

//FOrtæller hvad der skal ske når jeg klikker på knappen
function topFunction(){
    document.documentElement.scrollTop = 0
}

//Kilde: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp (Senest besøgt d. 14/12-2023)







