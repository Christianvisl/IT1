
// Felles for alle oppgavene //

function stil() {
    var svar = document.getElementById("svar");
    svar.style.color = "#00aaff";
    svar.style.backgroundColor = "white";
    svar.style.padding = "10px";
    svar.style.fontWeight = "bold";
    svar.style.width = "fit-content";
    svar.style.borderRadius = "10px";
    svar.style.fontSize = "15px";
    svar.style.margin = "auto";
    svar.style.marginTop = "30px";
    svar.style.boxShadow = "0px 16px 32px 0px rgba(0, 0, 0, 0.5)";
}
function reset() {
    var svar = document.getElementById("svar");
    svar.style.backgroundColor = "transparent";
    svar.style.boxShadow = "none";

    document.getElementById("svar").innerHTML = "";
}



// Oppgave 1 //

function tilfeldigHilsen() {
    const text = ["Hei", "Hallo", "God dag"];
    let random = Math.floor(Math.random() * 3);
    document.getElementById("svar").innerHTML = text[random];
}


// Oppgave 2 //

function oppgave2() {
    let tall = Number(document.getElementById("inputOppgave2").value);

    function kvadrat(a) {
        return a ** 2;
    }
    document.getElementById("svar").innerHTML = kvadrat(tall);
}


// Oppgave 3 //

function oppgave3() {
    let talla = Number(document.getElementById("oppgave3inputa").value);
    let tallb = Number(document.getElementById("oppgave3inputb").value);

    function sum(a, b) {
        return a + b
    }
    document.getElementById("svar").innerHTML = sum(talla, tallb);
}


// Oppgave 4 //

function oppgave4() {
    function skrivUtGangetabell(tall) {
        let tekst = "";
        let tallet = 0;

        for (let i = 0; i < 10; i++) {
            tallet += tall;
            tekst += ", " + tallet;
        }

        return "Gangetabellen for " + tall + " opp til " + 10 * tall + " er" + tekst;
    }
    let a = Number(document.getElementById("oppgave4input").value);
    document.getElementById("svar").innerHTML = skrivUtGangetabell(a);
}


// Oppgave 5 og 6 //

function oppgave5() {
    function arealRektangel(lengde, bredde) {

        if (lengde < 1 || bredde < 1) {
            return "ERROR";
        }
        else if (lengde - lengde == 0 && bredde - bredde == 0) {
            return "Arealet til rektangelet er: " + (lengde * bredde);
        }
        else {
            return "ERROR";
        }
    }
    let a = document.getElementById("oppgave5inputlengde").value;
    let b = document.getElementById("oppgave5inputbredde").value;
    document.getElementById("svar").innerHTML = arealRektangel(a, b);
}