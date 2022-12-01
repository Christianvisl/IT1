// Lager 2 arrays, som brukes til framvisning av bilder (href-en til bilder av terninger)
const terninger = [
    "terning1.png",
    "terning2.png",
    "terning3.png",
    "terning4.png",
    "terning5.png",
    "terning6.png",
]

const redTerninger = [
    "redTerning1.png",
    "redTerning2.png",
    "redTerning3.png",
    "redTerning4.png",
    "redTerning5.png",
    "redTerning6.png",
]


// Får informasjon fra og til alle feltene i tabellen
let rad0 = document.getElementsByClassName("rad0");
let rad1 = document.getElementsByClassName("rad1");
let rad2 = document.getElementsByClassName("rad2");
let rad3 = document.getElementsByClassName("rad3");
let rad4 = document.getElementsByClassName("rad4");
let rad5 = document.getElementsByClassName("rad5");
let rad6 = document.getElementsByClassName("rad6");
let rad7 = document.getElementsByClassName("rad7");
let rad8 = document.getElementsByClassName("rad8");
let rad9 = document.getElementsByClassName("rad9");
let rad10 = document.getElementsByClassName("rad10");
let rad11 = document.getElementsByClassName("rad11");
let rad12 = document.getElementsByClassName("rad12");
let rad13 = document.getElementsByClassName("rad13");
let rad14 = document.getElementsByClassName("rad14");
let rad15 = document.getElementsByClassName("rad15");
let rad16 = document.getElementsByClassName("rad16");
let rad17 = document.getElementsByClassName("rad17");
let rad18 = document.getElementsByClassName("rad18");

let kolonne0;
let kolonne1 = document.getElementsByClassName("kolonne1");
let kolonne2 = document.getElementsByClassName("kolonne2");
let kolonne3 = document.getElementsByClassName("kolonne3");
let kolonne4 = document.getElementsByClassName("kolonne4");
let kolonne5 = document.getElementsByClassName("kolonne5");
let kolonne6 = document.getElementsByClassName("kolonne6");


// Maks antall kast er 3, og endres for hver gang en trykker på KastTerningene-knappen. Det samme er hvemSinTur.
let antallKast = 3;
let hvemSinTur = 1;


// Lager en array som brukes til all slags posisjonering senere
const radArray = [
    rad0,
    rad1,
    rad2,
    rad3,
    rad4,
    rad5,
    rad6,
    rad7,
    rad8,
    rad9,
    rad10,
    rad11,
    rad12,
    rad13,
    rad14,
    rad15,
    rad16,
    rad17,
    rad18
]
const kolonneArray = [
    kolonne0,
    kolonne1,
    kolonne2,
    kolonne3,
    kolonne4,
    kolonne5,
    kolonne6
]

// Lager en variabel for hver av de fem terningene, og angir dem verdien false, slik at funksjonen "kastTerningene()" vet om den skal kaste terningene på nytt eller ikke
var terning1Av = false;
var terning2Av = false;
var terning3Av = false;
var terning4Av = false;
var terning5Av = false;


// Tar vekk spillguiden som spilleren møter når nettsiden åpnes, og viser spillet
function skruAvGuide() {
    let skruAvG = document.getElementById("guideForSpillet");
    skruAvG.style.display = "none";
    let skruPaaHvorMangeDiv = document.getElementById("hvorMangeSpillereDiv");
    skruPaaHvorMangeDiv.style.display = "block";
}

function lagreAntallSpillere() {
    let skruPaaHvorMangeDiv = document.getElementById("hvorMangeSpillereDiv");
    skruPaaHvorMangeDiv.style.display = "none";
    let skrupaaSpillerNavn = document.getElementById("fyllInnNavn");
    skrupaaSpillerNavn.style.display = "block";

    let input6 = document.getElementById("personInput6");
    let input5 = document.getElementById("personInput5");
    let input4 = document.getElementById("personInput4");
    let input3 = document.getElementById("personInput3");
    let input2 = document.getElementById("personInput2");

    
    let antallSpillere = Number(document.getElementById("antallSpillereInput").value);
    
    if (antallSpillere == "") {
        antallSpillere = 6;
    }

    if (antallSpillere <= 5) {
        input6.style.display = "none";
        input6.innerHTML = "a";
    }
    if (antallSpillere <= 4) {
        input5.style.display = "none";
        input5.innerHTML = "a";
    }
    if (antallSpillere <= 3) {
        input4.style.display = "none";
        input4.innerHTML = "a";
    }
    if (antallSpillere <= 2) {
        input3.style.display = "none";
        input3.innerHTML = "a";
    }
    if (antallSpillere == 1) {
        input2.style.display = "none";
        input2.innerHTML = "a";
    }
}

