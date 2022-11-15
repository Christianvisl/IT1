function svar() {
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

function tilfeldigHilsen() {
    const text = ["Hei", "Hallo", "God dag"];
    let random = Math.floor(Math.random() * 3);
    document.getElementById("svar").innerHTML = text[random];
}

function oppgave2() {
    let tall = Number(document.getElementById("input2").value);

    function kvadrat(a) {
        return a ** 2;
    }
    if (tall != 0) {
        document.getElementById("svar").innerHTML = kvadrat(tall);
    }
    else {
        document.getElementById("svar").innerHTML = "Du kan ikke ta kvardratet av 0";
    }
}
