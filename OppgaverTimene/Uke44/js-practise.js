input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("knapp").click();
    }
});

function svar() {
    var svar = document.getElementById("resultatet");
    svar.style.color = "#00aaff";
    svar.style.backgroundColor = "white";
    svar.style.padding = "10px";
    svar.style.fontWeight = "bold";
    svar.style.width = "fit-content";
    svar.style.borderRadius = "10px";
    svar.style.fontSize = "15px";
    svar.style.margin = "auto";
    svar.style.width = "fit-content";
    svar.style.minWidth = "100px";
    svar.style.textAlign = "center";
    svar.style.marginTop = "20px";
}

function regnUt() {
    var mattestykket = document.getElementById("input").value;

    var resultat;
    var tall1;
    var tall2;
    var operator;

    if (mattestykket.indexOf("+") > 0) {
        operator = mattestykket.indexOf("+");
        tall1 = Number(mattestykket.substring(0, operator));
        tall2 = Number(mattestykket.substring(operator + 1));
        resultat = tall1 + tall2;
        tall1 = String(tall1);
        tall2 = String(tall2);
        operator = mattestykket[mattestykket.indexOf("+")];
    }
    else if (mattestykket.indexOf("-") > 0) {
        operator = mattestykket.indexOf("-");
        tall1 = Number(mattestykket.substring(0, operator));
        tall2 = Number(mattestykket.substring(operator + 1));
        resultat = tall1 - tall2;
        tall1 = String(tall1);
        tall2 = String(tall2);
        operator = mattestykket[mattestykket.indexOf("-")];
    }
    else if (mattestykket.indexOf("*") > 0) {
        operator = mattestykket.indexOf("*");
        tall1 = Number(mattestykket.substring(0, operator));
        tall2 = Number(mattestykket.substring(operator + 1));
        resultat = tall1 * tall2;
        tall1 = String(tall1);
        tall2 = String(tall2);
        operator = mattestykket[mattestykket.indexOf("*")];
    }
    else if (mattestykket.indexOf("/") > 0) {
        operator = mattestykket.indexOf("/");
        tall1 = Number(mattestykket.substring(0, operator));
        tall2 = Number(mattestykket.substring(operator + 1));
        resultat = tall1 / tall2;
        tall1 = String(tall1);
        tall2 = String(tall2);
        operator = mattestykket[mattestykket.indexOf("/")];
    }
    else if (mattestykket.indexOf("^") > 0) {
        operator = mattestykket.indexOf("^");
        tall1 = Number(mattestykket.substring(0, operator));
        tall2 = Number(mattestykket.substring(operator + 1));
        resultat = tall1 ** tall2;
        tall1 = String(tall1);
        tall2 = String(tall2);
        operator = mattestykket[mattestykket.indexOf("^")];
    }
    else {
        document.getElementById("resultatet").innerHTML = "ERROR";
    }
    document.getElementById("resultatet").innerHTML = resultat;

}