function skruAvGuide(){
    let skruAvG = document.getElementById("guideForSpillet");
    skruAvG.style.display = "none";
    let skruPaaSpill = document.getElementById("heleSiden");
    skruPaaSpill.style.display = "contents";
}

const terninger = [
    "terninger1.jpg",
    "terninger2.jpg",
    "terninger3.jpg",
    "terninger4.jpg",
    "terninger5.jpg",
    "terninger6.jpg",
]
var terning1Av = false;
var terning2Av = false;
var terning3Av = false;
var terning4Av = false;
var terning5Av = false;

function kastTerningene() {
    return kastTerning1() + kastTerning2() + kastTerning3() + kastTerning4() + kastTerning5();
}

function kastTerning1() {
    if (terning1Av == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        let bilde = randomTerning - 1;
        terning1.src = terninger[bilde];
    }
}

function kastTerning2() {
    if (terning2Av == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        let bilde = randomTerning - 1;
        terning2.src = terninger[bilde];
    }
}

function kastTerning3() {
    if (terning3Av == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        let bilde = randomTerning - 1;
        terning3.src = terninger[bilde];
    }
}

function kastTerning4() {
    if (terning4Av == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        let bilde = randomTerning - 1;
        terning4.src = terninger[bilde];
    }
}
function kastTerning5() {
    if (terning5Av == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        let bilde = randomTerning - 1;
        terning5.src = terninger[bilde];
    }
}

function lagreTerning1() {
    var terningStil = document.getElementById("terning1");
    terningStil.style.border = "solid 3px black";
    terning1Av = true;
}

function lagreTerning2() {
    var terningStil = document.getElementById("terning2");
    terningStil.style.border = "solid 3px black";
    terning2Av = true;
}

function lagreTerning3() {
    var terningStil = document.getElementById("terning3");
    terningStil.style.border = "solid 3px black";
    terning3Av = true;
}

function lagreTerning4() {
    var terningStil = document.getElementById("terning4");
    terningStil.style.border = "solid 3px black";
    terning4Av = true;
}

function lagreTerning5() {
    var terningStil = document.getElementById("terning5");
    terningStil.style.border = "solid 3px black";
    terning5Av = true;
}



/*
for (let i = 0; i < 5; i++) { function terning() { return Math.ceil(Math.random() * 6); } + ", " ; } return
*/