function startSpillet() {
    let skrupaaSpillerNavn = document.getElementById("fyllInnNavn");
    skrupaaSpillerNavn.style.display = "none";
    let skruPaaSpill = document.getElementById("heleSiden");
    skruPaaSpill.style.display = "contents";

    radArray[0][1].innerHTML = document.getElementById("personInput1").value;
    radArray[0][2].innerHTML = document.getElementById("personInput2").value;
    radArray[0][3].innerHTML = document.getElementById("personInput3").value;
    radArray[0][4].innerHTML = document.getElementById("personInput4").value;
    radArray[0][5].innerHTML = document.getElementById("personInput5").value;
    radArray[0][6].innerHTML = document.getElementById("personInput6").value;

    let antallSpillere = Number(document.getElementById("antallSpillereInput").value);
    let radNummer = 0;

    if (antallSpillere == "") {
        antallSpillere = 6;
    }

    if (antallSpillere <= 5) {
        while (radNummer <= 18) {
            kolonneArray[6][radNummer].style.display = "none";
            radNummer++;
        }
        radArray[18][6].innerHTML = 1;
    }
    radNummer = 0;
    if (antallSpillere <= 4) {
        while (radNummer <= 18) {
            kolonneArray[5][radNummer].style.display = "none";
            radNummer++;
        }
        radArray[18][5].innerHTML = 1;
    }
    radNummer = 0;
    if (antallSpillere <= 3) {
        while (radNummer <= 18) {
            kolonneArray[4][radNummer].style.display = "none";
            radNummer++;
        }
        radArray[18][4].innerHTML = 1;
    }
    radNummer = 0;
    if (antallSpillere <= 2) {
        while (radNummer <= 18) {
            kolonneArray[3][radNummer].style.display = "none";
            radNummer++;
        }
        radArray[18][3].innerHTML = 1;
    }
    radNummer = 0;
    if (antallSpillere <= 1) {
        while (radNummer <= 18) {
            kolonneArray[2][radNummer].style.display = "none";
            radNummer++;
        }
        radArray[18][2].innerHTML = 1;
    }

    antallSpillere++;
    if (antallSpillere >= 8) {
        antallSpillere = 7;
    }
    document.querySelector(":root").style.setProperty("--antallKolonner", antallSpillere);
}


// Her kaster den alle terningene om de ikke er blitt trykket på
function kastTerningene() {
    if (antallKast > 0) {
        kastTerning1() + kastTerning2() + kastTerning3() + kastTerning4() + kastTerning5();
        antallKast = antallKast - 1;
        document.getElementById("kastTerningene").innerHTML = "Du har " + antallKast + " kast igjen";
    }
}

function resetTerningene() {
    terning1.src = terninger[document.getElementById("terning1index").innerHTML];
    terning2.src = terninger[document.getElementById("terning2index").innerHTML];
    terning3.src = terninger[document.getElementById("terning3index").innerHTML];
    terning4.src = terninger[document.getElementById("terning4index").innerHTML];
    terning5.src = terninger[document.getElementById("terning5index").innerHTML];
    antallKast = 3;
    terning1Av = false;
    terning2Av = false;
    terning3Av = false;
    terning4Av = false;
    terning5Av = false;
    document.getElementById("kastTerningene").innerHTML = "Kast terningene";
}

