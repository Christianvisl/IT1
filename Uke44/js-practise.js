var mattestykket = String(prompt("Skriv mattestykket"));
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
    document.write(`${tall1} ${operator} ${tall2} = ${resultat}`);
}
else if (mattestykket.indexOf("-") > 0) {
    operator = mattestykket.indexOf("-");
    tall1 = Number(mattestykket.substring(0, operator));
    tall2 = Number(mattestykket.substring(operator + 1));
    resultat = tall1 - tall2;
    tall1 = String(tall1);
    tall2 = String(tall2);
    operator = mattestykket[mattestykket.indexOf("-")];
    document.write(`${tall1} ${operator} ${tall2} = ${resultat}`);
}
else if (mattestykket.indexOf("*") > 0) {
    operator = mattestykket.indexOf("*");
    tall1 = Number(mattestykket.substring(0, operator));
    tall2 = Number(mattestykket.substring(operator + 1));
    resultat = tall1 * tall2;
    tall1 = String(tall1);
    tall2 = String(tall2);
    operator = mattestykket[mattestykket.indexOf("*")];
    document.write(`${tall1} ${operator} ${tall2} = ${resultat}`);
}
else if (mattestykket.indexOf("/") > 0) {
    operator = mattestykket.indexOf("/");
    tall1 = Number(mattestykket.substring(0, operator));
    tall2 = Number(mattestykket.substring(operator + 1));
    resultat = tall1 / tall2;
    tall1 = String(tall1);
    tall2 = String(tall2);
    operator = mattestykket[mattestykket.indexOf("/")];
    document.write(`${tall1} ${operator} ${tall2} = ${resultat}`);
}
else if (mattestykket.indexOf("^") > 0) {
    operator = mattestykket.indexOf("^");
    tall1 = Number(mattestykket.substring(0, operator));
    tall2 = Number(mattestykket.substring(operator + 1));
    resultat = tall1 ** tall2;
    tall1 = String(tall1);
    tall2 = String(tall2); 
    operator = mattestykket[mattestykket.indexOf("^")];
    document.write(`${tall1} ${operator} ${tall2} = ${resultat}`);
}
else {
    document.write("ERROR")
}  