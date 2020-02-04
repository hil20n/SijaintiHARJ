function starttaa()
{
    var nappula = document.createElement("button"); //luodaan muuttuja nappulabutton
    nappula.innerHTML = "näytä sijainti";           //buttonissa lukee näytä sijainti
    document.body.appendChild(nappula);             //lisätään sivulle button näytä sijainti
    nappula.addEventListener("click", naytaSijainti);
    console.log(navigator.geolocation);
    if(navigator.geolocation)       //jos navigator sallitaan eli on true
    {
        navigator.geolocation.getCurrentPosition(function(position) //haetaan sijainti
        {
            latitude = position.coords.latitude;        //tallennetaan leveysarvo latitude muuttujaan
            longitude = position.coords.longitude;      //tallennetaan pituusarvo longitude muuttujaan
        });     
    }
    else
    {
        alert("Geolation ei ole tuettu"); //jos ei sallittu tulee tämä teksti
    }
}

function naytaSijainti()  //luodaan functio naytaSijainti leveys- ja pituusarvot eri tavoilla sivulle
{
    var leveysHeader = document.createElement('h3'); //muuttuja leveysHeader luodaan otsikoksi h3 koolla
    leveysHeader.innerHTML = "Leveysasteesi on " + latitude; // leveysHeaderin teksti
    document.body.appendChild(leveysHeader);  //body, jotta sivusto tietää mihin kohtaan laittaa tekstin(document koko paketti)
                                            //appendChild asettaa tekstin sivulle
    var pituusHeader = document.createElement('h3');
    pituusHeader.innerHTML = "Pituusasteesi on " + longitude;
    document.body.appendChild(pituusHeader);

    /*alert("Koordinaattisi ovat " + latitude + " leveysastetta ja " + longitude + " pituusastetta");
    window.location.href = "https://maps.google.com/?q="+latitude+","+longitude;*/ //googlemaps sivulta etsii sijaintisi
}
window.addEventListener("load", starttaa); //kuuntelee, koska ladataan starttaa functio
console.log("HALOO");