function regnUtHvemSinTur() {
    let antallSpillere = Number(document.getElementById("antallSpillereInput").value);

    if (hvemSinTur < antallSpillere) {
        hvemSinTur++;
    }
    else if (hvemSinTur == antallSpillere) {
        hvemSinTur = 1;
    }
}

// Denne funksjonen gjør slik at bildene blir vist, da de har "display: none;" i css-filen
function displayBilder() {
    let bildeStil1 = document.getElementById("terning1");
    bildeStil1.style.display = "block";
    let bildeStil2 = document.getElementById("terning2");
    bildeStil2.style.display = "block";
    let bildeStil3 = document.getElementById("terning3");
    bildeStil3.style.display = "block";
    let bildeStil4 = document.getElementById("terning4");
    bildeStil4.style.display = "block";
    let bildeStil5 = document.getElementById("terning5");
    bildeStil5.style.display = "block";
}

// De neste fem funksjonene sjekker om terningen er blitt lagret eller ikke, og kaster eventuet på nytt
function kastTerning1() {
    if (terning1Av == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        let bilde = randomTerning - 1;
        terning1.src = terninger[bilde];
        document.getElementById("terning1index").innerHTML = bilde;
    }
}

function kastTerning2() {
    if (terning2Av == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        let bilde = randomTerning - 1;
        terning2.src = terninger[bilde];
        document.getElementById("terning2index").innerHTML = bilde;
    }
}

function kastTerning3() {
    if (terning3Av == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        let bilde = randomTerning - 1;
        terning3.src = terninger[bilde];
        document.getElementById("terning3index").innerHTML = bilde;
    }
}

function kastTerning4() {
    if (terning4Av == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        let bilde = randomTerning - 1;
        terning4.src = terninger[bilde];
        document.getElementById("terning4index").innerHTML = bilde;
    }
}
function kastTerning5() {
    if (terning5Av == false) {
        let randomTerning = Math.ceil(Math.random() * 6);
        let bilde = randomTerning - 1;
        terning5.src = terninger[bilde];
        document.getElementById("terning5index").innerHTML = bilde;
    }
}


// De neste fem funksjonene lagrer terningene, slik at de ikke kastes på nytt. Kan også sette terninger tilbake i spill

function lagreTerning1() {
    if (antallKast <= 2) {
        let terningNummer = document.getElementById("terning1index").innerHTML;
        if (terning1Av == false) {
            terning1Av = true;
            terning1.src = redTerninger[terningNummer];
        }
        else {
            terning1Av = false;
            terning1.src = terninger[terningNummer];
        }
    }
}

function lagreTerning2() {
    if (antallKast <= 2) {
        let terningNummer = document.getElementById("terning2index").innerHTML;
        if (terning2Av == false) {
            terning2Av = true;
            terning2.src = redTerninger[terningNummer]
        }
        else {
            terning2Av = false;
            terning2.src = terninger[terningNummer]
        }
    }
}

function lagreTerning3() {
    if (antallKast <= 2) {
        let terningNummer = document.getElementById("terning3index").innerHTML;
        if (terning3Av == false) {
            terning3Av = true;
            terning3.src = redTerninger[terningNummer]
        }
        else {
            terning3Av = false;
            terning3.src = terninger[terningNummer]
        }
    }
}

function lagreTerning4() {
    if (antallKast <= 2) {
        let terningNummer = document.getElementById("terning4index").innerHTML;
        if (terning4Av == false) {
            terning4Av = true;
            terning4.src = redTerninger[terningNummer]
        }
        else {
            terning4Av = false;
            terning4.src = terninger[terningNummer]
        }
    }
}

function lagreTerning5() {
    if (antallKast <= 2) {
        let terningNummer = document.getElementById("terning5index").innerHTML;
        if (terning5Av == false) {
            terning5Av = true;
            terning5.src = redTerninger[terningNummer]
        }
        else {
            terning5Av = false;
            terning5.src = terninger[terningNummer]
        }
    }
}

