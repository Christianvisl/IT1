const terninger = [
    "terninger1.jpg",
    "terninger2.jpg",
    "terninger3.jpg",
    "terninger4.jpg",
    "terninger5.jpg",
    "terninger6.jpg",
]
function kastTerningene() {
    return kastTerning1() + kastTerning2() + kastTerning3() + kastTerning4() + kastTerning5() + kastTerning6();
}

function kastTerning1() {
    let randomTerning = Math.ceil(Math.random() * 6);
    let bilde = randomTerning - 1;
    terning1.src = terninger[bilde];
}

function kastTerning2() {
    let randomTerning = Math.ceil(Math.random() * 6);
    let bilde = randomTerning - 1;
    terning2.src = terninger[bilde];
}

function kastTerning3() {
    let randomTerning = Math.ceil(Math.random() * 6);
    let bilde = randomTerning - 1;
    terning3.src = terninger[bilde];
}

function kastTerning4() {
    let randomTerning = Math.ceil(Math.random() * 6);
    let bilde = randomTerning - 1;
    terning4.src = terninger[bilde];
}

function kastTerning5() {
    let randomTerning = Math.ceil(Math.random() * 6);
    let bilde = randomTerning - 1;
    terning5.src = terninger[bilde];
}

function kastTerning6() {
    let randomTerning = Math.ceil(Math.random() * 6);
    let bilde = randomTerning - 1;
    terning6.src = terninger[bilde];
}




/*
for (let i = 0; i < 5; i++) { function terning() { return Math.ceil(Math.random() * 6); } + ", " ; } return
*/