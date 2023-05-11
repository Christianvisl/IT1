let kortNavn = document.getElementById("kort-navn");
let kortKjonn = document.getElementById("kort-kjonn");
let kortStilling = document.getElementById("kort-stilling");
let kortAdresse = document.getElementById("kort-adresse");
let kortTelefonnummer = document.getElementById("kort-telefonnummer");
let kortEmail = document.getElementById("kort-email");
let kortDato = document.getElementById("kort-dato");
let kortBilde = document.getElementById("bildeBlokk");

let inpFilNavn = document.getElementById("bildeInp");
inpFilNavn.addEventListener("change", velgFil)

let kort = document.getElementById("kort");


// Hver gang en endring blir gjort i en av inputene, blir tekstboksen i kortet endret til same verdi
// denne kjøres med en variabel som tilsvarer hvilken input som har blitt endret
function oppdater(element) {
    if (element == 'stil') {
        kort.style.backgroundColor = document.getElementById("bakgrunnsfargeInp").value;
        kort.style.color = document.getElementById("tekstfargeInp").value;
        kort.style.borderColor = document.getElementById("kantfargeInp").value;
        kort.style.borderWidth = "5px";
        kort.style.borderStyle = document.getElementById("kanttype" + displayRadioValue()).value;
    }
    else {
        document.getElementById("kort-" + element).innerHTML = document.getElementById(element + "Inp").value;
    }
}

// Kjøres når fil-inputen detekterer en endring, "change"
function velgFil() {
    var aktueltFilNavn = URL.createObjectURL(inpFilNavn.files[0]);
    bildeBlokk.src = aktueltFilNavn;
}

// For å hente ut hvilket svaralternativ i radio-inputen som er aktivert, trengs denne funksjonen
function displayRadioValue() {
    var element = document.getElementsByName('kanttype');

    for (i = 0; i < element.length; i++) {
        if (element[i].checked) {
            return i + 1;
        }
    }
}

// Skrur på dramodus for alle tekstbokser
draModus(document.getElementById("kort-navn"));
draModus(document.getElementById("kort-kjonn"));
draModus(document.getElementById("kort-stilling"));
draModus(document.getElementById("kort-adresse"));
draModus(document.getElementById("kort-telefonnummer"));
draModus(document.getElementById("kort-email"));
draModus(document.getElementById("kort-dato"));
draModus(document.getElementById("bildeBlokk"));


function draModus(elementet) {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;

    elementet.onmousedown = startDraModus;

    // Funksjonen henter klientens posisjon
    function startDraModus(event) {
        event.preventDefault();
        pos3 = event.clientX;
        pos4 = event.clientY;
        document.onmouseup = draModusAv;
        document.onmousemove = draElementet;
    }

    // Klienten kan med denne funksjonen flytte hver tekstboks
    // Den nye posisjonen blir da lagret som den gamle posisjonen
    function draElementet(event) {
        event.preventDefault();
        pos1 = pos3 - event.clientX;
        pos2 = pos4 - event.clientY;
        pos3 = event.clientX;
        pos4 = event.clientY;
        elementet.style.top = (elementet.offsetTop - pos2) + "px";
        elementet.style.left = (elementet.offsetLeft - pos1) + "px";
    }

    // Modusen skrus av når musen slippes
    function draModusAv() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}