function sjekk1Til6(nummer, person) {
    if (antallKast == 0 && hvemSinTur == person) {
        const terningene = [
            Number(document.getElementById("terning1index").innerHTML) + 1,
            Number(document.getElementById("terning2index").innerHTML) + 1,
            Number(document.getElementById("terning3index").innerHTML) + 1,
            Number(document.getElementById("terning4index").innerHTML) + 1,
            Number(document.getElementById("terning5index").innerHTML) + 1
        ]

        function sjekkAntall(array, value) {
            return array.filter((v) => (v == value)).length;
        }
        let antall = sjekkAntall(terningene, nummer);
        radArray[nummer][person].innerHTML = nummer * antall;

        resetTerningene();
        regnUtHvemSinTur();
        summer(person)
    }
}
function summer(person) {
    const score1Til6 = [
        Number(radArray[1][person].innerHTML),
        Number(radArray[2][person].innerHTML),
        Number(radArray[3][person].innerHTML),
        Number(radArray[4][person].innerHTML),
        Number(radArray[5][person].innerHTML),
        Number(radArray[6][person].innerHTML)
    ]
    let score1Til6sum = score1Til6[0] + score1Til6[1] + score1Til6[2] + score1Til6[3] + score1Til6[4] + score1Til6[5];
    if (score1Til6sum > 0) {
        if (score1Til6sum < 63) {
            radArray[7][person].innerHTML = score1Til6sum;
            radArray[8][person].innerHTML = 0;
        }
        else if (score1Til6sum >= 63) {
            radArray[7][person].innerHTML = score1Til6sum;
            radArray[8][person].innerHTML = 50;
        }
        resetTerningene();
    }
}



function sjekk1Par(person) {
    if (antallKast == 0 && hvemSinTur == person) {
        const terningene = [
            Number(document.getElementById("terning1index").innerHTML) + 1,
            Number(document.getElementById("terning2index").innerHTML) + 1,
            Number(document.getElementById("terning3index").innerHTML) + 1,
            Number(document.getElementById("terning4index").innerHTML) + 1,
            Number(document.getElementById("terning5index").innerHTML) + 1
        ]

        function sjekkAntall(array, value) {
            return array.filter((v) => (v == value)).length;
        }
        radArray[9][person].innerHTML = 0;

        let terningVerdi = 0;
        while (terningVerdi <= 6) {
            var antall = sjekkAntall(terningene, terningVerdi);
            if (antall >= 2) {
                radArray[9][person].innerHTML = terningVerdi * 2;
            }
            terningVerdi++;
        }
        resetTerningene();
        regnUtHvemSinTur();
        totalt(person);
    }
}

function sjekk2Par(person) {
    if (antallKast == 0 && hvemSinTur == person) {
        const terningene = [
            Number(document.getElementById("terning1index").innerHTML) + 1,
            Number(document.getElementById("terning2index").innerHTML) + 1,
            Number(document.getElementById("terning3index").innerHTML) + 1,
            Number(document.getElementById("terning4index").innerHTML) + 1,
            Number(document.getElementById("terning5index").innerHTML) + 1
        ]
        function sjekkAntall(array, value) {
            return array.filter((v) => (v == value)).length;
        }
        radArray[10][person].innerHTML = 0;

        let terningVerdi = 0;
        while (terningVerdi <= 6) {
            var antall = sjekkAntall(terningene, terningVerdi);
            if (antall >= 2) {
                var par1score = terningVerdi * 2;
                var terningNummerFor1Par = terningVerdi;
            }
            terningVerdi++;
        }

        let terningVerdi2 = 0;
        while (terningVerdi2 <= 6) {
            var antall = sjekkAntall(terningene, terningVerdi2);
            if (antall >= 2 && terningVerdi2 != terningNummerFor1Par) {
                var par2score = terningVerdi2 * 2;
                radArray[10][person].innerHTML = par1score + par2score;
            }
            terningVerdi2++;
        }
        resetTerningene();
        regnUtHvemSinTur();
        totalt(person);
    }
}


function sjekkLike(antallLikeSjekk, person) {
    if (antallKast == 0 && hvemSinTur == person) {
        const terningene = [
            Number(document.getElementById("terning1index").innerHTML) + 1,
            Number(document.getElementById("terning2index").innerHTML) + 1,
            Number(document.getElementById("terning3index").innerHTML) + 1,
            Number(document.getElementById("terning4index").innerHTML) + 1,
            Number(document.getElementById("terning5index").innerHTML) + 1
        ]

        function sjekkAntall(array, value) {
            return array.filter((v) => (v == value)).length;
        }
        radArray[antallLikeSjekk + 8][person].innerHTML = 0;

        let terningVerdi = 0;
        while (terningVerdi <= 6) {
            var antall = sjekkAntall(terningene, terningVerdi);
            if (antall >= antallLikeSjekk) {
                radArray[antallLikeSjekk + 8][person].innerHTML = terningVerdi * antallLikeSjekk;
            }
            terningVerdi++;
        }
        resetTerningene();
        regnUtHvemSinTur();
        totalt(person);
    }
}

function sjekkLitenStraight(person) {
    if (antallKast == 0 && hvemSinTur == person) {
        const terningene = [
            Number(document.getElementById("terning1index").innerHTML) + 1,
            Number(document.getElementById("terning2index").innerHTML) + 1,
            Number(document.getElementById("terning3index").innerHTML) + 1,
            Number(document.getElementById("terning4index").innerHTML) + 1,
            Number(document.getElementById("terning5index").innerHTML) + 1
        ]
        radArray[13][person].innerHTML = 0;

        if (terningene.includes(1) && terningene.includes(2) && terningene.includes(3) && terningene.includes(4) && terningene.includes(5)) {
            radArray[13][person].innerHTML = 15;
        }
        resetTerningene();
        regnUtHvemSinTur();
        totalt(person);
    }
}

function sjekkStorStraight(person) {
    if (antallKast == 0 && hvemSinTur == person) {
        const terningene = [
            Number(document.getElementById("terning1index").innerHTML) + 1,
            Number(document.getElementById("terning2index").innerHTML) + 1,
            Number(document.getElementById("terning3index").innerHTML) + 1,
            Number(document.getElementById("terning4index").innerHTML) + 1,
            Number(document.getElementById("terning5index").innerHTML) + 1
        ]
        radArray[14][person].innerHTML = 0;

        if (terningene.includes(2) && terningene.includes(3) && terningene.includes(4) && terningene.includes(5) && terningene.includes(6)) {
            radArray[14][person].innerHTML = 20;
        }
        resetTerningene();
        regnUtHvemSinTur();
        totalt(person);
    }
}

function sjekkHus(person) {
    if (antallKast == 0 && hvemSinTur == person) {
        const terningene = [
            Number(document.getElementById("terning1index").innerHTML) + 1,
            Number(document.getElementById("terning2index").innerHTML) + 1,
            Number(document.getElementById("terning3index").innerHTML) + 1,
            Number(document.getElementById("terning4index").innerHTML) + 1,
            Number(document.getElementById("terning5index").innerHTML) + 1
        ]
        function sjekkAntall(array, value) {
            return array.filter((v) => (v == value)).length;
        }
        radArray[15][person].innerHTML = 0;
        let terningVerdi3 = 0;

        while (terningVerdi3 <= 6) {
            var antall = sjekkAntall(terningene, terningVerdi3);
            if (antall == 3) {
                var like3score = terningVerdi3 * 3;
                var terningNummerFor3Like = terningVerdi3;
            }
            terningVerdi3++;
        }

        let terningVerdi2 = 0;
        while (terningVerdi2 <= 6) {
            var antall = sjekkAntall(terningene, terningVerdi2);
            if (antall == 2 && terningVerdi2 != terningNummerFor3Like) {
                var parScore = terningVerdi2 * 2;
                if ((like3score + parScore) < 1000) {
                    radArray[15][person].innerHTML = like3score + parScore;
                }
                else {
                    radArray[15][person].innerHTML = 0;
                }
            }
            terningVerdi2++;
        }
        resetTerningene();
        regnUtHvemSinTur();
        totalt(person);
    }
}

function sjekkSjanse(person) {
    if (antallKast == 0 && hvemSinTur == person) {
        const terningene = [
            Number(document.getElementById("terning1index").innerHTML) + 1,
            Number(document.getElementById("terning2index").innerHTML) + 1,
            Number(document.getElementById("terning3index").innerHTML) + 1,
            Number(document.getElementById("terning4index").innerHTML) + 1,
            Number(document.getElementById("terning5index").innerHTML) + 1
        ]
        radArray[16][person].innerHTML = terningene[0] + terningene[1] + terningene[2] + terningene[3] + terningene[4];

        resetTerningene();
        regnUtHvemSinTur();
        totalt(person);
    }
}

function sjekkYatzy(person) {
    if (antallKast == 0 && hvemSinTur == person) {
        const terningene = [
            Number(document.getElementById("terning1index").innerHTML) + 1,
            Number(document.getElementById("terning2index").innerHTML) + 1,
            Number(document.getElementById("terning3index").innerHTML) + 1,
            Number(document.getElementById("terning4index").innerHTML) + 1,
            Number(document.getElementById("terning5index").innerHTML) + 1
        ]

        function sjekkAntall(array, value) {
            return array.filter((v) => (v == value)).length;
        }
        radArray[17][person].innerHTML = 0;

        let terningVerdi = 0;
        while (terningVerdi <= 6) {
            var antall = sjekkAntall(terningene, terningVerdi);
            if (antall == 5) {
                radArray[17][person].innerHTML = 50;
            }
            terningVerdi++;
        }
        resetTerningene();
        regnUtHvemSinTur();
        totalt(person);
    }
}


function totalt(person) {
    const total = [
        Number(radArray[7][person].innerHTML),
        Number(radArray[8][person].innerHTML),
        Number(radArray[9][person].innerHTML),
        Number(radArray[10][person].innerHTML),
        Number(radArray[11][person].innerHTML),
        Number(radArray[12][person].innerHTML),
        Number(radArray[13][person].innerHTML),
        Number(radArray[14][person].innerHTML),
        Number(radArray[15][person].innerHTML),
        Number(radArray[16][person].innerHTML),
        Number(radArray[17][person].innerHTML),
    ]

    let totalScore = total[0] + total[1] + total[2] + total[3] + total[4] + total[5] + total[6] + total[7] + total[8] + total[9] + total[10];
    if (totalScore > 0) {
        radArray[18][person].innerHTML = totalScore;
        resetTerningene();
    }

    if (radArray[18][1].innerHTML > 0 && radArray[18][2].innerHTML > 0 && radArray[18][3].innerHTML > 0 && radArray[18][4].innerHTML > 0 && radArray[18][5].innerHTML > 0 && radArray[18][6].innerHTML > 0) {
        const totalScoreArray = [
            0,
            Number(radArray[18][1].innerHTML),
            Number(radArray[18][2].innerHTML),
            Number(radArray[18][3].innerHTML),
            Number(radArray[18][4].innerHTML),
            Number(radArray[18][5].innerHTML),
            Number(radArray[18][6].innerHTML)
        ]

        function maksFunksjon(arr) {
            return Math.max.apply(null, arr);
        }

        let vinnerScore = Number(maksFunksjon(totalScoreArray));
        let vinnerSpiller = totalScoreArray.indexOf(vinnerScore);
        let vinnerNavn = document.getElementsByClassName("personInput")[totalScoreArray.indexOf(vinnerScore) - 1].value;

        if (vinnerNavn == "") {
            vinnerNavn = "spiller " + vinnerSpiller + " (du glemte å skrive inn navnet)";
        }

        let vinnerTekst = document.getElementById("vinnerTekst");
        vinnerTekst.style.display = "block";
        document.getElementById("vinnerTekst").innerHTML = "Vinneren er " + vinnerNavn + ", med en score på " + vinnerScore;

        let konfettiBilde1 = document.getElementById("konfettiBilde1");
        let konfettiBilde2 = document.getElementById("konfettiBilde2");
        let konfettiBilde3 = document.getElementById("konfettiBilde3");

        konfettiBilde1.style.display = "block";
        konfettiBilde2.style.display = "block";
        konfettiBilde3.style.display = "block";
    }
}